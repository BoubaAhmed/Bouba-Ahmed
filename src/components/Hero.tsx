import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { resumeLinks, type SupportedLanguage } from "../content/site";

type HeroProps = {
  email: string;
  onNavigate: (href: string) => void;
};

export function Hero({ email, onNavigate }: HeroProps) {
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
      className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center justify-center py-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="text-base font-medium text-[var(--muted)] md:text-lg">{t("hero.greeting", { name: "Bouba" })}</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.05em] text-[var(--text)] md:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("hero.description")}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => onNavigate("#work")} className="btn-primary">
            {t("hero.primaryCta")}
            <ArrowRight className="h-4 w-4" />
          </button>
          <a href={activeResumeHref} target="_blank" rel="noreferrer" className="btn-secondary">
            <ExternalLink className="h-4 w-4" />
            {t("hero.secondaryCta")}
          </a>
          <a href={`mailto:${email}`} className="btn-ghost">
            <Mail className="h-4 w-4" />
            {t("hero.tertiaryCta")}
          </a>
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
