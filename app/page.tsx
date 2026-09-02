const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const links = {
  resume: `${basePath}/Junkun-Liu-Resume.pdf`,
  github: "https://github.com/EricLiu2795",
  linkedin: "https://www.linkedin.com/in/junkun-liu-30a7b52a3",
  email: "mailto:jliu384@jh.edu",
};

function ExternalMark() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ children, index }: { children: React.ReactNode; index: string }) {
  return (
    <div className="mb-7 flex items-center justify-between gap-4">
      <p className="eyebrow">{index}</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#676861]">{children}</p>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

const snapshot = [
  ["Currently", "Tech Lead · LaunchStack"],
  ["Previously", "Algorithm Engineer Intern · StepFun"],
  ["Research", "Dynamic Taint Analysis · Second-listed Author"],
  ["Education", "Johns Hopkins · CS + Applied Mathematics & Statistics"],
];

const skills = [
  ["Languages", "Python, C++, JavaScript, TypeScript, SQL"],
  ["AI / ML", "LLM Agents, Agent Harnesses, RAG, Prompt Engineering, Structured Outputs, Agent Evaluation, Embeddings, PyTorch, Scikit-learn"],
  ["Systems / Research", "SQLite, State Machines, Provider Abstractions, Dynamic Taint Analysis, Browser Automation, CVE Validation, Benchmarking, Docker"],
  ["Web / Data", "React, Next.js, Node.js, PostgreSQL, Git, AWS"],
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <a className="skip-link" href="#experience">Skip to experience</a>
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <a href="#top" className="font-serif text-lg tracking-[-0.02em]">JL<span className="text-ember">.</span></a>
        <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.12em] sm:flex">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#research">Research</a>
          <a className="nav-link" href="#leadership">Leadership</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href={links.resume}>Resume</a>
        </div>
        <a className="arrow-link text-[10px] uppercase tracking-[0.12em] sm:hidden" href={links.email}>Say hello <ExternalMark /></a>
      </nav>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24 lg:px-12 lg:pb-20 lg:pt-24">
        <div>
          <p className="eyebrow mb-6">Computer science × systems reliability</p>
          <h1 className="serif-balance max-w-3xl font-serif text-[clamp(3.1rem,6.5vw,6.5rem)] leading-[0.93] tracking-[-0.065em]">I build reliable AI agents and the systems around them.</h1>
          <p className="body-copy mt-7 max-w-xl text-base sm:text-lg">I&apos;m Junkun Liu, an engineer and researcher building reliable AI agents, agent harnesses, orchestration, retrieval, and evaluation systems.</p>
        </div>
        <div className="self-end border-t border-line pt-5 lg:pt-6">
          <p className="font-serif text-3xl leading-none tracking-[-0.045em]">Junkun Liu</p>
          <p className="mt-3 font-bold">Computer Science + Applied Mathematics &amp; Statistics</p>
          <p className="mt-1 text-sm text-[#676861]">Johns Hopkins University</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ember">Expected May 2028 · Baltimore, MD</p>
          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.12em]">
            <a className="arrow-link" href={links.resume}>Resume <ExternalMark /></a>
            <a className="arrow-link" href={links.github} target="_blank" rel="noreferrer">GitHub <ExternalMark /></a>
            <a className="arrow-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalMark /></a>
            <a className="arrow-link" href={links.email}>Email <ExternalMark /></a>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-wash" aria-label="Professional snapshot">
        <div className="mx-auto grid max-w-[1240px] gap-0 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {snapshot.map(([label, value], index) => (
            <div className={`snapshot-item ${index === 0 ? "border-l-2 border-ember" : ""}`} key={label}>
              <p className="eyebrow">{label}</p>
              <p className="mt-3 max-w-[14rem] font-serif text-xl leading-tight tracking-[-0.03em]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1240px] scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <SectionLabel index="01 / Experience">Professional experience</SectionLabel>
        <div className="border-y border-line">
          <article className="experience-row">
            <div><p className="font-serif text-3xl leading-none tracking-[-0.04em]">LaunchStack</p><p className="eyebrow mt-3">Founder Operating System</p></div>
            <div><h2 className="font-bold">Tech Lead</h2><p className="mt-1 text-sm text-[#676861]">Previously Product Engineering Intern, Spring 2026.</p><ul className="body-copy mt-5 list-disc space-y-2 pl-4 text-sm"><li>Lead the product engineering workstream, owning technical architecture, task decomposition, implementation sequencing, and code / PR review.</li><li>Designed the Founder Weekly Review / RAG pipeline, aggregating documents, GitHub activity, customer feedback, and team context into source-grounded evidence snapshots.</li><li>Built the document-change pipeline around versioned artifacts, historical chunks, deterministic alignment, structured change evidence, and preserved source IDs / provenance.</li></ul></div>
            <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-[#676861] sm:text-right">Jun 2026 — present<br />Baltimore / Remote</p>
          </article>
          <article className="experience-row">
            <div><p className="font-serif text-3xl leading-none tracking-[-0.04em]">StepFun</p><p className="eyebrow mt-3">Algorithm Engineer Intern</p></div>
            <div><h2 className="font-bold">Algorithm Engineer Intern</h2><ul className="body-copy mt-5 list-disc space-y-2 pl-4 text-sm"><li>Built and evaluated LLM-based web agents for multi-step browser tasks, testing stability under tool coordination, navigation, and dynamic DOM changes.</li><li>Integrated structured agent workflows and Azure OpenAI-compatible model access into training and evaluation pipelines.</li><li>Containerized browser environments and diagnosed navigation loops, tool misuse, element ambiguity, and inconsistent state transitions.</li></ul></div>
            <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-[#676861] sm:text-right">Jun — Aug 2025<br />Beijing, China</p>
          </article>
        </div>
      </section>

      <section id="work" className="bg-ink text-paper scroll-mt-6">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel index="02 / Selected technical work">Systems I designed and built</SectionLabel>
          <article id="action-agent" className="project-feature scroll-mt-6">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <div><p className="eyebrow mb-4">01 · Flagship / Independent AI Systems Project</p><h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.055em] sm:text-5xl">Personal Action Agent</h2><p className="mt-4 text-sm font-bold text-ember">Jun 2026 — Present</p><p className="mt-6 max-w-lg text-sm leading-6 text-[#c5c5bc]">A reliability-first agent harness that converts bidirectional Gmail communication evidence into durable operational Actions.</p><div className="mt-6 flex flex-wrap gap-2"><Tag>Gmail</Tag><Tag>agent harness</Tag><Tag>SQLite</Tag><Tag>RAG</Tag><Tag>evaluation</Tag></div><a className="arrow-link mt-7" href="https://github.com/EricLiu2795/Personal-Action-Agent" target="_blank" rel="noreferrer">View repository <ExternalMark /></a></div>
              <div className="grain border border-[#4a4b46] bg-[#252622] p-5 sm:p-7"><div className="flex items-start justify-between gap-5"><div><p className="eyebrow">Reliability boundary</p><p className="mt-2 max-w-md font-serif text-2xl leading-tight tracking-[-0.035em]">The LLM interprets semantics, but deterministic code owns state.</p></div><span className="font-mono text-xs text-ember">A / 01</span></div><div className="mt-8 grid gap-3 sm:grid-cols-4">{[["01", "Normalize", "provider-neutral email"], ["02", "Interpret", "typed LLM outputs"], ["03", "Gate", "policy + evidence"], ["04", "Persist", "Action + provenance"]].map(([number, title, detail]) => <div className="border-t border-[#4a4b46] pt-3" key={number}><p className="font-mono text-[9px] text-[#9b9b92]">{number}</p><p className="mt-2 font-bold">{title}</p><p className="mt-1 text-xs leading-5 text-[#9b9b92]">{detail}</p></div>)}</div><div className="mt-8 grid gap-5 border-t border-[#4a4b46] pt-5 sm:grid-cols-2"><div><p className="eyebrow mb-2">Deterministic ownership</p><p className="text-sm leading-6 text-[#c5c5bc]">Identity, durable Action lifecycle transitions, idempotency, evidence completeness, persistence authorization.</p></div><div><p className="eyebrow mb-2">Evidence layer</p><p className="text-sm leading-6 text-[#c5c5bc]">Selective conversation hydration, prompt / semantic contracts, SQLite persistence, append-only ActionEvent provenance.</p></div></div></div>
            </div>
            <div className="mt-8 grid gap-px bg-[#4a4b46] sm:grid-cols-3"><div className="bg-ink p-5"><p className="font-serif text-3xl tracking-[-0.05em]">275</p><p className="eyebrow mt-1">Regression tests</p><p className="mt-3 text-sm leading-6 text-[#9b9b92]">Systematic agent-evaluation harness with structured-output conformance checks.</p></div><div className="bg-ink p-5"><p className="font-serif text-2xl tracking-[-0.04em]">Human-reviewed</p><p className="eyebrow mt-1">Gmail gold data</p><p className="mt-3 text-sm leading-6 text-[#9b9b92]">Evaluation grounded in reviewed communication evidence.</p></div><div className="bg-ink p-5"><p className="font-serif text-2xl tracking-[-0.04em]">Prompt / semantic</p><p className="eyebrow mt-1">Error analysis</p><p className="mt-3 text-sm leading-6 text-[#9b9b92]">Used results to redesign ownership semantics and extend retrieval over persistent evidence.</p></div></div>
          </article>

          <article id="launchstack" className="compact-project scroll-mt-6"><div><p className="eyebrow">02 · LaunchStack / Founder Operating System</p><h2 className="mt-3 font-serif text-3xl leading-none tracking-[-0.04em]">From changing artifacts to a grounded weekly review.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-[#c5c5bc]">As Tech Lead, I designed the evidence boundary for a Founder Weekly Review / RAG pipeline that turns documents, GitHub activity, customer feedback, and team context into structured signals for changes, blockers, customer signals, and next priorities.</p><div className="mt-5 flex flex-wrap gap-2"><Tag>RAG</Tag><Tag>provenance</Tag><Tag>document change</Tag><Tag>structured synthesis</Tag></div></div><div className="border-l border-[#4a4b46] pl-5"><p className="eyebrow mb-3">Document-change pipeline</p><p className="font-mono text-xs leading-6 text-[#c5c5bc]">versioned artifacts <span className="text-ember">→</span> historical chunks <span className="text-ember">→</span> deterministic alignment <span className="text-ember">→</span> structured change evidence <span className="text-ember">→</span> source IDs / provenance <span className="text-ember">→</span> synthesis</p></div></article>

          <article id="taint-analysis" className="compact-project scroll-mt-6"><div><p className="eyebrow">03 · Dynamic Taint Analysis Research</p><h2 className="mt-3 font-serif text-3xl leading-none tracking-[-0.04em]">Tracing untrusted input across the runtime boundary.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-[#c5c5bc]">Research across CPython, SpiderMonkey, and Chromium implementing source-to-sink propagation through calls, locals / parameters, property and index access, concatenation, and native string operations.</p><div className="mt-5 flex flex-wrap gap-2"><Tag>CPython</Tag><Tag>SpiderMonkey</Tag><Tag>Chromium</Tag><Tag>CVE validation</Tag></div></div><div className="border-l border-ember pl-5"><p className="eyebrow mb-3">Validation</p><p className="text-sm leading-6 text-[#c5c5bc]">Full-application CVE reproduction, tainted input to DOM / code-execution sinks, propagation DAGs, and source-to-sink coverage.</p></div></article>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-[1240px] scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index="03 / Research">Research with measurable limits</SectionLabel><div className="grid gap-8 border-y border-line py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow mb-4">Dynamic Taint Analysis Research</p><h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">Second-listed Author · Manuscript in Preparation</h2><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-ember">Jun 2026 — Jul 2026</p></div><div className="grid gap-7 sm:grid-cols-2"><div><p className="font-bold">Propagation</p><p className="body-copy mt-2 text-sm">Function calls; locals and parameters; property / index access; string concatenation; native string operations.</p></div><div><p className="font-bold">Validation</p><p className="body-copy mt-2 text-sm">Reproducible full-application CVE validations tracing tainted inputs to DOM and code-execution sinks.</p></div><div><p className="font-bold">Analysis</p><p className="body-copy mt-2 text-sm">Taint-propagation DAGs, source-to-sink coverage, and propagation gaps.</p></div><div><p className="font-bold">Runtime limitations</p><p className="body-copy mt-2 text-sm">Measured the blind spots and runtime constraints that remain at application scale.</p></div></div></div></section>

      <section id="leadership" className="border-y border-line bg-wash scroll-mt-6"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index="04 / Teaching & Leadership">Teaching & Leadership</SectionLabel><div className="divide-y divide-line border-y border-line"><article className="leadership-row"><div><h2 className="font-serif text-2xl tracking-[-0.035em]">Johns Hopkins PILOT Program</h2><p className="eyebrow mt-2">Head PILOT Leader · Honors Discrete Mathematics</p></div><p className="body-copy text-sm">Promoted after one year as a PILOT Leader. Oversee the Honors Discrete Mathematics group and lead weekly problem-solving sessions for 10–15 students on proofs, logic, induction, set theory, and combinatorics.</p><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">Jul 2026 — present<br />Previously Jul 2025 — Jun 2026</p></article><article className="leadership-row"><div><h2 className="font-serif text-2xl tracking-[-0.035em]">Mathematical Foundations of Computer Science</h2><p className="eyebrow mt-2">Incoming Teaching Assistant</p></div><p className="body-copy text-sm">Selected as a Teaching Assistant for the proof-based CS core course after earning an A+; appointment begins Fall 2026.</p><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">Fall 2026</p></article></div></div></section>

      <section id="about" className="mx-auto grid max-w-[1240px] scroll-mt-6 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12"><div><SectionLabel index="05 / Education">Education</SectionLabel><h2 className="font-serif text-4xl leading-none tracking-[-0.05em] sm:text-5xl">Johns Hopkins University</h2><p className="mt-5 text-lg font-bold">B.S. in Applied Mathematics &amp; Statistics and Computer Science</p><p className="mt-2 text-sm text-[#676861]">GPA: 3.74 / 4.00 · Expected May 2028 · Baltimore, MD</p></div><div className="border-t border-line pt-6"><p className="eyebrow mb-4">Relevant coursework</p><p className="max-w-3xl text-sm leading-7">Data Structures &amp; Algorithms · Mathematical Foundations of Computer Science · Theory of Computation · Probability · Mathematical Statistics · Optimization · Linear Algebra · Full-Stack JavaScript</p></div></section>

      <section className="border-t border-line bg-[#e9e6de]"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index="06 / Technical skills">Technical skills</SectionLabel><div className="grid gap-x-10 gap-y-7 border-y border-line py-7 sm:grid-cols-2">{skills.map(([label, value]) => <div key={label}><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">{label}</p><p className="mt-3 text-sm leading-6">{value}</p></div>)}</div></div></section>

      <footer className="bg-ink text-paper"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index="07 / Contact">Open channel</SectionLabel><div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><h2 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl">Have a hard systems problem?</h2><a className="mt-8 inline-flex border-b border-ember pb-2 font-serif text-2xl tracking-[-0.03em] text-paper" href={links.email}>jliu384@jh.edu <span className="ml-3 text-ember">↗</span></a></div><div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b7b7ae] sm:text-right"><a className="nav-link" href={links.resume}>Resume <ExternalMark /></a><a className="nav-link" href={links.github} target="_blank" rel="noreferrer">GitHub <ExternalMark /></a><a className="nav-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalMark /></a><a className="nav-link" href={links.email}>Email <ExternalMark /></a></div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#4a4b46] pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#85867e] sm:flex-row"><span>Junkun Liu / Baltimore, MD</span><span>Built for durable work · 2026</span></div></div></footer>
    </main>
  );
}
