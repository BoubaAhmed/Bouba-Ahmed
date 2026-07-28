import { startTransition, useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { SupportedLanguage } from "../content/site";
import { cn } from "../lib/utils";

type LanguageSwitcherProps = {
  currentLanguage: SupportedLanguage;
  onChangeLanguage: (language: SupportedLanguage) => void;
};

const languages: Array<{
  code: SupportedLanguage;
  flag: string;
  label: string;
  color: string;
}> = [
  { code: "en", flag: "GB", label: "English", color: "var(--acid)" },
  { code: "fr", flag: "FR", label: "Francais", color: "var(--acid-2)" },
];

export function LanguageSwitcher({
  currentLanguage,
  onChangeLanguage,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const current = languages.find((language) => language.code === currentLanguage) ?? languages[0];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    return () => window.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <a
        href="#language"
        onClick={(event) => {
          event.preventDefault();
          setOpen((currentState) => !currentState);
        }}
        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--line)] px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--acid)] hover:text-[var(--acid)]"
      >
        <span className="text-[0.7rem] font-semibold leading-none tracking-[0.18em]">{current.flag}</span>
        <span className="hidden md:block">{current.label}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </a>

      {open ? (
        <div className="absolute right-0 z-30 mt-2 min-w-44 overflow-hidden rounded-lg border border-[color:color-mix(in_srgb,var(--code)_65%,var(--line))] bg-[var(--surface-strong)] p-2 shadow-[0_18px_50px_-28px_rgba(var(--shadow-rgb),0.28)]">
          {languages.map((language) => (
            <a
              key={language.code}
              href={`#lang-${language.code}`}
              onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                startTransition(() => onChangeLanguage(language.code));
              }}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition",
                currentLanguage === language.code
                  ? "bg-[color-mix(in_srgb,var(--code)_18%,white)] text-[var(--text)] dark:bg-[color-mix(in_srgb,var(--acid)_18%,transparent)]"
                  : "text-[var(--muted)] hover:bg-[color-mix(in_srgb,var(--code)_12%,white)] hover:text-[var(--text)] dark:hover:bg-[color-mix(in_srgb,var(--acid-2)_16%,transparent)]",
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-[0.7rem] font-semibold leading-none tracking-[0.18em]">{language.flag}</span>
                <span>{language.label}</span>
              </span>
              {currentLanguage === language.code ? (
                <Check className="h-4 w-4" style={{ color: language.color }} />
              ) : null}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
