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
  links?: Array<{ label: string; href: string }>;
};
export type ActionMetric = { value: string; label: string; detail: string };
export type SkillItem = { label: string; value: string };

export type PortfolioContent = {
  locale: Locale;
  name: string;
  nav: { items: NavItem[]; resume: string; sayHello: string; menu: string; languageLabel: string; english: string; chinese: string };
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
    aftershock: WorkProject;
  };
  research: {
    index: string;
    label: string;
    entries: Array<{
      id: string;
      title: string;
      role: string;
      context?: string;
      dates: string;
      items: Array<{ label: string; text: string }>;
    }>;
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
    menu: "Menu",
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
    { label: "Research", value: "Genesis Mission · Undergraduate Researcher", id: "research" },
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
          "Lead architecture and engineering delivery for the Founder Operating System, turning work into implementation plans and coordinating code / PR review across the team.",
          "Architected document-change and Founder Weekly Review pipelines that align artifact versions and synthesize source-grounded evidence from documents, GitHub activity, customer feedback, and team context.",
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
          "Integrated structured agent workflows and Azure OpenAI-compatible models into evaluation pipelines; diagnosed navigation loops, tool misuse, ambiguous elements, and inconsistent state transitions.",
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
      links: [{ label: "View on GitHub", href: "https://github.com/Deodat-Lawson/LaunchStack" }],
    },
    aftershock: {
      kicker: "03 · Aftershock / Project Lead · HopHacks 2026",
      title: "A shared operational picture for earthquake response.",
      description: "Conceived the project and led a four-person team to a working demo in 36 hours. Designed an AI-assisted system that fuses conflicting multimodal reports into shared operational state, coordinates search and rescue actions, and dynamically reroutes teams over real road networks.",
      tags: ["AI systems", "multimodal reports", "coordination", "routing"],
      sideLabel: "1st place · September 2026",
      sideText: "Bloomberg Most Philanthropic Hack track at HopHacks 2026 · 27 teams. Four people, 36 hours, a working demo.",
      links: [{ label: "View project on Devpost", href: "https://devpost.com/software/aftershock-wd7a4s" }],
    },
  },
  research: {
    index: "03 / Research",
    label: "Verification & software reliability",
    entries: [
      {
        id: "genesis-mission",
        title: "Genesis Mission",
        role: "Undergraduate Researcher · Prof. Ziyang Li",
        context: "DOE-funded research on verifiable computational physics code.",
        dates: "Sep 2026 — present",
        items: [
          { label: "Research direction", text: "Combine AI-based code generation with formal reasoning to improve the reliability of scientific software." },
          { label: "Current contribution", text: "Curate and analyze project datasets and study Lean to support formal specification and validation workflows." },
        ],
      },
      {
        id: "taint-analysis",
        title: "Dynamic Taint Analysis Research",
        role: "Second-listed Author · Manuscript in Preparation",
        dates: "Jun 2026 — Jul 2026",
        items: [
          { label: "Propagation", text: "Across CPython, SpiderMonkey, and Chromium: calls, locals / parameters, property / index access, concatenation, and native string operations." },
          { label: "Validation", text: "Reproducible full-application CVE validations tracing tainted inputs to DOM and code-execution sinks." },
          { label: "Analysis", text: "Taint-propagation DAGs, source-to-sink coverage, and propagation gaps." },
          { label: "Runtime limitations", text: "Measured the blind spots and runtime constraints that remain at application scale." },
        ],
      },
    ],
  },
  leadership: {
    index: "04 / Teaching & Leadership",
    label: "Teaching & Leadership",
    items: [
      { title: "Johns Hopkins PILOT Program", eyebrow: "Head PILOT Leader · Honors Discrete Mathematics", description: "Promoted after one year as a PILOT Leader. Oversee the Honors Discrete Mathematics group and lead weekly problem-solving sessions for 10–15 students on proofs, logic, induction, set theory, and combinatorics.", dates: "Jul 2026 — present\nPreviously Jul 2025 — Jun 2026" },
      { title: "Mathematical Foundations of Computer Science", eyebrow: "Teaching Assistant · Johns Hopkins University", description: "Selected as a TA after earning an A+ in the course; support instruction in proofs, discrete structures, and foundational CS reasoning.", dates: "Fall 2026 — present" },
    ],
  },
  education: {
    index: "05 / Education",
    label: "Education",
    university: "Johns Hopkins University",
    degree: "B.S. in Applied Mathematics & Statistics and Computer Science",
    meta: "GPA: 3.74 / 4.00 · Expected May 2028 · Baltimore, MD",
    courseworkLabel: "Relevant coursework",
    coursework: "Machine Learning & Deep Learning · NLP: Self-Supervised Models · Software System Design · Computer System Fundamentals · Data Structures & Algorithms · Probability · Optimization",
  },
  skills: {
    index: "06 / Technical skills",
    label: "Technical skills",
    items: [
      { label: "Languages", value: "Python, C++, JavaScript, TypeScript, SQL" },
      { label: "AI / ML", value: "LLM Agents, RAG, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn" },
      { label: "Systems / Research", value: "SQLite, State Machines, Dynamic Taint Analysis, Browser Automation, CVE Validation, Docker" },
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
      { label: "项目", id: "work" },
      { label: "经历", id: "experience" },
      { label: "研究", id: "research" },
      { label: "教学与领导力", id: "leadership" },
      { label: "关于我", id: "about" },
    ],
    resume: "简历",
    sayHello: "联系我",
    menu: "目录",
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
    { label: "研究", value: "Genesis Mission · 本科研究员", id: "research" },
    { label: "教育", value: "JHU · 计算机科学 + 应用数学与统计学", id: "about" },
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
          "负责 Founder Operating System 的架构与工程交付，将需求拆解为实施计划，并协调团队代码与 PR 审查。",
          "设计文档变更与 Founder Weekly Review 流水线，对齐产物版本，并将文档、GitHub 活动、客户反馈和团队上下文综合为可追溯来源的证据。",
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
          "将结构化 Agent 工作流与兼容 Azure OpenAI 的模型接入评测流水线，定位导航循环、工具误用、元素歧义和状态转换不一致等故障。",
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
      kicker: "01 · 旗舰项目 / 独立 AI 系统项目",
      title: "Personal Action Agent",
      date: "2026 年 6 月 — 至今",
      description: "一个以可靠性为核心的 Agent Harness，将收发 Gmail 邮件中的通信证据转化为可持久化的行动记录（Actions）。",
      tags: ["Gmail", "Agent Harness", "SQLite", "RAG", "评测"],
      repo: "查看代码仓库",
      boundaryLabel: "可靠性边界",
      boundaryText: "LLM 负责理解语义，确定性代码负责管理状态。",
      steps: [
        { number: "01", title: "标准化", detail: "与邮件服务商无关的格式" },
        { number: "02", title: "解释", detail: "有类型约束的 LLM 输出" },
        { number: "03", title: "校验", detail: "策略规则与证据完整性" },
        { number: "04", title: "持久化", detail: "行动记录与来源追踪" },
      ],
      ownershipLabel: "确定性代码负责",
      ownership: "记录身份、Action 生命周期转换、幂等性、证据完整性与持久化授权。",
      evidenceLabel: "证据层",
      evidence: "按需补全邮件会话、提示词与语义契约、SQLite 持久化，以及只追加写入的 ActionEvent 来源记录。",
      metrics: [
        { value: "275", label: "回归测试", detail: "系统化 Agent 评测框架，检查结构化输出是否符合约定。" },
        { value: "人工审阅", label: "Gmail 标注数据", detail: "以人工审阅的真实通信证据作为评测依据。" },
        { value: "提示词 / 语义", label: "错误分析", detail: "据此重构所有权语义，并扩展对持久化证据的检索。" },
      ],
    },
    launchstack: {
      kicker: "02 · LaunchStack / Founder Operating System",
      title: "从变化中的产物，到有依据的每周复盘。",
      description: "作为 Tech Lead，我设计了 Founder Weekly Review / RAG 流水线的证据边界，将文档、GitHub 活动、客户反馈与团队上下文转化为关于变更、阻塞、客户信号和下一步重点的结构化信息。",
      tags: ["RAG", "来源追踪", "文档变更", "结构化综合"],
      sideLabel: "文档变更流水线",
      sideText: "版本化产物 → 历史文本块 → 确定性对齐 → 结构化变更证据 → 来源 ID / 溯源信息 → 综合生成",
      links: [{ label: "在 GitHub 查看代码", href: "https://github.com/Deodat-Lawson/LaunchStack" }],
    },
    aftershock: {
      kicker: "03 · Aftershock / 项目负责人 · HopHacks 2026",
      title: "为地震救援建立共享的行动态势。",
      description: "提出项目构想，带领四人团队在 36 小时内完成可运行的演示。设计 AI 辅助地震响应系统，将相互矛盾的多模态报告融合为共享行动状态，协调搜索与救援，并基于真实道路网络动态调整团队路线。",
      tags: ["AI 系统", "多模态报告", "行动协调", "路线规划"],
      sideLabel: "赛道第一名 · 2026 年 9 月",
      sideText: "HopHacks 2026 的 Bloomberg Most Philanthropic Hack 赛道，27 支参赛队伍。四人团队、36 小时、可运行的演示。",
      links: [{ label: "在 Devpost 查看项目", href: "https://devpost.com/software/aftershock-wd7a4s" }],
    },
  },
  research: {
    index: "03 / 研究",
    label: "验证与软件可靠性",
    entries: [
      {
        id: "genesis-mission",
        title: "Genesis Mission",
        role: "本科研究员 · Prof. Ziyang Li",
        context: "DOE 资助项目：可验证的计算物理代码。",
        dates: "2026 年 9 月 — 至今",
        items: [
          { label: "研究方向", text: "结合 AI 代码生成与形式化推理，提高科学软件的可靠性。" },
          { label: "当前工作", text: "整理与分析项目数据集，并学习 Lean，以支持形式化规格描述与验证流程。" },
        ],
      },
      {
        id: "taint-analysis",
        title: "Dynamic Taint Analysis Research",
        role: "第二作者 · 论文撰写中",
        dates: "2026 年 6 月 — 7 月",
        items: [
          { label: "传播", text: "在 CPython、SpiderMonkey 与 Chromium 中，实现跨函数调用、局部变量 / 参数、属性 / 索引访问、拼接和原生字符串操作的污点传播。" },
          { label: "验证", text: "可复现的完整应用级 CVE 验证，将污染输入追踪至 DOM 和代码执行等敏感操作。" },
          { label: "分析", text: "分析污点传播 DAG、从输入源到敏感操作的覆盖率，以及传播缺口。" },
          { label: "运行时限制", text: "测量应用规模下仍然存在的盲点与运行时约束。" },
        ],
      },
    ],
  },
  leadership: {
    index: "04 / 教学与领导力",
    label: "教学与领导力",
    items: [
      { title: "Johns Hopkins PILOT Program", eyebrow: "Head PILOT Leader · Honors Discrete Mathematics", description: "在担任 PILOT Leader 一年后晋升为 Head PILOT Leader。负责 Honors Discrete Mathematics 小组，并为 10–15 名学生每周带领证明、逻辑、归纳、集合论与组合数学问题讨论。", dates: "2026 年 7 月 — 至今\n此前：2025 年 7 月 — 2026 年 6 月" },
      { title: "Mathematical Foundations of Computer Science", eyebrow: "Teaching Assistant · Johns Hopkins University", description: "在课程中取得 A+ 后获选为助教，协助证明、离散结构与计算机科学基础推理的教学。", dates: "2026 年秋季 — 至今" },
    ],
  },
  education: {
    index: "05 / 教育",
    label: "教育背景",
    university: "Johns Hopkins University",
    degree: "应用数学与统计学、计算机科学 · B.S.",
    meta: "GPA：3.74 / 4.00 · 预计 2028 年 5 月毕业 · Baltimore, MD",
    courseworkLabel: "相关课程",
    coursework: "机器学习与深度学习 · 自然语言处理：自监督模型 · 软件系统设计 · 计算机系统基础 · 数据结构与算法 · 概率论 · 优化",
  },
  skills: {
    index: "06 / 技术技能",
    label: "技术技能",
    items: [
      { label: "语言", value: "Python, C++, JavaScript, TypeScript, SQL" },
      { label: "AI / ML", value: "LLM Agents, RAG, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn" },
      { label: "系统 / 研究", value: "SQLite, State Machines, Dynamic Taint Analysis, Browser Automation, CVE Validation, Docker" },
      { label: "Web / Data", value: "React, Next.js, Node.js, PostgreSQL, Git, AWS" },
    ],
  },
  contact: { index: "07 / 联系", label: "开放联系", title: "正在解决棘手的系统问题？", emailLabel: "jliu384@jh.edu", footer: "刘峻锟 / Baltimore, MD", footerMeta: "为持久而可靠的工作而构建 · 2026" },
};
