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
  name: string;
  kicker: string;
  title: string;
  description: string;
  tags: TagItem[];
  sideLabel: string;
  sideText: string;
  links: [{ label: string; href: string }];
  highlights?: Array<{
    eyebrow: string;
    label: string;
    text: string;
    detail: string;
  }>;
};
export type ProjectArchitecture = {
  description: string;
  inputs: string[];
  weekly: { title: string; status: string; steps: string[] };
  vantage: { title: string; status: string; steps: string[] };
  maturity: string;
};
export type ActionMetric = { value: string; label: string; detail: string };
export type SkillItem = { label: string; value: string };

export type PortfolioContent = {
  locale: Locale;
  name: string;
  nav: {
    items: NavItem[];
    resume: string;
    sayHello: string;
    menu: string;
    languageLabel: string;
    english: string;
    chinese: string;
  };
  links: { resume: string; github: string; linkedin: string; email: string };
  hero: {
    eyebrow: string;
    greeting: string;
    exploreWork: string;
    headline: string;
    description: string;
    degree: string;
    university: string;
    meta: string;
    resume: string;
    github: string;
    linkedin: string;
    email: string;
    trust: {
      label: string;
      caption: string;
      trails: Array<{ project: string; steps: [string, string, string] }>;
    };
  };
  snapshotLabel: string;
  snapshot: SnapshotItem[];
  experience: { index: string; label: string; items: ExperienceItem[] };
  work: {
    index: string;
    label: string;
    title: string;
    navigationLabel: string;
    technicalDesignLabel: string;
    technicalDesignDescription: string;
    decisions: {
      label: string;
      whyLabel: string;
      limitLabel: string;
      items: Array<{ choice: string; why: string; limit: string }>;
    };
    moreProjectsLabel: string;
    spotlight: {
      index: string;
      title: string;
      label: string;
      teamValue: string;
      teamLabel: string;
      durationValue: string;
      durationLabel: string;
    };
    opensInNewTab: string;
    demoImageAlt: string;
    demoImageCaption: string;
    architecture: ProjectArchitecture;
    action: {
      kicker: string;
      title: string;
      date: string;
      description: string;
      tags: string[];
      repo: string;
      detailsLabel: string;
      sideLabel: string;
      sideText: string;
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
      links: [{ label: string; href: string }];
      dates: string;
      items: Array<{ label: string; text: string }>;
    }>;
  };
  leadership: {
    index: string;
    label: string;
    items: Array<{
      title: string;
      eyebrow: string;
      description: string;
      dates: string;
    }>;
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
  contact: {
    index: string;
    label: string;
    title: string;
    emailLabel: string;
    footer: string;
    footerMeta: string;
  };
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
      { label: "Research", id: "research" },
      { label: "Experience", id: "experience" },
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
    eyebrow: "Software Systems × AI Reliability × Security",
    greeting: "Hi, I'm Junkun.",
    exploreWork: "Explore My Work",
    headline: "I work on whether software and AI can be trusted.",
    description:
      "CS and Applied Math student at Johns Hopkins. I investigated why browser agents fail at StepFun, traced untrusted input to code-execution sinks for an ICSE paper, and now build evidence pipelines at LaunchStack and benchmarks for AI-written scientific code.",
    degree: "Computer Science + Applied Mathematics & Statistics",
    university: "Johns Hopkins University",
    meta: "Expected May 2028 · Baltimore, MD",
    resume: "View Resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    trust: {
      label: "How I check the work",
      caption: "Different systems, same question: what can you actually trust?",
      trails: [
        {
          project: "Mystra",
          steps: ["Untrusted input", "Taint propagation", "Code-execution sink"],
        },
        {
          project: "Founder Weekly Review",
          steps: ["Document change", "Frozen evidence", "Cited claim"],
        },
        {
          project: "Genesis Mission",
          steps: ["Agent-written code", "Reference check", "Pass or fail"],
        },
      ],
    },
  },
  snapshotLabel: "Professional snapshot",
  snapshot: [
    {
      label: "Currently",
      value: "Tech Lead · LaunchStack",
      id: "launchstack-experience",
    },
    {
      label: "Publication",
      value: "Mystra · ICSE 2027 Accepted",
      id: "taint-analysis",
    },
    {
      label: "Research",
      value: "Genesis Mission · Undergraduate Researcher",
      id: "research",
    },
    {
      label: "Recognition",
      value: "Aftershock · 1st of 27, Bloomberg track",
      id: "aftershock",
    },
  ],
  experience: {
    index: "04 / Experience",
    label: "Professional experience",
    items: [
      {
        id: "launchstack-experience",
        company: "LaunchStack",
        eyebrow: "Founder Operating System",
        role: "Tech Lead",
        note: "Previously Product Engineering Intern, Spring 2026.",
        bullets: [
          "Lead a three-person team on the Founder Operating System, owning architecture, contracts, code review, and integration.",
          "Built Founder Weekly Review and designed Vantage's role-aware decision-support pipeline. The materiality layer and Vantage integration PRs are still open.",
          "Earlier shipped batch document upload, Vercel Blob storage, and provider-aware LLM routing for OpenAI and Ollama.",
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
          "Evaluated Browser-Use agents on multi-step WebGames tasks and worked on integrating SkillWeaver skills.",
          "Used trace analysis to diagnose navigation loops, ambiguous elements, tool misuse, and changing-DOM failures.",
        ],
        dates: "Jun — Aug 2025",
        location: "Beijing, China",
      },
    ],
  },
  work: {
    index: "01 / Engineering",
    label: "Systems design · Engineering leadership",
    title: "Featured Work",
    navigationLabel: "Selected project shortcuts",
    technicalDesignLabel: "Technical design & trade-offs",
    technicalDesignDescription:
      "Founder Weekly Review's core pipeline is merged, and its materiality layer is pending merge. Vantage runs on a tested integration branch, with authenticated end-to-end validation still in progress.",
    decisions: {
      label: "Decisions I would defend, and where they break",
      whyLabel: "Why",
      limitLabel: "Where it breaks",
      items: [
        {
          choice: "Version-aware factual diffs over raw change flags",
          why: "Each reported change traces back to before-and-after text. “Q3” → “Q4” counts as a deadline change; “third quarter” → “Q3” does not.",
          limit:
            "Semantic changes can slip past deterministic matching, so ambiguous changes go to a bounded LLM analyzer.",
        },
        {
          choice: "Immutable snapshots and an outbox over synchronous generation",
          why: "Retries stay safe, and every report keeps its provenance.",
          limit: "It adds overhead a simple synchronous workflow does not need.",
        },
        {
          choice: "Required role context before optional RAG",
          why: "Evidence a role must see cannot be crowded out by search results.",
          limit:
            "Required sources can go stale or take up too much of the context budget.",
        },
      ],
    },
    moreProjectsLabel: "More Projects",
    spotlight: {
      index: "03 / Hackathon",
      title: "Hackathon Spotlight",
      label: "An award-winning earthquake-response prototype.",
      teamValue: "4",
      teamLabel: "Team members · led by me",
      durationValue: "36h",
      durationLabel: "Working prototype",
    },
    opensInNewTab: "opens in a new tab",
    demoImageAlt:
      "Aftershock prototype demo: Caraballeda rescue map, incoming reports, drone progress and rescue dispatch status. Cropped from the supplied video screenshot.",
    demoImageCaption: "Prototype demo · Caraballeda rescue operations",
    architecture: {
      description:
        "Founder Weekly Review turns document versions, customer feedback and founder context into cited weekly reports. Vantage adds role and company context, evidence retrieval, human review and tracked commitments.",
      inputs: ["Document versions", "Customer feedback", "Founder context"],
      weekly: {
        title: "Founder Weekly Review",
        status: "Core pipeline merged",
        steps: [
          "Evidence collection",
          "Immutable snapshot",
          "Generation & citation checks",
        ],
      },
      vantage: {
        title: "Vantage",
        status: "Integration branch & demo",
        steps: [
          "Role & company context",
          "Evidence retrieval",
          "Human review & commitments",
        ],
      },
      maturity:
        "Vantage: tested modules and a portable demo; authenticated end-to-end validation in progress",
    },
    action: {
      kicker: "Independent AI Systems Project · Jun 2026 — Present",
      title: "Personal Action Agent",
      date: "Jun 2026 — Present",
      description:
        "A reliability-first agent harness that converts bidirectional Gmail communication evidence into durable operational Actions.",
      tags: ["Gmail", "agent harness", "SQLite", "RAG", "evaluation"],
      repo: "View repository",
      detailsLabel: "Architecture & evaluation details",
      sideLabel: "Reliability & evaluation",
      sideText:
        "275 regression tests and human-reviewed Gmail evaluation. Deterministic code owns identity, lifecycle transitions, idempotency, persistence authorization, and evidence completeness.",
      boundaryLabel: "Reliability boundary",
      boundaryText:
        "The LLM interprets semantics, but deterministic code owns state.",
      steps: [
        { number: "01", title: "Normalize", detail: "provider-neutral email" },
        { number: "02", title: "Interpret", detail: "typed LLM outputs" },
        { number: "03", title: "Gate", detail: "policy + evidence" },
        { number: "04", title: "Persist", detail: "Action + provenance" },
      ],
      ownershipLabel: "Deterministic ownership",
      ownership:
        "Identity, durable Action lifecycle transitions, idempotency, evidence completeness, persistence authorization.",
      evidenceLabel: "Evidence layer",
      evidence:
        "Selective conversation hydration, prompt / semantic contracts, SQLite persistence, append-only ActionEvent provenance.",
      metrics: [
        {
          value: "275",
          label: "Regression tests",
          detail:
            "Systematic agent-evaluation harness with structured-output conformance checks.",
        },
        {
          value: "Human-reviewed",
          label: "Gmail gold data",
          detail: "Evaluation grounded in reviewed communication evidence.",
        },
        {
          value: "Prompt / semantic",
          label: "Error analysis",
          detail:
            "Used results to redesign ownership semantics and extend retrieval over persistent evidence.",
        },
      ],
    },
    launchstack: {
      name: "LaunchStack",
      kicker: "Tech Lead · Founder Operating System",
      title: "From company documents to decisions a founder can check.",
      description:
        "I lead a three-person team on the Founder Operating System, owning architecture, contracts, code review, and integration. LaunchStack is open source, with 890+ GitHub stars.",
      highlights: [
        {
          eyebrow: "Built · core pipeline merged",
          label: "Founder Weekly Review",
          text: "Collects evidence from document versions, customer feedback, and founder input, freezes it into an immutable snapshot, generates the report asynchronously, and validates citations against that snapshot.",
          detail: "Materiality layer: 70-change test fixture reduced to 22 prompt items; pending merge",
        },
        {
          eyebrow: "Designed · integration branch",
          label: "Vantage",
          text: "A role-aware decision-support pipeline from company context and evidence retrieval through human review to tracked commitments. I designed it and coordinated the frontend and retrieval work.",
          detail: "Tested integration branch · Portable demo",
        },
      ],
      tags: ["Architecture", "PostgreSQL", "Inngest", "Idempotency", "Code review"],
      sideLabel: "Design & implementation",
      sideText:
        "Vantage's integration PRs are open, and authenticated end-to-end validation is in progress.",
      links: [
        {
          label: "View on GitHub",
          href: "https://github.com/Deodat-Lawson/LaunchStack",
        },
      ],
    },
    aftershock: {
      name: "Aftershock",
      kicker: "Project Lead · HopHacks 2026",
      title: "A shared operational picture for earthquake response.",
      description:
        "I led a four-person team to build a working earthquake-response demo in 36 hours. It fuses conflicting reports into shared operational state and reroutes rescue teams over real road networks, with human approval for mission changes.",
      tags: ["AI systems", "multimodal reports", "coordination", "routing"],
      sideLabel: "1st place · Bloomberg track",
      sideText:
        "1st of 27 teams in the Bloomberg Most Philanthropic Hack track at HopHacks 2026.",
      links: [
        {
          label: "View Project & Demo",
          href: "https://devpost.com/software/aftershock-wd7a4s",
        },
      ],
    },
  },
  research: {
    index: "02 / Research",
    label: "Security research · Benchmarks for AI-written code",
    entries: [
      {
        id: "taint-analysis",
        title: "Mystra",
        role: "ICSE 2027 · Accepted Paper · Second Author",
        context:
          "Mystra: Declarative Dynamic Taint Analysis via Shadow Virtual Machine",
        dates: "Jun — Jul 2026",
        links: [
          { label: "Read the paper", href: "https://arxiv.org/abs/2607.12308" },
        ],
        items: [
          {
            label: "Research",
            text: "Declarative dynamic taint analysis for tracking how untrusted data flows through software.",
          },
          {
            label: "My contribution",
            text: "Reproduced 4+ of the paper's 19 real-world vulnerabilities in full applications, tracing tainted input to DOM and code-execution sinks. Helped port and evaluate the shadow-VM engine across CPython, SpiderMonkey, and Chromium, including propagation and source-to-sink coverage limitations.",
          },
        ],
      },
      {
        id: "genesis-mission",
        title: "Genesis Mission",
        role: "Undergraduate Researcher · Prof. Ziyang Li",
        context:
          "DOE-backed research on benchmarks for AI-generated scientific code.",
        dates: "Sep 2026 — present",
        links: [
          {
            label: "Read the project announcement",
            href: "https://www.cs.jhu.edu/news/hopkins-led-team-selected-for-inaugural-department-of-energy-genesis-mission-award/",
          },
        ],
        items: [
          {
            label: "Benchmark",
            text: "Frozen code-synthesis tasks built from research software, measuring whether coding agents produce compilable, numerically correct, contract-compliant code.",
          },
          {
            label: "My work",
            text: "I designed the research-software-to-benchmark pipeline and own the frozen-benchmark stage: scientific admission gates, independent validation, and remote CUDA GPU evaluation against trusted numerical references.",
          },
        ],
      },
    ],
  },
  leadership: {
    index: "04 / Teaching & Leadership",
    label: "Teaching & Leadership",
    items: [
      {
        title: "Johns Hopkins PILOT Program",
        eyebrow: "Head PILOT Leader · Honors Discrete Mathematics",
        description:
          "Promoted after one year as a PILOT Leader. Oversee the Honors Discrete Mathematics group and lead weekly problem-solving sessions for 10–15 students on proofs, logic, induction, set theory, and combinatorics.",
        dates: "Jul 2026 — present\nPreviously Jul 2025 — Jun 2026",
      },
      {
        title: "Mathematical Foundations of Computer Science",
        eyebrow: "Teaching Assistant · Johns Hopkins University",
        description:
          "Selected as a TA after earning an A+ in the course; support instruction in proofs, discrete structures, and foundational CS reasoning.",
        dates: "Fall 2026 — present",
      },
    ],
  },
  education: {
    index: "05 / Education",
    label: "Education",
    university: "Johns Hopkins University",
    degree: "B.S. in Applied Mathematics & Statistics and Computer Science",
    meta: "Expected May 2028 · Baltimore, MD",
    courseworkLabel: "Relevant coursework",
    coursework:
      "Machine Learning & Deep Learning · NLP: Self-Supervised Models · Software System Design · Computer System Fundamentals · Data Structures & Algorithms · Probability · Optimization",
  },
  skills: {
    index: "05 / Technical skills",
    label: "Technical skills",
    items: [
      { label: "Languages", value: "Python, C++, JavaScript, TypeScript, SQL" },
      {
        label: "AI / ML",
        value:
          "LLM Agents, RAG, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn",
      },
      {
        label: "Systems / Research",
        value:
          "Linux / WSL, CUDA, Docker, AWS, Inngest, Dynamic Taint Analysis, CVE Validation",
      },
      {
        label: "Web / Data",
        value: "React, Next.js, Node.js, PostgreSQL / pgvector, SQLite, Git",
      },
    ],
  },
  contact: {
    index: "06 / Contact",
    label: "Open channel",
    title: "Let's build something useful.",
    emailLabel: "jliu384@jh.edu",
    footer: "Junkun Liu / Baltimore, MD",
    footerMeta: "Built for durable work · 2026",
  },
};

export const chineseContent: PortfolioContent = {
  locale: "zh",
  name: "刘峻锟",
  nav: {
    items: [
      { label: "项目", id: "work" },
      { label: "研究", id: "research" },
      { label: "经历", id: "experience" },
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
    eyebrow: "软件系统 × AI 可靠性 × 安全",
    greeting: "你好，我是峻锟。",
    exploreWork: "探索我的项目",
    headline: "我关心软件和 AI 的结果到底能不能信。",
    description:
      "约翰斯·霍普金斯大学计算机与应用数学本科生。我在 StepFun 排查过浏览器 Agent 为什么失败，为一篇 ICSE 论文追踪过不可信输入如何到达代码执行点，现在在 LaunchStack 做证据流水线，也在为 AI 写的科学代码做 benchmark。",
    degree: "计算机科学 + 应用数学与统计学",
    university: "约翰斯·霍普金斯大学",
    meta: "预计 2028 年 5 月毕业 · Baltimore, MD",
    resume: "查看简历",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "邮箱",
    trust: {
      label: "我怎样检查结果",
      caption: "系统不同，问题相同：哪些结果真的可信？",
      trails: [
        {
          project: "Mystra",
          steps: ["不可信输入", "污点传播", "代码执行点"],
        },
        {
          project: "Founder Weekly Review",
          steps: ["文档变化", "冻结证据", "带引用的结论"],
        },
        {
          project: "Genesis Mission",
          steps: ["Agent 写的代码", "参考结果校验", "通过或失败"],
        },
      ],
    },
  },
  snapshotLabel: "职业概览",
  snapshot: [
    {
      label: "目前",
      value: "Tech Lead · LaunchStack",
      id: "launchstack-experience",
    },
    { label: "论文", value: "Mystra · ICSE 2027 已接收", id: "taint-analysis" },
    { label: "研究", value: "Genesis Mission · 本科研究员", id: "research" },
    {
      label: "获奖",
      value: "Aftershock · Bloomberg 赛道第一（共 27 队）",
      id: "aftershock",
    },
  ],
  experience: {
    index: "04 / 经历",
    label: "专业经历",
    items: [
      {
        id: "launchstack-experience",
        company: "LaunchStack",
        eyebrow: "Founder Operating System",
        role: "Tech Lead",
        note: "此前任 Product Engineering Intern（2026 年春季）。",
        bullets: [
          "带领三人团队负责 Founder Operating System，主导架构、接口契约、代码审查与集成。",
          "构建 Founder Weekly Review，并设计 Vantage 的角色感知决策支持流水线。Materiality 层和 Vantage 集成 PR 仍未合并。",
          "早期交付了批量文档上传、Vercel Blob 存储，以及面向 OpenAI 和 Ollama 的 LLM 路由。",
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
          "在多步 WebGames 任务上评测 Browser-Use Agent，并参与集成 SkillWeaver skills。",
          "通过 trace 分析定位导航循环、元素歧义、工具误用和 DOM 变化引起的失败。",
        ],
        dates: "2025 年 6 月 — 8 月",
        location: "Beijing, China",
      },
    ],
  },
  work: {
    index: "01 / 工程",
    label: "系统设计 · 工程领导力",
    title: "精选工作",
    navigationLabel: "精选项目快捷导航",
    technicalDesignLabel: "技术设计与取舍",
    technicalDesignDescription:
      "Founder Weekly Review 的核心流水线已合并，materiality 层等待合并。Vantage 目前是经过测试的集成分支，带身份认证的端到端验证仍在进行。",
    decisions: {
      label: "我愿意辩护的决定，以及它们的边界",
      whyLabel: "为什么",
      limitLabel: "局限",
      items: [
        {
          choice: "用区分版本的事实差异，而不是原始改动标记",
          why: "每条变化都能追溯到改动前后的原文。“Q3”→“Q4”算截止日期变化，“third quarter”→“Q3”不算。",
          limit: "语义变化可能绕过确定性匹配，所以有歧义的改动会交给调用受限的 LLM 分析器。",
        },
        {
          choice: "用不可变快照和 outbox，而不是同步生成",
          why: "重试是安全的，每份报告也都保留来源。",
          limit: "对简单的同步流程来说，这是不必要的开销。",
        },
        {
          choice: "先放必需的角色上下文，再放可选的 RAG",
          why: "角色必须看到的证据不会被搜索结果挤掉。",
          limit: "必需来源可能过时，也可能占用过多上下文预算。",
        },
      ],
    },
    moreProjectsLabel: "更多项目",
    spotlight: {
      index: "03 / 黑客松",
      title: "黑客松亮点",
      label: "获奖的地震响应原型。",
      teamValue: "4",
      teamLabel: "团队成员 · 由我带领",
      durationValue: "36h",
      durationLabel: "完成可运行原型",
    },
    opensInNewTab: "在新标签页打开",
    demoImageAlt:
      "Aftershock 原型演示：Caraballeda 救援地图、输入报告、无人机进度与救援调度状态。裁剪自提供的视频截图。",
    demoImageCaption: "原型演示 · Caraballeda 救援行动",
    architecture: {
      description:
        "Founder Weekly Review 将文档版本、客户反馈与创始人上下文转为带引用的每周报告。Vantage 在此基础上加入角色与公司上下文、证据检索、人工审阅和承诺追踪。",
      inputs: ["文档版本", "客户反馈", "创始人上下文"],
      weekly: {
        title: "Founder Weekly Review",
        status: "核心流水线已合并",
        steps: ["证据收集", "不可变快照", "生成与引用校验"],
      },
      vantage: {
        title: "Vantage",
        status: "集成分支与演示",
        steps: ["角色与公司上下文", "证据检索", "人工审阅与承诺追踪"],
      },
      maturity: "Vantage：已有经过测试的模块和便携演示，带身份认证的端到端验证仍在进行",
    },
    action: {
      kicker: "独立 AI 系统项目 · 2026 年 6 月 — 至今",
      title: "Personal Action Agent",
      date: "2026 年 6 月 — 至今",
      description:
        "一个以可靠性为核心的 Agent Harness，将收发 Gmail 邮件中的通信证据转化为可持久化的行动记录（Actions）。",
      tags: ["Gmail", "Agent Harness", "SQLite", "RAG", "评测"],
      repo: "查看代码仓库",
      detailsLabel: "架构与评测细节",
      sideLabel: "可靠性与评测",
      sideText:
        "275 项回归测试，以及人工审阅的 Gmail 评测数据。由确定性代码管理记录身份、生命周期转换、幂等性、持久化授权与证据完整性。",
      boundaryLabel: "可靠性边界",
      boundaryText: "LLM 负责理解语义，确定性代码负责管理状态。",
      steps: [
        { number: "01", title: "标准化", detail: "与邮件服务商无关的格式" },
        { number: "02", title: "解释", detail: "有类型约束的 LLM 输出" },
        { number: "03", title: "校验", detail: "策略规则与证据完整性" },
        { number: "04", title: "持久化", detail: "行动记录与来源追踪" },
      ],
      ownershipLabel: "确定性代码负责",
      ownership:
        "记录身份、Action 生命周期转换、幂等性、证据完整性与持久化授权。",
      evidenceLabel: "证据层",
      evidence:
        "按需补全邮件会话、提示词与语义契约、SQLite 持久化，以及只追加写入的 ActionEvent 来源记录。",
      metrics: [
        {
          value: "275",
          label: "回归测试",
          detail: "系统化 Agent 评测框架，检查结构化输出是否符合约定。",
        },
        {
          value: "人工审阅",
          label: "Gmail 标注数据",
          detail: "以人工审阅的真实通信证据作为评测依据。",
        },
        {
          value: "提示词 / 语义",
          label: "错误分析",
          detail: "据此重构所有权语义，并扩展对持久化证据的检索。",
        },
      ],
    },
    launchstack: {
      name: "LaunchStack",
      kicker: "Tech Lead · Founder Operating System",
      title: "从公司文档，到创始人能核对的决策。",
      description:
        "我带领三人团队负责 Founder Operating System，主导架构、接口契约、代码审查与集成。LaunchStack 是开源项目，GitHub 上有 890+ star。",
      highlights: [
        {
          eyebrow: "已构建 · 核心流水线已合并",
          label: "Founder Weekly Review",
          text: "从文档版本、客户反馈和创始人输入中收集证据，冻结为不可变快照，再异步生成报告，并用该快照校验引用。",
          detail: "Materiality 层：70 项变更测试样例压缩为 22 项提示输入；等待合并",
        },
        {
          eyebrow: "已设计 · 集成分支",
          label: "Vantage",
          text: "角色感知的决策支持流水线，从公司上下文和证据检索，到人工审阅和承诺追踪。我负责设计，并协调前端与检索工作。",
          detail: "经过测试的集成分支 · 便携演示",
        },
      ],
      tags: ["架构设计", "PostgreSQL", "Inngest", "幂等性", "代码审查"],
      sideLabel: "设计与实施",
      sideText:
        "Vantage 的集成 PR 尚未合并，带身份认证的端到端验证仍在进行。",
      links: [
        {
          label: "在 GitHub 查看代码",
          href: "https://github.com/Deodat-Lawson/LaunchStack",
        },
      ],
    },
    aftershock: {
      name: "Aftershock",
      kicker: "项目负责人 · HopHacks 2026",
      title: "为地震救援建立共享的行动态势。",
      description:
        "我带领四人团队，在 36 小时内完成可运行的地震响应演示：将相互矛盾的报告融合为共享行动状态，并基于真实道路网络动态调整救援路线，重要任务变更需要人工批准。",
      tags: ["AI 系统", "多模态报告", "行动协调", "路线规划"],
      sideLabel: "第一名 · Bloomberg 赛道",
      sideText: "HopHacks 2026 Bloomberg Most Philanthropic Hack 赛道 27 支队伍中的第一名。",
      links: [
        {
          label: "查看项目与演示",
          href: "https://devpost.com/software/aftershock-wd7a4s",
        },
      ],
    },
  },
  research: {
    index: "02 / 研究",
    label: "安全研究 · AI 代码 benchmark",
    entries: [
      {
        id: "taint-analysis",
        title: "Mystra",
        role: "ICSE 2027 · 论文已接收 · 第二作者",
        context:
          "Mystra: Declarative Dynamic Taint Analysis via Shadow Virtual Machine",
        dates: "2026 年 6 月 — 7 月",
        links: [
          { label: "阅读论文", href: "https://arxiv.org/abs/2607.12308" },
        ],
        items: [
          {
            label: "研究方向",
            text: "声明式动态污点分析，追踪不可信数据在软件中的传播。",
          },
          {
            label: "个人贡献",
            text: "在论文的 19 个真实漏洞中复现了 4 个以上，完成完整应用级 CVE 验证，追踪污点输入到 DOM 与代码执行点；协助在 CPython、SpiderMonkey 和 Chromium 上移植和评测 shadow-VM 引擎，并分析传播与 source-to-sink 覆盖的局限。",
          },
        ],
      },
      {
        id: "genesis-mission",
        title: "Genesis Mission",
        role: "本科研究员 · Prof. Ziyang Li",
        context: "美国能源部支持的研究，为 AI 生成的科学代码构建 benchmark。",
        dates: "2026 年 9 月 — 至今",
        links: [
          {
            label: "阅读项目介绍",
            href: "https://www.cs.jhu.edu/news/hopkins-led-team-selected-for-inaugural-department-of-energy-genesis-mission-award/",
          },
        ],
        items: [
          {
            label: "Benchmark",
            text: "基于科研软件构建冻结的代码合成任务，衡量编码 Agent 能否写出可编译、数值正确、符合接口约定的代码。",
          },
          {
            label: "我的工作",
            text: "我设计了从科研软件到 benchmark 的流程，负责 frozen-benchmark 阶段，包括科学准入门槛、独立验证，以及对照可信数值参考的远程 CUDA GPU 评测。",
          },
        ],
      },
    ],
  },
  leadership: {
    index: "04 / 教学与领导力",
    label: "教学与领导力",
    items: [
      {
        title: "Johns Hopkins PILOT Program",
        eyebrow: "Head PILOT Leader · Honors Discrete Mathematics",
        description:
          "在担任 PILOT Leader 一年后晋升为 Head PILOT Leader。负责 Honors Discrete Mathematics 小组，并为 10–15 名学生每周带领证明、逻辑、归纳、集合论与组合数学问题讨论。",
        dates: "2026 年 7 月 — 至今\n此前：2025 年 7 月 — 2026 年 6 月",
      },
      {
        title: "Mathematical Foundations of Computer Science",
        eyebrow: "Teaching Assistant · Johns Hopkins University",
        description:
          "在课程中取得 A+ 后获选为助教，协助证明、离散结构与计算机科学基础推理的教学。",
        dates: "2026 年秋季 — 至今",
      },
    ],
  },
  education: {
    index: "05 / 教育",
    label: "教育背景",
    university: "Johns Hopkins University",
    degree: "应用数学与统计学、计算机科学 · B.S.",
    meta: "预计 2028 年 5 月毕业 · Baltimore, MD",
    courseworkLabel: "相关课程",
    coursework:
      "机器学习与深度学习 · 自然语言处理：自监督模型 · 软件系统设计 · 计算机系统基础 · 数据结构与算法 · 概率论 · 优化",
  },
  skills: {
    index: "05 / 技术技能",
    label: "技术技能",
    items: [
      { label: "语言", value: "Python, C++, JavaScript, TypeScript, SQL" },
      {
        label: "AI / ML",
        value:
          "LLM Agents, RAG, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn",
      },
      {
        label: "系统 / 研究",
        value:
          "Linux / WSL, CUDA, Docker, AWS, Inngest, Dynamic Taint Analysis, CVE Validation",
      },
      {
        label: "Web / Data",
        value: "React, Next.js, Node.js, PostgreSQL / pgvector, SQLite, Git",
      },
    ],
  },
  contact: {
    index: "06 / 联系",
    label: "开放联系",
    title: "一起构建有用的软件。",
    emailLabel: "jliu384@jh.edu",
    footer: "刘峻锟 / Baltimore, MD",
    footerMeta: "为持久而可靠的工作而构建 · 2026",
  },
};
