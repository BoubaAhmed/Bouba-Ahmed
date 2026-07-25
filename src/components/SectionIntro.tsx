import { cn } from "../lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionIntroProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl", align === "center" && "mx-auto")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
