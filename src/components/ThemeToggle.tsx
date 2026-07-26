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
      className="inline-flex py-2.5 gap-2 cursor-pointer items-center justify-center rounded-lg border border-[var(--line)] px-3 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--acid)] hover:text-[var(--acid)]"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
