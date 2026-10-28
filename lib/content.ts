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
  highlights?: Array<{ label: string; text: string }>;
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
  };
  snapshotLabel: string;
  snapshot: SnapshotItem[];
  experience: { index: string; label: string; items: ExperienceItem[] };
  work: {
    index: string;
    label: string;
    title: string;
    navigationLabel: string;
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
    eyebrow: "Software Engineering × AI Systems × Research",
    greeting: "Hi, I'm Junkun.",
    exploreWork: "Explore My Work",
    headline: "Building intelligent, reliable software.",
    description:
      "Computer Science and Applied Mathematics & Statistics student at Johns Hopkins University. I work on AI-enabled software, systems design, engineering leadership, and research.",
    degree: "Computer Science + Applied Mathematics & Statistics",
    university: "Johns Hopkins University",
    meta: "Expected May 2028 · Baltimore, MD",
    resume: "View Resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
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
      value: "Aftershock · Bloomberg track winner",
      id: "aftershock",
    },
  ],
  experience: {
    index: "03 / Experience",
    label: "Professional experience",
    items: [
      {
        id: "launchstack-experience",
        company: "LaunchStack",
        eyebrow: "Founder Operating System",
        role: "Tech Lead",
        note: "Previously Product Engineering Intern, Spring 2026.",
        bullets: [
          "Lead technical design, engineering planning, cross-team integration, and code / PR review for the Founder Operating System and Vantage.",
          "Translate product requirements into implementable workflows, from evidence-grounded Founder Weekly Review reports to Vantage's broader decision-support design; some Vantage components remain proposed or partially integrated.",
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
          "Explored and evaluated LLM-based browser agents for multi-step tasks, diagnosing navigation loops, tool misuse, and failures under dynamic DOM changes.",
        ],
        dates: "Jun — Aug 2025",
        location: "Beijing, China",
      },
    ],
  },
  work: {
    index: "01 / Featured work",
    label: "Selected engineering work",
    title: "Selected projects",
    navigationLabel: "Selected project shortcuts",
    opensInNewTab: "opens in a new tab",
    demoImageAlt:
      "Aftershock prototype demo: Caraballeda rescue map, incoming reports, drone progress and rescue dispatch status. Cropped from the supplied video screenshot.",
    demoImageCaption: "Prototype demo · Caraballeda rescue operations",
    architecture: {
      description:
        "Founder Weekly Review turns documents, GitHub activity, customer signals and team context into evidence-grounded weekly reports. The broader Vantage design connects role-aware retrieval to AI reports, human review, decisions and commitments; maturity varies by component.",
      inputs: [
        "Documents",
        "GitHub activity",
        "Customer signals",
        "Team context",
      ],
      weekly: {
        title: "Founder Weekly Review",
        status: "Reporting workflow",
        steps: [
          "Evidence processing & retrieval",
          "Source-grounded weekly report",
        ],
      },
      vantage: {
        title: "Vantage",
        status: "Broader technical design",
        steps: [
          "Role-aware context & retrieval",
          "AI-assisted reports",
          "Human review, decisions & commitments",
        ],
      },
      maturity:
        "Vantage: implemented, partially integrated & proposed components",
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
      title: "From organizational evidence to better decisions.",
      description:
        "I translate product requirements into pipeline architecture and engineering plans, coordinate integrations across the team, and review code and PRs for implementation quality.",
      highlights: [
        {
          label: "Founder Weekly Review",
          text: "An AI-assisted weekly reporting workflow that turns fragmented documents, GitHub activity, customer feedback, and team context into evidence-grounded summaries.",
        },
        {
          label: "Vantage",
          text: "A broader decision-support design connecting role-aware context, evidence retrieval, AI-generated reports, human review, and tracked commitments.",
        },
      ],
      tags: ["Technical design", "RAG", "Integration", "Code review"],
      sideLabel: "Design & implementation",
      sideText:
        "Parts of Vantage remain proposed or partially integrated; the complete design is not yet shipped.",
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
        "Conceived the project and led a four-person team to a working demo in 36 hours. Designed an AI-assisted system that fuses conflicting multimodal reports into shared operational state, coordinates search and rescue actions, and dynamically reroutes teams over real road networks.",
      tags: ["AI systems", "multimodal reports", "coordination", "routing"],
      sideLabel: "1st place · Bloomberg track",
      sideText:
        "Winner of the Bloomberg Most Philanthropic Hack track at HopHacks 2026. Four people, 36 hours, a working demo.",
      links: [
        {
          label: "View project on Devpost",
          href: "https://devpost.com/software/aftershock-wd7a4s",
        },
      ],
    },
  },
  research: {
    index: "02 / Research",
    label: "Research & publications",
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
            text: "Reproduced and evaluated real-world CVE cases in web applications and assisted with cross-runtime evaluation.",
          },
        ],
      },
      {
        id: "genesis-mission",
        title: "Genesis Mission",
        role: "Undergraduate Researcher · Prof. Ziyang Li",
        context:
          "Research on reliable AI-generated scientific computing software.",
        dates: "Sep 2026 — present",
        links: [
          {
            label: "Read the project announcement",
            href: "https://www.cs.jhu.edu/news/hopkins-led-team-selected-for-inaugural-department-of-energy-genesis-mission-award/",
          },
        ],
        items: [
          {
            label: "Reconstruction",
            text: "Reconstruct computational-physics workloads and configure CUDA environments to make scientific code reproducible and testable.",
          },
          {
            label: "Validation",
            text: "Compare CPU/GPU numerical results against trusted references, documenting discrepancies and the limits of each validation run.",
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
    index: "06 / Technical skills",
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
          "Linux / WSL, CUDA, SQLite, Docker, Dynamic Taint Analysis, CVE Validation",
      },
      {
        label: "Web / Data",
        value: "React, Next.js, Node.js, PostgreSQL, Git, AWS",
      },
    ],
  },
  contact: {
    index: "07 / Contact",
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
    eyebrow: "软件工程 × AI 系统 × 研究",
    greeting: "你好，我是峻锟。",
    exploreWork: "探索我的项目",
    headline: "构建智能、可靠的软件。",
    description:
      "约翰斯·霍普金斯大学计算机科学与应用数学及统计学本科生，专注于 AI 驱动的软件、系统设计、工程领导力与研究。",
    degree: "计算机科学 + 应用数学与统计学",
    university: "约翰斯·霍普金斯大学",
    meta: "预计 2028 年 5 月毕业 · Baltimore, MD",
    resume: "查看简历",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "邮箱",
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
      value: "Aftershock · Bloomberg 赛道冠军",
      id: "aftershock",
    },
  ],
  experience: {
    index: "03 / 经历",
    label: "专业经历",
    items: [
      {
        id: "launchstack-experience",
        company: "LaunchStack",
        eyebrow: "Founder Operating System",
        role: "Tech Lead",
        note: "此前任 Product Engineering Intern（2026 年春季）。",
        bullets: [
          "负责 Founder Operating System 与 Vantage 的技术设计、工程规划、跨团队集成，以及代码与 PR 审查。",
          "将产品需求转化为可实施的工作流，从有证据支撑的 Founder Weekly Review 周报，到 Vantage 的决策支持系统设计；Vantage 的部分组件仍处于提案或部分集成阶段。",
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
          "探索并评测面向多步任务的 LLM 浏览器 Agent，分析导航循环、工具误用，以及动态 DOM 变化下的故障。",
        ],
        dates: "2025 年 6 月 — 8 月",
        location: "Beijing, China",
      },
    ],
  },
  work: {
    index: "01 / 精选项目",
    label: "精选工程项目",
    title: "精选项目",
    navigationLabel: "精选项目快捷导航",
    opensInNewTab: "在新标签页打开",
    demoImageAlt:
      "Aftershock 原型演示：Caraballeda 救援地图、输入报告、无人机进度与救援调度状态。裁剪自提供的视频截图。",
    demoImageCaption: "原型演示 · Caraballeda 救援行动",
    architecture: {
      description:
        "Founder Weekly Review 将文档、GitHub 动态、客户信号与团队上下文转为有来源依据的每周报告。Vantage 的整体设计连接角色上下文检索、AI 报告、人工审阅、决策与承诺追踪，各组件成熟度不同。",
      inputs: ["文档", "GitHub 动态", "客户信号", "团队上下文"],
      weekly: {
        title: "Founder Weekly Review",
        status: "每周报告流程",
        steps: ["证据处理与检索", "有来源依据的每周报告"],
      },
      vantage: {
        title: "Vantage",
        status: "整体技术设计",
        steps: [
          "角色上下文与证据检索",
          "AI 辅助报告",
          "人工审阅、决策与承诺追踪",
        ],
      },
      maturity: "Vantage：包含已实现、部分集成与规划中的组件",
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
      title: "从组织证据，到更有依据的决策。",
      description:
        "将产品需求转化为流水线架构与工程计划，协调跨团队集成，并通过代码与 PR 审查把关实施质量。",
      highlights: [
        {
          label: "Founder Weekly Review",
          text: "AI 辅助周报工作流，将分散的文档、GitHub 活动、客户反馈和团队上下文整理为有证据支撑的摘要。",
        },
        {
          label: "Vantage",
          text: "更广泛的决策支持系统设计，连接角色感知上下文、证据检索、AI 报告、人工审阅和承诺跟踪。",
        },
      ],
      tags: ["技术设计", "RAG", "系统集成", "代码审查"],
      sideLabel: "设计与实施",
      sideText:
        "Vantage 的部分组件仍处于提案或部分集成阶段，完整设计尚未全部交付。",
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
        "提出项目构想，带领四人团队在 36 小时内完成可运行的演示。设计 AI 辅助地震响应系统，将相互矛盾的多模态报告融合为共享行动状态，协调搜索与救援，并基于真实道路网络动态调整团队路线。",
      tags: ["AI 系统", "多模态报告", "行动协调", "路线规划"],
      sideLabel: "第一名 · Bloomberg 赛道",
      sideText:
        "HopHacks 2026 Bloomberg Most Philanthropic Hack 赛道冠军。四人团队、36 小时、可运行的演示。",
      links: [
        {
          label: "在 Devpost 查看项目",
          href: "https://devpost.com/software/aftershock-wd7a4s",
        },
      ],
    },
  },
  research: {
    index: "02 / 研究",
    label: "研究与论文",
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
            text: "复现并评测真实 Web 应用中的 CVE 漏洞案例，协助跨运行时评测。",
          },
        ],
      },
      {
        id: "genesis-mission",
        title: "Genesis Mission",
        role: "本科研究员 · Prof. Ziyang Li",
        context: "研究可靠的 AI 生成科学计算软件。",
        dates: "2026 年 9 月 — 至今",
        links: [
          {
            label: "阅读项目介绍",
            href: "https://www.cs.jhu.edu/news/hopkins-led-team-selected-for-inaugural-department-of-energy-genesis-mission-award/",
          },
        ],
        items: [
          {
            label: "工作负载重建",
            text: "重建计算物理工作负载，配置 CUDA 环境，使科学计算代码可复现、可测试。",
          },
          {
            label: "数值验证",
            text: "将 CPU/GPU 数值结果与可信参考结果进行比较，记录差异及每次验证的适用边界。",
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
    index: "06 / 技术技能",
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
          "Linux / WSL, CUDA, SQLite, Docker, Dynamic Taint Analysis, CVE Validation",
      },
      {
        label: "Web / Data",
        value: "React, Next.js, Node.js, PostgreSQL, Git, AWS",
      },
    ],
  },
  contact: {
    index: "07 / 联系",
    label: "开放联系",
    title: "一起构建有用的软件。",
    emailLabel: "jliu384@jh.edu",
    footer: "刘峻锟 / Baltimore, MD",
    footerMeta: "为持久而可靠的工作而构建 · 2026",
  },
};
