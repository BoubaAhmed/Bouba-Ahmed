type ScrollProgressProps = {
  progress: number;
};

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
      <div
        className="progress-glow h-full bg-[linear-gradient(90deg,var(--acid),var(--acid-2))] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
