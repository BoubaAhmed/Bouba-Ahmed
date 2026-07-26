import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import type { ProjectMeta } from "../content/site";

type ProjectDetailPageProps = {
  project?: ProjectMeta;
  backLabel: string;
  codeLabel: string;
  liveLabel: string;
  challengeLabel: string;
  buildLabel: string;
  highlightsLabel: string;
  stackLabel: string;
  screenshotsLabel: string;
  notFoundLabel: string;
  onBack: () => void;
};

export function ProjectDetailPage({
  project,
  backLabel,
  codeLabel,
  liveLabel,
  challengeLabel,
  buildLabel,
  highlightsLabel,
  stackLabel,
  screenshotsLabel,
  notFoundLabel,
  onBack,
}: ProjectDetailPageProps) {
  if (!project) {
    return (
      <main className="relative z-10 px-4 pb-20 pt-20">
        <section className="mx-auto max-w-6xl pb-16 pt-10 lg:pt-16">
          <button
            type="button"
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--acid)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </button>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-8 text-center">
            <p className="text-base text-[var(--muted)]">{notFoundLabel}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative z-10 px-4 pb-20 pt-20">
      <section className="mx-auto max-w-6xl pb-16 pt-10 lg:pt-16">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--acid)]"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </button>

        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
            {project.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">{project.detail}</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-[var(--muted)]">
          <span>{project.year}</span>
          <span>/</span>
          <span>{project.category}</span>
        </div>

        {project.screenshots.length > 0 ? (
          <section className="project-detail-gallery mt-10" aria-label={screenshotsLabel}>
            <img src={project.screenshots[0]} alt={project.title} className="project-detail-gallery-main" />
            {project.screenshots.length > 1 ? (
              <div className="project-detail-gallery-grid">
                {project.screenshots.slice(1).map((screenshot, index) => (
                  <img key={screenshot} src={screenshot} alt={`${project.title} ${index + 2}`} />
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <article className="panel-rich rounded-xl p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{challengeLabel}</h3>
              <ul className="mt-4 space-y-3 text-base leading-8 text-[var(--muted)]">
                {project.challenge.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel-rich rounded-xl p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{buildLabel}</h3>
              <ul className="mt-4 space-y-3 text-base leading-8 text-[var(--muted)]">
                {project.build.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="space-y-5">
            <article className="panel-rich rounded-xl p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{highlightsLabel}</h3>
              <ul className="mt-4 space-y-3 text-base leading-8 text-[var(--muted)]">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel-rich rounded-xl p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{stackLabel}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <div className="flex flex-wrap gap-3">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                  <ArrowUpRight className="h-4 w-4" />
                  {liveLabel}
                </a>
              ) : null}
              {project.code ? (
                <a href={project.code} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Code2 className="h-4 w-4" />
                  {codeLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
