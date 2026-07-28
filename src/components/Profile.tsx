import {
  Bike,
  CheckCircle2,
  Code2,
  Fish,
  GraduationCap,
  MapPin,
  Plane,
  Settings2,
  Sparkles,
  TentTree,
  Trophy,
  UserRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import type { EducationItem, ProfileMeta } from "../content/site";

type ProfileProps = {
  educationItems: readonly EducationItem[];
  profile: ProfileMeta;
};

const hobbyIcons = [Trophy, Bike, Code2, TentTree, Fish, Plane] as const;

export function Profile({ educationItems, profile }: ProfileProps) {
  const { t } = useTranslation();
  const hobbies = t("sections.profile.hobbiesList", { returnObjects: true }) as string[];
  const preferences = t("sections.profile.preferences", { returnObjects: true }) as string[];

  return (
    <section id="profile" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--acid)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid)]">
          <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
          {t("sections.profile.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.profile.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.profile.description")}
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="profile-grid">
          <article className="rounded-lg border border-[color:color-mix(in_srgb,var(--line)_56%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_18%,transparent)] p-4 backdrop-blur-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[color:color-mix(in_srgb,var(--text)_84%,var(--acid)_16%)] md:text-4xl">
                  {profile.name}
                </h3>
                <p className="flex items-center gap-2 text-base font-medium text-[var(--acid)]">
                  <Sparkles className="h-4 w-4" />
                  {profile.role}
                </p>
                <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <MapPin className="h-4 w-4 text-[var(--acid-2)]" />
                  {profile.location}
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-[color:color-mix(in_srgb,var(--deep)_34%,var(--line))] bg-[color:color-mix(in_srgb,var(--deep)_8%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--deep)]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {t("sections.profile.availability")}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-lg font-semibold leading-8 text-[var(--text)]">{profile.tagline}</p>
              <p className="text-base leading-8 text-[var(--muted)]">{profile.summary}</p>
            </div>
          </article>

          <article className="rounded-lg border border-[color:color-mix(in_srgb,var(--line)_56%,transparent)] bg-[color:color-mix(in_srgb,var(--surface)_16%,transparent)] p-4 backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[color:color-mix(in_srgb,var(--acid)_26%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] text-[var(--acid)]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                {t("sections.profile.education")}
              </h3>
            </div>

            <div className="grid gap-3">
            {educationItems.map((item) => (
              <div
                key={`${item.degree}-${item.period}`}
                className="p-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text)]">{item.degree}</p>
                    <p className="text-sm text-[var(--muted)]">{item.institution}</p>
                  </div>
                  <p className="shrink-0 rounded-full border border-[color:color-mix(in_srgb,var(--line)_66%,var(--acid-2)_34%)] px-2.5 py-1 text-xs font-medium text-[var(--acid-2)]">
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

        <article className="profile-snapshot mt-6">
          <div className="profile-snapshot-header">
            <span className="profile-snapshot-icon">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <h3 className="profile-snapshot-title">{t("sections.profile.snapshot")}</h3>
          </div>

          <div className="profile-snapshot-grid">
            <div className="profile-snapshot-block">
              <p className="profile-snapshot-kicker">{t("sections.profile.hobbies")}</p>
              <div className="profile-hobbies">
                {hobbies.map((hobby, index) => {
                  const Icon = hobbyIcons[index] ?? Sparkles;

                  return (
                    <span key={hobby} className="profile-hobby">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {hobby}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="profile-snapshot-block">
              <p className="profile-snapshot-kicker">{t("sections.profile.languages")}</p>
              <div className="profile-language-list">
                {profile.languages.map((language) => (
                  <div key={language.name} className="profile-language-row">
                    <span>{language.name}</span>
                    <strong>{language.level}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-snapshot-block">
              <p className="profile-snapshot-kicker">{t("sections.profile.workPreferences")}</p>
              <ul className="profile-preferences">
                {preferences.map((preference) => (
                  <li key={preference}>
                    <Settings2 className="h-4 w-4" aria-hidden="true" />
                    <span>{preference}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>

    </section>
  );
}
