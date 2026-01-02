// Physics Resources - ملحقات الفيزياء
// Summaries, Definitions, Conversions, and PDF Sources

// =============================================
// 📝 ملخصات الدروس - Lesson Summaries
// =============================================
window.physicsSummaries = `
<div class="lesson-header">
    <h1>📝 ملخصات الدروس</h1>
    <h2>Summary of All Physics Lessons</h2>
</div>

<div class="card">
    <div class="card-title">📚 الفصل الأول: التأثير المغناطيسي للتيار</div>
    
    <div class="note">
        <b>الدرس 1: معنى المجال المغناطيسي</b><br>
        • المجال المغناطيسي: منطقة حول المغناطيس يظهر فيها تأثيره<br>
        • تجربة أورستد: التيار الكهربي ينتج مجال مغناطيسي<br>
        • خطوط المجال تخرج من القطب الشمالي وتدخل الجنوبي
    </div>
    
    <div class="note">
        <b>الدرس 2: المجال حول سلك مستقيم</b><br>
        • القاعدة: قبضة اليد اليمنى - الإبهام اتجاه التيار<br>
        • القانون: B = μ₀I / (2πd)<br>
        • كلما زاد التيار زادت شدة المجال
    </div>
    
    <div class="note">
        <b>الدرس 3: المجال حول ملف دائري</b><br>
        • القانون: B = μ₀NI / (2r)<br>
        • N = عدد اللفات، r = نصف قطر الملف<br>
        • الأقطاب تتحدد بقاعدة اليد اليمنى
    </div>
    
    <div class="note">
        <b>الدرس 4: الملف اللولبي (Solenoid)</b><br>
        • القانون: B = μ₀nI حيث n = N/L<br>
        • المجال داخل الملف منتظم<br>
        • المغناطيس الكهربي = ملف لولبي + قلب حديدي
    </div>
    
    <div class="note">
        <b>الدرس 5: القوة المغناطيسية على سلك</b><br>
        • قاعدة فلمنج لليد اليسرى (Motor Rule)<br>
        • القانون: F = BIL sin(θ)<br>
        • القوة عمودية على كل من B و I
    </div>
    
    <div class="note">
        <b>الدرس 6: عزم الازدواج على ملف</b><br>
        • القانون: τ = BIAN cos(θ)<br>
        • أساس عمل المحرك الكهربي<br>
        • العزم أقصى عندما الملف موازي للمجال
    </div>
</div>

<div class="card">
    <div class="card-title">⚡ الفصل الثاني: الحث الكهرومغناطيسي</div>
    
    <div class="note">
        <b>الدرس 7: قانون فاراداي</b><br>
        • EMF = -N × ΔΦ/Δt<br>
        • التغير في التدفق المغناطيسي يولد قوة دافعة كهربية<br>
        • Φ = BA cos(θ) - التدفق المغناطيسي
    </div>
    
    <div class="note">
        <b>الدرس 8: قانون لنز</b><br>
        • اتجاه التيار المستحث يعاكس سبب نشأته<br>
        • تطبيق لمبدأ حفظ الطاقة<br>
        • الإشارة السالبة في قانون فاراداي
    </div>
    
    <div class="note">
        <b>الدرس 9: الحث المتبادل والذاتي</b><br>
        • الحث المتبادل: EMF₂ = -M × ΔI₁/Δt<br>
        • الحث الذاتي: EMF = -L × ΔI/Δt<br>
        • L = معامل الحث الذاتي (Henry)
    </div>
    
    <div class="note">
        <b>الدرس 10: المولد الكهربي (الدينامو)</b><br>
        • يحول الطاقة الميكانيكية إلى كهربية<br>
        • EMF = NBA ω sin(ωt)<br>
        • أنواع: AC generator و DC generator
    </div>
    
    <div class="note">
        <b>الدرس 11: المحول الكهربي</b><br>
        • Vp/Vs = Np/Ns = Is/Ip<br>
        • رافع: Ns > Np | خافض: Ns < Np<br>
        • الكفاءة: η = (Ps/Pp) × 100%
    </div>
</div>

<div class="revision">
    <h3>🎯 أهم النقاط للحفظ</h3>
    <ul>
        <li>✅ <b>قاعدة اليد اليمنى:</b> للمجال حول سلك وملف</li>
        <li>✅ <b>قاعدة فلمنج اليسرى:</b> للقوة على سلك (Motor)</li>
        <li>✅ <b>قاعدة فلمنج اليمنى:</b> للتيار المستحث (Generator)</li>
        <li>✅ <b>قانون فاراداي:</b> EMF = -N × ΔΦ/Δt</li>
        <li>✅ <b>قانون لنز:</b> التيار يعاكس سبب نشأته</li>
    </ul>
</div>
`;

// =============================================
// 📖 التعريفات - Definitions
// =============================================
window.physicsDefinitions = `
<div class="lesson-header">
    <h1>📖 التعريفات الأساسية</h1>
    <h2>Key Physics Definitions</h2>
</div>

<div class="card">
    <div class="card-title">🧲 الفصل الأول: التأثير المغناطيسي</div>
    
    <div class="definition">
        <b>Magnetic Field (المجال المغناطيسي):</b><br>
        The region around a magnet or current-carrying conductor where magnetic effects can be detected.
    </div>
    
    <div class="definition">
        <b>Magnetic Flux Density (كثافة الفيض المغناطيسي) B:</b><br>
        The number of magnetic field lines passing through a unit area perpendicular to the field. Unit: Tesla (T)
    </div>
    
    <div class="definition">
        <b>Permeability of Free Space (μ₀):</b><br>
        μ₀ = 4π × 10⁻⁷ T.m/A - The magnetic constant for vacuum.
    </div>
    
    <div class="definition">
        <b>Solenoid (الملف اللولبي):</b><br>
        A coil of wire wound in a helical shape that produces a uniform magnetic field inside when current flows through it.
    </div>
    
    <div class="definition">
        <b>Electromagnet (المغناطيس الكهربي):</b><br>
        A solenoid with a soft iron core that greatly increases the magnetic field strength.
    </div>
    
    <div class="definition">
        <b>Motor Effect (تأثير المحرك):</b><br>
        The force experienced by a current-carrying conductor placed in a magnetic field.
    </div>
    
    <div class="definition">
        <b>Torque on a Coil (عزم الازدواج):</b><br>
        The rotational force acting on a current-carrying coil in a magnetic field. τ = BIAN cos(θ)
    </div>
</div>

<div class="card">
    <div class="card-title">⚡ الفصل الثاني: الحث الكهرومغناطيسي</div>
    
    <div class="definition">
        <b>Electromagnetic Induction (الحث الكهرومغناطيسي):</b><br>
        The production of an EMF in a conductor due to a changing magnetic flux through it.
    </div>
    
    <div class="definition">
        <b>Magnetic Flux (التدفق المغناطيسي) Φ:</b><br>
        The total magnetic field passing through a given area. Φ = BA cos(θ). Unit: Weber (Wb)
    </div>
    
    <div class="definition">
        <b>Faraday's Law (قانون فاراداي):</b><br>
        The induced EMF equals the negative rate of change of magnetic flux. EMF = -N × ΔΦ/Δt
    </div>
    
    <div class="definition">
        <b>Lenz's Law (قانون لنز):</b><br>
        The direction of induced current opposes the change that produces it (conservation of energy).
    </div>
    
    <div class="definition">
        <b>Self-Inductance (الحث الذاتي) L:</b><br>
        The property of a coil to oppose changes in current through it. EMF = -L × ΔI/Δt. Unit: Henry (H)
    </div>
    
    <div class="definition">
        <b>Mutual Inductance (الحث المتبادل) M:</b><br>
        The property where a changing current in one coil induces an EMF in a nearby coil. Unit: Henry (H)
    </div>
    
    <div class="definition">
        <b>AC Generator (المولد المتردد):</b><br>
        A device that converts mechanical energy to electrical energy using electromagnetic induction.
    </div>
    
    <div class="definition">
        <b>Transformer (المحول الكهربي):</b><br>
        A device that changes AC voltage levels using mutual induction. Vp/Vs = Np/Ns
    </div>
</div>

<div class="revision">
    <h3>📊 وحدات القياس الأساسية</h3>
    <ul>
        <li>✅ <b>Tesla (T):</b> Magnetic flux density</li>
        <li>✅ <b>Weber (Wb):</b> Magnetic flux</li>
        <li>✅ <b>Henry (H):</b> Inductance</li>
        <li>✅ <b>Ampere (A):</b> Current</li>
        <li>✅ <b>Volt (V):</b> EMF / Voltage</li>
    </ul>
</div>
`;

// =============================================
// 🔄 التحويلات - Conversions
// =============================================
window.physicsConversions = `
<div class="lesson-header">
    <h1>🔄 التحويلات والثوابت</h1>
    <h2>Unit Conversions & Constants</h2>
</div>

<div class="card">
    <div class="card-title">📐 الثوابت الفيزيائية</div>
    
    <div class="formula-box">
        <b>Permeability of Free Space:</b><br>
        μ₀ = 4π × 10⁻⁷ T.m/A<br><br>
        μ₀ = 4 × 3.14159 × 10⁻⁷ ≈ 1.257 × 10⁻⁶ T.m/A
    </div>
</div>

<div class="card">
    <div class="card-title">🔢 تحويلات الوحدات</div>
    
    <div class="explanation">
        <b>الطول (Length):</b><br>
        • 1 km = 1000 m = 10³ m<br>
        • 1 m = 100 cm = 10² cm<br>
        • 1 cm = 10 mm = 10⁻² m<br>
        • 1 mm = 10⁻³ m
    </div>
    
    <div class="explanation">
        <b>المساحة (Area):</b><br>
        • 1 m² = 10⁴ cm²<br>
        • 1 cm² = 10⁻⁴ m²<br>
        • 1 mm² = 10⁻⁶ m²
    </div>
    
    <div class="explanation">
        <b>التدفق المغناطيسي (Magnetic Flux):</b><br>
        • 1 Weber (Wb) = 1 T.m² = 1 V.s<br>
        • 1 mWb = 10⁻³ Wb<br>
        • 1 μWb = 10⁻⁶ Wb
    </div>
    
    <div class="explanation">
        <b>كثافة الفيض (Magnetic Flux Density):</b><br>
        • 1 Tesla (T) = 1 Wb/m²<br>
        • 1 T = 10⁴ Gauss<br>
        • 1 mT = 10⁻³ T
    </div>
    
    <div class="explanation">
        <b>الحث (Inductance):</b><br>
        • 1 Henry (H) = 1 Wb/A = 1 V.s/A<br>
        • 1 mH = 10⁻³ H<br>
        • 1 μH = 10⁻⁶ H
    </div>
</div>

<div class="card">
    <div class="card-title">⚡ تحويلات التيار والجهد</div>
    
    <div class="explanation">
        <b>التيار (Current):</b><br>
        • 1 A = 1000 mA = 10³ mA<br>
        • 1 mA = 10⁻³ A<br>
        • 1 μA = 10⁻⁶ A
    </div>
    
    <div class="explanation">
        <b>الجهد (Voltage):</b><br>
        • 1 kV = 1000 V = 10³ V<br>
        • 1 V = 1000 mV = 10³ mV<br>
        • 1 mV = 10⁻³ V
    </div>
    
    <div class="explanation">
        <b>الزوايا:</b><br>
        • π rad = 180°<br>
        • 1 rad = 180°/π ≈ 57.3°<br>
        • 1° = π/180 rad
    </div>
</div>

<div class="card">
    <div class="card-title">🔄 صورة التحويلات</div>
    <img src="Converts/d_convert.png" alt="Conversions Chart" class="lesson-image" loading="lazy">
    <p class="image-caption">جدول التحويلات الأساسية</p>
</div>

<div class="revision">
    <h3>💡 نصائح للتحويل</h3>
    <ul>
        <li>✅ <b>للأسفل:</b> اضرب × 10ⁿ (مثلاً: m → cm ×10²)</li>
        <li>✅ <b>للأعلى:</b> اقسم ÷ 10ⁿ (مثلاً: cm → m ÷10²)</li>
        <li>✅ <b>المساحة:</b> ضعف الأُس (m² ↔ cm² = ×10⁴)</li>
        <li>✅ <b>الحجم:</b> ثلاثة أضعاف الأُس (m³ ↔ cm³ = ×10⁶)</li>
    </ul>
</div>
`;

// =============================================
// 📂 مصادر PDF - PDF Sources
// =============================================
window.physicsPDFs = `
<div class="lesson-header">
    <h1>📂 مصادر PDF</h1>
    <h2>Physics PDF Resources</h2>
</div>

<div class="card">
    <div class="card-title">📚 الكتب الدراسية</div>
    <div style="display: grid; gap: 1rem;">
        <a href="مصادر PDF/كتاب المدرسه انجلش/stem 3 2024_1st term.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(0,240,255,0.1); border: 1px solid var(--primary); border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📘 Physics Textbook (English) - كتاب الفيزياء انجليزي
        </a>
        <a href="مصادر PDF/كتاب المدرسه عربي/stem 3 2024_1st term.en.ar.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(0,240,255,0.1); border: 1px solid var(--primary); border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📗 Physics Textbook (Arabic) - كتاب الفيزياء عربي
        </a>
        <a href="stem 3 2024_1st term.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(0,240,255,0.1); border: 1px solid var(--primary); border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📙 Main Textbook - الكتاب الأساسي
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📝 المراجعات والملخصات</div>
    <div style="display: grid; gap: 1rem;">
        <a href="مصادر PDF/Reviosion/Revision on First Term.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(0,255,136,0.1); border: 1px solid #00ff88; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            ✅ Final Revision - المراجعة النهائية ⭐
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📋 ملخصات الدروس (Word)</div>
    <div style="display: grid; gap: 1rem;">
        <a href="Sumary Lessons/Summary physics lesson 1.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid #ffc800; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📝 Lesson 1 Summary - ملخص الدرس الأول
        </a>
        <a href="Sumary Lessons/Summary physics lesson 2.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid #ffc800; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📝 Lesson 2 Summary - ملخص الدرس الثاني
        </a>
        <a href="Sumary Lessons/Summary physics lesson 3.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid #ffc800; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📝 Lesson 3 Summary - ملخص الدرس الثالث
        </a>
        <a href="Sumary Lessons/Summary physics lesson 4.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid #ffc800; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📝 Lesson 4 Summary - ملخص الدرس الرابع
        </a>
        <a href="Sumary Lessons/Summary physics lesson 7.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid #ffc800; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📝 Lesson 7 Summary - ملخص الدرس السابع
        </a>
        <a href="Sumary Lessons/Summary physics lesson 9.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid #ffc800; border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📝 Lesson 9 Summary - ملخص الدرس التاسع
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📖 التعريفات</div>
    <div style="display: grid; gap: 1rem;">
        <a href="تعريفات/Defnitions physisc.docx" target="_blank" style="display: block; padding: 1rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 8px; color: var(--text); text-decoration: none; transition: all 0.3s;" onmouseover="this.style.transform='translateX(-5px)'" onmouseout="this.style.transform='none'">
            📖 Physics Definitions - تعريفات الفيزياء
        </a>
    </div>
</div>

<div class="revision">
    <h3>💡 نصيحة مهمة</h3>
    <ul>
        <li>✅ ابدأ بمراجعة الملخصات قبل الامتحان</li>
        <li>✅ احفظ التعريفات بالإنجليزي والعربي</li>
        <li>✅ تدرب على التحويلات وحل المسائل</li>
        <li>✅ راجع الصور التوضيحية في الكتاب</li>
    </ul>
</div>
`;
