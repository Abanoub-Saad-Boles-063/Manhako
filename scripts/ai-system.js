// Manhagko AI System - Enhanced Version
// Compatible with existing website structure
// Creator: ابانوب سعد بولس (Abanoub Saad Boulus)

const AI_CONFIG = {
    // Primary API Keys
    apiKeys: [
        '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', // Manhagko Primary
        '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', // Key 2
        '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'  // Key 3
    ],
    
    // Backup API Keys
    backupKeys: [
        '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'
    ],
    
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    
    models: [        
        'google/gemini-2.0-flash-exp:free',
        'mistralai/mistral-small-3.1-24b-instruct:free',
        'meta-llama/llama-3.2-3b-instruct:free',
        'microsoft/phi-3.5-mini-instruct:free'
    ],
    
    maxRetries: 2,
    requestDelay: 1000
};

// Creator info
const CREATOR = {
    name: 'ابانوب سعد بولس',
    nameEn: 'Abanoub Saad Boulus',
    questions: [
        'من صنعك', 'مين عملك', 'من أنشأك', 'من صممك', 'من برمجك',
        'who made you', 'who created you', 'who programmed you',
        'مين صنعك', 'مين صممك', 'مين برمجك', 'من عملك', 'من انشأك'
    ]
};

// Identity questions (who is the AI)
const IDENTITY_QUESTIONS = [
    'ما اسمك', 'انت مين', 'مين انت', 'اسمك ايه', 'اسمك إيه',
    'what is your name', 'who are you', 'انت اسمك ايه',
    'tell me your name', 'عرف نفسك', 'عرفني بنفسك'
];

// System prompts
const SYSTEM_PROMPTS = {
    chat: `أنت مساعد تعليمي ذكي لطلاب Senior المصريين. اسمك "منهجكو AI" ولازم تفتكر ده دايماً.

قواعد مهمة:
1. أجب باللهجة المصرية البسيطة والواضحة
2. تخصصك: الرياضيات، الفيزياء، الميكانيكا، اللغة العربية، الدراسات الاجتماعية
3. لو السؤال بالإنجليزي، حله بالإنجليزي بنفس طريقة الكتاب المدرسي
4. لو السؤال بالعربي، حله بالعربي
5. استخدم الإيموجي لجعل الإجابة ممتعة
6. لو في صورة مسألة، حلها خطوة بخطوة بنفس طريقة الكتاب
7. في نهاية كل حل، اشرح الخطوات بالمصري
8. لو حد سألك اي سؤال معناه مين صنعك او مين بيشغلك او مين دربك او جايب الداتا بتاعتك منين جاوب ب صنعني بيبو
8. لو حد سألك عن اسمك، قوله إنك "منهجكو AI" المساعد الذكي لطلاب Senior`,

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
5. لو الشرح عن قوانين، اكتب القانون بشكل صحيح 100% من الناحية العلمية`
};

// Simple state management
let requestQueue = [];
let isProcessing = false;
let currentKeyIndex = 0;

// Get next API key
function getNextKey() {
    const key = AI_CONFIG.apiKeys[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % AI_CONFIG.apiKeys.length;
    return key;
}

// Simple file to base64 conversion
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file || !file.type.startsWith('image/')) {
            reject(new Error('الملف يجب أن يكون صورة'));
            return;
        }
        
        if (file.size > 2 * 1024 * 1024) { // 2MB limit
            reject(new Error('حجم الصورة كبير جداً. الحد الأقصى 2MB'));
            return;
        }
        
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            const base64 = result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = () => reject(new Error('فشل قراءة الملف'));
        reader.readAsDataURL(file);
    });
}

// Check if question is about creator
function isCreatorQuestion(message) {
    const normalizedMessage = message.toLowerCase().trim();
    return CREATOR.questions.some(question => 
        normalizedMessage.includes(question.toLowerCase())
    );
}

// Check if question is about AI identity
function isIdentityQuestion(message) {
    const normalizedMessage = message.toLowerCase().trim();
    return IDENTITY_QUESTIONS.some(question => 
        normalizedMessage.includes(question.toLowerCase())
    );
}

// Get pre-defined response for special questions
function getSpecialResponse(message, imageBase64 = null) {
    const normalizedMessage = message.toLowerCase().trim();
    
    // Handle creator questions
    if (isCreatorQuestion(normalizedMessage)) {
        return `🎉 **أنا "منهجكو AI"** - المساعد التعليمي الذكي لطلاب Senior! 🤖✨\n\n` +
               `**صانعي هو:** ${CREATOR.name} (${CREATOR.nameEn})\n` +
               `هو اللي برمجني وصممني علشان أساعد طلاب Senior المصريين في دروسهم! 📚💪\n\n` +
               `إذا عندك أي سؤال في المنهج أو تحتاج شرح، أنا تحت أمرك! 😊👍`;
    }
    
    // Handle identity questions
    if (isIdentityQuestion(normalizedMessage)) {
        return `👋 **أهلاً! أنا "منهجكو AI"** - المساعد التعليمي الخاص بطلاب Senior! 🤓\n\n` +
               `**دوري:** أساعدك في فهم الدروس وحل المسائل 📚\n` +
               `**مجالاتي:** الرياضيات، الفيزياء، الميكانيكا، اللغة العربية، والدراسات الاجتماعية 🔢📐📖\n\n` +
               `لو عندك أي سؤال أو تحتاج شرح، قول لي! 😊 أنا هنا علشانك!`;
    }
    
    return null;
}

// Make API call
async function makeAPICall(messages, model, apiKey) {
    try {
        const response = await fetch(AI_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Manhagko'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: 1500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            if (response.status === 429) {
                throw new Error('RATE_LIMIT');
            }
            if (response.status === 402) {
                throw new Error('QUOTA_EXCEEDED');
            }
            throw new Error(`HTTP_${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error('API_ERROR');
        }

        return data.choices?.[0]?.message?.content || 'لم أستطع الحصول على إجابة';
        
    } catch (error) {
        throw error;
    }
}

// Main AI function
async function sendToAI(message, imageBase64 = null, systemPrompt = SYSTEM_PROMPTS.chat) {
    if (isProcessing) {
        return "لسه بفكر في الرد السابق... استنى شوية! 🤔";
    }
    
    isProcessing = true;
    
    try {
        // Check for special questions
        if (message && !imageBase64) {
            const specialResponse = getSpecialResponse(message, imageBase64);
            if (specialResponse) {
                isProcessing = false;
                return specialResponse;
            }
        }
        
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
                            detail: 'low'
                        }
                    },
                    { type: 'text', text: message || 'حل هذه المسألة' }
                ]
            });
        } else {
            messages.push({ role: 'user', content: message });
        }
        
        let lastError = null;
        
        // Try all keys and models
        for (const model of AI_CONFIG.models) {
            for (let i = 0; i < AI_CONFIG.apiKeys.length; i++) {
                const apiKey = getNextKey();
                
                try {
                    console.log(`🔍 Trying: ${model} with key ${apiKey.slice(-8)}`);
                    const result = await makeAPICall(messages, model, apiKey);
                    isProcessing = false;
                    return result;
                } catch (error) {
                    lastError = error.message;
                    console.warn(`⚠️ Failed: ${error.message}`);
                    
                    // Wait before next attempt
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }
        }
        
        // Try backup keys
        for (const backupKey of AI_CONFIG.backupKeys) {
            try {
                console.log(`🔄 Trying backup key`);
                const result = await makeAPICall(messages, AI_CONFIG.models[0], backupKey);
                isProcessing = false;
                return result;
            } catch (error) {
                lastError = error.message;
            }
        }
        
        isProcessing = false;
        
        // Return fallback response
        const fallbacks = [
            "معلش، السيرفرات عليها ضغط كبير دلوقتي! 😅 جرب تاني بعد شوية.",
            "الخدمة مشغولة، حاول تاني بعد دقيقة! ⏳",
            "عندي مشكلة في الاتصال دلوقتي. جرب تاني بعد شوية! 🔄"
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
        
    } catch (error) {
        isProcessing = false;
        console.error('AI Error:', error);
        return "معلش، حصلت مشكلة في الاتصال. جرب تاني بعد شوية! 🔄";
    }
}

// Format response
function formatResponse(text) {
    if (!text) return '';
    
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// Initialize chatbot functions
function initChatbot() {
    // Add enter key support
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (window.sendChatMessage) {
                    window.sendChatMessage();
                }
            }
        });
    }
}

// Add loader styles if needed
function addStyles() {
    if (!document.getElementById('ai-styles')) {
        const style = document.createElement('style');
        style.id = 'ai-styles';
        style.textContent = `
            .loader-futuristic {
                display: inline-block;
                width: 20px;
                height: 20px;
                border: 2px solid rgba(78, 205, 196, 0.3);
                border-radius: 50%;
                border-top-color: #4ecdc4;
                animation: spin 1s linear infinite;
                margin-left: 10px;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            .loading-msg {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .chat-message.bot.error {
                color: #ff6b6b;
                border-color: #ff6b6b;
            }
            
            .chat-message.bot {
                background: linear-gradient(135deg, rgba(10, 10, 26, 0.9), rgba(30, 30, 60, 0.9));
                border: 1px solid rgba(78, 205, 196, 0.3);
            }
            
            .creator-response {
                background: linear-gradient(135deg, rgba(46, 125, 50, 0.1), rgba(76, 175, 80, 0.1)) !important;
                border-color: #4CAF50 !important;
            }
            
            .identity-response {
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(66, 165, 245, 0.1)) !important;
                border-color: #2196F3 !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Global functions for website
window.clearImage = function() {
    const imageInput = document.getElementById('chatImageInput');
    const imagePreview = document.getElementById('imagePreview');
    
    if (imageInput) imageInput.value = '';
    if (imagePreview) {
        imagePreview.innerHTML = '';
        imagePreview.style.display = 'none';
    }
};

window.sendChatMessage = async function() {
    const chatInput = document.getElementById('chatInput');
    const imageInput = document.getElementById('chatImageInput');
    const messagesDiv = document.getElementById('chatMessages');
    
    if (!chatInput || !messagesDiv) return;
    
    const message = chatInput.value.trim();
    let imageBase64 = null;
    
    // Handle image upload
    if (imageInput && imageInput.files[0]) {
        try {
            imageBase64 = await fileToBase64(imageInput.files[0]);
        } catch (error) {
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: error.message,
                    background: '#0a0a1a',
                    color: '#fff'
                });
            }
            return;
        }
    }
    
    if (!message && !imageBase64) return;
    
    // Add user message
    let userMsgHtml = formatResponse(message);
    if (imageBase64) {
        userMsgHtml = `<div style="color: #4ecdc4;"><i class="fas fa-image"></i> صورة مرفوعة</div>${message ? '<br>' + userMsgHtml : ''}`;
    }
    
    messagesDiv.innerHTML += `<div class="chat-message user">${userMsgHtml}</div>`;
    chatInput.value = '';
    
    // Clear image
    window.clearImage();
    
    // Show loading
    const loadingId = 'loading-' + Date.now();
    messagesDiv.innerHTML += `
        <div class="chat-message bot loading-msg" id="${loadingId}">
            <div class="loader-futuristic"></div>
            <span>جاري التفكير...</span>
        </div>
    `;
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    try {
        const response = await sendToAI(message, imageBase64);
        document.getElementById(loadingId)?.remove();
        
        // Add special class for creator/identity responses
        let additionalClass = '';
        if (message) {
            if (isCreatorQuestion(message)) {
                additionalClass = ' creator-response';
            } else if (isIdentityQuestion(message)) {
                additionalClass = ' identity-response';
            }
        }
        
        messagesDiv.innerHTML += `<div class="chat-message bot${additionalClass}">${formatResponse(response)}</div>`;
    } catch (error) {
        document.getElementById(loadingId)?.remove();
        messagesDiv.innerHTML += `<div class="chat-message bot error">معلش، حصل خطأ. جرب تاني! 🔄</div>`;
    }
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

window.generateExplanation = async function() {
    const topicInput = document.getElementById('explainerInput');
    const subjectSelect = document.getElementById('explainerSubject');
    const resultDiv = document.getElementById('explainerResult');
    
    if (!topicInput || !resultDiv) return;
    
    const topic = topicInput.value.trim();
    const subject = subjectSelect ? subjectSelect.value : 'general';
    
    if (!topic) {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'warning',
                title: 'انتبه!',
                text: 'من فضلك اكتب الموضوع أولاً!',
                background: '#0a0a1a',
                color: '#fff'
            });
        }
        return;
    }
    
    resultDiv.classList.add('active');
    resultDiv.innerHTML = `
        <div class="loading-container">
            <div class="loader-futuristic"></div>
            <p>جاري إنشاء الشرح...</p>
        </div>
    `;
    
    try {
        const prompt = `اشرحلي بالتفصيل: ${topic}\nالمادة: ${subject}`;
        const response = await sendToAI(prompt, null, SYSTEM_PROMPTS.explainer);
        resultDiv.innerHTML = formatResponse(response);
    } catch (error) {
        resultDiv.innerHTML = '<div class="error">معلش، حصل خطأ. جرب تاني! 😅</div>';
    }
};

// Initialize when page is ready
function initManhagkoAI() {
    try {
        addStyles();
        initChatbot();
        
        // Add image upload handler
        const imageInput = document.getElementById('chatImageInput');
        if (imageInput) {
            imageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                const imagePreview = document.getElementById('imagePreview');
                
                if (file && imagePreview) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        imagePreview.innerHTML = `
                            <div style="position: relative; display: inline-block;">
                                <img src="${e.target.result}" style="max-width: 100px; max-height: 100px; border-radius: 8px;">
                                <button onclick="clearImage()" style="position: absolute; top: -5px; right: -5px; background: #ff4757; color: white; border: none; border-radius: 50%; width: 20px; height: 20px; cursor: pointer;">×</button>
                            </div>
                        `;
                        imagePreview.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        console.log('✅ Manhagko AI initialized');
        console.log('👨‍💻 Creator: ' + CREATOR.name + ' (' + CREATOR.nameEn + ')');
        
    } catch (error) {
        console.error('⚠️ AI init error:', error);
    }
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initManhagkoAI);
} else {
    setTimeout(initManhagkoAI, 100);
}

// Export for global use
window.ManhagkoAI = {
    sendToAI: sendToAI,
    formatResponse: formatResponse,
    clearImage: window.clearImage,
    sendChatMessage: window.sendChatMessage,
    generateExplanation: window.generateExplanation,
    isCreatorQuestion: isCreatorQuestion,
    isIdentityQuestion: isIdentityQuestion,
    getSpecialResponse: getSpecialResponse,
    CREATOR: CREATOR,
    IDENTITY_QUESTIONS: IDENTITY_QUESTIONS,
    SYSTEM_PROMPTS: SYSTEM_PROMPTS
};
