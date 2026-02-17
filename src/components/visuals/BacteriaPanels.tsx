import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Props {
  step: number
}

/**
 * BacteriaPanels — Used on slide 2.7
 * UPGRADED: High-fidelity biological visualization.
 * - Organic cell shapes
 * - Glassmorphic containers
 * - Dynamic lighting effects
 */
export function BacteriaPanels({ step }: Props) {
  const panels = [
    {
      title: 'Before antibiotics',
      subtitle: 'Resistant (teal) variation already exists.',
      bgClass: 'bg-white/60',
    },
    {
      title: 'Add antibiotics',
      subtitle: 'Environment sorts.',
      bgClass: 'bg-uni-red/5 border-uni-red/20',
    },
    {
      title: 'After',
      subtitle: 'Population shifted.',
      bgClass: 'bg-white/60',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full">
        {panels.map((panel, panelIdx) => (
          <motion.div
            key={panelIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: step >= panelIdx ? 1 : 0, y: step >= panelIdx ? 0 : 15 }}
            transition={{ duration: 0.5, delay: panelIdx * 0.15, ease: "backOut" }}
            className={`
                relative rounded-xl overflow-hidden border border-white/40 shadow-sm backdrop-blur-sm
                flex flex-col h-full ${panel.bgClass}
            `}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-darwin-navy/5 bg-white/40">
              <p className="text-sm sm:text-base font-bold text-darwin-navy text-center font-heading tracking-wide text-darwin-navy">
                {panel.title}
              </p>
            </div>

            {/* Petri Dish Area */}
            <div className="relative flex-grow min-h-[140px] bg-gradient-to-br from-white/20 to-darwin-navy/5">
              <DotField panelType={panelIdx as 0 | 1 | 2} />

              {/* Antibiotic Wash Overlay */}
              {panelIdx === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute inset-0 bg-uni-red/10 mix-blend-multiply pointer-events-none"
                />
              )}
            </div>

            {/* Subtitle */}
            <div className="px-4 py-3 bg-white/60 border-t border-darwin-navy/5">
              <p className="text-xs sm:text-sm text-darwin-charcoal/80 text-center leading-snug">
                {panel.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gold Box Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: step >= 0 ? 1 : 0, scale: step >= 0 ? 1 : 0.95 }}
        transition={{ delay: 0.8 }}
        className="mt-2"
      >
        <div className="gold-box text-sm sm:text-base">
          The bacteria didn't "try" to resist.
        </div>
      </motion.div>
    </div>
  )
}

function DotField({ panelType }: { panelType: 0 | 1 | 2 }) {
  const cells = useMemo(() => {
    // Generate organic positions using a seeded random approach (simplified)
    const result: { x: number; y: number; r: number; rotation: number; isResistant: boolean; opacity: number }[] = []
    const count = panelType === 2 ? 18 : 28

    // Simple seeded random
    let seed = panelType * 1234
    const rng = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }

    for (let i = 0; i < count; i++) {
      // Determine resistance
      let isResistant = false
      if (panelType === 0) isResistant = rng() < 0.25 // Mixed
      if (panelType === 1) isResistant = rng() < 0.30 // Sorting phase... mostly fit ones survive
      if (panelType === 2) isResistant = rng() < 0.95 // Terminated most non-resistant

      // If panel 1 (antibiotic), kill off non-resistant visually
      let opacity = 1
      if (panelType === 1 && !isResistant) opacity = 0.3
      if (panelType === 2 && !isResistant) opacity = 0.2

      result.push({
        x: 10 + rng() * 80,
        y: 10 + rng() * 70, // Keep within viewBox
        r: 3 + rng() * 2.5,
        rotation: rng() * 360,
        isResistant,
        opacity
      })
    }

    // Force at least a few resistant ones in panel 0 and 1
    if (panelType !== 2 && result.length >= 3) {
      if (result[0]) result[0].isResistant = true
      if (result[1]) result[1].isResistant = true
      if (result[2]) result[2].isResistant = true
    }

    return result
  }, [panelType])

  return (
    <svg viewBox="0 0 100 90" className="w-full h-full absolute inset-0 pointer-events-none">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {cells.map((cell, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: cell.opacity }}
          transition={{ duration: 0.4, delay: i * 0.02 }}
        >
          {/* Cell Body - Organic Shapes via simplified pill/ellipse */}
          <ellipse
            cx={cell.x}
            cy={cell.y}
            rx={cell.r}
            ry={cell.r * 0.6}
            fill={cell.isResistant ? '#2A9D8F' : '#A0A0A0'} // Teal vs Gray
            stroke="white"
            strokeWidth="0.5"
            transform={`rotate(${cell.rotation} ${cell.x} ${cell.y})`}
            filter="url(#glow)"
          />
          {/* Nucleoid region hint */}
          <circle
            cx={cell.x}
            cy={cell.y}
            r={cell.r * 0.2}
            fill="rgba(255,255,255,0.4)"
          />
        </motion.g>
      ))}
    </svg>
  )
}
