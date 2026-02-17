import { motion } from 'framer-motion'
import type { DarwinSlideDef, TemplateAContent } from '../../types'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Template A: Section Header
 * Full-bleed palette background, dramatic section number + title centered,
 * 1-sentence preview, timing indicator. Museum exhibition entrance feel.
 */
export function TemplateA({ def, step: _step }: Props) {
  const content = def.content as TemplateAContent
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative slide-palette-bg"
      data-palette={def.palette}
      style={{ padding: '6% 8%' }}
    >
      {/* Thin accent line at top */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-[2px]"
        style={{ backgroundColor: 'var(--slide-accent)', opacity: 0.5 }}
      />

      <div className="text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg font-sans font-semibold tracking-[0.25em] uppercase mb-6"
          style={{ color: 'var(--slide-accent)' }}
        >
          Section {content.sectionNumber}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-8"
          style={{ color: 'var(--slide-heading)' }}
        >
          {content.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-16 h-[2px] mx-auto mb-8"
          style={{ backgroundColor: 'var(--slide-accent)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
          style={{ color: 'var(--slide-text)', opacity: 0.7 }}
        >
          {content.preview}
        </motion.p>
      </div>

      {/* Thin accent line at bottom */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-[2px]"
        style={{ backgroundColor: 'var(--slide-accent)', opacity: 0.5 }}
      />

      {/* Timing indicator */}
      <div className="absolute bottom-6 right-8 text-xs font-sans" style={{ color: 'var(--slide-text)', opacity: 0.3 }}>
        {def.timing}s
      </div>
    </div>
  )
}
