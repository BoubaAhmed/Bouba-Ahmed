import { ArrowRight, ExternalLink, Mail, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { resumeLinks, type ProfileMeta, type SupportedLanguage } from "../content/site";

type HeroProps = {
  profile: ProfileMeta;
  onNavigate: (href: string) => void;
};

export function Hero({ profile, onNavigate }: HeroProps) {
  const { t, i18n } = useTranslation();
  const language = i18n.language as SupportedLanguage;
  const activeResumeHref = language === "fr" ? resumeLinks[0].href : resumeLinks[1].href;
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setShowScrollCue(window.scrollY < 48);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center py-14 md:py-20"
    >
      <div className="relative z-10 w-full">
        <div className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--acid)_30%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] px-3 py-1 text-sm font-semibold text-[var(--acid)]">
            <Sparkles className="h-4 w-4" />
            {t("hero.greeting", { name: "Bouba Ahmed" })}
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.55fr_0.96fr]">
          <div className="text-left w-full">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--text)] md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate("#work")} className="btn-primary">
                {t("hero.primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href={activeResumeHref} target="_blank" rel="noreferrer" className="btn-secondary">
                <ExternalLink className="h-4 w-4" />
                {t("hero.secondaryCta")}
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                <Mail className="h-4 w-4" />
                {t("hero.tertiaryCta")}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[20rem] lg:mr-0">
            <div className="absolute -right-2 bottom-8 z-20 rounded-2xl border border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface-strong)_90%,transparent)] px-4 py-3 shadow-[0_20px_50px_-34px_rgba(3,8,24,0.5)] backdrop-blur-xl">
              <p className="flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
                <MapPin className="h-4 w-4 text-[var(--acid-2)]" />
                {profile.location}
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-full border border-[color:color-mix(in_srgb,var(--line)_72%,var(--acid)_28%)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--acid)_16%,transparent),color-mix(in_srgb,var(--acid-2)_10%,transparent),color-mix(in_srgb,var(--surface-strong)_80%,transparent))] p-3 shadow-[0_34px_90px_-54px_rgba(3,8,24,0.8)]">
              <div className="h-full overflow-hidden rounded-full border border-[color:color-mix(in_srgb,var(--surface-strong)_72%,white_18%)] bg-[var(--surface-strong)]">
                <img src={profile.portrait} alt={profile.name} className="h-full w-full rounded-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "pointer-events-none fixed bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-[var(--muted)] transition-all duration-500 ease-out",
          showScrollCue ? "translate-y-0 opacity-80" : "translate-y-8 opacity-0",
        ].join(" ")}
        aria-hidden="true"
      >
        <span className="mb-2 text-[0.7rem] font-semibold tracking-[0.32em]">{t("hero.scroll")}</span>
        <span className="hero-scroll-indicator">
          <span className="hero-scroll-indicator__dot" />
        </span>
      </div>
    </section>
  );
}
