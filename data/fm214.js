/* FM214 — Principles of Finance I · Autumn Term 2026/27
   Course manifest. Loaded via <script src> so it works offline (file://) too.
   To edit content: change this file only. Pages render from it.
   Palette: red (structure) + gold/amber (emphasis), echoing the lecture slides. */
window.LSEHUB = window.LSEHUB || { courses: {} };
window.LSEHUB.courses.fm214 = {
  code: "FM214",
  title: "Principles of Finance I",
  titleZh: "金融学原理 I",
  term: "Autumn Term 2026/27",
  accent: "#C1121F",            // course-card + hero (red)
  palette: { accent: "#C1121F", def: "#C8890A" },   // red structure + gold emphasis
  moodle: "https://moodle.lse.ac.uk/",
  convenor: "Dr Cameron Peng",
  assessment: "90% final exam (January, 1.5 hrs, two compulsory questions) + 10% quizzes (two of five online quizzes, chosen at random, 5% each). Closed-book; Casio fx-83/85 only.",
  examPill: "90% exam · 10% quizzes",
  infoUrl: "courses/fm214/info.html",
  aiPolicy: { label: "Generative AI — fine for explaining a concept you missed; counterproductive for doing exercises/quizzes (lecturer's guidance)", url: "https://moodle.lse.ac.uk/" },
  resources: [
    { label: "Syllabus — Autumn Term 2026", zh: "课程大纲", href: "courses/fm214/resources/FM214_syllabus_2026AT.pdf", meta: "PDF · objectives, delivery, assessment, schedule" },
    { label: "Background handout — Week 0 (self-study)", zh: "背景讲义(Week 0,自学)", href: "courses/fm214/resources/FM214_background.pdf", meta: "PDF · present-value mechanics + statistics · tested in Quiz 1" },
    { label: "Textbook — Brealey, Myers, Allen & Edmans, Principles of Corporate Finance (14e)", zh: "教材 BMA 14e", href: "", meta: "slides are self-contained; chapters give support & extra practice" },
    { label: "Moodle — notes, exercises, solutions, sample papers", zh: "Moodle 课程页", href: "https://moodle.lse.ac.uk/", meta: "official home · update the link once you have the course id" }
  ],
  info: {
    tagline: "The term spends itself on the two hard questions of finance: what is the price of risk? and what stops free lunches?",
    taglineZh: "全学期就围绕金融的两个难题:风险的价格是多少?什么阻止免费午餐?",
    facts: [
      { k: "Lecturer", v: "Dr Cameron Peng — c.peng9@lse.ac.uk — office MAR 7.07 — office hour Fri 2–3pm (email first)" },
      { k: "Lectures", v: "Fridays 11am–1pm, Peacock Theatre — ten lectures, Weeks 1–10" },
      { k: "Classes", v: "90-minute weekly class, Weeks 2–11 — bring written answers; builds on the previous week's lecture; not graded" },
      { k: "Exam", v: "January exam period — 1.5 hours, two compulsory questions — 90% of the grade. Closed-book; Casio fx-83/85 only." },
      { k: "Quizzes", v: "Five online quizzes (Weeks 3, 5, 7, 9, 11), each covering the previous two weeks — two chosen at random count 5% each (10% total)." },
      { k: "Textbook", v: "Brealey, Myers, Allen & Edmans — Principles of Corporate Finance (14e). Lecture slides are self-contained; chapters give support." },
      { k: "Self-study", v: "≈5 hours/week — the worked examples, the class exercise, and the textbook chapters for support." }
    ],
    pillars: [
      { t: "Equilibrium pricing", zh: "均衡定价", wk: "Lectures 1–5", d: "Start from investors' preferences, and derive what expected return each risk should earn once markets clear." },
      { t: "No-arbitrage pricing", zh: "无套利定价", wk: "Lectures 6–10", d: "Say nothing about preferences; price assets off other assets' prices by ruling out free lunches." }
    ],
    spine: "The two pillars meet in one object — the stochastic discount factor, 1 = E[M(1+rᵢ)] — in Lectures 3 and 6. Watch for it: it is the intellectual spine of the course.",
    study: [
      "Redo every worked example by hand, without the slide — January is closed-book with a basic calculator, so the method has to live in your hands.",
      "Do the class exercise before class — class is where you discover what you did not understand; arriving blank wastes the hour built for that.",
      "Use the quizzes as diagnostics, and start the sample papers early (old past papers cover a different, pre-2026 syllabus).",
      "Generative AI is useful for explaining a concept you missed, counterproductive for doing the exercises or quizzes for you — in January there is no AI, no notes, and a Casio."
    ],
    quizzes: [
      { q: "Quiz 1", wk: "Week 3", covers: "Background handout + Weeks 1–2" },
      { q: "Quiz 2", wk: "Week 5", covers: "Weeks 3–4" },
      { q: "Quiz 3", wk: "Week 7", covers: "Weeks 5–6" },
      { q: "Quiz 4", wk: "Week 9", covers: "Weeks 7–8" },
      { q: "Quiz 5", wk: "Week 11", covers: "Weeks 9–10" }
    ]
  },
  outcomes: [
    { en: "Organise asset pricing around its two pillars: equilibrium pricing and pricing by absence of arbitrage.", zh: "把资产定价组织成两根支柱:均衡定价与无套利定价。" },
    { en: "Compute portfolio mean and variance; explain diversification and the split of risk into systematic and idiosyncratic.", zh: "计算组合的均值与方差;解释分散化,以及风险分为系统性与特质两部分。" },
    { en: "Derive the efficient frontier, the tangency portfolio, and two-fund separation; state and use the CAPM.", zh: "推导有效前沿、切点组合与两基金分离;陈述并使用 CAPM。" },
    { en: "Use expected utility to justify mean–variance preferences; build the consumption CAPM and the stochastic discount factor.", zh: "用期望效用为均值—方差偏好提供基础;建立消费 CAPM 与随机折现因子。" },
    { en: "Value stocks; assess market efficiency and the leading anomalies and alternative (multifactor) models.", zh: "对股票估值;评估市场有效性、主要异象与替代(多因子)模型。" },
    { en: "Price by no-arbitrage via state prices and the SDF; value bonds and the term structure.", zh: "用状态价格与 SDF 做无套利定价;对债券与期限结构估值。" },
    { en: "Price forwards and futures, and options via the binomial model and the Black–Scholes formula.", zh: "对远期与期货估值,并用二叉树模型与 Black–Scholes 公式对期权估值。" }
  ],
  weeks: [
    {
      n: 0, status: "",
      title: "Background handout (self-study)", titleZh: "背景讲义(自学)",
      handout: "courses/fm214/resources/FM214_background.pdf",
      topics: ["Present-value mechanics (PV/FV, NPV, perpetuities & annuities, compounding, real vs nominal)", "Statistics review (random variables, mean, variance, covariance, correlation)"],
      tags: ["present-value", "npv", "annuity", "statistics", "variance", "covariance"],
      lectureNote: "Self-study handout FM214_background.pdf (Moodle). Assumed known from Lecture 1, tested directly in Quiz 1. Work the Part-3 exercises before Week 1.",
      exercises: {
        set: "Background handout — Part 3 practice (self-check)",
        note: "On Moodle as FM214_background.pdf. Not graded; Quiz 1 tests this material directly. Work every shaded worked example by hand first.",
        assigned: [], items: []
      }
    },
    {
      n: 1, status: "active",
      title: "Introduction; portfolio theory and the CAPM", titleZh: "导论;组合理论与 CAPM",
      topics: ["Risk and return in the data", "Variance, covariance & portfolios", "Diversification", "The efficient frontier & two-fund separation", "The CAPM, beta and the SML"],
      tags: ["risk-return", "equity-premium", "variance", "diversification", "efficient-frontier", "two-fund-separation", "sharpe-ratio", "capm", "beta", "sml", "cml", "alpha"],
      lecture: "courses/fm214/lectures/w01_portfolio_capm.html",
      notes: "courses/fm214/notes/w01_portfolio_capm.md",
      lectureNote: "Lecture 1 (slides 1–39). Reading: BMA (14e) ch. 7–8. The equilibrium pillar begins here; it runs to Lecture 5.",
      objectives: [
        { en: "Read the long-run data: the equity premium (≈8.8%/yr) and why stocks are far riskier (the two facts to explain).", zh: "读懂长期数据:股权溢价(≈8.8%/年)与股票为何风险大得多(待解释的两个事实)。" },
        { en: "Compute a portfolio's mean (linear) and variance (quadratic, using every correlation ρᵢⱼ).", zh: "计算组合的均值(线性)与方差(二次,用到所有相关系数 ρᵢⱼ)。" },
        { en: "Explain diversification: equal-weight variance → ρσ² as N→∞; idiosyncratic risk is free to shed, systematic risk survives.", zh: "解释分散化:等权方差当 N→∞ 趋于 ρσ²;特质风险可免费分散,系统风险留存。" },
        { en: "Build the efficient frontier, add a risk-free asset to get the CML, and state two-fund separation (everyone holds rf + the tangency portfolio T).", zh: "构建有效前沿,加入无风险资产得到 CML,并陈述两基金分离(人人持有 rf + 切点组合 T)。" },
        { en: "Use equilibrium (T = M) to derive the CAPM E[rᵢ]−rf = βᵢ(E[rM]−rf); read the SML and distinguish it from the CML.", zh: "由均衡(T = M)推导 CAPM E[rᵢ]−rf = βᵢ(E[rM]−rf);读 SML 并与 CML 区分。" },
        { en: "Interpret beta as marginal (covariance) risk, split variance via R²=ρ²=β²σM²/σᵢ², and read alpha as a deviation from the SML.", zh: "把 beta 理解为边际(协方差)风险,用 R²=ρ²=β²σM²/σᵢ² 分解方差,把 alpha 看作对 SML 的偏离。" }
      ],
      keyTerms: [
        { t: "equity premium", z: "股权溢价", d: "how much equities beat bills on average (≈8.8%/yr arithmetic, 7.0% compounded) / 股票平均跑赢国库券的幅度" },
        { t: "variance / σ", z: "方差 / 波动率", d: "σ²=E[(r−μ)²], σ=√Var — the risk measure, in return units / 风险的度量,单位是收益率" },
        { t: "correlation ρ", z: "相关系数", d: "co-movement in [−1,1]; drives the diversification gain / 共同波动,决定分散化收益" },
        { t: "diversification", z: "分散化", d: "imperfectly-correlated (ρ<1) assets give σP below the weighted-average σ / ρ<1 时组合波动低于加权平均" },
        { t: "systematic vs idiosyncratic", z: "系统性 vs 特质风险", d: "undiversifiable (priced) vs diversifiable (earns nothing) / 分不散(有补偿) vs 可分散(无补偿)" },
        { t: "efficient frontier", z: "有效前沿", d: "highest mean for each level of risk — the upper limb of the MV frontier / 给定风险下最高均值" },
        { t: "Sharpe ratio", z: "夏普比率", d: "(E[rP]−rf)/σP — extra mean per unit of total risk; slope of a capital allocation line / 每单位总风险的超额均值" },
        { t: "tangency portfolio T", z: "切点组合", d: "the max-Sharpe risky portfolio; in equilibrium T = the market M / 夏普最大的风险组合,均衡时等于市场" },
        { t: "two-fund separation", z: "两基金分离", d: "everyone holds rf + the same T; risk aversion sets only the mix / 人人持 rf + 同一个 T,风险厌恶只定比例" },
        { t: "beta β", z: "贝塔", d: "Cov(rᵢ,rM)/Var(rM)=ρᵢM·σᵢ/σM — the quantity of systematic risk / 系统风险的数量" },
        { t: "CAPM / SML", z: "资本资产定价模型 / 证券市场线", d: "E[rᵢ]−rf = βᵢ(E[rM]−rf); β is quantity, (E[rM]−rf) is the price of risk / β 是数量,市场溢价是价格" },
        { t: "alpha α", z: "阿尔法", d: "return beyond the CAPM benchmark; 0 in equilibrium; >0 = underpriced / 超出 CAPM 基准的收益,均衡为 0" }
      ],
      feynman: [
        { id: "f1", en: "Why does diversification reduce risk, and what is the limit as N→∞?", zh: "分散化为什么降低风险?N→∞ 的极限是多少?", points: ["Imperfect correlation (ρ<1) makes σP fall below the weighted average of the σ's", "Equal-weight variance = (1/N)σ² + ((N−1)/N)ρσ²", "The idiosyncratic part → 0; the systematic part → ρσ² survives", "If risk can be shed for free, the market won't pay you to bear it"] },
        { id: "f2", en: "State two-fund separation in one breath — and say why it is surprising.", zh: "一口气说清两基金分离——以及它为什么令人惊讶。", points: ["With a risk-free asset, everyone holds rf + the same tangency portfolio T", "Risk aversion sets only the mix (cautious: more rf; aggressive: levered T)", "Surprising: your job/age/tastes change how MUCH risk, not WHICH risky portfolio", "It is the intellectual foundation of index funds"] },
        { id: "f3", en: "Why does the CAPM price beta and not an asset's own variance?", zh: "CAPM 为什么给 beta 定价,而不是资产自身的方差?", points: ["Your portfolio is essentially the market M", "Adding a sliver ε of asset i raises risk by ≈ 2ε·Cov(rᵢ,rM)", "Idiosyncratic variance never appears at the margin", "Only covariance (beta) can command a premium"] },
        { id: "f4", en: "Walk through why the tangency portfolio T must equal the market M in equilibrium.", zh: "讲清楚为什么均衡时切点组合 T 必须等于市场 M。", points: ["Two-fund separation: every investor's risky holdings are the same T", "Markets must clear — every share is held by someone", "So the aggregate risky portfolio (value-weighted market M) must equal T", "Prices adjust (bid up → expected return down) until the market is tangency"] },
        { id: "f5", en: "Explain the difference between the CML and the SML.", zh: "讲清 CML 与 SML 的区别。", points: ["CML: x-axis is total risk σ; only EFFICIENT portfolios; slope = Sharpe ratio of M", "SML: x-axis is beta; EVERY asset and portfolio; slope = E[rM]−rf", "A single stock sits BELOW the CML (diversifiable risk) but ON the SML (only β priced)"] },
        { id: "f6", en: "What is alpha, and what does α ≠ 0 mean for an investor?", zh: "alpha 是什么?α ≠ 0 对投资者意味着什么?", points: ["α = E[rᵢ] − [rf + βᵢ(E[rM]−rf)] — return beyond the CAPM benchmark", "α>0: expected return too high for its beta ⇒ underpriced ⇒ buy", "α<0: overpriced ⇒ sell/short", "Under CAPM equilibrium every α = 0 — hunting alpha = betting the market is wrong"] }
      ],
      socratic: [
        { id: "s1", q_en: "The equity premium is ≈8.8%/yr. Is that premium paying for TOTAL volatility, or something narrower? What does the lecture end up claiming?", q_zh: "股权溢价约 8.8%/年。它补偿的是总波动,还是更窄的某种风险?讲义最终的说法是什么?" },
        { id: "s2", q_en: "Build a two-asset example where σP is strictly below BOTH assets' σ. What value of ρ makes the diversification gain vanish entirely?", q_zh: "构造一个两资产例子,使 σP 严格小于两只股票各自的 σ。ρ 取何值时分散化收益完全消失?" },
        { id: "s3", q_en: "A very volatile stock can have a SMALL beta. Write β in terms of ρᵢM, σᵢ, σM and explain how.", q_zh: "一只高波动的股票 beta 却可能很小。用 ρᵢM、σᵢ、σM 写出 β 并解释原因。" },
        { id: "s4", q_en: "Two-fund separation says everyone holds the same T. Which assumption makes 'everyone's T' identical, and which real-world frictions break it?", q_zh: "两基金分离说人人持同一个 T。是哪个假设让大家的 T 相同?现实中哪些摩擦会打破它?" },
        { id: "s5", q_en: "The β-sorted data are 'too flat' versus the SML. Give two logically distinct explanations one could offer. (Held for L5.)", q_zh: "按 β 排序的数据相对 SML「太平」。给出两种逻辑上不同的解释。(留到 L5。)" }
      ],
      watch: [
        { en: "The realised relationship between beta and average return is flatter than the SML predicts (slide 38, β-sorted portfolios). Note it now; the explanation is Lecture 5.", zh: "实证中 beta 与平均收益的关系比 SML 预测的更平(slide 38,按 β 排序的组合)。先记下,解释在 L5。" }
      ],
      exercises: {
        set: "Practice 题型 · L1 (write your own answers; graded class exercise is on Moodle)",
        note: "The real Class Exercise 1 is posted on Moodle — bring written answers to the Week-2 class; it is not graded, and solutions follow. Below are key problem TYPES drilled from the lecture (hints only, no full solutions) — redo the 5 worked examples by hand first.",
        assigned: ["P1", "P2", "P3", "P4", "P5", "P6", "P7"],
        items: [
          { id: "P1", hw: false, diff: "lo", q: "Risk of a return: a stock pays +40% / +10% / −20% with probabilities ¼, ½, ¼. Find μ and σ.", hint: "Mean first; then square the deviations FROM that mean (not the raw returns). σ = √Var. (≈ 10% and 21.2%.)" },
          { id: "P2", hw: false, diff: "mid", q: "Two-asset portfolio: given μ₁,σ₁,μ₂,σ₂,ρ and weights, find E[rP] and σP, then compare σP with the weighted average of the σ's.", hint: "Var = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂ (don't drop the cross term). The portfolio σ sits below the weighted-average σ whenever ρ<1 — that gap IS diversification." },
          { id: "P3", hw: false, diff: "mid", q: "Diversification limit: equal weights 1/N across N stocks, each variance σ², common pairwise correlation ρ. Find Var(rP) and its N→∞ limit.", hint: "Var(rP) = (1/N)σ² + ((N−1)/N)ρσ². The first term → 0 (idiosyncratic), the second → ρσ² (systematic). Only ρσ² survives." },
          { id: "P4", hw: false, diff: "mid", q: "Beta & the split of risk: given σᵢ, σM, ρᵢM, find βᵢ and the SYSTEMATIC share of variance.", hint: "β = ρᵢM·σᵢ/σM. Systematic variance = β²σM²; divide by total σᵢ². The systematic share equals ρ² = R². (Note: a volatile stock with low ρ has a SMALL β.)" },
          { id: "P5", hw: false, diff: "lo", q: "CAPM expected return: given rf, E[rM] and β, find the required expected return.", hint: "Straight into the SML: E[r] = rf + β(E[rM]−rf). (e.g. rf=3, E[rM]=12, β=1.5 → 16.5%.)" },
          { id: "P6", hw: false, diff: "mid", q: "Back out the market premium: a β=0.75 stock has expected EXCESS return 6%. Find E[rM]−rf, then the total expected return of a β=1.3 stock when rf=2%.", hint: "excess = β(E[rM]−rf); invert to get the bracket (8%), then re-apply: 2 + 1.3×8 = 12.4%." },
          { id: "P7", hw: false, diff: "mid", q: "Alpha & mispricing: given a stock's E[r], rf, β and E[rM], compute α and say whether to buy or sell.", hint: "α = E[r] − [rf + β(E[rM]−rf)]. α>0 ⇒ return too high for its beta ⇒ underpriced ⇒ buy; α<0 ⇒ sell/short. In equilibrium every α is competed to 0." }
        ]
      }
    },

    { n: 2, status: "locked", title: "Expected utility and portfolio choice", titleZh: "期望效用与组合选择",
      topics: ["Expected utility", "Risk aversion & certainty equivalent", "When mean–variance is justified", "Optimal portfolio choice"], tags: ["expected-utility", "risk-aversion", "mean-variance", "portfolio-choice"],
      lectureNote: "Lecture 2. Reading: BMA (14e) 8.1. Gives mean–variance preferences a foundation (why investors care about mean and variance).",
      exercises: { set: "Class Exercise 2 (Moodle)", note: "Builds on Lecture 2; bring written answers to class.", assigned: [], items: [] } },

    { n: 3, status: "locked", title: "The consumption CAPM", titleZh: "消费 CAPM",
      topics: ["Marginal utility & pricing", "The stochastic discount factor (SDF)", "Consumption CAPM"], tags: ["consumption-capm", "sdf", "marginal-utility", "stochastic-discount-factor"],
      lectureNote: "Lecture 3. Reading: BMA (14e) ch. 12 (partial). The SDF 1=E[M(1+rᵢ)] appears here — the spine where the two pillars will meet (again in L6). Quiz 1 opens (background handout + Weeks 1–2).",
      exercises: { set: "Class Exercise 3 (Moodle)", note: "Builds on Lecture 3; bring written answers to class.", assigned: [], items: [] } },

    { n: 4, status: "locked", title: "Valuation of stocks; market efficiency", titleZh: "股票估值;市场有效性",
      topics: ["Dividend discount model", "Gordon growth", "Present value of dividends", "Market efficiency (EMH)"], tags: ["stock-valuation", "ddm", "gordon-growth", "market-efficiency", "emh"],
      lectureNote: "Lecture 4. Reading: BMA (14e) ch. 4 and 12. Uses the CAPM discount rate from L1.",
      exercises: { set: "Class Exercise 4 (Moodle)", note: "Builds on Lecture 4; bring written answers to class.", assigned: [], items: [] } },

    { n: 5, status: "locked", title: "Market anomalies and alternative models", titleZh: "市场异象与替代模型",
      topics: ["The CAPM's empirical failure", "Size, value, momentum", "Multifactor models"], tags: ["anomalies", "multifactor", "size", "value", "momentum", "capm-tests"],
      lectureNote: "Lecture 5. Reading: BMA (14e) ch. 12. Confronts the CAPM with data (the 'too flat' SML from L1). Quiz 2 covers Weeks 3–4.",
      exercises: { set: "Class Exercise 5 (Moodle)", note: "Builds on Lecture 5; bring written answers to class.", assigned: [], items: [] } },

    { n: 6, status: "locked", title: "Absence of arbitrage: state prices and the SDF", titleZh: "无套利:状态价格与 SDF",
      topics: ["A two-state world", "State prices", "No-arbitrage", "The SDF & risk-neutral probabilities"], tags: ["no-arbitrage", "state-prices", "sdf", "risk-neutral"],
      lectureNote: "Lecture 6. Self-contained (lecture notes). The no-arbitrage pillar begins; the SDF reappears and goes to work.",
      exercises: { set: "Class Exercise 6 (Moodle)", note: "Builds on Lecture 6; bring written answers to class.", assigned: [], items: [] } },

    { n: 7, status: "locked", title: "Valuation of bonds", titleZh: "债券估值",
      topics: ["Discount & coupon bonds", "The term structure", "Spot rates"], tags: ["bond-valuation", "term-structure", "spot-rates", "yield-curve"],
      lectureNote: "Lecture 7. Reading: BMA (14e) ch. 3. Applies no-arbitrage pricing to fixed income. Quiz 3 covers Weeks 5–6.",
      exercises: { set: "Class Exercise 7 (Moodle)", note: "Builds on Lecture 7; bring written answers to class.", assigned: [], items: [] } },

    { n: 8, status: "locked", title: "Bond expected returns", titleZh: "债券预期收益",
      topics: ["Expectations hypothesis", "Term premia", "Bond risk"], tags: ["bond-returns", "expectations-hypothesis", "term-premium"],
      lectureNote: "Lecture 8. Self-contained (lecture notes).",
      exercises: { set: "Class Exercise 8 (Moodle)", note: "Builds on Lecture 8; bring written answers to class.", assigned: [], items: [] } },

    { n: 9, status: "locked", title: "Valuation of forwards and futures", titleZh: "远期与期货估值",
      topics: ["Forward price", "Cost of carry", "No-arbitrage pricing"], tags: ["forwards", "futures", "cost-of-carry", "no-arbitrage"],
      lectureNote: "Lecture 9. Reading: BMA (14e) ch. 26. Quiz 4 covers Weeks 7–8.",
      exercises: { set: "Class Exercise 9 (Moodle)", note: "Builds on Lecture 9; bring written answers to class.", assigned: [], items: [] } },

    { n: 10, status: "locked", title: "Valuation of options", titleZh: "期权估值",
      topics: ["Binomial model & replication", "Put–call parity", "Black–Scholes"], tags: ["options", "binomial", "put-call-parity", "black-scholes", "replication"],
      lectureNote: "Lecture 10. Reading: BMA (14e) ch. 20 and 21. Delivers on L6's promise. Quiz 5 (Week 11) covers Weeks 9–10.",
      exercises: { set: "Class Exercise 10 (Moodle)", note: "Builds on Lecture 10; bring written answers to class.", assigned: [], items: [] } }
  ],
  exams: [
    { label: "Two sample papers on the NEW syllabus + solutions", note: "Moodle, by Mon 5 Oct (Week 2) — the best guide to format & level" },
    { label: "Old past papers", note: "cover a different (pre-2026) syllabus — format differs; use with care" },
    { label: "Five online quizzes (Weeks 3,5,7,9,11)", note: "two chosen at random count 10% total; the rest are formative diagnostics" }
  ],
  prereq: [
    { label: "Background handout, Part 1 — present-value mechanics (PV/FV, NPV, perpetuities & annuities, compounding, real vs nominal)", z: "现值机制:PV/FV、NPV、永续/年金、复利、实际与名义" },
    { label: "Background handout, Part 2 — statistics (random variables, mean, variance, covariance, correlation, and the algebra of them)", z: "统计:随机变量、均值、方差、协方差、相关系数及其运算" },
    { label: "BMA (14e) ch. 2 supports Part 1; ch. 3 (real vs nominal) supports Section 6", z: "教材 ch.2 支持 Part 1;ch.3 支持实际/名义一节" },
    { label: "All assumed known from Lecture 1 and tested directly in Quiz 1", z: "从 L1 起假设已掌握,Quiz 1 直接考" }
  ]
};
