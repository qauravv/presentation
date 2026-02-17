import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * ExaptationFeather — Used on slide 3.4
 * Central feather illustration with two labeled function boxes:
 *   LEFT: "Insulation / Display" (original function)
 *   RIGHT: "Flight" (co-opted function)
 * Curved arrow with "co-opted" annotation.
 * Step-based animation: feather first, then functions, then arrow.
 */
export function ExaptationFeather({ step }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full max-w-3xl mx-auto" style={{ aspectRatio: '3 / 1.6' }}>
        <svg viewBox="0 0 600 320" className="w-full h-full">
          <defs>
            <linearGradient id="feather-shaft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#2A4A6F" />
            </linearGradient>
            <linearGradient id="feather-barb-left" x1="1" y1="0" x2="0" y2="0.5">
              <stop offset="0%" stopColor="#D4A574" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C9A961" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="feather-barb-right" x1="0" y1="0" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#D4A574" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C9A961" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D4A574" />
              <stop offset="100%" stopColor="#1E3A5F" />
            </linearGradient>
          </defs>

          {/* ── Central Feather ── */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 10 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Shaft (rachis) */}
            <path
              d="M300 30 Q298 160 295 290"
              fill="none"
              stroke="url(#feather-shaft)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Left barbs */}
            {Array.from({ length: 14 }, (_, i) => {
              const y = 50 + i * 17
              const x = 298 - (i * 0.3)
              const len = 35 + Math.sin(i * 0.4) * 15 + (i < 7 ? i * 4 : (14 - i) * 4)
              return (
                <path
                  key={`l${i}`}
                  d={`M${x} ${y} Q${x - len * 0.5} ${y + 4} ${x - len} ${y + 8}`}
                  fill="none"
                  stroke="url(#feather-barb-left)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )
            })}

            {/* Right barbs */}
            {Array.from({ length: 14 }, (_, i) => {
              const y = 50 + i * 17
              const x = 302 + (i * 0.3)
              const len = 35 + Math.sin(i * 0.4) * 15 + (i < 7 ? i * 4 : (14 - i) * 4)
              return (
                <path
                  key={`r${i}`}
                  d={`M${x} ${y} Q${x + len * 0.5} ${y + 4} ${x + len} ${y + 8}`}
                  fill="none"
                  stroke="url(#feather-barb-right)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )
            })}

            {/* Feather tip */}
            <ellipse cx="300" cy="35" rx="4" ry="8" fill="#D4A574" opacity={0.4} />
          </motion.g>

          {/* ── LEFT: Original Function Box ── */}
          <motion.g
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -12 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <rect x="30" y="110" width="160" height="100" rx="12" fill="rgba(212, 165, 116, 0.08)" stroke="#D4A574" strokeWidth="2" />
            <text x="110" y="145" textAnchor="middle" fontSize="16" fontWeight="700" fill="#D4A574">
              Insulation / Display
            </text>
            <text x="110" y="168" textAnchor="middle" fontSize="11" fill="#2D2D2D" opacity="0.65">
              Original function
            </text>
            <text x="110" y="186" textAnchor="middle" fontSize="10" fill="#2D2D2D" opacity="0.5" fontStyle="italic">
              Thermoregulation, mate
            </text>
            <text x="110" y="198" textAnchor="middle" fontSize="10" fill="#2D2D2D" opacity="0.5" fontStyle="italic">
              signaling in dinosaurs
            </text>
          </motion.g>

          {/* ── RIGHT: Co-opted Function Box ── */}
          <motion.g
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : 12 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <rect x="410" y="110" width="160" height="100" rx="12" fill="rgba(30, 58, 95, 0.06)" stroke="#1E3A5F" strokeWidth="2" />
            <text x="490" y="145" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1E3A5F">
              Flight
            </text>
            <text x="490" y="168" textAnchor="middle" fontSize="11" fill="#2D2D2D" opacity="0.65">
              Co-opted function
            </text>
            <text x="490" y="186" textAnchor="middle" fontSize="10" fill="#2D2D2D" opacity="0.5" fontStyle="italic">
              Aerodynamic capability
            </text>
            <text x="490" y="198" textAnchor="middle" fontSize="10" fill="#2D2D2D" opacity="0.5" fontStyle="italic">
              emerged from existing structure
            </text>
          </motion.g>

          {/* ── Connecting Arrow ── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Curved arrow path from left to right below feather */}
            <path
              d="M190 200 Q300 270 410 200"
              fill="none"
              stroke="url(#arrow-grad)"
              strokeWidth="2"
              strokeDasharray="6,3"
              markerEnd="url(#arrow-head)"
            />
            {/* Arrowhead */}
            <polygon points="410,200 402,194 404,204" fill="#1E3A5F" opacity={0.7} />

            {/* "co-opted" label on arrow */}
            <rect x="262" y="248" width="76" height="22" rx="11" fill="rgba(201, 169, 97, 0.12)" stroke="#C9A961" strokeWidth="1" />
            <text x="300" y="263" textAnchor="middle" fontSize="10" fontWeight="600" fill="#C9A961">
              co-opted
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  )
}
