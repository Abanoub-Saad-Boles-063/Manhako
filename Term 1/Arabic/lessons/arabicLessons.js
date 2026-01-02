// Arabic Language - اللغة العربية
// ملفات PDF فقط بناءً على طلب المستخدم

// Welcome message with PDF resources only
window.arabicLesson1 = `
<div class="lesson-header">
    <h1>📂 مصادر اللغة العربية</h1>
    <h2>جميع الملفات والمراجع</h2>
</div>

<div class="card">
    <div class="card-title">📚 الكتاب المدرسي</div>
    <div style="display: grid; gap: 1rem;">
        <a href="كتاب العربي.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(0,240,255,0.15), rgba(255,0,234,0.15)); border: 2px solid var(--primary); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-10px)'; this.style.boxShadow='0 10px 30px rgba(0,240,255,0.3)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">
            <span style="font-size: 3rem;">📘</span>
            <div>
                <div style="font-size: 1.2rem; font-weight: bold; color: var(--primary);">كتاب اللغة العربية</div>
                <div style="color: rgba(255,255,255,0.6);">الكتاب المدرسي كاملاً</div>
            </div>
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📝 الملخصات والمذكرات</div>
    <div style="display: grid; gap: 1rem;">
        <a href="مصادر PDF/مذكرة اللغة العربية للصف الثالث الثانوي الفني استاذ محمود شمس.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(0,255,136,0.1); border: 1px solid var(--accent); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">📗</span>
            <div>
                <div style="font-weight: bold;">مذكرة أ/ محمود شمس</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">شرح شامل ومبسط</div>
            </div>
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📋 بنوك الأسئلة والامتحانات</div>
    <div style="display: grid; gap: 1rem;">
        <a href="مصادر PDF/امتحانات اللغة العربية من 2020 الي 2023.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">📋</span>
            <div>
                <div style="font-weight: bold;">امتحانات 2020 - 2023</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">امتحانات السنوات السابقة</div>
            </div>
        </a>
        <a href="مصادر PDF/بنك اسئلة اللغة العربية دبلوم المدارس التكنولوجيا التطبيقية الدولية (2).pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">📝</span>
            <div>
                <div style="font-weight: bold;">بنك أسئلة اللغة العربية</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">أسئلة شاملة للمراجعة</div>
            </div>
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">🎬 روابط يوتيوب للشرح</div>
    <div style="display: grid; gap: 1rem;">
        <a href="https://www.youtube.com/watch?v=OLKDi7PXUMc" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">🎥</span>
            <div>
                <div style="font-weight: bold;">شرح النحو</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">فيديو شامل</div>
            </div>
        </a>
        <a href="https://www.youtube.com/watch?v=OzjJ_R-Laxs" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">🎥</span>
            <div>
                <div style="font-weight: bold;">شرح إضافي</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">مراجعة عامة</div>
            </div>
        </a>
        <a href="https://www.youtube.com/watch?v=iTClK_o8ACY" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">📖</span>
            <div>
                <div style="font-weight: bold;">شرح القراءة - الجزء الأول</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">موضوعات القراءة</div>
            </div>
        </a>
        <a href="https://www.youtube.com/watch?v=WgMJGS-xqpE" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">📖</span>
            <div>
                <div style="font-weight: bold;">شرح القراءة - الجزء الثاني</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">تكملة موضوعات القراءة</div>
            </div>
        </a>
        <a href="https://www.youtube.com/watch?v=sOIxiJoEkJA" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 12px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            <span style="font-size: 2rem;">📜</span>
            <div>
                <div style="font-weight: bold;">شرح النصوص</div>
                <div style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">النصوص الأدبية</div>
            </div>
        </a>
    </div>
</div>

<div class="note">
    جميع الملفات جاهزة للتحميل والمراجعة. اضغط على أي ملف لفتحه مباشرة!
</div>
`;

// Make all lessons point to the same PDF resources page
window.arabicLesson2 = window.arabicLesson1;
window.arabicLesson3 = window.arabicLesson1;
window.arabicLesson4 = window.arabicLesson1;
window.arabicLesson5 = window.arabicLesson1;
window.arabicPDFs = window.arabicLesson1;
