import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * BlendingVsParticulate — Used on slide 5.3
 * Two-panel comparison: Blending (wrong) vs Particulate (correct).
 * Modern palette (teal accents, cool-white tones).
 */
export function BlendingVsParticulate({ step }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="grid grid-cols-2 gap-5 sm:gap-6 w-full">
        {/* Left: Blending (WRONG) */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-xl overflow-hidden"
          style={{
            border: '2px solid #E63946',
            backgroundColor: 'rgba(230, 57, 70, 0.03)',
          }}
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <h3 className="text-lg sm:text-xl font-bold text-uni-red">BLENDING</h3>
            <span className="text-uni-red font-bold text-xl">✘</span>
          </div>

          <div className="px-5 py-3">
            <svg viewBox="0 0 200 140" className="w-full" style={{ maxHeight: '160px' }}>
              {/* Parent colors */}
              <circle cx="60" cy="25" r="18" fill="#E63946" opacity={0.9} />
              <circle cx="140" cy="25" r="18" fill="#457B9D" opacity={0.9} />
              {/* Merge arrows */}
              <path d="M60 45 L100 70" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
              <path d="M140 45 L100 70" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
              {/* Mixed result */}
              <circle cx="100" cy="90" r="18" fill="#8B6B7F" opacity={0.8} />
              {/* Fading further */}
              <path d="M100 110 L100 125" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="100" cy="135" r="10" fill="#8B6B7F" opacity={0.35} />
              {/* Labels */}
              <text x="100" y="92" textAnchor="middle" fontSize="8" fill="white" fontWeight="600">mixed</text>
            </svg>
          </div>

          <div className="px-5 pb-4">
            <p className="text-xs sm:text-sm text-darwin-charcoal/60 italic">Darwin&rsquo;s problem</p>
            <p className="text-xs sm:text-sm text-darwin-charcoal/80 mt-1 leading-relaxed">
              Variation dissolves — halved each generation
            </p>
          </div>
        </motion.div>

        {/* Right: Particulate (CORRECT) */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : 12 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="rounded-xl overflow-hidden"
          style={{
            border: '2px solid #52B788',
            backgroundColor: 'rgba(82, 183, 136, 0.03)',
          }}
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <h3 className="text-lg sm:text-xl font-bold text-uni-green">PARTICULATE</h3>
            <span className="text-uni-green font-bold text-xl">✓</span>
          </div>

          <div className="px-5 py-3">
            <svg viewBox="0 0 200 140" className="w-full" style={{ maxHeight: '160px' }}>
              {/* Parent cards */}
              <rect x="40" y="10" width="28" height="20" rx="3" fill="#E63946" opacity={0.9} />
              <rect x="132" y="10" width="28" height="20" rx="3" fill="#457B9D" opacity={0.9} />
              {/* Pass-down lines */}
              <path d="M54 32 L70 55" stroke="#999" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M54 32 L130 55" stroke="#999" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M146 32 L70 55" stroke="#999" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M146 32 L130 55" stroke="#999" strokeWidth="1" strokeDasharray="3,2" />
              {/* Offspring - cards intact */}
              <rect x="56" y="58" width="28" height="16" rx="3" fill="#E63946" opacity={0.9} />
              <rect x="56" y="76" width="28" height="16" rx="3" fill="#457B9D" opacity={0.3} strokeDasharray="3,2" stroke="#457B9D" strokeWidth="0.5" />
              <rect x="116" y="58" width="28" height="16" rx="3" fill="#457B9D" opacity={0.9} />
              <rect x="116" y="76" width="28" height="16" rx="3" fill="#E63946" opacity={0.3} strokeDasharray="3,2" stroke="#E63946" strokeWidth="0.5" />
              {/* Next generation */}
              <path d="M70 94 L100 110" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
              <path d="M130 94 L100 110" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
              <rect x="86" y="112" width="28" height="16" rx="3" fill="#457B9D" opacity={0.9} />
              <rect x="86" y="130" width="28" height="4" rx="1" fill="#E63946" opacity={0.4} />
              <text x="100" y="140" textAnchor="middle" fontSize="6" fill="#999">hidden but intact</text>
            </svg>
          </div>

          <div className="px-5 pb-4">
            <p className="text-xs sm:text-sm text-darwin-charcoal/60 italic">Mendel&rsquo;s solution</p>
            <p className="text-xs sm:text-sm text-darwin-charcoal/80 mt-1 leading-relaxed">
              Variation preserved — masked but intact
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-lg sm:text-xl font-bold text-modern-teal">
          Variation is preserved, not diluted.
        </p>
        <p className="text-sm sm:text-base text-darwin-charcoal/70 mt-1">
          This is exactly what natural selection requires.
        </p>
      </motion.div>
    </div>
  )
}
