import { motion } from 'framer-motion'
import type { DarwinSlideDef, TemplateFContent } from '../../types'
import { FlowchartWatermark } from './MiniFlowchart'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Template F: Transition / Reset
 * AGGRESSIVELY minimal. 40–50% empty space. Text floats in center with enormous breathing room.
 * The spaciousness IS the design.
 */
export function TemplateF({ def, step }: Props) {
  const content = def.content as TemplateFContent
  const isGradient = content.specialBg === 'gradient-transition'
  const isCallback = content.specialBg === 'watermark-callback'
  const isLightningReset = def.id === 'slide-3.7'

  const bgClass = isGradient
    ? 'gradient-temporal-transition animate-sweep'
    : isCallback
      ? ''
      : isLightningReset
        ? ''
        : 'slide-palette-bg'

  return (
    <div
      className={`w-full h-full flex items-center justify-center relative ${bgClass}`}
      data-palette={isGradient ? undefined : def.palette}
      style={{
        padding: '12% 10%',
        backgroundColor: isCallback
          ? 'var(--darwin-cream)'
          : isLightningReset
            ? undefined
            : undefined,
        background: isLightningReset
          ? 'radial-gradient(ellipse at 50% 50%, rgba(212,165,116,0.1) 0%, #F5F1E8 60%)'
          : undefined,
      }}
    >
      {/* Watermark flowchart for callback slide 6.4 */}
      {isCallback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <FlowchartWatermark />
        </motion.div>
      )}

      {/* Centered text content */}
      <div className="max-w-4xl w-full text-center relative z-10"
           style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'center' }}>
        {content.lines.map((line, i) => {
          const isVisible = isCallback
            ? (i === 0 ? step >= 0 : step >= 3)
            : i === 0 || step >= 1

          const colorStyle = isCallback
            ? { color: 'var(--darwin-navy)' }
            : isGradient
              ? { color: 'var(--darwin-charcoal)' }
              : { color: 'var(--slide-text)' }

          const lineColorStyle =
            def.id === 'slide-3.7' && i === 0
              ? { color: 'var(--darwin-amber)' }
              : def.id === 'slide-1.1' && i === 2
                ? { color: 'var(--darwin-amber)' }
                : !isCallback && line.style === 'italic'
                  ? { color: 'var(--slide-accent)' }
                  : {}

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 10,
                scale: isLightningReset && i === 0 && isVisible ? [1, 1.02, 1] : 1,
              }}
              transition={{
                duration: isCallback ? (i === 0 ? 0.6 : 0.4) : 0.45,
                delay: isCallback ? 0 : (i > 0 ? 0.15 : 0),
                ease: [0.25, 0.1, 0.25, 1],
                ...(isLightningReset && i === 0 ? {
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                } : {}),
              }}
            >
              <p className={`${lineStyle(line.style, isCallback, def.id, i)} leading-relaxed`}
                 style={{
                   ...colorStyle,
                   ...lineColorStyle,
                   ...(isCallback && i === 0 ? { fontFamily: "'Playfair Display', Georgia, serif" } : {}),
                 }}>
                {isCallback && i === 0 ? (
                  <CallbackQuote text={line.text} highlightActive={step >= 2} />
                ) : (
                  line.text
                )}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function CallbackQuote({ text, highlightActive }: { text: string; highlightActive: boolean }) {
  const goldPhrase = 'endless forms most beautiful'
  const idx = text.toLowerCase().indexOf(goldPhrase)
  if (idx === -1) return <>{text}</>

  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + goldPhrase.length)
  const after = text.slice(idx + goldPhrase.length)

  return (
    <>
      {before}
      <span className={highlightActive ? 'gold-underline' : ''}>{match}</span>
      {after}
    </>
  )
}

function lineStyle(style?: string, isCallback?: boolean, slideId?: string, lineIndex?: number): string {
  if (slideId === 'slide-1.1') {
    if (lineIndex === 0) return 'text-[1.8rem] sm:text-[2.2rem] lg:text-[2.45rem] font-heading font-medium'
    if (lineIndex === 1) return 'text-[1.35rem] sm:text-[1.6rem] lg:text-[1.9rem] font-sans'
    return 'text-[1.25rem] sm:text-[1.45rem] lg:text-[1.65rem] font-sans italic'
  }

  if (isCallback) {
    switch (style) {
      case 'large':
        return 'text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-heading font-semibold italic'
      case 'medium':
        return 'text-lg sm:text-xl lg:text-2xl font-sans font-normal'
      default:
        return 'text-xl sm:text-2xl font-sans'
    }
  }

  switch (style) {
    case 'large':
      return 'text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold'
    case 'medium':
      return 'text-xl sm:text-2xl lg:text-3xl font-sans'
    case 'small':
      return 'text-base sm:text-lg font-sans'
    case 'italic':
      return 'text-lg sm:text-xl lg:text-2xl font-sans italic opacity-70'
    default:
      return 'text-xl sm:text-2xl font-sans'
  }
}
