// STEM 3 Physics - Complete Lesson 1 Content (From Textbook)
const lesson1Full = `
<div class="lesson-header">
    <h1>الدرس الأول: معنى المجال المغناطيسي</h1>
    <h2>Lesson 1: Meaning of Magnetic Field</h2>
</div>

<!-- Introduction -->
<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        The magnetic effect of electric current (electromagnetism) is defined as: Magnetic field is produced around a conductor when an electric current passing through it.
    </div>
    <div class="explanation">
        <b>التأثير المغناطيسي للتيار الكهربي (الكهرومغناطيسية):</b><br>
        يعني ايه؟ ببساطة لما التيار الكهربي يعدي في سلك (موصل)، بيتكون حواليه مجال مغناطيسي! 🧲⚡<br><br>
        يعني الكهربا والمغناطيسية مرتبطين ببعض!
    </div>
    <div class="definition">
        The magnetic effect of current was discovered by Oersted (Danish physicist) in 1820.
    </div>
    <div class="explanation">
        <b>مين اكتشف الموضوع ده؟</b><br>
        العالم <b>أورستد</b> (فيزيائي دنماركي) سنة 1820 هو اللي اكتشف إن التيار الكهربي بيعمل مجال مغناطيسي.
    </div>
</div>

<!-- Oersted Experiment -->
<div class="card">
    <div class="card-title">Oersted's Experiment - تجربة أورستد</div>
    <div class="definition">
        a) Hans Christian Oersted brought a compass near a metallic wire carrying an electric current; he noticed that the compass was deflected.<br><br>
        b) When he turned the current off, the compass returned to its original position.
    </div>
    <div class="explanation">
        <b>التجربة:</b> 🔬<br>
        1️⃣ أورستد جاب بوصلة وقربها من سلك معدني فيه تيار كهربي ← لاحظ إن إبرة البوصلة انحرفت!<br><br>
        2️⃣ لما فصل التيار ← البوصلة رجعت لوضعها الأصلي.<br><br>
        <b>الاستنتاج:</b> التيار الكهربي بيعمل مجال مغناطيسي حواليه!
    </div>
    <img src="oersted_experiment.png" alt="Oersted's Experiment" class="lesson-image" loading="lazy">
    <p class="image-caption">🔬 تجربة أورستد - انحراف البوصلة بسبب التيار الكهربي</p>
</div>

<!-- Conclusion -->
<div class="card">
    <div class="card-title">Conclusion - الاستنتاج</div>
    <div class="definition">
        When the electric current flowing in a wire (conductor) always produces a magnetic field around it. The deflection of the compass while current was flowing through the wire indicated that the magnetic field is produced. This discovery started a chain of events that has helped shape our industrial civilization.
    </div>
    <div class="explanation">
        <b>الخلاصة:</b> ✅<br>
        • التيار الكهربي اللي بيمر في سلك <b>دايماً</b> بيعمل مجال مغناطيسي حواليه<br>
        • انحراف البوصلة كان الدليل على وجود المجال المغناطيسي<br>
        • الاكتشاف ده غيّر العالم وساعد في تطور الصناعة والتكنولوجيا!
    </div>
</div>

<!-- Origin of Magnetic Field -->
<div class="card">
    <div class="card-title">The Origin of the Magnetic Field - أصل المجال المغناطيسي</div>
    <div class="definition">
        Magnetic field is generated due to motion of electrons (electric charges) within its atoms. So, Magnetism arises from two types of motions of electrons in atoms:
        <br><br>
        1) The motion of the electrons in an orbit around the nucleus, similar to the motion of the planets in our solar system around the sun.
        <br><br>
        2) The spin of the electrons around its axis analogous to the rotation of the Earth about its own axis.
    </div>
    <div class="explanation">
        <b>المجال المغناطيسي بييجي منين؟</b> 🤔<br><br>
        المجال المغناطيسي بيتولد من حركة الإلكترونات (الشحنات الكهربية) جوه الذرات!<br><br>
        <b>الإلكترونات بتتحرك بطريقتين:</b><br>
        1️⃣ <b>دوران حول النواة:</b> زي الكواكب اللي بتلف حول الشمس 🌍☀️<br><br>
        2️⃣ <b>دوران حول نفسها (Spin):</b> زي الأرض اللي بتلف حول محورها 🔄<br><br>
        الحركتين دول بيولدوا مجال مغناطيسي!
    </div>
</div>

<!-- Magnetic Field Definition -->
<div class="card">
    <div class="card-title">The Magnetic Field - المجال المغناطيسي</div>
    <div class="definition">
        The magnetic field is the area around a magnet (or a current-carrying conductor) where magnetic forces can act.
    </div>
    <div class="explanation">
        <b>تعريف المجال المغناطيسي:</b><br>
        هو المنطقة اللي حوالين المغناطيس (أو السلك اللي فيه تيار) واللي بتظهر فيها قوى مغناطيسية.
    </div>
    <div class="definition">
        The magnetic field lines are imaginary lines to represent magnetic fields. They show:
        <br>a) The shape of a magnetic field
        <br>b) The direction of the magnetic field (from N to S)
        <br>c) The magnetic field density (B)
    </div>
    <div class="explanation">
        <b>خطوط المجال المغناطيسي:</b> 📏<br>
        هي خطوط وهمية بنستخدمها عشان نمثل المجال المغناطيسي. بتوضحلنا:<br>
        ✅ شكل المجال<br>
        ✅ اتجاه المجال (من الشمال N للجنوب S)<br>
        ✅ كثافة المجال (B)
    </div>
</div>

<!-- Properties of Magnetic Field Lines -->
<div class="card">
    <div class="card-title">Properties of Magnetic Field Lines - خصائص خطوط المجال</div>
    <div class="definition">
        a) Magnetic field lines never cross each other.<br>
        b) Magnetic field lines always make closed loops (continuous curves) and will continue inside a magnetic material.<br>
        c) Magnetic field lines always emerge or start from the North Pole and terminate at the South Pole.<br>
        d) The direction of the magnetic field is taken to be the direction in which a north pole of the compass needle moves inside it. Inside the magnet, the direction of field lines is from its south pole to its north pole.
    </div>
    <div class="explanation">
        <b>خصائص خطوط المجال المغناطيسي:</b> 📋<br><br>
        1️⃣ <b>مش بتتقاطع أبداً:</b> مستحيل خطين مجال يعدوا من نفس النقطة!<br><br>
        2️⃣ <b>مغلقة (حلقات):</b> الخطوط بتعمل دواير مقفولة وبتكمل جوه المغناطيس<br><br>
        3️⃣ <b>بتخرج من الشمال وتدخل الجنوب:</b> برة المغناطيس، الخطوط بتطلع من N وتدخل في S<br><br>
        4️⃣ <b>اتجاه المجال:</b> هو الاتجاه اللي بتتحرك فيه إبرة البوصلة (القطب الشمالي). جوه المغناطيس الخطوط بتمشي من S لـ N.
    </div>
</div>

<!-- Magnetic Flux -->
<div class="card">
    <div class="card-title">Magnetic Flux (Φ) - الفيض المغناطيسي</div>
    <div class="definition">
        Magnetic flux is a measurement of the total magnetic field which passes through a certain area. It is useful for helping describe the effects of the magnetic force on something occupying a certain area.
        <br><br>
        We can define the magnetic flux as: It is the total number of magnetic flux lines passing through a surface.
    </div>
    <div class="explanation">
        <b>الفيض المغناطيسي Φ:</b><br>
        هو قياس لإجمالي المجال المغناطيسي اللي بيعدي من مساحة معينة.<br><br>
        بشكل مبسط: <b>الفيض = عدد خطوط المجال اللي بتعدي من سطح معين</b>
    </div>
    <div class="formula-box">
        \\[ \\Phi_m = B \\cdot A \\cdot \\cos\\theta \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • Φm = الفيض المغناطيسي (ويبر Weber - Wb)<br>
        • B = كثافة الفيض المغناطيسي (تسلا Tesla - T)<br>
        • A = مساحة السطح (م²)<br>
        • θ = الزاوية بين العمودي على السطح واتجاه المجال
    </div>
    <div class="note">
        <b>حالات خاصة:</b><br>
        • θ = 0° (السطح عمودي على المجال) ← Φ = B × A (أقصى فيض) 📈<br>
        • θ = 90° (السطح موازي للمجال) ← Φ = 0 (مافيش فيض) 📉
    </div>
</div>

<!-- Magnetic Flux Density -->
<div class="card">
    <div class="card-title">Magnetic Flux Density (B) - كثافة الفيض المغناطيسي</div>
    <div class="definition">
        The magnetic flux density B describes the density and direction of the field lines that passes through a certain area A. The denser the field lines, the larger the magnetic flux density, which is measured in Tesla (T) that equivalent to Weber/m² (Wb/m²).
        <br><br>
        When the magnetic flux lines are closer to each other, so the magnetic flux density will be large and vice versa.
        <br><br>
        It is the total number of magnetic flux lines passing normally through a unit area around the point.
    </div>
    <div class="explanation">
        <b>كثافة الفيض المغناطيسي B:</b><br><br>
        بتوصف كثافة واتجاه خطوط المجال اللي بتعدي من مساحة معينة.<br><br>
        <b>كل ما الخطوط تكون متقاربة ← كثافة الفيض تكون أكبر</b><br>
        <b>كل ما الخطوط تكون متباعدة ← كثافة الفيض تكون أقل</b><br><br>
        <b>التعريف:</b> عدد خطوط الفيض اللي بتعدي عمودياً من وحدة المساحات حوالين نقطة معينة.
    </div>
    <div class="formula-box">
        \\[ B = \\frac{\\Phi}{A} \\]
    </div>
    <div class="explanation">
        <b>الوحدات:</b><br>
        • تسلا (Tesla - T)<br>
        • ويبر/م² (Wb/m²)<br>
        • 1 T = 1 Wb/m²
    </div>
</div>

<!-- Solved Examples -->
<div class="card example">
    <div class="card-title">📝 مثال محلول (1)</div>
    <div class="problem">
        <b>Example:</b> A rectangular coil of area 0.04 m² is placed perpendicular to a magnetic field of density 0.5 T. Calculate the magnetic flux through the coil.
    </div>
    <div class="solution">
        <b>المعطيات:</b><br>
        • A = 0.04 m²<br>
        • B = 0.5 T<br>
        • θ = 0° (السطح عمودي على المجال)<br><br>
        <b>المطلوب:</b> Φ = ?
    </div>
    <div class="formula-box">
        \\[ \\Phi = B \\times A \\times \\cos(0°) \\]
        \\[ \\Phi = 0.5 \\times 0.04 \\times 1 = 0.02 \\text{ Wb} \\]
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (2)</div>
    <div class="problem">
        <b>Example:</b> A coil of area 0.1 m² is placed in a magnetic field of density 0.8 T. If the plane of the coil makes an angle of 30° with the field direction, calculate the magnetic flux.
    </div>
    <div class="solution">
        <b>المعطيات:</b><br>
        • A = 0.1 m²<br>
        • B = 0.8 T<br>
        • الزاوية بين المستوى والمجال = 30°<br>
        • ∴ θ (بين العمودي والمجال) = 90° - 30° = 60°<br><br>
        <b>ملاحظة مهمة:</b> θ في القانون هي الزاوية بين العمودي على السطح والمجال، مش الزاوية بين السطح والمجال!
    </div>
    <div class="formula-box">
        \\[ \\Phi = B \\times A \\times \\cos(60°) \\]
        \\[ \\Phi = 0.8 \\times 0.1 \\times 0.5 = 0.04 \\text{ Wb} \\]
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (3)</div>
    <div class="problem">
        <b>Example:</b> The magnetic flux through a coil of area 0.05 m² is 0.02 Wb when placed perpendicular to a magnetic field. Calculate the magnetic flux density.
    </div>
    <div class="solution">
        <b>المعطيات:</b><br>
        • A = 0.05 m²<br>
        • Φ = 0.02 Wb<br><br>
        <b>المطلوب:</b> B = ?
    </div>
    <div class="formula-box">
        \\[ B = \\frac{\\Phi}{A} = \\frac{0.02}{0.05} = 0.4 \\text{ T} \\]
    </div>
</div>

<!-- Revision -->
<div class="revision">
    <h3>📝 مراجعة شاملة - الدرس الأول</h3>
    <ul>
        <li>✅ <b>تجربة أورستد (1820):</b> اكتشف إن التيار الكهربي بيعمل مجال مغناطيسي</li>
        <li>✅ <b>أصل المغناطيسية:</b> حركة الإلكترونات (دوران حول النواة + Spin)</li>
        <li>✅ <b>المجال المغناطيسي:</b> المنطقة اللي بتظهر فيها قوى مغناطيسية</li>
        <li>✅ <b>خطوط المجال:</b> مغلقة، لا تتقاطع، من N لـ S</li>
        <li>✅ <b>الفيض (Φ):</b> عدد الخطوط اللي بتعدي من سطح = B × A × cosθ (ويبر)</li>
        <li>✅ <b>كثافة الفيض (B):</b> الفيض لكل وحدة مساحة = Φ/A (تسلا)</li>
        <li>✅ <b>أقصى فيض:</b> عند θ = 0° (سطح عمودي على المجال)</li>
        <li>✅ <b>فيض = صفر:</b> عند θ = 90° (سطح موازي للمجال)</li>
    </ul>
</div>
`;

window.lesson1Full = lesson1Full;
