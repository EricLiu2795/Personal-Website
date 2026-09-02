const links = {
  resume: "/Junkun-Liu-Resume.pdf",
  github: "https://github.com/EricLiu2795",
  linkedin: "https://www.linkedin.com/in/junkun-liu-30a7b52a3",
  email: "mailto:jliu384@jh.edu",
};

const work = [
  {
    number: "01",
    title: "Personal Action Agent",
    role: "Independent AI Systems Project",
    meta: "Jun 2026 — Present · Flagship",
    summary:
      "A reliability-first agent harness that turns bidirectional Gmail evidence into durable operational Actions.",
    tags: "agent harness · Gmail · SQLite · evaluation",
    href: "#action-agent",
  },
  {
    number: "02",
    title: "LaunchStack",
    role: "Tech Lead · Founder Operating System",
    meta: "Jun 2026 — Present · Baltimore / Remote",
    summary:
      "Source-grounded operating infrastructure for turning changing documents and team context into a useful weekly review.",
    tags: "RAG · provenance · document change · synthesis",
    href: "#launchstack",
  },
  {
    number: "03",
    title: "Dynamic Taint Analysis Research",
    role: "Second-listed Author · Manuscript in Preparation",
    meta: "Jun 2026 — Jul 2026 · Research collaboration",
    summary:
      "Cross-runtime research tracing untrusted inputs through CPython, SpiderMonkey, and Chromium to real application sinks.",
    tags: "CPython · Chromium · CVE validation · source-to-sink",
    href: "#taint-analysis",
  },
];

function ExternalMark() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ children, index }: { children: React.ReactNode; index: string }) {
  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <p className="eyebrow">{index}</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#676861]">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <a href="#top" className="font-serif text-lg tracking-[-0.02em]">JL<span className="text-ember">.</span></a>
        <div className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.12em] sm:flex">
          <a className="nav-link" href="#work">Selected work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href={links.email}>Contact</a>
        </div>
        <a className="arrow-link text-[10px] uppercase tracking-[0.12em] sm:hidden" href={links.email}>Say hello <ExternalMark /></a>
      </nav>

      <section id="top" className="mx-auto grid max-w-[1240px] gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20 lg:px-12 lg:pb-32 lg:pt-28">
        <div>
          <p className="eyebrow mb-8">Computer science × systems reliability</p>
          <h1 className="serif-balance max-w-4xl font-serif text-[clamp(3.2rem,7.7vw,7.25rem)] leading-[0.93] tracking-[-0.065em]">I build the machinery that makes intelligent systems dependable.</h1>
          <div className="mt-10 max-w-xl border-l-2 border-ember pl-5">
            <p className="body-copy text-base sm:text-lg">I&apos;m Junkun Liu, a Johns Hopkins undergraduate working where reliable AI agents, orchestration, retrieval, and evaluation meet real systems.</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a className="arrow-link" href="#action-agent">Explore the work <ExternalMark /></a>
            <a className="arrow-link text-[#676861]" href={links.resume}>Resume <ExternalMark /></a>
          </div>
        </div>
        <aside className="self-end lg:pb-2" aria-label="Current focus">
          <div className="rule mb-5" />
          <p className="eyebrow mb-5">At a glance / 2026</p>
          <p className="max-w-xs font-serif text-2xl leading-tight tracking-[-0.035em]">Semantic freedom. Deterministic ownership.</p>
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-5">
            <div><p className="font-serif text-3xl tracking-[-0.06em]">275</p><p className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-[#676861]">agent regression tests</p></div>
            <div><p className="font-serif text-3xl tracking-[-0.06em]">3</p><p className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-[#676861]">runtime surfaces</p></div>
            <div><p className="font-serif text-3xl tracking-[-0.06em]">1</p><p className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-[#676861]">durable action model</p></div>
          </div>
        </aside>
      </section>

      <section id="work" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <SectionLabel index="01 / Selected work">Three systems, one through-line</SectionLabel>
          <div className="divide-y divide-[#4a4b46] border-y border-[#4a4b46]">
            {work.map((project) => (
              <a className="project-card grid gap-6 border-l border-r border-transparent px-0 py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8 sm:px-5 lg:grid-cols-[5rem_1fr_20rem]" href={project.href} key={project.number}>
                <p className="font-mono text-xs text-[#9b9b92]">{project.number}</p>
                <div>
                  <h2 className="font-serif text-3xl leading-none tracking-[-0.04em] sm:text-4xl">{project.title}</h2>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ember">{project.role}</p>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-[#c5c5bc]">{project.summary}</p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.11em] text-[#85867e]">{project.tags}</p>
                </div>
                <div className="flex items-center justify-between gap-5 sm:block sm:text-right"><p className="max-w-48 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-[#9b9b92]">{project.meta}</p><span className="mt-6 inline-block text-lg text-ember sm:mt-8"><ExternalMark /></span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="action-agent" className="mx-auto max-w-[1240px] scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionLabel index="02 / Case study 01">Personal Action Agent</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">The flagship project</p>
            <h2 className="serif-balance max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] sm:text-6xl">An agent that can reason about work without owning the work.</h2>
            <p className="body-copy mt-7 max-w-lg">Personal Action Agent converts bidirectional Gmail evidence into durable operational Actions through provider-neutral normalization, selective conversation hydration, typed structured outputs, prompt/semantic contracts, deterministic policy gates, migration-safe SQLite state, and append-only provenance.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6"><a className="arrow-link" href="https://github.com/EricLiu2795/Personal-Action-Agent" target="_blank" rel="noreferrer">View repository <ExternalMark /></a><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#676861]">Jun 2026 — present</span></div>
          </div>
          <div className="grain border border-line bg-wash p-6 sm:p-9">
            <div className="mb-9 flex items-start justify-between gap-5"><div><p className="eyebrow">Reliability boundary</p><p className="mt-2 max-w-md font-serif text-2xl leading-tight tracking-[-0.035em]">The model interprets. The system decides.</p></div><span className="font-mono text-xs text-ember">A / 01</span></div>
            <div className="stage-line grid gap-7 sm:grid-cols-4 sm:gap-3">
              {[['01', 'Gmail evidence', 'Normalize provider data'], ['02', 'Semantic read', 'Typed structured output'], ['03', 'Policy gate', 'Identity + lifecycle'], ['04', 'Durable Action', 'SQLite + provenance']].map(([number, title, detail]) => (
                <div className="relative flex gap-4 sm:block" key={number}><div className="stage-dot mt-0.5 shrink-0 sm:mb-5" /><div><p className="font-mono text-[9px] text-[#676861]">{number}</p><p className="mt-1 font-bold leading-tight">{title}</p><p className="mt-2 text-xs leading-5 text-[#676861]">{detail}</p></div></div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 border-t border-line pt-6 sm:grid-cols-2"><div><p className="eyebrow mb-2">LLM can</p><p className="text-sm leading-6">Interpret semantics, classify evidence, and propose structured changes.</p></div><div><p className="eyebrow mb-2">Deterministic code owns</p><p className="text-sm leading-6">Identity, transitions, idempotency, evidence completeness, and persistence authorization.</p></div></div>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-line sm:grid-cols-3">
          {[['275', 'regression tests', 'Systematic agent-evaluation harness with structured-output conformance checks.'], ['human-reviewed', 'Gmail gold data', 'Evaluation grounded in reviewed communication evidence, not synthetic optimism.'], ['append-only', 'provenance', 'Persistent evidence remains inspectable as retrieval and RAG extend over time.']].map(([value, label, detail]) => <div className="bg-paper p-6" key={label}><p className="font-serif text-3xl tracking-[-0.05em]">{value}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ember">{label}</p><p className="body-copy mt-4 text-sm">{detail}</p></div>)}
        </div>
      </section>

      <section id="launchstack" className="scroll-mt-8 bg-wash">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <SectionLabel index="03 / Case study 02">LaunchStack</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="eyebrow mb-5">Founder Operating System / Tech Lead</p><h2 className="serif-balance font-serif text-5xl leading-[0.95] tracking-[-0.06em] sm:text-6xl">A weekly review that can show its work.</h2><p className="body-copy mt-7 max-w-lg">I led the product engineering workstream and designed the evidence layer behind a Founder Weekly Review / RAG pipeline: documents, GitHub activity, customer feedback, and team context become source-grounded snapshots for changes, blockers, customer signals, and next priorities.</p></div>
            <div className="border-t border-ink pt-6"><div className="grid gap-8 sm:grid-cols-2"><div><p className="eyebrow mb-3">01 / Document change</p><p className="font-serif text-2xl leading-tight">Versioned artifacts → structured evidence</p><p className="body-copy mt-3 text-sm">Fetch artifacts, load historical chunks, deterministically align adjacent versions, and preserve source IDs before synthesis.</p></div><div><p className="eyebrow mb-3">02 / Weekly review</p><p className="font-serif text-2xl leading-tight">Many signals → one grounded brief</p><p className="body-copy mt-3 text-sm">Aggregate documents, code activity, customer feedback, and team context with provenance and version alignment intact.</p></div></div><div className="mt-10 border-t border-line pt-6"><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#676861]">Design principle</p><p className="mt-3 max-w-xl font-serif text-3xl leading-tight tracking-[-0.04em]">Structured synthesis is only as trustworthy as the evidence boundary underneath it.</p></div></div>
          </div>
        </div>
      </section>

      <section id="taint-analysis" className="mx-auto max-w-[1240px] scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <SectionLabel index="04 / Case study 03">Dynamic Taint Analysis Research</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div><p className="eyebrow mb-5">Research collaboration / manuscript in preparation</p><h2 className="serif-balance max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] sm:text-6xl">Following untrusted data through the whole application.</h2><p className="body-copy mt-7 max-w-2xl">Coauthored research on dynamic taint analysis across CPython, SpiderMonkey, and Chromium. The work implements propagation through function calls, locals and parameters, property and index access, string concatenation, and native string operations.</p></div>
          <div className="border-l-2 border-ember pl-6"><p className="eyebrow mb-4">What made it rigorous</p><ul className="space-y-5 text-sm leading-6"><li><span className="font-bold">Full-application CVE validation.</span><br /><span className="text-[#676861]">Reproducible traces from tainted inputs to DOM and code-execution sinks.</span></li><li><span className="font-bold">Graph-level analysis.</span><br /><span className="text-[#676861]">Taint-propagation DAGs, source-to-sink coverage, and propagation gaps.</span></li><li><span className="font-bold">Runtime honesty.</span><br /><span className="text-[#676861]">Measured the limitations and blind spots that remain at application scale.</span></li></ul></div>
        </div>
      </section>

      <section id="about" className="border-t border-line bg-[#e9e6de] scroll-mt-8">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-12"><div><SectionLabel index="05 / Elsewhere">The supporting layer</SectionLabel><h2 className="font-serif text-4xl leading-none tracking-[-0.05em] sm:text-5xl">The rest of the map.</h2><p className="body-copy mt-6 max-w-sm">A systems mindset shows up in the work around the work: teaching, browser agents, and the fundamentals underneath both.</p></div><div className="divide-y divide-line border-y border-line">
          <div className="grid gap-4 py-6 sm:grid-cols-[1fr_1.2fr_auto] sm:items-start"><div><p className="font-serif text-2xl tracking-[-0.035em]">StepFun</p><p className="eyebrow mt-2">Algorithm Engineer Intern</p></div><p className="body-copy text-sm">Built and evaluated LLM-based web agents for multi-step browser tasks; integrated structured workflows and Azure OpenAI-compatible model access into training/evaluation pipelines.</p><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">Jun — Aug 2025</p></div>
          <div className="grid gap-4 py-6 sm:grid-cols-[1fr_1.2fr_auto] sm:items-start"><div><p className="font-serif text-2xl tracking-[-0.035em]">PILOT Program</p><p className="eyebrow mt-2">Head PILOT Leader · Honors Discrete Mathematics</p></div><p className="body-copy text-sm">Promoted after a year of leading weekly sessions; oversee the group and lead proof-solving sessions for 10–15 students on logic, induction, set theory, and combinatorics.</p><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">Jul 2026 — present</p></div>
          <div className="grid gap-4 py-6 sm:grid-cols-[1fr_1.2fr_auto] sm:items-start"><div><p className="font-serif text-2xl tracking-[-0.035em]">Mathematical Foundations of CS</p><p className="eyebrow mt-2">Incoming Teaching Assistant</p></div><p className="body-copy text-sm">Selected for the proof-based CS core course after earning an A+; appointment begins Fall 2026.</p><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">Fall 2026</p></div>
        </div></div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="eyebrow mb-5">Toolkit</p><h2 className="font-serif text-4xl leading-none tracking-[-0.05em] sm:text-5xl">The materials I reach for.</h2></div><div className="grid gap-x-8 gap-y-7 border-t border-line pt-6 sm:grid-cols-2"><div><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">Languages</p><p className="mt-3 text-sm leading-6">Python, C++, JavaScript, TypeScript, SQL</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">AI / ML</p><p className="mt-3 text-sm leading-6">LLM agents, agent harnesses, RAG, prompt engineering, structured outputs, evaluation, embeddings</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">Systems / research</p><p className="mt-3 text-sm leading-6">SQLite, state machines, provider abstractions, dynamic taint analysis, browser automation, CVE validation, Docker</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">Web / data</p><p className="mt-3 text-sm leading-6">React, Next.js, Node.js, PostgreSQL, Git, AWS</p></div></div></div></section>

      <footer className="bg-ink text-paper"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><div className="grid gap-12 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="eyebrow mb-6">06 / Open channel</p><h2 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl">Have a hard systems problem?</h2><a className="mt-8 inline-flex border-b border-ember pb-2 font-serif text-2xl tracking-[-0.03em] text-paper" href={links.email}>jliu384@jh.edu <span className="ml-3 text-ember">↗</span></a></div><div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b7b7ae] sm:text-right"><a className="nav-link" href={links.resume}>Resume <ExternalMark /></a><a className="nav-link" href={links.github} target="_blank" rel="noreferrer">GitHub <ExternalMark /></a><a className="nav-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalMark /></a><a className="nav-link" href={links.email}>Email <ExternalMark /></a></div></div><div className="mt-16 flex flex-col justify-between gap-3 border-t border-[#4a4b46] pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#85867e] sm:flex-row"><span>Junkun Liu / Baltimore, MD</span><span>Built for durable work · 2026</span></div></div></footer>
    </main>
  );
}
