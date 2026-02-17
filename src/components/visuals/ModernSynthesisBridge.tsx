import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * ModernSynthesisBridge — Used on slide 5.5
 * Two puzzle pieces (Darwin + Mendel) that connect/interlock when
 * the presenter advances. Golden glow at connection point.
 * The "aha" moment visual of the synthesis.
 */
export function ModernSynthesisBridge({ step }: Props) {
  const joined = step >= 1

  return (
    <div className="w-full flex flex-col items-center">
      <svg viewBox="0 0 700 240" className="w-full" style={{ maxHeight: '260px' }}>
        <defs>
          <linearGradient id="msb-darwin" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#24466B" />
          </linearGradient>
          <linearGradient id="msb-mendel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#237A6E" />
            <stop offset="100%" stopColor="#2A9D8F" />
          </linearGradient>
          <filter id="msb-glow">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#FFB703" floodOpacity="0.5" />
          </filter>
          <filter id="msb-shadow">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.12" />
          </filter>
          <clipPath id="msb-darwin-clip">
            <path d="M20 20 L260 20 L260 80 Q280 80 280 100 Q280 120 260 120 L260 200 L20 200 Q10 200 10 190 L10 30 Q10 20 20 20Z" />
          </clipPath>
          <clipPath id="msb-mendel-clip">
            <path d="M310 20 Q300 20 300 30 L300 80 Q280 80 280 100 Q280 120 300 120 L300 190 Q300 200 310 200 L660 200 Q670 200 670 190 L670 30 Q670 20 660 20Z" />
          </clipPath>
        </defs>

        {/* ─── DARWIN PIECE (Left) ─── */}
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: joined ? 20 : 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          filter="url(#msb-shadow)"
        >
          {/* Piece body */}
          <path
            d="M30 25 L260 25 L260 82 Q278 82 278 100 Q278 118 260 118 L260 195 L30 195 Q20 195 20 185 L20 35 Q20 25 30 25Z"
            fill="url(#msb-darwin)"
          />

          {/* Tab (jigsaw connector) */}
          <path
            d="M260 82 Q278 82 278 100 Q278 118 260 118"
            fill="url(#msb-darwin)"
            stroke="#1E3A5F"
            strokeWidth="0"
          />

          {/* Inner content */}
          <text x="140" y="60" textAnchor="middle" fontSize="15" fill="#F5F1E8" fontWeight="700"
                fontFamily="'Playfair Display', Georgia, serif" letterSpacing="0.04em">
            DARWIN
          </text>

          {/* Mini flowchart silhouette */}
          {[75, 95, 115, 135, 155].map((y, i) => (
            <g key={i}>
              <rect x="60" y={y} width="100" height="13" rx="3" fill="#F5F1E8" opacity={0.1} />
              {i < 4 && (
                <line x1="110" y1={y + 13} x2="110" y2={y + 20} stroke="#D4A574" strokeWidth="1" opacity={0.2} />
              )}
            </g>
          ))}

          <text x="140" y="185" textAnchor="middle" fontSize="9" fill="#D4A574" fontWeight="500"
                fontFamily="Inter, sans-serif" opacity={0.7} letterSpacing="0.03em">
            Selection sorts variation
          </text>
        </motion.g>

        {/* ─── MENDEL PIECE (Right) ─── */}
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: joined ? -20 : 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          filter="url(#msb-shadow)"
        >
          {/* Piece body with socket */}
          <path
            d="M420 25 L660 25 Q670 25 670 35 L670 185 Q670 195 660 195 L420 195 L420 118 Q402 118 402 100 Q402 82 420 82Z"
            fill="url(#msb-mendel)"
          />

          {/* Socket (matching tab) */}
          <path
            d="M420 82 Q402 82 402 100 Q402 118 420 118"
            fill="url(#msb-mendel)"
          />

          {/* Inner content */}
          <text x="545" y="60" textAnchor="middle" fontSize="15" fill="#F7F9FB" fontWeight="700"
                fontFamily="Inter, Calibri, sans-serif" letterSpacing="0.04em">
            MENDEL
          </text>

          {/* Instruction cards illustration */}
          <g transform="translate(505, 80)">
            {/* Card A */}
            <rect x="-40" y="0" width="30" height="22" rx="3" fill="#E76F51" opacity={0.5} />
            <text x="-25" y="15" textAnchor="middle" fontSize="9" fill="white" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.6}>A</text>
            {/* Card B */}
            <rect x="10" y="0" width="30" height="22" rx="3" fill="#F7F9FB" opacity={0.3} stroke="#F7F9FB" strokeWidth="0.8" />
            <text x="25" y="15" textAnchor="middle" fontSize="9" fill="#F7F9FB" fontWeight="700" fontFamily="Inter, sans-serif" opacity={0.5}>B</text>
            {/* Down arrow */}
            <line x1="0" y1="26" x2="0" y2="40" stroke="#F7F9FB" strokeWidth="1" opacity={0.2} />
            {/* Cards passed */}
            <rect x="-40" y="44" width="30" height="18" rx="2.5" fill="#E76F51" opacity={0.35} />
            <rect x="10" y="44" width="30" height="18" rx="2.5" fill="#F7F9FB" opacity={0.2} stroke="#F7F9FB" strokeWidth="0.5" />
          </g>

          <text x="545" y="185" textAnchor="middle" fontSize="9" fill="#06D6A0" fontWeight="500"
                fontFamily="Inter, sans-serif" opacity={0.8} letterSpacing="0.03em">
            Variation is preserved
          </text>
        </motion.g>

        {/* ─── CONNECTION GLOW (when joined) ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: joined ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Golden glow at connection point */}
          <circle cx="350" cy="110" r="30" fill="#FFB703" opacity={0.08} filter="url(#msb-glow)" />
          <circle cx="350" cy="110" r="16" fill="#FFB703" opacity={0.12} />
          <circle cx="350" cy="110" r="6" fill="#FFB703" opacity={0.25} />

          {/* Connection sparks */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 350 + Math.cos(rad) * 22
            const y = 110 + Math.sin(rad) * 22
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="1.5"
                fill="#FFB703"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: joined ? [0, 0.6, 0] : 0, scale: joined ? [0, 1.5, 0] : 0 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.08, repeat: 0 }}
              />
            )
          })}

          {/* "UNIFIED" label */}
          <motion.g
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: joined ? 1 : 0, y: joined ? 0 : 6 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <rect x="314" y="218" width="72" height="18" rx="9" fill="rgba(255, 183, 3, 0.12)" stroke="#FFB703" strokeWidth="0.8" />
            <text x="350" y="231" textAnchor="middle" fontSize="8.5" fill="#C9A961" fontWeight="700"
                  fontFamily="Inter, sans-serif" letterSpacing="0.1em">
              UNIFIED
            </text>
          </motion.g>
        </motion.g>

        {/* ─── "1920s–1940s" era badge ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: joined ? 0.5 : 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <text x="350" y="15" textAnchor="middle" fontSize="8" fill="#264653" fontWeight="500"
                fontFamily="Inter, sans-serif" letterSpacing="0.06em">
            THE MODERN SYNTHESIS — 1920s–1940s
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
