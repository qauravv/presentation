import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * MendelDarwinTimeline — Used on slide 5.4
 * Horizontal illustrated timeline showing the tragic near-miss
 * between Mendel's publication and Darwin's death.
 * Modern palette, step-based reveal.
 */
export function MendelDarwinTimeline({ step }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <svg viewBox="0 0 800 280" className="w-full" style={{ maxHeight: '300px' }}>
        <defs>
          <linearGradient id="tl-axis" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#264653" stopOpacity="0.4" />
          </linearGradient>
          <filter id="tl-glow-green">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#2A9D8F" floodOpacity="0.3" />
          </filter>
          <filter id="tl-glow-red">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#E63946" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Timeline axis */}
        <motion.line
          x1="60" y1="140" x2="740" y2="140"
          stroke="url(#tl-axis)" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Year tick marks */}
        {[
          { x: 100, year: '1856' },
          { x: 220, year: '1863' },
          { x: 300, year: '1866' },
          { x: 340, year: '1867' },
          { x: 520, year: '1882' },
          { x: 700, year: '1900' },
        ].map((tick, i) => (
          <g key={i}>
            <line x1={tick.x} y1="132" x2={tick.x} y2="148" stroke="#264653" strokeWidth="1.2" opacity={0.25} />
            <text x={tick.x} y="164" textAnchor="middle" fontSize="10" fill="#264653" fontWeight="500"
                  fontFamily="Inter, sans-serif" opacity={0.5}>
              {tick.year}
            </text>
          </g>
        ))}

        {/* ─── MENDEL'S SIDE (Step 0) ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Mendel's experiments span 1856-1863 */}
          <rect x="100" y="132" width="120" height="16" rx="8" fill="#2A9D8F" opacity={0.12} />
          <line x1="100" y1="140" x2="220" y2="140" stroke="#2A9D8F" strokeWidth="4" strokeLinecap="round" opacity={0.5} />

          {/* Pea plant icon */}
          <g transform="translate(160, 75)">
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#2A9D8F" opacity={0.15} />
            <circle cx="0" cy="-2" r="5" fill="#2A9D8F" opacity={0.25} />
            <line x1="0" y1="5" x2="0" y2="20" stroke="#2A9D8F" strokeWidth="1.5" opacity={0.3} />
            <path d="M-4 12 Q0 8 4 12" fill="none" stroke="#2A9D8F" strokeWidth="1" opacity={0.25} />
          </g>
          <text x="160" y="70" textAnchor="middle" fontSize="9" fill="#2A9D8F" fontWeight="600"
                fontFamily="Inter, sans-serif" opacity={0.7}>
            Mendel&apos;s experiments
          </text>

          {/* Mendel publishes 1866 — key event */}
          <g filter="url(#tl-glow-green)">
            <circle cx="300" cy="140" r="8" fill="#2A9D8F" />
          </g>
          <circle cx="300" cy="140" r="12" fill="none" stroke="#2A9D8F" strokeWidth="1" opacity={0.3} />

          {/* Publication marker */}
          <g transform="translate(300, 82)">
            <rect x="-12" y="-8" width="24" height="18" rx="2" fill="#2A9D8F" opacity={0.12} stroke="#2A9D8F" strokeWidth="0.8" />
            <line x1="-7" y1="-3" x2="7" y2="-3" stroke="#2A9D8F" strokeWidth="0.6" opacity={0.4} />
            <line x1="-7" y1="1" x2="7" y2="1" stroke="#2A9D8F" strokeWidth="0.6" opacity={0.4} />
            <line x1="-7" y1="5" x2="3" y2="5" stroke="#2A9D8F" strokeWidth="0.6" opacity={0.4} />
          </g>
          <text x="300" y="70" textAnchor="middle" fontSize="9.5" fill="#2A9D8F" fontWeight="700"
                fontFamily="Inter, sans-serif">
            Mendel publishes
          </text>

          {/* Mendel silhouette */}
          <g transform="translate(155, 185)" opacity={0.15}>
            <circle cx="0" cy="0" r="12" fill="#2A9D8F" />
            <rect x="-8" y="10" width="16" height="18" rx="3" fill="#2A9D8F" />
          </g>
          <text x="155" y="225" textAnchor="middle" fontSize="7.5" fill="#2A9D8F" fontFamily="Inter, sans-serif"
                fontWeight="500" opacity={0.35} fontStyle="italic">
            Gregor Mendel
          </text>
        </motion.g>

        {/* ─── JENKIN + DARWIN'S SIDE (Step 1) ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Jenkin's critique 1867 */}
          <g filter="url(#tl-glow-red)">
            <circle cx="340" cy="140" r="7" fill="#E63946" />
          </g>
          <circle cx="340" cy="140" r="11" fill="none" stroke="#E63946" strokeWidth="1" opacity={0.3} />

          <text x="340" y="182" textAnchor="middle" fontSize="9" fill="#E63946" fontWeight="700"
                fontFamily="Inter, sans-serif">
            Jenkin&apos;s critique
          </text>
          <text x="340" y="194" textAnchor="middle" fontSize="7.5" fill="#E63946" fontFamily="Inter, sans-serif" opacity={0.5}>
            &ldquo;Blending destroys variation&rdquo;
          </text>

          {/* THE GAP — 1 YEAR — pulsing highlight */}
          <motion.g
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <line x1="304" y1="125" x2="336" y2="125" stroke="#E63946" strokeWidth="2" strokeDasharray="4,2" />
            <rect x="307" y="110" width="26" height="14" rx="7" fill="#E63946" opacity={0.12} />
            <text x="320" y="120" textAnchor="middle" fontSize="8" fill="#E63946" fontWeight="800"
                  fontFamily="Inter, sans-serif">
              1 yr
            </text>
          </motion.g>

          {/* Darwin dies 1882 */}
          <g>
            <circle cx="520" cy="140" r="7" fill="#1E3A5F" opacity={0.7} />
            <line x1="516" y1="136" x2="524" y2="144" stroke="white" strokeWidth="1.5" opacity={0.5} />
            <line x1="524" y1="136" x2="516" y2="144" stroke="white" strokeWidth="1.5" opacity={0.5} />
          </g>
          <text x="520" y="182" textAnchor="middle" fontSize="9.5" fill="#1E3A5F" fontWeight="700"
                fontFamily="Inter, sans-serif" opacity={0.7}>
            Darwin dies
          </text>

          {/* Darwin silhouette */}
          <g transform="translate(520, 205)" opacity={0.12}>
            <circle cx="0" cy="0" r="12" fill="#1E3A5F" />
            <rect x="-8" y="10" width="16" height="18" rx="3" fill="#1E3A5F" />
          </g>
          <text x="520" y="245" textAnchor="middle" fontSize="7.5" fill="#1E3A5F" fontFamily="Inter, sans-serif"
                fontWeight="500" opacity={0.3} fontStyle="italic">
            Charles Darwin
          </text>

          {/* NEVER CONNECTED — broken dashed line */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <line x1="200" y1="220" x2="340" y2="220" stroke="#264653" strokeWidth="1.5" strokeDasharray="6,4" opacity={0.15} />
            <line x1="380" y1="220" x2="510" y2="220" stroke="#264653" strokeWidth="1.5" strokeDasharray="6,4" opacity={0.15} />
            {/* Gap symbol */}
            <g transform="translate(360, 220)">
              <line x1="-8" y1="-5" x2="-3" y2="5" stroke="#E63946" strokeWidth="1.5" opacity={0.4} />
              <line x1="3" y1="-5" x2="8" y2="5" stroke="#E63946" strokeWidth="1.5" opacity={0.4} />
            </g>
          </motion.g>
        </motion.g>

        {/* ─── 1900: Mendel Rediscovered (Step 2, optional extension) ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <circle cx="700" cy="140" r="7" fill="#C9A961" />
          <circle cx="700" cy="140" r="11" fill="none" stroke="#C9A961" strokeWidth="1" opacity={0.3} />
          <text x="700" y="182" textAnchor="middle" fontSize="9" fill="#C9A961" fontWeight="700"
                fontFamily="Inter, sans-serif">
            Mendel rediscovered
          </text>
          <text x="700" y="194" textAnchor="middle" fontSize="7.5" fill="#C9A961" fontFamily="Inter, sans-serif" opacity={0.55}>
            18 years too late
          </text>

          {/* Connection finally made — golden glow */}
          <line x1="310" y1="150" x2="690" y2="150" stroke="#C9A961" strokeWidth="1" strokeDasharray="4,3" opacity={0.2} />
        </motion.g>
      </svg>
    </div>
  )
}
