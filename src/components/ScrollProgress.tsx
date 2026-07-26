type ScrollProgressProps = {
  progress: number;
};

export function ScrollProgress({ progress }: ScrollProgressProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const isActive = clampedProgress > 1;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70]">
      <div className="scroll-progress-rail" />
      <div
        className="progress-glow scroll-progress-fill"
        style={{ transform: `scaleX(${clampedProgress / 100})` }}
      />
      <div
        className={`scroll-progress-badge ${isActive ? "scroll-progress-badge--visible" : ""}`}
        style={{ left: `clamp(3rem, ${clampedProgress}%, calc(100% - 3rem))` }}
      >
        {Math.round(clampedProgress)}%
      </div>
    </div>
  );
}
