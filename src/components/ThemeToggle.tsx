import { Moon, SunMedium } from "lucide-react";
import type { ThemeMode } from "../hooks/useTheme";

type ThemeToggleProps = {
  theme: ThemeMode;
  label: string;
  onToggle: () => void;
};

export function ThemeToggle({ theme, label, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)] transition hover:border-[var(--acid)] hover:text-[var(--acid)]"
    >
      {isDark ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
