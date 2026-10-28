import type { ProjectArchitecture } from "@/lib/content";

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className={`architecture-flow architecture-flow-${steps.length}`}>
      {steps.map((step) => (
        <div className="architecture-node" key={step}>
          {step}
        </div>
      ))}
    </div>
  );
}

/** A conceptual map, not a per-component delivery-status claim. */
export default function ProjectArchitectureDiagram({
  content,
}: {
  content: ProjectArchitecture;
}) {
  return (
    <div
      className="project-visual architecture-visual"
      role="img"
      aria-label={content.description}
    >
      <div className="architecture" aria-hidden="true">
        <div className="architecture-inputs">
          {content.inputs.map((input) => (
            <span key={input}>{input}</span>
          ))}
        </div>
        <div className="architecture-lane weekly-lane">
          <div className="architecture-heading">
            <strong>{content.weekly.title}</strong>
            <span>{content.weekly.status}</span>
          </div>
          <Flow steps={content.weekly.steps} />
        </div>
        <div className="architecture-lane vantage-lane">
          <div className="architecture-heading">
            <strong>{content.vantage.title}</strong>
            <span>{content.vantage.status}</span>
          </div>
          <Flow steps={content.vantage.steps} />
        </div>
        <p className="architecture-maturity">{content.maturity}</p>
      </div>
    </div>
  );
}
