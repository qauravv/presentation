import { useState, useEffect } from 'react'
import type { SlideConfig, CompressionTag, DeckVersion } from '../types'

/* ── Decision point timing thresholds (in seconds) ── */
const DECISION_POINTS = [
  {
    thresholdSec: 16 * 60,
    label: 'Decision Point 1 — End of Section 2',
    guidance: [
      '≤16 min → ✓ On track. Continue Deck B.',
      '17–18 min → ⚠ Continue B through Section 3, switch to C at Section 4.',
      '≥19 min → ❌ Switch to C-Emergency immediately.',
    ],
  },
  {
    thresholdSec: 38 * 60,
    label: 'Decision Point 2 — End of Section 4',
    guidance: [
      '≤38 min → ✓ Full Consolidation Pause + Section 5.',
      '39–42 min → ⚠ Drop Consolidation Pause. Apply CUT 3.',
      '≥43 min → ❌ Drop pause. Compress 5D. Plan to drop 6.8 and 6.6.',
    ],
  },
  {
    thresholdSec: 48 * 60,
    label: 'Decision Point 3 — End of Section 5',
    guidance: [
      '≤48 min → ✓ Full Section 6 (all 8 slides).',
      '49–52 min → ⚠ Drop 6.8 (misconception tracker).',
      '≥53 min → ❌ Emergency: 6.3 → 6.4 → 6.5 → 6.7 only.',
    ],
  },
]

/* ── Compression tag styling ── */
const TAG_STYLES: Record<CompressionTag, { bg: string; text: string; label: string }> = {
  CORE: { bg: 'bg-red-600', text: 'text-white', label: 'CORE' },
  NEVER_CUT: { bg: 'bg-red-800', text: 'text-white', label: 'NEVER CUT' },
  CUT1: { bg: 'bg-yellow-500', text: 'text-black', label: 'CUT 1' },
  CUT2: { bg: 'bg-orange-500', text: 'text-white', label: 'CUT 2' },
  CUT3: { bg: 'bg-blue-500', text: 'text-white', label: 'CUT 3' },
  OPTIONAL: { bg: 'bg-slate-500', text: 'text-white', label: 'OPTIONAL' },
}

const DECK_LABELS: Record<DeckVersion, string> = {
  A: 'Deck A (Ideal)',
  B: 'Deck B (Realistic)',
  C: 'Deck C (Compressed)',
  EMERGENCY: 'Deck C-Emergency',
}

/* ── Format elapsed time as mm:ss ── */
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/* ── Props ── */
interface SpeakerNotesProps {
  notes: string
  isOpen: boolean
  onClose: () => void
  compressionTag?: CompressionTag
  deckVersion?: DeckVersion
  elapsed?: number
  totalSlides?: number
  slideIndex?: number
  nextSlide?: SlideConfig | null
}

export function SpeakerNotes({
  notes,
  isOpen,
  onClose,
  compressionTag,
  deckVersion = 'B',
  elapsed = 0,
  totalSlides = 0,
  slideIndex = 0,
  nextSlide,
}: SpeakerNotesProps) {
  const [activeAlert, setActiveAlert] = useState<number | null>(null)
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<number>>(new Set())

  // Check for decision point alerts
  useEffect(() => {
    for (let i = DECISION_POINTS.length - 1; i >= 0; i--) {
      const dp = DECISION_POINTS[i]!
      const windowEnd = dp.thresholdSec + 120
      if (
        elapsed >= dp.thresholdSec &&
        elapsed <= windowEnd &&
        !dismissedAlerts.has(i)
      ) {
        setActiveAlert(i)
        return
      }
    }
    setActiveAlert(null)
  }, [elapsed, dismissedAlerts])

  const dismissAlert = (idx: number) => {
    setDismissedAlerts((prev) => new Set(prev).add(idx))
    setActiveAlert(null)
  }

  if (!isOpen) return null

  const tagStyle = compressionTag ? TAG_STYLES[compressionTag] : null
  const elapsedMin = Math.floor(elapsed / 60)

  // Timer color: green < 45 min, yellow 45-52, red > 52
  const timerColor =
    elapsedMin < 45
      ? 'text-uni-green'
      : elapsedMin < 52
        ? 'text-yellow-400'
        : 'text-uni-red'

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-label="Presenter view"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[65vh] bg-obsidian border-t border-slate-700 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar: timer, deck version, alert */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700/50 shrink-0">
          {/* Timer */}
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-mono font-bold ${timerColor}`}>
              ⏱ {formatTime(elapsed)}
            </span>
            <span className="text-slate-500 text-sm">
              ({elapsedMin} min elapsed)
            </span>
          </div>

          {/* Deck version */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm font-medium">
              {DECK_LABELS[deckVersion]}
            </span>
            <span className="text-slate-500 text-xs">
              {totalSlides} slides · Slide {slideIndex + 1}
            </span>
          </div>

          {/* Compression tag badge */}
          {tagStyle && (
            <span
              className={`${tagStyle.bg} ${tagStyle.text} px-3 py-1 rounded-full text-xs font-bold`}
            >
              {tagStyle.label}
            </span>
          )}
        </div>

        {/* Decision point alert */}
        {activeAlert !== null && (
          <div className="px-6 py-3 bg-yellow-900/40 border-b border-yellow-700/50 shrink-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-yellow-300 font-bold text-sm flex items-center gap-2">
                  <span className="text-lg">⏱</span>
                  {DECISION_POINTS[activeAlert]!.label}
                </p>
                <div className="mt-1 space-y-0.5">
                  {DECISION_POINTS[activeAlert]!.guidance.map((g, i) => (
                    <p key={i} className="text-yellow-200/80 text-xs">
                      {g}
                    </p>
                  ))}
                </div>
              </div>
              <button
                className="text-yellow-400 hover:text-yellow-200 text-xs px-2 py-1 border border-yellow-600 rounded shrink-0"
                onClick={() => dismissAlert(activeAlert)}
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Main content: notes + next preview */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Speaker notes (left, scrollable) */}
          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-bone font-sans text-base leading-relaxed whitespace-pre-wrap">
              {notes}
            </p>
          </div>

          {/* Next slide preview (right) */}
          <div className="w-72 shrink-0 border-l border-slate-700/50 p-4 flex flex-col items-center gap-3">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
              Next Slide
            </p>
            {nextSlide ? (
              <div className="w-full aspect-video bg-slate-800 rounded-lg overflow-hidden relative border border-slate-600">
                <div
                  className="absolute top-0 left-0 origin-top-left"
                  style={{
                    width: '1920px',
                    height: '1080px',
                    transform: `scale(${256 / 1920})`,
                  }}
                >
                  <nextSlide.component step={0} isActive={false} />
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600">
                <p className="text-slate-600 text-xs">End of deck</p>
              </div>
            )}
            {nextSlide && (
              <p className="text-slate-500 text-xs text-center truncate w-full">
                {nextSlide.id}
              </p>
            )}

            {/* Keyboard shortcuts reference */}
            <div className="mt-auto pt-3 border-t border-slate-700/30 w-full">
              <p className="text-slate-600 text-xs space-y-0.5">
                <span className="block"><kbd className="text-slate-400">S</kbd> / <kbd className="text-slate-400">Esc</kbd> — Toggle view</span>
                <span className="block"><kbd className="text-slate-400">D</kbd> — Cycle deck</span>
                <span className="block"><kbd className="text-slate-400">→</kbd> / <kbd className="text-slate-400">Space</kbd> — Next</span>
                <span className="block"><kbd className="text-slate-400">←</kbd> — Previous</span>
                <span className="block"><kbd className="text-slate-400">G</kbd> — Go to slide</span>
                <span className="block"><kbd className="text-slate-400">F</kbd> — Fullscreen</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
