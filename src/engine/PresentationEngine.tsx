import { useState, useCallback, useMemo, useRef } from 'react'
import { usePresentation } from './usePresentation'
import { useKeyboard } from './useKeyboard'
import { SlideTransition } from '../components/SlideTransition'
import { ProgressBar } from './ProgressBar'
import { SpeakerNotes } from './SpeakerNotes'
import { acts } from '../theme/acts'
import type { SlideConfig } from '../types'
import { mainSlides, appendixSlides } from '../slides'

interface PresentationEngineProps {
  slides: SlideConfig[]
}

export function PresentationEngine({ slides }: PresentationEngineProps) {
  const [notesOpen, setNotesOpen] = useState(false)
  const [appendixMode, setAppendixMode] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const activeSlides = useMemo(() => {
    if (appendixMode) return [...mainSlides, ...appendixSlides]
    return mainSlides.length > 0 ? mainSlides : slides
  }, [appendixMode, slides])

  const {
    slideIndex,
    stepIndex,
    currentSlide,
    totalSlides,
    totalSteps,
    goNext,
    goPrev,
    goToSlide,
  } = usePresentation({ slides: activeSlides })

  useKeyboard({
    onNext: goNext,
    onPrev: goPrev,
    onToggleNotes: () => setNotesOpen((o) => !o),
    onToggleFullscreen: useCallback(() => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    }, []),
    onGoToSlide: useCallback(() => {
      const raw = window.prompt(`Go to slide (1–${totalSlides}):`, String(slideIndex + 1))
      const n = parseInt(raw ?? '', 10)
      if (!Number.isNaN(n)) goToSlide(n - 1)
    }, [totalSlides, slideIndex, goToSlide]),
    onToggleAppendix: useCallback(() => {
      setAppendixMode((prev) => !prev)
    }, []),
    onEscape: useCallback(() => {
      setNotesOpen(false)
    }, []),
    enabled: true,
  })

  if (!currentSlide) {
    return (
      <div className="flex items-center justify-center min-h-screen text-slate-400">
        No slides loaded.
      </div>
    )
  }

  const actConfig = acts[currentSlide.act]
  const slideBgClass =
    currentSlide.background === 'obsidian' || currentSlide.background === '#0F172A'
      ? 'bg-obsidian'
      : currentSlide.background === 'bone' || currentSlide.background === '#FAF9F6'
        ? actConfig?.slideClass ?? 'bg-bone'
        : currentSlide.background === 'black' || currentSlide.background === '#000000'
          ? 'bg-black'
          : 'bg-obsidian'

  const SlideComponent = currentSlide.component

  return (
    <div className="relative w-full h-screen flex flex-col">
      <div
        className="flex-1 relative overflow-hidden cursor-pointer select-none"
        onClick={goNext}
        onTouchStart={(e) => {
          const touch = e.touches[0]
          if (!touch) return
          touchStartX.current = touch.clientX
          touchStartY.current = touch.clientY
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null || touchStartY.current === null) return
          const touch = e.changedTouches[0]
          if (!touch) return
          const dx = touch.clientX - touchStartX.current
          const dy = touch.clientY - touchStartY.current
          const absX = Math.abs(dx)
          const absY = Math.abs(dy)
          if (absX > 40 && absX > absY * 1.3) {
            if (dx < 0) goNext()
            else goPrev()
          }
          touchStartX.current = null
          touchStartY.current = null
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            goNext()
          }
        }}
        aria-label="Advance presentation"
      >
        <SlideTransition slideKey={`${currentSlide.id}-${slideIndex}`}>
          <div
            className={`w-full h-full ${slideBgClass}`}
            data-act={currentSlide.act}
          >
            <SlideComponent step={stepIndex} isActive={true} />
          </div>
        </SlideTransition>
      </div>

      <ProgressBar
        slideIndex={slideIndex}
        stepIndex={stepIndex}
        totalSlides={totalSlides}
        totalStepsOnCurrentSlide={totalSteps}
      />

      <SpeakerNotes
        notes={currentSlide.speakerNotes}
        isOpen={notesOpen}
        onClose={() => setNotesOpen(false)}
      />

      <div className="fixed bottom-6 left-6 text-slate-600 text-sm z-20 pointer-events-none">
        {slideIndex + 1} / {totalSlides}
        {totalSteps > 1 && (
          <span className="ml-2 text-slate-500">
            step {stepIndex + 1}/{totalSteps}
          </span>
        )}
      </div>

    </div>
  )
}
