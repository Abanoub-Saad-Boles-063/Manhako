// STEM 3 Physics - Complete Lesson 2 Content (From Textbook)
const lesson2Full = `
<div class="lesson-header">
    <h1>الدرس الثاني: المجال المغناطيسي حول سلك مستقيم</h1>
    <h2>Lesson 2: Magnetic Field due to Current in Straight Conductor</h2>
</div>

<!-- Introduction -->
<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        Every electric current produces a magnetic field. The magnetic field can be visualized as a pattern of circular field lines surrounding the wire.
    </div>
    <div class="explanation">
        <b>مقدمة:</b><br>
        كل تيار كهربي بيولّد مجال مغناطيسي! 🧲⚡<br><br>
        المجال ده بنتخيله على شكل دواير (خطوط دائرية) حوالين السلك.
    </div>
</div>

<!-- Early Experiments -->
<div class="card">
    <div class="card-title">Early Experiments - التجارب المبكرة</div>
    <div class="definition">
        In 1819, Oersted showed that an electric current was able to cause a magnetic needle, placed close to a current-carrying conductor, to be deflected.
        <br><br>
        When the electric current flows in the conductor, a magnetic needle placed above the conductor is deflected. As soon as the current stops flowing, the needle returns to its original position.
        <br><br>
        If the direction of the current is reversed, the needle is deflected in the opposite direction.
    </div>
    <div class="explanation">
        <b>تجارب أورستد (1819):</b> 🔬<br><br>
        1️⃣ لما التيار يعدي في السلك ← الإبرة المغناطيسية اللي فوق السلك بتنحرف<br><br>
        2️⃣ لما نفصل التيار ← الإبرة ترجع لوضعها الأصلي<br><br>
        3️⃣ لما نعكس اتجاه التيار ← الإبرة تنحرف في الاتجاه المعاكس! 🔄<br><br>
        <b>الاستنتاج:</b> التيار بيعمل مجال مغناطيسي، واتجاه المجال بيعتمد على اتجاه التيار!
    </div>
</div>

<!-- Magnetic Flux Density -->
<div class="card">
    <div class="card-title">Magnetic Flux Density (B) - كثافة الفيض</div>
    <div class="definition">
        The magnetic flux density B describes the density and direction of the field lines that passes through a certain area A. The denser the field lines, the larger the magnetic flux density, which is measured in Tesla (T) that equivalent to Weber/m² (Wb/m²).
        <br><br>
        When the magnetic flux lines are closer to each other, the magnetic flux density will be large and vice versa.
        <br><br>
        It is the total number of magnetic flux lines passing normally through a unit area around the point.
    </div>
    <div class="explanation">
        <b>كثافة الفيض:</b><br>
        • بتوصف كثافة واتجاه خطوط المجال<br>
        • كل ما الخطوط تكون قريبة من بعض ← B أكبر 📈<br>
        • كل ما الخطوط تكون بعيدة عن بعض ← B أقل 📉<br>
        • الوحدة: تسلا (T) = ويبر/م²
    </div>
    <div class="formula-box">
        \\[ B = \\frac{\\Phi}{A} \\]
    </div>
</div>

<!-- Shape of Magnetic Field -->
<div class="card">
    <div class="card-title">Shape of Magnetic Field - شكل المجال المغناطيسي</div>
    <div class="definition">
        We can examine the shape of magnetic field by using iron fillings sprinkled on a paper surrounding the wire in a vertical position:
        <br><br>
        a) The magnetic lines of force around a straight wire carrying current are concentric circles whose centers lie on the wire.
        <br><br>
        b) The circular magnetic flux lines are closer together near the wire and farther apart from each other as the distance from the wire increases.
        <br><br>
        c) The current passing through the wire increases, the concentric circles more crowded.
    </div>
    <div class="explanation">
        <b>شكل المجال:</b> (بنشوفه بنثر برادة الحديد على ورقة حوالين السلك) 🔍<br><br>
        1️⃣ <b>دواير متحدة المركز:</b> خطوط المجال على شكل دواير مركزها السلك<br><br>
        2️⃣ <b>أقرب للسلك = أكثف:</b> الدواير بتكون متقاربة قرب السلك وبتبعد عن بعض كل ما بعدنا<br><br>
        3️⃣ <b>زيادة التيار = دواير أكثر:</b> كل ما التيار زاد، الدواير بتكون أكتر وأكثف
    </div>
    <img src="magnetic_field_wire_1766777080099.png" alt="Magnetic Field around a Straight Wire" class="lesson-image" loading="lazy">
    <p class="image-caption">🔬 شكل المجال المغناطيسي حول سلك مستقيم يحمل تيار</p>
</div>

<!-- Magnitude of B -->
<div class="card">
    <div class="card-title">Magnitude of Magnetic Field Density - مقدار كثافة المجال</div>
    <div class="definition">
        The density of magnetic field at a certain point can be given by the following relation. This relation is called Ampere's circular law.
    </div>
    <div class="formula-box">
        \\[ B = \\frac{\\mu I}{2\\pi d} \\]
    </div>
    <div class="explanation">
        <b>قانون أمبير الدائري:</b><br><br>
        <b>حيث:</b><br>
        • B = كثافة المجال المغناطيسي (تسلا T)<br>
        • μ = النفاذية المغناطيسية للوسط<br>
        • I = شدة التيار (أمبير A)<br>
        • d = المسافة من السلك (متر m)<br>
        • π = 3.14
    </div>
    <div class="note">
        <b>للهواء والفراغ:</b> μ = 4π × 10⁻⁷ Wb/A.m = 4π × 10⁻⁷ T.m/A
    </div>
</div>

<!-- Magnetic Permeability -->
<div class="card">
    <div class="card-title">Magnetic Permeability (μ) - النفاذية المغناطيسية</div>
    <div class="definition">
        The magnetic permeability is the ability of medium to penetrate the magnetic flux lines.
        <br><br>
        The measuring unit: Wb/A.m = T.m/A
    </div>
    <div class="explanation">
        <b>النفاذية المغناطيسية μ:</b><br>
        هي قدرة الوسط على توصيل (نفاذ) خطوط الفيض المغناطيسي.<br><br>
        <b>يعني ايه؟</b> كل ما النفاذية تكون أعلى، الوسط بيسمح لخطوط المجال تعدي منه بسهولة أكتر!<br><br>
        <b>الوحدة:</b> Wb/A.m أو T.m/A<br><br>
        <b>قيمة μ للهواء والفراغ:</b> 4π × 10⁻⁷ = 1.257 × 10⁻⁶
    </div>
</div>

<!-- Direction of Magnetic Field -->
<div class="card">
    <div class="card-title">Direction of Magnetic Field - اتجاه المجال المغناطيسي</div>
    <div class="definition">
        To determine the direction of the magnetic field resulting from an electric current in a wire, use Ampere's Right Hand Rule.
        <br><br>
        <b>Ampere's Right Hand Rule:</b> If the thumb points in the direction of the current, the rest of the fingers around the wire will indicate the direction of the magnetic field due to the current.
    </div>
    <div class="explanation">
        <b>قاعدة اليد اليمنى لأمبير:</b> ✋<br><br>
        عشان تحدد اتجاه المجال المغناطيسي الناتج من تيار في سلك:<br><br>
        1️⃣ امسك السلك بإيدك اليمين 🤚<br>
        2️⃣ خلي صباعك الكبير (الإبهام) يشاور على اتجاه التيار 👍<br>
        3️⃣ باقي صوابعك الملفوفة حوالين السلك بتشاور على اتجاه المجال! 🔄<br><br>
        <b>ملاحظة:</b> لو عكست اتجاه التيار، المجال هيكون في الاتجاه المعاكس!
    </div>
</div>

<!-- Factors Affecting B -->
<div class="card">
    <div class="card-title">Factors Affecting B - العوامل المؤثرة على كثافة المجال</div>
    <div class="explanation">
        <b>من القانون B = μI/(2πd) نستنتج:</b><br><br>
        1️⃣ <b>B ∝ I (تناسب طردي مع التيار):</b><br>
        كل ما التيار زاد، كثافة المجال زادت 📈<br><br>
        2️⃣ <b>B ∝ 1/d (تناسب عكسي مع المسافة):</b><br>
        كل ما بعدنا عن السلك، كثافة المجال قلت 📉<br><br>
        3️⃣ <b>B ∝ μ (تناسب طردي مع النفاذية):</b><br>
        في وسط نفاذيته عالية، المجال بيكون أقوى
    </div>
</div>

<!-- Solved Examples -->
<div class="card example">
    <div class="card-title">📝 مثال محلول (1)</div>
    <div class="problem">
        <b>Example:</b> A straight wire carries a current of 10 A. Calculate the magnetic flux density at a point 5 cm from the wire. (μ = 4π × 10⁻⁷ Wb/A.m)
    </div>
    <div class="solution">
        <b>المعطيات:</b><br>
        • I = 10 A<br>
        • d = 5 cm = 0.05 m<br>
        • μ = 4π × 10⁻⁷ Wb/A.m<br><br>
        <b>المطلوب:</b> B = ?
    </div>
    <div class="formula-box">
        \\[ B = \\frac{\\mu I}{2\\pi d} = \\frac{4\\pi \\times 10^{-7} \\times 10}{2\\pi \\times 0.05} \\]
        \\[ B = \\frac{4 \\times 10^{-6}}{0.1} = 4 \\times 10^{-5} \\text{ T} = 40 \\mu\\text{T} \\]
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (2)</div>
    <div class="problem">
        <b>Example:</b> A straight wire carries a current and produces a magnetic field of density 2 × 10⁻⁵ T at a distance of 10 cm. Calculate the current intensity.
    </div>
    <div class="solution">
        <b>المعطيات:</b><br>
        • B = 2 × 10⁻⁵ T<br>
        • d = 10 cm = 0.1 m<br>
        • μ = 4π × 10⁻⁷<br><br>
        <b>المطلوب:</b> I = ?
    </div>
    <div class="formula-box">
        \\[ B = \\frac{\\mu I}{2\\pi d} \\Rightarrow I = \\frac{B \\times 2\\pi d}{\\mu} \\]
        \\[ I = \\frac{2 \\times 10^{-5} \\times 2\\pi \\times 0.1}{4\\pi \\times 10^{-7}} = \\frac{4\\pi \\times 10^{-6}}{4\\pi \\times 10^{-7}} = 10 \\text{ A} \\]
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (3)</div>
    <div class="problem">
        <b>Example:</b> Two parallel wires, 20 cm apart, each carrying a current of 5 A in the same direction. Calculate the magnetic flux density at the midpoint between them.
    </div>
    <div class="solution">
        <b>المعطيات:</b><br>
        • المسافة بين السلكين = 20 cm<br>
        • d₁ = d₂ = 10 cm = 0.1 m (نقطة المنتصف)<br>
        • I = 5 A لكل سلك<br>
        • التياران في نفس الاتجاه<br><br>
        <b>التحليل:</b><br>
        باستخدام قاعدة اليد اليمنى، المجالان في نقطة المنتصف يكونان في اتجاهين متعاكسين! 🔄
    </div>
    <div class="formula-box">
        \\[ B_1 = B_2 = \\frac{4\\pi \\times 10^{-7} \\times 5}{2\\pi \\times 0.1} = 10^{-5} \\text{ T} \\]
        \\[ B_{total} = B_1 - B_2 = 0 \\text{ (متساويان ومتعاكسان)} \\]
    </div>
    <div class="note">لو التياران كانا متعاكسين، المجالان هيكونوا في نفس الاتجاه ويتجمعوا!</div>
</div>

<!-- Revision -->
<div class="revision">
    <h3>📝 مراجعة شاملة - الدرس الثاني</h3>
    <ul>
        <li>✅ <b>شكل المجال:</b> دواير متحدة المركز حول السلك</li>
        <li>✅ <b>قانون أمبير:</b> B = μI/(2πd)</li>
        <li>✅ <b>النفاذية μ:</b> قدرة الوسط على توصيل خطوط المجال</li>
        <li>✅ <b>μ للهواء:</b> 4π × 10⁻⁷ Wb/A.m</li>
        <li>✅ <b>قاعدة اليد اليمنى:</b> الإبهام = التيار، الأصابع = المجال</li>
        <li>✅ <b>B ∝ I:</b> تتناسب طردياً مع التيار</li>
        <li>✅ <b>B ∝ 1/d:</b> تتناسب عكسياً مع المسافة</li>
    </ul>
</div>
`;

window.lesson2Full = lesson2Full;
