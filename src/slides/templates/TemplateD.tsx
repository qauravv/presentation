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
 * For 3-option layouts: vertical stacked cards for better readability.
 * For 4-option layouts: 2x2 grid.
 */
export function TemplateD({ def, step }: Props) {
  const content = def.content as TemplateDContent
  const optionCount = content.options.length
  const isDiagnosticCheckpoint = def.id === 'slide-5.6'
  const isDiscussing = step >= 1
  const isRevealed = step >= 2
  const showPromptOnly = isDiagnosticCheckpoint && step === 0
  const showQuestionAndOptions = !isDiagnosticCheckpoint || step >= 1

  const isVerticalLayout = optionCount === 3
  const gridClass =
    optionCount === 4
      ? 'grid-cols-2'
      : optionCount === 2
        ? 'grid-cols-2'
        : 'grid-cols-1'

  /* ── Slide 5.6: Enhanced Diagnostic Checkpoint ── */
  if (isDiagnosticCheckpoint) {
    return (
      <div
        className="w-full h-full flex flex-col relative"
        style={{ backgroundColor: '#F7F9FB' }}
      >
        {/* Header — orange with teal accent line */}
        <div className="shrink-0 relative">
          <div
            className="checkpoint-header flex items-center gap-3"
            style={{ padding: '1.1rem 6%', minHeight: '10%' }}
          >
            <span className="text-2xl sm:text-3xl">🎯</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-white tracking-wide">
              CHECKPOINT — DIAGNOSTIC
            </h2>
          </div>
          <div className="h-[3px]" style={{ background: 'linear-gradient(to right, #E76F51, #2A9D8F)' }} />
        </div>

        {/* State 0: PROMPT — dramatic silent commit phase */}
        {showPromptOnly && (
          <div
            className="flex-1 flex flex-col items-center justify-center"
            style={{
              padding: '2rem 8%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(42, 157, 143, 0.03) 0%, transparent 70%)',
            }}
          >
            {/* Writing icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <svg width="56" height="56" viewBox="0 0 56 56">
                <rect x="12" y="8" width="32" height="40" rx="3" fill="none" stroke="#264653" strokeWidth="1.5" opacity={0.2} />
                <line x1="18" y1="18" x2="38" y2="18" stroke="#264653" strokeWidth="1" opacity={0.12} />
                <line x1="18" y1="24" x2="38" y2="24" stroke="#264653" strokeWidth="1" opacity={0.12} />
                <line x1="18" y1="30" x2="30" y2="30" stroke="#264653" strokeWidth="1" opacity={0.12} />
                <path d="M36 34 L42 28 L46 32 L40 38 L36 38Z" fill="#E76F51" opacity={0.4} />
                <line x1="42" y1="28" x2="46" y2="32" stroke="#E76F51" strokeWidth="1" opacity={0.3} />
              </svg>
            </motion.div>

            {content.formatInstructions && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] font-semibold leading-relaxed max-w-4xl text-center"
                style={{ color: '#264653' }}
              >
                {content.formatInstructions}
              </motion.p>
            )}

            {content.processingCue && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 text-lg sm:text-xl italic diagnostic-cue-pulse"
                style={{ color: '#D4A574' }}
              >
                {content.processingCue}
              </motion.p>
            )}
          </div>
        )}

        {/* State 1+: Question + pixel-perfect 2x2 cards */}
        {showQuestionAndOptions && (
          <>
            <div style={{ padding: '1rem 6% 0.5rem' }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-[1.05rem] sm:text-[1.2rem] lg:text-[1.35rem] text-center leading-relaxed font-medium"
                style={{ color: '#264653' }}
              >
                {content.question}
              </motion.p>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden" style={{ padding: '0.35rem 5% 0.5rem' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full" style={{ gridAutoRows: '1fr' }}>
                {content.options.map((option, i) => (
                  <DiagnosticOptionCard
                    key={i}
                    option={option}
                    index={i}
                    isRevealed={isRevealed}
                  />
                ))}
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
              className="shrink-0 flex items-center justify-center gap-3 py-2"
            >
              <span className="checkpoint-pulse-dot" />
              <span className="text-sm sm:text-base font-medium" style={{ color: 'rgba(38, 70, 83, 0.4)' }}>
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
              transition={{ duration: 0.6, delay: 0.8 }}
              className="shrink-0 text-center py-2"
              style={{ padding: '0.25rem 6% 0.5rem' }}
            >
              <p className="text-sm sm:text-base italic font-medium" style={{ color: 'rgba(38, 70, 83, 0.6)' }}>
                {content.closingLine}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Processing cue (below cards, before discuss) */}
        {!showPromptOnly && !isDiscussing && content.processingCue && (
          <div className="shrink-0 text-center py-1.5" style={{ padding: '0 6%' }}>
            <p className="text-xs sm:text-sm italic" style={{ color: '#D4A574' }}>
              {content.processingCue}
            </p>
          </div>
        )}
      </div>
    )
  }

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

      {/* Question + Options */}
      <>
        <div style={{ padding: '1.5rem 6% 0.75rem' }}>
          <p className="text-lg sm:text-xl lg:text-2xl text-darwin-charcoal text-center leading-relaxed font-medium">
            {content.question}
          </p>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden" style={{ padding: '0.5rem 6% 1rem' }}>
          {isVerticalLayout ? (
            <div className="flex flex-col gap-3 sm:gap-3.5 h-full max-w-4xl mx-auto">
              {content.options.map((option, i) => (
                <OptionCard
                  key={i}
                  option={option}
                  index={i}
                  isRevealed={isRevealed}
                  isVertical
                />
              ))}
            </div>
          ) : (
            <div className={`grid ${gridClass} gap-4 sm:gap-5 h-full`}
                 style={{ gridAutoRows: '1fr' }}>
              {content.options.map((option, i) => (
                <OptionCard
                  key={i}
                  option={option}
                  index={i}
                  isRevealed={isRevealed}
                  isVertical={false}
                />
              ))}
            </div>
          )}
        </div>
      </>

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
      {!isDiscussing && content.processingCue && (
        <div className="shrink-0 text-center py-2" style={{ padding: '0 6%' }}>
          <p className="text-sm sm:text-base italic"
             style={{ color: 'var(--darwin-amber)' }}>
            {content.processingCue}
          </p>
        </div>
      )}

      {/* Format instructions */}
      {!isRevealed && content.formatInstructions && (
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

/* ── Diagnostic Option Card (Slide 5.6) — pixel-perfect equal weight ── */

function DiagnosticOptionCard({
  option,
  index,
  isRevealed,
}: {
  option: { label: string; text: string; isCorrect?: boolean; explanation?: string; emphasis?: boolean }
  index: number
  isRevealed: boolean
}) {
  let borderStyle = '1.5px solid rgba(38, 70, 83, 0.1)'
  let bgColor = 'rgba(255, 255, 255, 0.85)'
  let extraClass = ''

  if (isRevealed) {
    if (option.isCorrect) {
      borderStyle = '2.5px solid #52B788'
      bgColor = 'rgba(82, 183, 136, 0.06)'
      extraClass = 'diagnostic-reveal-correct'
    } else if (option.emphasis) {
      borderStyle = '2.5px solid #E63946'
      bgColor = 'rgba(230, 57, 70, 0.04)'
      extraClass = 'diagnostic-reveal-trap'
    } else {
      borderStyle = '1.5px solid #CBD5E1'
      bgColor = 'rgba(241, 245, 249, 0.6)'
      extraClass = 'diagnostic-reveal-wrong'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`rounded-xl flex flex-col transition-all duration-500 ${extraClass}`}
      style={{
        border: borderStyle,
        backgroundColor: bgColor,
        padding: '1rem 1.25rem',
      }}
    >
      {/* Badge */}
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white shrink-0 mb-2"
        style={{
          backgroundColor: isRevealed && option.isCorrect
            ? '#52B788'
            : isRevealed && option.emphasis
              ? '#E63946'
              : isRevealed
                ? '#94A3B8'
                : '#264653',
        }}
      >
        {option.label}
      </span>

      <p className="text-[0.85rem] sm:text-[0.95rem] leading-relaxed flex-1" style={{ color: '#264653' }}>
        {option.text}
      </p>

      {/* Reveal explanation */}
      <AnimatePresence>
        {isRevealed && option.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
            className="mt-2 pt-2"
            style={{ borderTop: '1px solid rgba(38, 70, 83, 0.08)' }}
          >
            {option.emphasis ? (
              <div
                className="rounded-lg"
                style={{
                  border: '2px solid rgba(230, 57, 70, 0.4)',
                  backgroundColor: 'rgba(230, 57, 70, 0.06)',
                  padding: '0.5rem 0.75rem',
                }}
              >
                <p className="text-xs sm:text-sm font-bold" style={{ color: '#E63946' }}>
                  ✘ {option.explanation}
                </p>
              </div>
            ) : (
              <p className={`text-xs font-medium ${option.isCorrect ? 'text-uni-green' : 'text-uni-red'}`}>
                {option.isCorrect ? '✓ ' : '✘ '}
                {option.explanation}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Option Card Component with staggered entrance ── */

function OptionCard({
  option,
  index,
  isRevealed,
  isVertical,
}: {
  option: { label: string; text: string; isCorrect?: boolean; explanation?: string; emphasis?: boolean }
  index: number
  isRevealed: boolean
  isVertical: boolean
}) {
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`rounded-xl transition-all duration-500 ${extraClass} ${
        isVertical ? 'flex items-start gap-4' : 'flex flex-col'
      }`}
      style={{
        border: borderStyle,
        backgroundColor: bgColor,
        padding: isVertical ? '1.1rem 1.5rem' : '1.5rem',
        minHeight: isVertical ? undefined : '200px',
        flex: isVertical ? '1 1 0' : undefined,
      }}
    >
      {/* Option badge */}
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white shrink-0"
        style={{
          backgroundColor: isRevealed && option.isCorrect ? '#52B788' : isRevealed ? '#94A3B8' : '#2D2D2D',
          marginTop: isVertical ? '0.1rem' : undefined,
        }}
      >
        {option.label}
      </span>

      <div className={`flex-1 ${isVertical ? '' : 'mt-2'}`}>
        <p className={`text-darwin-charcoal leading-relaxed ${isVertical ? 'text-[0.95rem] sm:text-[1.05rem]' : 'text-sm sm:text-base'}`}>
          {option.text}
        </p>

        {/* Reveal explanation */}
        <AnimatePresence>
          {isRevealed && option.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              className="mt-2.5 pt-2.5"
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
    </motion.div>
  )
}
