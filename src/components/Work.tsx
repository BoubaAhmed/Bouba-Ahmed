import { BrainCircuit, ChevronLeft, ChevronRight, Cpu, Database, FolderKanban, Globe2, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectCategoryGroup, ProjectMeta } from "../content/site";
import { ProjectCard } from "./ProjectCard";

const categoryOrder: ProjectCategoryGroup[] = ["web", "ai", "electronics", "data", "desktop"];
const categoryIcons: Record<ProjectCategoryGroup, LucideIcon> = {
  web: Globe2,
  ai: BrainCircuit,
  electronics: Cpu,
  data: Database,
  desktop: Monitor,
};

function projectHasCategory(project: ProjectMeta, category: ProjectCategoryGroup) {
  return typeof project.categoryGroup === "string"
    ? project.categoryGroup === category
    : project.categoryGroup.includes(category);
}

type WorkProps = {
  projects: readonly ProjectMeta[];
  onOpenProject: (projectId: string) => void;
};

export function Work({ projects, onOpenProject }: WorkProps) {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryGroup>("web");
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupedProjects = useMemo(
    () =>
      categoryOrder
        .map((category) => ({
          category,
          projects: projects.filter((project) => projectHasCategory(project, category)),
        }))
        .filter((group) => group.projects.length > 0),
    [projects],
  );
  const activeGroup = groupedProjects.find((group) => group.category === activeCategory) ?? groupedProjects[0];

  function scrollActiveCategory(direction: "previous" | "next") {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const amount = track.clientWidth;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (direction === "next") {
      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      track.scrollBy({ left: amount, behavior: "smooth" });
      return;
    }

    if (track.scrollLeft <= 8) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: -amount, behavior: "smooth" });
  }

  useEffect(() => {
    if (groupedProjects.length === 0 || groupedProjects.some((group) => group.category === activeCategory)) {
      return;
    }

    setActiveCategory(groupedProjects[0].category);
  }, [activeCategory, groupedProjects]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [activeCategory]);

  useEffect(() => {
    if (paused || !activeGroup) {
      return;
    }

    const interval = window.setInterval(() => scrollActiveCategory("next"), 4200);

    return () => window.clearInterval(interval);
  }, [activeGroup, paused]);

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl space-y-3 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--acid)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid)]">
          <FolderKanban className="h-3.5 w-3.5" aria-hidden="true" />
          {t("sections.work.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[var(--text)] md:text-4xl">
          {t("sections.work.title")}
        </h2>
        <p className="mx-auto max-w-5xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.work.description")}
        </p>
      </div>

      {activeGroup ? (
        <div className="project-groups mt-12">
          <div className="project-category-tabs no-scrollbar" role="tablist" aria-label={t("projects.category")}>
            {groupedProjects.map((group) => {
              const isActive = group.category === activeGroup.category;
              const CategoryIcon = categoryIcons[group.category];

              return (
                <button
                  key={group.category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`project-category-tab ${isActive ? "project-category-tab--active" : ""}`}
                  onClick={() => setActiveCategory(group.category)}
                >
                  <CategoryIcon className="h-4 w-4" aria-hidden="true" />
                  {t(`projectCategories.${group.category}`)}
                  <span className="project-category-count">{group.projects.length}</span>
                </button>
              );
            })}
          </div>

          <div className="project-group">
            <div className="project-group-header">
              <div>
                <p className="project-group-kicker">{t("projects.category")}</p>
                <h3 className="project-group-title">{t(`projectCategories.${activeGroup.category}`)}</h3>
              </div>
              <div className="project-group-actions">
                <button
                  type="button"
                  onClick={() => scrollActiveCategory("previous")}
                  className="project-carousel-button"
                  aria-label={t("projects.previous")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollActiveCategory("next")}
                  className="project-carousel-button"
                  aria-label={t("projects.next")}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div ref={trackRef} className="project-carousel no-scrollbar">
              {activeGroup.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={onOpenProject}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
