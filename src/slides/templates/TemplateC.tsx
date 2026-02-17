import { motion, AnimatePresence } from 'framer-motion'
import type { DarwinSlideDef, TemplateCContent } from '../../types'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Template C: Checkpoint Question — 3-state interactive machine
 * State 0 — PROMPT: Question + quotes + format instructions + processing cue
 * State 1 — DISCUSS: Same visual + pulsing indicator
 * State 2 — REVEAL: Correct/wrong highlights + key phrase
 */
export function TemplateC({ def, step }: Props) {
  const content = def.content as TemplateCContent
  const hasReveal = !!content.checkpointReveal
  const isDiscussing = step >= 1
  const isRevealed = step >= 2

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

      {/* Main content area */}
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ padding: '2rem 6%' }}
      >
        <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
          {/* Question text */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-darwin-charcoal text-center leading-relaxed font-medium">
            {content.question}
          </p>

          {/* Quotes (pull-quote magazine style) */}
          {content.quotes && content.quotes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {content.quotes.map((q, i) => {
                const revealItem = hasReveal
                  ? content.checkpointReveal?.items?.[i]
                  : null

                let borderStyle = '1px solid rgba(45, 45, 45, 0.15)'
                let bgColor = 'rgba(255, 255, 255, 0.5)'
                let extraClass = ''

                if (isRevealed && revealItem) {
                  if (revealItem.correct) {
                    borderStyle = '2px solid #52B788'
                    bgColor = 'rgba(82, 183, 136, 0.06)'
                    extraClass = 'reveal-correct'
                  } else {
                    borderStyle = '1px solid #CBD5E1'
                    bgColor = 'rgba(241, 245, 249, 0.8)'
                    extraClass = 'reveal-wrong'
                  }
                }

                return (
                  <motion.div
                    key={i}
                    className={`rounded-xl ${extraClass}`}
                    style={{
                      border: borderStyle,
                      backgroundColor: bgColor,
                      padding: '1.5rem 1.75rem',
                    }}
                    layout
                  >
                    <p className="text-xs font-bold uppercase tracking-wider mb-2"
                       style={{ color: 'rgba(45, 45, 45, 0.5)' }}>
                      {q.speaker}
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl text-darwin-charcoal leading-relaxed font-serif italic">
                      &ldquo;{q.text}&rdquo;
                    </p>
                    {/* Reveal marker */}
                    <AnimatePresence>
                      {isRevealed && revealItem && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="mt-4 pt-3"
                          style={{ borderTop: '1px solid rgba(45, 45, 45, 0.1)' }}
                        >
                          <p
                            className={`text-sm sm:text-base font-semibold ${
                              revealItem.correct ? 'text-uni-green' : 'text-uni-red'
                            }`}
                          >
                            {revealItem.correct ? '✓ ' : '✘ '}
                            {revealItem.text}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Sub-questions */}
          {content.subQuestions && (
            <div className="text-center space-y-2">
              {content.subQuestions.map((sq, i) => (
                <p key={i} className="text-lg sm:text-xl text-darwin-charcoal/80 leading-relaxed">
                  {sq}
                </p>
              ))}
            </div>
          )}

          {/* Processing cue — warm italic aside */}
          {!isDiscussing && content.processingCue && (
            <p className="text-base sm:text-lg italic text-center mt-4"
               style={{ color: 'var(--darwin-amber)' }}>
              {content.processingCue}
            </p>
          )}

          {/* Discussion indicator */}
          <AnimatePresence>
            {isDiscussing && !isRevealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-3 mt-4"
              >
                <span className="checkpoint-pulse-dot" />
                <span className="text-base sm:text-lg font-medium" style={{ color: 'rgba(45, 45, 45, 0.45)' }}>
                  Discussion in progress
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reveal: bottom line */}
          <AnimatePresence>
            {isRevealed && content.checkpointReveal?.bottomLine && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-6"
              >
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-darwin-charcoal gold-box inline-block">
                  {content.checkpointReveal.bottomLine}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Open-ended reveal */}
          <AnimatePresence>
            {isRevealed && content.checkpointReveal?.isOpenEnded && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-2xl mx-auto mt-4 border-2 border-dashed rounded-xl bg-white/30"
                style={{ borderColor: 'rgba(45, 45, 45, 0.15)', padding: '2rem' }}
              >
                <p className="text-center italic text-sm sm:text-base"
                   style={{ color: 'rgba(45, 45, 45, 0.4)' }}>
                  Discussion capture — proceed when ready
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Format instructions — smallest text, muted */}
      {!isRevealed && content.formatInstructions && (
        <div className="shrink-0 text-center" style={{ padding: '0.5rem 6% 1rem' }}>
          <p className="text-xs sm:text-sm font-sans"
             style={{ color: 'rgba(45, 45, 45, 0.35)' }}>
            {content.formatInstructions}
          </p>
        </div>
      )}
    </div>
  )
}
