// Math Pure Lessons - STEM 3 Term 1
// STRICT CONTENT from "Book Laws" (No Paraphrasing)

// Lesson 1: Rational Exponents
window.mathLesson1 = `
<div class="lesson-header">
    <h1>Lesson 1: Rational Exponents</h1>
    <h2>الأسس الكسرية</h2>
</div>

<div class="card" id="laws-of-exponents">
    <div class="card-title">Laws of Exponents</div>
    <div class="definition">
        <ul>
            <li>$x^n \\times x^m = x^{n+m}$</li>
            <li>$x^n \\div x^m = x^{n-m}$</li>
            <li>$(x^n)^m = x^{nm}$</li>
            <li>$(xy)^n = x^n \\times y^n$</li>
            <li>$(x \\div y)^n = x^n \\div y^n$</li>
        </ul>
    </div>
</div>

<div class="card" id="rational-exponents-definition">
    <div class="card-title">Rational Exponents</div>
    <div class="formula-box">
        $$ x^{\\frac{m}{n}} = \\sqrt[n]{x^m} = (\\sqrt[n]{x})^m $$
    </div>
</div>

<div class="card" id="notes-roots">
    <div class="card-title">Important Notes</div>
    <div class="note">
        <ul>
            <li>If n is an <strong>even</strong> number, then x is a real <strong>non-negative</strong> number.</li>
            <li>If n is an <strong>odd</strong> number, then x is a <strong>real</strong> number.</li>
        </ul>
    </div>
</div>

<div class="card" id="repeated-multiplication">
    <div class="card-title">Repeated Multiplication (Review)</div>
    <div class="definition">
        <ul>
            <li>$x \\times x \\times ... \\times x = x^n$ (where $x \\in R, n \\in Z+$)</li>
            <li>$x^0 = 1$ (where $x \\in R - \\{0\\}$)</li>
            <li>$x^{-n} = \\frac{1}{x^n}$ (where $x \\in R - \\{0\\}$)</li>
        </ul>
    </div>
</div>
`;

// Lesson 2: Solving exponential equations
window.mathLesson2 = `
<div class="lesson-header">
    <h1>Lesson 2: Solving exponential equations</h1>
    <h2>حل المعادلات الأسية</h2>
</div>

<div class="card" id="rules-exponential-equations">
    <div class="card-title">Rules of solving exponential equations</div>
    <div class="definition">
        <ul>
            <li>If $x^n = x^m$, then $n = m$.</li>
            <li>If $x^n = y^n$, then:
                <ul>
                    <li>$x = y$ (if n is odd)</li>
                    <li>$x = \\pm y$ (if n is even)</li>
                    <li>$n = 0$ (if $x \\neq y$)</li>
                </ul>
            </li>
        </ul>
    </div>
</div>
`;

// Lesson 3: Applications on solving exponential equations
window.mathLesson3 = `
<div class="lesson-header">
    <h1>Lesson 3: Applications on solving exponential equations</h1>
    <h2>تطبيقات على المعادلات الأسية</h2>
</div>

<div class="card" id="applications-note">
    <div class="card-title">Applications</div>
    <div class="note">
        This lesson focuses on solving complex exponential equations (e.g., quadratic forms like $49^x - 50 \\times 7^x + 49 = 0$). Refer to solved examples in the book.
    </div>
</div>
`;

// Lesson 4: The logarithmic function
window.mathLesson4 = `
<div class="lesson-header">
    <h1>Lesson 4: The logarithmic function & its relationship with exponential function</h1>
    <h2>الدالة اللوغاريتمية وعلاقتها بالدالة الأسية</h2>
</div>

<div class="card" id="logarithmic-function-def">
    <div class="card-title">Logarithmic Function</div>
    <div class="definition">
        If $a \\in R^+ - \\{1\\}$, where $y = \\log_a x$ (logarithmic form), it can be converted to the exponential form:
        $$ x = a^y $$
    </div>
</div>

<div class="card" id="log-notice">
    <div class="card-title">Notice that</div>
    <div class="note">
        <ul>
            <li>There is no logarithm for a <strong>negative number</strong>.</li>
            <li>There is no logarithm for <strong>Zero</strong>.</li>
        </ul>
    </div>
</div>
`;

// Lesson 5: Properties of logarithms
window.mathLesson5 = `
<div class="lesson-header">
    <h1>Lesson 5: Properties of logarithms</h1>
    <h2>خواص اللوغاريتمات</h2>
</div>

<div class="card" id="log-properties">
    <div class="card-title">Key Properties</div>
    <div class="formula-box">
        <ol>
            <li>$\\log x + \\log y = \\log(xy)$</li>
            <li>$\\log x - \\log y = \\log(\\frac{x}{y})$</li>
            <li>$\\log x^n = n \\log x$</li>
            <li>$\\log_x x = 1$</li>
            <li>$\\log_x 1 = 0$</li>
        </ol>
    </div>
</div>

<div class="card" id="change-of-base">
    <div class="card-title">Change of Base & Inverse</div>
    <div class="formula-box">
        <ul>
            <li><strong>Base changing property:</strong> $\\log_y x = \\frac{\\log_n x}{\\log_n y}$</li>
            <li><strong>Multiplicative inverse:</strong> $\\log_y x = \\frac{1}{\\log_x y}$</li>
        </ul>
    </div>
</div>

<div class="card" id="common-logarithm">
    <div class="card-title">Common Logarithm</div>
    <div class="note">
        If the base is not mentioned, it is 10.
        <ul>
            <li>$\\log 10 = 1$</li>
            <li>$\\log 100 = 2$</li>
            <li>$\\log 0.1 = -1$</li>
        </ul>
    </div>
</div>
`;

// Lesson 6: Solving logarithmic equations
window.mathLesson6 = `
<div class="lesson-header">
    <h1>Lesson 6: Solving logarithmic equations</h1>
    <h2>حل المعادلات اللوغاريتمية</h2>
</div>

<div class="card" id="method-equating-bases">
    <div class="card-title">Method 1: Equating Bases</div>
    <div class="definition">
        If $\\log_a x = \\log_a y$, then $x = y$.
    </div>
</div>

<div class="card" id="method-exponential-form">
    <div class="card-title">Method 2: Exponential Form</div>
    <div class="definition">
        Convert logarithmic equation to exponential form ($y = \\log_a x \\rightarrow x = a^y$) to solve.
    </div>
</div>
`;

// Lesson 7: Solving exponential equations by using logarithms
window.mathLesson7 = `
<div class="lesson-header">
    <h1>Lesson 7: Solving exponential equations by using logarithms</h1>
    <h2>حل المعادلات الأسية باستخدام اللوغاريتمات</h2>
</div>

<div class="card" id="using-logarithms-strategy">
    <div class="card-title">Using Logarithms</div>
    <div class="definition">
        To solve equations where bases cannot be unified (e.g., $3^{5x-2} = 7^{x+1}$):
        <ol>
            <li>Take logarithm for both sides.</li>
            <li>Apply power law ($ \\log a^n = n \\log a $).</li>
            <li>Solve the resulting algebraic equation.</li>
        </ol>
    </div>
</div>
`;

// Lesson 8: Counting Principle
window.mathLesson8 = `
<div class="lesson-header">
    <h1>Lesson 8: Counting Principle</h1>
    <h2>مبدأ العد</h2>
</div>

<div class="card" id="fundamental-counting-principle">
    <div class="card-title">Fundamental Counting Principle</div>
    <div class="definition">
        If the number of ways to perform task 1 = m, task 2 = l, task 3 = n... then methods to perform them together:
        $$ \\text{Total Ways} = m \\times l \\times n \\times ... $$
    </div>
</div>
`;

// Lesson 9: Factorial of a number, Permutations
window.mathLesson9 = `
<div class="lesson-header">
    <h1>Lesson 9: Factorial of a number, Permutations</h1>
    <h2>مضروب العدد والتباديل</h2>
</div>

<div class="card" id="factorial-definition">
    <div class="card-title">Factorial</div>
    <div class="formula-box">
        Factorial of a positive integer n (written as $n!$ or $\\lfloor n$):
        $$ n! = n(n-1)(n-2) \\times ... \\times 3 \\times 2 \\times 1 $$
    </div>
</div>

<div class="card" id="factorial-properties">
    <div class="card-title">Factorial Properties</div>
    <div class="note">
        <ul>
            <li>$0! = 1$</li>
            <li>$1! = 1$</li>
            <li>$n! = n(n-1)!$</li>
        </ul>
    </div>
</div>

<div class="card" id="permutations-npr">
    <div class="card-title">Permutations ($nP_r$)</div>
    <div class="formula-box">
        The number of permutations of n different objects taking r at a time:
        $$ ^nP_r = n(n-1)(n-2)...(n-r+1) $$
        where $r \\leq n, r \\in N, n \\in Z^+$.
    </div>
</div>

<div class="card" id="permutation-laws">
    <div class="card-title">Permutation Laws</div>
    <div class="definition">
        <ul>
            <li>$^nP_0 = 1$</li>
            <li>$^nP_r = \\frac{n!}{(n-r)!}$</li>
        </ul>
    </div>
</div>
`;

// Lesson 10: Combinations
window.mathLesson10 = `
<div class="lesson-header">
    <h1>Lesson 10: Combinations</h1>
    <h2>التوافيق</h2>
</div>

<div class="card" id="combinations-ncr">
    <div class="card-title">Combinations ($nC_r$)</div>
    <div class="definition">
        Number of combinations formed from r objects chosen from n elements ($^nC_r$).
    </div>
</div>

<div class="card" id="combinations-rules">
    <div class="card-title">Rules of Combinations</div>
    <div class="formula-box">
        <ul>
            <li>$^nC_r = \\frac{^nP_r}{r!} = \\frac{n!}{r!(n-r)!}$</li>
            <li>If $^nC_x = ^nC_y$, then $x=y$ OR $x+y=n$.</li>
            <li><strong>Reducing Law:</strong> $^nC_r = ^nC_{n-r}$</li>
            <li>$^nC_n = ^nC_0 = 1$</li>
            <li><strong>Ratio Law:</strong> $\\frac{^nC_r}{^nC_{r-1}} = \\frac{n-r+1}{r}$</li>
        </ul>
    </div>
</div>
`;

// Keywords Table
window.mathKeywords = `
<div class="lesson-header">
    <h1>📖 Math Keywords - جدول الكلمات</h1>
    <h2>English ↔ Arabic Translation Table</h2>
</div>

<div class="card">
    <table class="keywords-table">
        <tr><th>English</th><th>Arabic</th></tr>
        <tr><td>definition</td><td>تعريف</td></tr>
        <tr><td>notes</td><td>ملاحظات</td></tr>
        <tr><td>rule</td><td>قاعدة</td></tr>
        <tr><td>law</td><td>قانون</td></tr>
        <tr><td>theorem</td><td>نظرية</td></tr>
        <tr><td>prove</td><td>أثبت</td></tr>
        <tr><td>show that</td><td>أثبت أن</td></tr>
        <tr><td>deduce</td><td>استنتج</td></tr>
        <tr><td>statement</td><td>عبارة</td></tr>
        <tr><td>result</td><td>ناتج</td></tr>
        <tr><td>value</td><td>قيمة</td></tr>
        <tr><td>evaluate</td><td>احسب / قيّم</td></tr>
        <tr><td>calculate</td><td>احسب</td></tr>
        <tr><td>simplify</td><td>بسّط</td></tr>
        <tr><td>solve</td><td>حل</td></tr>
        <tr><td>find</td><td>أوجد</td></tr>
        <tr><td>use</td><td>استخدم</td></tr>
        <tr><td>using</td><td>باستخدام</td></tr>
        <tr><td>verify</td><td>تحقق</td></tr>
        <tr><td>substitute</td><td>عوّض</td></tr>
        <tr><td>nearest</td><td>لأقرب</td></tr>
        <tr><td>decimal places</td><td>منازل عشرية</td></tr>
        <tr><td>to the nearest two decimal places</td><td>لأقرب منزلتين عشريتين</td></tr>
        <tr><td>calculator</td><td>آلة حاسبة</td></tr>
        <tr><td>shift key</td><td>زر Shift</td></tr>
        <tr><td>set</td><td>مجموعة</td></tr>
        <tr><td>solution set (S.S.)</td><td>مجموعة الحل</td></tr>
        <tr><td>element</td><td>عنصر</td></tr>
        <tr><td>object</td><td>شيء / عنصر</td></tr>
        <tr><td>different objects</td><td>عناصر مختلفة</td></tr>
        <tr><td>taking r at a time</td><td>أخذ r في كل مرة</td></tr>
        <tr><td>condition</td><td>شرط</td></tr>
        <tr><td>such that</td><td>بحيث</td></tr>
        <tr><td>and so on</td><td>وهكذا</td></tr>
        <tr><td>together</td><td>معًا</td></tr>
        <tr><td>number of ways</td><td>عدد الطرق</td></tr>
        <tr><td>group</td><td>مجموعة</td></tr>
        <tr><td>choose</td><td>اختر</td></tr>
        <tr><td>select</td><td>اختر / انتقِ</td></tr>
        <tr><td>form</td><td>كوّن</td></tr>
        <tr><td>formed from</td><td>مكوَّن من</td></tr>
        <tr><td>arranged</td><td>مرتّب / منظّم</td></tr>
        <tr><td>arrangement</td><td>ترتيب</td></tr>
        <tr><td>row</td><td>صف</td></tr>
        <tr><td>circle</td><td>دائرة</td></tr>
        <tr><td>competition</td><td>مسابقة</td></tr>
        <tr><td>match</td><td>مباراة</td></tr>
        <tr><td>team</td><td>فريق</td></tr>
        <tr><td>committee</td><td>لجنة</td></tr>
        <tr><td>members</td><td>أعضاء</td></tr>
        <tr><td>persons</td><td>أشخاص</td></tr>
        <tr><td>students</td><td>طلاب</td></tr>
        <tr><td>seats</td><td>مقاعد</td></tr>
        <tr><td>desk</td><td>مقعد/مكتب</td></tr>
        <tr><td>uniform</td><td>زي</td></tr>
        <tr><td>shirt</td><td>قميص</td></tr>
        <tr><td>trousers</td><td>بنطلون</td></tr>
        <tr><td>boy</td><td>ولد</td></tr>
        <tr><td>girl</td><td>بنت</td></tr>
        <tr><td>digit</td><td>رقم</td></tr>
        <tr><td>3-digit number</td><td>عدد مكوَّن من 3 أرقام</td></tr>
        <tr><td>odd number</td><td>عدد فردي</td></tr>
        <tr><td>even number</td><td>عدد زوجي</td></tr>
        <tr><td>units place</td><td>خانة الآحاد</td></tr>
        <tr><td>tens place</td><td>خانة العشرات</td></tr>
        <tr><td>hundreds place</td><td>خانة المئات</td></tr>
        <tr><td>place value</td><td>قيمة الخانة</td></tr>
        <tr><td>remainder</td><td>المتبقي</td></tr>
        <tr><td>cannot</td><td>لا يمكن</td></tr>
        <tr><td>zero</td><td>صفر</td></tr>
        <tr><td>real numbers (R)</td><td>الأعداد الحقيقية (R)</td></tr>
        <tr><td>integers (Z)</td><td>الأعداد الصحيحة (Z)</td></tr>
        <tr><td>positive integers (Z+)</td><td>الأعداد الصحيحة الموجبة (Z+)</td></tr>
        <tr><td>natural numbers (N)</td><td>الأعداد الطبيعية (N)</td></tr>
        <tr><td>belongs to (∈)</td><td>ينتمي إلى (∈)</td></tr>
        <tr><td>not equal (≠)</td><td>لا يساوي (≠)</td></tr>
        <tr><td>less than (<)</td><td>أقل من (<)</td></tr>
        <tr><td>greater than (>)</td><td>أكبر من (>)</td></tr>
        <tr><td>less than or equal (≤)</td><td>أقل من أو يساوي (≤)</td></tr>
        <tr><td>greater than or equal (≥)</td><td>أكبر من أو يساوي (≥)</td></tr>
        <tr><td>therefore (∴)</td><td>إذن / بالتالي (∴)</td></tr>
        <tr><td>refused</td><td>مرفوض</td></tr>
        <tr><td>plus (+)</td><td>زائد (+)</td></tr>
        <tr><td>minus (-)</td><td>ناقص (-)</td></tr>
        <tr><td>times (×)</td><td>ضرب (×)</td></tr>
        <tr><td>divide (÷)</td><td>قسمة (÷)</td></tr>
        <tr><td>power</td><td>أس / قوة</td></tr>
        <tr><td>square</td><td>مربع</td></tr>
        <tr><td>cube</td><td>مكعب</td></tr>
        <tr><td>fraction</td><td>كسر</td></tr>
        <tr><td>numerator</td><td>بسط</td></tr>
        <tr><td>denominator</td><td>مقام</td></tr>
        <tr><td>ratio</td><td>نسبة</td></tr>
        <tr><td>Exponent</td><td>أس / قوة</td></tr>
        <tr><td>Exponents</td><td>الأسس / القوى</td></tr>
        <tr><td>exponential</td><td>أُسّي</td></tr>
        <tr><td>exponential function</td><td>الدالة الأُسّية</td></tr>
        <tr><td>exponential equation</td><td>معادلة أُسّية</td></tr>
        <tr><td>Repeated Multiplication</td><td>الضرب المتكرر</td></tr>
        <tr><td>laws of exponents</td><td>قوانين الأسس</td></tr>
        <tr><td>base</td><td>الأساس</td></tr>
        <tr><td>index</td><td>الأس</td></tr>
        <tr><td>zero exponent</td><td>أس صفر</td></tr>
        <tr><td>negative exponent</td><td>أس سالب</td></tr>
        <tr><td>positive exponent</td><td>أس موجب</td></tr>
        <tr><td>rational exponent</td><td>أس كسري</td></tr>
        <tr><td>Rational Exponents</td><td>الأسس الكسرية</td></tr>
        <tr><td>nth root</td><td>الجذر النوني</td></tr>
        <tr><td>square root</td><td>الجذر التربيعي</td></tr>
        <tr><td>radical sign</td><td>علامة الجذر</td></tr>
        <tr><td>non-negative</td><td>غير سالب</td></tr>
        <tr><td>odd</td><td>فردي</td></tr>
        <tr><td>even</td><td>زوجي</td></tr>
        <tr><td>Logarithm</td><td>لوغاريتم</td></tr>
        <tr><td>logarithm (log)</td><td>لوغاريتم (log)</td></tr>
        <tr><td>logarithmic</td><td>لوغاريتمي</td></tr>
        <tr><td>logarithmic function</td><td>الدالة اللوغاريتمية</td></tr>
        <tr><td>laws of logarithms</td><td>قوانين اللوغاريتمات</td></tr>
        <tr><td>properties of logarithms</td><td>خواص اللوغاريتمات</td></tr>
        <tr><td>logarithmic equation</td><td>معادلة لوغاريتمية</td></tr>
        <tr><td>convert</td><td>حوِّل</td></tr>
        <tr><td>convert to exponential form</td><td>حوِّل للصيغة الأُسّية</td></tr>
        <tr><td>convert to logarithmic form</td><td>حوِّل للصيغة اللوغاريتمية</td></tr>
        <tr><td>common logarithm (base 10)</td><td>لوغاريتم عشري (أساس 10)</td></tr>
        <tr><td>base changing property</td><td>خاصية تغيير الأساس</td></tr>
        <tr><td>product rule (logs)</td><td>قاعدة حاصل الضرب (لللوغاريتمات)</td></tr>
        <tr><td>quotient rule (logs)</td><td>قاعدة القسمة (لللوغاريتمات)</td></tr>
        <tr><td>power rule (logs)</td><td>قاعدة الأس (لللوغاريتمات)</td></tr>
        <tr><td>Counting</td><td>العد</td></tr>
        <tr><td>Counting Principle</td><td>مبدأ العد</td></tr>
        <tr><td>Fundamental Counting Principle</td><td>مبدأ العد الأساسي</td></tr>
        <tr><td>conditional counting principle</td><td>مبدأ عد بشرط</td></tr>
        <tr><td>Factorial</td><td>عامِل (Factorial)</td></tr>
        <tr><td>factorial of a number</td><td>عامِل العدد</td></tr>
        <tr><td>Permutation</td><td>تباديل / ترتيب</td></tr>
        <tr><td>Permutations</td><td>التباديل</td></tr>
        <tr><td>Combination</td><td>توافيق / اختيار</td></tr>
        <tr><td>Combinations</td><td>التوافيق</td></tr>
        <tr><td>arrange in a row</td><td>رتّب في صف</td></tr>
        <tr><td>arrange in a circle</td><td>رتّب في دائرة</td></tr>
        <tr><td>nPr</td><td>عدد التباديل (nPr)</td></tr>
        <tr><td>nCr</td><td>عدد التوافيق (nCr)</td></tr>
        <tr><td>taking without repetition</td><td>بدون تكرار</td></tr>
        <tr><td>repetition</td><td>تكرار</td></tr>
        <tr><td>Expression</td><td>عبارة</td></tr>
        <tr><td>Algebra</td><td>جبر</td></tr>
        <tr><td>Equation</td><td>معادلة</td></tr>
        <tr><td>variable</td><td>متغير</td></tr>
        <tr><td>constant</td><td>ثابت</td></tr>
        <tr><td>coefficient</td><td>معامل</td></tr>
        <tr><td>term (in expression)</td><td>حد</td></tr>
    </table>
</div>
`;

// PDF Resources
window.mathPDFs = `
<div class="lesson-header">
    <h1>📂 مصادر PDF</h1>
    <h2>Math Pure Resources</h2>
</div>

<div class="card">
    <div class="card-title">📚 الكتب والملخصات</div>
    <div style="display: grid; gap: 1rem;">
        <a href="../../Term 1/Math/كتاب Math Pure.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(0,240,255,0.1); border: 1px solid var(--primary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📘 كتاب Math Pure
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">📝 مصادر إضافية</div>
    <div style="display: grid; gap: 1rem;">
        <a href="مصادر PDF/Questions Bank Pure 3_rd sec 1st term.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📝 Questions Bank Pure
        </a>
        <a href="مصادر PDF/pure mathematics (1).pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📖 Pure Mathematics Notes
        </a>
        <a href="مصادر PDF/كتاب Math Pure.en.ar عربي.pdf" target="_blank" style="display: block; padding: 1rem; background: rgba(255,0,234,0.1); border: 1px solid var(--secondary); border-radius: 8px; color: var(--text); text-decoration: none;">
            📕 كتاب Math Pure (عربي)
        </a>
    </div>
</div>

<div class="card">
    <div class="card-title">🔗 روابط خارجية</div>
    <div style="display: grid; gap: 1rem;">
        <a href="https://drive.google.com/drive/folders/1-4X44_rpzvR7LKnO3APEubsVU6Y8--z4" target="_blank" style="display: block; padding: 1rem; background: rgba(0,255,136,0.1); border: 1px solid var(--accent); border-radius: 8px; color: var(--text); text-decoration: none;">
            📁 Google Drive - Math Resources
        </a>
        <a href="https://www.youtube.com/playlist?list=PLRd8JJt0IJHf5EARPUqR1bapLmgcmPiyH" target="_blank" style="display: block; padding: 1rem; background: rgba(255,200,0,0.1); border: 1px solid var(--warning); border-radius: 8px; color: var(--text); text-decoration: none;">
            🎬 YouTube - Math Playlist
        </a>
    </div>
</div>
`;
