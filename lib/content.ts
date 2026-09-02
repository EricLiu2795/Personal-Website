export type Locale = "en" | "zh";

export type NavItem = { label: string; id: string };
export type SnapshotItem = { label: string; value: string; id: string };
export type ExperienceItem = {
  id: string;
  company: string;
  eyebrow: string;
  role: string;
  note?: string;
  bullets: string[];
  dates: string;
  location: string;
};
export type TagItem = string;
export type WorkProject = {
  kicker: string;
  title: string;
  description: string;
  tags: TagItem[];
  sideLabel: string;
  sideText: string;
};
export type ActionMetric = { value: string; label: string; detail: string };
export type SkillItem = { label: string; value: string };

export type PortfolioContent = {
  locale: Locale;
  name: string;
  nav: { items: NavItem[]; resume: string; sayHello: string; languageLabel: string; english: string; chinese: string };
  links: { resume: string; github: string; linkedin: string; email: string };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    degree: string;
    university: string;
    meta: string;
    resume: string;
    github: string;
    linkedin: string;
    email: string;
  };
  snapshotLabel: string;
  snapshot: SnapshotItem[];
  experience: { index: string; label: string; items: ExperienceItem[] };
  work: {
    index: string;
    label: string;
    action: {
      kicker: string;
      title: string;
      date: string;
      description: string;
      tags: string[];
      repo: string;
      boundaryLabel: string;
      boundaryText: string;
      steps: Array<{ number: string; title: string; detail: string }>;
      ownershipLabel: string;
      ownership: string;
      evidenceLabel: string;
      evidence: string;
      metrics: ActionMetric[];
    };
    launchstack: WorkProject;
    taint: WorkProject;
  };
  research: {
    index: string;
    label: string;
    title: string;
    role: string;
    dates: string;
    items: Array<{ label: string; text: string }>;
  };
  leadership: {
    index: string;
    label: string;
    items: Array<{ title: string; eyebrow: string; description: string; dates: string }>;
  };
  education: {
    index: string;
    label: string;
    university: string;
    degree: string;
    meta: string;
    courseworkLabel: string;
    coursework: string;
  };
  skills: { index: string; label: string; items: SkillItem[] };
  contact: { index: string; label: string; title: string; emailLabel: string; footer: string; footerMeta: string };
};

const sharedLinks = {
  resume: "/Junkun-Liu-Resume.pdf",
  github: "https://github.com/EricLiu2795",
  linkedin: "https://www.linkedin.com/in/junkun-liu-30a7b52a3",
  email: "mailto:jliu384@jh.edu",
};

export const englishContent: PortfolioContent = {
  locale: "en",
  name: "Junkun Liu",
  nav: {
    items: [
      { label: "Work", id: "work" },
      { label: "Experience", id: "experience" },
      { label: "Research", id: "research" },
      { label: "Leadership", id: "leadership" },
      { label: "About", id: "about" },
    ],
    resume: "Resume",
    sayHello: "Say hello",
    languageLabel: "Language",
    english: "EN",
    chinese: "中文",
  },
  links: sharedLinks,
  hero: {
    eyebrow: "Computer science × systems reliability",
    headline: "I build reliable AI agents and the systems around them.",
    description: "I'm Junkun Liu, an engineer and researcher building reliable AI agents, agent harnesses, orchestration, retrieval, and evaluation systems.",
    degree: "Computer Science + Applied Mathematics & Statistics",
    university: "Johns Hopkins University",
    meta: "Expected May 2028 · Baltimore, MD",
    resume: "Resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  snapshotLabel: "Professional snapshot",
  snapshot: [
    { label: "Currently", value: "Tech Lead · LaunchStack", id: "launchstack-experience" },
    { label: "Previously", value: "Algorithm Engineer Intern · StepFun", id: "stepfun-experience" },
    { label: "Research", value: "Dynamic Taint Analysis · Second-listed Author", id: "research" },
    { label: "Education", value: "Johns Hopkins · CS + Applied Mathematics & Statistics", id: "about" },
  ],
  experience: {
    index: "01 / Experience",
    label: "Professional experience",
    items: [
      {
        id: "launchstack-experience",
        company: "LaunchStack",
        eyebrow: "Founder Operating System",
        role: "Tech Lead",
        note: "Previously Product Engineering Intern, Spring 2026.",
        bullets: [
          "Lead the product engineering workstream, owning technical architecture, task decomposition, implementation sequencing, and code / PR review.",
          "Designed the Founder Weekly Review / RAG pipeline, aggregating documents, GitHub activity, customer feedback, and team context into source-grounded evidence snapshots.",
          "Built the document-change pipeline around versioned artifacts, historical chunks, deterministic alignment, structured change evidence, and preserved source IDs / provenance.",
        ],
        dates: "Jun 2026 — present",
        location: "Baltimore / Remote",
      },
      {
        id: "stepfun-experience",
        company: "StepFun",
        eyebrow: "Algorithm Engineer Intern",
        role: "Algorithm Engineer Intern",
        bullets: [
          "Built and evaluated LLM-based web agents for multi-step browser tasks, testing stability under tool coordination, navigation, and dynamic DOM changes.",
          "Integrated structured agent workflows and Azure OpenAI-compatible model access into training and evaluation pipelines.",
          "Containerized browser environments and diagnosed navigation loops, tool misuse, element ambiguity, and inconsistent state transitions.",
        ],
        dates: "Jun — Aug 2025",
        location: "Beijing, China",
      },
    ],
  },
  work: {
    index: "02 / Selected technical work",
    label: "Systems I designed and built",
    action: {
      kicker: "01 · Flagship / Independent AI Systems Project",
      title: "Personal Action Agent",
      date: "Jun 2026 — Present",
      description: "A reliability-first agent harness that converts bidirectional Gmail communication evidence into durable operational Actions.",
      tags: ["Gmail", "agent harness", "SQLite", "RAG", "evaluation"],
      repo: "View repository",
      boundaryLabel: "Reliability boundary",
      boundaryText: "The LLM interprets semantics, but deterministic code owns state.",
      steps: [
        { number: "01", title: "Normalize", detail: "provider-neutral email" },
        { number: "02", title: "Interpret", detail: "typed LLM outputs" },
        { number: "03", title: "Gate", detail: "policy + evidence" },
        { number: "04", title: "Persist", detail: "Action + provenance" },
      ],
      ownershipLabel: "Deterministic ownership",
      ownership: "Identity, durable Action lifecycle transitions, idempotency, evidence completeness, persistence authorization.",
      evidenceLabel: "Evidence layer",
      evidence: "Selective conversation hydration, prompt / semantic contracts, SQLite persistence, append-only ActionEvent provenance.",
      metrics: [
        { value: "275", label: "Regression tests", detail: "Systematic agent-evaluation harness with structured-output conformance checks." },
        { value: "Human-reviewed", label: "Gmail gold data", detail: "Evaluation grounded in reviewed communication evidence." },
        { value: "Prompt / semantic", label: "Error analysis", detail: "Used results to redesign ownership semantics and extend retrieval over persistent evidence." },
      ],
    },
    launchstack: {
      kicker: "02 · LaunchStack / Founder Operating System",
      title: "From changing artifacts to a grounded weekly review.",
      description: "As Tech Lead, I designed the evidence boundary for a Founder Weekly Review / RAG pipeline that turns documents, GitHub activity, customer feedback, and team context into structured signals for changes, blockers, customer signals, and next priorities.",
      tags: ["RAG", "provenance", "document change", "structured synthesis"],
      sideLabel: "Document-change pipeline",
      sideText: "versioned artifacts → historical chunks → deterministic alignment → structured change evidence → source IDs / provenance → synthesis",
    },
    taint: {
      kicker: "03 · Dynamic Taint Analysis Research",
      title: "Tracing untrusted input across the runtime boundary.",
      description: "Research across CPython, SpiderMonkey, and Chromium implementing source-to-sink propagation through calls, locals / parameters, property and index access, concatenation, and native string operations.",
      tags: ["CPython", "SpiderMonkey", "Chromium", "CVE validation"],
      sideLabel: "Validation",
      sideText: "Full-application CVE reproduction, tainted input to DOM / code-execution sinks, propagation DAGs, and source-to-sink coverage.",
    },
  },
  research: {
    index: "03 / Research",
    label: "Research with measurable limits",
    title: "Second-listed Author · Manuscript in Preparation",
    role: "Dynamic Taint Analysis Research",
    dates: "Jun 2026 — Jul 2026",
    items: [
      { label: "Propagation", text: "Function calls; locals and parameters; property / index access; string concatenation; native string operations." },
      { label: "Validation", text: "Reproducible full-application CVE validations tracing tainted inputs to DOM and code-execution sinks." },
      { label: "Analysis", text: "Taint-propagation DAGs, source-to-sink coverage, and propagation gaps." },
      { label: "Runtime limitations", text: "Measured the blind spots and runtime constraints that remain at application scale." },
    ],
  },
  leadership: {
    index: "04 / Teaching & Leadership",
    label: "Teaching & Leadership",
    items: [
      { title: "Johns Hopkins PILOT Program", eyebrow: "Head PILOT Leader · Honors Discrete Mathematics", description: "Promoted after one year as a PILOT Leader. Oversee the Honors Discrete Mathematics group and lead weekly problem-solving sessions for 10–15 students on proofs, logic, induction, set theory, and combinatorics.", dates: "Jul 2026 — present\nPreviously Jul 2025 — Jun 2026" },
      { title: "Mathematical Foundations of Computer Science", eyebrow: "Incoming Teaching Assistant", description: "Selected as a Teaching Assistant for the proof-based CS core course after earning an A+; appointment begins Fall 2026.", dates: "Fall 2026" },
    ],
  },
  education: {
    index: "05 / Education",
    label: "Education",
    university: "Johns Hopkins University",
    degree: "B.S. in Applied Mathematics & Statistics and Computer Science",
    meta: "GPA: 3.74 / 4.00 · Expected May 2028 · Baltimore, MD",
    courseworkLabel: "Relevant coursework",
    coursework: "Data Structures & Algorithms · Mathematical Foundations of Computer Science · Theory of Computation · Probability · Mathematical Statistics · Optimization · Linear Algebra · Full-Stack JavaScript",
  },
  skills: {
    index: "06 / Technical skills",
    label: "Technical skills",
    items: [
      { label: "Languages", value: "Python, C++, JavaScript, TypeScript, SQL" },
      { label: "AI / ML", value: "LLM Agents, Agent Harnesses, RAG, Prompt Engineering, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn" },
      { label: "Systems / Research", value: "SQLite, State Machines, Provider Abstractions, Dynamic Taint Analysis, Browser Automation, CVE Validation, Benchmarking, Docker" },
      { label: "Web / Data", value: "React, Next.js, Node.js, PostgreSQL, Git, AWS" },
    ],
  },
  contact: { index: "07 / Contact", label: "Open channel", title: "Have a hard systems problem?", emailLabel: "jliu384@jh.edu", footer: "Junkun Liu / Baltimore, MD", footerMeta: "Built for durable work · 2026" },
};

export const chineseContent: PortfolioContent = {
  locale: "zh",
  name: "刘峻锟",
  nav: {
    items: [
      { label: "工作", id: "work" },
      { label: "经历", id: "experience" },
      { label: "研究", id: "research" },
      { label: "教学与领导力", id: "leadership" },
      { label: "关于我", id: "about" },
    ],
    resume: "简历",
    sayHello: "联系我",
    languageLabel: "语言",
    english: "EN",
    chinese: "中文",
  },
  links: sharedLinks,
  hero: {
    eyebrow: "计算机科学 × 系统可靠性",
    headline: "我专注于构建可靠的 AI Agent，以及支撑它们运行的系统。",
    description: "我是刘峻锟，一名工程师与研究者，专注于可靠的 AI Agent、Agent Harness、编排、检索与评测系统。",
    degree: "计算机科学 + 应用数学与统计学",
    university: "约翰斯·霍普金斯大学",
    meta: "预计 2028 年 5 月毕业 · Baltimore, MD",
    resume: "简历",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "邮箱",
  },
  snapshotLabel: "职业概览",
  snapshot: [
    { label: "目前", value: "Tech Lead · LaunchStack", id: "launchstack-experience" },
    { label: "此前", value: "Algorithm Engineer Intern · StepFun", id: "stepfun-experience" },
    { label: "研究", value: "Dynamic Taint Analysis · 第二作者", id: "research" },
    { label: "教育", value: "JHU · 计算机科学与应用数学统计学", id: "about" },
  ],
  experience: {
    index: "01 / 经历",
    label: "专业经历",
    items: [
      {
        id: "launchstack-experience",
        company: "LaunchStack",
        eyebrow: "Founder Operating System",
        role: "Tech Lead",
        note: "此前任 Product Engineering Intern（2026 年春季）。",
        bullets: [
          "负责产品工程方向，主导技术架构、任务拆解、实现排期，以及代码与 PR Review。",
          "设计 Founder Weekly Review / RAG Pipeline，将文档、GitHub 活动、客户反馈与团队上下文汇总为有来源依据的证据快照。",
          "构建文档变更 Pipeline，围绕版本化产物、历史 Chunks、确定性对齐、结构化变更证据，以及保留 Source ID / Provenance 展开。",
        ],
        dates: "2026 年 6 月 — 至今",
        location: "Baltimore / Remote",
      },
      {
        id: "stepfun-experience",
        company: "StepFun",
        eyebrow: "Algorithm Engineer Intern",
        role: "Algorithm Engineer Intern",
        bullets: [
          "构建并评测面向多步浏览器任务的 LLM Web Agent，测试其在工具协同、导航与动态 DOM 变化下的稳定性。",
          "将结构化 Agent Workflow 与兼容 Azure OpenAI 的模型接入训练和评测 Pipeline。",
          "容器化浏览器环境，并定位导航循环、工具误用、元素歧义及状态转换不一致等问题。",
        ],
        dates: "2025 年 6 月 — 8 月",
        location: "Beijing, China",
      },
    ],
  },
  work: {
    index: "02 / 精选技术工作",
    label: "我设计并构建的系统",
    action: {
      kicker: "01 · 旗舰项目 / 独立 AI Systems Project",
      title: "Personal Action Agent",
      date: "2026 年 6 月 — 至今",
      description: "一个以可靠性为核心的 Agent Harness，将双向 Gmail 通信证据转化为可持久化的业务 Actions。",
      tags: ["Gmail", "Agent Harness", "SQLite", "RAG", "评测"],
      repo: "查看代码仓库",
      boundaryLabel: "可靠性边界",
      boundaryText: "LLM 负责理解语义，确定性代码负责管理状态。",
      steps: [
        { number: "01", title: "标准化", detail: "Provider-neutral Email" },
        { number: "02", title: "解释", detail: "Typed LLM Outputs" },
        { number: "03", title: "门控", detail: "Policy + Evidence" },
        { number: "04", title: "持久化", detail: "Action + Provenance" },
      ],
      ownershipLabel: "确定性代码负责",
      ownership: "Identity、Action 生命周期转换、幂等性、证据完整性，以及持久化授权。",
      evidenceLabel: "证据层",
      evidence: "Selective Conversation Hydration、Prompt / Semantic Contracts、SQLite 持久化，以及追加写入的 ActionEvent Provenance。",
      metrics: [
        { value: "275", label: "回归测试", detail: "包含 Structured Output Conformance Checks 的系统化 Agent Evaluation Harness。" },
        { value: "人工审阅", label: "Gmail Gold Data", detail: "评测基于人工审阅的真实通信证据。" },
        { value: "Prompt / Semantic", label: "错误分析", detail: "据此重构所有权语义，并扩展对持久化证据的检索。" },
      ],
    },
    launchstack: {
      kicker: "02 · LaunchStack / Founder Operating System",
      title: "从变化中的产物，到有依据的每周复盘。",
      description: "作为 Tech Lead，我设计了 Founder Weekly Review / RAG Pipeline 的证据边界，将文档、GitHub 活动、客户反馈与团队上下文转化为关于变更、阻塞、客户信号和下一步重点的结构化信息。",
      tags: ["RAG", "Provenance", "Document Change", "Structured Synthesis"],
      sideLabel: "文档变更 Pipeline",
      sideText: "版本化产物 → 历史 Chunks → 确定性对齐 → 结构化变更证据 → Source IDs / Provenance → Synthesis",
    },
    taint: {
      kicker: "03 · Dynamic Taint Analysis Research",
      title: "追踪不可信输入如何穿过运行时边界。",
      description: "研究覆盖 CPython、SpiderMonkey 与 Chromium，实现跨函数调用、局部变量 / 参数、属性与索引访问、字符串拼接及原生字符串操作的 Source-to-Sink 传播。",
      tags: ["CPython", "SpiderMonkey", "Chromium", "CVE Validation"],
      sideLabel: "验证",
      sideText: "完整应用级 CVE 复现，将污染输入追踪至 DOM / 代码执行 Sink，并分析传播 DAG 与 Source-to-Sink 覆盖率。",
    },
  },
  research: {
    index: "03 / 研究",
    label: "有明确边界的研究",
    title: "第二作者 · Manuscript in Preparation",
    role: "Dynamic Taint Analysis Research",
    dates: "2026 年 6 月 — 7 月",
    items: [
      { label: "传播", text: "函数调用；局部变量与参数；属性 / 索引访问；字符串拼接；原生字符串操作。" },
      { label: "验证", text: "可复现的完整应用级 CVE 验证，将污染输入追踪至 DOM 与代码执行 Sink。" },
      { label: "分析", text: "Taint-Propagation DAG、Source-to-Sink 覆盖率与传播缺口。" },
      { label: "运行时限制", text: "测量应用规模下仍然存在的盲点与运行时约束。" },
    ],
  },
  leadership: {
    index: "04 / 教学与领导力",
    label: "教学与领导力",
    items: [
      { title: "Johns Hopkins PILOT Program", eyebrow: "Head PILOT Leader · Honors Discrete Mathematics", description: "在担任 PILOT Leader 一年后晋升为 Head PILOT Leader。负责 Honors Discrete Mathematics 小组，并为 10–15 名学生每周带领证明、逻辑、归纳、集合论与组合数学问题讨论。", dates: "2026 年 7 月 — 至今\n此前：2025 年 7 月 — 2026 年 6 月" },
      { title: "Mathematical Foundations of Computer Science", eyebrow: "Incoming Teaching Assistant", description: "因在这门证明型 CS 核心课程中取得 A+，获选为 Teaching Assistant；任期自 2026 年秋季开始。", dates: "2026 年秋季" },
    ],
  },
  education: {
    index: "05 / 教育",
    label: "教育背景",
    university: "Johns Hopkins University",
    degree: "应用数学与统计学、计算机科学双学位 B.S.",
    meta: "GPA：3.74 / 4.00 · 预计 2028 年 5 月毕业 · Baltimore, MD",
    courseworkLabel: "相关课程",
    coursework: "数据结构与算法 · Mathematical Foundations of Computer Science · 计算理论 · 概率论 · 数理统计 · 优化 · 线性代数 · Full-Stack JavaScript",
  },
  skills: {
    index: "06 / 技术技能",
    label: "技术技能",
    items: [
      { label: "语言", value: "Python, C++, JavaScript, TypeScript, SQL" },
      { label: "AI / ML", value: "LLM Agents, Agent Harnesses, RAG, Prompt Engineering, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn" },
      { label: "系统 / 研究", value: "SQLite, State Machines, Provider Abstractions, Dynamic Taint Analysis, Browser Automation, CVE Validation, Benchmarking, Docker" },
      { label: "Web / Data", value: "React, Next.js, Node.js, PostgreSQL, Git, AWS" },
    ],
  },
  contact: { index: "07 / 联系", label: "开放联系", title: "正在解决棘手的系统问题？", emailLabel: "jliu384@jh.edu", footer: "刘峻锟 / Baltimore, MD", footerMeta: "为持久而可靠的工作而构建 · 2026" },
};
