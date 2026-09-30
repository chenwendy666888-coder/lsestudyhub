/* MA221 — Further Mathematical Methods (Calculus) · AT 2026/27
   Course manifest. Loaded via <script src> so it works offline (file://) too.
   To edit content: change this file only. Pages render from it. */
window.LSEHUB = window.LSEHUB || { courses: {} };
window.LSEHUB.courses.ma221 = {
  code: "MA221",
  title: "Further Mathematical Methods (Calculus)",
  titleZh: "高等数学方法（微积分）",
  term: "Autumn Term 2026/27",
  accent: "#C8102E",            // used for the course card gradient on the dashboard
  // palette follows Prof Ostaszewski's own slide look: red title rules + green definition boxes.
  // Each week may override this with its own `palette` so the page echoes THAT lecture.
  palette: { accent: "#C8102E", def: "#2F9E44" },
  moodle: "https://moodle.lse.ac.uk/course/view.php?id=16470",
  convenor: "Prof Adam Ostaszewski",
  assessment: "100% unseen written exam (Winter exam period). Weekly homework is formative (not graded).",
  aiPolicy: { label: "Departmental use of generative AI (Moodle)", url: "https://moodle.lse.ac.uk/course/view.php?id=16470" },
  outcomes: [
    { en: "Compute limits via the algebra of limits and L'Hôpital's Rule.", zh: "用极限的代数运算与洛必达法则计算极限。" },
    { en: "State and use the definition of the Riemann integral.", zh: "陈述并使用黎曼积分的定义。" },
    { en: "Evaluate multiple integrals via Fubini's Theorem and change of variables with Jacobians.", zh: "用 Fubini 定理与含 Jacobian 的换元法计算多重积分。" },
    { en: "Test improper integrals for convergence; test families for dominated convergence.", zh: "检验反常积分的收敛性；对一族被积函数检验控制收敛。" },
    { en: "Manipulate integrals: pass limits and differentiate under the integral sign.", zh: "操作积分：积分号下取极限、积分号下求导。" },
    { en: "Work with Laplace transforms, and the Gamma and Beta functions.", zh: "使用 Laplace 变换以及 Gamma、Beta 函数。" },
    { en: "Use the Riemann–Stieltjes integral (integrators with jump contributions).", zh: "使用 Riemann–Stieltjes 积分（含跳跃贡献的积分子）。" }
  ],
  weeks: [
    {
      n: 1, status: "active",
      title: "Limits and their properties", titleZh: "极限及其性质",
      topics: ["Limits at infinity", "Algebra of limits", "Infinite limits", "Limits at a point", "One-sided limits"],
      tags: ["limits", "algebra-of-limits", "sandwich", "infinite-limits", "one-sided", "indeterminate-forms"],
      lecture: "courses/ma221/lectures/w01_limits.html",
      notes: "courses/ma221/notes/w01_limits.md",
      lectureNote: "The whole of Week 1 (Parts 1–4). Parts 1–2 were the Tuesday session.",
      objectives: [
        { en: "Read and use the ε–T definition of lim_{t→∞} f(t)=L, and the M–T definition of ±∞ limits.", zh: "读懂并使用 lim_{t→∞} f(t)=L 的 ε–T 定义，以及 ±∞ 极限的 M–T 定义。" },
        { en: "Apply the algebra of limits: sum, difference, product, quotient, scalar, power.", zh: "运用极限的代数：和、差、积、商、数乘、幂。" },
        { en: "Extract the dominant term of rational / root expressions as t→∞.", zh: "提取 t→∞ 时有理式 / 根式的主导项。" },
        { en: "Use the Sandwich (Squeeze) Theorem — e.g. show sin t / t → 0.", zh: "使用夹逼（三明治）定理——例如证明 sin t / t → 0。" },
        { en: "Handle limits at a point c (ε–δ) and one-sided limits; know when a two-sided limit fails to exist.", zh: "处理某点 c 处的极限（ε–δ）与单侧极限；知道双侧极限何时不存在。" },
        { en: "Recognise indeterminate forms (∞−∞, ∞/∞, 0/0, 0·∞, 1^∞) and never write √(A−B)=√A−√B.", zh: "识别未定式（∞−∞、∞/∞、0/0、0·∞、1^∞），并且绝不写 √(A−B)=√A−√B。" }
      ],
      keyTerms: [
        { t: "limit", z: "极限", d: "the value f(t) settles towards / f(t) 最终趋近的值" },
        { t: "asymptote", z: "渐近线", d: "a line the curve approaches but need not meet / 曲线趋近但未必相交的直线" },
        { t: "algebra of limits", z: "极限的代数", d: "rules combining limits of parts into the limit of the whole / 用部分的极限组合出整体极限的规则" },
        { t: "dominant term", z: "主导项", d: "the fastest-growing term; sets the behaviour at ∞ / 增长最快、决定 ∞ 处行为的项" },
        { t: "Sandwich / Squeeze Thm", z: "夹逼定理", d: "if f≤g≤h and f,h→a then g→a / 若 f≤g≤h 且 f,h→a 则 g→a" },
        { t: "one-sided limit", z: "单侧极限", d: "the limit approaching c only from below (c⁻) or above (c⁺) / 仅从下侧(c⁻)或上侧(c⁺)趋近的极限" },
        { t: "indeterminate form", z: "未定式", d: "∞−∞, ∞/∞, 0/0, 0·∞, 1^∞ — algebra of limits does not settle these / 极限代数无法直接判定的形式" }
      ],
      feynman: [
        { id: "f1", en: "What does lim_{t→∞} f(t)=L actually mean?", zh: "lim_{t→∞} f(t)=L 到底是什么意思？", points: ["ε = the error you're willing to tolerate (how close counts as 'equal')", "T = 'from this point on' — how large t must be", "The order matters: someone picks ε first, THEN you must find a T that works"] },
        { id: "f2", en: "Why can't we use the algebra of limits on sin t / t, and what do we use instead?", zh: "为什么 sin t / t 不能用极限代数？改用什么？", points: ["sin t has no limit as t→∞ (it keeps oscillating), so rules (1)–(6) don't apply", "But |sin t / t| ≤ 1/t → 0, so we squeeze it with −1/t ≤ sin t/t ≤ 1/t", "Sandwich Theorem then forces the limit to be 0"] },
        { id: "f3", en: "What does 'dominant term' mean and how do you extract it?", zh: "什么是「主导项」？怎么提取？", points: ["The term that grows fastest; e.g. in t³−3t²+2 it is t³", "Factor it out: t³(1 − 1/t + 2/t³); the bracket → 1", "So f(t)/t³ → 1 — that's exactly what 'dominant' means"] },
        { id: "f4", en: "When is 1/f(t) → +∞ guaranteed, and why isn't f→0 enough?", zh: "何时保证 1/f(t) → +∞？为何 f→0 还不够？", points: ["Need f(t)→0 AND f(t)>0 (stays positive)", "If f oscillates in sign (like sin t / t) then 1/f swings to ±∞ — no limit", "Sign, not just size, controls the reciprocal"] },
        { id: "f5", en: "Why can a two-sided limit fail even when both one-sided limits exist?", zh: "为什么两个单侧极限都存在，双侧极限仍可能不存在？", points: ["A two-sided limit exists ⇔ left limit = right limit", "If they differ (e.g. +∞ on one side, −∞ on the other) the two-sided limit does not exist", "Example: (x²−3x+3)/(1−x²) at x=1"] }
      ],
      socratic: [
        { id: "s1", q_en: "In the ε–T definition, does T depend on ε? What must happen to T as ε shrinks?", q_zh: "ε–T 定义里，T 依赖 ε 吗？ε 变小时 T 会怎样？" },
        { id: "s2", q_en: "The Sandwich Theorem needs both bounds to tend to the SAME a. Build a 'sandwich' whose bounds tend to different limits — what breaks?", q_zh: "夹逼定理要求两侧趋于同一个 a。构造一个两侧趋于不同极限的「夹逼」——哪里出问题？" },
        { id: "s3", q_en: "∞−∞: construct f,g→+∞ so that f−g tends to (a) +∞, (b) a finite L, (c) −∞, (d) no limit. (Hint: it's on the slides.)", q_zh: "∞−∞：构造 f,g→+∞ 使 f−g 分别趋于 (a) +∞、(b) 有限 L、(c) −∞、(d) 无极限。（提示：讲义上有。）" },
        { id: "s4", q_en: "lim_{t→c} uses 0<|t−c|≤δ — why exclude t=c? What does 'no information about f(c)' mean?", q_zh: "lim_{t→c} 用 0<|t−c|≤δ——为何排除 t=c？「对 f(c) 无信息」是什么意思？" },
        { id: "s5", q_en: "The conjugate trick multiplies by (2+√…)/(2+√…). Why does that help, and which identity is behind it?", q_zh: "共轭技巧乘以 (2+√…)/(2+√…)。为什么有用？背后是哪个恒等式？" }
      ],
      // Points worth double-checking with the teacher / office hour (pre-seeds "Questions to ask")
      watch: [
        { en: "Slide (Part 1, worked ex.) lands lim (2−√(4−1/t))/(1/t) = 1/2, but the conjugate method gives 1/4. Confirm which is intended.", zh: "讲义（Part 1 例题）把 lim (2−√(4−1/t))/(1/t) 写成 1/2，但共轭法我算出 1/4。上课确认一下到底是哪个。" }
      ],
      exercises: {
        set: "Exercises 1 — Assumed background",
        dueLabel: "5pm, Fri 3 Oct",
        due: "2026-10-03T17:00",
        note: "Revision of single-variable techniques (not lectured). Show ALL working. Submit as ONE pdf on Moodle.",
        assigned: ["1", "2", "4a", "4c", "4g", "4h", "6", "7"],
        items: [
          { id: "1", hw: true, diff: "mid", q: "Find d/dx tan x. Use this to find d/dt tan⁻¹t.", hint: "tan x = sin x / cos x → sec²x. For arctan use the inverse-function rule: if y=tan⁻¹t then t=tan y, differentiate implicitly." },
          { id: "2", hw: true, diff: "hi", q: "sinh x = (eˣ−e⁻ˣ)/2. Show sinh is increasing (why relevant to the inverse?). Show sinh⁻¹x = ln(x+√(1+x²)). Sketch both.", hint: "sinh′ = cosh > 0 ⇒ strictly increasing ⇒ invertible. To invert, set y=(eˣ−e⁻ˣ)/2 and solve a quadratic in eˣ." },
          { id: "3", hw: false, diff: "lo", q: "Find ∂(xᵗ)/∂t.", hint: "Write xᵗ = e^{t ln x}, so ∂/∂t = (ln x)·xᵗ." },
          { id: "4a", hw: true, diff: "mid", q: "∫ log₃x dx", hint: "log₃x = ln x / ln 3. Then ∫ ln x dx = x ln x − x (by parts)." },
          { id: "4b", hw: false, diff: "mid", q: "∫ (ln x)² dx", hint: "Integrate by parts twice." },
          { id: "4c", hw: true, diff: "lo", q: "∫₀^π sin²x dx", hint: "sin²x = (1−cos 2x)/2." },
          { id: "4d", hw: false, diff: "mid", q: "∫₀¹ (u²+1)/(u−2) du", hint: "Polynomial-divide first: (u²+1)/(u−2) = u+2 + 5/(u−2)." },
          { id: "4e", hw: false, diff: "lo", q: "∫ dx/(x²−4x+4)", hint: "x²−4x+4 = (x−2)²." },
          { id: "4f", hw: false, diff: "mid", q: "∫ dx/(x²−4x+3)", hint: "Factor (x−1)(x−3); partial fractions." },
          { id: "4g", hw: true, diff: "mid", q: "∫ dx/(x²−4x+5)", hint: "Complete the square: (x−2)²+1 → arctan(x−2)." },
          { id: "4h", hw: true, diff: "hi", q: "∫ x²/(x²−4x+5) dx", hint: "Divide first: x²/(x²−4x+5) = 1 + (4x−5)/((x−2)²+1); then split the top around the derivative 2(x−2)." },
          { id: "4i", hw: false, diff: "hi", q: "∫ (4x−10)/(x³−4x²+5x) dx", hint: "Denominator x(x²−4x+5); partial fractions (the quadratic is irreducible)." },
          { id: "4j", hw: false, diff: "mid", q: "∫ sin x cosᵐx dx (any integer m)", hint: "Substitute u=cos x; mind the case m=−1." },
          { id: "5", hw: false, diff: "lo", q: "For M>0, find ∫₀^M 2ᵗ dt.", hint: "∫ aᵗ dt = aᵗ/ln a." },
          { id: "6", hw: true, diff: "mid", q: "For p>0 and b>a>1, evaluate ∫ₐ^b dx/(x(ln x)^p).", hint: "Substitute u = ln x, du = dx/x → ∫ u^{−p} du. (Later we let a→1 or b→∞.)" },
          { id: "7", hw: true, diff: "mid", q: "If f is differentiable on [0,4], find ∫₀² t f′(t²) dt. For which f is it positive?", hint: "Substitute u=t²: the integral is ½(f(4)−f(0)). Positive ⇔ f(4)>f(0)." },
          { id: "8", hw: false, diff: "hi", q: "Evaluate ∫₀^{π/2} cos³x/(1+sin x) dx.", hint: "cos³x = cos x(1−sin²x) = cos x(1−sin x)(1+sin x); cancel (1+sin x)." }
        ]
      }
    },

    { n: 2, status: "locked", title: "Continuity, Taylor's Theorem, L'Hôpital's Rule", titleZh: "连续性、泰勒定理、洛必达法则",
      topics: ["Continuity", "Taylor's Theorem", "L'Hôpital's Rule"], tags: ["continuity","taylor","lhopital"],
      exercises: { set: "Exercises 2", assigned: ["2","3","4a","8","9a"], items: [] } },

    { n: 3, status: "locked", title: "The Riemann Integral", titleZh: "黎曼积分",
      topics: ["Definition of the Riemann integral"], tags: ["riemann-integral","definition"],
      exercises: { set: "Exercises 3", assigned: ["1","2(a,ii)","2(b,ii)","2c","4"], items: [] } },

    { n: 4, status: "locked", title: "Calculating Double Integrals", titleZh: "二重积分的计算",
      topics: ["Double integrals", "Fubini's Theorem"], tags: ["double-integral","fubini"],
      exercises: { set: "Exercises 4", assigned: ["1","2","3","5"], items: [] } },

    { n: 5, status: "locked", title: "Manipulating Integrals", titleZh: "积分的操作",
      topics: ["Change of variables", "Jacobians", "Differentiating under the integral"], tags: ["change-of-variables","jacobian"],
      exercises: { set: "Exercises 5", assigned: ["1","2","3","4","5"], items: [] } },

    { n: 6, status: "locked", title: "Improper Integrals", titleZh: "反常积分",
      topics: ["Improper integrals", "Convergence tests"], tags: ["improper-integral","convergence"],
      exercises: { set: "Exercises 6", assigned: ["1","2","3","4","5"], items: [] } },

    { n: 7, status: "locked", title: "More on Improper Integrals", titleZh: "反常积分（续）",
      topics: ["Dominated convergence", "Families of integrands"], tags: ["improper-integral","dominated-convergence"],
      exercises: { set: "Exercises 7", assigned: ["1","3","4(a,b,c)","5","6","7"], items: [] } },

    { n: 8, status: "locked", title: "Manipulations (cont'd), Laplace Transforms", titleZh: "积分操作（续）、Laplace 变换",
      topics: ["Passing limits/derivatives through ∫", "Laplace transforms"], tags: ["laplace","manipulation"],
      exercises: { set: "Exercises 8", assigned: ["1","2b","3a","3b","4"], items: [] } },

    { n: 9, status: "locked", title: "Evaluating Improper Integrals", titleZh: "反常积分的求值",
      topics: ["Gamma function", "Beta function"], tags: ["gamma","beta","improper-integral"],
      exercises: { set: "Exercises 9", assigned: ["2e","3b","4","5","6","7","8"], items: [] } },

    { n: 10, status: "locked", title: "The Riemann–Stieltjes Integral", titleZh: "Riemann–Stieltjes 积分",
      topics: ["Riemann–Stieltjes integral", "Jump contributions"], tags: ["riemann-stieltjes","jumps"],
      exercises: { set: "Exercises 10", assigned: ["1","3","4","5","7"], items: [] } }
  ],
  exams: [
    { label: "MA221 Sample Paper (based on MA212.2024)", note: "closest to this course" },
    { label: "MA221 January 2026 Exam + Solutions", note: "first MA221 sitting" },
    { label: "MA212 2025 paper + solutions (Section A = Calculus)", note: "" },
    { label: "MA212 2024 paper + solutions (Section A = Calculus)", note: "" },
    { label: "MA212 2023 paper + solutions (Section A = Calculus)", note: "" }
  ],
  prereq: [
    { label: "MA100 §3.5–3.6 — manipulating limits & differentiability", z: "极限运算与可导性" },
    { label: "MA100 §4.4 — Taylor polynomials & series", z: "泰勒多项式与级数" },
    { label: "MA100 §8.1–8.6 — integrals & improper integrals", z: "积分与反常积分" },
    { label: "MA100 §9.1–9.2 — partial fractions & integration by parts", z: "部分分式与分部积分" }
  ]
};
