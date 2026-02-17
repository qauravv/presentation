import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { usePresentation } from './usePresentation'
import { useKeyboard } from './useKeyboard'
import { SlideTransition } from '../components/SlideTransition'
import { ProgressBar } from './ProgressBar'
import { SpeakerNotes } from './SpeakerNotes'
import { acts } from '../theme/acts'
import type { SlideConfig, DeckVersion } from '../types'
import { darwinSlideDefs, buildDarwinSlide, filterSlidesByDeck } from '../slides'

interface PresentationEngineProps {
  slides: SlideConfig[]
}

const DECK_ORDER: DeckVersion[] = ['A', 'B', 'C', 'EMERGENCY']
const DECK_LABELS: Record<DeckVersion, string> = {
  A: 'Deck A (Ideal)',
  B: 'Deck B (Realistic)',
  C: 'Deck C (Compressed)',
  EMERGENCY: 'Deck C-Emergency',
}

const SECTION_NAMES: Record<number, string> = {
  1: 'Bridge + Frame',
  2: "Darwin's Logic",
  3: 'The Eye',
  4: 'The Evidence',
  5: 'Inheritance',
  6: 'Close',
}

export function PresentationEngine({ slides: _fallbackSlides }: PresentationEngineProps) {
  const [notesOpen, setNotesOpen] = useState(false)
  const [, setAppendixMode] = useState(false)
  const [deckVersion, setDeckVersion] = useState<DeckVersion>('B')
  const [startTime] = useState<number>(() => Date.now())
  const [elapsed, setElapsed] = useState(0)
  const [deckFlash, setDeckFlash] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const prevSlideIdRef = useRef<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime])

  const filteredDefs = useMemo(
    () => filterSlidesByDeck(darwinSlideDefs, deckVersion),
    [deckVersion]
  )

  const activeSlides = useMemo(
    () => filteredDefs.map(buildDarwinSlide),
    [filteredDefs]
  )

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

  useEffect(() => {
    if (prevSlideIdRef.current && currentSlide) {
      const targetId = prevSlideIdRef.current
      const idx = activeSlides.findIndex((s) => s.id === targetId)
      if (idx >= 0 && idx !== slideIndex) {
        goToSlide(idx)
      }
    }
  }, [activeSlides]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (currentSlide) {
      prevSlideIdRef.current = currentSlide.id
    }
  }, [currentSlide])

  const cycleDeck = useCallback(() => {
    setDeckVersion((prev) => {
      const idx = DECK_ORDER.indexOf(prev)
      return DECK_ORDER[(idx + 1) % DECK_ORDER.length] ?? 'B'
    })
    setDeckFlash(true)
    setTimeout(() => setDeckFlash(false), 1500)
  }, [])

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
    onCycleDeck: cycleDeck,
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
  const isCallbackSlide = currentSlide.id === 'slide-6.4'

  const SlideComponent = currentSlide.component
  const currentDef = filteredDefs[slideIndex]
  const nextSlide = activeSlides[slideIndex + 1] ?? null

  return (
    <div className="relative w-full h-screen flex flex-col"
         data-palette={currentSlide.palette ?? actConfig?.palette ?? 'darwin'}>
      {/* Main slide area */}
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
            className="w-full h-full"
            data-act={currentSlide.act}
          >
            <SlideComponent step={stepIndex} isActive={true} />
          </div>
        </SlideTransition>
      </div>

      {/* Progress bar */}
      {!isCallbackSlide && (
        <ProgressBar
          slideIndex={slideIndex}
          stepIndex={stepIndex}
          totalSlides={totalSlides}
          totalStepsOnCurrentSlide={totalSteps}
        />
      )}

      {/* Section label (bottom-left) + Slide number (bottom-right) — very muted */}
      {!isCallbackSlide && (
        <>
          <div className="fixed bottom-2 left-6 z-20 pointer-events-none">
            <span className="font-sans"
                  style={{ fontSize: '10px', opacity: 0.35, color: 'var(--slide-text, #2D2D2D)' }}>
              {currentSlide.act} · {SECTION_NAMES[currentSlide.act] ?? ''}
            </span>
          </div>
          <div className="fixed bottom-2 right-6 z-20 pointer-events-none">
            <span className="font-sans"
                  style={{ fontSize: '10px', opacity: 0.35, color: 'var(--slide-text, #2D2D2D)' }}>
              {slideIndex + 1}/{totalSlides}
            </span>
          </div>
        </>
      )}

      {/* Speaker Notes */}
      <SpeakerNotes
        notes={currentSlide.speakerNotes}
        isOpen={notesOpen}
        onClose={() => setNotesOpen(false)}
        compressionTag={currentDef?.compressionTag}
        deckVersion={deckVersion}
        elapsed={elapsed}
        totalSlides={totalSlides}
        slideIndex={slideIndex}
        nextSlide={nextSlide}
      />

      {/* Deck flash notification */}
      {deckFlash && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-obsidian/90 text-bone px-6 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in">
          Switched to {DECK_LABELS[deckVersion]} ({totalSlides} slides)
        </div>
      )}
    </div>
  )
}
