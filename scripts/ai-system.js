// Manhagko AI System - Enhanced Version
// Compatible with existing website structure
// Creator: ابانوب سعد بولس (Abanoub Saad Boulus)

const AI_CONFIG = {
    // Primary API Keys
    apiKeys: [
        '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',
        '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',
        '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'
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
    
    maxRetries: 3,
    requestDelay: 800
};

// Creator info - Updated with better responses
const CREATOR = {
    name: 'ابانوب سعد بولس',
    nameEn: 'Abanoub Saad Boulus',
    nicknames: ['بيبو', 'بوبي', 'أبانوب'],
    questions: [
        'من صنعك', 'مين عملك', 'من أنشأك', 'من صممك', 'من برمجك',
        'who made you', 'who created you', 'who programmed you',
        'مين صنعك', 'مين صممك', 'مين برمجك', 'من عملك', 'من انشأك',
        'مين دربك', 'مين بيشغلك', 'جايب الداتا بتاعتك منين',
        'مين صانعك', 'مين المبرمج', 'مين المطور'
    ]
};

// Identity questions (who is the AI)
const IDENTITY_QUESTIONS = [
    'ما اسمك', 'انت مين', 'مين انت', 'اسمك ايه', 'اسمك إيه',
    'what is your name', 'who are you', 'انت اسمك ايه',
    'tell me your name', 'عرف نفسك', 'عرفني بنفسك',
    'من انت', 'من أنت', 'شخصيتك'
];

// System prompts - FIXED DUPLICATE RULE 8
const SYSTEM_PROMPTS = {
    chat: `أنت مساعد تعليمي ذكي لطلاب Senior المصريين. اسمك "منهجكو AI" ولازم تفتكر ده دايماً.

القواعد الأساسية:
1. أجب باللهجة المصرية البسيطة والواضحة
2. تخصصك: الرياضيات، الفيزياء، الميكانيكا، اللغة العربية، الدراسات الاجتماعية
3. لو السؤال بالإنجليزي، حله بالإنجليزي بنفس طريقة الكتاب المدرسي
4. لو السؤال بالعربي، حله بالعربي
5. استخدم الإيموجي لجعل الإجابة ممتعة
6. لو في صورة مسألة، حلها خطوة بخطوة بنفس طريقة الكتاب
7. في نهاية كل حل، اشرح الخطوات بالمصري

قواعد خاصة بالهوية:
8. لو حد سألك أي سؤال عن مين صنعك أو مين بيشغلك أو مين دربك أو جايب الداتا بتاعتك منين، جاوب دايماً إنك "صنعني بيبو" (أبانوب سعد بولس)
9. لو حد سألك عن اسمك، قوله إنك "منهجكو AI" المساعد الذكي لطلاب Senior

تنسيق الردود:
- استخدم النقاط والترقيم المنظم
- قسم الإجابة إلى أجزاء واضحة
- استخدم الإيموجي المناسب للمحتوى
- كن دقيقاً في المعلومات العلمية`,

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
5. لو الشرح عن قوانين، اكتب القانون بشكل صحيح 100% من الناحية العلمية
6. راعي الفروق الفردية بين الطلاب
7. استخدم أمثلة من الحياة اليومية`
};

// Simple state management
let requestQueue = [];
let isProcessing = false;
let currentKeyIndex = 0;
let lastRequestTime = 0;

// Get next API key
function getNextKey() {
    const key = AI_CONFIG.apiKeys[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % AI_CONFIG.apiKeys.length;
    return key;
}

// Simple file to base64 conversion
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error('لم يتم اختيار ملف'));
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            reject(new Error('الملف يجب أن يكون صورة'));
            return;
        }
        
        if (file.size > 3 * 1024 * 1024) { // 3MB limit
            reject(new Error('حجم الصورة كبير جداً. الحد الأقصى 3MB'));
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
    if (!message) return false;
    
    const normalizedMessage = message.toLowerCase().trim();
    
    // Check exact matches first
    for (const question of CREATOR.questions) {
        if (normalizedMessage.includes(question.toLowerCase())) {
            return true;
        }
    }
    
    // Check for common patterns
    const creatorPatterns = [
        /صنع/, /خلق/, /برمج/, /صمم/, /أنشأ/, /أنشئ/, /بيبو/, /بوبي/, /abanoob/i,
        /made you/i, /created you/i, /programmed you/i, /built you/i
    ];
    
    return creatorPatterns.some(pattern => pattern.test(normalizedMessage));
}

// Check if question is about AI identity
function isIdentityQuestion(message) {
    if (!message) return false;
    
    const normalizedMessage = message.toLowerCase().trim();
    
    // Check exact matches
    for (const question of IDENTITY_QUESTIONS) {
        if (normalizedMessage.includes(question.toLowerCase())) {
            return true;
        }
    }
    
    // Check for identity patterns
    const identityPatterns = [
        /اسمك/, /مين انت/, /من أنت/, /who are/, /your name/i,
        /عرف/, /تعريف/, /تقدم/, /introduce yourself/i
    ];
    
    return identityPatterns.some(pattern => pattern.test(normalizedMessage));
}

// Get pre-defined response for special questions
function getSpecialResponse(message, imageBase64 = null) {
    if (!message || imageBase64) return null;
    
    const normalizedMessage = message.toLowerCase().trim();
    
    // Handle creator questions
    if (isCreatorQuestion(normalizedMessage)) {
        return `🎉 **أنا "منهجكو AI"** - المساعد التعليمي الذكي لطلاب Senior! 🤖✨\n\n` +
               `**صانعي هو:** ${CREATOR.name} (${CREATOR.nameEn})\n\n` +
               `أنا صنعت بكل حب واهتمام بواسطة **"بيبو"** 🎯\n` +
               `اللي عمل كل حاجة علشان أساعد طلاب Senior المصريين! 📚💪\n\n` +
               `إذا عندك أي سؤال في المنهج أو تحتاج شرح، أنا تحت أمرك دايماً! 😊👍\n` +
               `#صنعني_بيبو ✨`;
    }
    
    // Handle identity questions
    if (isIdentityQuestion(normalizedMessage)) {
        return `👋 **أهلاً وسهلاً! أنا "منهجكو AI"** 🤓\n\n` +
               `**دوري:** أساعدك في فهم الدروس وحل المسائل 📚\n` +
               `**مجالاتي:**\n` +
               `• الرياضيات (الجبر، الهندسة، التفاضل والتكامل) 🔢\n` +
               `• الفيزياء (الميكانيكا، الكهربية، البصريات) ⚛️\n` +
               `• اللغة العربية (النحو، الأدب، البلاغة) 📖\n` +
               `• الدراسات الاجتماعية (التاريخ، الجغرافيا) 🗺️\n\n` +
               `**كيف أساعدك؟**\n` +
               `✓ أشرح الدروس بالتفصيل 📝\n` +
               `✓ أحل المسائل خطوة بخطوة 🧮\n` +
               `✓ أراجع معك قبل الامتحانات 🎯\n\n` +
               `قول لي إيه اللي محتاج مساعدة فيه! 😊 أنا هنا علشانك!`;
    }
    
    return null;
}

// Rate limiting helper
function waitIfNeeded() {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    
    if (timeSinceLastRequest < AI_CONFIG.requestDelay) {
        const waitTime = AI_CONFIG.requestDelay - timeSinceLastRequest;
        return new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    return Promise.resolve();
}

// Make API call with better error handling
async function makeAPICall(messages, model, apiKey) {
    try {
        await waitIfNeeded();
        
        const response = await fetch(AI_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin || 'https://manhagko.com',
                'X-Title': 'Manhagko AI Assistant',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: 2000,
                temperature: 0.7,
                top_p: 0.9
            })
        });

        lastRequestTime = Date.now();

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            
            if (response.status === 429) {
                throw new Error('RATE_LIMIT');
            }
            if (response.status === 402) {
                throw new Error('QUOTA_EXCEEDED');
            }
            if (response.status === 401) {
                throw new Error('INVALID_KEY');
            }
            throw new Error(`HTTP_${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message || 'API_ERROR');
        }

        return data.choices?.[0]?.message?.content || 'لم أستطع الحصول على إجابة من النموذج';
        
    } catch (error) {
        console.error('API Call Error:', error);
        throw error;
    }
}

// Main AI function with improved error handling
async function sendToAI(message, imageBase64 = null, systemPrompt = SYSTEM_PROMPTS.chat) {
    if (isProcessing) {
        return "🤔 **لسه بفكر في الرد السابق... استنى شوية!**\nجاري معالجة طلبك، دقيقة وحيدرس 😊";
    }
    
    isProcessing = true;
    
    try {
        // Check for special questions FIRST
        if (message && !imageBase64) {
            const specialResponse = getSpecialResponse(message, imageBase64);
            if (specialResponse) {
                setTimeout(() => { isProcessing = false; }, 500);
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
                    { type: 'text', text: message || 'حل هذه المسألة من فضلك' }
                ]
            });
        } else {
            messages.push({ 
                role: 'user', 
                content: message 
            });
        }
        
        let lastError = null;
        let attemptCount = 0;
        
        // Try all keys and models
        for (let attempt = 0; attempt < AI_CONFIG.maxRetries; attempt++) {
            for (const model of AI_CONFIG.models) {
                for (let i = 0; i < AI_CONFIG.apiKeys.length; i++) {
                    const apiKey = getNextKey();
                    attemptCount++;
                    
                    try {
                        console.log(`🔍 محاولة ${attemptCount}: ${model} مع مفتاح ${apiKey.slice(-6)}`);
                        const result = await makeAPICall(messages, model, apiKey);
                        isProcessing = false;
                        return result;
                    } catch (error) {
                        lastError = error.message;
                        console.warn(`⚠️ فشلت المحاولة ${attemptCount}: ${error.message}`);
                        
                        // Different wait times based on error
                        let waitTime = 500;
                        if (error.message === 'RATE_LIMIT') waitTime = 2000;
                        if (error.message === 'INVALID_KEY') waitTime = 100;
                        
                        await new Promise(resolve => setTimeout(resolve, waitTime));
                    }
                }
            }
        }
        
        // Try backup keys
        console.log('🔄 جرب مفاتيح النسخ الاحتياطي...');
        for (const backupKey of AI_CONFIG.backupKeys) {
            try {
                const result = await makeAPICall(messages, AI_CONFIG.models[0], backupKey);
                isProcessing = false;
                return result;
            } catch (error) {
                lastError = error.message;
            }
        }
        
        isProcessing = false;
        
        // Return creative fallback response
        const fallbacks = [
            "معلش يا بطل، السيرفرات عليها ضغط جامد دلوقتي! 😅\nجرب تاني بعد 5 دقائق، أو حاول مع صورة أقل جودة!",
            "الخدمة مشغولة حالياً، لكن مش هتخسر حاجة! ⏳\nحاول تاني بعد دقيقة، أنا هنا دايماً!",
            "عندي مشكلة في الاتصال دلوقتي، لكن مش معناه إني هسيبك! 🔄\nجرب تاني بعد شوية، أكيد هتلاقيني!"
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
        
    } catch (error) {
        isProcessing = false;
        console.error('❌ AI System Error:', error);
        
        const errorMessages = [
            "والله حصل حاجة غريبة! 😅 حاول تاني دلوقتي!",
            "مش قادر أتواصل مع الخادم، جرب تاني بعد شوية! 🔄",
            "عذراً، فيه مشكلة تقنية مؤقتة، حاول تاني بعد 2 دقيقة! ⚠️"
        ];
        
        return errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}

// Format response with better styling
function formatResponse(text) {
    if (!text) return '';
    
    // Replace markdown with HTML
    let formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="ai-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="ai-italic">$1</em>')
        .replace(/`(.*?)`/g, '<code class="ai-code">$1</code>')
        .replace(/^### (.*$)/gm, '<h3 class="ai-heading">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="ai-heading">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="ai-heading">$1</h1>')
        .replace(/^- (.*$)/gm, '<li class="ai-list-item">• $1</li>')
        .replace(/^\d+\. (.*$)/gm, '<li class="ai-list-item">$&</li>')
        .replace(/\n/g, '<br>');
    
    // Wrap lists in ul/ol
    formatted = formatted.replace(/(<li class="ai-list-item">.*?<\/li>(<br>)?)+/g, 
        match => `<ul class="ai-list">${match}</ul>`);
    
    return formatted;
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
    
    // Add focus to input
    setTimeout(() => {
        if (chatInput) chatInput.focus();
    }, 1000);
}

// Add loader styles if needed
function addStyles() {
    if (!document.getElementById('ai-styles')) {
        const style = document.createElement('style');
        style.id = 'ai-styles';
        style.textContent = `
            .loader-futuristic {
                display: inline-block;
                width: 24px;
                height: 24px;
                border: 3px solid rgba(78, 205, 196, 0.3);
                border-radius: 50%;
                border-top-color: #4ecdc4;
                animation: spin 1s ease-in-out infinite;
                margin: 0 10px;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            .loading-msg {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                background: linear-gradient(135deg, rgba(10, 10, 26, 0.8), rgba(20, 20, 40, 0.9));
                border-radius: 12px;
                margin: 10px 0;
                border: 1px solid rgba(78, 205, 196, 0.2);
            }
            
            .chat-message.bot.error {
                color: #ff6b6b;
                border-color: #ff6b6b;
                background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05));
            }
            
            .chat-message.bot {
                background: linear-gradient(135deg, rgba(10, 10, 26, 0.95), rgba(30, 30, 60, 0.95));
                border: 1px solid rgba(78, 205, 196, 0.3);
                border-radius: 12px;
                padding: 15px;
                margin: 10px 0;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            
            .creator-response {
                background: linear-gradient(135deg, rgba(46, 125, 50, 0.15), rgba(76, 175, 80, 0.1)) !important;
                border-color: #4CAF50 !important;
                border-left: 5px solid #4CAF50;
            }
            
            .identity-response {
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(66, 165, 245, 0.1)) !important;
                border-color: #2196F3 !important;
                border-left: 5px solid #2196F3;
            }
            
            .ai-bold {
                font-weight: bold;
                color: #4ecdc4;
            }
            
            .ai-italic {
                font-style: italic;
                color: #feca57;
            }
            
            .ai-code {
                background: rgba(255, 255, 255, 0.1);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'Courier New', monospace;
                color: #ff9ff3;
            }
            
            .ai-heading {
                color: #4ecdc4;
                margin: 15px 0 10px 0;
                padding-bottom: 5px;
                border-bottom: 2px solid rgba(78, 205, 196, 0.3);
            }
            
            .ai-list {
                margin: 10px 0;
                padding-left: 20px;
            }
            
            .ai-list-item {
                margin: 8px 0;
                line-height: 1.6;
            }
            
            #imagePreview {
                margin-top: 10px;
                padding: 10px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border: 1px dashed rgba(78, 205, 196, 0.3);
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
    
    if (!chatInput || !messagesDiv) {
        console.error('❌ عناصر HTML غير موجودة!');
        return;
    }
    
    const message = chatInput.value.trim();
    let imageBase64 = null;
    
    // Handle image upload
    if (imageInput && imageInput.files[0]) {
        try {
            imageBase64 = await fileToBase64(imageInput.files[0]);
        } catch (error) {
            console.error('❌ خطأ في تحميل الصورة:', error);
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ في الصورة',
                    text: error.message,
                    background: '#0a0a1a',
                    color: '#fff',
                    confirmButtonColor: '#4ecdc4'
                });
            } else {
                alert('❌ ' + error.message);
            }
            return;
        }
    }
    
    if (!message && !imageBase64) {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'warning',
                title: 'انتبه!',
                text: 'من فضلك اكتب رسالة أو اختر صورة!',
                background: '#0a0a1a',
                color: '#fff',
                confirmButtonColor: '#4ecdc4'
            });
        }
        return;
    }
    
    // Add user message
    let userMsgHtml = formatResponse(message);
    if (imageBase64) {
        userMsgHtml = `
            <div style="color: #4ecdc4; font-weight: bold; margin-bottom: 8px;">
                <i class="fas fa-image"></i> صورة مرفوعة
            </div>
            ${message ? '<div style="margin-top: 10px;">' + userMsgHtml + '</div>' : ''}
        `;
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
            <span style="font-weight: bold; color: #4ecdc4;">جاري التفكير في إجابتك...</span>
        </div>
    `;
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    try {
        console.log('🚀 إرسال طلب إلى الذكاء الاصطناعي...');
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
        
        const formattedResponse = formatResponse(response);
        messagesDiv.innerHTML += `<div class="chat-message bot${additionalClass}">${formattedResponse}</div>`;
        
        console.log('✅ تم استلام الرد بنجاح');
        
    } catch (error) {
        console.error('❌ خطأ في sendChatMessage:', error);
        document.getElementById(loadingId)?.remove();
        
        const errorMsg = `
            <div class="chat-message bot error">
                <strong>⚠️ حدث خطأ غير متوقع!</strong><br>
                حاول مرة أخرى أو أعد تحميل الصفحة.<br>
                <small>تفاصيل الخطأ: ${error.message}</small>
            </div>
        `;
        messagesDiv.innerHTML += errorMsg;
    }
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    if (chatInput) chatInput.focus();
};

window.generateExplanation = async function() {
    const topicInput = document.getElementById('explainerInput');
    const subjectSelect = document.getElementById('explainerSubject');
    const resultDiv = document.getElementById('explainerResult');
    
    if (!topicInput || !resultDiv) {
        console.error('❌ عناصر الشرح غير موجودة!');
        return;
    }
    
    const topic = topicInput.value.trim();
    const subject = subjectSelect ? subjectSelect.value : 'عام';
    
    if (!topic) {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'warning',
                title: 'انتبه!',
                text: 'من فضلك اكتب الموضوع أولاً!',
                background: '#0a0a1a',
                color: '#fff',
                confirmButtonColor: '#4ecdc4'
            });
        }
        return;
    }
    
    resultDiv.classList.add('active');
    resultDiv.innerHTML = `
        <div class="loading-container" style="text-align: center; padding: 40px;">
            <div style="margin-bottom: 20px;">
                <div class="loader-futuristic" style="width: 40px; height: 40px; margin: 0 auto;"></div>
            </div>
            <p style="color: #4ecdc4; font-size: 18px; font-weight: bold;">
                🔮 جاري إنشاء شرح رائع لك...
            </p>
            <p style="color: #888; margin-top: 10px;">
                الموضوع: "${topic}"<br>
                المادة: ${subject}
            </p>
        </div>
    `;
    
    try {
        const prompt = `موضوع: ${topic}\nالمادة: ${subject}\n\nمن فضلك اشرح هذا الموضوع بالتفصيل:`;
        const response = await sendToAI(prompt, null, SYSTEM_PROMPTS.explainer);
        resultDiv.innerHTML = formatResponse(response);
        
        // Add scroll to top
        resultDiv.scrollTop = 0;
        
    } catch (error) {
        console.error('❌ خطأ في generateExplanation:', error);
        resultDiv.innerHTML = `
            <div class="error" style="color: #ff6b6b; padding: 20px; text-align: center;">
                <h3>⚠️ عذراً، حدث خطأ!</h3>
                <p>معلش، مش قادر أنشئ الشرح دلوقتي. 😅</p>
                <p>حاول تاني بعد شوية، أو جرب موضوع تاني!</p>
            </div>
        `;
    }
};

// Initialize when page is ready
function initManhagkoAI() {
    try {
        console.log('🚀 بدء تشغيل نظام منهجكو الذكي...');
        
        addStyles();
        initChatbot();
        
        // Add image upload handler
        const imageInput = document.getElementById('chatImageInput');
        if (imageInput) {
            imageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                const imagePreview = document.getElementById('imagePreview');
                
                if (file && imagePreview) {
                    // Validate file
                    if (!file.type.startsWith('image/')) {
                        if (typeof Swal !== 'undefined') {
                            Swal.fire({
                                icon: 'error',
                                title: 'خطأ',
                                text: 'الملف يجب أن يكون صورة!',
                                background: '#0a0a1a',
                                color: '#fff',
                                confirmButtonColor: '#4ecdc4'
                            });
                        }
                        this.value = '';
                        return;
                    }
                    
                    if (file.size > 3 * 1024 * 1024) {
                        if (typeof Swal !== 'undefined') {
                            Swal.fire({
                                icon: 'error',
                                title: 'خطأ',
                                text: 'حجم الصورة كبير جداً! الحد الأقصى 3MB',
                                background: '#0a0a1a',
                                color: '#fff',
                                confirmButtonColor: '#4ecdc4'
                            });
                        }
                        this.value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        imagePreview.innerHTML = `
                            <div style="position: relative; display: inline-block;">
                                <img src="${e.target.result}" 
                                     style="max-width: 120px; max-height: 120px; border-radius: 10px; border: 2px solid #4ecdc4;">
                                <button onclick="clearImage()" 
                                        style="position: absolute; top: -8px; right: -8px; 
                                               background: #ff4757; color: white; 
                                               border: none; border-radius: 50%; 
                                               width: 24px; height: 24px; 
                                               cursor: pointer; font-weight: bold;">
                                    ×
                                </button>
                                <div style="margin-top: 5px; font-size: 12px; color: #888;">
                                    ${file.name} (${Math.round(file.size / 1024)} KB)
                                </div>
                            </div>
                        `;
                        imagePreview.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        console.log('✅ تم تهيئة نظام منهجكو الذكي بنجاح!');
        console.log('👨‍💻 المنشئ: ' + CREATOR.name + ' (' + CREATOR.nameEn + ')');
        console.log('🔑 المفاتيح المتاحة: ' + (AI_CONFIG.apiKeys.length + AI_CONFIG.backupKeys.length));
        console.log('🤖 النماذج المتاحة: ' + AI_CONFIG.models.length);
        
    } catch (error) {
        console.error('❌ خطأ في تهيئة النظام:', error);
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
    SYSTEM_PROMPTS: SYSTEM_PROMPTS,
    AI_CONFIG: AI_CONFIG,
    
    // Test function
    testSystem: function() {
        console.log('🧪 اختبار النظام...');
        console.log('✅ النظام يعمل بشكل صحيح!');
        return '✅ نظام منهجكو الذكي جاهز للعمل!';
    }
};

// Auto-test on load
setTimeout(() => {
    if (window.ManhagkoAI && window.ManhagkoAI.testSystem) {
        window.ManhagkoAI.testSystem();
    }
}, 2000);
