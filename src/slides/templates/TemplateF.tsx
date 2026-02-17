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

  const bgClass = isGradient
    ? 'gradient-temporal-transition'
    : isCallback
      ? ''
      : 'slide-palette-bg'

  return (
    <div
      className={`w-full h-full flex items-center justify-center relative ${bgClass}`}
      data-palette={isGradient ? undefined : def.palette}
      style={{
        padding: '12% 10%',
        backgroundColor: isCallback ? 'var(--darwin-cream)' : undefined,
      }}
    >
      {/* Watermark flowchart for callback slide 6.4 */}
      {isCallback && <FlowchartWatermark />}

      {/* Centered text content */}
      <div className="max-w-4xl w-full text-center relative z-10"
           style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'center' }}>
        {content.lines.map((line, i) => {
          const isVisible = i === 0 || step >= 1

          const colorStyle = isCallback
            ? { color: 'var(--darwin-navy)' }
            : isGradient
              ? { color: 'var(--darwin-charcoal)' }
              : { color: 'var(--slide-text)' }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{
                duration: isCallback ? 0.6 : 0.45,
                delay: isCallback ? (i === 0 ? 0.2 : 0.8) : (i > 0 ? 0.15 : 0),
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className={`${lineStyle(line.style, isCallback)} leading-relaxed`}
                 style={{
                   ...colorStyle,
                   ...(isCallback && i === 0 ? { fontFamily: "'Playfair Display', Georgia, serif" } : {}),
                 }}>
                {isCallback && i === 0 ? (
                  <CallbackQuote text={line.text} />
                ) : (
                  line.text
                )}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Gold accent bar for callback */}
      {isCallback && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ backgroundColor: 'var(--uni-gold-highlight)' }}
        />
      )}
    </div>
  )
}

function CallbackQuote({ text }: { text: string }) {
  const goldPhrase = 'endless forms most beautiful'
  const idx = text.toLowerCase().indexOf(goldPhrase)
  if (idx === -1) return <>{text}</>

  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + goldPhrase.length)
  const after = text.slice(idx + goldPhrase.length)

  return (
    <>
      {before}
      <span className="gold-underline">{match}</span>
      {after}
    </>
  )
}

function lineStyle(style?: string, isCallback?: boolean): string {
  if (isCallback) {
    switch (style) {
      case 'large':
        return 'text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold italic'
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
