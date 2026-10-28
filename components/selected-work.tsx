import Image from "next/image";
import type { PortfolioContent, WorkProject } from "@/lib/content";
import ProjectArchitectureDiagram from "./project-architecture";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
type WorkContent = PortfolioContent["work"];

function ProjectCTA({
  project,
  id,
  newTabLabel,
}: {
  project: WorkProject;
  id: string;
  newTabLabel: string;
}) {
  return (
    <span id={`${id}-cta`} className="arrow-link">
      {project.links[0].label}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> ({newTabLabel})</span>
    </span>
  );
}

function LaunchStackFeature({ work }: { work: WorkContent }) {
  const project = work.launchstack;
  return (
    <section
      id="work"
      className="section-shell section-space featured-work"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{work.index}</p>
          <h2 id="work-title">{work.title}</h2>
        </div>
        <p className="section-caption">{work.label}</p>
      </div>
      <a
        id="launchstack"
        className="project-surface launchstack-feature"
        href={project.links[0].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="launchstack-title launchstack-cta"
      >
        <div className="feature-introduction">
          <p className="eyebrow">{project.kicker}</p>
          <h3 id="launchstack-title">{project.name}</h3>
          <p className="feature-positioning">{project.title}</p>
          <p className="body-copy">{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="feature-link">
            <ProjectCTA
              project={project}
              id="launchstack"
              newTabLabel={work.opensInNewTab}
            />
          </div>
        </div>
        <div className="feature-efforts">
          {project.highlights?.map((effort, index) => (
            <div
              className={`effort-module ${index === 1 ? "effort-design" : "effort-report"}`}
              key={effort.label}
            >
              <div className="effort-heading">
                <span className="effort-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <p className="eyebrow">{effort.eyebrow}</p>
              </div>
              <h4>{effort.label}</h4>
              <p className="effort-description">{effort.text}</p>
              <p className="effort-detail">{effort.detail}</p>
            </div>
          ))}
        </div>
      </a>
      <details className="technical-design">
        <summary>
          <span>{work.technicalDesignLabel}</span>
          <span className="disclosure-plus" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="technical-design-content">
          <p>{work.technicalDesignDescription}</p>
          <ProjectArchitectureDiagram content={work.architecture} />
        </div>
      </details>
    </section>
  );
}

function HackathonSpotlight({ work }: { work: WorkContent }) {
  const project = work.aftershock;
  const spotlight = work.spotlight;
  return (
    <section
      id="hackathon"
      className="section-shell section-space hackathon-spotlight"
      aria-labelledby="hackathon-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{spotlight.index}</p>
          <h2 id="hackathon-title">{spotlight.title}</h2>
        </div>
        <p className="section-caption">{spotlight.label}</p>
      </div>
      <a
        id="aftershock"
        className="project-surface aftershock-feature"
        href={project.links[0].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="aftershock-title aftershock-cta"
      >
        <div className="spotlight-evidence">
          <div className="spotlight-award">
            <p className="eyebrow">{project.sideLabel}</p>
            <p>{project.sideText}</p>
          </div>
          <Image
            src={`${basePath}/projects/aftershock-dashboard.webp`}
            width={1854}
            height={886}
            sizes="(max-width: 767px) calc(100vw - 80px), (max-width: 1100px) calc(100vw - 128px), 650px"
            alt={work.demoImageAlt}
            className="project-screenshot"
          />
          <p className="project-visual-caption">{work.demoImageCaption}</p>
        </div>
        <div className="spotlight-story">
          <p className="eyebrow">{project.kicker}</p>
          <h3 id="aftershock-title">{project.name}</h3>
          <p className="spotlight-positioning">{project.title}</p>
          <p className="body-copy">{project.description}</p>
          <dl className="spotlight-facts">
            <div>
              <dt>{spotlight.teamLabel}</dt>
              <dd>{spotlight.teamValue}</dd>
            </div>
            <div>
              <dt>{spotlight.durationLabel}</dt>
              <dd>{spotlight.durationValue}</dd>
            </div>
          </dl>
          <div className="spotlight-link">
            <ProjectCTA
              project={project}
              id="aftershock"
              newTabLabel={work.opensInNewTab}
            />
          </div>
        </div>
      </a>
      <div className="more-projects">
        <p className="eyebrow">{work.moreProjectsLabel}</p>
        <SecondaryProject action={work.action} />
      </div>
    </section>
  );
}

function SecondaryProject({ action }: { action: WorkContent["action"] }) {
  return (
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
  );
}

export default function SelectedWork({ work }: { work: WorkContent }) {
  return (
    <>
      <LaunchStackFeature work={work} />
      <HackathonSpotlight work={work} />
    </>
  );
}
