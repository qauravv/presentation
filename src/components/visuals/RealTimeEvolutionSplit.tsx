import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Props {
  step: number
}

/**
 * RealTimeEvolutionSplit — Used on slide 4.6
 * Split visual: bacteria resistance (left) + Grant's finch study (right).
 * Bacteria panel: Animated dot field showing rapid takeover.
 * Finch panel: Beak size shifting dynamically.
 * Styled for premium "stunning" aesthetic.
 */
export function RealTimeEvolutionSplit({ step }: Props) {
  return (
    <div className="w-full grid grid-cols-2 gap-6 sm:gap-8">
      {/* Left: Antibiotic Resistance */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl overflow-hidden bg-white shadow-xl border border-[#1E3A5F]/10 flex flex-col"
      >
        {/* Header */}
        <div className="px-5 py-4 flex items-center gap-3 bg-[#1E3A5F]/5 border-b border-[#1E3A5F]/10">
          <div className="w-8 h-8 rounded-full bg-[#457B9D]/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#457B9D] fill-current">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.5} />
              <circle cx="9" cy="9" r="2.5" />
              <circle cx="15" cy="11" r="2" opacity={0.6} />
              <circle cx="11" cy="16" r="2" opacity={0.8} />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#1E3A5F] tracking-tight">
            Antibiotic Resistance
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest font-bold text-[#1E3A5F] opacity-50 mb-2 text-center">
                Before
              </p>
              <div className="flex-1 rounded-xl bg-[#F5F1E8]/50 border border-[#1E3A5F]/10 p-2 relative overflow-hidden">
                <MiniDotField panelType={0} />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest font-bold text-[#1E3A5F] opacity-50 mb-2 text-center">
                After
              </p>
              <div className="flex-1 rounded-xl bg-[#F5F1E8]/50 border border-[#1E3A5F]/10 p-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#E63946]/5 z-0" />
                <MiniDotField panelType={2} />
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block px-3 py-1 bg-[#1E3A5F]/10 rounded-full text-xs font-semibold text-[#1E3A5F]">
              Time: Years / Decades
            </span>
            <p className="text-xs text-[#1E3A5F]/60 mt-1 italic">
              Observe adaptation in real-time.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right: Grant's Finch Study */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="rounded-2xl overflow-hidden bg-white shadow-xl border border-[#D4A574]/30 flex flex-col"
      >
        {/* Header */}
        <div className="px-5 py-4 flex items-center gap-3 bg-[#D4A574]/10 border-b border-[#D4A574]/20">
          <div className="w-8 h-8 rounded-full bg-[#D4A574]/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C9A961] fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.5 4 14.82 4.42 15.96 5.14L14.7 6.4C13.9 6.14 13.02 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12H16L19 9L22 12H20C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12Z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#1E3A5F] tracking-tight">
            The Grants' Finch Study
          </span>
        </div>

        {/* Finch beak comparison */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Drought year */}
            <div className="text-center flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest font-bold text-[#E63946] mb-2 flex items-center justify-center gap-1">
                <span>☀️</span> Drought
              </p>
              <div className="flex-1 rounded-xl bg-[#E63946]/5 border border-[#E63946]/20 p-2 flex items-center justify-center relative overflow-hidden group">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FinchBeaks variant="drought" />
                </motion.div>
                <div className="absolute bottom-2 text-[10px] font-bold text-[#E63946] bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
                  Large Seeds Only
                </div>
              </div>
            </div>

            {/* Rain year */}
            <div className="text-center flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest font-bold text-[#2A9D8F] mb-2 flex items-center justify-center gap-1">
                <span>🌧️</span> Rain
              </p>
              <div className="flex-1 rounded-xl bg-[#2A9D8F]/5 border border-[#2A9D8F]/20 p-2 flex items-center justify-center relative overflow-hidden group">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <FinchBeaks variant="rain" />
                </motion.div>
                <div className="absolute bottom-2 text-[10px] font-bold text-[#2A9D8F] bg-white/80 px-2 py-0.5 rounded-full shadow-sm">
                  Soft Seeds Available
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block px-3 py-1 bg-[#D4A574]/10 rounded-full text-xs font-semibold text-[#1E3A5F]">
              Time: 40+ Years
            </span>
            <p className="text-xs text-[#1E3A5F]/60 mt-1 italic">
              Measured selection generation by generation.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function MiniDotField({ panelType }: { panelType: 0 | 2 }) {
  const dots = useMemo(() => {
    const seed = panelType * 100
    const result: { x: number; y: number; isResistant: boolean; opacity: number; scale: number }[] = []
    const rng = (i: number) => {
      const x = Math.sin(seed + i * 2654435761) * 10000
      return x - Math.floor(x)
    }
    const count = 30 // Increased density
    for (let i = 0; i < count; i++) {
      const isResistant = panelType === 0 ? rng(i + 50) < 0.2 : rng(i + 50) < 0.85
      let opacity = 0.8
      if (panelType === 2 && !isResistant) opacity = 0.2
      if (panelType === 2 && isResistant) opacity = 1

      result.push({
        x: 10 + rng(i) * 80,
        y: 10 + rng(i + 30) * 80,
        isResistant,
        opacity,
        scale: 0.5 + rng(i + 99) * 0.5
      })
    }
    return result
  }, [panelType])

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.isResistant ? 4 * dot.scale : 3 * dot.scale}
          fill={dot.isResistant ? '#E63946' : '#457B9D'}
          opacity={dot.opacity}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.02 }}
        />
      ))}
      {panelType === 2 && (
        <motion.rect
          x="0" y="0" width="100" height="100"
          fill="none"
          stroke="#E63946" strokeWidth="2" opacity={0.1}
          initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1 }}
        />
      )}
    </svg>
  )
}

function FinchBeaks({ variant }: { variant: 'drought' | 'rain' }) {
  // Drought = Large beak favored
  // Rain = Small/Medium beak favored (shifted distribution)

  const isDrought = variant === 'drought'
  const beakColor = isDrought ? '#E63946' : '#2A9D8F'
  const headColor = '#1E3A5F'

  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-lg">
      {/* Bird Head Silhouette */}
      <circle cx="50" cy="50" r="25" fill={headColor} />
      <circle cx="60" cy="42" r="3" fill="white" />

      {/* Beak */}
      {isDrought ? (
        <path d="M70 45 L95 55 L70 65 Z" fill={beakColor} stroke="white" strokeWidth="1" />
      ) : (
        <path d="M70 48 L85 52 L70 56 Z" fill={beakColor} stroke="white" strokeWidth="1" />
      )}

      {/* Seeds */}
      {isDrought ? (
        <g transform="translate(10, 70)">
          <circle cx="10" cy="10" r="6" fill="#8D6E63" stroke="#5D4037" strokeWidth="1" />
          <circle cx="25" cy="5" r="5" fill="#8D6E63" stroke="#5D4037" strokeWidth="1" />
        </g>
      ) : (
        <g transform="translate(10, 70)">
          <circle cx="10" cy="10" r="3" fill="#A1887F" />
          <circle cx="20" cy="12" r="3" fill="#A1887F" />
          <circle cx="30" cy="8" r="3" fill="#A1887F" />
          <circle cx="15" cy="20" r="3" fill="#A1887F" />
        </g>
      )}
    </svg>
  )
}
