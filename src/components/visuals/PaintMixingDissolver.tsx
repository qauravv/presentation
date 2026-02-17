import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * PaintMixingDissolver — Used on slide 5.2
 * Multi-generation paint dissolution sequence showing why blending
 * inheritance is fatal for natural selection. Each generation halves
 * the variation until it dissolves completely.
 * Modern palette (teal/coral tones).
 */
export function PaintMixingDissolver({ step }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <svg viewBox="0 0 520 260" className="w-full" style={{ maxHeight: '280px' }}>
        <defs>
          <filter id="pm-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <linearGradient id="pm-mix-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#8B8670" />
            <stop offset="100%" stopColor="#E76F51" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="pm-mix-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7D8B82" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9B8E7E" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="pm-variation-bar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2A9D8F" />
            <stop offset="100%" stopColor="#E76F51" />
          </linearGradient>
        </defs>

        {/* Generation 0: Parents — two distinct drops */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left parent drop (teal) */}
          <circle cx="90" cy="38" r="22" fill="#2A9D8F" />
          <circle cx="85" cy="32" r="6" fill="white" opacity={0.2} />
          <text x="90" y="70" textAnchor="middle" fontSize="9" fill="#264653" fontWeight="600" fontFamily="Inter, sans-serif">
            Trait A
          </text>

          {/* Right parent drop (coral) */}
          <circle cx="170" cy="38" r="22" fill="#E76F51" />
          <circle cx="165" cy="32" r="6" fill="white" opacity={0.2} />
          <text x="170" y="70" textAnchor="middle" fontSize="9" fill="#264653" fontWeight="600" fontFamily="Inter, sans-serif">
            Trait B
          </text>

          {/* Generation label */}
          <text x="20" y="42" textAnchor="middle" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.5}>
            P
          </text>

          {/* Variation bar — full */}
          <rect x="60" y="82" width="140" height="6" rx="3" fill="url(#pm-variation-bar)" opacity={0.7} />
          <text x="210" y="88" fontSize="8" fill="#264653" opacity={0.5} fontFamily="Inter, sans-serif" fontWeight="600">
            100%
          </text>
        </motion.g>

        {/* Arrow P → F1 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 0.4 : 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <path d="M130 55 L130 85 L300 85 L300 110" fill="none" stroke="#264653" strokeWidth="1.2" strokeDasharray="4,3" />
          <text x="215" y="80" fontSize="7.5" fill="#E63946" fontWeight="700" fontFamily="Inter, sans-serif">
            BLEND: ÷2
          </text>
        </motion.g>

        {/* Generation 1: F1 — mixed but distinguishable */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 8 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <circle cx="300" cy="130" r="20" fill="url(#pm-mix-1)" filter="url(#pm-blur)" />
          <circle cx="300" cy="130" r="20" fill="url(#pm-mix-1)" opacity={0.6} />
          <circle cx="296" cy="124" r="5" fill="white" opacity={0.12} />

          <text x="260" y="134" textAnchor="end" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.5}>
            F1
          </text>
          <text x="330" y="128" fontSize="8" fill="#E63946" fontWeight="600" fontFamily="Inter, sans-serif">
            halved
          </text>

          {/* Variation bar — 50% */}
          <rect x="268" y="155" width="65" height="5" rx="2.5" fill="#264653" opacity={0.08} />
          <rect x="268" y="155" width="65" height="5" rx="2.5" fill="url(#pm-variation-bar)" opacity={0.4} />
          <text x="340" y="161" fontSize="7" fill="#264653" opacity={0.45} fontFamily="Inter, sans-serif">
            50%
          </text>
        </motion.g>

        {/* Arrow F1 → F2 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 0.35 : 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <path d="M300 155 L300 170 L400 170 L400 190" fill="none" stroke="#264653" strokeWidth="1" strokeDasharray="3,3" />
          <text x="350" y="166" fontSize="7" fill="#E63946" fontWeight="600" fontFamily="Inter, sans-serif" opacity={0.7}>
            ÷2
          </text>
        </motion.g>

        {/* Generation 2: F2 — further diluted */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 8 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <circle cx="400" cy="208" r="16" fill="#9E9A8E" opacity={0.6} filter="url(#pm-blur)" />
          <circle cx="400" cy="208" r="16" fill="#9E9A8E" opacity={0.45} />

          <text x="365" y="212" textAnchor="end" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.5}>
            F2
          </text>

          {/* Variation bar — 25% */}
          <rect x="378" y="230" width="44" height="4" rx="2" fill="#264653" opacity={0.06} />
          <rect x="378" y="230" width="16" height="4" rx="2" fill="url(#pm-variation-bar)" opacity={0.25} />
          <text x="428" y="235" fontSize="7" fill="#264653" opacity={0.35} fontFamily="Inter, sans-serif">
            25%
          </text>
        </motion.g>

        {/* Arrow F2 → F3 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 0.3 : 0 }}
          transition={{ duration: 0.3, delay: 0.95 }}
        >
          <path d="M400 230 L400 238 L470 238 L470 195" fill="none" stroke="#264653" strokeWidth="0.8" strokeDasharray="3,3" />
        </motion.g>

        {/* Generation 3: F3 — dissolved */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 8 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <circle cx="470" cy="175" r="12" fill="#B0ADA6" opacity={0.25} filter="url(#pm-blur)" />
          <circle cx="470" cy="175" r="12" fill="#B0ADA6" opacity={0.2} />
          <circle cx="470" cy="175" r="12" fill="none" stroke="#B0ADA6" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.3} />

          <text x="445" y="179" textAnchor="end" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>
            F3
          </text>

          {/* Variation bar — near zero */}
          <rect x="456" y="194" width="30" height="3" rx="1.5" fill="#264653" opacity={0.05} />
          <rect x="456" y="194" width="3" height="3" rx="1.5" fill="#B0ADA6" opacity={0.3} />
          <text x="492" y="198" fontSize="7" fill="#E63946" opacity={0.6} fontFamily="Inter, sans-serif" fontWeight="700">
            ≈0%
          </text>
        </motion.g>

        {/* FATAL stamp on the dissolved generation */}
        <motion.g
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{
            opacity: step >= 0 ? 1 : 0,
            scale: step >= 0 ? 1 : 1.3,
          }}
          transition={{ duration: 0.4, delay: 1.3 }}
        >
          <rect x="440" y="130" width="62" height="22" rx="3" fill="none" stroke="#E63946" strokeWidth="2" opacity={0.6}
                transform="rotate(-8 471 141)" />
          <text x="471" y="146" textAnchor="middle" fontSize="11" fill="#E63946" fontWeight="800"
                fontFamily="Inter, sans-serif" letterSpacing="0.1em" transform="rotate(-8 471 141)" opacity={0.65}>
            FATAL
          </text>
        </motion.g>

        {/* Decay curve annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <path d="M230 90 Q280 92 320 140 Q360 188 420 220 Q460 240 500 245"
                fill="none" stroke="#E63946" strokeWidth="1.5" strokeDasharray="4,3" opacity={0.3} />
          <text x="500" y="252" fontSize="7" fill="#E63946" opacity={0.4} fontFamily="Inter, sans-serif" fontStyle="italic">
            variation dissolves
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
