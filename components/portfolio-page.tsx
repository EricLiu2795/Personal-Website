import type { PortfolioContent } from "@/lib/content";
import SiteNavigation from "./site-navigation";
import SelectedWork from "./selected-work";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ComputationalMark() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 520 520" fill="none" className="computational-mark">
        <defs>
          <linearGradient
            id="field"
            x1="100"
            y1="100"
            x2="420"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9af0ff" />
            <stop offset=".45" stopColor="#b0a0ff" />
            <stop offset="1" stopColor="#dfbbff" />
          </linearGradient>
          <radialGradient id="halo">
            <stop stopColor="#7460ef" stopOpacity=".32" />
            <stop offset="1" stopColor="#7460ef" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>
        <circle cx="260" cy="260" r="250" fill="url(#halo)" />
        <g stroke="#7163b9" strokeOpacity=".35">
          <circle cx="260" cy="260" r="193" />
          <circle cx="260" cy="260" r="147" strokeDasharray="2 9" />
          <path d="M30 260H490M260 30V490" strokeDasharray="3 9" />
        </g>
        <g stroke="url(#field)">
          {Array.from({ length: 14 }, (_, i) => (
            <path
              key={i}
              d={`M ${96 + i * 7} ${115 + i * 3} C ${430 - i * 3} ${45 + i * 8}, ${93 + i * 5} ${449 - i * 5}, ${423 - i * 6} ${394 + i * 2}`}
              strokeOpacity={0.24 + i * 0.04}
            />
          ))}
          <path
            d="M226 166V297C226 341 175 353 153 318M294 166V334H369"
            strokeWidth="17"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            opacity=".8"
          />
          <path
            d="M226 166V297C226 341 175 353 153 318M294 166V334H369"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g fill="#cec3ff">
          <circle cx="111" cy="137" r="4" />
          <circle cx="413" cy="378" r="4" />
          <circle cx="431" cy="171" r="2" />
          <circle cx="117" cy="389" r="2" />
        </g>
        <path
          d="M77 96V77H96M424 77H443V96M443 424V443H424M96 443H77V424"
          stroke="#aba2ce"
          strokeOpacity=".55"
        />
      </svg>
      <p className="art-caption">
        SOFTWARE <span>×</span> SYSTEMS <span>×</span> RESEARCH
      </p>
    </div>
  );
}

export default function PortfolioPage({
  content,
}: {
  content: PortfolioContent;
}) {
  const zh = content.locale === "zh";
  const pagePrefix = zh ? `${basePath}/zh` : basePath;
  const resumeHref = `${basePath}${content.links.resume}`;
  return (
    <>
      <a className="skip-link" href="#main">
        {zh ? "跳转到主要内容" : "Skip to main content"}
      </a>
      <SiteNavigation
        locale={content.locale}
        labels={content.nav}
        pagePrefix={pagePrefix}
        englishHref={`${basePath}/`}
        chineseHref={`${basePath}/zh/`}
        resumeHref={resumeHref}
      />
      <main id="main" tabIndex={-1}>
        <section
          id="top"
          className="hero section-shell"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="hero-kicker">
              <span className="status-dot" />
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">{content.hero.greeting}</h1>
            <p className="hero-headline">{content.hero.headline}</p>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                {content.hero.exploreWork}
                <span aria-hidden="true">↓</span>
              </a>
              <a href={resumeHref} className="button button-secondary">
                {content.hero.resume}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-social">
              <a
                href={content.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <span aria-hidden="true">/</span>
              <a href={content.links.email}>
                {zh ? "联系我" : "Get in touch"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <span className="hero-location">Baltimore, MD</span>
            </div>
          </div>
          <ComputationalMark />
        </section>
        <div className="section-shell">
          <nav className="highlights" aria-label={content.snapshotLabel}>
            {content.snapshot
              .filter((item) => item.id !== "research")
              .map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span className="eyebrow">{item.label}</span>
                  <strong>{item.value}</strong>
                  <span className="highlight-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
          </nav>
        </div>
        <SelectedWork work={content.work} />
        <section
          id="research"
          className="section-shell section-space"
          aria-labelledby="research-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                02 / {zh ? "探索与验证" : "Investigation & validation"}
              </p>
              <h2 id="research-title">
                {zh ? "研究与论文" : "Research & publications"}
              </h2>
            </div>
            <p className="section-caption">{content.research.label}</p>
          </div>
          <div className="research-grid">
            {content.research.entries.map((entry, index) => (
              <a
                id={entry.id}
                className={`research-card ${index === 0 ? "publication-card" : ""}`}
                key={entry.id}
                href={entry.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby={`${entry.id}-title ${entry.id}-cta`}
              >
                <div className="research-top">
                  <p className="eyebrow">{entry.dates}</p>
                </div>
                <h3 id={`${entry.id}-title`}>{entry.title}</h3>
                <p className="research-role">{entry.role}</p>
                {entry.context && (
                  <p className="research-context">{entry.context}</p>
                )}
                <div className="research-details">
                  {entry.items.map((item) => (
                    <div key={item.label}>
                      <h4>{item.label}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <span id={`${entry.id}-cta`} className="arrow-link">
                    {entry.links[0].label}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">
                      {" "}
                      ({content.work.opensInNewTab})
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section
          id="experience"
          className="section-shell section-space"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                03 / {zh ? "实践与协作" : "Engineering & collaboration"}
              </p>
              <h2 id="experience-title">{content.experience.label}</h2>
            </div>
          </div>
          <div className="experience-list">
            {content.experience.items.map((item) => (
              <article id={item.id} className="experience-row" key={item.id}>
                <div>
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p className="date-label">
                    {item.dates}
                    <br />
                    {item.location}
                  </p>
                </div>
                <div>
                  {item.note && <p className="experience-note">{item.note}</p>}
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div id="leadership" className="teaching">
            <h3>{content.leadership.label}</h3>
            <div className="teaching-grid">
              {content.leadership.items.map((item) => (
                <article key={item.title}>
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="date-label">{item.dates}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="section-shell section-space">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  04 / {zh ? "基础与工具" : "Foundations & tools"}
                </p>
                <h2>{zh ? "关于我" : "A little more about me"}</h2>
              </div>
            </div>
            <div className="about-grid">
              <div className="education">
                <p className="eyebrow">{content.education.label}</p>
                <h3>{content.education.university}</h3>
                <p className="education-degree">{content.education.degree}</p>
                <p className="date-label">{content.education.meta}</p>
                <details className="coursework">
                  <summary>
                    {content.education.courseworkLabel}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{content.education.coursework}</p>
                </details>
              </div>
              <div id="skills" className="skills-list">
                {content.skills.items.map((skill) => (
                  <div key={skill.label}>
                    <h3>{skill.label}</h3>
                    <p>{skill.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="section-shell contact-section">
        <p className="eyebrow">05 / {content.contact.label}</p>
        <div className="contact-grid">
          <div>
            <h2>{content.contact.title}</h2>
            <a className="contact-email" href={content.links.email}>
              {content.contact.emailLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-links">
            <a href={resumeHref}>{content.nav.resume} ↗</a>
            <a
              href={content.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href={content.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="#top">{zh ? "返回顶部 ↑" : "Back to top ↑"}</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>{content.contact.footer}</span>
          <span>{content.contact.footerMeta}</span>
        </div>
      </footer>
    </>
  );
}
