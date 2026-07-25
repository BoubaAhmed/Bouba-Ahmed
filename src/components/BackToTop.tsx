import { ArrowUp } from "lucide-react";

type BackToTopProps = {
  visible: boolean;
  onClick: () => void;
};

export function BackToTop({ visible, onClick }: BackToTopProps) {
  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--acid)] text-white shadow-[0_18px_50px_-20px_color-mix(in_srgb,var(--acid)_70%,black)] transition hover:-translate-y-1 hover:bg-[var(--acid-2)]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
