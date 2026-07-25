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
  { code: "en", flag: "🇬🇧", label: "English", color: "#450693" },
  { code: "fr", flag: "🇫🇷", label: "Francais", color: "#215E61" },
  { code: "ar", flag: "🇲🇦", label: "Arabic", color: "#306D29" },
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
      <button
        type="button"
        onClick={() => setOpen((currentState) => !currentState)}
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-[color:color-mix(in_srgb,#9CB080_65%,var(--line))] bg-[linear-gradient(135deg,color-mix(in_srgb,#9CB080_16%,white),color-mix(in_srgb,#215E61_10%,white))] px-3 text-sm font-medium text-[var(--text)] transition hover:border-[#306D29] hover:text-[#215E61] dark:bg-[linear-gradient(135deg,color-mix(in_srgb,#450693_28%,transparent),color-mix(in_srgb,#215E61_22%,transparent))]"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden md:block">{current.label}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-[#215E61] transition-transform dark:text-[#9CB080]", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div className="absolute right-0 z-30 mt-2 min-w-44 overflow-hidden rounded-xl border border-[color:color-mix(in_srgb,#9CB080_65%,var(--line))] bg-[var(--surface-strong)] p-2 shadow-[0_18px_50px_-28px_rgba(10,16,38,0.28)]">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => {
                setOpen(false);
                startTransition(() => onChangeLanguage(language.code));
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition",
                currentLanguage === language.code
                  ? "bg-[color-mix(in_srgb,#9CB080_18%,white)] text-[var(--text)] dark:bg-[color-mix(in_srgb,#450693_18%,transparent)]"
                  : "text-[var(--muted)] hover:bg-[color-mix(in_srgb,#9CB080_12%,white)] hover:text-[var(--text)] dark:hover:bg-[color-mix(in_srgb,#215E61_16%,transparent)]",
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{language.flag}</span>
                <span>{language.label}</span>
              </span>
              {currentLanguage === language.code ? (
                <Check className="h-4 w-4" style={{ color: language.color }} />
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
