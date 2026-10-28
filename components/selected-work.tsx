import Image from "next/image";
import type { PortfolioContent, WorkProject } from "@/lib/content";
import ProjectArchitectureDiagram from "./project-architecture";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ProjectVisual({
  id,
  work,
}: {
  id: "launchstack" | "aftershock";
  work: PortfolioContent["work"];
}) {
  if (id === "launchstack")
    return <ProjectArchitectureDiagram content={work.architecture} />;
  return (
    <div className="project-visual aftershock-visual">
      <Image
        src={`${basePath}/projects/aftershock-dashboard.webp`}
        width={1854}
        height={886}
        sizes="(max-width: 767px) calc(100vw - 40px), 550px"
        alt={work.demoImageAlt}
        className="project-screenshot"
      />
      <p className="project-visual-caption">{work.demoImageCaption}</p>
    </div>
  );
}

function ProjectCard({
  project,
  id,
  number,
  work,
}: {
  project: WorkProject;
  id: "launchstack" | "aftershock";
  number: string;
  work: PortfolioContent["work"];
}) {
  const destination = project.links[0];
  return (
    <a
      id={id}
      className="project-card"
      href={destination.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={`${id}-title ${id}-cta`}
    >
      <ProjectVisual id={id} work={work} />
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
          <span id={`${id}-cta`} className="arrow-link">
            {destination.label}
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> ({work.opensInNewTab})</span>
          </span>
        </div>
      </div>
    </a>
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
        <ProjectCard
          project={work.launchstack}
          id="launchstack"
          number="01"
          work={work}
        />
        <ProjectCard
          project={work.aftershock}
          id="aftershock"
          number="02"
          work={work}
        />
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
