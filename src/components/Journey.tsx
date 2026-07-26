import { Baby, Laptop2, Rocket, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const milestoneIcons = [Sparkles, Rocket, Laptop2, Baby] as const;

type Milestone = {
  year: string;
  title: string;
  description: string;
};

export function Journey() {
  const { t } = useTranslation();
  const milestones = t("journey.milestones", { returnObjects: true }) as Milestone[];

  return (
    <section id="journey" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--acid-2)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid-2)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid-2)]">
          {t("sections.journey.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.journey.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.journey.description")}
        </p>
      </div>

      <div className="journey-simple mt-12">
        {milestones.map((milestone, index) => {
          const Icon = milestoneIcons[index] ?? Sparkles;
          const step = String(index + 1).padStart(2, "0");

          return (
            <article key={`${milestone.year}-${milestone.title}`} className="journey-simple-item">
              <div className="journey-simple-index">{step}</div>
              <div className="journey-simple-icon">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="journey-simple-year">{milestone.year}</p>
                  <h3 className="journey-simple-title">{milestone.title}</h3>
                </div>
                <p className="journey-simple-description">{milestone.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
