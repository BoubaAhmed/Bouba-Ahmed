import { ArrowUpRight, Code2 } from "lucide-react";
import type { ProjectMeta } from "../content/site";

type ProjectCardProps = {
  project: ProjectMeta;
  detailLabel: string;
  liveLabel: string;
  codeLabel: string;
  onOpen: (projectId: string) => void;
};

export function ProjectCard({
  project,
  detailLabel,
  liveLabel,
  codeLabel,
  onOpen,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
            <span>{project.year}</span>
            <span className="text-[var(--line-strong)]">/</span>
            <span>{project.category}</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-8 text-[var(--muted)]">{project.summary}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--text)] transition hover:border-[var(--acid)] hover:text-[var(--acid)]"
          aria-label={detailLabel}
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="skill-pill">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-1">
        <button type="button" onClick={() => onOpen(project.id)} className="btn-secondary">
          <ArrowUpRight className="h-4 w-4" />
          {detailLabel}
        </button>

        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
            <ArrowUpRight className="h-4 w-4" />
            {liveLabel}
          </a>
        ) : null}

        {project.code ? (
          <a href={project.code} target="_blank" rel="noreferrer" className="btn-ghost">
            <Code2 className="h-4 w-4" />
            {codeLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
