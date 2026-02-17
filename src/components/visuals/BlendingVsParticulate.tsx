import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * BlendingVsParticulate — Used on slide 5.3 (Template E)
 * Rich two-panel comparison: Blending (paint fading) vs Particulate (instruction cards).
 * Multi-generation visual tracking in each panel.
 * Modern palette (teal accents, cool-white tones).
 */
export function BlendingVsParticulate({ step }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="grid grid-cols-2 gap-5 sm:gap-6 w-full">
        {/* Left Panel: BLENDING (Wrong) */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl overflow-hidden flex flex-col"
          style={{
            border: '2px solid #E63946',
            backgroundColor: 'rgba(230, 57, 70, 0.02)',
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: '#E63946' }}
              >
                ✘
              </span>
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#E63946' }}>BLENDING</h3>
            </div>
          </div>

          {/* SVG illustration — paint drops merging and fading */}
          <div className="px-4 py-2 flex-1">
            <svg viewBox="0 0 240 200" className="w-full" style={{ maxHeight: '200px' }}>
              <defs>
                <filter id="bp-blur" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
                <linearGradient id="bp-mix" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8B7B72" />
                  <stop offset="100%" stopColor="#E76F51" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Generation labels on the left */}
              <text x="10" y="30" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>P</text>
              <text x="10" y="80" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>F1</text>
              <text x="10" y="132" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>F2</text>
              <text x="10" y="180" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>F3</text>

              {/* Parent generation — two vivid drops */}
              <circle cx="90" cy="26" r="16" fill="#2A9D8F" />
              <circle cx="86" cy="21" r="4" fill="white" opacity={0.2} />
              <circle cx="155" cy="26" r="16" fill="#E76F51" />
              <circle cx="151" cy="21" r="4" fill="white" opacity={0.2} />

              {/* Merge arrows */}
              <path d="M100 40 Q120 55 120 58" stroke="#999" strokeWidth="1" strokeDasharray="3,2" fill="none" opacity={0.4} />
              <path d="M145 40 Q125 55 125 58" stroke="#999" strokeWidth="1" strokeDasharray="3,2" fill="none" opacity={0.4} />

              {/* F1 — blended, still visible */}
              <circle cx="122" cy="76" r="15" fill="url(#bp-mix)" filter="url(#bp-blur)" />
              <circle cx="122" cy="76" r="15" fill="url(#bp-mix)" opacity={0.5} />
              <text x="150" y="74" fontSize="7" fill="#E63946" fontWeight="600" fontFamily="Inter, sans-serif" opacity={0.6}>halved</text>

              {/* Arrow F1 → F2 */}
              <path d="M122 92 L122 108" stroke="#999" strokeWidth="0.8" strokeDasharray="2,2" fill="none" opacity={0.3} />

              {/* F2 — fading */}
              <circle cx="122" cy="128" r="13" fill="#9E9A8E" opacity={0.4} filter="url(#bp-blur)" />
              <circle cx="122" cy="128" r="13" fill="#9E9A8E" opacity={0.3} />
              <text x="148" y="126" fontSize="7" fill="#E63946" fontWeight="600" fontFamily="Inter, sans-serif" opacity={0.5}>fading</text>

              {/* Arrow F2 → F3 */}
              <path d="M122 142 L122 158" stroke="#999" strokeWidth="0.6" strokeDasharray="2,2" fill="none" opacity={0.2} />

              {/* F3 — dissolved ghost */}
              <circle cx="122" cy="176" r="10" fill="#B0ADA6" opacity={0.15} filter="url(#bp-blur)" />
              <circle cx="122" cy="176" r="10" fill="none" stroke="#B0ADA6" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.25} />
              <text x="145" y="174" fontSize="7" fill="#E63946" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.6}>gone</text>

              {/* Decay curve */}
              <path d="M195 22 Q195 60 190 95 Q185 130 185 170 Q185 185 185 195"
                    fill="none" stroke="#E63946" strokeWidth="1.2" strokeDasharray="4,3" opacity={0.25} />
              <text x="200" y="26" fontSize="6" fill="#E63946" fontFamily="Inter, sans-serif" opacity={0.3}>variation</text>
              <text x="200" y="195" fontSize="6" fill="#E63946" fontFamily="Inter, sans-serif" opacity={0.3}>zero</text>
            </svg>
          </div>

          {/* Labels */}
          <div className="px-5 pb-4">
            <p className="text-xs sm:text-sm italic" style={{ color: '#E63946', opacity: 0.7 }}>Darwin&rsquo;s problem</p>
            <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: '#264653', opacity: 0.7 }}>
              Variation dissolves — halved each generation until nothing remains
            </p>
          </div>
        </motion.div>

        {/* Right Panel: PARTICULATE (Correct) */}
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : 14 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl overflow-hidden flex flex-col"
          style={{
            border: '2px solid #52B788',
            backgroundColor: 'rgba(82, 183, 136, 0.02)',
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: '#52B788' }}
              >
                ✓
              </span>
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#52B788' }}>PARTICULATE</h3>
            </div>
          </div>

          {/* SVG illustration — discrete cards passed intact */}
          <div className="px-4 py-2 flex-1">
            <svg viewBox="0 0 240 200" className="w-full" style={{ maxHeight: '200px' }}>
              <defs>
                <pattern id="card-back" width="4" height="4" patternUnits="userSpaceOnUse">
                  <rect width="4" height="4" fill="#457B9D" opacity="0.1" />
                  <path d="M0 0 L4 4 M4 0 L0 4" stroke="#457B9D" strokeWidth="0.3" opacity="0.2" />
                </pattern>
              </defs>

              {/* Generation labels */}
              <text x="10" y="30" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>P</text>
              <text x="10" y="88" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>F1</text>
              <text x="10" y="145" fontSize="8" fill="#264653" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.4}>F2</text>

              {/* Parent cards — face up, vivid */}
              {/* Red card */}
              <g>
                <rect x="65" y="12" width="36" height="28" rx="4" fill="#E76F51" />
                <rect x="67" y="14" width="32" height="24" rx="3" fill="none" stroke="white" strokeWidth="0.5" opacity={0.3} />
                <text x="83" y="30" textAnchor="middle" fontSize="9" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">A</text>
              </g>
              {/* Blue card */}
              <g>
                <rect x="140" y="12" width="36" height="28" rx="4" fill="#2A9D8F" />
                <rect x="142" y="14" width="32" height="24" rx="3" fill="none" stroke="white" strokeWidth="0.5" opacity={0.3} />
                <text x="158" y="30" textAnchor="middle" fontSize="9" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">B</text>
              </g>

              {/* Pass-down lines */}
              <path d="M83 42 Q83 52 95 62" stroke="#999" strokeWidth="0.8" strokeDasharray="3,2" fill="none" opacity={0.3} />
              <path d="M83 42 Q83 52 145 62" stroke="#999" strokeWidth="0.8" strokeDasharray="3,2" fill="none" opacity={0.3} />
              <path d="M158 42 Q158 52 145 62" stroke="#999" strokeWidth="0.8" strokeDasharray="3,2" fill="none" opacity={0.3} />
              <path d="M158 42 Q158 52 95 62" stroke="#999" strokeWidth="0.8" strokeDasharray="3,2" fill="none" opacity={0.3} />

              {/* F1 Offspring 1: A expressed, B masked */}
              <g>
                {/* Expressed (face up — red) */}
                <rect x="65" y="68" width="30" height="22" rx="3" fill="#E76F51" />
                <text x="80" y="83" textAnchor="middle" fontSize="8" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">A</text>
                {/* Masked (face down — blue pattern, faded) */}
                <rect x="65" y="93" width="30" height="22" rx="3" fill="url(#card-back)" stroke="#2A9D8F" strokeWidth="0.8" strokeDasharray="3,2" opacity={0.5} />
                <text x="80" y="108" textAnchor="middle" fontSize="6" fill="#2A9D8F" fontFamily="Inter, sans-serif" opacity={0.5}>B</text>
                <text x="102" y="108" fontSize="6" fill="#52B788" fontFamily="Inter, sans-serif" fontStyle="italic" opacity={0.6}>masked</text>
              </g>

              {/* F1 Offspring 2: B expressed, A masked */}
              <g>
                <rect x="145" y="68" width="30" height="22" rx="3" fill="#2A9D8F" />
                <text x="160" y="83" textAnchor="middle" fontSize="8" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">B</text>
                <rect x="145" y="93" width="30" height="22" rx="3" fill="url(#card-back)" stroke="#E76F51" strokeWidth="0.8" strokeDasharray="3,2" opacity={0.5} />
                <text x="160" y="108" textAnchor="middle" fontSize="6" fill="#E76F51" fontFamily="Inter, sans-serif" opacity={0.5}>A</text>
                <text x="182" y="108" fontSize="6" fill="#52B788" fontFamily="Inter, sans-serif" fontStyle="italic" opacity={0.6}>masked</text>
              </g>

              {/* Arrow F1 → F2 */}
              <path d="M80 117 Q80 124 120 130" stroke="#999" strokeWidth="0.8" strokeDasharray="2,2" fill="none" opacity={0.25} />
              <path d="M160 117 Q160 124 120 130" stroke="#999" strokeWidth="0.8" strokeDasharray="2,2" fill="none" opacity={0.25} />

              {/* F2: Hidden card REAPPEARS! */}
              <g>
                {/* The A card reappears face-up — with glow */}
                <rect x="90" y="133" width="30" height="22" rx="3" fill="#E76F51" />
                <rect x="88" y="131" width="34" height="26" rx="4" fill="none" stroke="#52B788" strokeWidth="1.5" opacity={0.6} />
                <text x="105" y="148" textAnchor="middle" fontSize="8" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">A</text>
                {/* The B card still present */}
                <rect x="125" y="133" width="30" height="22" rx="3" fill="#2A9D8F" />
                <text x="140" y="148" textAnchor="middle" fontSize="8" fill="white" fontWeight="700" fontFamily="Inter, sans-serif">B</text>
              </g>

              {/* "Reappears!" callout */}
              <g>
                <line x1="88" y1="144" x2="60" y2="148" stroke="#52B788" strokeWidth="0.8" opacity={0.5} />
                <text x="28" y="152" textAnchor="start" fontSize="7" fill="#52B788" fontWeight="700" fontFamily="Inter, sans-serif">
                  reappears!
                </text>
              </g>

              {/* Variation meter — stays full */}
              <g>
                <rect x="85" y="170" width="70" height="5" rx="2.5" fill="#264653" opacity={0.06} />
                <rect x="85" y="170" width="70" height="5" rx="2.5" fill="#52B788" opacity={0.35} />
                <text x="160" y="177" fontSize="7" fill="#52B788" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.6}>
                  100%
                </text>
              </g>

              {/* "INTACT" badge */}
              <rect x="85" y="183" width="70" height="14" rx="7" fill="rgba(82, 183, 136, 0.1)" stroke="#52B788" strokeWidth="0.8" />
              <text x="120" y="193" textAnchor="middle" fontSize="7" fill="#52B788" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.08em">
                VARIATION INTACT
              </text>
            </svg>
          </div>

          {/* Labels */}
          <div className="px-5 pb-4">
            <p className="text-xs sm:text-sm italic" style={{ color: '#52B788', opacity: 0.7 }}>Mendel&rsquo;s solution</p>
            <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: '#264653', opacity: 0.7 }}>
              Cards passed intact — masked in one generation, reappear in the next
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center"
      >
        <p className="text-lg sm:text-xl font-bold" style={{ color: '#2A9D8F' }}>
          Variation is preserved, not diluted.
        </p>
        <p className="text-sm sm:text-base mt-1" style={{ color: '#264653', opacity: 0.7 }}>
          This is exactly what natural selection requires.
        </p>
      </motion.div>
    </div>
  )
}
