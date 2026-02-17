import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * EyeStages — Used on slide 3.3
 * Five panels showing progressively complex eye cross-sections.
 * Rich SVG illustrations with gradients, fills, and layered anatomy.
 * NO ARROWS between panels — each is visually ISOLATED.
 * "Complete functional system" badge under each.
 * Step-based staggered reveal animation.
 */
export function EyeStages({ step }: Props) {
  const stages = [
    {
      title: 'Light-sensitive patch',
      description: 'Detects predator\'s shadow.',
      draw: drawPatch,
    },
    {
      title: 'Cup shape',
      description: 'Registers light direction.',
      draw: drawCup,
    },
    {
      title: 'Pinhole',
      description: 'Detects shape + movement.',
      draw: drawPinhole,
    },
    {
      title: 'Lens',
      description: 'Sharp images. Navigation.',
      draw: drawLens,
    },
    {
      title: 'Camera-type eye',
      description: 'Adjustable focus + iris.',
      draw: drawCameraEye,
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:gap-5 w-full">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 14 }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col items-center"
          >
            {/* SVG diagram panel */}
            <div
              className="w-full rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                aspectRatio: '1 / 1.15',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(245,241,232,0.6) 100%)',
                border: '1.5px solid rgba(30, 58, 95, 0.12)',
                boxShadow: '0 2px 8px rgba(30, 58, 95, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <svg viewBox="0 0 120 130" className="w-[90%] h-[90%]">
                <defs>
                  {/* Shared gradient definitions */}
                  <linearGradient id={`tissue-${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.55" />
                  </linearGradient>
                  <linearGradient id={`receptor-${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4A574" />
                    <stop offset="100%" stopColor="#C9A961" />
                  </linearGradient>
                  <radialGradient id={`lens-glow-${i}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4A574" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#D4A574" stopOpacity="0.02" />
                  </radialGradient>
                  <linearGradient id={`light-ray-${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C9A961" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#D4A574" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {stage.draw(i)}
              </svg>
            </div>

            {/* Stage title */}
            <p
              className="text-[0.72rem] sm:text-sm font-bold mt-2.5 text-center leading-tight"
              style={{ color: '#1E3A5F' }}
            >
              {stage.title}
            </p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 0.7 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="text-[0.6rem] sm:text-[0.68rem] text-center leading-snug mt-1"
              style={{ color: '#2D2D2D' }}
            >
              {stage.description}
            </motion.p>

            {/* "Complete functional system" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: step >= 1 ? 1 : 0, scale: step >= 1 ? 1 : 0.92 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="mt-1.5 rounded-full px-2 py-0.5 text-center"
              style={{
                backgroundColor: 'rgba(212, 165, 116, 0.15)',
                border: '1px solid rgba(212, 165, 116, 0.35)',
              }}
            >
              <span
                className="text-[0.5rem] sm:text-[0.58rem] tracking-[0.08em] uppercase font-bold"
                style={{ color: '#A0764A' }}
              >
                Complete functional system
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   Individual Stage SVG Drawings — Rich Anatomical Detail
   ═══════════════════════════════════════════════ */

function drawPatch(idx: number) {
  return (
    <g>
      {/* Background tissue surface */}
      <rect x="20" y="68" width="80" height="14" rx="2" fill={`url(#tissue-${idx})`} opacity={0.7} />

      {/* Photoreceptor cell layer — gradient-filled columns */}
      {[28, 38, 48, 58, 68, 78].map((x) => (
        <g key={x}>
          <rect x={x} y="56" width="5" height="12" rx="1.5" fill={`url(#receptor-${idx})`} />
          <rect x={x + 0.5} y="56" width="4" height="3" rx="1" fill="#D4A574" opacity={0.5} />
        </g>
      ))}

      {/* Flat epidermal surface line */}
      <line x1="18" y1="55" x2="85" y2="55" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />

      {/* Light rays from multiple directions */}
      <line x1="52" y1="10" x2="52" y2="50" stroke={`url(#light-ray-${idx})`} strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="32" y1="14" x2="42" y2="50" stroke={`url(#light-ray-${idx})`} strokeWidth="1" strokeDasharray="3,3" opacity={0.6} />
      <line x1="72" y1="14" x2="62" y2="50" stroke={`url(#light-ray-${idx})`} strokeWidth="1" strokeDasharray="3,3" opacity={0.6} />

      {/* Shadow detection area */}
      <ellipse cx="52" cy="44" rx="22" ry="6" fill="#C9A961" opacity={0.08} />

      {/* Light ray arrowheads */}
      <polygon points="50,50 54,50 52,53" fill="#C9A961" opacity={0.5} />

      {/* Label */}
      <text x="60" y="100" textAnchor="middle" fontSize="7" fill="#1E3A5F" opacity={0.55} fontStyle="italic">
        detects light / shadow
      </text>
    </g>
  )
}

function drawCup(idx: number) {
  return (
    <g>
      {/* Cup-shaped tissue wall — filled */}
      <path
        d="M28 35 Q28 80 60 88 Q92 80 92 35"
        fill={`url(#tissue-${idx})`}
        opacity={0.25}
      />
      <path
        d="M28 35 Q28 80 60 88 Q92 80 92 35"
        fill="none"
        stroke="#1E3A5F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Inner receptor layer lining the cup */}
      <path
        d="M34 40 Q34 74 60 82 Q86 74 86 40"
        fill="none"
        stroke="#D4A574"
        strokeWidth="3"
        opacity={0.6}
      />

      {/* Individual photoreceptor cells along inner wall */}
      {[38, 46, 54, 62, 70, 78].map((x, i) => {
        const y = 42 + Math.abs(x - 60) * 0.55
        return (
          <rect key={i} x={x - 2} y={y} width="4" height="7" rx="1.5" fill={`url(#receptor-${idx})`} />
        )
      })}

      {/* Light rays — partially blocked by cup walls */}
      <line x1="60" y1="8" x2="60" y2="38" stroke={`url(#light-ray-${idx})`} strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="40" y1="10" x2="48" y2="38" stroke={`url(#light-ray-${idx})`} strokeWidth="1" strokeDasharray="3,3" opacity={0.5} />
      <line x1="80" y1="10" x2="72" y2="38" stroke={`url(#light-ray-${idx})`} strokeWidth="1" strokeDasharray="3,3" opacity={0.5} />

      {/* Blocked rays hitting cup wall */}
      <line x1="22" y1="12" x2="30" y2="42" stroke="#E63946" strokeWidth="0.8" strokeDasharray="2,3" opacity={0.3} />
      <text x="20" y="18" fontSize="6" fill="#E63946" opacity={0.4}>✕</text>

      {/* Label */}
      <text x="60" y="104" textAnchor="middle" fontSize="7" fill="#1E3A5F" opacity={0.55} fontStyle="italic">
        directional sensing
      </text>
    </g>
  )
}

function drawPinhole(idx: number) {
  return (
    <g>
      {/* Near-enclosed sphere — filled interior */}
      <path
        d="M42 24 Q22 48 28 72 Q38 92 60 92 Q82 92 92 72 Q98 48 78 24"
        fill={`url(#tissue-${idx})`}
        opacity={0.18}
      />
      <path
        d="M42 24 Q22 48 28 72 Q38 92 60 92 Q82 92 92 72 Q98 48 78 24"
        fill="none"
        stroke="#1E3A5F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Small aperture opening */}
      <line x1="42" y1="24" x2="48" y2="21" stroke="#1E3A5F" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="78" y1="24" x2="72" y2="21" stroke="#1E3A5F" strokeWidth="2.5" strokeLinecap="round" />

      {/* Aperture gap highlight */}
      <line x1="48" y1="21" x2="72" y2="21" stroke="#C9A961" strokeWidth="1" strokeDasharray="2,2" opacity={0.5} />

      {/* Receptor layer inside — curved along back wall */}
      <path
        d="M35 62 Q60 82 85 62"
        fill="none"
        stroke="#D4A574"
        strokeWidth="3.5"
        opacity={0.65}
      />

      {/* Receptor cells */}
      {[40, 50, 60, 70, 80].map((x, i) => {
        const y = 63 + Math.abs(x - 60) * 0.2
        return (
          <rect key={i} x={x - 1.5} y={y} width="3" height="6" rx="1" fill={`url(#receptor-${idx})`} />
        )
      })}

      {/* Light through pinhole — focused convergence */}
      <line x1="60" y1="4" x2="60" y2="18" stroke={`url(#light-ray-${idx})`} strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="60" y1="26" x2="48" y2="60" stroke="#C9A961" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.5} />
      <line x1="60" y1="26" x2="72" y2="60" stroke="#C9A961" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.5} />
      <line x1="60" y1="26" x2="60" y2="62" stroke="#C9A961" strokeWidth="1" strokeDasharray="3,2" opacity={0.6} />

      {/* Focus point */}
      <circle cx="60" cy="65" r="2" fill="#C9A961" opacity={0.4} />

      {/* Label */}
      <text x="60" y="108" textAnchor="middle" fontSize="7" fill="#1E3A5F" opacity={0.55} fontStyle="italic">
        crude image formation
      </text>
    </g>
  )
}

function drawLens(idx: number) {
  return (
    <g>
      {/* Eyeball sphere */}
      <ellipse cx="60" cy="60" rx="32" ry="36" fill={`url(#tissue-${idx})`} opacity={0.15} />
      <ellipse cx="60" cy="60" rx="32" ry="36" fill="none" stroke="#1E3A5F" strokeWidth="2.5" />

      {/* Lens — biconvex with glow */}
      <ellipse cx="60" cy="30" rx="14" ry="7" fill={`url(#lens-glow-${idx})`} />
      <ellipse cx="60" cy="30" rx="14" ry="7" fill="rgba(212, 165, 116, 0.12)" stroke="#D4A574" strokeWidth="1.8" />

      {/* Lens internal structure lines */}
      <ellipse cx="60" cy="30" rx="8" ry="4" fill="none" stroke="#D4A574" strokeWidth="0.6" opacity={0.3} />

      {/* Retina — thick curved receptor layer at back */}
      <path d="M34 68 Q60 86 86 68" fill="none" stroke="#D4A574" strokeWidth="4" opacity={0.7} />

      {/* Individual retinal receptors */}
      {[38, 46, 54, 62, 70, 78].map((x, i) => {
        const y = 69 + Math.abs(x - 60) * 0.15
        return (
          <rect key={i} x={x - 1.5} y={y} width="3" height="5" rx="1" fill={`url(#receptor-${idx})`} opacity={0.8} />
        )
      })}

      {/* Light rays bending through lens and converging */}
      <polyline points="42,6 50,23 60,68" fill="none" stroke="#C9A961" strokeWidth="1" strokeDasharray="3,2" opacity={0.55} />
      <polyline points="78,6 70,23 60,68" fill="none" stroke="#C9A961" strokeWidth="1" strokeDasharray="3,2" opacity={0.55} />
      <line x1="60" y1="6" x2="60" y2="23" stroke="#C9A961" strokeWidth="1" strokeDasharray="3,2" opacity={0.5} />

      {/* Focal point */}
      <circle cx="60" cy="68" r="2.5" fill="#C9A961" opacity={0.6} />
      <circle cx="60" cy="68" r="4.5" fill="none" stroke="#C9A961" strokeWidth="0.5" opacity={0.3} />

      {/* Label */}
      <text x="60" y="108" textAnchor="middle" fontSize="7" fill="#1E3A5F" opacity={0.55} fontStyle="italic">
        focused images
      </text>
    </g>
  )
}

function drawCameraEye(idx: number) {
  return (
    <g>
      {/* Outer sclera */}
      <ellipse cx="60" cy="58" rx="34" ry="38" fill={`url(#tissue-${idx})`} opacity={0.12} />
      <ellipse cx="60" cy="58" rx="34" ry="38" fill="none" stroke="#1E3A5F" strokeWidth="2.5" />

      {/* Cornea — slight bulge at front */}
      <path d="M42 24 Q60 14 78 24" fill="none" stroke="#1E3A5F" strokeWidth="2" />

      {/* Iris */}
      <line x1="42" y1="27" x2="50" y2="30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
      <line x1="78" y1="27" x2="70" y2="30" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />

      {/* Pupil opening */}
      <line x1="50" y1="30" x2="70" y2="30" stroke="none" />

      {/* Lens — biconvex, detailed */}
      <ellipse cx="60" cy="33" rx="10" ry="7" fill={`url(#lens-glow-${idx})`} />
      <ellipse cx="60" cy="33" rx="10" ry="7" fill="rgba(212, 165, 116, 0.1)" stroke="#D4A574" strokeWidth="1.8" />
      <ellipse cx="60" cy="33" rx="5.5" ry="3.5" fill="none" stroke="#D4A574" strokeWidth="0.5" opacity={0.25} />

      {/* Vitreous chamber — subtle fill */}
      <ellipse cx="60" cy="52" rx="24" ry="20" fill="#F5F1E8" opacity={0.08} />

      {/* Retina — thick, detailed receptor layer */}
      <path d="M30 62 Q60 88 90 62" fill="none" stroke="#D4A574" strokeWidth="4.5" opacity={0.7} />

      {/* Dense retinal receptors */}
      {[34, 41, 48, 55, 62, 69, 76, 83].map((x, i) => {
        const y = 63 + Math.abs(x - 60) * 0.18
        return (
          <rect key={i} x={x - 1.2} y={y} width="2.4" height="5" rx="0.8" fill={`url(#receptor-${idx})`} opacity={0.85} />
        )
      })}

      {/* Focused light rays through lens */}
      <polyline points="42,4 52,26 60,66" fill="none" stroke="#C9A961" strokeWidth="0.9" strokeDasharray="3,2" opacity={0.5} />
      <polyline points="78,4 68,26 60,66" fill="none" stroke="#C9A961" strokeWidth="0.9" strokeDasharray="3,2" opacity={0.5} />
      <line x1="60" y1="4" x2="60" y2="26" stroke="#C9A961" strokeWidth="0.9" strokeDasharray="3,2" opacity={0.45} />

      {/* Focal point */}
      <circle cx="60" cy="66" r="2.5" fill="#C9A961" opacity={0.65} />
      <circle cx="60" cy="66" r="5" fill="none" stroke="#C9A961" strokeWidth="0.5" opacity={0.25} />

      {/* Optic nerve */}
      <path d="M60 92 L60 104 Q58 108 54 110" stroke="#1E3A5F" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Micro-labels */}
      <text x="96" y="34" fontSize="5.5" fill="#1E3A5F" opacity={0.4}>iris</text>
      <text x="96" y="66" fontSize="5.5" fill="#D4A574" opacity={0.5}>retina</text>
      <text x="76" y="36" fontSize="5.5" fill="#D4A574" opacity={0.4}>lens</text>
    </g>
  )
}
