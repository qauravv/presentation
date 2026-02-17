import { motion, AnimatePresence } from 'framer-motion'
import type { DarwinSlideDef, TemplateDContent } from '../../types'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Template D: Checkpoint Options — 3-state interactive machine
 * State 0 — PROMPT: Question + option cards visible, equal visual weight
 * State 1 — DISCUSS: Same visual + pulsing indicator
 * State 2 — REVEAL: Green/red highlights + explanations + closing line
 *
 * CRITICAL: All cards pixel-identical dimensions/padding/font. No color bias before reveal.
 */
export function TemplateD({ def, step }: Props) {
  const content = def.content as TemplateDContent
  const optionCount = content.options.length
  const isDiagnosticCheckpoint = def.id === 'slide-5.6'
  const isDiscussing = step >= 1
  const isRevealed = step >= 2
  const showPromptOnly = isDiagnosticCheckpoint && step === 0
  const showQuestionAndOptions = !isDiagnosticCheckpoint || step >= 1

  const gridClass =
    optionCount === 3
      ? 'grid-cols-3'
      : optionCount === 4
        ? 'grid-cols-2'
        : optionCount === 2
          ? 'grid-cols-2'
          : 'grid-cols-2'

  return (
    <div
      className="w-full h-full flex flex-col relative"
      data-palette="checkpoint"
      style={{ backgroundColor: 'var(--darwin-cream)' }}
    >
      {/* Orange header bar */}
      <div
        className="checkpoint-header shrink-0 flex items-center gap-3"
        style={{ padding: '1.25rem 6%', minHeight: '12%' }}
      >
        <span className="text-2xl sm:text-3xl">🎯</span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-white tracking-wide">
          CHECKPOINT
        </h2>
      </div>

      {/* Prompt-only phase (diagnostic checkpoint) */}
      {showPromptOnly && (
        <div className="flex-1 flex flex-col items-center justify-center" style={{ padding: '2rem 6%' }}>
          {content.formatInstructions && (
            <p className="text-2xl sm:text-3xl lg:text-4xl text-darwin-charcoal font-semibold leading-relaxed max-w-4xl text-center">
              {content.formatInstructions}
            </p>
          )}
          {content.processingCue && (
            <p className="mt-8 text-lg sm:text-xl italic"
               style={{ color: 'var(--darwin-amber)' }}>
              {content.processingCue}
            </p>
          )}
        </div>
      )}

      {showQuestionAndOptions && (
        <>
          {/* Question */}
          <div style={{ padding: '1.5rem 6% 0.75rem' }}>
            <p className="text-lg sm:text-xl lg:text-2xl text-darwin-charcoal text-center leading-relaxed font-medium">
              {content.question}
            </p>
          </div>

          {/* Options grid — ALL CARDS PIXEL-IDENTICAL */}
          <div className="flex-1 min-h-0" style={{ padding: '0.5rem 6% 1rem' }}>
            <div className={`grid ${gridClass} gap-4 sm:gap-5 h-full`}
                 style={{ gridAutoRows: '1fr' }}>
              {content.options.map((option, i) => {
                let borderStyle = '1px solid rgba(45, 45, 45, 0.12)'
                let bgColor = 'rgba(250, 250, 250, 0.8)'
                let extraClass = 'checkpoint-card'

                if (isRevealed) {
                  if (option.isCorrect) {
                    borderStyle = '2px solid #52B788'
                    bgColor = 'rgba(82, 183, 136, 0.06)'
                    extraClass = 'reveal-correct'
                  } else {
                    borderStyle = '1px solid #CBD5E1'
                    bgColor = 'rgba(241, 245, 249, 0.7)'
                    extraClass = 'reveal-wrong'
                  }
                }

                return (
                  <div
                    key={i}
                    className={`rounded-xl flex flex-col transition-all duration-500 ${extraClass}`}
                    style={{
                      border: borderStyle,
                      backgroundColor: bgColor,
                      padding: '1.5rem',
                      minHeight: '200px',
                    }}
                  >
                    {/* Option badge */}
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold text-white shrink-0"
                        style={{ backgroundColor: isRevealed && option.isCorrect ? '#52B788' : isRevealed ? '#94A3B8' : '#2D2D2D' }}
                      >
                        {option.label}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-darwin-charcoal leading-relaxed flex-1">
                      {option.text}
                    </p>
                    {/* Reveal explanation */}
                    <AnimatePresence>
                      {isRevealed && option.explanation && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                          className="mt-3 pt-3"
                          style={{ borderTop: '1px solid rgba(45, 45, 45, 0.1)' }}
                        >
                          {option.emphasis ? (
                            <div
                              className="rounded-lg shadow-sm"
                              style={{
                                border: '2px solid rgba(230, 57, 70, 0.5)',
                                backgroundColor: 'rgba(230, 57, 70, 0.08)',
                                padding: '0.75rem',
                              }}
                            >
                              <p className="text-sm sm:text-base font-bold text-uni-red">
                                ✘ {option.explanation}
                              </p>
                            </div>
                          ) : (
                            <p
                              className={`text-xs sm:text-sm font-medium ${
                                option.isCorrect
                                  ? 'text-uni-green'
                                  : 'text-uni-red'
                              }`}
                            >
                              {option.isCorrect ? '✓ ' : '✘ '}
                              {option.explanation}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}

      {/* Discussion indicator */}
      <AnimatePresence>
        {isDiscussing && !isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="shrink-0 flex items-center justify-center gap-3 py-3"
          >
            <span className="checkpoint-pulse-dot" />
            <span className="text-base sm:text-lg font-medium" style={{ color: 'rgba(45, 45, 45, 0.45)' }}>
              Discussion in progress
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closing line */}
      <AnimatePresence>
        {isRevealed && content.closingLine && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="shrink-0 text-center py-3"
            style={{ padding: '0.5rem 6%' }}
          >
            <p className="text-base sm:text-lg italic font-medium" style={{ color: 'rgba(45, 45, 45, 0.65)' }}>
              {content.closingLine}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Processing cue */}
      {!showPromptOnly && !isDiscussing && content.processingCue && (
        <div className="shrink-0 text-center py-2" style={{ padding: '0 6%' }}>
          <p className="text-sm sm:text-base italic"
             style={{ color: 'var(--darwin-amber)' }}>
            {content.processingCue}
          </p>
        </div>
      )}

      {/* Format instructions */}
      {!showPromptOnly && !isRevealed && content.formatInstructions && (
        <div className="shrink-0 text-center pb-3" style={{ padding: '0 6% 0.75rem' }}>
          <p className="text-xs sm:text-sm font-sans"
             style={{ color: 'rgba(45, 45, 45, 0.35)' }}>
            {content.formatInstructions}
          </p>
        </div>
      )}
    </div>
  )
}
