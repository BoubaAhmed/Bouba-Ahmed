import {
  Award,
  BarChart3,
  Brain,
  BrainCircuit,
  Calendar,
  Cloud,
  Code2,
  Database,
  Languages,
  Lamp,
  Layers3,
  Layout,
  Lightbulb,
  Puzzle,
  Sparkles,
  Terminal,
  UserCheck,
  Users,
  Waypoints,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { CertificateItem } from "../content/site";
import type { LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siBootstrap,
  siCss,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJira,
  siLaravel,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostman,
  siPython,
  siReact,
  siTailwindcss,
  siTensorflow,
  siVercel,
} from "simple-icons";

type SkillCategoryKey = "web" | "ai_ml" | "devops" | "tools" | "soft";
type SkillTabKey = SkillCategoryKey | "certificates";
type SkillIconDef = { kind: "simple"; icon: SimpleIcon } | { kind: "lucide"; icon: LucideIcon };
type SkillItem = { name: string };
type SkillGroup = { title: string; items: SkillItem[] };

const skillsData: Record<SkillCategoryKey, SkillGroup[]> = {
  web: [
    {
      title: "Frontend",
      items: [{ name: "React JS" }, { name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }, { name: "Tailwind CSS" }, { name: "Bootstrap" }],
    },
    {
      title: "Backend",
      items: [{ name: "Node.js" }, { name: "Laravel" }, { name: "MongoDB" }, { name: "REST APIs" }, { name: "MySQL" }, { name: "PHP" }, { name: "Python" }, { name: "Java" }],
    },
  ],
  ai_ml: [
    { title: "", items: [{ name: "Machine Learning" }, { name: "Deep Learning" }, { name: "TensorFlow" }, { name: "NLP" }, { name: "Big Data" }, { name: "Data Science" }] },
  ],
  devops: [
    { title: "", items: [{ name: "Docker" }, { name: "GitHub" }, { name: "Git" }] },
  ],
  tools: [
    { title: "", items: [{ name: "VS Code" }, { name: "Figma" }, { name: "Postman" }, { name: "Eclipse" }, { name: "MySQL Workbench" }, { name: "StarUML" }, { name: "Jira" }, { name: "Vercel" }] },
  ],
  soft: [
    { title: "", items: [{ name: "Communication" }, { name: "Problem Solving" }, { name: "Time Management" }, { name: "Adaptability" }, { name: "Team Collaboration" }, { name: "Leadership" }] },
  ],
};

const skillIconMap: Record<string, { icon: SkillIconDef; color: string }> = {
  "React JS": { icon: { kind: "simple", icon: siReact }, color: "#61DAFB" },
  JavaScript: { icon: { kind: "simple", icon: siJavascript }, color: "#F7DF1E" },
  HTML: { icon: { kind: "simple", icon: siHtml5 }, color: "#E34F26" },
  CSS: { icon: { kind: "simple", icon: siCss }, color: "#1572B6" },
  "Tailwind CSS": { icon: { kind: "simple", icon: siTailwindcss }, color: "#06B6D4" },
  Bootstrap: { icon: { kind: "simple", icon: siBootstrap }, color: "#7952B3" },
  "Node.js": { icon: { kind: "simple", icon: siNodedotjs }, color: "#339933" },
  Laravel: { icon: { kind: "simple", icon: siLaravel }, color: "#FF2D20" },
  MongoDB: { icon: { kind: "simple", icon: siMongodb }, color: "#47A248" },
  "REST APIs": { icon: { kind: "lucide", icon: Waypoints }, color: "#FF6C37" },
  MySQL: { icon: { kind: "simple", icon: siMysql }, color: "#4479A1" },
  PHP: { icon: { kind: "simple", icon: siPhp }, color: "#777BB4" },
  Python: { icon: { kind: "simple", icon: siPython }, color: "#3776AB" },
  Java: { icon: { kind: "simple", icon: siOpenjdk }, color: "#EA2D2E" },
  "Machine Learning": { icon: { kind: "lucide", icon: Brain }, color: "#FF6F00" },
  "Deep Learning": { icon: { kind: "lucide", icon: Sparkles }, color: "#8A2BE2" },
  TensorFlow: { icon: { kind: "simple", icon: siTensorflow }, color: "#FF6F00" },
  NLP: { icon: { kind: "lucide", icon: Languages }, color: "#1E90FF" },
  "Big Data": { icon: { kind: "lucide", icon: Database }, color: "#DC143C" },
  "Data Science": { icon: { kind: "lucide", icon: BarChart3 }, color: "#4B0082" },
  Docker: { icon: { kind: "simple", icon: siDocker }, color: "#2496ED" },
  GitHub: { icon: { kind: "simple", icon: siGithub }, color: "#181717" },
  Git: { icon: { kind: "simple", icon: siGit }, color: "#F05032" },
  "VS Code": { icon: { kind: "lucide", icon: Terminal }, color: "#007ACC" },
  Figma: { icon: { kind: "simple", icon: siFigma }, color: "#F24E1E" },
  Postman: { icon: { kind: "simple", icon: siPostman }, color: "#FF6C37" },
  Eclipse: { icon: { kind: "lucide", icon: Lamp }, color: "#2C2255" },
  "MySQL Workbench": { icon: { kind: "lucide", icon: Database }, color: "#4479A1" },
  StarUML: { icon: { kind: "lucide", icon: Puzzle }, color: "#FFA500" },
  Jira: { icon: { kind: "simple", icon: siJira }, color: "#0052CC" },
  Vercel: { icon: { kind: "simple", icon: siVercel }, color: "#000000" },
  Communication: { icon: { kind: "lucide", icon: Users }, color: "#6C757D" },
  "Problem Solving": { icon: { kind: "lucide", icon: Lightbulb }, color: "#FFC107" },
  "Time Management": { icon: { kind: "lucide", icon: Calendar }, color: "#28A745" },
  Adaptability: { icon: { kind: "lucide", icon: Waypoints }, color: "#17A2B8" },
  "Team Collaboration": { icon: { kind: "lucide", icon: Users }, color: "#6F42C1" },
  Leadership: { icon: { kind: "lucide", icon: UserCheck }, color: "#DC3545" },
  "Natural Language Processing": { icon: { kind: "lucide", icon: Languages }, color: "#1E90FF" },
  "Windows Server": { icon: { kind: "lucide", icon: Cloud }, color: "#2563EB" },
};

const defaultSkillIcon = { icon: { kind: "lucide", icon: Code2 } as SkillIconDef, color: "#6B7280" };
const skillCategories: Array<{ key: SkillTabKey; icon: LucideIcon }> = [
  { key: "web", icon: Layout },
  { key: "ai_ml", icon: BrainCircuit },
  { key: "devops", icon: Terminal },
  { key: "tools", icon: Wrench },
  { key: "soft", icon: UserCheck },
  { key: "certificates", icon: Award },
];

function SkillVisual({ skillName }: { skillName: string }) {
  const { icon, color } = skillIconMap[skillName] ?? defaultSkillIcon;

  if (icon.kind === "simple") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px] shrink-0" style={{ color }}>
        <path d={icon.icon.path} />
      </svg>
    );
  }

  const Icon = icon.icon;
  return <Icon className="h-[18px] w-[18px] shrink-0" style={{ color }} aria-hidden="true" />;
}

type SkillsProps = {
  certificates: readonly CertificateItem[];
};

export function Skills({ certificates }: SkillsProps) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillTabKey>("web");
  const isCertificatesTab = activeCategory === "certificates";

  return (
    <section id="stack" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-5xl space-y-3 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--acid)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid)]">
          <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
          {t("sections.stack.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[var(--text)] md:text-4xl">
          {t("sections.stack.title")}
        </h2>
        <p className="mx-auto max-w-5xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.stack.description")}
        </p>
      </div>

      <div className="skills-simple mt-12">
        <div className="skills-tabs-wrap">
          <div className="skills-tabs no-scrollbar" role="tablist" aria-label={t("sections.stack.title")}>
            {skillCategories.map(({ key, icon: Icon }) => {
              const isActive = activeCategory === key;

              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`skills-tab ${isActive ? "skills-tab--active" : ""}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {key === "certificates" ? t("sections.stack.certificates") : t(`sections.stack.categories.${key}.label`)}
                </button>
              );
            })}
          </div>
        </div>

        <article className="skills-panel">
          {isCertificatesTab ? (
            <div className="skills-simple-tags skills-simple-tags--certificates">
              {certificates.map((item) => (
                item.url ? (
                  <a key={`${item.title}-${item.issuer}`} href={item.url} target="_blank" rel="noreferrer" className="skills-simple-tag">
                    <span className="skills-simple-icon">
                      <Award className="h-[18px] w-[18px] shrink-0 text-[var(--acid)]" aria-hidden="true" />
                    </span>
                    <span>{item.title}</span>
                  </a>
                ) : (
                  <span key={`${item.title}-${item.issuer}`} className="skills-simple-tag">
                    <span className="skills-simple-icon">
                      <Award className="h-[18px] w-[18px] shrink-0 text-[var(--acid)]" aria-hidden="true" />
                    </span>
                    <span>{item.title}</span>
                  </span>
                )
              ))}
            </div>
          ) : (
            <div className="skills-panel-content">
              <p className="skills-category-description">
                {t(`sections.stack.categories.${activeCategory}.description`)}
              </p>
              <div className="skills-groups">
                {skillsData[activeCategory].map((group) => (
                  <div key={`${activeCategory}-${group.title || "main"}`} className="skills-group">
                    {group.title ? <h3 className="skills-group-title">{group.title}</h3> : null}
                    <div className={`skills-simple-tags ${activeCategory === "soft" ? "skills-simple-tags--soft" : ""}`}>
                      {group.items.map((skill) => (
                        <span key={`${activeCategory}-${group.title}-${skill.name}`} className="skills-simple-tag">
                          <span className="skills-simple-icon">
                            <SkillVisual skillName={skill.name} />
                          </span>
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
