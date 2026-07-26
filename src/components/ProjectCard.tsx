import { ArrowUpRight } from "lucide-react";
import type { ProjectMeta } from "../content/site";

type ProjectCardProps = {
  project: ProjectMeta;
  detailLabel: string;
  onOpen: (projectId: string) => void;
};

export function ProjectCard({
  project,
  detailLabel,
  onOpen,
}: ProjectCardProps) {
  const cover = project.screenshots[0];

  return (
    <article className="project-card">
      <button type="button" onClick={() => onOpen(project.id)} className="project-card-cover" aria-label={detailLabel}>
        {cover ? <img src={cover} alt={project.title} /> : null}
      </button>

      <div className="project-card-body">
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          <span>{project.year}</span>
          <span className="text-[var(--line-strong)]">/</span>
          <span>{project.category}</span>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-summary">{project.summary}</p>
      </div>

      <div className="project-card-footer">
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="btn-secondary"
        >
          {detailLabel}
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <div className="project-card-stack">
          {project.stack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
