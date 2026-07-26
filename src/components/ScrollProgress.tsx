type ScrollProgressProps = {
  progress: number;
};

export function ScrollProgress({ progress }: ScrollProgressProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-70">
      <div className="scroll-progress-rail" />
      <div
        className="progress-glow scroll-progress-fill"
        style={{ transform: `scaleX(${clampedProgress / 100})` }}
      />
    </div>
  );
}
