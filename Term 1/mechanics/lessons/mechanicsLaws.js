window.mechanicsLaws = [
    {
        unitTitle: "Unit 1: Statics - Moments & Forces",
        lessons: [
            {
                title: "Lesson 1: Moment of a force about a point in 2-D system",
                laws: [
                    {
                        title: "Vector product of two vectors",
                        content: `
                        <div class="definition">
                            The vector product of two vectors $\\vec{A} = (x_1, y_1)$ and $\\vec{B} = (x_2, y_2)$ denoted by $\\vec{A} \\times \\vec{B}$ and:
                            $$ \\vec{A} \\times \\vec{B} = (x_1, y_1) \\times (x_2, y_2) = (x_1 y_2 - x_2 y_1) \\vec{k} $$
                        </div>`
                    },
                    {
                        title: "Moment of a force",
                        content: `
                        <div class="definition">
                            Moment of a force ($\\vec{F}$) about a point (O) and denoted by $\\vec{M}_O$:
                            $$ \\vec{M}_O = \\vec{r} \\times \\vec{F} $$
                        </div>`
                    },
                    {
                        title: "Algebraic measure of the moment",
                        content: `
                        <div class="note">
                            <ul>
                                <li>If $\\vec{F}$ tends to rotate the body about O <strong>anticlockwise</strong>, the algebraic measure is <strong>positive (+)</strong>.</li>
                                <li>If $\\vec{F}$ tends to rotate the body about O <strong>clockwise</strong>, the algebraic measure is <strong>negative (-)</strong>.</li>
                            </ul>
                        </div>`
                    },
                    {
                        title: "Norm of the moment",
                        content: `
                        <div class="formula-box">
                            $$ ||\\vec{M}_O|| = F \\times L $$
                            $$ L = \\frac{||\\vec{M}_O||}{F} $$
                            Where L is the length of the perpendicular drawn from the center of moment O to the line of action of the force $\\vec{F}$.
                        </div>`
                    },
                    {
                        title: "Important Note",
                        content: `
                        <div class="note">
                            The moment of a force about any point on its line of action equals <strong>zero</strong>.
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 2: Theorem of moments",
                laws: [
                    {
                        title: "General theorem of moments",
                        content: `
                        <div class="definition">
                            The sum of algebraic measures of moments of a set of forces about a point equals the moment of the resultant about the same point.
                        </div>`
                    },
                    {
                        title: "Line of action positions",
                        content: `
                        <div class="note">
                            <ul>
                                <li>If $\\vec{M}_O = \\vec{M}_H$, then the line of action of $\\vec{R}$ is parallel to $\\overline{OH}$.</li>
                                <li>If $\\vec{M}_O = -\\vec{M}_H$, then the line of action of $\\vec{R}$ bisects $\\overline{OH}$.</li>
                                <li>If $\\vec{M}_O = \\vec{0}$, then the line of action of $\\vec{R}$ passes through point O.</li>
                            </ul>
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 3: Moment of a force about a point in 3-D coordinate system",
                laws: [
                    {
                        title: "Moment Vector in 3D",
                        content: `
                        <div class="formula-box">
                            $$ \\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix} $$
                        </div>`
                    },
                    {
                        title: "Components of moment",
                        content: `
                        <div class="formula-box">
                            <ul>
                                <li>Component of moment about x-axis: $M_x = yF_z - zF_y$</li>
                                <li>Component of moment about y-axis: $M_y = zF_x - xF_z$</li>
                                <li>Component of moment about z-axis: $M_z = xF_y - yF_x$</li>
                            </ul>
                        </div>`
                    },
                    {
                        title: "Perpendicular distance",
                        content: `
                        <div class="formula-box">
                             $$ L = \\frac{||\\vec{M}_O||}{||\\vec{F}||} $$
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 4: Resultant of Two Parallel Forces",
                laws: [
                    {
                        title: "Case 1: Same Direction",
                        content: `
                         <div class="definition">
                             If $\\vec{F}_1$ and $\\vec{F}_2$ are parallel and in the same direction:
                             <ul>
                                 <li>$R = F_1 + F_2$</li>
                                 <li>Direction: Same as $\\vec{F}_1$ and $\\vec{F}_2$</li>
                                 <li>Point of action divides distance internally inversely proportional to forces: $F_1 \\times AC = F_2 \\times BC$</li>
                             </ul>
                         </div>`
                    },
                    {
                        title: "Case 2: Opposite Directions",
                        content: `
                         <div class="definition">
                             If $\\vec{F}_1$ and $\\vec{F}_2$ are parallel and in opposite directions ($F_1 > F_2$):
                             <ul>
                                 <li>$R = F_1 - F_2$</li>
                                 <li>Direction: Same as the larger force ($\\vec{F}_1$)</li>
                                 <li>Point of action divides distance externally inversely proportional to forces: $F_1 \\times AC = F_2 \\times BC$</li>
                             </ul>
                         </div>`
                    }
                ]
            },
            {
                title: "Lesson 5: Resultant of Set of Parallel Forces",
                laws: [
                    {
                        title: "Magnitude and Direction",
                        content: `
                        <div class="formula-box">
                            Algebraic sum of forces: $R = \\sum F$
                        </div>`
                    },
                    {
                        title: "Line of Action Position",
                        content: `
                        <div class="formula-box">
                            Sum of moments of forces about a point = Moment of Resultant about same point.
                            $$ \\sum (F_i \\times x_i) = R \\times x $$
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 6: Equilibrium of Parallel Forces",
                laws: [
                    {
                        title: "Conditions of Equilibrium",
                        content: `
                        <div class="definition">
                            A rigid body is in equilibrium under coplanar parallel forces if:
                            <ol>
                                <li>Algebraic sum of forces equals zero ($R = 0$).</li>
                                <li>Algebraic sum of moments about any point equals zero ($\\sum M = 0$).</li>
                            </ol>
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 7: The Couple",
                laws: [
                    {
                        title: "Definition",
                        content: `
                        <div class="definition">
                            A system of two forces of equal magnitudes and in opposite directions and acting in different lines of action.
                        </div>`
                    },
                    {
                        title: "Theorem: Moment of a Couple",
                        content: `
                        <div class="definition">
                            The moment of a couple is a <strong>constant vector</strong> does not dependent on the point about which we take the moments of the two forces.
                            $$ \\vec{M} = \\vec{BA} \\times \\vec{F} = \\vec{AB} \\times (-\\vec{F}) $$
                        </div>`
                    },
                    {
                        title: "Norm of the moment",
                        content: `
                        <div class="formula-box">
                            Norm of the moment of the couple = magnitude of one of the two forces × the perpendicular distance between the line of action of two forces.
                            $$ M = F \\times L $$
                        </div>`
                    },
                    {
                        title: "Sign of algebraic moment",
                        content: `
                        <div class="note">
                            <ul>
                                <li>Negative if rotation is clockwise.</li>
                                <li>Positive if rotation is anticlockwise.</li>
                            </ul>
                        </div>`
                    },
                    {
                        title: "Equilibrium and Equivalence",
                        content: `
                        <div class="definition">
                            <ul>
                                <li>If two couples are in <strong>equilibrium</strong>, then the sum of their moments = zero ($M_1 + M_2 = 0$).</li>
                                <li>If two couples are <strong>equivalent</strong>, then $M_1 = M_2$.</li>
                            </ul>
                        </div>`
                    }
                ]
            }
        ]
    },
    {
        unitTitle: "Unit 2: Resultant Couples",
        lessons: [
            {
                title: "Lesson 8: Resultant Couple (first case)",
                laws: [
                    {
                        title: "First case",
                        content: `
                        <div class="definition">
                            If a set of forces form many couples, then the set is equivalent a resultant couple.
                            Its moment = the sum of algebraic measure of the moment of these couples.
                            $$ M = M_1 + M_2 + ... + M_n $$
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 9: Resultant Couple (second and third case)",
                laws: [
                    {
                        title: "Second case",
                        content: `
                        <div class="definition">
                            A system of coplanar forces is said to be equivalent to a couple if the following two conditions are satisfied together:
                            <ol>
                                <li>The sum of the algebraic components of the forces in any direction = zero.</li>
                                <li>The sum of the moment of the forces about any point $\\ne 0$.</li>
                            </ol>
                        </div>`
                    },
                    {
                        title: "Third case",
                        content: `
                        <div class="definition">
                             If the sum of the algebraic measure of the moment of a system of coplanar forces with respect to <strong>three non collinear points</strong> in its plane is constant and is not equal to zero, this system equivalent to a couple the algebraic measure of its moment equals this constant.
                        </div>`
                    }
                ]
            },
            {
                title: "Lesson 10: Resultant Couple (fourth case)",
                laws: [
                    {
                        title: "Fourth case",
                        content: `
                        <div class="definition">
                            If three coplanar forces act on a rigid body and are completely represented by the sides of a triangle taken the same way round, then this system is equivalent to a couple.
                        </div>`
                    },
                    {
                        title: "Magnitude of Moment",
                        content: `
                        <div class="formula-box">
                             The magnitude of its moment = 2 × the area of the triangle × the magnitude of the force represented the unit length.
                             $$ ||\\vec{M}|| = 2 \\times \\text{Area} \\times \\frac{F}{L} $$
                        </div>`
                    },
                    {
                        title: "Generalization",
                        content: `
                        <div class="note">
                            This rule is generalized for more than three forces.
                        </div>`
                    }
                ]
            }
        ]
    },
    {
        unitTitle: "Unit 3: Resources & Translation",
        lessons: [
            {
                title: "Comprehensive Translation Table",
                laws: [
                    {
                        title: "English - Arabic Glossary",
                        content: `
                        <div class="revision">
                            <input type="text" id="transSearch" placeholder="Search / ابحث..." style="width: 100%; padding: 1rem; margin-bottom: 1rem; background: rgba(255,255,255,0.1); border: 1px solid var(--primary); color: white; border-radius: 8px; font-family: 'Cairo';" onkeyup="filterTable()">
                            <table class="keywords-table" id="transTable">
                                <tr><th>English</th><th>Arabic</th></tr>
                                <tr><td>Find</td><td>أوجد/احسب</td></tr>
                                <tr><td>Determine</td><td>حدِّد/عيِّن</td></tr>
                                <tr><td>Prove</td><td>أثبت</td></tr>
                                <tr><td>Show that</td><td>بيِّن أن</td></tr>
                                <tr><td>Deduce</td><td>استنتج</td></tr>
                                <tr><td>Explain</td><td>اشرح</td></tr>
                                <tr><td>Suppose</td><td>افترض</td></tr>
                                <tr><td>Knowing that</td><td>علماً بأن</td></tr>
                                <tr><td>Respectively</td><td>على الترتيب</td></tr>
                                <tr><td>According to</td><td>بالنسبة إلى/وفقًا لـ</td></tr>
                                <tr><td>Force</td><td>قوة</td></tr>
                                <tr><td>Forces</td><td>قوى</td></tr>
                                <tr><td>Magnitude</td><td>مقدار/شِدّة</td></tr>
                                <tr><td>Direction</td><td>اتجاه</td></tr>
                                <tr><td>Resultant</td><td>محصلة</td></tr>
                                <tr><td>System of forces</td><td>نظام/مجموعة قوى</td></tr>
                                <tr><td>Set of forces</td><td>مجموعة قوى</td></tr>
                                <tr><td>Act</td><td>يؤثِّر</td></tr>
                                <tr><td>Acts at</td><td>يؤثِّر عند</td></tr>
                                <tr><td>Point</td><td>نقطة</td></tr>
                                <tr><td>Origin point</td><td>نقطة الأصل</td></tr>
                                <tr><td>Point of action</td><td>نقطة تأثير القوة</td></tr>
                                <tr><td>Line</td><td>خط</td></tr>
                                <tr><td>Straight line</td><td>خط مستقيم</td></tr>
                                <tr><td>Line of action</td><td>خط تأثير/خط عمل القوة</td></tr>
                                <tr><td>Passes through</td><td>يمرّ بـ</td></tr>
                                <tr><td>Bisects</td><td>ينصف</td></tr>
                                <tr><td>Parallel</td><td>متوازي</td></tr>
                                <tr><td>Parallel forces</td><td>قوى متوازية</td></tr>
                                <tr><td>Same direction</td><td>نفس الاتجاه</td></tr>
                                <tr><td>Opposite directions</td><td>اتجاهان متعاكسان</td></tr>
                                <tr><td>Distance</td><td>مسافة</td></tr>
                                <tr><td>Distant from</td><td>يبعد عن</td></tr>
                                <tr><td>Perpendicular</td><td>عمودي</td></tr>
                                <tr><td>Perpendicular distance</td><td>المسافة العمودية</td></tr>
                                <tr><td>Length</td><td>طول</td></tr>
                                <tr><td>Perpendicular from ... to ...</td><td>العمود من ... على ...</td></tr>
                                <tr><td>Plane</td><td>مستوى</td></tr>
                                <tr><td>Coplanar</td><td>في مستوى واحد/مستوي</td></tr>
                                <tr><td>Space</td><td>الفضاء/الفراغ</td></tr>
                                <tr><td>Coordinate system</td><td>نظام الإحداثيات</td></tr>
                                <tr><td>Coordinate</td><td>إحداثي</td></tr>
                                <tr><td>Axis</td><td>محور</td></tr>
                                <tr><td>X-axis</td><td>محور س (X)</td></tr>
                                <tr><td>Y-axis</td><td>محور ص (Y)</td></tr>
                                <tr><td>Z-axis</td><td>محور ع (Z)</td></tr>
                                <tr><td>2-D (two-dimensional)</td><td>ثنائي الأبعاد</td></tr>
                                <tr><td>3-D (three-dimensional)</td><td>ثلاثي الأبعاد</td></tr>
                                <tr><td>Vector</td><td>متجه</td></tr>
                                <tr><td>Vector of a force</td><td>متجه القوة</td></tr>
                                <tr><td>Vector product / Cross product</td><td>الضرب الاتجاهي</td></tr>
                                <tr><td>Component</td><td>مركّبة</td></tr>
                                <tr><td>Component of the moment</td><td>مركبة العزم</td></tr>
                                <tr><td>Moment</td><td>عزم</td></tr>
                                <tr><td>Moment of a force</td><td>عزم قوة</td></tr>
                                <tr><td>Moment vector</td><td>متجه العزم</td></tr>
                                <tr><td>Theorem</td><td>نظرية</td></tr>
                                <tr><td>Theorem of moments</td><td>نظرية العزوم</td></tr>
                                <tr><td>Sum</td><td>مجموع</td></tr>
                                <tr><td>Sum of moments</td><td>مجموع العزوم</td></tr>
                                <tr><td>Algebraic measure</td><td>القياس الجبري</td></tr>
                                <tr><td>Positive</td><td>موجب</td></tr>
                                <tr><td>Negative</td><td>سالب</td></tr>
                                <tr><td>Clockwise</td><td>مع عقارب الساعة</td></tr>
                                <tr><td>Anticlockwise</td><td>عكس عقارب الساعة</td></tr>
                                <tr><td>Zero</td><td>صفر</td></tr>
                                <tr><td>Zero vector</td><td>المتجه الصفري</td></tr>
                                <tr><td>Vanishes</td><td>ينعدم/يصبح صفراً</td></tr>
                                <tr><td>Norm</td><td>المقدار (نورم)</td></tr>
                                <tr><td>Norm of the moment</td><td>مقدار العزم (نورم العزم)</td></tr>
                                <tr><td>Equivalent</td><td>مكافئ</td></tr>
                                <tr><td>Equivalent to a couple</td><td>مكافئ لازدواج</td></tr>
                                <tr><td>Equilibrium</td><td>اتزان</td></tr>
                                <tr><td>Equilibrium of forces</td><td>اتزان القوى</td></tr>
                                <tr><td>Couple</td><td>ازدواج/زوج قوى</td></tr>
                                <tr><td>Couples</td><td>ازدواجات/أزواج قوى</td></tr>
                                <tr><td>Moment of the couple</td><td>عزم الازدواج</td></tr>
                                <tr><td>Constant vector</td><td>متجه ثابت</td></tr>
                                <tr><td>Resultant couple</td><td>محصلة الازدواجات</td></tr>
                                <tr><td>Case</td><td>حالة</td></tr>
                                <tr><td>First case</td><td>الحالة الأولى</td></tr>
                                <tr><td>Second case</td><td>الحالة الثانية</td></tr>
                                <tr><td>Third case</td><td>الحالة الثالثة</td></tr>
                                <tr><td>Equal</td><td>يساوي/متساوٍ</td></tr>
                                <tr><td>Equals</td><td>يساوي</td></tr>
                                <tr><td>Less than</td><td>أقل من</td></tr>
                                <tr><td>Greater than</td><td>أكبر من</td></tr>
                                <tr><td>Ratio</td><td>نسبة</td></tr>
                                <tr><td>Product</td><td>حاصل ضرب</td></tr>
                                <tr><td>Diagram / Figure</td><td>شكل/رسم</td></tr>
                                <tr><td>Opposite figure</td><td>الشكل المقابل</td></tr>
                                <tr><td>Triangle</td><td>مثلث</td></tr>
                                <tr><td>Rectangle</td><td>مستطيل</td></tr>
                                <tr><td>Square</td><td>مربع</td></tr>
                                <tr><td>Parallelogram</td><td>متوازي أضلاع</td></tr>
                                <tr><td>Hexagon</td><td>مسدس</td></tr>
                                <tr><td>Regular</td><td>منتظم</td></tr>
                                <tr><td>Side</td><td>ضلع</td></tr>
                                <tr><td>Side length</td><td>طول الضلع</td></tr>
                                <tr><td>Diagonal</td><td>قطر</td></tr>
                                <tr><td>Angle</td><td>زاوية</td></tr>
                                <tr><td>Measure of angle</td><td>قياس الزاوية</td></tr>
                                <tr><td>Degree (°)</td><td>درجة</td></tr>
                                <tr><td>Rod</td><td>قضيب</td></tr>
                                <tr><td>Light rod</td><td>قضيب خفيف</td></tr>
                                <tr><td>Regular rod</td><td>قضيب منتظم</td></tr>
                                <tr><td>Support</td><td>مسند/دعامة</td></tr>
                                <tr><td>Supports</td><td>مساند/دعامات</td></tr>
                                <tr><td>Rest(s) on</td><td>يرتكز على</td></tr>
                                <tr><td>Suspended</td><td>معلّق</td></tr>
                                <tr><td>Point of suspension</td><td>نقطة التعليق</td></tr>
                                <tr><td>Horizontal</td><td>أفقي</td></tr>
                                <tr><td>Vertical</td><td>رأسي/عمودي</td></tr>
                                <tr><td>Rotate</td><td>يدور</td></tr>
                                <tr><td>About to rotate</td><td>على وشك الدوران</td></tr>
                                <tr><td>Weight</td><td>وزن</td></tr>
                                <tr><td>Weights</td><td>أوزان</td></tr>
                                <tr><td>Perpendicular distance between forces</td><td>المسافة العمودية بين خطَّي تأثير القوتين</td></tr>
                                <tr><td>Distance between lines of action</td><td>المسافة بين خطَّي التأثير</td></tr>
                                <tr><td>Newton</td><td>نيوتن</td></tr>
                                <tr><td>cm</td><td>سم</td></tr>
                                <tr><td>kg.wt</td><td>كجم-وزن</td></tr>
                                <tr><td>gm.wt</td><td>جم-وزن</td></tr>
                                <tr><td>Upwards</td><td>لأعلى</td></tr>
                                <tr><td>Downwards</td><td>لأسفل</td></tr>
                                <tr><td>Upward</td><td>لأعلى</td></tr>
                                <tr><td>Downward</td><td>لأسفل</td></tr>
                                <tr><td>To the right</td><td>إلى اليمين</td></tr>
                                <tr><td>To the left</td><td>إلى اليسار</td></tr>
                                <tr><td>Perpendicular to</td><td>عمودي على</td></tr>
                                <tr><td>Equal to zero</td><td>يساوي صفراً</td></tr>
                                <tr><td>Moment unit</td><td>وحدة عزم</td></tr>
                                <tr><td>Force unit</td><td>وحدة قوة</td></tr>
                                <tr><td>Length unit</td><td>وحدة طول</td></tr>
                                <tr><td>In the same direction</td><td>في نفس الاتجاه</td></tr>
                                <tr><td>In opposite directions</td><td>في اتجاهين متعاكسين</td></tr>
                                <tr><td>Moment about a point</td><td>عزم حول نقطة</td></tr>
                                <tr><td>About the origin</td><td>حول نقطة الأصل</td></tr>
                                <tr><td>With respect to</td><td>بالنسبة إلى</td></tr>
                                <tr><td>In the plane</td><td>في المستوى</td></tr>
                                <tr><td>In the space</td><td>في الفراغ</td></tr>
                                <tr><td>Perpendicular from the origin</td><td>العمود من نقطة الأصل</td></tr>
                                <tr><td>Length of perpendicular</td><td>طول العمود</td></tr>
                                <tr><td>Distance between two points</td><td>المسافة بين نقطتين</td></tr>
                                <tr><td>Point of application</td><td>نقطة تطبيق القوة</td></tr>
                                <tr><td>Locate / Position</td><td>حدِّد الموضع</td></tr>
                                <tr><td>Position</td><td>موضع/موقع</td></tr>
                                <tr><td>Horizontal position</td><td>وضع أفقي</td></tr>
                                <tr><td>Vertical upwards</td><td>رأسي لأعلى</td></tr>
                                <tr><td>Vertically downwards</td><td>رأسي لأسفل</td></tr>
                                <tr><td>Perpendicular to AB</td><td>عمودي على AB</td></tr>
                                <tr><td>Line segment</td><td>قطعة مستقيمة</td></tr>
                                <tr><td>Bisector</td><td>منصف</td></tr>
                                <tr><td>Parallel to</td><td>موازٍ لـ</td></tr>
                                <tr><td>Perpendicular on</td><td>عمود على</td></tr>
                                <tr><td>Moment of the resultant</td><td>عزم المحصلة</td></tr>
                                <tr><td>Resultant passes by the point</td><td>المحصلة تمرّ بالنقطة</td></tr>
                                <tr><td>Resultant vanishes</td><td>المحصلة تنعدم</td></tr>
                                <tr><td>Equivalent and equilibrium of two couples</td><td>تكافؤ واتزان ازدواجين</td></tr>
                                <tr><td>Point of action of the resultant</td><td>نقطة تأثير المحصلة</td></tr>
                                <tr><td>Distance between supports</td><td>المسافة بين المساند</td></tr>
                                <tr><td>Rest on two supports</td><td>يرتكز على مسندين</td></tr>
                                <tr><td>In the opposite direction</td><td>في الاتجاه المعاكس</td></tr>
                                <tr><td>Algebraic measures of moments</td><td>القياسات الجبرية للعزوم</td></tr>
                                <tr><td>Vector notation</td><td>ترميز المتجهات</td></tr>
                                <tr><td>Cross (×)</td><td>علامة الضرب الاتجاهي (×)</td></tr>
                                <tr><td>Parallel symbol (//)</td><td>علامة التوازي (//)</td></tr>
                                <tr><td>Perpendicular symbol (⊥)</td><td>علامة التعامد (⊥)</td></tr>
                                <tr><td>Angle C</td><td>الزاوية C</td></tr>
                                <tr><td>Side AB</td><td>الضلع AB</td></tr>
                                <tr><td>Distance AB</td><td>المسافة AB</td></tr>
                                <tr><td>Side length 10 cm</td><td>طول الضلع 10 سم</td></tr>
                                <tr><td>Difference</td><td>فرق</td></tr>
                                <tr><td>Addition (+)</td><td>جمع (+)</td></tr>
                                <tr><td>Subtraction (-)</td><td>طرح (-)</td></tr>
                                <tr><td>Square root (√)</td><td>الجذر التربيعي (√)</td></tr>
                                <tr><td>Value</td><td>قيمة</td></tr>
                                <tr><td>Constant</td><td>ثابت</td></tr>
                                <tr><td>Variable</td><td>متغيّر</td></tr>
                                <tr><td>Unknown</td><td>مجهول</td></tr>
                                <tr><td>Equation</td><td>معادلة</td></tr>
                                <tr><td>Solve for</td><td>أوجد قيمة/حلّ من أجل</td></tr>
                                <tr><td>Substitute</td><td>عوّض</td></tr>
                                <tr><td>Hence / Therefore</td><td>إذن/وبالتالي</td></tr>
                                <tr><td>Because</td><td>لأن</td></tr>
                                <tr><td>Given that</td><td>معطى أن</td></tr>
                                <tr><td>Let</td><td>لتكن/افترض</td></tr>
                                <tr><td>Perimeter</td><td>محيط</td></tr>
                                <tr><td>Midpoint</td><td>منتصف</td></tr>
                                <tr><td>Segment</td><td>قطعة</td></tr>
                                <tr><td>Perpendicular bisector</td><td>العمود المنصف</td></tr>
                            </table>
                        </div>`
                    }
                ]
            },
            {
                title: "PDF Resources",
                laws: [
                    {
                        title: "Textbooks and Question Banks",
                        content: `
                        <div class="resources-grid">
                            <!-- Question Bank -->
                            <a href="مصادر PDF/بنك الاسئلة ميكانيكا  للمدارس الصناعية الصف الثالث الثاتوى 2024 (1).pdf" target="_blank" class="resource-card theme-blue">
                                <div class="premium-icon">
                                    <span>🧠</span>
                                </div>
                                <div class="card-content">
                                    <h3>Question Bank 2024</h3>
                                    <p>بنك الاسئلة ميكانيكا للمدارس الصناعية</p>
                                </div>
                                <div class="action-btn">
                                    Open PDF
                                </div>
                            </a>

                            <!-- Arabic Textbook -->
                            <a href="مصادر PDF/كتاب Math M-1-42.en.ar عربي.pdf" target="_blank" class="resource-card theme-purple">
                                <div class="premium-icon">
                                    <span>📘</span>
                                </div>
                                <div class="card-content">
                                    <h3>Arabic Textbook</h3>
                                    <p>كتاب الميكانيكا (عربي)</p>
                                </div>
                                <div class="action-btn">
                                    Open Book
                                </div>
                            </a>

                            <!-- English Textbook -->
                            <a href="مصادر PDF/كتاب Math M-1-42.pdf" target="_blank" class="resource-card theme-green">
                                <div class="premium-icon">
                                    <span>🇬🇧</span>
                                </div>
                                <div class="card-content">
                                    <h3>English Textbook</h3>
                                    <p>Mechanics Textbook</p>
                                </div>
                                <div class="action-btn">
                                    Open Book
                                </div>
                            </a>
                        </div>`
                    },
                    {
                        title: "Video Resources",
                        content: `
                        <div class="resources-grid">
                            <a href="https://www.youtube.com/playlist?list=PLRd8JJt0IJHfWqSJEtPQrTGB_KzQlNOfB" target="_blank" class="resource-card video-resource theme-red">
                                <div class="video-content">
                                    <div class="play-icon">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <div class="card-content" style="text-align: left;">
                                        <h3>Full Course Playlist</h3>
                                        <p>شرح المنهج كامل بالتفصيل على يوتيوب</p>
                                    </div>
                                </div>
                                <div class="action-btn" style="width: auto; padding: 0.5rem 2rem;">
                                    Watch Now
                                </div>
                            </a>
                        </div>`
                    }
                ]
            }
        ]
    }
];
