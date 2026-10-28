import type { PortfolioContent, WorkProject } from "@/lib/content";

function ProjectIllustration({ kind }: { kind: "launchstack" | "aftershock" }) {
  return (
    <div className={`project-visual ${kind}-visual`} aria-hidden="true">
      {kind === "launchstack" ? (
        <>
          <div className="pipeline-inputs">
            <span />
            <span />
            <span />
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-core">
            L<span>↗</span>
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-output">
            <i />
            <i />
            <i />
            <i />
          </div>
        </>
      ) : (
        <svg viewBox="0 0 500 190" fill="none">
          <g stroke="#9fb8d1" strokeOpacity=".35">
            <path d="M0 25L500 153M0 102L500 46M34 190L197 0M140 190L337 0M341 190L455 0M0 161L500 100M0 56L500 183" />
            <path d="M0 30H500M0 85H500M0 140H500M90 0V190M215 0V190M340 0V190M465 0V190" />
          </g>
          <circle cx="250" cy="91" r="64" stroke="#72ced6" strokeOpacity=".1" />
          <circle
            cx="250"
            cy="91"
            r="43"
            stroke="#72ced6"
            strokeOpacity=".18"
          />
          <circle cx="250" cy="91" r="22" stroke="#72ced6" strokeOpacity=".3" />
          <path
            d="M85 139L157 127L203 83L250 91L329 72L407 44"
            stroke="#9aeaf2"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          <g fill="#8cdee5">
            <circle cx="85" cy="139" r="4" />
            <circle cx="250" cy="91" r="6" />
            <circle cx="407" cy="44" r="4" />
          </g>
          <path d="M242 91H258M250 83V99" stroke="#101522" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  id,
  number,
}: {
  project: WorkProject;
  id: "launchstack" | "aftershock";
  number: string;
}) {
  return (
    <article id={id} className="project-card" aria-labelledby={`${id}-title`}>
      <ProjectIllustration kind={id} />
      <div className="project-card-body">
        <div className="project-heading">
          <p className="eyebrow">{project.kicker}</p>
          <span className="project-number">{number}</span>
        </div>
        <h3 id={`${id}-title`}>{project.name}</h3>
        <p className="project-subtitle">{project.title}</p>
        <p className="body-copy">{project.description}</p>
        {project.highlights && (
          <div className="project-highlights">
            {project.highlights.map((item) => (
              <div key={item.label}>
                <h4>{item.label}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}
        <div className="project-note">
          <p className="eyebrow">{project.sideLabel}</p>
          <p>{project.sideText}</p>
        </div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.links?.map((link) => (
            <a
              className="arrow-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.href}
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork({
  work,
}: {
  work: PortfolioContent["work"];
}) {
  const action = work.action;
  return (
    <section
      id="work"
      className="section-shell section-space"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{work.index}</p>
          <h2 id="work-title">{work.title}</h2>
        </div>
        <p className="section-caption">{work.label}</p>
      </div>
      <div className="projects-grid">
        <ProjectCard project={work.launchstack} id="launchstack" number="01" />
        <ProjectCard project={work.aftershock} id="aftershock" number="02" />
      </div>
      <details id="action-agent" className="secondary-project">
        <summary>
          <span>
            <span className="eyebrow">{action.kicker}</span>
            <strong>{action.title}</strong>
          </span>
          <span className="disclosure-plus" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="secondary-project-content">
          <p>{action.description}</p>
          <p className="secondary-boundary">{action.boundaryText}</p>
          <div className="secondary-columns">
            <div>
              <h3>{action.ownershipLabel}</h3>
              <p>{action.ownership}</p>
            </div>
            <div>
              <h3>{action.evidenceLabel}</h3>
              <p>{action.evidence}</p>
            </div>
          </div>
          <div className="tags">
            {action.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <a
            className="arrow-link"
            href="https://github.com/EricLiu2795/Personal-Action-Agent"
            target="_blank"
            rel="noopener noreferrer"
          >
            {action.repo}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </details>
    </section>
  );
}
