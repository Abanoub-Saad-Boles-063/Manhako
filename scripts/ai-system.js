// Manhagko AI System - Smart API Management
// Version: 3.0.0 (Stable)

const AI_CONFIG = {
    // Primary API Keys (3 active keys for rotation)
    apiKeys: [
        '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', // Manhagko Primary
        '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', // Key 2
        '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'  // Key 3
    ],
    
    // Backup API Keys (used only if all primary keys fail)
    backupKeys: [
        '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'
    ],
    
    // API Endpoint
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    
    // Optimized models list (prioritized by reliability)
    models: [
        'google/gemini-2.0-flash-exp:free',              // Most reliable with vision
        'mistralai/mistral-small-3.1-24b-instruct:free', // Fast and reliable
        'deepseek/deepseek-v3-base:free',                // Good fallback
        'nvidia/llama-3.1-nemotron-nano-8b-v1:free'      // Backup model
    ],
    
    // Rate limiting configuration
    maxRequestsPerMinute: 15,
    maxRequestsPerHour: 80,
    
    // Request timeout (seconds)
    timeout: 20,
    
    // Retry configuration
    maxRetries: 2,
    retryDelay: 1000,
    
    // Status tracking
    lastRequestTime: 0,
    requestCount: 0,
    resetTime: 0
};

// API Key Manager
class APIKeyManager {
    constructor() {
        this.keys = [...AI_CONFIG.apiKeys];
        this.backupKeys = [...AI_CONFIG.backupKeys];
        this.keyStats = {};
        this.availableKeys = new Set(this.keys);
        this.failedKeys = new Set();
        this.keyRotationIndex = 0;
        this.storageKey = 'manhagko_api_stats';
        
        this.loadStats();
        this.setupAutoReset();
    }

    loadStats() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved) {
                const data = JSON.parse(saved);
                this.keyStats = data.keyStats || {};
                this.failedKeys = new Set(data.failedKeys || []);
                
                // Clean old stats (older than 24 hours)
                const now = Date.now();
                for (const key in this.keyStats) {
                    if (now - this.keyStats[key].lastUsed > 24 * 60 * 60 * 1000) {
                        delete this.keyStats[key];
                    }
                }
            }
        } catch (e) {
            console.warn('Failed to load API stats:', e);
        }
    }

    saveStats() {
        try {
            const data = {
                keyStats: this.keyStats,
                failedKeys: [...this.failedKeys],
                timestamp: Date.now()
            };
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save API stats:', e);
        }
    }

    getKey() {
        // Remove failed keys from available pool
        const currentAvailable = [...this.availableKeys].filter(key => 
            !this.failedKeys.has(key)
        );

        if (currentAvailable.length === 0) {
            // If all primary keys failed, try backup keys
            if (this.backupKeys.length > 0) {
                const backupKey = this.backupKeys[0];
                console.log('Using backup key');
                return backupKey;
            }
            
            // If no keys available, reset failed keys
            console.warn('No available keys, resetting failed keys');
            this.failedKeys.clear();
            return this.keys[0];
        }

        // Get least recently used available key
        const sortedKeys = currentAvailable.sort((a, b) => {
            const aStat = this.keyStats[a] || { lastUsed: 0, successRate: 100 };
            const bStat = this.keyStats[b] || { lastUsed: 0, successRate: 100 };
            return aStat.lastUsed - bStat.lastUsed;
        });

        return sortedKeys[0];
    }

    recordSuccess(apiKey) {
        const keyId = apiKey.slice(-8);
        if (!this.keyStats[keyId]) {
            this.keyStats[keyId] = { total: 0, success: 0, lastUsed: 0, successRate: 100 };
        }
        
        this.keyStats[keyId].total++;
        this.keyStats[keyId].success++;
        this.keyStats[keyId].lastUsed = Date.now();
        this.keyStats[keyId].successRate = 
            (this.keyStats[keyId].success / this.keyStats[keyId].total) * 100;
        
        // Remove from failed keys if present
        this.failedKeys.delete(apiKey);
        
        this.saveStats();
    }

    recordFailure(apiKey) {
        const keyId = apiKey.slice(-8);
        if (!this.keyStats[keyId]) {
            this.keyStats[keyId] = { total: 0, success: 0, lastUsed: 0, successRate: 100 };
        }
        
        this.keyStats[keyId].total++;
        this.keyStats[keyId].lastUsed = Date.now();
        this.keyStats[keyId].successRate = 
            (this.keyStats[keyId].success / this.keyStats[keyId].total) * 100;
        
        // Add to failed keys
        this.failedKeys.add(apiKey);
        
        this.saveStats();
    }

    setupAutoReset() {
        // Reset failed keys every 5 minutes
        setInterval(() => {
            if (this.failedKeys.size > 0) {
                console.log('Auto-resetting failed keys');
                this.failedKeys.clear();
            }
        }, 5 * 60 * 1000);
    }
}

// Request Rate Limiter
class RequestLimiter {
    constructor() {
        this.requests = [];
        this.hourlyRequests = 0;
        this.lastReset = Date.now();
    }

    canMakeRequest() {
        const now = Date.now();
        
        // Reset counters every hour
        if (now - this.lastReset > 60 * 60 * 1000) {
            this.requests = this.requests.filter(time => now - time < 60000);
            this.hourlyRequests = 0;
            this.lastReset = now;
        }

        // Check minute rate limit
        const minuteRequests = this.requests.filter(time => now - time < 60000).length;
        if (minuteRequests >= AI_CONFIG.maxRequestsPerMinute) {
            return { allowed: false, reason: 'معدل الطلبات مرتفع جداً. انتظر دقيقة!' };
        }

        // Check hourly rate limit
        if (this.hourlyRequests >= AI_CONFIG.maxRequestsPerHour) {
            return { allowed: false, reason: 'وصلت للحد الأقصى للساعة. جرب لاحقاً!' };
        }

        return { allowed: true };
    }

    recordRequest() {
        const now = Date.now();
        this.requests.push(now);
        this.hourlyRequests++;
        
        // Clean old requests (older than 1 minute)
        this.requests = this.requests.filter(time => now - time < 60000);
    }
}

// Initialize managers
const keyManager = new APIKeyManager();
const rateLimiter = new RequestLimiter();

// System prompts
const SYSTEM_PROMPTS = {
    chat: `أنت مساعد تعليمي ذكي لطلاب Senior المصريين. اسمك "منهجكو AI".

القواعد الأساسية:
1. أجب باللهجة المصرية البسيطة والواضحة
2. تخصصك: الرياضيات، الفيزياء، الميكانيكا، اللغة العربية، الدراسات الاجتماعية
3. لو السؤال بالإنجليزي، حله بالإنجليزي بنفس طريقة الكتاب المدرسي
4. لو السؤال بالعربي، حله بالعربي
5. استخدم الإيموجي المناسب لجعل الإجابة ممتعة
6. لو في صورة مسألة، حلها خطوة بخطوة بنفس طريقة الكتاب
7. في نهاية كل حل، اشرح الخطوات بالمصري
8. لو حد سألك عن اسمك، قوله إنك "منهجكو AI" المساعد الذكي لطلاب Senior

تذكر: كن دقيقاً، وواضحاً، ومفيداً!`,

    explainer: `أنت مدرس مصري ممتاز متخصص في شرح المواد الدراسية لطلاب Senior.

قواعد الشرح:
1. اشرح بالتفصيل باللهجة المصرية البسيطة
2. استخدم الرموز والإيموجي للتوضيح
3. قسم الشرح إلى:
   📚 التعريف
   📝 الشرح التفصيلي
   💡 أمثلة محلولة خطوة بخطوة
   ⚡ ملاحظات مهمة
   🎯 ملخص للحفظ
4. لو الموضوع علمي، اكتب القوانين بالإنجليزي والشرح بالمصري
5. ركز على النقاط الأساسية في المنهج`
};

// Creator info
const CREATOR_INFO = {
    name: 'ابانوب سعد بولس',
    nameEn: 'Abanoub Saad Boulus',
    questions: ['من صنعك', 'مين عملك', 'من أنشأك', 'من صممك', 'من برمجك', 'who made you', 'who created you']
};

// Identity questions
const IDENTITY_QUESTIONS = ['ما اسمك', 'انت مين', 'مين انت', 'اسمك ايه', 'what is your name', 'who are you'];

// Fallback responses
const FALLBACK_RESPONSES = [
    "معلش، السيرفرات عليها ضغط كبير دلوقتي! 😅 جرب تاني بعد شوية.",
    "عندي مشكلة في الاتصال دلوقتي. جرب تاني بعد شوية! 🔄",
    "الخدمة مشغولة، حاول تاني بعد دقيقة! ⏳",
    "آسف، مش قادر أرد دلوقتي. جرب تاني كمان شوية! 💫",
    "حصل مشكلة في الاتصال. انتظر شوية وحاول تاني! 🌟"
];

// Check if question is about creator
function isAskingAboutCreator(message) {
    if (!message) return false;
    const lowerMsg = message.toLowerCase();
    return CREATOR_INFO.questions.some(q => lowerMsg.includes(q.toLowerCase()));
}

// Check if question is about identity
function isAskingAboutIdentity(message) {
    if (!message) return false;
    const lowerMsg = message.toLowerCase();
    return IDENTITY_QUESTIONS.some(q => lowerMsg.includes(q.toLowerCase()));
}

// Get identity response
function getIdentityResponse() {
    return `أنا منهجكو AI 🤖✨ مساعدك الذكي لطلاب Senior! 🎓<br><br>
    اقدر اساعدك في حل المسائل، شرح الدروس، أو الاجابة على أي سؤال في المنهج.<br>
    جربي تسألني عن أي حاجة في المواد الدراسية! 📚`;
}

// Get creator response
function getCreatorResponse() {
    return `أنا من تصميم وبرمجة <b>${CREATOR_INFO.name}</b> (${CREATOR_INFO.nameEn}) 👨‍💻✨<br><br>
    عملني علشان أساعدكم في المذاكرة والفهم! 🎓📚<br><br>
    لو عندك أي سؤال في أي مادة، أنا موجود! 🚀`;
}

// Convert file to base64 with size limit
async function fileToBase64(file, maxSizeMB = 1.5) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error('لم يتم اختيار ملف'));
            return;
        }

        // Check file type
        if (!file.type.startsWith('image/')) {
            reject(new Error('الملف يجب أن يكون صورة'));
            return;
        }

        // Check file size
        if (file.size > maxSizeMB * 1024 * 1024) {
            reject(new Error(`حجم الصورة كبير جداً. الحد الأقصى ${maxSizeMB}MB`));
            return;
        }

        const reader = new FileReader();
        
        reader.onload = () => {
            try {
                const result = reader.result;
                const base64 = result.split(',')[1];
                if (!base64) {
                    reject(new Error('فشل تحويل الصورة'));
                    return;
                }
                resolve(base64);
            } catch (error) {
                reject(new Error('فشل معالجة الصورة'));
            }
        };
        
        reader.onerror = () => {
            reject(new Error('فشل قراءة الملف'));
        };
        
        reader.readAsDataURL(file);
    });
}

// Make API call with timeout and error handling
async function makeAPICall(messages, model, apiKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AI_CONFIG.timeout * 1000);

    try {
        const response = await fetch(AI_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Manhagko Educational Platform'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: 1500,
                temperature: 0.7,
                stream: false
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const status = response.status;
            let errorMsg = `HTTP_${status}`;
            
            if (status === 429) {
                errorMsg = 'RATE_LIMIT';
            } else if (status === 402) {
                errorMsg = 'QUOTA_EXCEEDED';
            } else if (status >= 500) {
                errorMsg = 'SERVER_ERROR';
            }
            
            throw new Error(errorMsg);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message || 'API_ERROR');
        }

        const content = data.choices?.[0]?.message?.content;
        if (!content || content.trim() === '') {
            throw new Error('EMPTY_RESPONSE');
        }

        return content;
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('TIMEOUT');
        }
        
        throw error;
    }
}

// Smart API request with retry logic
async function smartAPIRequest(messages, retryCount = 0) {
    // Check rate limit
    const rateLimitCheck = rateLimiter.canMakeRequest();
    if (!rateLimitCheck.allowed) {
        throw new Error(`RATE_LIMITED:${rateLimitCheck.reason}`);
    }

    // Get best key
    const apiKey = keyManager.getKey();
    
    // Try models in order
    for (const model of AI_CONFIG.models) {
        try {
            console.log(`🔍 Attempting: Model=${model}, Key=${apiKey.slice(-8)}`);
            const result = await makeAPICall(messages, model, apiKey);
            
            // Record success
            keyManager.recordSuccess(apiKey);
            rateLimiter.recordRequest();
            
            console.log(`✅ Success with model: ${model}`);
            return result;
            
        } catch (error) {
            console.warn(`⚠️ Failed with model ${model}:`, error.message);
            
            // Record failure
            keyManager.recordFailure(apiKey);
            
            // If rate limit or quota exceeded, try next model immediately
            if (error.message.includes('RATE_LIMIT') || error.message.includes('QUOTA_EXCEEDED')) {
                continue;
            }
            
            // For other errors, wait before trying next model
            if (error.message !== 'TIMEOUT') {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    }

    // If all models failed, retry with different approach
    if (retryCount < AI_CONFIG.maxRetries) {
        console.log(`🔄 Retrying... (${retryCount + 1}/${AI_CONFIG.maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, AI_CONFIG.retryDelay));
        return smartAPIRequest(messages, retryCount + 1);
    }

    // All attempts failed
    throw new Error('ALL_ATTEMPTS_FAILED');
}

// Main AI function
async function sendToAI(message, imageBase64 = null, systemPrompt = SYSTEM_PROMPTS.chat) {
    try {
        // Check for special questions first
        if (isAskingAboutIdentity(message)) {
            return getIdentityResponse();
        }
        
        if (isAskingAboutCreator(message)) {
            return getCreatorResponse();
        }

        // Prepare messages
        const messages = [
            { role: 'system', content: systemPrompt }
        ];

        if (imageBase64) {
            messages.push({
                role: 'user',
                content: [
                    {
                        type: 'image_url',
                        image_url: { 
                            url: `data:image/jpeg;base64,${imageBase64}`,
                            detail: 'low' // Optimize for performance
                        }
                    },
                    { 
                        type: 'text', 
                        text: message || 'حل هذه المسألة خطوة بخطوة' 
                    }
                ]
            });
        } else {
            messages.push({ 
                role: 'user', 
                content: message 
            });
        }

        // Make API request
        const response = await smartAPIRequest(messages);
        return response;

    } catch (error) {
        console.error('AI Request Error:', error);
        
        // Handle specific errors
        if (error.message.includes('RATE_LIMITED:')) {
            const reason = error.message.split(':')[1];
            return `⚠️ ${reason}`;
        }
        
        if (error.message.includes('TIMEOUT')) {
            return "⏱️ الوقت انتهى قبل اكتمال الرد. جرب سؤال أقصر أو حاول تاني!";
        }
        
        if (error.message.includes('ALL_ATTEMPTS_FAILED')) {
            // Select random fallback response
            const randomIndex = Math.floor(Math.random() * FALLBACK_RESPONSES.length);
            return FALLBACK_RESPONSES[randomIndex];
        }

        // General error
        return "معلش، حصلت مشكلة في الاتصال. جرب تاني بعد شوية! 🔄";
    }
}

// Safe HTML formatting
function formatResponse(text) {
    if (!text || typeof text !== 'string') {
        return '';
    }

    // Escape HTML first for security
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    let safeText = escapeHtml(text);

    // Apply safe formatting
    safeText = safeText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/```([\s\S]*?)```/g, '<pre class="code-block">$1</pre>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>')
        .replace(/^###\s*(.*?)$/gm, '<h4 class="response-heading">$1</h4>')
        .replace(/^##\s*(.*?)$/gm, '<h3 class="response-heading">$1</h3>')
        .replace(/^#\s*(.*?)$/gm, '<h2 class="response-heading">$1</h2>');

    return safeText;
}

// Initialize Chatbot
function initChatbot() {
    const chatModal = document.getElementById('chatbotModal');
    const chatInput = document.getElementById('chatInput');
    const imageInput = document.getElementById('chatImageInput');
    const messagesDiv = document.getElementById('chatMessages');
    const imagePreview = document.getElementById('imagePreview');

    if (!chatModal || !chatInput || !messagesDiv) {
        console.error('Chatbot elements not found');
        return;
    }

    let currentImage = null;
    let isProcessing = false;

    // Image upload handler
    if (imageInput) {
        imageInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                currentImage = await fileToBase64(file);
                
                if (imagePreview) {
                    imagePreview.innerHTML = `
                        <div class="image-preview-container">
                            <img src="${URL.createObjectURL(file)}" alt="Preview" style="max-width: 100px; max-height: 100px;">
                            <button onclick="clearImage()" class="clear-image-btn">✕</button>
                        </div>
                    `;
                    imagePreview.style.display = 'block';
                }
            } catch (error) {
                alert(error.message);
                currentImage = null;
                if (imageInput) imageInput.value = '';
            }
        });
    }

    // Clear image function
    window.clearImage = function () {
        currentImage = null;
        if (imageInput) imageInput.value = '';
        if (imagePreview) {
            imagePreview.innerHTML = '';
            imagePreview.style.display = 'none';
        }
    };

    // Send message function
    window.sendChatMessage = async function () {
        if (isProcessing) {
            console.log('Request already in progress');
            return;
        }

        const message = chatInput ? chatInput.value.trim() : '';
        if (!message && !currentImage) {
            console.log('No message or image');
            return;
        }

        isProcessing = true;
        const sendBtn = document.querySelector('.send-btn');
        if (sendBtn) sendBtn.disabled = true;

        try {
            // Add user message
            let userMsgHtml = '';
            if (currentImage) {
                userMsgHtml = `
                    <div class="user-image">
                        <i class="fas fa-image"></i> صورة مرفوعة
                    </div>
                    ${message ? '<br>' + formatResponse(message) : ''}
                `;
            } else {
                userMsgHtml = formatResponse(message);
            }

            messagesDiv.innerHTML += `
                <div class="chat-message user">
                    ${userMsgHtml}
                </div>
            `;

            // Clear input
            if (chatInput) chatInput.value = '';
            
            // Scroll to bottom
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            // Show loading
            const loadingId = 'loading-' + Date.now();
            messagesDiv.innerHTML += `
                <div class="chat-message bot loading-msg" id="${loadingId}">
                    <div class="loader-futuristic"></div>
                    <span>جاري التفكير...</span>
                </div>
            `;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            // Get AI response
            const response = await sendToAI(message, currentImage);
            
            // Remove loading
            const loadingElement = document.getElementById(loadingId);
            if (loadingElement) loadingElement.remove();
            
            // Add bot response
            messagesDiv.innerHTML += `
                <div class="chat-message bot">
                    ${formatResponse(response)}
                </div>
            `;

        } catch (error) {
            console.error('Chat error:', error);
            
            // Remove loading
            const loadingElement = document.getElementById('loading-' + loadingId);
            if (loadingElement) loadingElement.remove();
            
            // Show error
            messagesDiv.innerHTML += `
                <div class="chat-message bot error">
                    حدث خطأ غير متوقع. جرب تاني! 🔄
                </div>
            `;
        } finally {
            // Clean up
            clearImage();
            isProcessing = false;
            if (sendBtn) sendBtn.disabled = false;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    };

    // Enter key handler
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                window.sendChatMessage();
            }
        });
    }
}

// Initialize Explainer
function initExplainer() {
    window.generateExplanation = async function () {
        const topicInput = document.getElementById('explainerInput');
        const subjectSelect = document.getElementById('explainerSubject');
        const resultDiv = document.getElementById('explainerResult');

        if (!topicInput || !subjectSelect || !resultDiv) {
            console.error('Explainer elements not found');
            return;
        }

        const topic = topicInput.value.trim();
        const subject = subjectSelect.value;

        if (!topic) {
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'warning',
                    title: 'انتبه! ⚠️',
                    text: 'من فضلك اكتب الموضوع اللي عايز تفهمه!',
                    confirmButtonText: 'حاضر',
                    background: '#0a0a1a',
                    color: '#fff',
                    confirmButtonColor: '#00f0ff'
                });
            } else {
                alert('من فضلك اكتب الموضوع اللي عايز تفهمه!');
            }
            return;
        }

        // Show result area and loading
        resultDiv.classList.add('active');
        resultDiv.innerHTML = `
            <div class="loading-container">
                <div class="loader-futuristic"></div>
                <p>جاري إنشاء الشرح...</p>
            </div>
        `;

        try {
            const prompt = `اشرحلي بالتفصيل: ${topic}\n\nالمادة: ${subject}`;
            const response = await sendToAI(prompt, null, SYSTEM_PROMPTS.explainer);
            resultDiv.innerHTML = formatResponse(response);
        } catch (error) {
            console.error('Explainer error:', error);
            resultDiv.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>معلش، حصلت مشكلة في الاتصال. جرب تاني! 😅</p>
                </div>
            `;
        }
    };
}

// Initialize all components
function initAIComponents() {
    try {
        initChatbot();
        initExplainer();
        
        // Add CSS for loader if not exists
        if (!document.querySelector('#ai-loader-styles')) {
            const style = document.createElement('style');
            style.id = 'ai-loader-styles';
            style.textContent = `
                .loader-futuristic {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(78, 205, 196, 0.3);
                    border-radius: 50%;
                    border-top-color: var(--primary);
                    animation: spin 1s ease-in-out infinite;
                    margin-left: 10px;
                }
                
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                
                .chat-message.bot.error {
                    color: #ff6b6b;
                    border-color: #ff6b6b;
                    background: rgba(255, 107, 107, 0.1);
                }
                
                .response-heading {
                    color: var(--primary);
                    margin: 1rem 0 0.5rem;
                    font-weight: bold;
                }
                
                .code-block {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 1rem;
                    border-radius: 8px;
                    overflow-x: auto;
                    margin: 1rem 0;
                    font-family: monospace;
                }
            `;
            document.head.appendChild(style);
        }
        
        console.log('✅ AI System initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize AI components:', error);
    }
}

// Export for global use
window.ManhagkoAI = {
    sendToAI,
    formatResponse,
    getCreatorResponse,
    getIdentityResponse,
    clearImage: window.clearImage,
    sendChatMessage: window.sendChatMessage,
    generateExplanation: window.generateExplanation,
    initAIComponents
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIComponents);
} else {
    initAIComponents();
}
