import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const activeHref = isProjectsView ? "/projects" : "/";
  void theme;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-4 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            onNavigate("/");
          }}
          className="inline-flex items-center gap-3 text-left"
        >
          <span className="logo-mark">
            <span className="logo-mark-core">AB</span>
          </span>
          <span className="hidden text-lg font-semibold tracking-[-0.04em] text-[var(--text)] sm:block">
            Bouba.Dev
          </span>
        </button>

        <nav className="hidden items-center justify-center gap-3 lg:flex">
            {items.map((item) => {
              const isActive = item.href === activeHref;
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => onNavigate(item.href)}
                  className={cn(
                    "inline-flex h-9 items-center rounded-lg px-2 text-[11px] font-medium transition",
                    isActive
                      ? "bg-[color-mix(in_srgb,var(--acid)_10%,white)] text-[var(--acid)] dark:bg-[color-mix(in_srgb,var(--acid)_18%,transparent)]"
                      : "text-[var(--muted)] hover:bg-[color-mix(in_srgb,var(--acid)_6%,white)] hover:text-[var(--acid)] dark:hover:bg-[color-mix(in_srgb,var(--acid)_10%,transparent)]",
                  )}
                >
                  <Icon
                    className={cn(
                      "mr-1.5 h-3.5 w-3.5 transition",
                      isActive ? "text-[var(--acid-2)]" : "text-[var(--muted)]",
                    )}
                  />
                  {item.label}
                </button>
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
          className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)] lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mb-3 space-y-5 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-5 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.18)]">
          <nav className="grid gap-2">
            {items.map((item) => (
              (() => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      onNavigate(item.href);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition",
                      item.href === activeHref
                        ? "bg-[color-mix(in_srgb,var(--acid)_10%,white)] text-[var(--acid)] dark:bg-[color-mix(in_srgb,var(--acid)_18%,transparent)]"
                        : "text-[var(--muted)] hover:bg-[color-mix(in_srgb,var(--acid)_8%,white)] hover:text-[var(--acid)] dark:hover:bg-[color-mix(in_srgb,var(--acid)_10%,transparent)]",
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
                  </button>
                );
              })()
            ))}
          </nav>

          <div className="flex items-center justify-between gap-3">
            <LanguageSwitcher currentLanguage={language} onChangeLanguage={onLanguageChange} />
            <ThemeToggle theme={theme} label={themeLabel} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}
