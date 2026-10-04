import type { ReactNode } from "react";
import type { ExperienceItem, PortfolioContent } from "@/lib/content";
import SiteNavigation from "./site-navigation";
import SelectedWork from "./selected-work";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ExternalMark() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ children, index }: { children: ReactNode; index: string }) {
  return (
    <div className="mb-7 flex items-center justify-between gap-4">
      <p className="eyebrow">{index}</p>
      <p className="section-caption font-mono text-[10px] uppercase tracking-[0.16em]">{children}</p>
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

export default function PortfolioPage({ content }: { content: PortfolioContent }) {
  const pagePrefix = content.locale === "zh" ? `${basePath}/zh` : basePath;
  const englishHref = basePath ? `${basePath}/` : "/";
  const chineseHref = `${basePath}/zh/`;
  const sectionHref = (id: string) => `${pagePrefix}/#${id}`;
  const resumeHref = `${basePath}${content.links.resume}`;

  return (
    <>
      <a className="skip-link" href={sectionHref("experience")}>{content.locale === "zh" ? "跳转到专业经历" : "Skip to experience"}</a>
      <SiteNavigation locale={content.locale} labels={content.nav} pagePrefix={pagePrefix} englishHref={englishHref} chineseHref={chineseHref} resumeHref={resumeHref} />
      <main id="top" lang={content.locale === "zh" ? "zh-CN" : "en"}>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24 lg:px-12 lg:pb-20 lg:pt-24">
        <div>
          <p className="eyebrow mb-6">{content.hero.eyebrow}</p>
          <h1 className="hero-headline serif-balance max-w-3xl font-serif text-[clamp(3.1rem,6.5vw,6.5rem)] leading-[0.93] tracking-[-0.065em]">{content.locale === "zh" ? <>{content.hero.headline.split("AI Agent")[0]}<span className="whitespace-nowrap" lang="en">AI Agent</span>{content.hero.headline.split("AI Agent")[1]}</> : content.hero.headline}</h1>
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

      <SelectedWork work={content.work} />

      <section id="research" className="mx-auto max-w-[1240px] scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <SectionLabel index={content.research.index}>{content.research.label}</SectionLabel>
        <div className="divide-y divide-line border-y border-line">
          {content.research.entries.map(entry => (
            <article id={entry.id} className="grid gap-8 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20" key={entry.id}>
              <div>
                <h2 className="font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">{entry.title}</h2>
                <p className="mt-4 text-sm font-bold">{entry.role}</p>
                {entry.context && <p className="body-copy mt-3 text-sm">{entry.context}</p>}
                <p className="eyebrow mt-5">{entry.dates}</p>
              </div>
              <div className="grid gap-7 sm:grid-cols-2">{entry.items.map(item => <div key={item.label}><p className="font-bold">{item.label}</p><p className="body-copy mt-2 text-sm">{item.text}</p></div>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="leadership" className="border-y border-line bg-wash scroll-mt-6"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.leadership.index}>{content.leadership.label}</SectionLabel><div className="divide-y divide-line border-y border-line">{content.leadership.items.map((item) => <article className="leadership-row" key={item.title}><div><h2 className="font-serif text-2xl tracking-[-0.035em]">{item.title}</h2><p className="eyebrow mt-2">{item.eyebrow}</p></div><p className="body-copy text-sm">{item.description}</p><p className="font-mono whitespace-pre-line text-[10px] uppercase tracking-[0.1em] text-[#676861] sm:text-right">{item.dates}</p></article>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-[1240px] scroll-mt-6 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12"><div><SectionLabel index={content.education.index}>{content.education.label}</SectionLabel><h2 className="font-serif text-4xl leading-none tracking-[-0.05em] sm:text-5xl">{content.education.university}</h2><p className="mt-5 text-lg font-bold">{content.education.degree}</p><p className="mt-2 text-sm text-[#676861]">{content.education.meta}</p></div><div className="border-t border-line pt-6"><p className="eyebrow mb-4">{content.education.courseworkLabel}</p><p className="max-w-3xl text-sm leading-7">{content.education.coursework}</p></div></section>

      <section className="border-t border-line bg-[#e9e6de]"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.skills.index}>{content.skills.label}</SectionLabel><div className="grid gap-x-10 gap-y-7 border-y border-line py-7 sm:grid-cols-2">{content.skills.items.map((skill) => <div key={skill.label}><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ember">{skill.label}</p><p className="mt-3 text-sm leading-6">{skill.value}</p></div>)}</div></div></section>

      <footer className="bg-ink text-paper"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><SectionLabel index={content.contact.index}>{content.contact.label}</SectionLabel><div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><h2 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl">{content.contact.title}</h2><a className="mt-8 inline-flex border-b border-ember pb-2 font-serif text-2xl tracking-[-0.03em] text-paper" href={content.links.email}>{content.contact.emailLabel} <span className="ml-3 text-ember">↗</span></a></div><div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b7b7ae] sm:text-right"><a className="nav-link" href={resumeHref}>{content.nav.resume} <ExternalMark /></a><a className="nav-link" href={content.links.github} target="_blank" rel="noreferrer">GitHub <ExternalMark /></a><a className="nav-link" href={content.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalMark /></a><a className="nav-link" href={content.links.email}>{content.hero.email} <ExternalMark /></a></div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#4a4b46] pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#85867e] sm:flex-row"><span>{content.contact.footer}</span><span>{content.contact.footerMeta}</span></div></div></footer>
    </main>
    </>
  );
}
