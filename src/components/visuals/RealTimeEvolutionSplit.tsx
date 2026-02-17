import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Props {
  step: number
}

/**
 * RealTimeEvolutionSplit — Used on slide 4.6
 * Split visual: bacteria resistance (left) + Grant's finch study (right).
 * Bacteria panel reuses dot-field pattern from BacteriaPanels.
 * Finch panel shows beak-size variation with drought/rain year comparison.
 */
export function RealTimeEvolutionSplit({ step }: Props) {
  return (
    <div className="w-full grid grid-cols-2 gap-4 sm:gap-5">
      {/* Left: Antibiotic Resistance */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -10 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl overflow-hidden"
        style={{ border: '1.5px solid rgba(30, 58, 95, 0.2)', backgroundColor: 'white' }}
      >
        {/* Header */}
        <div
          className="px-4 py-2.5 flex items-center gap-2"
          style={{ backgroundColor: 'rgba(30, 58, 95, 0.06)', borderBottom: '1px solid rgba(30, 58, 95, 0.1)' }}
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4">
            <circle cx="8" cy="8" r="7" fill="none" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.5} />
            <circle cx="6" cy="7" r="2" fill="#457B9D" opacity={0.7} />
            <circle cx="10" cy="9" r="1.5" fill="#999" opacity={0.5} />
            <circle cx="8" cy="5" r="1.5" fill="#457B9D" opacity={0.5} />
          </svg>
          <span className="text-sm sm:text-base font-bold" style={{ color: '#1E3A5F' }}>
            Antibiotic Resistance
          </span>
        </div>

        {/* Before / After dot fields */}
        <div className="px-3 py-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-[0.6rem] uppercase tracking-wider font-bold text-center mb-1" style={{ color: '#1E3A5F', opacity: 0.5 }}>
                Before
              </p>
              <div className="rounded-lg" style={{ backgroundColor: 'rgba(245,241,232,0.5)', border: '1px solid rgba(30,58,95,0.08)' }}>
                <MiniDotField panelType={0} />
              </div>
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-wider font-bold text-center mb-1" style={{ color: '#1E3A5F', opacity: 0.5 }}>
                After
              </p>
              <div className="rounded-lg" style={{ backgroundColor: 'rgba(245,241,232,0.5)', border: '1px solid rgba(30,58,95,0.08)' }}>
                <MiniDotField panelType={2} />
              </div>
            </div>
          </div>
          <p className="text-[0.68rem] sm:text-xs text-center mt-2 leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.65 }}>
            Populations evolve resistance within years.
          </p>
          <p className="text-[0.6rem] text-center mt-1 italic" style={{ color: '#D4A574' }}>
            Callbacks Section 2.7
          </p>
        </div>
      </motion.div>

      {/* Right: Grant's Finch Study */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : 10 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="rounded-xl overflow-hidden"
        style={{ border: '1.5px solid rgba(30, 58, 95, 0.2)', backgroundColor: 'white' }}
      >
        {/* Header */}
        <div
          className="px-4 py-2.5 flex items-center gap-2"
          style={{ backgroundColor: 'rgba(212, 165, 116, 0.08)', borderBottom: '1px solid rgba(212, 165, 116, 0.15)' }}
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4">
            <path d="M4 10 Q2 8 4 6 Q6 4 10 5 Q12 6 12 8 Q12 10 10 11 Q8 12 4 10Z" fill="#D4A574" opacity={0.5} />
            <path d="M10 6 L14 5 L13 7" fill="#C9A961" opacity={0.6} />
          </svg>
          <span className="text-sm sm:text-base font-bold" style={{ color: '#1E3A5F' }}>
            The Grants' Finch Study
          </span>
        </div>

        {/* Finch beak comparison */}
        <div className="px-3 py-2">
          <div className="grid grid-cols-2 gap-2">
            {/* Drought year */}
            <div className="text-center">
              <p className="text-[0.6rem] uppercase tracking-wider font-bold mb-1" style={{ color: '#E63946', opacity: 0.7 }}>
                Drought year
              </p>
              <div
                className="rounded-lg py-2 px-1"
                style={{ backgroundColor: 'rgba(230, 57, 70, 0.04)', border: '1px solid rgba(230, 57, 70, 0.12)' }}
              >
                <FinchBeaks variant="drought" />
              </div>
              <p className="text-[0.58rem] mt-1 leading-snug" style={{ color: '#2D2D2D', opacity: 0.6 }}>
                Hard seeds → larger beaks survive
              </p>
            </div>

            {/* Rain year */}
            <div className="text-center">
              <p className="text-[0.6rem] uppercase tracking-wider font-bold mb-1" style={{ color: '#52B788', opacity: 0.7 }}>
                Rain year
              </p>
              <div
                className="rounded-lg py-2 px-1"
                style={{ backgroundColor: 'rgba(82, 183, 136, 0.04)', border: '1px solid rgba(82, 183, 136, 0.12)' }}
              >
                <FinchBeaks variant="rain" />
              </div>
              <p className="text-[0.58rem] mt-1 leading-snug" style={{ color: '#2D2D2D', opacity: 0.6 }}>
                Soft seeds → advantage shifts
              </p>
            </div>
          </div>
          <p className="text-[0.68rem] sm:text-xs text-center mt-2 leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.65 }}>
            40+ years, generation by generation. Selection measured.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function MiniDotField({ panelType }: { panelType: 0 | 2 }) {
  const dots = useMemo(() => {
    const seed = panelType * 100
    const result: { x: number; y: number; isResistant: boolean; opacity: number }[] = []
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 2654435761) * 10000
      return x - Math.floor(x)
    }
    const count = 18
    for (let i = 0; i < count; i++) {
      const isResistant = panelType === 0 ? rng(i + 50) < 0.3 : rng(i + 50) < 0.9
      let opacity = 1
      if (panelType === 2 && !isResistant) opacity = 0.15
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
    <svg viewBox="0 0 100 70" className="w-full" style={{ height: '65px' }}>
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={3.5}
          fill={dot.isResistant ? '#457B9D' : '#999'}
          opacity={dot.opacity}
        />
      ))}
    </svg>
  )
}

function FinchBeaks({ variant }: { variant: 'drought' | 'rain' }) {
  const beaks = [
    { size: 'small', w: 8, h: 4 },
    { size: 'medium', w: 11, h: 5.5 },
    { size: 'large', w: 14, h: 7 },
  ]

  const highlightIdx = variant === 'drought' ? 2 : 0

  return (
    <svg viewBox="0 0 100 65" className="w-full" style={{ height: '60px' }}>
      {beaks.map((beak, i) => {
        const cx = 18 + i * 32
        const cy = 30
        const isHighlight = i === highlightIdx
        const headR = 8
        const headColor = isHighlight ? '#1E3A5F' : 'rgba(30, 58, 95, 0.3)'
        const beakColor = isHighlight
          ? (variant === 'drought' ? '#E63946' : '#52B788')
          : 'rgba(30, 58, 95, 0.2)'

        return (
          <g key={i}>
            {/* Highlight ring */}
            {isHighlight && (
              <circle
                cx={cx}
                cy={cy}
                r={headR + 5}
                fill="none"
                stroke={variant === 'drought' ? '#E63946' : '#52B788'}
                strokeWidth="1.2"
                opacity={0.3}
                strokeDasharray="3,2"
              />
            )}
            {/* Head */}
            <circle cx={cx} cy={cy} r={headR} fill={headColor} />
            {/* Eye */}
            <circle cx={cx + 2} cy={cy - 2} r="1.5" fill="white" opacity={isHighlight ? 0.8 : 0.4} />
            {/* Beak */}
            <path
              d={`M${cx + headR - 1} ${cy - beak.h / 2} L${cx + headR + beak.w} ${cy} L${cx + headR - 1} ${cy + beak.h / 2} Z`}
              fill={beakColor}
            />
            {/* Size label */}
            <text
              x={cx}
              y={cy + headR + 11}
              textAnchor="middle"
              fontSize="6.5"
              fill="#2D2D2D"
              opacity={isHighlight ? 0.8 : 0.4}
              fontFamily="Inter, sans-serif"
              fontWeight={isHighlight ? '600' : '400'}
            >
              {beak.size}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
