// STEM 3 Physics - Electromagnetic Induction Lessons (7-11)

const lessonsData2 = {
    // ==================== LESSON 7 ====================
    lesson7: {
        title: "قانون فاراداي للحث الكهرومغناطيسي",
        titleEn: "Faraday's Law of Electromagnetic Induction",
        concepts: [
            {
                name: "الحث الكهرومغناطيسي",
                definition: "The process of generating an electromotive force (emf) by changing the magnetic flux through a circuit.",
                explanation: "اكتشاف فاراداي العظيم: لما الفيض المغناطيسي يتغير في ملف، بيتولد فيه فولت (قوة دافعة كهربية)! ⚡"
            },
            {
                name: "طرق تغيير الفيض",
                methods: [
                    "تغيير كثافة المجال B (تقريب أو إبعاد مغناطيس)",
                    "تغيير المساحة A (تغيير شكل الملف)",
                    "تغيير الزاوية θ (دوران الملف)",
                    "تغيير عدد اللفات N"
                ]
            },
            {
                name: "قانون فاراداي",
                formula: "emf = -N × (ΔΦ/Δt)",
                explanation: "القوة الدافعة المستحثة = سالب معدل تغير الفيض × عدد اللفات",
                notes: [
                    "الإشارة السالبة تعبر عن قانون لنز",
                    "كل ما التغير أسرع، الـ emf أكبر",
                    "وحدة emf: فولت (V)"
                ]
            }
        ],
        examples: [
            {
                problem: "ملف 200 لفة، الفيض خلاله تغير من 0.05 Wb إلى 0.02 Wb في 0.1s. احسب emf المستحث.",
                given: "N = 200, ΔΦ = 0.02 - 0.05 = -0.03 Wb, Δt = 0.1 s",
                solution: "emf = -N × (ΔΦ/Δt) = -200 × (-0.03/0.1) = -200 × (-0.3) = 60 V"
            },
            {
                problem: "ملف 50 لفة مساحته 0.04 m² في مجال 0.5 T. الملف دار 90° في 0.02s. احسب متوسط emf.",
                given: "N = 50, A = 0.04 m², B = 0.5 T, θ₁ = 0°, θ₂ = 90°, Δt = 0.02 s",
                solution: "Φ₁ = BA cos0° = 0.5 × 0.04 × 1 = 0.02 Wb, Φ₂ = BA cos90° = 0, ΔΦ = -0.02 Wb, emf = -50 × (-0.02/0.02) = 50 V"
            }
        ]
    },

    // ==================== LESSON 8 ====================
    lesson8: {
        title: "قانون لنز",
        titleEn: "Lenz's Law",
        concepts: [
            {
                name: "نص قانون لنز",
                definition: "The induced current flows in a direction that opposes the change in magnetic flux that produced it.",
                explanation: "التيار المستحث بيعاكس السبب اللي ولّده! لو الفيض بيزيد، التيار بيعمل مجال يعاكسه. ولو الفيض بيقل، التيار بيعمل مجال في نفس اتجاهه."
            },
            {
                name: "تفسير الإشارة السالبة",
                explanation: "الإشارة السالبة في قانون فاراداي (emf = -N ΔΦ/Δt) هي تعبير رياضي عن قانون لنز."
            },
            {
                name: "تطبيق قانون لنز",
                steps: [
                    "حدد اتجاه المجال الأصلي",
                    "حدد هل الفيض بيزيد ولا بيقل",
                    "لو بيزيد: المجال المستحث يكون عكس الأصلي",
                    "لو بيقل: المجال المستحث يكون مع الأصلي",
                    "استخدم قاعدة البريمة لتحديد اتجاه التيار"
                ]
            },
            {
                name: "حفظ الطاقة",
                explanation: "قانون لنز هو تطبيق لقانون حفظ الطاقة - لو التيار المستحث ساعد التغير، كنا هنحصل على طاقة من لا شيء وده مستحيل!"
            }
        ],
        examples: [
            {
                problem: "مغناطيس قطبه الشمالي يقترب من ملف. ما اتجاه التيار المستحث؟",
                solution: "الفيض بيزيد ← المجال المستحث لازم يعاكس (يبقى جنوبي ناحية المغناطيس) ← باستخدام قاعدة البريمة: التيار عكس عقارب الساعة (من جهة المغناطيس)"
            }
        ]
    },

    // ==================== LESSON 9 ====================
    lesson9: {
        title: "الحث الذاتي",
        titleEn: "Self-Induction",
        concepts: [
            {
                name: "تعريف الحث الذاتي",
                definition: "The phenomenon where a changing current in a coil induces an emf in the same coil that opposes the change.",
                explanation: "لما التيار يتغير في ملف، الملف نفسه بيولد emf تعاكس هذا التغير! يعني الملف بيقاوم أي تغيير في التيار."
            },
            {
                name: "معامل الحث الذاتي (L)",
                formula: "emf = -L × (ΔI/Δt)",
                explanation: "L = معامل الحث الذاتي (وحدته هنري H). كل ما L أكبر، المقاومة للتغير أكبر.",
                definition: "Self-inductance (L): The ratio of the induced emf to the rate of change of current.",
                notes: [
                    "1 Henry = 1 V.s/A",
                    "L يعتمد على: عدد اللفات، شكل الملف، وجود قلب حديدي"
                ]
            },
            {
                name: "العلاقة بين L والفيض",
                formula: "L = NΦ/I",
                explanation: "معامل الحث الذاتي = (عدد اللفات × الفيض) / التيار"
            },
            {
                name: "الحث الذاتي لملف لولبي",
                formula: "L = μ × n² × A × L = (μ × N² × A) / l",
                explanation: "حيث n = N/l (عدد اللفات لكل متر)"
            }
        ],
        examples: [
            {
                problem: "ملف معامل حثه الذاتي 0.5 H، التيار فيه تغير من 2A إلى 5A في 0.01s. احسب emf المستحث.",
                given: "L = 0.5 H, ΔI = 5-2 = 3 A, Δt = 0.01 s",
                solution: "emf = -L × (ΔI/Δt) = -0.5 × (3/0.01) = -0.5 × 300 = -150 V"
            },
            {
                problem: "ملف لولبي 400 لفة، طوله 20cm، مساحة مقطعه 10 cm²، في الهواء. احسب L.",
                given: "N = 400, l = 0.2 m, A = 10×10⁻⁴ m², μ = 4π×10⁻⁷",
                solution: "L = (μN²A)/l = (4π×10⁻⁷ × 160000 × 10⁻³)/0.2 = 1.005 × 10⁻³ H ≈ 1 mH"
            }
        ]
    },

    // ==================== LESSON 10 ====================
    lesson10: {
        title: "المولد الكهربي (الدينامو)",
        titleEn: "Electric Generator (Dynamo)",
        concepts: [
            {
                name: "فكرة العمل",
                definition: "A generator converts mechanical energy into electrical energy using electromagnetic induction.",
                explanation: "الدينامو بيحول الطاقة الميكانيكية (الدوران) لطاقة كهربية! ملف بيدور في مجال مغناطيسي ← الفيض بيتغير ← بيتولد تيار."
            },
            {
                name: "مكونات الدينامو",
                components: [
                    "ملف (Armature): يدور في المجال",
                    "مغناطيس قوي: يوفر المجال المنتظم",
                    "حلقات انزلاق (Slip Rings): توصل التيار للدائرة الخارجية",
                    "فرش كربونية (Brushes): تلامس الحلقات"
                ]
            },
            {
                name: "emf اللحظية في الدينامو",
                formula: "emf = 2πf × N × B × A × sinθ = emf₀ × sinθ",
                explanation: "حيث: f = التردد (Hz)، θ = زاوية الدوران، emf₀ = القيمة العظمى",
                cases: [
                    "θ = 90° أو 270° → emf = emf₀ (أقصى قيمة) - الملف موازي للمجال",
                    "θ = 0° أو 180° → emf = 0 - الملف عمودي على المجال"
                ]
            },
            {
                name: "قاعدة فلمنج لليد اليمنى",
                definition: "Used to find induced current direction. Thumb = Motion, First finger = Field, Middle finger = Current.",
                explanation: "زي قاعدة اليد اليسرى بس بالإيد اليمين! للمولد مش للمحرك."
            },
            {
                name: "الفرق بين AC و DC",
                comparison: [
                    "AC (متردد): يغير اتجاهه دورياً، تردد ≠ 0، ينتج من دينامو AC",
                    "DC (مستمر): اتجاه ثابت، تردد = 0، ينتج من بطارية أو دينامو DC (مع موحد)"
                ]
            }
        ],
        examples: [
            {
                problem: "ملف 100 لفة مساحته 0.05 m² يدور بتردد 50 Hz في مجال 0.4 T. احسب أقصى emf.",
                given: "N = 100, A = 0.05 m², f = 50 Hz, B = 0.4 T",
                solution: "emf₀ = 2πf × N × B × A = 2π × 50 × 100 × 0.4 × 0.05 = 628 V"
            },
            {
                problem: "في المثال السابق، ما قيمة emf عند θ = 30°؟",
                solution: "emf = emf₀ × sin30° = 628 × 0.5 = 314 V"
            }
        ]
    },

    // ==================== LESSON 11 ====================
    lesson11: {
        title: "المحول الكهربي",
        titleEn: "Electric Transformer",
        concepts: [
            {
                name: "فكرة العمل",
                definition: "A transformer changes AC voltage from one value to another using electromagnetic induction (mutual induction).",
                explanation: "المحول بيرفع أو بيخفض الفولت المتردد! بيشتغل على مبدأ الحث المتبادل بين ملفين."
            },
            {
                name: "مكونات المحول",
                components: [
                    "الملف الابتدائي (Primary): بيدخله التيار",
                    "الملف الثانوي (Secondary): بيطلع منه التيار",
                    "قلب حديدي مصمت: بيوصل الفيض بين الملفين"
                ]
            },
            {
                name: "معادلات المحول",
                formula: "Vs/Vp = Ns/Np = Ip/Is = K",
                explanation: "K = نسبة التحويل. لو K > 1 = محول رافع، لو K < 1 = محول خافض",
                notes: [
                    "لما الفولت يزيد، التيار يقل (والعكس) - حفظ الطاقة!",
                    "المحول بيشتغل على AC فقط (لازم التيار يتغير)"
                ]
            },
            {
                name: "كفاءة المحول",
                formula: "η = (Ps/Pp) × 100% = (VsIs)/(VpIp) × 100%",
                explanation: "الكفاءة = (القدرة الخارجة / القدرة الداخلة) × 100%",
                idealCase: "للمحول المثالي: η = 100% (مافيش فقد)"
            },
            {
                name: "أسباب فقد الطاقة",
                losses: [
                    "مقاومة الأسلاك (حرارة)",
                    "التيارات الدوامية (Eddy currents) - بنقللها بالقلب المصفح",
                    "الهيسترية المغناطيسية في القلب"
                ]
            }
        ],
        examples: [
            {
                problem: "محول ابتدائيه 1000 لفة وثانويه 200 لفة. الفولت الداخل 220V. احسب الفولت الخارج ونوع المحول.",
                given: "Np = 1000, Ns = 200, Vp = 220 V",
                solution: "K = Ns/Np = 200/1000 = 0.2, Vs = K × Vp = 0.2 × 220 = 44 V. K < 1 ∴ محول خافض"
            },
            {
                problem: "محول كفاءته 90%، ابتدائيه 500 لفة (220V, 2A)، ثانويه 2500 لفة. احسب Vs و Is.",
                given: "η = 90%, Np = 500, Ns = 2500, Vp = 220 V, Ip = 2 A",
                solution: "Vs = Vp × (Ns/Np) = 220 × 5 = 1100 V. η = VsIs/VpIp → Is = (η × Vp × Ip)/Vs = (0.9 × 220 × 2)/1100 = 0.36 A"
            }
        ]
    }
};

window.lessonsData2 = lessonsData2;
