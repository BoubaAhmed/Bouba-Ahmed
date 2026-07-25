import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { SectionIntro } from "./SectionIntro";
import type { ProjectMeta } from "../content/site";

type ProjectsPageProps = {
  projects: readonly ProjectMeta[];
  detailLabel: string;
  codeLabel: string;
  liveLabel: string;
  onBack: () => void;
  onOpenProject: (projectId: string) => void;
  title: string;
  description: string;
  backLabel: string;
};

export function ProjectsPage({
  projects,
  detailLabel,
  codeLabel,
  liveLabel,
  onBack,
  onOpenProject,
  title,
  description,
  backLabel,
}: ProjectsPageProps) {
  return (
    <main className="relative z-10 px-4 pb-20">
      <section className="mx-auto max-w-6xl pb-16 pt-10 lg:pt-16">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--acid)]"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </button>

        <SectionIntro title={title} description={description} />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              detailLabel={detailLabel}
              liveLabel={liveLabel}
              codeLabel={codeLabel}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
