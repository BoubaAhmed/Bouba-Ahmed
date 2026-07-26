import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { EducationItem, ProfileMeta } from "../content/site";

type ProfileProps = {
  educationItems: readonly EducationItem[];
  profile: ProfileMeta;
};

export function Profile({ educationItems, profile }: ProfileProps) {
  const { t } = useTranslation();

  return (
    <section id="profile" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--acid)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid)]">
          {t("sections.profile.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.profile.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.profile.description")}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <article className="relative rounded-lg">
          <div className="relative rounded-lg border border-[color:color-mix(in_srgb,var(--line)_70%,transparent)] bg-[color:color-mix(in_srgb,var(--surface-strong)_58%,transparent)] p-5 text-center shadow-[0_20px_45px_-34px_rgba(3,8,24,0.28)] backdrop-blur-xl md:text-left">
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-center">
              <div className="shrink-0">
                <div className="rounded-full bg-[linear-gradient(135deg,color-mix(in_srgb,var(--acid)_88%,white_12%),color-mix(in_srgb,var(--acid-2)_88%,white_12%))] p-1.5 shadow-[0_18px_34px_-22px_color-mix(in_srgb,var(--acid)_40%,transparent)]">
                  <img
                    src={profile.portrait}
                    alt={profile.name}
                    className="h-24 w-24 rounded-full border-4 border-[color:color-mix(in_srgb,var(--surface-strong)_76%,white_24%)] object-cover object-top md:h-28 md:w-28"
                  />
                </div>
              </div>

              <div className="min-w-0 space-y-2">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[color:color-mix(in_srgb,var(--text)_84%,var(--acid)_16%)] md:text-4xl">
                  {profile.name}
                </h3>
                <p className="flex items-center justify-center gap-2 text-base text-[var(--muted)] md:justify-start">
                  <Sparkles className="h-4 w-4 text-[var(--acid)]" />
                  {profile.role}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)] md:justify-start">
                  <MapPin className="h-4 w-4 text-[var(--acid-2)]" />
                  {profile.location}
                </div>
              </div>
            </div>

            <p className="mt-5 border-t border-[color:color-mix(in_srgb,var(--line)_62%,transparent)] pt-1 text-sm leading-7 text-[var(--muted)]">
              {profile.tagline}
            </p>
            <p className="pt-4 text-sm leading-7 text-[var(--muted)]">{profile.summary}</p>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="rounded-lg p-5 md:p-6">
            <div className="flex items-center gap-3">
              <span className="icon-tile bg-[color:color-mix(in_srgb,var(--acid)_18%,transparent)] text-[var(--acid)]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-[color:color-mix(in_srgb,var(--text)_80%,var(--acid)_20%)]">
                {t("sections.profile.education")}
              </h3>
            </div>

            <div className="mt-4 grid gap-3">
              {educationItems.map((item) => (
                <div
                  key={`${item.degree}-${item.period}`}
                  className="rounded-lg border border-[color:color-mix(in_srgb,var(--line)_68%,transparent)] bg-[color:color-mix(in_srgb,var(--surface-strong)_54%,transparent)] p-4 shadow-[0_14px_30px_-24px_rgba(3,8,24,0.24)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-[var(--text)]">{item.degree}</p>
                      <p className="text-sm text-[var(--muted)]">{item.institution}</p>
                    </div>
                    <p className="shrink-0 rounded-full border border-[color:color-mix(in_srgb,var(--line)_66%,#0ea5e9_34%)] px-2.5 py-1 text-xs font-medium text-[var(--acid-2)]">
                      {item.period}
                    </p>
                  </div>

                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="pt-2 text-[var(--acid)]">-</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

    </section>
  );
}
