interface ProgressBarProps {
  slideIndex: number
  stepIndex: number
  totalSlides: number
  totalStepsOnCurrentSlide: number
}

/**
 * Thin progress bar at the very bottom of the screen (3px height).
 * Color matches current palette accent via CSS variable.
 */
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
      className="fixed bottom-0 left-0 right-0 z-30"
      style={{ height: '3px', backgroundColor: 'rgba(0, 0, 0, 0.06)' }}
      aria-hidden
    >
      <div
        className="h-full progress-bar-fill"
        style={{ width: `${Math.min(100, Math.max(0, overallProgress * 100))}%` }}
      />
    </div>
  )
}
