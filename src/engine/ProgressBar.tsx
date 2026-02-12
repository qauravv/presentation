interface ProgressBarProps {
  slideIndex: number
  stepIndex: number
  totalSlides: number
  totalStepsOnCurrentSlide: number
}

export function ProgressBar({
  slideIndex,
  stepIndex,
  totalSlides,
  totalStepsOnCurrentSlide,
}: ProgressBarProps) {
  const slideProgress = totalSlides > 0 ? (slideIndex + 1) / totalSlides : 0
  const stepProgress =
    totalStepsOnCurrentSlide > 0 ? (stepIndex + 1) / totalStepsOnCurrentSlide : 1
  const segmentProgress = (1 / totalSlides) * stepProgress
  const overallProgress = slideProgress - (1 / totalSlides) + segmentProgress

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-1 bg-obsidian/80 z-30"
      aria-hidden
    >
      <div
        className="h-full bg-ember/70 transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, overallProgress * 100))}%` }}
      />
    </div>
  )
}
