// Complete Lessons 3-6 Content
const lesson3Full = `
<div class="lesson-header">
    <h1>الدرس الثالث: المجال حول ملف دائري</h1>
    <h2>Lesson 3: Magnetic Field due to Circular Coil</h2>
</div>

<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        A circular coil of wire can be used to generate a nearly uniform magnetic field similar to that of a short bar magnet.
    </div>
    <div class="explanation">
        الملف الدائري بيولد مجال مغناطيسي شبيه بمغناطيس قصير! 🧲
    </div>
</div>

<div class="card">
    <div class="card-title">Shape of Magnetic Field - شكل المجال</div>
    <div class="definition">
        When a current is passed through a circular coil, a magnetic field is produced around it which is more concentrated in the center of the loop than outside the loop.
        <br><br>
        1) The flux lines are circular surrounding the two sides<br>
        2) The flux lines are no longer circular near the center<br>
        3) The flux lines become straight and parallel lines perpendicular to the plane of the coil at the center. This means the magnetic field in this region is uniform.
    </div>
    <div class="explanation">
        <b>خصائص المجال:</b><br>
        1️⃣ الخطوط دائرية حول جانبي الملف<br>
        2️⃣ قرب المركز الخطوط مش دائرية<br>
        3️⃣ <b>في المركز:</b> الخطوط مستقيمة ومتوازية وعمودية على مستوى الملف ← المجال منتظم! ✅
    </div>
    <img src="circular_coil_field.png" alt="Circular Coil Magnetic Field" class="lesson-image" loading="lazy">
    <p class="image-caption">🧲 المجال المغناطيسي حول ملف دائري</p>
</div>

<div class="card">
    <div class="card-title">Magnetic Field Density at Center - كثافة المجال في المركز</div>
    <div class="formula-box">
        \\[ B = \\frac{\\mu N I}{2r} \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • B = كثافة المجال (تسلا)<br>
        • μ = النفاذية المغناطيسية (4π×10⁻⁷ للهواء)<br>
        • N = عدد اللفات<br>
        • I = شدة التيار (أمبير)<br>
        • r = نصف قطر الملف (متر)
    </div>
    <div class="note">
        <b>العوامل المؤثرة:</b> B ∝ N, B ∝ I, B ∝ 1/r
    </div>
</div>

<div class="card">
    <div class="card-title">Direction Rules - قواعد تحديد الاتجاه</div>
    <div class="definition">
        <b>Right Cork Screw Rule:</b> If the screw is rotated in the direction of current, its forward motion gives the direction of magnetic field.
        <br><br>
        <b>Clockwise Rule (Polarity):</b> The side at which the current is in a clockwise direction is the South Pole. The side where current is anticlockwise is the North Pole.
    </div>
    <div class="explanation">
        <b>1. قاعدة البريمة اليمنى:</b> 🔧<br>
        لو لفت البريمة في اتجاه التيار ← اتجاه تقدمها = اتجاه المجال<br><br>
        <b>2. قاعدة تحديد الأقطاب:</b><br>
        • الجهة اللي التيار فيها مع عقارب الساعة = قطب جنوبي S 🔴<br>
        • الجهة اللي التيار فيها عكس عقارب الساعة = قطب شمالي N 🔵
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول</div>
    <div class="problem">
        ملف دائري نصف قطره 7cm، عدد لفاته 100، يمر به تيار 2A. احسب B في مركزه.
    </div>
    <div class="formula-box">
        \\[ B = \\frac{4\\pi \\times 10^{-7} \\times 100 \\times 2}{2 \\times 0.07} = 1.8 \\times 10^{-3} \\text{ T} \\]
    </div>
</div>

<div class="card">
    <div class="card-title">Wire Length Relation - علاقة طول السلك</div>
    <div class="definition">
        If a straight wire of length (l) is bent to form circular coil of radius (r) and number of turns (N), then: l = 2πrN
    </div>
    <div class="explanation">
        لو سلك طوله l لُف على شكل ملف دائري:<br>
        <b>طول السلك = المحيط × عدد اللفات</b>
    </div>
    <div class="formula-box">\\[ l = 2\\pi r N \\]</div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس الثالث</h3>
    <ul>
        <li>✅ المجال في مركز الملف منتظم وعمودي على مستواه</li>
        <li>✅ B = μNI/(2r)</li>
        <li>✅ قاعدة البريمة وقاعدة الأقطاب لتحديد الاتجاه</li>
        <li>✅ طول السلك = 2πrN</li>
    </ul>
</div>
`;

const lesson4Full = `
<div class="lesson-header">
    <h1>الدرس الرابع: المجال حول الملف اللولبي</h1>
    <h2>Lesson 4: Magnetic Field due to Solenoid</h2>
</div>

<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        A solenoid is considered as a long straight coil of wire that can be used to generate a magnetic field similar to that of a bar magnet. Solenoids have large number of practical applications in our daily life.
    </div>
    <div class="explanation">
        <b>الملف اللولبي (Solenoid):</b> ملف طويل مستقيم (زي السوستة) 🧵<br>
        بيولد مجال مغناطيسي زي مغناطيس القضيب!<br>
        له تطبيقات كتير في حياتنا اليومية (الأجراس الكهربية، الأقفال، المحركات...)
    </div>
</div>

<div class="card">
    <div class="card-title">Shape of Magnetic Field - شكل المجال</div>
    <div class="definition">
        When a current is passed through a solenoid, a magnetic field is produced around it:
        <br><br>
        1) The lines of magnetic flux outside the solenoid are closed coils moving from N to S.
        <br><br>
        2) The lines of magnetic flux through the middle of the solenoid are straight and parallel to the axis, so the magnetic field is uniform.
    </div>
    <div class="explanation">
        1️⃣ <b>برة الملف:</b> خطوط مغلقة من الشمال للجنوب 🔄<br>
        2️⃣ <b>جوه الملف:</b> خطوط مستقيمة ومتوازية ← المجال منتظم! ✅
    </div>
    <img src="solenoid_field_1766777117333.png" alt="Solenoid Magnetic Field" class="lesson-image" loading="lazy">
    <p class="image-caption">🧲 المجال المغناطيسي حول ملف لولبي (سولينويد)</p>
</div>

<div class="card">
    <div class="card-title">Magnetic Field Density - كثافة المجال</div>
    <div class="formula-box">
        \\[ B = \\mu n I = \\frac{\\mu N I}{L} \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • n = عدد اللفات لكل وحدة طول = N/L<br>
        • L = طول الملف (متر)<br>
        • N = إجمالي عدد اللفات
    </div>
    <div class="note">
        لما نحط قلب حديدي جوه الملف ← B بتزيد جداً! لأن الحديد له نفاذية عالية، الخطوط بتتركز فيه.
    </div>
</div>

<div class="card">
    <div class="card-title">Neutral Point - نقطة التعادل</div>
    <div class="definition">
        Neutral Point: It is the point at which the total magnetic flux density vanishes.
        <br><br>
        The neutral point may be formed when two magnetic fields equal in magnitude and opposite in directions are met at a point.
    </div>
    <div class="explanation">
        <b>نقطة التعادل:</b> النقطة اللي المجال الكلي فيها = صفر! 🎯<br><br>
        بتتكون لما مجالين متساويين في المقدار ومتعاكسين في الاتجاه يتقابلوا<br><br>
        <b>في نقطة التعادل:</b> Bt = 0 → B₁ = B₂
    </div>
    <div class="note">لو حطينا إبرة بوصلة في نقطة التعادل، مش هتنحرف (تتحرك بحرية)</div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول</div>
    <div class="problem">
        ملف لولبي طوله 50cm، عدد لفاته 500، يمر به تيار 4A. احسب B داخله.
    </div>
    <div class="formula-box">
        \\[ n = \\frac{N}{L} = \\frac{500}{0.5} = 1000 \\text{ turns/m} \\]
        \\[ B = 4\\pi \\times 10^{-7} \\times 1000 \\times 4 = 5.03 \\times 10^{-3} \\text{ T} \\]
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس الرابع</h3>
    <ul>
        <li>✅ الملف اللولبي = سلك ملفوف زي السوستة</li>
        <li>✅ المجال داخله منتظم ومتوازي</li>
        <li>✅ B = μnI حيث n = N/L</li>
        <li>✅ القلب الحديدي بيزود المجال</li>
        <li>✅ نقطة التعادل: المجال الكلي = صفر</li>
    </ul>
</div>
`;

const lesson5Full = `
<div class="lesson-header">
    <h1>الدرس الخامس: القوة المغناطيسية على سلك</h1>
    <h2>Lesson 5: Magnetic Force on Current-Carrying Wire</h2>
</div>

<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        a) If we place a straight wire carrying current I between the poles of a magnet of magnetic flux density B, a magnetic force F results which acts on the wire and is perpendicular to both the wire and the field.
        <br><br>
        b) The direction of the force is reversed if we reverse the current or the magnetic field. In all cases, the force is perpendicular to both electric current and the magnetic field.
        <br><br>
        c) In case the wire is allowed to move due to this generated force, the direction of motion is perpendicular to both the electric current and the magnetic field.
    </div>
    <div class="explanation">
        <b>ماذا يحدث؟</b> 🤔<br>
        لما نحط سلك فيه تيار في مجال مغناطيسي:<br><br>
        ✅ بتأثر عليه قوة مغناطيسية<br>
        ✅ القوة عمودية على السلك والمجال معاً<br>
        ✅ لو عكسنا التيار أو المجال ← القوة تنعكس<br>
        ✅ لو السلك يقدر يتحرك ← هيتحرك عمودي على التيار والمجال
    </div>
</div>

<div class="card">
    <div class="card-title">Fleming's Left Hand Rule - قاعدة فلمنج لليد اليسرى</div>
    <div class="definition">
        Used to determine the direction of the force (motion) of a straight wire carrying current.
        <br><br>
        The thumb, first finger and second finger of the left hand are all perpendicular to each other:
        <br>• The thumb points in the direction of motion (Force)
        <br>• The pointer (first finger) points in the direction of the field
        <br>• The middle (second finger) points in the direction of the current
    </div>
    <div class="explanation">
        <b>قاعدة فلمنج لليد اليسرى:</b> ✋<br><br>
        افتح إيدك الشمال، الـ 3 صوابع عمودية على بعض:<br>
        👍 <b>الإبهام:</b> اتجاه الحركة (القوة) - Motion/Force<br>
        👆 <b>السبابة:</b> اتجاه المجال - Field<br>
        ✌️ <b>الوسطى:</b> اتجاه التيار - Current<br><br>
        <b>تذكر: FBI</b> (Force - B field - I current)
    </div>
    <img src="flemings_left_hand_1766777144327.png" alt="Fleming's Left Hand Rule" class="lesson-image" loading="lazy">
    <p class="image-caption">✋ قاعدة فلمنج لليد اليسرى - FBI</p>
</div>

<div class="card">
    <div class="card-title">Force Equation - قانون القوة</div>
    <div class="definition">
        Factors affecting the force:
        <br>1) The length of the wire (L): F ∝ L
        <br>2) The current in the wire (I): F ∝ I
        <br>3) The magnetic flux density (B): F ∝ B
        <br><br>
        Therefore: F ∝ BIL → F = BIL (when perpendicular)
        <br><br>
        In general, when the wire makes an angle θ with the field: F = BIL sinθ
    </div>
    <div class="formula-box">
        \\[ F = B I L \\sin\\theta \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • F = القوة (نيوتن N)<br>
        • B = كثافة الفيض (تسلا T)<br>
        • I = شدة التيار (أمبير A)<br>
        • L = طول السلك داخل المجال (متر m)<br>
        • θ = الزاوية بين السلك والمجال
    </div>
</div>

<div class="card">
    <div class="card-title">Special Cases - حالات خاصة</div>
    <div class="explanation">
        <b>1️⃣ السلك عمودي على المجال (θ = 90°):</b><br>
        F = BIL × sin90° = BIL ← <b>أقصى قوة!</b> 📈<br><br>
        <b>2️⃣ السلك موازي للمجال (θ = 0° أو 180°):</b><br>
        F = BIL × sin0° = 0 ← <b>القوة صفر!</b> 📉<br>
        السلك مش بيتحرك في الحالة دي.
    </div>
</div>

<div class="card">
    <div class="card-title">Definition of Tesla - تعريف التسلا</div>
    <div class="definition">
        Tesla: It is the magnetic flux density which exerts a force of 1N on a wire of 1m length carrying a current of intensity 1A placed perpendicularly to the magnetic field.
    </div>
    <div class="explanation">
        <b>التسلا:</b> هي كثافة الفيض اللي بتأثر بقوة 1 نيوتن على سلك طوله 1 متر فيه تيار 1 أمبير وموضوع عمودي على المجال.
    </div>
    <div class="formula-box">\\[ B = \\frac{F}{IL} \\]</div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (1)</div>
    <div class="problem">
        سلك طوله 25cm يمر به تيار 8A موضوع عمودياً على مجال 0.4T. احسب القوة.
    </div>
    <div class="formula-box">
        \\[ F = BIL\\sin90° = 0.4 \\times 8 \\times 0.25 \\times 1 = 0.8 \\text{ N} \\]
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول (2)</div>
    <div class="problem">
        سلك يصنع زاوية 30° مع مجال 0.5T. إذا كان التيار 6A والقوة 0.3N، احسب طول السلك.
    </div>
    <div class="formula-box">
        \\[ L = \\frac{F}{BI\\sin\\theta} = \\frac{0.3}{0.5 \\times 6 \\times 0.5} = 0.2 \\text{ m} = 20 \\text{ cm} \\]
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس الخامس</h3>
    <ul>
        <li>✅ F = BIL sinθ</li>
        <li>✅ أقصى قوة عند θ = 90° (عمودي)</li>
        <li>✅ قوة = صفر عند θ = 0° (موازي)</li>
        <li>✅ قاعدة فلمنج اليسرى: FBI</li>
        <li>✅ 1 Tesla = 1 N/(A.m)</li>
    </ul>
</div>
`;

const lesson6Full = `
<div class="lesson-header">
    <h1>الدرس السادس: عزم الازدواج على ملف</h1>
    <h2>Lesson 6: Magnetic Torque on a Coil</h2>
</div>

<div class="card">
    <div class="card-title">Introduction - المقدمة</div>
    <div class="definition">
        Consider a rectangular coil of wire (ABCD) carrying a current (I) is placed in a magnetic field of flux density (B), with its plane parallel to the field direction.
        <br><br>
        1) Wires (AD) and (BC) are parallel to the magnetic flux lines, so force acting on them = 0
        <br><br>
        2) Wires (AB) and (CD) are perpendicular to magnetic flux lines, so they are acted by two forces equal in magnitude and opposite in direction: F = BIL
    </div>
    <div class="explanation">
        <b>ملف مستطيل ABCD في مجال مغناطيسي:</b><br><br>
        ✅ الأضلاع الموازية للمجال (AD, BC): القوة عليها = صفر<br>
        ✅ الأضلاع العمودية على المجال (AB, CD): بتتأثر بقوتين متساويتين متعاكستين<br><br>
        النتيجة: الملف بيلف! 🔄 (عزم ازدواج)
    </div>
    <img src="torque_on_coil.png" alt="Torque on a Coil" class="lesson-image" loading="lazy">
    <p class="image-caption">🔄 عزم الازدواج على ملف مستطيل في مجال مغناطيسي</p>
</div>

<div class="card">
    <div class="card-title">Torque Equation - قانون العزم</div>
    <div class="definition">
        τ = Force × perpendicular distance = BIL × width = BIA
        <br><br>
        If the coil consists of (N) turns: τ = BIAN
        <br><br>
        If the normal to coil's plane makes angle θ with magnetic field: τ = BIAN sinθ
    </div>
    <div class="formula-box">
        \\[ \\tau = B I A N \\sin\\theta \\]
    </div>
    <div class="explanation">
        <b>حيث:</b><br>
        • τ = عزم الازدواج (N.m)<br>
        • A = مساحة الملف (م²)<br>
        • N = عدد اللفات<br>
        • θ = الزاوية بين العمودي على الملف والمجال
    </div>
</div>

<div class="card">
    <div class="card-title">Special Cases - حالات خاصة</div>
    <div class="explanation">
        <b>1️⃣ مستوى الملف موازي للمجال (θ = 90°):</b><br>
        τ = BIAN × 1 = BIAN ← <b>أقصى عزم!</b> 📈<br><br>
        <b>2️⃣ مستوى الملف عمودي على المجال (θ = 0°):</b><br>
        τ = BIAN × 0 = 0 ← الملف مش بيلف 📉
    </div>
    <div class="note">الوحدة: N.m = T.A.m²</div>
</div>

<div class="card">
    <div class="card-title">Magnetic Dipole Moment - عزم ثنائي القطب المغناطيسي</div>
    <div class="definition">
        Magnetic dipole moment (md) = IAN
        <br><br>
        It is the magnetic torque acting on a coil carrying current placed parallel to a uniform magnetic field of flux density 1 Tesla.
    </div>
    <div class="formula-box">\\[ |m_d| = IAN = \\frac{\\tau_{max}}{B} \\]</div>
    <div class="explanation">
        <b>وحدته:</b> A.m² = N.m/T
    </div>
</div>

<div class="card">
    <div class="card-title">Applications - التطبيقات</div>
    <div class="definition">
        The concept of the couple (magnetic torque) acting on the coil carrying current is the idea on which is based many instruments as the galvanometer and the electric motors.
    </div>
    <div class="explanation">
        <b>تطبيقات عزم الازدواج:</b><br>
        ⚙️ الجلفانومتر (جهاز قياس التيار)<br>
        ⚙️ المحركات الكهربية<br>
        ⚙️ مقاييس الجهد والتيار
    </div>
</div>

<div class="card example">
    <div class="card-title">📝 مثال محلول</div>
    <div class="problem">
        ملف مستطيل 10cm × 20cm، 50 لفة، تيار 3A، مجال 0.4T، مستوى الملف موازي للمجال. احسب العزم.
    </div>
    <div class="formula-box">
        \\[ A = 0.1 \\times 0.2 = 0.02 \\text{ m}^2 \\]
        \\[ \\tau = BIAN = 0.4 \\times 3 \\times 0.02 \\times 50 = 1.2 \\text{ N.m} \\]
    </div>
</div>

<div class="revision">
    <h3>📝 مراجعة الدرس السادس</h3>
    <ul>
        <li>✅ τ = BIAN sinθ</li>
        <li>✅ أقصى عزم: مستوى الملف موازي للمجال</li>
        <li>✅ عزم = صفر: مستوى الملف عمودي على المجال</li>
        <li>✅ عزم ثنائي القطب = IAN</li>
        <li>✅ التطبيق: المحركات والجلفانومتر</li>
    </ul>
</div>
`;

window.lesson3Full = lesson3Full;
window.lesson4Full = lesson4Full;
window.lesson5Full = lesson5Full;
window.lesson6Full = lesson6Full;
