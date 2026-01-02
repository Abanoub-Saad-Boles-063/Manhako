// Complete Lessons 7-11 (Electromagnetic Induction) Content
const lesson7Full = `
<div class="lesson-header">
    <h1>الدرس السابع: قانون فاراداي للحث الكهرومغناطيسي</h1>
    <h2>Lesson 7: Faraday's Law of Electromagnetic Induction</h2>
</div>

<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        Electromagnetic induction is the electromagnetic effect produced by changing in the magnetic flux (or link with) a conductor. It was discovered by Michael Faraday in 1831.
    </div>
    <div class="explanation">
        <b>الحث الكهرومغناطيسي:</b> هو التأثير الكهرومغناطيسي اللي بيحصل لما الفيض المغناطيسي يتغير في موصل! ⚡🧲<br><br>
        اكتشفه العالم <b>مايكل فاراداي</b> سنة 1831
    </div>
</div>

<div class="card">
    <div class="card-title">Ways to Generate Induced EMF - طرق توليد قوة دافعة مستحثة</div>
    <div class="definition">
        The current can be induced in a conductor when:
        <br>1) Moving a magnet and a coil relative to each other
        <br>2) Changing the current in a nearby circuit
        <br>3) Rotating a coil in a magnetic field
    </div>
    <div class="explanation">
        <b>إزاي نولد تيار مستحث؟</b><br><br>
        1️⃣ تحريك مغناطيس بالنسبة لملف (أو العكس) 🧲↔️<br>
        2️⃣ تغيير التيار في دائرة قريبة<br>
        3️⃣ تدوير ملف في مجال مغناطيسي 🔄
    </div>
</div>

<div class="card">
    <div class="card-title">Faraday's Law - قانون فاراداي</div>
    <div class="definition">
        Faraday's Second Law: The magnitude of the induced electromotive force (emf) is proportional to the rate of change of the magnetic flux.
    </div>
    <div class="formula-box">
        \\[ emf = -N \\frac{\\Delta\\Phi_m}{\\Delta t} \\]
    </div>
    <div class="explanation">
        <b>قانون فاراداي:</b><br>
        القوة الدافعة المستحثة تتناسب طردياً مع معدل تغير الفيض المغناطيسي<br><br>
        <b>حيث:</b><br>
        • emf = القوة الدافعة المستحثة (فولت)<br>
        • N = عدد لفات الملف<br>
        • ΔΦm = التغير في الفيض (ويبر)<br>
        • Δt = الزمن (ثانية)
    </div>
    <div class="note">
        <b>الإشارة السالبة:</b> تعبر عن قانون لنز (التيار المستحث يعاكس التغير اللي ولّده)
    </div>
    <img src="faraday_law.png" alt="Faraday's Law of Electromagnetic Induction" class="lesson-image" loading="lazy">
    <p class="image-caption">⚡ قانون فاراداي للحث الكهرومغناطيسي</p>
</div>

<div class="card">
    <div class="card-title">Important Notes - ملاحظات مهمة</div>
    <div class="explanation">
        ✅ كل ما التغير في الفيض أسرع ← emf أكبر<br>
        ✅ كل ما عدد اللفات أكتر ← emf أكبر<br>
        ✅ لو الفيض ثابت (مش بيتغير) ← emf = 0
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (1)</div>
    <div class="problem">
        ملف 200 لفة، الفيض خلاله تغير من 0.05 Wb إلى 0.02 Wb في 0.1 ثانية. احسب emf المستحث.
    </div>
    <div class="formula-box">
        \\[ \\Delta\\Phi = 0.02 - 0.05 = -0.03 \\text{ Wb} \\]
        \\[ emf = -N \\frac{\\Delta\\Phi}{\\Delta t} = -200 \\times \\frac{-0.03}{0.1} = 60 \\text{ V} \\]
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (2)</div>
    <div class="problem">
        ملف 100 لفة مساحته 0.02 m² في مجال 0.5 T. دار الملف 90° في 0.05 ثانية. احسب متوسط emf.
    </div>
    <div class="formula-box">
        \\[ \\Phi_1 = BA\\cos0° = 0.5 \\times 0.02 \\times 1 = 0.01 \\text{ Wb} \\]
        \\[ \\Phi_2 = BA\\cos90° = 0 \\]
        \\[ emf = -100 \\times \\frac{0 - 0.01}{0.05} = 20 \\text{ V} \\]
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس السابع</h3>
    <ul>
        <li>✅ الحث الكهرومغناطيسي: توليد emf من تغير الفيض</li>
        <li>✅ قانون فاراداي: emf = -N(ΔΦ/Δt)</li>
        <li>✅ الإشارة السالبة = قانون لنز</li>
        <li>✅ تغير أسرع = emf أكبر</li>
    </ul>
</div>
`;

const lesson8Full = `
<div class="lesson-header">
    <h1>الدرس الثامن: قانون لنز</h1>
    <h2>Lesson 8: Lenz's Law</h2>
</div>

<div class="card">
    <div class="card-title">Lenz's Law - قانون لنز</div>
    <div class="definition">
        Lenz's law of electromagnetic induction states that: The induced current must be in a direction such as to oppose the change producing it.
        <br><br>
        i.e. the direction of the current induced in a conductor by a changing magnetic field is such that the magnetic field created by the induced current opposes the initial changing magnetic field which produced it.
    </div>
    <div class="explanation">
        <b>قانون لنز:</b><br>
        التيار المستحث لازم يكون في اتجاه يعاكس التغير اللي ولّده! 🔄<br><br>
        يعني: المجال اللي بيعمله التيار المستحث بيعاكس المجال الأصلي اللي اتغير
    </div>
</div>

<div class="card">
    <div class="card-title">Explanation - الشرح التفصيلي</div>
    <div class="definition">
        1) When we approach a North Pole or South Pole, the induced current in the coil will be in such direction forming a like pole opposing the motion of magnetic. (Repulsing force).
        <br><br>
        2) When moving back a North Pole or South Pole, the induced current in the coil will be in such direction forming unlike pole opposing the motion of magnetic (attraction force).
    </div>
    <div class="explanation">
        <b>لما نقرب قطب شمالي أو جنوبي من ملف:</b> 🧲➡️<br>
        التيار المستحث بيكوّن قطب مشابه (تنافر) عشان يقاوم الحركة!<br><br>
        <b>لما نبعد قطب عن الملف:</b> 🧲⬅️<br>
        التيار المستحث بيكوّن قطب مخالف (تجاذب) عشان يقاوم الابتعاد!
    </div>
    <img src="lenz_law.png" alt="Lenz's Law" class="lesson-image" loading="lazy">
    <p class="image-caption">🔄 قانون لنز - التيار المستحث يعاكس التغير</p>
</div>

<div class="card">
    <div class="card-title">Factors Affecting Direction - العوامل المؤثرة</div>
    <div class="definition">
        From Lenz's rule, the direction of induced current generated in the conductor depends on:
        <br>1) The direction of the motion
        <br>2) The direction of the magnetic field
    </div>
    <div class="explanation">
        اتجاه التيار المستحث بيعتمد على:<br>
        1️⃣ اتجاه الحركة<br>
        2️⃣ اتجاه المجال المغناطيسي
    </div>
</div>

<div class="card">
    <div class="card-title">Remember - تذكر</div>
    <div class="explanation">
        <b>لما المغناطيس يقرب من الملف:</b><br>
        • الفيض بيزيد 📈<br>
        • الطرف القريب بيكوّن قطب مشابه للمغناطيس<br>
        • تنافر (مقاومة الاقتراب)<br><br>
        <b>لما المغناطيس يبعد عن الملف:</b><br>
        • الفيض بيقل 📉<br>
        • الطرف القريب بيكوّن قطب مخالف<br>
        • تجاذب (مقاومة الابتعاد)
    </div>
    <div class="note">قانون لنز هو تطبيق لقانون حفظ الطاقة! ⚖️</div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال</div>
    <div class="problem">
        قطب شمالي لمغناطيس يقترب من ملف. ما اتجاه التيار المستحث؟
    </div>
    <div class="explanation">
        <b>الحل:</b><br>
        1. الفيض بيزيد (المغناطيس بيقرب)<br>
        2. الملف لازم يعمل مجال يعاكس (قطب شمالي يواجه المغناطيس)<br>
        3. باستخدام قاعدة البريمة: التيار عكس عقارب الساعة (من جهة المغناطيس)
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس الثامن</h3>
    <ul>
        <li>✅ قانون لنز: التيار المستحث يعاكس التغير</li>
        <li>✅ مغناطيس يقرب ← قطب مشابه (تنافر)</li>
        <li>✅ مغناطيس يبعد ← قطب مخالف (تجاذب)</li>
        <li>✅ تطبيق لحفظ الطاقة</li>
    </ul>
</div>
`;

const lesson9Full = `
<div class="lesson-header">
    <h1>الدرس التاسع: الحث المتبادل والذاتي</h1>
    <h2>Lesson 9: Mutual and Self-Induction</h2>
</div>

<div class="card">
    <div class="card-title">Mutual Induction - الحث المتبادل</div>
    <div class="definition">
        Mutual induction between two coils: It's the electromagnetic effect takes place between two coils when an induced emf generated in one of them (secondary coil) due current variation in the other coil (primary coil), which opposes the change causing it.
    </div>
    <div class="explanation">
        <b>الحث المتبادل:</b><br>
        التأثير الكهرومغناطيسي بين ملفين! لما التيار يتغير في الملف الأول (الابتدائي)، بيتولد emf في الملف التاني (الثانوي).<br><br>
        ⚡ الملف الابتدائي ➡️ الملف الثانوي
    </div>
    <img src="mutual_induction.png" alt="Mutual and Self Induction" class="lesson-image" loading="lazy">
    <p class="image-caption">🔗 الحث المتبادل بين ملفين</p>
</div>

<div class="card">
    <div class="card-title">Ways to Produce Induced EMF - طرق توليد emf في الملف الثانوي</div>
    <div class="definition">
        1) Plunge or take away the primary coil from inside the secondary coil.
        <br>2) Using rheostat, increase or decrease the intensity of the current in the primary coil.
        <br>3) Using switch, switch-on or switch-off the primary circuit.
    </div>
    <div class="explanation">
        1️⃣ إدخال أو إخراج الملف الابتدائي من الثانوي<br>
        2️⃣ زيادة أو تقليل التيار باستخدام ريوستات<br>
        3️⃣ فتح أو غلق دائرة الملف الابتدائي
    </div>
    <div class="note">
        <b>مهم:</b> لو التيار في الملف الابتدائي ثابت ← مافيش emf مستحث! (لازم تغير)
    </div>
</div>

<div class="card">
    <div class="card-title">Mutual Induction Formula - قانون الحث المتبادل</div>
    <div class="formula-box">
        \\[ emf_2 = -M \\times \\frac{\\Delta I_1}{\\Delta t} = -N_2 \\frac{\\Delta\\Phi_2}{\\Delta t} \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • emf₂ = القوة الدافعة في الملف الثانوي (فولت)<br>
        • M = معامل الحث المتبادل (هنري H)<br>
        • ΔI₁/Δt = معدل تغير التيار في الملف الابتدائي
    </div>
</div>

<div class="card">
    <div class="card-title">Self-Induction - الحث الذاتي</div>
    <div class="definition">
        Self-induction: The phenomenon of inducing emf in a coil due to change in current in the same coil and hence the change in magnetic flux in the coil.
        <br><br>
        When a current is present in a circuit, it sets up a magnetic field that causes a magnetic flux through the same circuit; this flux changes when the current changes.
    </div>
    <div class="explanation">
        <b>الحث الذاتي:</b><br>
        الملف نفسه بيولد emf لما التيار فيه يتغير! 🔄<br><br>
        يعني الملف بيقاوم أي تغيير في التيار اللي مار فيه.
    </div>
</div>

<div class="card">
    <div class="card-title">Self-Induction Formula - قانون الحث الذاتي</div>
    <div class="formula-box">
        \\[ emf = -L \\times \\frac{\\Delta I}{\\Delta t} = -N \\frac{\\Delta\\Phi}{\\Delta t} \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • L = معامل الحث الذاتي (هنري H)<br>
        • ΔI/Δt = معدل تغير التيار (A/s)
    </div>
</div>

<div class="card">
    <div class="card-title">Factors Affecting Self-Inductance - العوامل المؤثرة</div>
    <div class="definition">
        The self-inductance (coefficient of self-induction) of a coil depends on:
        <br>1) The geometry of the coil (size, length and the number of turns)
        <br>2) The distance between the turns
        <br>3) The presence of an iron core inside the coil (magnetic permeability)
    </div>
    <div class="explanation">
        معامل الحث الذاتي L يعتمد على:<br>
        1️⃣ هندسة الملف (الحجم، الطول، عدد اللفات)<br>
        2️⃣ المسافة بين اللفات<br>
        3️⃣ وجود قلب حديدي (النفاذية المغناطيسية)
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول</div>
    <div class="problem">
        ملف معامل حثه الذاتي 0.4 H، التيار فيه تغير من 3A إلى 7A في 0.02s. احسب emf المستحث.
    </div>
    <div class="formula-box">
        \\[ emf = -L \\times \\frac{\\Delta I}{\\Delta t} = -0.4 \\times \\frac{7-3}{0.02} = -0.4 \\times 200 = -80 \\text{ V} \\]
    </div>
    <div class="note">الإشارة السالبة تعني أن emf يعاكس التغير في التيار</div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس التاسع</h3>
    <ul>
        <li>✅ الحث المتبادل: بين ملفين مختلفين</li>
        <li>✅ الحث الذاتي: الملف يقاوم تغير التيار فيه</li>
        <li>✅ emf = -L(ΔI/Δt) للحث الذاتي</li>
        <li>✅ الوحدة: هنري (H)</li>
    </ul>
</div>
`;

const lesson10Full = `
<div class="lesson-header">
    <h1>الدرس العاشر: المولد الكهربي (الدينامو)</h1>
    <h2>Lesson 10: Electric Generator (Dynamo)</h2>
</div>

<div class="card">
    <div class="card-title">EMF in Moving Wire - القوة الدافعة في سلك متحرك</div>
    <div class="definition">
        If a wire cuts through a magnetic field, or vice-versa, a voltage (potential difference) is produced between the ends of the wire. This induced voltage causes a current to flow if the wire is a part of closed circuit.
    </div>
    <div class="explanation">
        لما سلك يقطع خطوط مجال مغناطيسي ← بيتولد فرق جهد بين طرفيه! ⚡<br>
        لو السلك جزء من دائرة مغلقة ← التيار بيسري
    </div>
    <div class="formula-box">
        \\[ emf = B l v \\]
    </div>
    <div class="explanation">
        <b>لو السلك يتحرك بزاوية θ مع المجال:</b>
    </div>
    <div class="formula-box">
        \\[ emf = B l v \\sin\\theta \\]
    </div>
</div>

<div class="card">
    <div class="card-title">Fleming's Right Hand Rule - قاعدة فلمنج لليد اليمنى</div>
    <div class="definition">
        It is used to determine the direction of induced current in the wire. Extend the thumb, pointer and the middle finger of the right hand, mutually perpendicular to each other. Let the pointer points to the direction of the field, and the thumb in the direction of motion, and then the middle finger will point to the direction of the induced current.
    </div>
    <div class="explanation">
        <b>قاعدة فلمنج لليد اليمنى (للمولد):</b> ✋<br><br>
        افتح إيدك اليمين، الـ 3 صوابع عمودية على بعض:<br>
        👍 <b>الإبهام:</b> اتجاه الحركة - Motion<br>
        👆 <b>السبابة:</b> اتجاه المجال - Field<br>
        ✌️ <b>الوسطى:</b> اتجاه التيار المستحث - Current
    </div>
</div>

<div class="card">
    <div class="card-title">AC vs DC - التيار المتردد والمستمر</div>
    <div class="definition">
        <b>Direct Current (DC):</b>
        <br>1) The current that flows in one direction only
        <br>2) Has constant intensity and direction
        <br>3) Produces constant magnetic field
        <br>4) Frequency = zero
        <br>5) Produced by battery or DC dynamo
        <br><br>
        <b>Alternating Current (AC):</b>
        <br>1) Flows to and fro in two opposite directions
        <br>2) Changes direction and intensity periodically
        <br>3) Produces variable magnetic field
        <br>4) Has frequency
        <br>5) Produced by AC dynamo
    </div>
    <div class="explanation">
        <b>التيار المستمر DC:</b> اتجاه واحد، شدة ثابتة، تردد = صفر 🔋<br><br>
        <b>التيار المتردد AC:</b> يغير اتجاهه دورياً، شدة متغيرة، له تردد 🔌
    </div>
</div>

<div class="card">
    <div class="card-title">AC Generator Parts - أجزاء مولد التيار المتردد</div>
    <div class="definition">
        <b>Essential parts:</b>
        <br>• A field magnet: Strong magnet with concave poles (produces uniform radial field)
        <br>• An armature: Rectangular coil wound on laminated soft-iron core
        <br>• Two slip rings: Connected to coil ends, rotate with the coil
        <br>• Two graphite brushes: Touched the rings, form external circuit terminals
    </div>
    <div class="explanation">
        <b>أجزاء الدينامو:</b><br>
        1️⃣ <b>مغناطيس قوي:</b> أقطاب مقعرة لإنتاج مجال منتظم<br>
        2️⃣ <b>ملف (Armature):</b> ملفوف على قلب حديدي مصفح<br>
        3️⃣ <b>حلقتا انزلاق:</b> متصلتان بطرفي الملف وتدوران معه<br>
        4️⃣ <b>فرشتان من الجرافيت:</b> تلامسان الحلقتين
    </div>
    <img src="ac_generator_1766777179073.png" alt="AC Generator Diagram" class="lesson-image" loading="lazy">
    <p class="image-caption">⚡ المولد الكهربي (الدينامو) - AC Generator</p>
</div>

<div class="card">
    <div class="card-title">Induced EMF in Dynamo - القوة الدافعة في الدينامو</div>
    <div class="formula-box">
        \\[ emf = 2\\pi f \\cdot N \\cdot B \\cdot A \\cdot \\sin\\theta = emf_0 \\sin\\theta \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • f = التردد (Hz)<br>
        • θ = زاوية الدوران<br>
        • emf₀ = القيمة العظمى = 2πfNBA<br><br>
        <b>حالات خاصة:</b><br>
        • θ = 90° أو 270° ← emf = emf₀ (أقصى قيمة)<br>
        • θ = 0° أو 180° ← emf = 0
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول</div>
    <div class="problem">
        ملف 50 لفة مساحته 0.04 m² يدور بتردد 50 Hz في مجال 0.5 T. احسب أقصى emf.
    </div>
    <div class="formula-box">
        \\[ emf_0 = 2\\pi f NBA = 2\\pi \\times 50 \\times 50 \\times 0.5 \\times 0.04 \\]
        \\[ emf_0 = 314.16 \\text{ V} \\]
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس العاشر</h3>
    <ul>
        <li>✅ سلك متحرك: emf = Blv</li>
        <li>✅ قاعدة فلمنج اليمنى للمولد</li>
        <li>✅ AC: متردد، DC: مستمر</li>
        <li>✅ أجزاء الدينامو: مغناطيس، ملف، حلقات، فرش</li>
        <li>✅ emf = 2πfNBA sinθ</li>
    </ul>
</div>
`;

const lesson11Full = `
<div class="lesson-header">
    <h1>الدرس الحادي عشر: المحول الكهربي</h1>
    <h2>Lesson 11: Electric Transformer</h2>
</div>

<div class="card">
    <div class="card-title">Definition - التعريف</div>
    <div class="definition">
        Transformer is an electrical device used for converting low alternating voltage into high alternating voltage and vice versa. It transfers electric power from one circuit to another. The transformer is based on the principle of electromagnetic induction (mutual induction between two coils).
    </div>
    <div class="explanation">
        <b>المحول الكهربي:</b><br>
        جهاز بيحول الفولت المتردد المنخفض لعالي أو العكس! 🔌<br><br>
        بينقل الطاقة الكهربية من دائرة لأخرى<br>
        بيشتغل على مبدأ الحث المتبادل بين ملفين
    </div>
</div>

<div class="card">
    <div class="card-title">Structure - التركيب</div>
    <div class="definition">
        A transformer consists of primary and secondary coils insulated from each other, wound on a soft iron core. To minimize eddy currents a laminated iron core is used.
    </div>
    <div class="explanation">
        <b>مكونات المحول:</b><br>
        1️⃣ <b>الملف الابتدائي (Primary):</b> بيدخله التيار<br>
        2️⃣ <b>الملف الثانوي (Secondary):</b> بيطلع منه التيار<br>
        3️⃣ <b>قلب حديدي مصفح:</b> لتقليل التيارات الدوامية
    </div>
</div>

<div class="card">
    <div class="card-title">Eddy Currents - التيارات الدوامية</div>
    <div class="definition">
        Eddy currents: They are induced currents that circulate in closed paths due to the change in magnetic flux through a solid conductor associating with heating effect.
    </div>
    <div class="explanation">
        <b>التيارات الدوامية:</b> تيارات مستحثة بتتكون في الموصلات الصلبة وبتسبب فقد في الطاقة على شكل حرارة 🔥<br><br>
        <b>الحل:</b> استخدام قلب حديدي مصفح (شرائح معزولة)
    </div>
</div>

<div class="card">
    <div class="card-title">Working Principle - مبدأ العمل</div>
    <div class="definition">
        The a.c. input is applied across the primary coil. The continuously varying current in the primary coil produces a varying magnetic flux in the primary coil, which in turn produces a varying magnetic flux in the secondary. Hence, an induced emf is produced across the secondary.
    </div>
    <div class="explanation">
        <b>طريقة العمل:</b><br>
        1. التيار المتردد يدخل الملف الابتدائي 🔌<br>
        2. التيار المتغير يولد فيض مغناطيسي متغير<br>
        3. الفيض ينتقل للملف الثانوي عبر القلب الحديدي<br>
        4. يتولد emf مستحث في الملف الثانوي ⚡
    </div>
    <div class="note">المحول بيشتغل على التيار المتردد فقط! (لازم التيار يتغير)</div>
    <img src="transformer_1766777212731.png" alt="Electric Transformer Diagram" class="lesson-image" loading="lazy">
    <p class="image-caption">🔌 المحول الكهربي - Transformer</p>
</div>

<div class="card">
    <div class="card-title">Transformer Equations - معادلات المحول</div>
    <div class="formula-box">
        \\[ \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = K \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • Vs, Vp = فولت الثانوي والابتدائي<br>
        • Ns, Np = عدد لفات الثانوي والابتدائي<br>
        • Is, Ip = تيار الثانوي والابتدائي<br>
        • K = نسبة التحويل<br><br>
        <b>أنواع المحولات:</b><br>
        • K > 1 ← محول رافع (Step-up) 📈<br>
        • K < 1 ← محول خافض (Step-down) 📉
    </div>
    <div class="note">لما الفولت يزيد، التيار يقل والعكس (حفظ الطاقة!)</div>
</div>

<div class="card">
    <div class="card-title">Efficiency - الكفاءة</div>
    <div class="formula-box">
        \\[ \\eta = \\frac{P_{out}}{P_{in}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\% \\]
    </div>
    <div class="explanation">
        <b>الكفاءة = (القدرة الخارجة / القدرة الداخلة) × 100%</b><br><br>
        • المحول المثالي: η = 100%<br>
        • عملياً: η < 100% بسبب الفقد
    </div>
</div>

<div class="card">
    <div class="card-title">Energy Losses - أسباب فقد الطاقة</div>
    <div class="explanation">
        <b>أسباب الفقد في المحول:</b><br>
        ❌ مقاومة الأسلاك (حرارة)<br>
        ❌ التيارات الدوامية<br>
        ❌ الهيسترية المغناطيسية في القلب
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول</div>
    <div class="problem">
        محول ابتدائيه 500 لفة وثانويه 2500 لفة. الفولت الداخل 220V. احسب الفولت الخارج ونوع المحول.
    </div>
    <div class="formula-box">
        \\[ K = \\frac{N_s}{N_p} = \\frac{2500}{500} = 5 \\]
        \\[ V_s = K \\times V_p = 5 \\times 220 = 1100 \\text{ V} \\]
    </div>
    <div class="explanation">K > 1 ← <b>محول رافع (Step-up)</b></div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس الحادي عشر</h3>
    <ul>
        <li>✅ المحول يغير فولت التيار المتردد</li>
        <li>✅ Vs/Vp = Ns/Np = Ip/Is = K</li>
        <li>✅ K > 1: رافع، K < 1: خافض</li>
        <li>✅ η = (VsIs)/(VpIp) × 100%</li>
        <li>✅ يعمل على AC فقط</li>
    </ul>
</div>
`;

window.lesson7Full = lesson7Full;
window.lesson8Full = lesson8Full;
window.lesson9Full = lesson9Full;
window.lesson10Full = lesson10Full;
window.lesson11Full = lesson11Full;
