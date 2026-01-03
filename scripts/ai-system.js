// Manhagko AI System - Enhanced Version
// Compatible with existing website structure
// Creator: ابانوب سعد بولس (Abanoub Saad Boulus)

const AI_CONFIG = {
    // Primary API Key Only
    apiKey: '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',
    
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    
    // استخدم نموذج واحد فقط لضمان الاستقرار
    model: 'google/gemini-2.0-flash-exp:free',
    
    // نماذج احتياطية في حالة فشل النموذج الأساسي
    backupModels: [
        'mistralai/mistral-small-3.1-24b-instruct:free',
        'meta-llama/llama-3.2-3b-instruct:free'
    ],
    
    maxRetries: 3,
    requestDelay: 1500,
    timeout: 30000 // 30 ثانية
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
8. لو حد سألك عن صانعك، قل إنك صنعت بواسطة: ابانوب سعد بولس (Abanoub Saad Boulus)
9. لو حد سألك عن اسمك، قوله إنك "منهجكو AI" المساعد الذكي لطلاب Senior
10. استخدم اللغة العربية الفصحى أو العامية المصرية حسب سياق السؤال
11. كن دقيقًا في المعلومات العلمية والرياضية
12. لا تختلق معلومات إذا كنت لا تعرف الإجابة، بل اطلب توضيح السؤال`,

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
6. تأكد من صحة المعلومات قبل تقديمها`
};

// Simple state management
let requestQueue = [];
let isProcessing = false;

// Simple file to base64 conversion
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error('لا يوجد ملف'));
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            reject(new Error('الملف يجب أن يكون صورة (jpg, png, gif)'));
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
    return CREATOR.questions.some(question => 
        normalizedMessage.includes(question.toLowerCase())
    );
}

// Check if question is about AI identity
function isIdentityQuestion(message) {
    if (!message) return false;
    const normalizedMessage = message.toLowerCase().trim();
    return IDENTITY_QUESTIONS.some(question => 
        normalizedMessage.includes(question.toLowerCase())
    );
}

// Get pre-defined response for special questions
function getSpecialResponse(message, imageBase64 = null) {
    if (!message && !imageBase64) return null;
    
    const normalizedMessage = message ? message.toLowerCase().trim() : '';
    
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

// Make API call with timeout
async function makeAPICall(messages, model) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AI_CONFIG.timeout);
    
    try {
        const response = await fetch(AI_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin || 'https://manhagko.com',
                'X-Title': 'Manhagko AI'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: 2000,
                temperature: 0.7,
                top_p: 0.9,
                frequency_penalty: 0.1,
                presence_penalty: 0.1
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

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
                throw new Error('AUTH_ERROR');
            }
            throw new Error(`HTTP_${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message || 'API_ERROR');
        }

        return data.choices?.[0]?.message?.content || 'لم أستطع الحصول على إجابة';
        
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('TIMEOUT');
        }
        throw error;
    }
}

// Main AI function
async function sendToAI(message, imageBase64 = null, systemPrompt = SYSTEM_PROMPTS.chat) {
    if (isProcessing) {
        return "👋 لسه بفكر في الرد السابق... استنى شوية وحاول تاني! 🤔";
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
                    { type: 'text', text: message || 'حل هذه المسألة خطوة بخطوة' }
                ]
            });
        } else {
            messages.push({ role: 'user', content: message });
        }
        
        let lastError = null;
        let modelsToTry = [AI_CONFIG.model, ...AI_CONFIG.backupModels];
        
        // Try all available models
        for (let i = 0; i < modelsToTry.length; i++) {
            const model = modelsToTry[i];
            
            for (let attempt = 1; attempt <= AI_CONFIG.maxRetries; attempt++) {
                try {
                    console.log(`🔍 محاولة ${attempt}: استخدام النموذج ${model}`);
                    const result = await makeAPICall(messages, model);
                    isProcessing = false;
                    return result;
                } catch (error) {
                    lastError = error.message;
                    console.warn(`⚠️ فشلت المحاولة ${attempt}: ${error.message}`);
                    
                    // Wait before next attempt
                    if (attempt < AI_CONFIG.maxRetries) {
                        await new Promise(resolve => setTimeout(resolve, AI_CONFIG.requestDelay * attempt));
                    }
                }
            }
        }
        
        isProcessing = false;
        
        // Return fallback response based on error type
        if (lastError === 'RATE_LIMIT' || lastError === 'QUOTA_EXCEEDED') {
            return "⚠️ وصلنا للحد الأقصى للطلبات اليوم. جرب تاني بعد شوية أو بكرة! 😊";
        } else if (lastError === 'TIMEOUT') {
            return "⏱️ السؤال أخذ وقت طويل. جرب تاني أو بسّط سؤالك شوية! 🔄";
        } else if (lastError === 'AUTH_ERROR') {
            return "🔐 حصلت مشكلة في الاتصال. تأكد من اتصالك بالإنترنت! 🌐";
        }
        
        // General fallback responses
        const fallbacks = [
            "🤔 معلش، السيرفرات عليها ضغط كبير دلوقتي! جرب تاني بعد شوية! 😅",
            "⏳ الخدمة مشغولة، حاول تاني بعد دقيقة! في انتظارك! ✨",
            "🔄 عندي مشكلة في الاتصال دلوقتي. جرب تاني بعد شوية! 💪"
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
        
    } catch (error) {
        isProcessing = false;
        console.error('AI Error:', error);
        return "🛠️ معلش، حصلت مشكلة غير متوقعة. جرب تاني بعد شوية! 😊";
    }
}

// Format response with better HTML formatting
function formatResponse(text) {
    if (!text) return '';
    
    // Clean and format text
    let formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    // Add paragraph tags
    formatted = `<p>${formatted}</p>`;
    
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
    
    // Add input event for auto-resize
    if (chatInput) {
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
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
                padding: 15px;
                color: #4ecdc4;
            }
            
            .chat-message.bot.error {
                background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05));
                border-left: 3px solid #ff6b6b;
                color: #ff6b6b;
            }
            
            .chat-message.bot {
                background: linear-gradient(135deg, rgba(10, 10, 26, 0.95), rgba(30, 30, 60, 0.9));
                border: 1px solid rgba(78, 205, 196, 0.3);
                border-radius: 10px;
                margin: 10px 0;
                padding: 15px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .chat-message.user {
                background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(78, 205, 196, 0.05));
                border: 1px solid rgba(78, 205, 196, 0.2);
                border-radius: 10px;
                margin: 10px 0;
                padding: 15px;
            }
            
            .creator-response {
                background: linear-gradient(135deg, rgba(46, 125, 50, 0.15), rgba(76, 175, 80, 0.1)) !important;
                border-left: 3px solid #4CAF50 !important;
            }
            
            .identity-response {
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(66, 165, 245, 0.1)) !important;
                border-left: 3px solid #2196F3 !important;
            }
            
            .inline-code {
                background: rgba(78, 205, 196, 0.1);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'Courier New', monospace;
                color: #4ecdc4;
            }
            
            .loading-container {
                text-align: center;
                padding: 30px;
            }
            
            #explainerResult.active {
                background: linear-gradient(135deg, rgba(10, 10, 26, 0.95), rgba(30, 30, 60, 0.9));
                border: 1px solid rgba(78, 205, 196, 0.3);
                border-radius: 10px;
                padding: 20px;
                margin-top: 20px;
                max-height: 500px;
                overflow-y: auto;
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
        console.error('❌ عناصر الدردشة غير موجودة');
        return;
    }
    
    const message = chatInput.value.trim();
    let imageBase64 = null;
    
    // Handle image upload
    if (imageInput && imageInput.files && imageInput.files[0]) {
        try {
            imageBase64 = await fileToBase64(imageInput.files[0]);
        } catch (error) {
            console.error('❌ خطأ في تحميل الصورة:', error);
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
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
                text: 'من فضلك اكتب رسالة أو اختر صورة أولاً!',
                background: '#0a0a1a',
                color: '#fff',
                confirmButtonColor: '#4ecdc4'
            });
        }
        return;
    }
    
    // Add user message
    let userMsgHtml = '';
    if (imageBase64) {
        userMsgHtml = `
            <div style="margin-bottom: 10px;">
                <img src="data:image/jpeg;base64,${imageBase64}" 
                     style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 1px solid rgba(78, 205, 196, 0.3);">
            </div>
        `;
    }
    
    if (message) {
        userMsgHtml += `<p style="margin: 10px 0 0 0; color: #fff;">${message.replace(/\n/g, '<br>')}</p>`;
    }
    
    if (userMsgHtml) {
        messagesDiv.innerHTML += `<div class="chat-message user">${userMsgHtml}</div>`;
    }
    
    chatInput.value = '';
    chatInput.style.height = 'auto';
    
    // Clear image
    window.clearImage();
    
    // Show loading
    const loadingId = 'loading-' + Date.now();
    messagesDiv.innerHTML += `
        <div class="chat-message bot loading-msg" id="${loadingId}">
            <div class="loader-futuristic"></div>
            <span>🤔 جاري التفكير وتحليل السؤال...</span>
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
        
        const formattedResponse = formatResponse(response);
        messagesDiv.innerHTML += `<div class="chat-message bot${additionalClass}">${formattedResponse}</div>`;
        
    } catch (error) {
        console.error('❌ خطأ في إرسال الرسالة:', error);
        document.getElementById(loadingId)?.remove();
        messagesDiv.innerHTML += `<div class="chat-message bot error">🛠️ معليش، حصل خطأ. جرب تاني بعد شوية!<br><small>${error.message || 'خطأ غير معروف'}</small></div>`;
    }
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

window.generateExplanation = async function() {
    const topicInput = document.getElementById('explainerInput');
    const subjectSelect = document.getElementById('explainerSubject');
    const resultDiv = document.getElementById('explainerResult');
    
    if (!topicInput || !resultDiv) {
        console.error('❌ عناصر الشرح غير موجودة');
        return;
    }
    
    const topic = topicInput.value.trim();
    const subject = subjectSelect ? subjectSelect.value : 'general';
    
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
        } else {
            alert('⚠️ من فضلك اكتب الموضوع أولاً!');
        }
        return;
    }
    
    resultDiv.classList.add('active');
    resultDiv.innerHTML = `
        <div class="loading-container">
            <div class="loader-futuristic" style="width: 40px; height: 40px;"></div>
            <p style="margin-top: 20px; color: #4ecdc4;">📚 جاري إنشاء الشرح التفصيلي...</p>
            <p style="font-size: 14px; color: #aaa;">الموضوع: ${topic}</p>
        </div>
    `;
    
    try {
        const prompt = `اشرح الموضوع التالي بالتفصيل المطلوب للطلاب:\n"${topic}"\n\nالمادة: ${subject}\n\nالشرح يجب أن يكون مناسبًا لطلاب الصف الثالث الثانوي (Senior).`;
        const response = await sendToAI(prompt, null, SYSTEM_PROMPTS.explainer);
        resultDiv.innerHTML = formatResponse(response);
    } catch (error) {
        console.error('❌ خطأ في إنشاء الشرح:', error);
        resultDiv.innerHTML = '<div class="error">🛠️ معليش، حصل خطأ في إنشاء الشرح. جرب تاني بعد شوية! 😅</div>';
    }
};

// Initialize when page is ready
function initManhagkoAI() {
    try {
        console.log('🚀 بدء تشغيل Manhagko AI...');
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
                        alert('⚠️ الملف يجب أن يكون صورة!');
                        this.value = '';
                        return;
                    }
                    
                    if (file.size > 3 * 1024 * 1024) {
                        alert('⚠️ حجم الصورة كبير جداً. الحد الأقصى 3MB');
                        this.value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        imagePreview.innerHTML = `
                            <div style="position: relative; display: inline-block; margin: 10px 0;">
                                <img src="${e.target.result}" 
                                     style="max-width: 150px; max-height: 150px; border-radius: 8px; border: 2px solid #4ecdc4;">
                                <button onclick="clearImage()" 
                                        style="position: absolute; top: -10px; right: -10px; background: #ff4757; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; font-size: 16px; line-height: 1;">×</button>
                            </div>
                        `;
                        imagePreview.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        console.log('✅ تم تهيئة Manhagko AI بنجاح');
        console.log('👨‍💻 الصانع: ' + CREATOR.name + ' (' + CREATOR.nameEn + ')');
        console.log('🔑 مفتاح API جاهز للاستخدام');
        
        // Show welcome message
        setTimeout(() => {
            const messagesDiv = document.getElementById('chatMessages');
            if (messagesDiv && messagesDiv.children.length === 0) {
                messagesDiv.innerHTML = `
                    <div class="chat-message bot identity-response">
                        <p>👋 <strong>أهلاً وسهلاً!</strong></p>
                        <p>أنا <strong>"منهجكو AI"</strong> - المساعد التعليمي الذكي لطلاب <strong>Senior</strong>! 🤖✨</p>
                        <p>أساعدك في فهم الدروس وحل المسائل في:</p>
                        <ul>
                            <li>📐 الرياضيات</li>
                            <li>⚛️ الفيزياء</li>
                            <li>🔧 الميكانيكا</li>
                            <li>📖 اللغة العربية</li>
                            <li>🌍 الدراسات الاجتماعية</li>
                        </ul>
                        <p>يمكنك إرسال صورة للمسألة وسأحلها لك خطوة بخطوة! 📸</p>
                        <p>اسألني أي سؤال في المنهج، وأنا تحت أمرك! 😊</p>
                    </div>
                `;
            }
        }, 1000);
        
    } catch (error) {
        console.error('⚠️ خطأ في تهيئة النظام:', error);
    }
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initManhagkoAI);
} else {
    // If document is already loaded
    if (typeof jQuery !== 'undefined') {
        jQuery(document).ready(initManhagkoAI);
    } else {
        setTimeout(initManhagkoAI, 500);
    }
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
    AI_CONFIG: AI_CONFIG
};
