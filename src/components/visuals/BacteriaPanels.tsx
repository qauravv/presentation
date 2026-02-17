import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Props {
  step: number
}

/**
 * BacteriaPanels — Used on slide 2.7
 * Three horizontal panels: Before → Add antibiotics → After
 * Gold callout box below: "The bacteria didn't try to resist."
 * SVG dots with randomized positions for organic feel.
 */
export function BacteriaPanels({ step }: Props) {
  const panels = [
    {
      title: 'Before antibiotics',
      subtitle: 'Resistant (blue) and susceptible (gray) variation already exists.',
      bgWash: 'transparent',
    },
    {
      title: 'Add antibiotics',
      subtitle: 'Environment sorts.',
      bgWash: 'rgba(230, 57, 70, 0.06)',
    },
    {
      title: 'After',
      subtitle: 'Population shifted.',
      bgWash: 'transparent',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full">
        {panels.map((panel, panelIdx) => (
          <motion.div
            key={panelIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= panelIdx ? 1 : 0, y: step >= panelIdx ? 0 : 10 }}
            transition={{ duration: 0.45, delay: panelIdx * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl overflow-hidden"
            style={{
              border: '1px solid #DDD',
              backgroundColor: 'white',
            }}
          >
            {/* Panel header */}
            <div className="px-4 pt-3 pb-1">
              <p className="text-sm sm:text-base font-bold text-darwin-navy">{panel.title}</p>
            </div>

            {/* Dot area */}
            <div style={{ backgroundColor: panel.bgWash, padding: '0.75rem' }}>
              <DotField panelType={panelIdx as 0 | 1 | 2} />
            </div>

            {/* Subtitle */}
            <div className="px-4 py-2">
              <p className="text-xs sm:text-sm text-darwin-charcoal/70 leading-relaxed">
                {panel.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DotField({ panelType }: { panelType: 0 | 1 | 2 }) {
  const dots = useMemo(() => {
    const seed = panelType * 100
    const result: { x: number; y: number; isResistant: boolean; opacity: number }[] = []
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 2654435761) * 10000
      return x - Math.floor(x)
    }

    const count = panelType === 2 ? 20 : 24
    for (let i = 0; i < count; i++) {
      const isResistant = panelType === 0
        ? rng(i + 50) < 0.3
        : panelType === 1
          ? rng(i + 50) < 0.35
          : rng(i + 50) < 0.9

      let opacity = 1
      if (panelType === 1 && !isResistant) {
        opacity = 0.2 + rng(i + 200) * 0.3
      }
      if (panelType === 2 && !isResistant) {
        opacity = 0.15
      }

      result.push({
        x: 8 + rng(i) * 84,
        y: 8 + rng(i + 30) * 84,
        isResistant,
        opacity,
      })
    }
    return result
  }, [panelType])

  return (
    <svg viewBox="0 0 100 80" className="w-full" style={{ height: '100px' }}>
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={3}
          fill={dot.isResistant ? '#457B9D' : '#999'}
          opacity={dot.opacity}
        />
      ))}
    </svg>
  )
}
