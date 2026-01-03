// Manhagko AI System - Enhanced Version with Smart API Key Rotation
// Compatible with existing website structure
// Creator: ابانوب سعد بولس (Abanoub Saad Boulus)

// API Keys Management System
const API_KEYS_MANAGER = {
    keys: [
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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',
        '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'
    ],
    
    currentIndex: 0,
    failedKeys: new Set(),
    keyUsage: {},
    maxDailyUsage: 30, // افتراضي لكل مفتاح يومياً
    
    // استرجاع المفتاح الحالي
    getCurrentKey() {
        return this.keys[this.currentIndex];
    },
    
    // التبديل إلى المفتاح التالي
    nextKey() {
        // حفظ المفتاح القديم إذا فشل
        if (this.failedKeys.has(this.keys[this.currentIndex])) {
            console.log(`🗑️ إزالة المفتاح ${this.currentIndex + 1} من الخدمة`);
        }
        
        // البحث عن مفتاح صالح
        let attempts = 0;
        while (attempts < this.keys.length) {
            this.currentIndex = (this.currentIndex + 1) % this.keys.length;
            attempts++;
            
            // إذا كان المفتاح غير محظور
            if (!this.failedKeys.has(this.keys[this.currentIndex])) {
                const usage = this.getKeyUsage(this.keys[this.currentIndex]);
                if (usage < this.maxDailyUsage) {
                    console.log(`🔄 التبديل إلى المفتاح ${this.currentIndex + 1} (الاستخدام: ${usage}/${this.maxDailyUsage})`);
                    return this.keys[this.currentIndex];
                }
            }
        }
        
        // إذا فشلت جميع المفاتيح
        return null;
    },
    
    // تسجيل فشل المفتاح
    markKeyFailed(key) {
        const index = this.keys.indexOf(key);
        if (index !== -1) {
            this.failedKeys.add(key);
            console.log(`❌ تم حظر المفتاح ${index + 1}`);
        }
    },
    
    // تسجيل استخدام ناجح للمفتاح
    recordSuccess(key) {
        const today = new Date().toDateString();
        const keyId = key.substring(0, 15);
        
        if (!this.keyUsage[today]) {
            this.keyUsage[today] = {};
        }
        
        if (!this.keyUsage[today][keyId]) {
            this.keyUsage[today][keyId] = 0;
        }
        
        this.keyUsage[today][keyId]++;
        console.log(`✅ تم تسجيل استخدام للمفتاح ${keyId} (اليوم: ${this.keyUsage[today][keyId]})`);
    },
    
    // الحصول على استخدام المفتاح اليوم
    getKeyUsage(key) {
        const today = new Date().toDateString();
        const keyId = key.substring(0, 15);
        
        if (this.keyUsage[today] && this.keyUsage[today][keyId]) {
            return this.keyUsage[today][keyId];
        }
        return 0;
    },
    
    // إعادة تعيين الاستخدام اليومي
    resetDailyUsage() {
        const today = new Date().toDateString();
        this.keyUsage[today] = {};
        console.log('🔄 تم إعادة تعيين الاستخدام اليومي');
    },
    
    // التحقق من وجود مفاتيح متاحة
    hasAvailableKeys() {
        const available = this.keys.filter(key => !this.failedKeys.has(key));
        return available.length > 0;
    },
    
    // إحصاءات المفاتيح
    getStats() {
        const available = this.keys.filter(key => !this.failedKeys.has(key)).length;
        const failed = this.failedKeys.size;
        const today = new Date().toDateString();
        const totalUsageToday = this.keyUsage[today] ? 
            Object.values(this.keyUsage[today]).reduce((a, b) => a + b, 0) : 0;
        
        return {
            total: this.keys.length,
            available: available,
            failed: failed,
            currentIndex: this.currentIndex,
            usageToday: totalUsageToday,
            currentKeyUsage: this.getKeyUsage(this.getCurrentKey())
        };
    }
};

// نظام AI الأساسي
const AI_CONFIG = {
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    
    // نماذج مجانية منظمة حسب الأولوية
    freeModels: [
        'google/gemini-2.0-flash-exp:free',
        'mistralai/mistral-small-3.1-24b-instruct:free',
        'meta-llama/llama-3.2-3b-instruct:free',
        'microsoft/phi-3.5-mini-instruct:free',
        'huggingfaceh4/zephyr-7b-beta:free',
        'openchat/openchat-7b:free'
    ],
    
    maxRetries: 5,
    requestDelay: 2000,
    timeout: 40000,
    cooldownAfterFail: 30000 // 30 ثانية تهدئة بعد فشل متعدد
};

// معلومات الصانع
const CREATOR = {
    name: 'ابانوب سعد بولس',
    nameEn: 'Abanoub Saad Boulus',
    questions: [
        'من صنعك', 'مين عملك', 'من أنشأك', 'من صممك', 'من برمجك',
        'who made you', 'who created you', 'who programmed you',
        'مين صنعك', 'مين صممك', 'مين برمجك', 'من عملك', 'من انشأك'
    ]
};

// أسئلة الهوية
const IDENTITY_QUESTIONS = [
    'ما اسمك', 'انت مين', 'مين انت', 'اسمك ايه', 'اسمك إيه',
    'what is your name', 'who are you', 'انت اسمك ايه',
    'tell me your name', 'عرف نفسك', 'عرفني بنفسك'
];

// نظام Prompts
const SYSTEM_PROMPTS = {
    chat: `أنت مساعد تعليمي ذكي لطلاب Senior المصريين. اسمك "منهجكو AI".

قواعد أساسية:
1. أجب باللهجة المصرية البسيطة والواضحة
2. تخصصك الرئيسي: الرياضيات، الفيزياء، الكيمياء، اللغة العربية
3. إذا كان السؤال بالإنجليزية، أجب بالإنجليزية
4. إذا كان السؤال بالعربية، أجب بالعربية
5. استخدم الإيموجي لجعل الإجابة ممتعة
6. حل المسائل خطوة بخطوة
7. إذا سُئلت عن صانعك: ابانوب سعد بولس (Abanoub Saad Boulus)
8. إذا سُئلت عن اسمك: "منهجكو AI" - المساعد الذكي لطلاب Senior
9. كن دقيقاً في المعلومات العلمية
10. إذا لم تعرف الإجابة، اطلب توضيح السؤال`
};

// إدارة الحالة
let requestQueue = [];
let isProcessing = false;
let cooldownUntil = 0;
let dailyResetDone = false;

// التحويل إلى Base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) reject(new Error('لا يوجد ملف'));
        
        if (!file.type.startsWith('image/')) {
            reject(new Error('الملف يجب أن يكون صورة'));
            return;
        }
        
        if (file.size > 3 * 1024 * 1024) {
            reject(new Error('حجم الصورة كبير جداً (الحد الأقصى 3MB)'));
            return;
        }
        
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = () => reject(new Error('فشل قراءة الملف'));
        reader.readAsDataURL(file);
    });
}

// التحقق من الأسئلة الخاصة
function isCreatorQuestion(message) {
    if (!message) return false;
    const msg = message.toLowerCase().trim();
    return CREATOR.questions.some(q => msg.includes(q.toLowerCase()));
}

function isIdentityQuestion(message) {
    if (!message) return false;
    const msg = message.toLowerCase().trim();
    return IDENTITY_QUESTIONS.some(q => msg.includes(q.toLowerCase()));
}

// الردود المسبقة
function getSpecialResponse(message) {
    if (!message) return null;
    
    if (isCreatorQuestion(message)) {
        return `🎉 **أنا "منهجكو AI"** - المساعد التعليمي الذكي! 🤖✨\n\n` +
               `**صانعي هو:** ${CREATOR.name} (${CREATOR.nameEn})\n` +
               `هو المطور الذي برمجني لمساعدة طلاب Senior! 📚💪\n\n` +
               `جاهز للإجابة على أسئلتك! 😊👍`;
    }
    
    if (isIdentityQuestion(message)) {
        return `👋 **أهلاً! أنا "منهجكو AI"** - المساعد التعليمي! 🤓\n\n` +
               `**دوري:** مساعدتك في فهم الدروس وحل المسائل 📚\n` +
               `**مجالاتي:** الرياضيات، الفيزياء، الكيمياء، اللغة العربية 🔢⚛️🧪📖\n\n` +
               `اسألني أي شيء! 😊`;
    }
    
    return null;
}

// إرسال الطلب مع تدوير المفاتيح
async function makeAPICall(messages, model, currentKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AI_CONFIG.timeout);
    
    try {
        const response = await fetch(AI_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin || 'https://manhagko.com',
                'X-Title': 'Manhagko AI'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: 1500,
                temperature: 0.7,
                top_p: 0.9
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            
            if (response.status === 429 || response.status === 402) {
                // تجاوز الحد - حظر المفتاح
                API_KEYS_MANAGER.markKeyFailed(currentKey);
                throw new Error('RATE_LIMIT');
            }
            
            if (response.status === 401) {
                // مفتاح غير صالح
                API_KEYS_MANAGER.markKeyFailed(currentKey);
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

// الدالة الرئيسية مع التدوير الذكي
async function sendToAI(message, imageBase64 = null, systemPrompt = SYSTEM_PROMPTS.chat) {
    // التحقق من فترة التهدئة
    if (Date.now() < cooldownUntil) {
        const waitTime = Math.ceil((cooldownUntil - Date.now()) / 1000);
        return `⏳ الخدمة في فترة تهدئة. جرب تاني بعد ${waitTime} ثانية! 😊`;
    }
    
    if (isProcessing) {
        return "👋 لسه بفكر في الرد السابق... استنى شوية! 🤔";
    }
    
    isProcessing = true;
    
    try {
        // إعادة تعيين الاستخدام اليومي
        if (!dailyResetDone) {
            API_KEYS_MANAGER.resetDailyUsage();
            dailyResetDone = true;
        }
        
        // التحقق من الأسئلة الخاصة
        if (message && !imageBase64) {
            const specialResponse = getSpecialResponse(message);
            if (specialResponse) {
                isProcessing = false;
                return specialResponse;
            }
        }
        
        // التحقق من وجود مفاتيح متاحة
        if (!API_KEYS_MANAGER.hasAvailableKeys()) {
            isProcessing = false;
            return "⚠️ جميع المفاتيح وصلت للحد الأقصى اليوم. جرب تاني بكرة! 😊";
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
        let attempts = 0;
        const maxTotalAttempts = AI_CONFIG.maxRetries * 3;
        
        // محاولة مع جميع المفاتيح والنماذج
        while (attempts < maxTotalAttempts && API_KEYS_MANAGER.hasAvailableKeys()) {
            attempts++;
            
            // الحصول على المفتاح الحالي
            let currentKey = API_KEYS_MANAGER.getCurrentKey();
            if (!currentKey) {
                currentKey = API_KEYS_MANAGER.nextKey();
                if (!currentKey) break;
            }
            
            // تجربة كل النماذج
            for (const model of AI_CONFIG.freeModels) {
                try {
                    console.log(`🔍 محاولة ${attempts}: مفتاح ${API_KEYS_MANAGER.currentIndex + 1}, نموذج ${model}`);
                    
                    const result = await makeAPICall(messages, model, currentKey);
                    
                    // تسجيل النجاح
                    API_KEYS_MANAGER.recordSuccess(currentKey);
                    isProcessing = false;
                    
                    console.log('✅ نجحت المحاولة!');
                    console.log('📊 إحصائيات:', API_KEYS_MANAGER.getStats());
                    
                    return result;
                    
                } catch (error) {
                    lastError = error.message;
                    console.warn(`⚠️ فشل المحاولة ${attempts}: ${error.message}`);
                    
                    // إذا كان خطأ في المفتاح، جرب مفتاح جديد
                    if (error.message === 'RATE_LIMIT' || error.message === 'AUTH_ERROR') {
                        currentKey = API_KEYS_MANAGER.nextKey();
                        if (!currentKey) break;
                        
                        // انتظر قبل المحاولة الجديدة
                        await new Promise(resolve => setTimeout(resolve, AI_CONFIG.requestDelay));
                        continue;
                    }
                    
                    // إذا كان خطأ آخر، انتظر ثم حاول بنفس المفتاح
                    if (attempts < maxTotalAttempts) {
                        await new Promise(resolve => setTimeout(resolve, AI_CONFIG.requestDelay * attempts));
                    }
                }
            }
            
            // بعد تجربة كل النماذج، انتقل لمفتاح جديد
            currentKey = API_KEYS_MANAGER.nextKey();
            if (!currentKey) break;
        }
        
        isProcessing = false;
        
        // إذا فشلت جميع المحاولات
        if (!API_KEYS_MANAGER.hasAvailableKeys()) {
            cooldownUntil = Date.now() + AI_CONFIG.cooldownAfterFail;
            return "⚠️ جميع المفاتيح استنفذت اليوم. جرب تاني بكرة أو بعد ساعات! 🌙";
        }
        
        // رسائل استرجاع مختلفة
        const fallbacks = [
            "🤔 السيرفرات عليها ضغط كبير! جرب تاني بعد 5 دقائق! 😅",
            "⏳ محاولة الاتصال فشلت. جرب تاني بعد شوية! ✨",
            "🔄 الخدمة متوقفة مؤقتاً. جرب تاني خلال دقائق! 💪"
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
        
    } catch (error) {
        isProcessing = false;
        console.error('AI Error:', error);
        return "🛠️ حصلت مشكلة غير متوقعة. جرب تاني بعد شوية! 😊";
    }
}

// تنسيق الرد
function formatResponse(text) {
    if (!text) return '';
    
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

// تهيئة الشات
function initChatbot() {
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
        
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }
    
    // إضافة إحصائيات
    setInterval(() => {
        const stats = API_KEYS_MANAGER.getStats();
        console.log('📊 إحصائيات المفاتيح:', stats);
    }, 60000); // كل دقيقة
}

// إضافة الأنماط
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
            
            .stats-panel {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                padding: 10px;
                margin: 10px 0;
                font-size: 12px;
                color: #aaa;
            }
        `;
        document.head.appendChild(style);
    }
}

// الدوال العامة
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
    
    // معالجة الصورة
    if (imageInput && imageInput.files && imageInput.files[0]) {
        try {
            imageBase64 = await fileToBase64(imageInput.files[0]);
        } catch (error) {
            console.error('❌ خطأ في تحميل الصورة:', error);
            alert('❌ ' + error.message);
            return;
        }
    }
    
    if (!message && !imageBase64) {
        alert('⚠️ من فضلك اكتب رسالة أو اختر صورة أولاً!');
        return;
    }
    
    // إضافة رسالة المستخدم
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
    window.clearImage();
    
    // عرض التحميل
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
        
        const formattedResponse = formatResponse(response);
        messagesDiv.innerHTML += `<div class="chat-message bot">${formattedResponse}</div>`;
        
        // إضافة إحصائيات (اختياري)
        const stats = API_KEYS_MANAGER.getStats();
        messagesDiv.innerHTML += `
            <div class="stats-panel">
                📊 إحصائيات: ${stats.available}/${stats.total} مفاتيح متاحة | 
                الاستخدام اليومي: ${stats.usageToday} طلب
            </div>
        `;
        
    } catch (error) {
        console.error('❌ خطأ:', error);
        document.getElementById(loadingId)?.remove();
        messagesDiv.innerHTML += `<div class="chat-message bot">🛠️ حصل خطأ. جرب تاني!<br><small>${error.message}</small></div>`;
    }
    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

// التهيئة الرئيسية
function initManhagkoAI() {
    try {
        console.log('🚀 بدء تشغيل نظام تدوير المفاتيح...');
        console.log(`🔑 عدد المفاتيح: ${API_KEYS_MANAGER.keys.length}`);
        
        addStyles();
        initChatbot();
        
        // معالج تحميل الصور
        const imageInput = document.getElementById('chatImageInput');
        if (imageInput) {
            imageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                const imagePreview = document.getElementById('imagePreview');
                
                if (file && imagePreview) {
                    if (!file.type.startsWith('image/')) {
                        alert('⚠️ الملف يجب أن يكون صورة!');
                        this.value = '';
                        return;
                    }
                    
                    if (file.size > 3 * 1024 * 1024) {
                        alert('⚠️ حجم الصورة كبير جداً (الحد الأقصى 3MB)');
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
        
        console.log('✅ تم التهيئة بنجاح');
        console.log('👨‍💻 الصانع: ' + CREATOR.name);
        
        // رسالة ترحيب
        setTimeout(() => {
            const messagesDiv = document.getElementById('chatMessages');
            if (messagesDiv && messagesDiv.children.length === 0) {
                const stats = API_KEYS_MANAGER.getStats();
                messagesDiv.innerHTML = `
                    <div class="chat-message bot">
                        <p>👋 <strong>أهلاً بك في منهجكو AI!</strong></p>
                        <p>أنا المساعد التعليمي الذكي لطلاب <strong>Senior</strong>! 🤖✨</p>
                        <p>🔑 نظام تدوير المفاتيح مفعل: ${stats.available}/${stats.total} مفاتيح متاحة</p>
                        <p>📊 الاستخدام اليومي: ${stats.usageToday} طلب</p>
                        <p>يمكنك:</p>
                        <ul>
                            <li>📝 سؤال أي سؤال في المنهج</li>
                            <li>📸 إرسال صورة للمسألة لحلها</li>
                            <li>🔢 الحصول على شرح مفصل</li>
                        </ul>
                        <p>اسألني الآن! 😊</p>
                    </div>
                `;
            }
        }, 1000);
        
    } catch (error) {
        console.error('⚠️ خطأ في التهيئة:', error);
    }
}

// بدء التشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initManhagkoAI);
} else {
    setTimeout(initManhagkoAI, 500);
}

// التصدير للاستخدام العام
window.ManhagkoAI = {
    sendToAI: sendToAI,
    formatResponse: formatResponse,
    clearImage: window.clearImage,
    sendChatMessage: window.sendChatMessage,
    API_KEYS_MANAGER: API_KEYS_MANAGER,
    getStats: () => API_KEYS_MANAGER.getStats()
};
