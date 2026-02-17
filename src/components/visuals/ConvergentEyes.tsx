import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * ConvergentEyes — Used on slide 3.5
 * Three side-by-side panels showing independently evolved eye types:
 *   1. Octopus camera eye (retina faces light, no blind spot)
 *   2. Insect compound eye (ommatidia array)
 *   3. Mammalian camera eye (inverted retina, blind spot)
 * Step-based staggered animation, bottom text on later step.
 */
export function ConvergentEyes({ step }: Props) {
  const eyes = [
    {
      title: 'Octopus',
      subtitle: 'Camera Eye',
      detail: 'Retina faces light directly. No blind spot.',
      draw: drawOctopusEye,
      accentColor: '#457B9D',
    },
    {
      title: 'Insect',
      subtitle: 'Compound Eye',
      detail: 'Thousands of ommatidia. Wide-angle vision.',
      draw: drawInsectEye,
      accentColor: '#52B788',
    },
    {
      title: 'Mammal',
      subtitle: 'Camera Eye',
      detail: 'Inverted retina. Blind spot present.',
      draw: drawMammalEye,
      accentColor: '#D4A574',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
        {eyes.map((eye, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 14 }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col items-center rounded-xl overflow-hidden"
            style={{
              border: `1.5px solid ${eye.accentColor}22`,
              backgroundColor: 'rgba(255, 255, 255, 0.55)',
              boxShadow: '0 2px 8px rgba(30, 58, 95, 0.05)',
            }}
          >
            {/* SVG eye illustration */}
            <div
              className="w-full flex items-center justify-center"
              style={{
                backgroundColor: `${eye.accentColor}08`,
                padding: '1rem 0.5rem',
              }}
            >
              <svg viewBox="0 0 140 120" className="w-full" style={{ maxHeight: '140px' }}>
                <defs>
                  <linearGradient id={`conv-tissue-${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={eye.accentColor} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={eye.accentColor} stopOpacity="0.45" />
                  </linearGradient>
                  <radialGradient id={`conv-lens-${i}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={eye.accentColor} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={eye.accentColor} stopOpacity="0.02" />
                  </radialGradient>
                </defs>
                {eye.draw(i)}
              </svg>
            </div>

            {/* Labels */}
            <div className="px-3 py-2.5 text-center w-full">
              <p className="text-sm sm:text-base font-bold" style={{ color: eye.accentColor }}>
                {eye.title}
              </p>
              <p className="text-[0.65rem] sm:text-xs tracking-wider uppercase font-semibold mt-0.5"
                 style={{ color: '#2D2D2D', opacity: 0.5 }}>
                {eye.subtitle}
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 0.65 : 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-[0.62rem] sm:text-[0.7rem] mt-1.5 leading-snug"
                style={{ color: '#2D2D2D' }}
              >
                {eye.detail}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nilsson & Pelger model footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 2 ? 0.45 : 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-[0.72rem] sm:text-[0.82rem] italic text-center mt-1 max-w-2xl"
        style={{ color: '#2D2D2D' }}
      >
        Nilsson & Pelger model: patch → camera eye feasible in ~hundreds of thousands of generations.
        A model with stated assumptions, not a measurement.
      </motion.p>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   Individual Eye Type SVG Drawings
   ═══════════════════════════════════════════════ */

function drawOctopusEye(idx: number) {
  return (
    <g>
      {/* Eyeball outer wall */}
      <ellipse cx="70" cy="60" rx="38" ry="42" fill={`url(#conv-tissue-${idx})`} opacity={0.12} />
      <ellipse cx="70" cy="60" rx="38" ry="42" fill="none" stroke="#457B9D" strokeWidth="2.5" />

      {/* Cornea bulge */}
      <path d="M48 24 Q70 12 92 24" fill="none" stroke="#457B9D" strokeWidth="2" />

      {/* Lens */}
      <ellipse cx="70" cy="28" rx="12" ry="7" fill={`url(#conv-lens-${idx})`} />
      <ellipse cx="70" cy="28" rx="12" ry="7" fill="none" stroke="#457B9D" strokeWidth="1.5" opacity={0.6} />

      {/* Retina — FACES LIGHT (key difference) */}
      <path d="M38 66 Q70 90 102 66" fill="none" stroke="#D4A574" strokeWidth="4" opacity={0.7} />

      {/* Receptor cells pointing toward light (inward) */}
      {[44, 52, 60, 70, 78, 86, 94].map((x, i) => {
        const y = 67 + Math.abs(x - 70) * 0.15
        return (
          <rect key={i} x={x - 1.5} y={y - 6} width="3" height="6" rx="1" fill="#D4A574" opacity={0.7} />
        )
      })}

      {/* Light rays */}
      <line x1="70" y1="4" x2="70" y2="21" stroke="#C9A961" strokeWidth="1" strokeDasharray="3,2" opacity={0.5} />
      <polyline points="50,6 58,21 70,64" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.4} />
      <polyline points="90,6 82,21 70,64" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.4} />

      {/* "No blind spot" callout */}
      <text x="70" y="110" textAnchor="middle" fontSize="7.5" fill="#457B9D" opacity={0.55} fontWeight="600">
        No blind spot
      </text>
    </g>
  )
}

function drawInsectEye(idx: number) {
  return (
    <g>
      {/* Compound eye dome */}
      <path
        d="M25 80 Q25 20 70 15 Q115 20 115 80"
        fill={`url(#conv-tissue-${idx})`}
        opacity={0.1}
      />
      <path
        d="M25 80 Q25 20 70 15 Q115 20 115 80"
        fill="none"
        stroke="#52B788"
        strokeWidth="2.5"
      />

      {/* Hexagonal ommatidia grid */}
      {generateHexGrid(70, 52, 8, 5).map((hex, i) => (
        <polygon
          key={i}
          points={hexPoints(hex.x, hex.y, 7)}
          fill="rgba(82, 183, 136, 0.08)"
          stroke="#52B788"
          strokeWidth="0.8"
          opacity={0.6 + Math.random() * 0.2}
        />
      ))}

      {/* Individual lens dots in center of each ommatidium */}
      {generateHexGrid(70, 52, 8, 5).map((hex, i) => (
        <circle
          key={`dot-${i}`}
          cx={hex.x}
          cy={hex.y}
          r="1.5"
          fill="#52B788"
          opacity={0.4}
        />
      ))}

      {/* Light rays entering multiple facets */}
      {[45, 60, 70, 80, 95].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1={2}
          x2={x + (70 - x) * 0.15}
          y2={28}
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeDasharray="2,2"
          opacity={0.35}
        />
      ))}

      {/* "Wide field" callout */}
      <text x="70" y="110" textAnchor="middle" fontSize="7.5" fill="#52B788" opacity={0.55} fontWeight="600">
        Wide field of view
      </text>
    </g>
  )
}

function drawMammalEye(idx: number) {
  return (
    <g>
      {/* Eyeball */}
      <ellipse cx="70" cy="60" rx="38" ry="42" fill={`url(#conv-tissue-${idx})`} opacity={0.1} />
      <ellipse cx="70" cy="60" rx="38" ry="42" fill="none" stroke="#D4A574" strokeWidth="2.5" />

      {/* Cornea */}
      <path d="M48 24 Q70 12 92 24" fill="none" stroke="#D4A574" strokeWidth="2" />

      {/* Iris */}
      <line x1="48" y1="27" x2="56" y2="30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <line x1="92" y1="27" x2="84" y2="30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />

      {/* Lens */}
      <ellipse cx="70" cy="32" rx="11" ry="7" fill={`url(#conv-lens-${idx})`} />
      <ellipse cx="70" cy="32" rx="11" ry="7" fill="none" stroke="#D4A574" strokeWidth="1.5" opacity={0.6} />

      {/* Retina — INVERTED (receptors face away from light) */}
      <path d="M38 66 Q70 90 102 66" fill="none" stroke="#D4A574" strokeWidth="4" opacity={0.7} />

      {/* Receptor cells pointing AWAY from light (outward) */}
      {[44, 52, 60, 70, 78, 86, 94].map((x, i) => {
        const y = 67 + Math.abs(x - 70) * 0.15
        return (
          <rect key={i} x={x - 1.5} y={y} width="3" height="6" rx="1" fill="#D4A574" opacity={0.7} />
        )
      })}

      {/* Blood vessel layer in front of retina */}
      <path d="M44 64 Q58 58 70 62 Q82 66 96 60" fill="none" stroke="#E63946" strokeWidth="0.6" opacity={0.25} />

      {/* Blind spot marker */}
      <circle cx="88" cy="72" r="4" fill="none" stroke="#E63946" strokeWidth="1.2" opacity={0.5} />
      <line x1="86" y1="70" x2="90" y2="74" stroke="#E63946" strokeWidth="0.8" opacity={0.5} />

      {/* Optic nerve */}
      <path d="M70 96 L70 108 Q68 112 64 114" stroke="#1E3A5F" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Light rays */}
      <polyline points="52,6 60,25 70,64" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.4} />
      <polyline points="88,6 80,25 70,64" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.4} />

      {/* "Blind spot" callout */}
      <text x="70" y="110" textAnchor="middle" fontSize="7.5" fill="#D4A574" opacity={0.55} fontWeight="600">
        Blind spot present
      </text>
    </g>
  )
}

/* ── Helpers ── */

function generateHexGrid(cx: number, cy: number, spacing: number, rings: number) {
  const hexes: { x: number; y: number }[] = []
  for (let q = -rings; q <= rings; q++) {
    for (let r = -rings; r <= rings; r++) {
      if (Math.abs(q + r) > rings) continue
      const x = cx + spacing * (q + r * 0.5) * 1.05
      const y = cy + spacing * r * 0.92
      const dist = Math.sqrt((x - cx) ** 2 + ((y - cy) * 1.3) ** 2)
      if (dist < spacing * rings * 0.85) {
        hexes.push({ x, y })
      }
    }
  }
  return hexes
}

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(' ')
}
