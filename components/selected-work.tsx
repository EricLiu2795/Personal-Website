import type { ReactNode } from "react";
import type { PortfolioContent, WorkProject } from "@/lib/content";

type ProjectEntry = WorkProject & { id: string; details?: ReactNode };

function ActionDetails({ action }: { action: PortfolioContent["work"]["action"] }) {
  return (
    <details className="project-details">
      <summary>{action.detailsLabel}<span aria-hidden="true">+</span></summary>
      <div className="border-t border-[#4a4b46] pt-6">
        <p className="eyebrow">{action.boundaryLabel}</p>
        <p className="mt-3 max-w-2xl font-serif text-2xl leading-tight">{action.boundaryText}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {action.steps.map(step => <div className="border-t border-[#4a4b46] pt-3" key={step.number}><p className="font-mono text-xs text-[#9b9b92]">{step.number}</p><p className="mt-2 font-bold">{step.title}</p><p className="mt-1 text-xs leading-5 text-[#9b9b92]">{step.detail}</p></div>)}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div><p className="eyebrow">{action.ownershipLabel}</p><p className="mt-2 text-sm leading-6 text-[#c5c5bc]">{action.ownership}</p></div>
          <div><p className="eyebrow">{action.evidenceLabel}</p><p className="mt-2 text-sm leading-6 text-[#c5c5bc]">{action.evidence}</p></div>
        </div>
        <div className="mt-6 grid gap-6 border-t border-[#4a4b46] pt-6 sm:grid-cols-3">
          {action.metrics.map(metric => <div key={metric.label}><p className="text-base font-bold">{metric.value}</p><p className="eyebrow mt-2">{metric.label}</p><p className="mt-3 text-sm leading-6 text-[#9b9b92]">{metric.detail}</p></div>)}
        </div>
      </div>
    </details>
  );
}

function ProjectOverview({ project, number }: { project: ProjectEntry; number: string }) {
  return (
    <article id={project.id} className="project-entry" aria-labelledby={`${project.id}-title`}>
      <div className="project-heading">
        <p className="project-number" aria-hidden="true">{number}</p>
        <div>
          <h3 id={`${project.id}-title`} className="project-title font-serif">{project.name}</h3>
          <p className="eyebrow mt-3">{project.kicker}</p>
        </div>
      </div>
      <div className="project-overview">
        <div>
          <p className="text-base font-bold leading-6">{project.title}</p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#c5c5bc]">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          {project.links && <div className="mt-6 flex flex-wrap gap-5">{project.links.map(link => <a className="arrow-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label}<span aria-hidden="true">↗</span></a>)}</div>}
        </div>
        <div className="border-l border-[#4a4b46] pl-5">
          <p className="eyebrow">{project.sideLabel}</p>
          <p className="mt-3 text-sm leading-6 text-[#c5c5bc]">{project.sideText}</p>
        </div>
      </div>
      {project.details}
    </article>
  );
}

export default function SelectedWork({ work }: { work: PortfolioContent["work"] }) {
  const action = work.action;
  const projects: ProjectEntry[] = [
    { ...work.launchstack, id: "launchstack" },
    { ...work.aftershock, id: "aftershock" },
    {
      id: "action-agent", name: action.title, kicker: action.kicker, title: action.boundaryText,
      description: action.description, tags: action.tags, sideLabel: action.sideLabel, sideText: action.sideText,
      links: [{ label: action.repo, href: "https://github.com/EricLiu2795/Personal-Action-Agent" }],
      details: <ActionDetails action={action} />,
    },
  ];

  return (
    <section id="work" className="bg-ink text-paper" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-7 flex items-center justify-between gap-4"><p className="eyebrow">{work.index}</p><p className="section-caption font-mono text-[10px] uppercase tracking-[0.16em]">{work.label}</p></div>
        <h2 id="work-title" className="font-serif text-3xl tracking-[-0.04em] sm:text-4xl">{work.title}</h2>
        <nav className="work-index" aria-label={work.navigationLabel}>
          {projects.map((project, index) => <a href={`#${project.id}`} key={project.id}><span className="font-mono text-sm text-ember">{String(index + 1).padStart(2, "0")}</span><span>{project.name}</span><span className="text-ember" aria-hidden="true">↘</span></a>)}
        </nav>
        {projects.map((project, index) => <ProjectOverview project={project} number={String(index + 1).padStart(2, "0")} key={project.id} />)}
      </div>
    </section>
  );
}
