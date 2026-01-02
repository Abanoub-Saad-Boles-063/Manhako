// Mechanics Lessons - STEM 3 Term 1
// Lessons with English problems and Egyptian Arabic explanations

// Lesson 1: Forces and Vectors
window.mechLesson1 = `
<div class="lesson-header">
    <h1>Lesson 1: Forces and Vectors</h1>
    <h2>الدرس الأول: القوى والمتجهات</h2>
</div>

<div class="card">
    <div class="card-title">What is a Force? - ما هي القوة؟</div>
    <div class="definition">
        A force is a push or pull that can change the state of motion of an object. Force is a vector quantity, meaning it has both magnitude and direction.
    </div>
    <div class="explanation">
        <b>يعني إيه قوة؟</b> 💪<br><br>
        القوة هي دفع أو سحب بيقدر يغير حالة حركة جسم.<br><br>
        <b>القوة كمية متجهة (Vector):</b><br>
        ✅ ليها مقدار (حجم)<br>
        ✅ ليها اتجاه<br><br>
        <b>وحدة القوة:</b> نيوتن (N)
    </div>
</div>

<div class="card">
    <div class="card-title">Vector Addition - جمع المتجهات</div>
    <div class="definition">
        Vectors can be added using:<br>
        1) <b>Triangle Rule:</b> Place vectors head-to-tail<br>
        2) <b>Parallelogram Rule:</b> Draw vectors from same point, complete parallelogram
    </div>
    <div class="explanation">
        <b>طرق جمع المتجهات:</b> ➕<br><br>
        1️⃣ <b>قاعدة المثلث:</b><br>
        نرسم المتجه الأول، ثم من نهايته نرسم المتجه التاني.<br>
        المحصلة = من بداية الأول لنهاية التاني<br><br>
        2️⃣ <b>قاعدة متوازي الأضلاع:</b><br>
        نرسم المتجهين من نفس النقطة، ونكمل متوازي أضلاع.<br>
        المحصلة = القطر!
    </div>
    <div class="formula-box">
        \\[ R = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos\\theta} \\]
    </div>
    <div class="explanation">
        <b>قانون المحصلة:</b><br>
        • R = المحصلة<br>
        • F₁, F₂ = القوتين<br>
        • θ = الزاوية بينهم<br><br>
        <b>حالات خاصة:</b><br>
        • θ = 0° ← R = F₁ + F₂ (نفس الاتجاه)<br>
        • θ = 180° ← R = |F₁ - F₂| (متعاكستين)<br>
        • θ = 90° ← R = √(F₁² + F₂²) (فيثاغورس!)
    </div>
</div>

<div class="card">
    <div class="card-title">Components of a Vector - مركبات المتجه</div>
    <div class="formula-box">
        \\[ F_x = F\\cos\\theta \\]
        \\[ F_y = F\\sin\\theta \\]
    </div>
    <div class="explanation">
        <b>تحليل القوة لمركبتين:</b> 📐<br><br>
        أي قوة ممكن نحللها لمركبتين:<br>
        • <b>Fₓ (الأفقية):</b> F × cos θ<br>
        • <b>Fᵧ (الرأسية):</b> F × sin θ<br><br>
        حيث θ = الزاوية مع المحور الأفقي
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 Solved Example</div>
    <div class="problem">
        <b>Problem:</b> Two forces of magnitudes 5N and 12N act at right angles. Find the resultant force.
    </div>
    <div class="solution">
        <b>الحل:</b><br><br>
        <b>المعطيات:</b> F₁ = 5N, F₂ = 12N, θ = 90°<br><br>
        بما أن الزاوية 90°، نستخدم فيثاغورس:<br><br>
        R = √(F₁² + F₂²)<br>
        R = √(5² + 12²)<br>
        R = √(25 + 144)<br>
        R = √169 = <b>13N</b> ✅<br><br>
        💡 ده مثلث فيثاغورس (5, 12, 13)!
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة سريعة - الدرس الأول</h3>
    <ul>
        <li>✅ <b>القوة:</b> كمية متجهة لها مقدار واتجاه</li>
        <li>✅ <b>المحصلة:</b> R = √(F₁² + F₂² + 2F₁F₂cosθ)</li>
        <li>✅ <b>زاوية 90°:</b> R = √(F₁² + F₂²)</li>
        <li>✅ <b>المركبات:</b> Fₓ = Fcosθ, Fᵧ = Fsinθ</li>
    </ul>
</div>
`;

// Lesson 2: Equilibrium
window.mechLesson2 = `
<div class="lesson-header">
    <h1>Lesson 2: Equilibrium of Forces</h1>
    <h2>الدرس الثاني: اتزان القوى</h2>
</div>

<div class="card">
    <div class="card-title">Equilibrium Condition - شرط الاتزان</div>
    <div class="definition">
        A body is in equilibrium when the resultant of all forces acting on it is zero.<br><br>
        ∑F = 0 or ∑Fₓ = 0 and ∑Fᵧ = 0
    </div>
    <div class="explanation">
        <b>متى يكون الجسم متزن؟</b> ⚖️<br><br>
        الجسم متزن لما يكون مجموع كل القوى المؤثرة عليه = صفر!<br><br>
        <b>الشروط:</b><br>
        ✅ مجموع القوى الأفقية = 0<br>
        ✅ مجموع القوى الرأسية = 0<br><br>
        <b>يعني:</b> القوى بتلغي بعض!
    </div>
</div>

<div class="card">
    <div class="card-title">Lami's Theorem - نظرية لامي</div>
    <div class="formula-box">
        \\[ \\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma} \\]
    </div>
    <div class="explanation">
        <b>نظرية لامي:</b> 🔺<br><br>
        لو 3 قوى في اتزان، كل قوة على جيب الزاوية المقابلة ليها = ثابت<br><br>
        <b>ملاحظة:</b> α, β, γ هي الزوايا بين القوى (الزوايا المقابلة)
    </div>
    <div class="note">
        نظرية لامي بنستخدمها لما يكون عندنا 3 قوى بس في اتزان!
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 Solved Example</div>
    <div class="problem">
        <b>Problem:</b> A body of weight 50N is suspended by two strings. If one string makes 30° with vertical and the other makes 60° with vertical, find the tension in each string.
    </div>
    <div class="solution">
        <b>الحل بالتفصيل:</b><br><br>
        <b>رسم حر (Free Body Diagram):</b><br>
        • T₁ بزاوية 30° مع الرأسي<br>
        • T₂ بزاوية 60° مع الرأسي<br>
        • W = 50N لأسفل<br><br>
        <b>الاتزان الأفقي:</b><br>
        T₁ sin30° = T₂ sin60°<br>
        T₁ × 0.5 = T₂ × (√3/2)<br><br>
        <b>الاتزان الرأسي:</b><br>
        T₁ cos30° + T₂ cos60° = 50<br>
        T₁ × (√3/2) + T₂ × 0.5 = 50<br><br>
        <b>بحل المعادلتين:</b><br>
        T₁ = 25N ✅<br>
        T₂ = 25√3 ≈ 43.3N ✅
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة سريعة - الدرس الثاني</h3>
    <ul>
        <li>✅ <b>الاتزان:</b> مجموع القوى = صفر</li>
        <li>✅ <b>شرط الاتزان:</b> ∑Fₓ = 0 و ∑Fᵧ = 0</li>
        <li>✅ <b>لامي:</b> F₁/sinα = F₂/sinβ = F₃/sinγ</li>
    </ul>
</div>
`;

// Lesson 3: Moments
window.mechLesson3 = `
<div class="lesson-header">
    <h1>Lesson 3: Moments and Couples</h1>
    <h2>الدرس الثالث: العزوم والازدواج</h2>
</div>

<div class="card">
    <div class="card-title">Moment of a Force - عزم القوة</div>
    <div class="definition">
        The moment of a force about a point is the product of the force and the perpendicular distance from the point to the line of action of the force.<br><br>
        M = F × d
    </div>
    <div class="explanation">
        <b>يعني إيه عزم؟</b> 🔄<br><br>
        العزم هو تأثير القوة في الدوران!<br><br>
        <b>القانون:</b> M = F × d<br>
        • M = العزم (N.m)<br>
        • F = القوة (N)<br>
        • d = البُعد العمودي من النقطة لخط عمل القوة (m)<br><br>
        <b>الاتجاه:</b><br>
        • عكس عقارب الساعة ← موجب (+)<br>
        • مع عقارب الساعة ← سالب (-)
    </div>
</div>

<div class="card">
    <div class="card-title">Couple - الازدواج</div>
    <div class="definition">
        A couple consists of two equal and opposite parallel forces that do not act along the same line. The moment of a couple = F × d (perpendicular distance between the forces).
    </div>
    <div class="explanation">
        <b>الازدواج:</b> ⚡<br><br>
        قوتين:<br>
        ✅ متساويتين في المقدار<br>
        ✅ متعاكستين في الاتجاه<br>
        ✅ متوازيتين<br>
        ✅ مش على نفس الخط<br><br>
        <b>عزم الازدواج = F × d</b><br>
        (حيث d = المسافة بين القوتين)
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 Solved Example</div>
    <div class="problem">
        <b>Problem:</b> A force of 20N acts on a rod at 0.5m from the pivot. Calculate the moment of the force.
    </div>
    <div class="solution">
        <b>الحل:</b><br><br>
        M = F × d<br>
        M = 20 × 0.5<br>
        M = <b>10 N.m</b> ✅
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة سريعة - الدرس الثالث</h3>
    <ul>
        <li>✅ <b>العزم:</b> M = F × d</li>
        <li>✅ <b>الوحدة:</b> N.m (نيوتن.متر)</li>
        <li>✅ <b>الازدواج:</b> قوتين متساويتين متعاكستين متوازيتين</li>
        <li>✅ <b>اتزان العزوم:</b> مجموع العزوم = 0</li>
    </ul>
</div>
`;

// Lesson 4: Motion
window.mechLesson4 = `
<div class="lesson-header">
    <h1>Lesson 4: Motion in a Straight Line</h1>
    <h2>الدرس الرابع: الحركة في خط مستقيم</h2>
</div>

<div class="card">
    <div class="card-title">Equations of Motion - معادلات الحركة</div>
    <div class="formula-box">
        \\[ v = u + at \\]
        \\[ s = ut + \\frac{1}{2}at^2 \\]
        \\[ v^2 = u^2 + 2as \\]
        \\[ s = \\frac{(u + v)}{2} \\times t \\]
    </div>
    <div class="explanation">
        <b>معادلات الحركة المنتظمة التغير:</b> 🚀<br><br>
        • <b>u</b> = السرعة الابتدائية (م/ث)<br>
        • <b>v</b> = السرعة النهائية (م/ث)<br>
        • <b>a</b> = العجلة (م/ث²)<br>
        • <b>t</b> = الزمن (ث)<br>
        • <b>s</b> = الإزاحة (م)<br><br>
        💡 <b>نصيحة:</b> اختار المعادلة اللي فيها 3 معلوم و1 مجهول!
    </div>
</div>

<div class="card">
    <div class="card-title">Free Fall - السقوط الحر</div>
    <div class="definition">
        Free fall is motion under gravity only, with g ≈ 10 m/s² (or 9.8 m/s² for precise calculations).
    </div>
    <div class="explanation">
        <b>السقوط الحر:</b> 🌍<br><br>
        لما جسم يسقط تحت تأثير الجاذبية بس:<br>
        • a = g ≈ 10 م/ث²<br>
        • لو ساقط ← g موجبة<br>
        • لو مقذوف لأعلى ← g سالبة<br><br>
        <b>نفس المعادلات</b> بس بنستخدم g بدل a!
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 Solved Example</div>
    <div class="problem">
        <b>Problem:</b> A car accelerates from rest at 2 m/s² for 10 seconds. Find:<br>
        a) Final velocity &nbsp;&nbsp; b) Distance traveled
    </div>
    <div class="solution">
        <b>المعطيات:</b> u = 0, a = 2 m/s², t = 10s<br><br>
        <b>a) السرعة النهائية:</b><br>
        v = u + at<br>
        v = 0 + 2 × 10 = <b>20 m/s</b> ✅<br><br>
        <b>b) المسافة:</b><br>
        s = ut + ½at²<br>
        s = 0 + ½ × 2 × 10²<br>
        s = 1 × 100 = <b>100 m</b> ✅
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة سريعة - الدرس الرابع</h3>
    <ul>
        <li>✅ <b>v = u + at</b></li>
        <li>✅ <b>s = ut + ½at²</b></li>
        <li>✅ <b>v² = u² + 2as</b></li>
        <li>✅ <b>g ≈ 10 m/s²</b></li>
    </ul>
</div>
`;

// Lesson 5: Newton's Laws
window.mechLesson5 = `
<div class="lesson-header">
    <h1>Lesson 5: Newton's Laws of Motion</h1>
    <h2>الدرس الخامس: قوانين نيوتن للحركة</h2>
</div>

<div class="card">
    <div class="card-title">Newton's First Law - القانون الأول</div>
    <div class="definition">
        An object remains at rest or in uniform motion in a straight line unless acted upon by an external force.
    </div>
    <div class="explanation">
        <b>قانون القصور الذاتي:</b> 🛑<br><br>
        الجسم بيفضل على حالته (ساكن أو متحرك بسرعة ثابتة) ما لم تؤثر عليه قوة خارجية!<br><br>
        <b>أمثلة:</b><br>
        • لما عربية تفرمل فجأة ← جسمك بيندفع للأمام<br>
        • الكرة مش بتقف إلا بسبب الاحتكاك
    </div>
</div>

<div class="card">
    <div class="card-title">Newton's Second Law - القانون الثاني</div>
    <div class="formula-box">
        \\[ F = ma \\]
    </div>
    <div class="explanation">
        <b>أهم قانون في الميكانيكا! ⚡</b><br><br>
        القوة = الكتلة × العجلة<br><br>
        • F = القوة (N)<br>
        • m = الكتلة (kg)<br>
        • a = العجلة (m/s²)<br><br>
        <b>معناه:</b> كل ما القوة تزيد، العجلة تزيد (لو الكتلة ثابتة)
    </div>
</div>

<div class="card">
    <div class="card-title">Newton's Third Law - القانون الثالث</div>
    <div class="definition">
        For every action, there is an equal and opposite reaction.
    </div>
    <div class="explanation">
        <b>الفعل ورد الفعل:</b> 🔄<br><br>
        لكل فعل رد فعل مساوي له في المقدار ومعاكس له في الاتجاه!<br><br>
        <b>أمثلة:</b><br>
        • لما تدفع الحيطة، الحيطة بتدفعك بنفس القوة<br>
        • الصاروخ بيطلع لأعلى، الغازات تنزل لأسفل
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 Solved Example</div>
    <div class="problem">
        <b>Problem:</b> A 5 kg mass accelerates at 4 m/s². Calculate the net force acting on it.
    </problem>
    <div class="solution">
        <b>الحل:</b><br><br>
        F = ma<br>
        F = 5 × 4<br>
        F = <b>20 N</b> ✅
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة سريعة - الدرس الخامس</h3>
    <ul>
        <li>✅ <b>القانون الأول:</b> القصور الذاتي</li>
        <li>✅ <b>القانون الثاني:</b> F = ma</li>
        <li>✅ <b>القانون الثالث:</b> الفعل ورد الفعل</li>
    </ul>
</div>
`;

// Lesson 6: Work and Energy
window.mechLesson6 = `
<div class="lesson-header">
    <h1>Lesson 6: Work, Energy & Power</h1>
    <h2>الدرس السادس: الشغل والطاقة والقدرة</h2>
</div>

<div class="card">
    <div class="card-title">Work Done - الشغل</div>
    <div class="formula-box">
        \\[ W = F \\times d \\times \\cos\\theta \\]
    </div>
    <div class="explanation">
        <b>الشغل المبذول:</b> 💪<br><br>
        • W = الشغل (J - جول)<br>
        • F = القوة (N)<br>
        • d = الإزاحة (m)<br>
        • θ = الزاوية بين القوة والإزاحة<br><br>
        <b>حالات خاصة:</b><br>
        • θ = 0° ← W = Fd (أقصى شغل)<br>
        • θ = 90° ← W = 0 (مافيش شغل!)
    </div>
</div>

<div class="card">
    <div class="card-title">Kinetic & Potential Energy - طاقة الحركة والوضع</div>
    <div class="formula-box">
        \\[ KE = \\frac{1}{2}mv^2 \\]
        \\[ PE = mgh \\]
    </div>
    <div class="explanation">
        <b>طاقة الحركة (KE):</b> الطاقة اللي عند جسم بسبب سرعته<br><br>
        <b>طاقة الوضع (PE):</b> الطاقة اللي عند جسم بسبب ارتفاعه<br><br>
        <b>حفظ الطاقة:</b><br>
        KE₁ + PE₁ = KE₂ + PE₂<br>
        (الطاقة الكلية ثابتة!)
    </div>
</div>

<div class="card">
    <div class="card-title">Power - القدرة</div>
    <div class="formula-box">
        \\[ P = \\frac{W}{t} = F \\times v \\]
    </div>
    <div class="explanation">
        <b>القدرة:</b> معدل بذل الشغل ⚡<br><br>
        • P = القدرة (W - واط)<br>
        • W = الشغل (J)<br>
        • t = الزمن (s)<br><br>
        أو: P = F × v (القوة × السرعة)
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 Solved Example</div>
    <div class="problem">
        <b>Problem:</b> A 2 kg ball is dropped from 10m height. Find its velocity just before hitting the ground.
    </div>
    <div class="solution">
        <b>الحل باستخدام حفظ الطاقة:</b><br><br>
        PE في البداية = KE في النهاية<br>
        mgh = ½mv²<br>
        gh = ½v²<br>
        10 × 10 = ½v²<br>
        v² = 200<br>
        v = √200 = <b>14.14 m/s</b> ✅
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة سريعة - الدرس السادس</h3>
    <ul>
        <li>✅ <b>الشغل:</b> W = Fd cosθ</li>
        <li>✅ <b>طاقة الحركة:</b> KE = ½mv²</li>
        <li>✅ <b>طاقة الوضع:</b> PE = mgh</li>
        <li>✅ <b>القدرة:</b> P = W/t = Fv</li>
    </ul>
</div>
`;

// Keywords Table
window.mechKeywords = `
<div class="lesson-header">
    <h1>📖 Mechanics Keywords - جدول الكلمات</h1>
    <h2>English ↔ Arabic Translation Table</h2>
</div>

<div class="card">
    <table class="keywords-table">
        <tr><th>English</th><th>Arabic</th><th>النطق</th></tr>
        <tr><td>Force</td><td>قوة</td><td>فورس</td></tr>
        <tr><td>Vector</td><td>متجه</td><td>فيكتور</td></tr>
        <tr><td>Resultant</td><td>محصلة</td><td>ريزالتنت</td></tr>
        <tr><td>Equilibrium</td><td>اتزان</td><td>إكويليبريوم</td></tr>
        <tr><td>Moment</td><td>عزم</td><td>مومنت</td></tr>
        <tr><td>Couple</td><td>ازدواج</td><td>كابل</td></tr>
        <tr><td>Velocity</td><td>سرعة</td><td>فيلوسيتي</td></tr>
        <tr><td>Acceleration</td><td>عجلة</td><td>أكسيليريشن</td></tr>
        <tr><td>Displacement</td><td>إزاحة</td><td>ديسبليسمنت</td></tr>
        <tr><td>Mass</td><td>كتلة</td><td>ماس</td></tr>
        <tr><td>Weight</td><td>وزن</td><td>ويت</td></tr>
        <tr><td>Gravity</td><td>جاذبية</td><td>جرافيتي</td></tr>
        <tr><td>Friction</td><td>احتكاك</td><td>فريكشن</td></tr>
        <tr><td>Tension</td><td>شد</td><td>تينشن</td></tr>
        <tr><td>Work</td><td>شغل</td><td>وورك</td></tr>
        <tr><td>Energy</td><td>طاقة</td><td>إنيرجي</td></tr>
        <tr><td>Power</td><td>قدرة</td><td>باور</td></tr>
        <tr><td>Kinetic</td><td>حركية</td><td>كاينتك</td></tr>
        <tr><td>Potential</td><td>كامنة/وضع</td><td>بوتنشيال</td></tr>
        <tr><td>Momentum</td><td>كمية الحركة</td><td>مومنتم</td></tr>
    </table>
</div>
`;

// PDF Resources
window.mechPDFs = `
<div class="lesson-header">
    <h1>📂 مصادر PDF</h1>
    <h2>Mechanics Resources</h2>
</div>

<div class="card">
    <div class="card-title">📚 الكتب والملخصات</div>
    <div style="display: grid; gap: 1rem;">
        <a href="كتاب Math M-1-42.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(0,240,255,0.1); border: 1px solid var(--primary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📘 كتاب Mechanics
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📝 مصادر إضافية</div>
    <div style="display: grid; gap: 1rem;">
        <a href="مصادر PDF/بنك الاسئلة ميكانيكا  للمدارس الصناعية الصف الثالث الثاتوى 2024 (1).pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📝 بنك أسئلة الميكانيكا
        </a>
        <a href="مصادر PDF/كتاب Math M-1-42.en.ar عربي.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📕 كتاب Mechanics (عربي)
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">🔗 روابط خارجية</div>
    <div style="display: grid; gap: 1rem;">
        <a href="https://www.youtube.com/playlist?list=PLRd8JJt0IJHfWqSJEtPQrTGB_KzQlNOfB" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 8px; color: var(--text); text-decoration: none;">
            🎬 YouTube - Mechanics Playlist
        </a>
    </div>
</div>
`;
