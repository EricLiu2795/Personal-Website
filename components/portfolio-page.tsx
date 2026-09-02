import type { ReactNode } from "react";
import type { ExperienceItem, PortfolioContent, WorkProject } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const actionAgentRepository = "https://github.com/EricLiu2795/Personal-Action-Agent";

function ExternalMark() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ children, index }: { children: ReactNode; index: string }) {
  return (
    <div className="mb-7 flex items-center justify-between gap-4">
      <p className="eyebrow">{index}</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#676861]">{children}</p>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

function LanguageSwitcher({ content, englishHref, chineseHref }: { content: PortfolioContent; englishHref: string; chineseHref: string }) {
  return (
    <div className="language-switcher" aria-label={content.nav.languageLabel}>
      <a href={englishHref} aria-current={content.locale === "en" ? "page" : undefined}>{content.nav.english}</a>
      <span aria-hidden="true">/</span>
      <a href={chineseHref} aria-current={content.locale === "zh" ? "page" : undefined}>{content.nav.chinese}</a>
    </div>
  );
}

function Experience({ item }: { item: ExperienceItem }) {
  return (
    <article id={item.id} className="experience-row">
      <div>
        <p className="font-serif text-3xl leading-none tracking-[-0.04em]">{item.company}</p>
        <p className="eyebrow mt-3">{item.eyebrow}</p>
      </div>
      <div>
        <h2 className="font-bold">{item.role}</h2>
        {item.note ? <p className="mt-1 text-sm text-[#676861]">{item.note}</p> : null}
        <ul className="body-copy mt-5 list-disc space-y-2 pl-4 text-sm">
          {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
      <p className="font-mono whitespace-pre-line text-[10px] uppercase leading-5 tracking-[0.1em] text-[#676861] sm:text-right">{item.dates}<br />{item.location}</p>
    </article>
  );
}

function CompactProject({ project, id }: { project: WorkProject; id: string }) {
  return (
    <article id={id} className="compact-project scroll-mt-6">
      <div>
        <p className="eyebrow">{project.kicker}</p>
        <h2 className="mt-3 font-serif text-3xl leading-none tracking-[-0.04em]">{project.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#c5c5bc]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
      </div>
      <div className="border-l border-[#4a4b46] pl-5">
        <p className="eyebrow mb-3">{project.sideLabel}</p>
        <p className="font-mono text-xs leading-6 text-[#c5c5bc]">{project.sideText}</p>
      </div>
    </article>
  );
}

export default function PortfolioPage({ content }: { content: PortfolioContent }) {
  const pagePrefix = content.locale === "zh" ? `${basePath}/zh` : basePath;
  const englishHref = basePath ? `${basePath}/` : "/";
  const chineseHref = `${basePath}/zh/`;
  const homeHref = content.locale === "zh" ? chineseHref : englishHref;
  const sectionHref = (id: string) => `${pagePrefix}/#${id}`;
  const resumeHref = `${basePath}${content.links.resume}`;
  const action = content.work.action;

  return (
    <main id="top" lang={content.locale === "zh" ? "zh-CN" : "en"} className="overflow-hidden">
      <a className="skip-link" href={sectionHref("experience")}>{content.locale === "zh" ? "跳转到专业经历" : "Skip to experience"}</a>
      <nav className="site-nav" aria-label={content.locale === "zh" ? "主导航" : "Primary navigation"}>
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href={homeHref} className="font-serif text-lg tracking-[-0.02em]">{content.locale === "zh" ? "刘." : <>JL<span className="text-ember">.</span></>}</a>
          <div className="hidden items-center gap-7 sm:flex">
            <div className="primary-nav-links">
              {content.nav.items.map((item) => <a className="primary-nav-link" href={sectionHref(item.id)} key={item.id}>{item.label}</a>)}
              <a className="primary-nav-link" href={resumeHref}>{content.nav.resume}</a>
            </div>
            <LanguageSwitcher content={content} englishHref={englishHref} chineseHref={chineseHref} />
          </div>
          <div className="flex items-center gap-4 sm:hidden">
            <LanguageSwitcher content={content} englishHref={englishHref} chineseHref={chineseHref} />
            <a className="arrow-link text-[10px] uppercase tracking-[0.12em]" href={content.links.email}>{content.nav.sayHello} <ExternalMark /></a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24 lg:px-12 lg:pb-20 lg:pt-24">
        <div>
          <p className="eyebrow mb-6">{content.hero.eyebrow}</p>
          <h1 className="serif-balance max-w-3xl font-serif text-[clamp(3.1rem,6.5vw,6.5rem)] leading-[0.93] tracking-[-0.065em]">{content.hero.headline}</h1>
          <p className="body-copy mt-7 max-w-xl text-base sm:text-lg">{content.hero.description}</p>
        </div>
        <div className="self-end border-t border-line pt-5 lg:pt-6">
          <p className="font-serif text-3xl leading-none tracking-[-0.045em]">{content.name}</p>
          <p className="mt-3 font-bold">{content.hero.degree}</p>
          <p className="mt-1 text-sm text-[#676861]">{content.hero.university}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ember">{content.hero.meta}</p>
          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.12em]">
            <a className="arrow-link" href={resumeHref}>{content.hero.resume} <ExternalMark /></a>
            <a className="arrow-link" href={content.links.github} target="_blank" rel="noreferrer">{content.hero.github} <ExternalMark /></a>
            <a className="arrow-link" href={content.links.linkedin} target="_blank" rel="noreferrer">{content.hero.linkedin} <ExternalMark /></a>
            <a className="arrow-link" href={content.links.email}>{content.hero.email} <ExternalMark /></a>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-wash" aria-label={content.snapshotLabel}>
        <div className="mx-auto grid max-w-[1240px] gap-0 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {content.snapshot.map((item, index) => (
            <a className={`snapshot-item snapshot-link group ${index === 0 ? "border-l-2 border-ember" : ""}`} href={sectionHref(item.id)} key={item.label}>
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow">{item.label}</p>
                <span className="snapshot-arrow" aria-hidden="true">↘</span>
              </div>
              <p className="mt-3 max-w-[14rem] font-serif text-xl leading-tight tracking-[-0.03em]">{item.value}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1240px] scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <SectionLabel index={content.experience.index}>{content.experience.label}</SectionLabel>
        <div className="border-y border-line">{content.experience.items.map((item) => <Experience item={item} key={item.id} />)}</div>
      </section>

      <section id="work" className="bg-ink text-paper scroll-mt-6">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel index={content.work.index}>{content.work.label}</SectionLabel>
          <article id="action-agent" className="project-feature scroll-mt-6">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <div>
                <p className="eyebrow mb-4">{action.kicker}</p>
                <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.055em] sm:text-5xl">{action.title}</h2>
                <p className="mt-4 text-sm font-bold text-ember">{action.date}</p>
                <p className="mt-6 max-w-lg text-sm leading-6 text-[#c5c5bc]">{action.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{action.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                <a className="arrow-link mt-7" href={actionAgentRepository} target="_blank" rel="noreferrer">{action.repo} <ExternalMark /></a>
              </div>
              <div className="grain border border-[#4a4b46] bg-[#252622] p-5 sm:p-7">
                <div className="flex items-start justify-between gap-5"><div><p className="eyebrow">{action.boundaryLabel}</p><p className="mt-2 max-w-md font-serif text-2xl leading-tight tracking-[-0.035em]">{action.boundaryText}</p></div><span className="font-mono text-xs text-ember">A / 01</span></div>
                <div className="mt-8 grid gap-3 sm:grid-cols-4">{action.steps.map((step) => <div className="border-t border-[#4a4b46] pt-3" key={step.number}><p className="font-mono text-[9px] text-[#9b9b92]">{step.number}</p><p className="mt-2 font-bold">{step.title}</p><p className="mt-1 text-xs leading-5 text-[#9b9b92]">{step.detail}</p></div>)}</div>
                <div className="mt-8 grid gap-5 border-t border-[#4a4b46] pt-5 sm:grid-cols-2"><div><p className="eyebrow mb-2">{action.ownershipLabel}</p><p className="text-sm leading-6 text-[#c5c5bc]">{action.ownership}</p></div><div><p className="eyebrow mb-2">{action.evidenceLabel}</p><p className="text-sm leading-6 text-[#c5c5bc]">{action.evidence}</p></div></div>
              </div>
            </div>
            <div className="mt-8 grid gap-px bg-[#4a4b46] sm:grid-cols-3">{action.metrics.map((metric) => <div className="bg-ink p-5" key={metric.label}><p className="font-serif text-3xl tracking-[-0.05em]">{metric.value}</p><p className="eyebrow mt-1">{metric.label}</p><p className="mt-3 text-sm leading-6 text-[#9b9b92]">{metric.detail}</p></div>)}</div>
          </article>
          <CompactProject id="launchstack" project={content.work.launchstack} />
          <CompactProject id="taint-analysis" project={content.work.taint} />
        </div>
      </section>

      <section id="research" className="mx-auto max-w-[1240px] scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.research.index}>{content.research.label}</SectionLabel><div className="grid gap-8 border-y border-line py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow mb-4">{content.research.role}</p><h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">{content.research.title}</h2><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-ember">{content.research.dates}</p></div><div className="grid gap-7 sm:grid-cols-2">{content.research.items.map((item) => <div key={item.label}><p className="font-bold">{item.label}</p><p className="body-copy mt-2 text-sm">{item.text}</p></div>)}</div></div></section>

      <section id="leadership" className="border-y border-line bg-wash scroll-mt-6"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.leadership.index}>{content.leadership.label}</SectionLabel><div className="divide-y divide-line border-y border-line">{content.leadership.items.map((item) => <article className="leadership-row" key={item.title}><div><h2 className="font-serif text-2xl tracking-[-0.035em]">{item.title}</h2><p className="eyebrow mt-2">{item.eyebrow}</p></div><p className="body-copy text-sm">{item.description}</p><p className="font-mono whitespace-pre-line text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">{item.dates}</p></article>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-[1240px] scroll-mt-6 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12"><div><SectionLabel index={content.education.index}>{content.education.label}</SectionLabel><h2 className="font-serif text-4xl leading-none tracking-[-0.05em] sm:text-5xl">{content.education.university}</h2><p className="mt-5 text-lg font-bold">{content.education.degree}</p><p className="mt-2 text-sm text-[#676861]">{content.education.meta}</p></div><div className="border-t border-line pt-6"><p className="eyebrow mb-4">{content.education.courseworkLabel}</p><p className="max-w-3xl text-sm leading-7">{content.education.coursework}</p></div></section>

      <section className="border-t border-line bg-[#e9e6de]"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.skills.index}>{content.skills.label}</SectionLabel><div className="grid gap-x-10 gap-y-7 border-y border-line py-7 sm:grid-cols-2">{content.skills.items.map((skill) => <div key={skill.label}><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">{skill.label}</p><p className="mt-3 text-sm leading-6">{skill.value}</p></div>)}</div></div></section>

      <footer className="bg-ink text-paper"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.contact.index}>{content.contact.label}</SectionLabel><div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><h2 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl">{content.contact.title}</h2><a className="mt-8 inline-flex border-b border-ember pb-2 font-serif text-2xl tracking-[-0.03em] text-paper" href={content.links.email}>{content.contact.emailLabel} <span className="ml-3 text-ember">↗</span></a></div><div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b7b7ae] sm:text-right"><a className="nav-link" href={resumeHref}>{content.nav.resume} <ExternalMark /></a><a className="nav-link" href={content.links.github} target="_blank" rel="noreferrer">GitHub <ExternalMark /></a><a className="nav-link" href={content.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalMark /></a><a className="nav-link" href={content.links.email}>{content.hero.email} <ExternalMark /></a></div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#4a4b46] pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#85867e] sm:flex-row"><span>{content.contact.footer}</span><span>{content.contact.footerMeta}</span></div></div></footer>
    </main>
  );
}
