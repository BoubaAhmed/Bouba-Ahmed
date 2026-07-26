import { useEffect, useState } from "react";
import { ChevronRight, Menu, Rocket, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";
import type { SupportedLanguage } from "../content/site";
import type { ThemeMode } from "../hooks/useTheme";
import { cn } from "../lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

type NavBarProps = {
  items: NavItem[];
  isProjectsView: boolean;
  language: SupportedLanguage;
  theme: ThemeMode;
  onLanguageChange: (language: SupportedLanguage) => void;
  onNavigate: (href: string) => void;
  onToggleTheme: () => void;
  themeLabel: string;
};

export function NavBar({
  items,
  isProjectsView,
  language,
  theme,
  onLanguageChange,
  onNavigate,
  onToggleTheme,
  themeLabel,
}: NavBarProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const activeHref = isProjectsView ? "#work" : activeSection;

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 18);

      if (isProjectsView) {
        return;
      }

      const sectionHrefs = items.filter((item) => item.href.startsWith("#")).map((item) => item.href);
      const currentSection =
        sectionHrefs.findLast((href) => {
          const element = document.querySelector(href);
          return element ? element.getBoundingClientRect().top <= 140 : false;
        }) ?? "/";

      setActiveSection(currentSection);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectsView, items]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b px-4 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
        scrolled
          ? "border-[color:color-mix(in_srgb,var(--line)_88%,transparent)] bg-[color:color-mix(in_srgb,var(--surface-strong)_82%,transparent)] shadow-[0_18px_40px_-28px_rgba(3,8,24,0.3)] backdrop-blur-xl"
          : "border-[color:color-mix(in_srgb,var(--line)_72%,transparent)] bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,auto)_1fr_auto] items-center gap-3 py-4">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            onNavigate("/");
          }}
          className="inline-flex cursor-pointer items-center gap-3 text-left"
        >
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-mark-core">
              <Rocket className="h-4 w-4" />
            </span>
          </span>
          <span className="logo-wordmark inline-flex whitespace-nowrap text-lg font-bold tracking-[-0.04em] sm:text-xl">
            <span className="logo-wordmark-main text-[var(--text)]">Bouba</span>
            <span className="logo-wordmark-dot text-[var(--acid)]">.</span>
            <span className="logo-wordmark-accent text-[var(--acid-2)]">Dev</span>
          </span>
        </button>

        <nav className="hidden items-center justify-center gap-3 lg:flex">
            {items.map((item) => {
              const isActive = item.href === activeHref;
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(item.href);
                  }}
                  className={cn(
                    "inline-flex h-8 cursor-pointer items-center px-1.5 text-sm font-medium transition",
                    isActive
                      ? "text-[var(--acid)]"
                      : "text-[var(--muted)] hover:text-[var(--acid)]",
                  )}
                >
                  <Icon
                    className={cn(
                      "mr-1.5 h-4 w-4 transition",
                      isActive ? "text-[var(--acid-2)]" : "text-[var(--muted)]",
                    )}
                  />
                  {item.label}
                </a>
              );
            })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher currentLanguage={language} onChangeLanguage={onLanguageChange} />
          <ThemeToggle theme={theme} label={themeLabel} onToggle={onToggleTheme} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center justify-self-end rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)] lg:hidden"
          aria-label={t("controls.navigation")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 cursor-default bg-black/35 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label={t("controls.navigation")}
          onClick={() => setOpen(false)}
        />

        <aside
          className={cn(
            "absolute right-0 top-0 flex h-dvh w-[min(22rem,calc(100vw-1rem))] flex-col border-l border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface-strong)_94%,transparent)] p-5 shadow-[-24px_0_70px_-42px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] pb-5">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onNavigate("/");
              }}
              className="inline-flex min-w-0 cursor-pointer items-center gap-3 text-left"
            >
              <span className="logo-mark shrink-0" aria-hidden="true">
                <span className="logo-mark-core">
                  <Rocket className="h-4 w-4" />
                </span>
              </span>
              <span className="logo-wordmark inline-flex min-w-0 whitespace-nowrap text-xl font-bold tracking-[-0.04em]">
                <span className="logo-wordmark-main text-[var(--text)]">Bouba</span>
                <span className="logo-wordmark-dot text-[var(--acid)]">.</span>
                <span className="logo-wordmark-accent text-[var(--acid-2)]">Dev</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)] transition hover:border-[var(--acid)] hover:text-[var(--acid)]"
              aria-label={t("controls.navigation")}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-6 grid gap-2">
            {items.map((item) => (
              (() => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      setOpen(false);
                      onNavigate(item.href);
                    }}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl border px-3 py-3 text-left text-sm font-medium transition",
                      item.href === activeHref
                        ? "border-[color:color-mix(in_srgb,var(--acid)_34%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] text-[var(--acid)]"
                        : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:bg-[color:color-mix(in_srgb,var(--surface)_68%,transparent)] hover:text-[var(--acid)]",
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          item.href === activeHref ? "text-[var(--acid-2)]" : "text-[var(--muted)]",
                        )}
                      />
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-[var(--acid)]" />
                  </a>
                );
              })()
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t border-[var(--line)] pt-5">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_58%,transparent)] p-3">
              <span className="text-sm font-medium text-[var(--muted)]">{t("controls.language")}</span>
              <LanguageSwitcher currentLanguage={language} onChangeLanguage={onLanguageChange} />
            </div>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_58%,transparent)] p-3">
              <span className="text-sm font-medium text-[var(--muted)]">{themeLabel}</span>
              <ThemeToggle theme={theme} label={themeLabel} onToggle={onToggleTheme} />
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
