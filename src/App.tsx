import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  FolderKanban,
  House,
  Layers3,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionIntro } from "./components/SectionIntro";
import {
  certifications,
  educationItems,
  experienceItems,
  featuredProjects,
  floatingTech,
  homeProjects,
  languageItems,
  professionalStrengths,
  profile,
  resumeLinks,
  skillGroups,
  type SupportedLanguage,
} from "./content/site";
import { useTheme } from "./hooks/useTheme";

type AppRoute =
  | { kind: "home" }
  | { kind: "projects" }
  | { kind: "project"; projectId: string };

const heroPositions = [
  "left-[6%] top-[20%]",
  "left-[16%] top-[10%]",
  "left-[23%] bottom-[8%]",
  "right-[7%] top-[22%]",
  "right-[18%] top-[8%]",
  "right-[24%] bottom-[12%]",
  "left-[34%] top-[14%]",
  "left-[40%] bottom-[10%]",
  "right-[35%] top-[16%]",
  "right-[42%] bottom-[14%]",
] as const;

function getCurrentRoute(): AppRoute {
  if (typeof window === "undefined") {
    return { kind: "home" };
  }

  const { pathname } = window.location;

  if (pathname === "/projects") {
    return { kind: "projects" };
  }

  if (pathname.startsWith("/projects/")) {
    const projectId = pathname.replace("/projects/", "").trim();
    return projectId ? { kind: "project", projectId } : { kind: "projects" };
  }

  return { kind: "home" };
}

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const language = i18n.language as SupportedLanguage;
  const isArabic = language === "ar";
  const pendingSectionRef = useRef<string | null>(null);
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home"), icon: House },
    { href: "#profile", label: t("nav.profile"), icon: UserRound },
    { href: "/projects", label: t("nav.work"), icon: FolderKanban },
    { href: "#stack", label: t("nav.stack"), icon: Layers3 },
    { href: "#experience", label: t("nav.experience"), icon: BriefcaseBusiness },
    { href: "#contact", label: t("nav.contact"), icon: Mail },
  ];

  const activeResumeHref = language === "fr" ? resumeLinks[0].href : resumeLinks[1].href;
  const currentProject = route.kind === "project" ? featuredProjects.find((item) => item.id === route.projectId) : undefined;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = t("meta.title");

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t("meta.description"));
    }

    window.localStorage.setItem("portfolio-language", language);
  }, [isArabic, language, t]);

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
    if (href === "/projects") {
      window.history.pushState({}, "", "/projects");
      pendingSectionRef.current = null;
      setRoute({ kind: "projects" });
      return;
    }

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
      <div className="site-orb site-orb-a" />
      <div className="site-orb site-orb-b" />
      <div className="site-grid" />

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

      {route.kind === "projects" ? (
        <ProjectsPage
          projects={featuredProjects}
          detailLabel={t("projects.view")}
          codeLabel={t("projects.code")}
          liveLabel={t("projects.live")}
          onBack={() => navigateTo("/")}
          onOpenProject={(projectId) => navigateTo(`/projects/${projectId}`)}
          title={t("projects.allTitle")}
          description={t("projects.allDescription")}
          backLabel={t("projects.backHome")}
        />
      ) : route.kind === "project" ? (
        <ProjectDetailPage
          project={currentProject}
          backLabel={t("projects.backProjects")}
          codeLabel={t("projects.code")}
          liveLabel={t("projects.live")}
          challengeLabel={t("projects.challenge")}
          buildLabel={t("projects.build")}
          highlightsLabel={t("projects.highlights")}
          stackLabel={t("projects.stack")}
          notFoundLabel={t("projects.notFound")}
          onBack={() => navigateTo("/projects")}
        />
      ) : (
        <main className="relative z-10 px-4 pb-20">
          <section
            id="home"
            className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center justify-center py-20"
          >
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              {floatingTech.map((item, index) => (
                <item.icon
                  key={item.id}
                  className={`tech-background ${heroPositions[index]} h-7 w-7`}
                />
              ))}
            </div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <p className="text-sm font-medium tracking-[0.18em] text-[var(--muted)]">
                {profile.role}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--text)] md:text-6xl">
                {t("hero.title")}
              </h1>
              <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {t("hero.description")}
              </p>
              <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">
                {profile.availability}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button type="button" onClick={() => navigateTo("#work")} className="btn-primary">
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
          </section>

          <section id="work" className="section-shell">
            <SectionIntro title={t("sections.work.title")} description={t("sections.work.description")} />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {homeProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  detailLabel={t("projects.view")}
                  liveLabel={t("projects.live")}
                  codeLabel={t("projects.code")}
                  onOpen={(projectId) => navigateTo(`/projects/${projectId}`)}
                />
              ))}
            </div>
          </section>

          <section id="profile" className="section-shell">
            <SectionIntro title={t("sections.profile.title")} description={t("sections.profile.description")} />
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <article className="panel-rich rounded-xl p-6">
                <img
                  src={profile.portrait}
                  alt={profile.name}
                  className="h-[320px] w-full rounded-xl object-cover object-top"
                />
                <div className="mt-5 space-y-2">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{profile.name}</h3>
                  <p className="text-base text-[var(--muted)]">{profile.tagline}</p>
                  <p className="text-sm text-[var(--muted)]">{profile.location}</p>
                </div>
              </article>

              <div className="grid gap-5">
                <article className="panel-rich rounded-xl p-6">
                  <p className="text-base leading-8 text-[var(--muted)]">{profile.summary}</p>
                </article>

                <div className="grid gap-5 md:grid-cols-2">
                  <article className="panel-rich rounded-xl p-6">
                    <h3 className="text-lg font-semibold">{t("sections.profile.education")}</h3>
                    <div className="mt-4 space-y-4">
                      {educationItems.map((item) => (
                        <div key={`${item.degree}-${item.period}`} className="space-y-1">
                          <p className="text-sm text-[var(--muted)]">{item.period}</p>
                          <p className="font-medium text-[var(--text)]">{item.degree}</p>
                          <p className="text-sm text-[var(--muted)]">{item.institution}</p>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="panel-rich rounded-xl p-6">
                    <h3 className="text-lg font-semibold">{t("sections.profile.strengths")}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {professionalStrengths.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{t("sections.profile.languages")}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {languageItems.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>

                <article className="panel-rich rounded-xl p-6">
                  <h3 className="text-lg font-semibold">{t("sections.profile.certifications")}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certifications.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="experience" className="section-shell">
            <SectionIntro title={t("sections.experience.title")} description={t("sections.experience.description")} />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {experienceItems.map((item) => (
                <article key={`${item.title}-${item.period}`} className="panel-rich rounded-xl p-6">
                  <p className="text-sm text-[var(--muted)]">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.place}</p>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="stack" className="section-shell">
            <SectionIntro title={t("sections.stack.title")} description={t("sections.stack.description")} />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.id} className="panel-rich rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="icon-tile">
                      <group.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                      <p className="mt-3 text-base leading-8 text-[var(--muted)]">{group.text}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section-shell">
            <SectionIntro title={t("sections.contact.title")} description={t("sections.contact.description")} />
            <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </span>
                <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 transition hover:text-[var(--acid)]">
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer copy={t("footer.copy")} onNavigate={navigateTo} />
      <BackToTop visible={showBackToTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
    </div>
  );
}

export default App;
