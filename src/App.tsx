import { BriefcaseBusiness, FolderKanban, House, Layers3, Mail, UserRound } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BackToTop } from "./components/BackToTop";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { NavBar } from "./components/NavBar";
import { Profile } from "./components/Profile";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { localizedContent, type SupportedLanguage } from "./content/site";
import { useTheme } from "./hooks/useTheme";

type AppRoute =
  | { kind: "home" }
  | { kind: "project"; projectId: string };

function getCurrentRoute(): AppRoute {
  if (typeof window === "undefined") {
    return { kind: "home" };
  }

  const { pathname } = window.location;
  if (pathname.startsWith("/projects/")) {
    const projectId = pathname.replace("/projects/", "").trim();
    return projectId ? { kind: "project", projectId } : { kind: "home" };
  }
  return { kind: "home" };
}

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const language = i18n.language as SupportedLanguage;
  const content = localizedContent[language] ?? localizedContent.en;
  const pendingSectionRef = useRef<string | null>(null);
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navItems = useMemo(() => [
    { href: "/", label: t("nav.home"), icon: House },
    { href: "#profile", label: t("nav.profile"), icon: UserRound },
    { href: "#experience", label: t("nav.experience"), icon: BriefcaseBusiness },
    { href: "#work", label: t("nav.work"), icon: FolderKanban },
    { href: "#stack", label: t("nav.stack"), icon: Layers3 },
    // { href: "#certificates", label: t("nav.certificates"), icon: Award },
    { href: "#contact", label: t("nav.contact"), icon: Mail },
  ], [t]);

  const currentProject = route.kind === "project" ? content.featuredProjects.find((item) => item.id === route.projectId) : undefined;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    document.title = t("meta.title");

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t("meta.description"));
    }

    window.localStorage.setItem("portfolio-language", language);
  }, [language, t]);

  useEffect(() => {
    function handlePopState() {
      setRoute(getCurrentRoute());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 280);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [route]);

  useEffect(() => {
    if (route.kind !== "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const sectionTarget = pendingSectionRef.current ?? window.location.hash;
    if (!sectionTarget) {
      return;
    }

    const runScroll = () => {
      const element = document.querySelector(sectionTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      pendingSectionRef.current = null;
    };

    window.setTimeout(runScroll, 40);
  }, [route]);

  function navigateTo(href: string) {
    if (href.startsWith("/projects/")) {
      const projectId = href.replace("/projects/", "");
      window.history.pushState({}, "", href);
      pendingSectionRef.current = null;
      setRoute({ kind: "project", projectId });
      return;
    }

    if (href === "/" || href === "#home") {
      window.history.pushState({}, "", "/");
      pendingSectionRef.current = "#home";
      setRoute({ kind: "home" });
      return;
    }

    if (href.startsWith("#")) {
      window.history.pushState({}, "", `/${href}`);
      pendingSectionRef.current = href;
      setRoute({ kind: "home" });
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <ScrollProgress progress={scrollProgress} />
      <div className="space-backdrop" />
      <div className="space-nebula space-nebula--violet" />
      <div className="space-nebula space-nebula--blue" />
      <div className="space-nebula space-nebula--green" />
      <div className="space-stars space-stars--far" />
      <div className="space-stars space-stars--mid" />
      <div className="space-stars space-stars--near" />
      <div className="space-grid" />

      <NavBar
        items={navItems}
        isProjectsView={route.kind !== "home"}
        language={language}
        theme={theme}
        onLanguageChange={(nextLanguage) => void i18n.changeLanguage(nextLanguage)}
        onNavigate={navigateTo}
        onToggleTheme={toggleTheme}
        themeLabel={t("controls.theme")}
      />

      {route.kind === "project" ? (
        <ProjectDetailPage
          project={currentProject}
          backLabel={t("projects.backHome")}
          codeLabel={t("projects.code")}
          liveLabel={t("projects.live")}
          challengeLabel={t("projects.challenge")}
          buildLabel={t("projects.build")}
          highlightsLabel={t("projects.highlights")}
          stackLabel={t("projects.stack")}
          notFoundLabel={t("projects.notFound")}
          screenshotsLabel={t("projects.screenshots")}
          onBack={() => navigateTo("#work")}
        />
      ) : (
        <main className="relative z-10 px-4 pb-20 pt-20">
          <Hero profile={content.profile} onNavigate={navigateTo} />
          <Profile
            educationItems={content.educationItems}
            profile={content.profile}
          />
          <Journey />
          <Experience items={content.experienceItems} />
          <Work projects={content.homeProjects} onOpenProject={(projectId) => navigateTo(`/projects/${projectId}`)} />
          <Skills />
          <Certificates items={content.certifications} />
          <Contact profile={content.profile} />
        </main>
      )}

      <Footer onNavigate={navigateTo} />
      <BackToTop visible={showBackToTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
    </div>
  );
}

export default App;
