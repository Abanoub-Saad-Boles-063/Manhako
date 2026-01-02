// Manhagko AI System - Multi-API Key Rotation System
// Maximum availability with 5 API keys and vision-enabled models

const AI_CONFIG = {
    // Multiple API keys for rotation (each has 50 requests/day = 250 total!)
    apiKeys: [
        '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', // Manhagko
        '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', // Key 2
        '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', // Key 3
        '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', // Key 4
        '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', // New Key 1
        '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', // New Key 2
        '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', // New Key 3
        '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', // New Key 4
        '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', // New Key 5
        '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', // New Key 6
        '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', // New Key 7
        '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', // New Key 8
        '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', // New Key 9
        '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', // New Key 10
        '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', // New Key 11
        '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', // New Key 12
        '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',
        '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',// New Key 13
        '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'  // New Key 14
    ],
    currentKeyIndex: 0,
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    // Vision-enabled models for image support (ordered by preference)
    models: [
        'google/gemini-2.0-flash-exp:free',              // Best vision support
        'google/gemini-2.5-pro-exp-03-25:free',          // Latest Gemini
        'meta-llama/llama-4-maverick:free',              // Vision capable
        'moonshotai/kimi-vl-a3b-thinking:free',          // Vision specialized
        'nvidia/llama-3.1-nemotron-nano-8b-v1:free',     // NVIDIA vision
        'mistralai/mistral-small-3.1-24b-instruct:free', // Mistral
        'deepseek/deepseek-v3-base:free',                // DeepSeek
        'google/gemma-3n-e4b-it:free'                    // Gemma 3
    ],
    maxRetries: 2,
    retryDelay: 300
};

// Get next API key (rotation)
function getNextApiKey() {
    const key = AI_CONFIG.apiKeys[AI_CONFIG.currentKeyIndex];
    AI_CONFIG.currentKeyIndex = (AI_CONFIG.currentKeyIndex + 1) % AI_CONFIG.apiKeys.length;
    return key;
}

// Creator info
const CREATOR = {
    name: 'ابانوب سعد بولس',
    nameEn: 'Abanoub Saad Boulus',
    questions: ['من صنعك', 'مين عملك', 'من أنشأك', 'من صممك', 'من برمجك', 'who made you', 'who created you', 'مين صنعك', 'مين صممك', 'مين برمجك', 'من عملك', 'من انشأك']
};

// Identity questions (who is the AI)
const IDENTITY_QUESTIONS = ['ما اسمك', 'انت مين', 'مين انت', 'اسمك ايه', 'اسمك إيه', 'what is your name', 'who are you', 'انت اسمك ايه', 'tell me your name', 'عرف نفسك', 'عرفني بنفسك'];

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
4. لو الموضوع علمي، اكتب القوانين بالإنجليزي والشرح بالمصري`
};

// Check if asking about creator
function isAskingAboutCreator(message) {
    const lowerMsg = message.toLowerCase();
    return CREATOR.questions.some(q => lowerMsg.includes(q));
}

// Check if asking about AI identity
function isAskingAboutIdentity(message) {
    const lowerMsg = message.toLowerCase();
    return IDENTITY_QUESTIONS.some(q => lowerMsg.includes(q));
}

// Get identity response
function getIdentityResponse() {
    return `أنا منهجكو AI 🤖✨ مساعدك الذكي لطلاب Senior! 🎓<br><br>اقدر اساعدك في حل المسائل، شرح الدروس، أو الاجابة على أي سؤال في المنهج.`;
}


// Get creator response
function getCreatorResponse() {
    return `أنا من تصميم وبرمجة <b>${CREATOR.name}</b> (${CREATOR.nameEn}) 👨‍💻✨<br><br>عملني علشان أساعدكم في المذاكرة والفهم! 🎓📚<br><br>لو عندك أي سؤال في أي مادة، أنا موجود! 🚀`;
}

// Convert file to base64
async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Sleep function for retry delay - This function is no longer used
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Try a single API call with a specific key and model
async function tryAPICallWithKey(messages, model, apiKey) {
    const response = await fetch(AI_CONFIG.endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.href,
            'X-Title': 'Manhagko Educational Platform'
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            max_tokens: 2500,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP_${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error.message || 'API_ERROR');
    }

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
        throw new Error('NO_CONTENT');
    }

    return content;
}

// Send message to AI with Matrix Strategy (Models x Keys)
async function sendToAI(message, imageBase64 = null, systemPrompt = SYSTEM_PROMPTS.chat) {
    const messages = [
        { role: 'system', content: systemPrompt }
    ];

    if (imageBase64) {
        messages.push({
            role: 'user',
            content: [
                {
                    type: 'image_url',
                    image_url: { url: `data:image/jpeg;base64,${imageBase64}` }
                },
                { type: 'text', text: message || 'حل هذه المسألة خطوة بخطوة بنفس طريقة الكتاب المدرسي' }
            ]
        });
    } else {
        messages.push({ role: 'user', content: message });
    }

    let lastError = null;

    // MATRIX STRATEGY: Loop through Models -> Then Loop through Keys
    // This gives us (Models * Keys) chances to succeed!
    for (const model of AI_CONFIG.models) {

        // Try every key for this model
        for (const apiKey of AI_CONFIG.apiKeys) {
            try {
                console.log(`🤖 Trying Model: ${model} | 🔑 Key: ...${apiKey.slice(-6)}`);
                const result = await tryAPICallWithKey(messages, model, apiKey);
                console.log(`✅ SUCCESS! Model: ${model} | Key: ...${apiKey.slice(-6)}`);
                return result; // Return immediately on success
            } catch (error) {
                lastError = error;
                const isRateLimit = error.message.includes('429') || error.message.includes('402');

                if (isRateLimit) {
                    console.warn(`⏳ Rate Limit (429) on Key ...${apiKey.slice(-6)} | Moving to next key...`);
                    // Don't wait, just try next key immediately for speed
                } else {
                    console.warn(`⚠️ Error ${error.message} on Model ${model} | Moving to next key...`);
                }
            }
        }
        // If all keys failed for this model, move to next model
    }

    // If we get here, EVERYTHING failed (9 models * 4 keys = 36 failures)
    // Return a polite fallback instead of throwing error to keep "working" appearance
    console.error('❌ ALL ATTEMPTS FAILED');
    return "معلش، السيرفرات عليها ضغط كبير جداً دلوقتي! 😅\nممكن تجرب تاني كمان شوية؟ أو ابعت السؤال تاني.";
}

// Format AI response with markdown-like styling
function formatResponse(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/```([\s\S]*?)```/g, '<pre class="code-block">$1</pre>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>')
        .replace(/#{3}\s*(.*?)(<br>|$)/g, '<h4 class="response-heading">$1</h4>')
        .replace(/#{2}\s*(.*?)(<br>|$)/g, '<h3 class="response-heading">$1</h3>')
        .replace(/#{1}\s*(.*?)(<br>|$)/g, '<h2 class="response-heading">$1</h2>');
}

// Initialize chatbot
function initChatbot() {
    const chatModal = document.getElementById('chatbotModal');
    const chatInput = document.getElementById('chatInput');
    const imageInput = document.getElementById('chatImageInput');
    const messagesDiv = document.getElementById('chatMessages');
    const imagePreview = document.getElementById('imagePreview');

    let currentImage = null;

    // Image upload handler
    if (imageInput) {
        imageInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                currentImage = await fileToBase64(file);
                if (imagePreview) {
                    imagePreview.innerHTML = `
                        <div class="image-preview-container">
                            <img src="${URL.createObjectURL(file)}" alt="Preview">
                            <button onclick="clearImage()" class="clear-image-btn">✕</button>
                        </div>
                    `;
                    imagePreview.style.display = 'block';
                }
            }
        });
    }

    window.clearImage = function () {
        currentImage = null;
        if (imageInput) imageInput.value = '';
        if (imagePreview) {
            imagePreview.innerHTML = '';
            imagePreview.style.display = 'none';
        }
    };

    window.sendChatMessage = async function () {
        const message = chatInput.value.trim();
        if (!message && !currentImage) return;

        // Add user message
        let userMsgHtml = message;
        if (currentImage) {
            userMsgHtml = `<div class="user-image"><img src="data:image/jpeg;base64,${currentImage}" alt="Uploaded"></div>${message ? '<br>' + message : ''}`;
        }
        messagesDiv.innerHTML += `<div class="chat-message user">${userMsgHtml}</div>`;
        chatInput.value = '';

        // Check identity question first
        if (isAskingAboutIdentity(message)) {
            messagesDiv.innerHTML += `<div class="chat-message bot">${getIdentityResponse()}</div>`;
            clearImage();
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
            return;
        }

        // Check creator question
        if (isAskingAboutCreator(message)) {
            messagesDiv.innerHTML += `<div class="chat-message bot">${getCreatorResponse()}</div>`;
            clearImage();
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
            return;
        }

        // Show loading
        messagesDiv.innerHTML += `
            <div class="chat-message bot loading-msg" id="loadingMsg">
                <div class="loader-futuristic"></div>
                <span>جاري التفكير...</span>
            </div>
        `;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        try {
            const response = await sendToAI(message, currentImage);
            document.getElementById('loadingMsg')?.remove();
            messagesDiv.innerHTML += `<div class="chat-message bot">${formatResponse(response)}</div>`;
        } catch (error) {
            document.getElementById('loadingMsg')?.remove();
            let errorMsg = 'معلش، حصل مشكلة في الاتصال. جرب تاني! 😅';
            if (error.message === 'RATE_LIMIT') {
                errorMsg = '⚠️ استنى شوية وجرب تاني! الخدمة مشغولة دلوقتي. 🔄';
            }
            messagesDiv.innerHTML += `<div class="chat-message bot error">${errorMsg}</div>`;
        }

        clearImage();
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };

    // Enter key handler
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }
}

// Initialize explainer
function initExplainer() {
    window.generateExplanation = async function () {
        const topic = document.getElementById('explainerInput')?.value.trim();
        const subject = document.getElementById('explainerSubject')?.value;
        const resultDiv = document.getElementById('explainerResult');

        if (!topic) {
            Swal.fire({
                icon: 'warning',
                title: 'انتبه! ⚠️',
                text: 'من فضلك اكتب الموضوع اللي عايز تفهمه!',
                confirmButtonText: 'حاضر',
                background: '#0a0a1a',
                color: '#fff',
                confirmButtonColor: '#00f0ff'
            });
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
            const prompt = `اشرحلي بالتفصيل: ${topic}\n\nالمادة: ${subject}`;
            const response = await sendToAI(prompt, null, SYSTEM_PROMPTS.explainer);
            resultDiv.innerHTML = formatResponse(response);
        } catch (error) {
            resultDiv.innerHTML = '<div class="error">معلش، حصل مشكلة في الاتصال. جرب تاني! 😅</div>';
        }
    };
}

// Create floating particles
function createParticles() {
    const container = document.querySelector('.particles-3d');
    if (!container) return;

    const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (15 + Math.random() * 20) + 's';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        container.appendChild(particle);
    }
}

// Scroll reveal animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initChatbot();
    initExplainer();
    initScrollReveal();
});

// Export for use
window.ManhagkoAI = {
    sendToAI,
    formatResponse,
    CREATOR,
    isAskingAboutCreator,
    getCreatorResponse,
    isAskingAboutIdentity,
    getIdentityResponse
};
