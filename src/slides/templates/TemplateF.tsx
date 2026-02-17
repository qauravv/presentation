import { motion } from 'framer-motion'
import type { DarwinSlideDef, TemplateFContent } from '../../types'
import { FlowchartWatermark } from './MiniFlowchart'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Slide 5.1: Dramatic temporal transition — the visual cue that
 * "we're moving forward in time." Animated sweep line, era motifs,
 * typographic shift from serif (Darwin) to sans-serif (Modern).
 */
function TemporalTransition51({ step }: { step: number; content: TemplateFContent }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Layered gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right,
            #F5F1E8 0%, #F5F1E8 20%, #EDE9E0 35%,
            #E2E8EC 50%, #E8ECF0 60%, #F0F5F7 75%, #F7F9FB 100%
          )`,
        }}
      />

      {/* Darwin-era motifs — faded on the left */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="tt-amber-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#D4A574" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tt-teal-fade" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.10" />
            <stop offset="60%" stopColor="#2A9D8F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Darwin-era sketch lines — notebook / quill motifs */}
        <g opacity={0.08}>
          <path d="M40 180 Q80 160 120 185 Q160 210 200 190" fill="none" stroke="#1E3A5F" strokeWidth="1.5" />
          <path d="M60 220 Q100 200 140 225 Q180 250 220 230" fill="none" stroke="#1E3A5F" strokeWidth="1" />
          <circle cx="100" cy="300" r="40" fill="none" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="4,6" />
          <circle cx="100" cy="300" r="25" fill="none" stroke="#D4A574" strokeWidth="0.6" strokeDasharray="3,5" />
          <path d="M30 400 L170 400" stroke="#1E3A5F" strokeWidth="0.5" strokeDasharray="8,4" />
          <path d="M30 420 L150 420" stroke="#1E3A5F" strokeWidth="0.5" strokeDasharray="8,4" />
          <path d="M30 440 L130 440" stroke="#1E3A5F" strokeWidth="0.5" strokeDasharray="8,4" />
        </g>

        {/* Modern science motifs — right side */}
        <g opacity={0.06}>
          {/* DNA double-helix silhouette */}
          <path d="M1020 120 Q1050 160 1020 200 Q990 240 1020 280 Q1050 320 1020 360 Q990 400 1020 440"
                fill="none" stroke="#2A9D8F" strokeWidth="2" />
          <path d="M1060 120 Q1030 160 1060 200 Q1090 240 1060 280 Q1030 320 1060 360 Q1090 400 1060 440"
                fill="none" stroke="#2A9D8F" strokeWidth="2" />
          {/* Rungs */}
          {[160, 200, 240, 280, 320, 360, 400].map((y, i) => (
            <line key={i} x1={1025 + (i % 2 === 0 ? -5 : 5)} y1={y} x2={1055 + (i % 2 === 0 ? 5 : -5)} y2={y}
                  stroke="#2A9D8F" strokeWidth="1" opacity={0.5} />
          ))}
          {/* Geometric circles */}
          <circle cx="1120" cy="500" r="30" fill="none" stroke="#457B9D" strokeWidth="1" />
          <circle cx="1120" cy="500" r="18" fill="none" stroke="#06D6A0" strokeWidth="0.6" />
          <rect x="1080" y="200" width="60" height="60" rx="8" fill="none" stroke="#457B9D" strokeWidth="0.8" transform="rotate(15 1110 230)" />
        </g>

        {/* Warm amber wash — left */}
        <rect x="0" y="0" width="400" height="700" fill="url(#tt-amber-fade)" />
        {/* Cool teal wash — right */}
        <rect x="800" y="0" width="400" height="700" fill="url(#tt-teal-fade)" />
      </svg>

      {/* Animated sweep line — the temporal boundary marker */}
      <motion.div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ width: '3px', zIndex: 5 }}
        initial={{ left: '-5%' }}
        animate={{ left: '105%' }}
        transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <div className="h-full relative">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #2A9D8F 15%, #2A9D8F 85%, transparent 100%)',
              opacity: 0.5,
            }}
          />
          <div
            className="absolute inset-y-0 -left-[20px] -right-[20px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(42, 157, 143, 0.15) 0%, transparent 70%)',
            }}
          />
        </div>
      </motion.div>

      {/* Centered text content with typographic transition */}
      <div className="relative z-10 w-full h-full flex items-center justify-center" style={{ padding: '10% 10%' }}>
        <div className="max-w-4xl w-full text-center flex flex-col items-center" style={{ gap: '2.2rem' }}>

          {/* Line 1: Darwin-era serif styling */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 14 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[1.65rem] sm:text-[2.1rem] lg:text-[2.4rem] font-medium leading-[1.35]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#1E3A5F',
              }}
            >
              Everything so far has been Darwin&rsquo;s argument using ideas available in his time.
            </p>
          </motion.div>

          {/* Decorative divider — transitional */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0, scaleX: step >= 1 ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-[2px] w-12" style={{ backgroundColor: '#D4A574' }} />
            <div className="h-[2px] w-8" style={{ background: 'linear-gradient(to right, #D4A574, #2A9D8F)' }} />
            <div className="h-[2px] w-12" style={{ backgroundColor: '#2A9D8F' }} />
          </motion.div>

          {/* Line 2: Transitional mixed style */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 14 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-semibold leading-snug tracking-wide"
              style={{
                fontFamily: "'Inter', Calibri, sans-serif",
                background: 'linear-gradient(135deg, #1E3A5F 0%, #2A9D8F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Now we move forward.
            </p>
          </motion.div>

          {/* Line 3: Fully modern sans-serif with teal color */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 14 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-normal leading-relaxed"
              style={{
                fontFamily: "'Inter', Calibri, sans-serif",
                color: '#264653',
              }}
            >
              Darwin had a serious problem he couldn&rsquo;t solve — and the solution existed in his lifetime, but he never saw it.
            </p>
          </motion.div>

          {/* Era label badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 mt-2"
          >
            <span
              className="text-xs tracking-[0.12em] uppercase font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(30, 58, 95, 0.08)',
                color: '#1E3A5F',
                border: '1px solid rgba(30, 58, 95, 0.15)',
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              1859
            </span>
            <svg width="40" height="12" viewBox="0 0 40 12">
              <defs>
                <linearGradient id="arrow-grad-51" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <line x1="0" y1="6" x2="32" y2="6" stroke="url(#arrow-grad-51)" strokeWidth="1.5" />
              <path d="M30 2 L38 6 L30 10" fill="none" stroke="#2A9D8F" strokeWidth="1.5" opacity="0.4" />
            </svg>
            <span
              className="text-xs tracking-[0.12em] uppercase font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(42, 157, 143, 0.08)',
                color: '#2A9D8F',
                border: '1px solid rgba(42, 157, 143, 0.15)',
                fontFamily: "'Inter', Calibri, sans-serif",
              }}
            >
              1900s
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
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
  const isTemporalTransition = def.id === 'slide-5.1'

  if (isTemporalTransition) {
    return <TemporalTransition51 step={step} content={content} />
  }

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
