import { useTranslation } from "react-i18next";
import type { ExperienceItem } from "../content/site";

type ExperienceProps = {
  items: readonly ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  const { t } = useTranslation();

  return (
    <section id="experience" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--deep)_34%,var(--line))] bg-[color:color-mix(in_srgb,var(--deep)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--deep)]">
          {t("sections.experience.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.experience.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.experience.description")}
        </p>
      </div>

      <div className="experience-process mt-12">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <article key={`${item.title}-${item.period}`} className="experience-step">
              <div className="experience-step-marker">
                <span className="experience-step-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="experience-step-icon">
                  <Icon className="h-4 w-4" />
                </span>
              </div>

              <div className="experience-step-body">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="experience-step-period">{item.period}</p>
                    <h3 className="experience-step-title">{item.title}</h3>
                    <p className="experience-step-place">{item.place}</p>
                  </div>
                </div>

                <p className="experience-step-text">{item.text}</p>
                <ul className="experience-step-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
