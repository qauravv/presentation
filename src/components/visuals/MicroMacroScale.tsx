import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * MicroMacroScale — Used on slide 4.7
 * Horizontal continuum visualization: finch beak (micro) to skeletal change (macro).
 * Deliberately unbroken gradient bar — no wall, no barrier.
 * Enhanced for stunning presentation.
 */
export function MicroMacroScale({ step }: Props) {
  return (
    <div className="w-full flex justify-center filter drop-shadow-2xl">
      <svg
        viewBox="0 0 550 200"
        className="w-full"
        style={{ maxWidth: '800px', maxHeight: '250px' }}
      >
        <defs>
          <linearGradient id="mm-bar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#E9C46A" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#F4A261" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E76F51" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="mm-pulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="glow-soft">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === LEFT ENDPOINT: Micro (Finch beak) === */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -20 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          {/* Finch Icon Container */}
          <circle cx="50" cy="50" r="30" fill="#2A9D8F" opacity={0.15} />
          <circle cx="50" cy="50" r="25" fill="#2A9D8F" opacity={0.3} />

          {/* Detailed Finch Icon */}
          <g transform="translate(35, 35) scale(0.6)">
            <path d="M0 20 Q10 10 25 10 Q40 10 50 30" fill="none" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" opacity={0.8} />
            <path d="M50 30 L30 45 L50 45 Z" fill="#E9C46A" />
            <circle cx="20" cy="20" r="2" fill="#1E3A5F" />
          </g>

          {/* Label */}
          <text
            x="50"
            y="95"
            textAnchor="middle"
            fontSize="12"
            fill="#2A9D8F"
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.5px"
          >
            MICRO: BEAK SIZE
          </text>
          {/* Time label */}
          <rect x="20" y="105" width="60" height="20" rx="10" fill="white" stroke="#2A9D8F" strokeWidth="1" />
          <text
            x="50"
            y="119"
            textAnchor="middle"
            fontSize="10"
            fill="#2A9D8F"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            ~5 years
          </text>
        </motion.g>

        {/* === CONTINUUM BAR === */}
        <motion.g
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: step >= 0 ? 1 : 0, scaleX: step >= 0 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Main bar */}
          <rect x="90" y="46" width="370" height="8" rx="4" fill="url(#mm-bar)" />

          {/* Pulsing overlay */}
          <motion.rect
            x="90"
            y="46"
            width="370"
            height="8"
            rx="4"
            fill="url(#mm-pulse)"
            animate={{ opacity: [0, 0.8, 0], x: [-370, 370, -370] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ mixBlendMode: 'overlay' }}
          />

          {/* Ticks */}
          {[130, 170, 210, 250, 290, 330, 370, 410].map((x) => (
            <line
              key={x}
              x1={x}
              y1="46"
              x2={x}
              y2="54"
              stroke="white"
              strokeWidth="1"
              opacity={0.5}
            />
          ))}
        </motion.g>

        {/* === "same mechanism" LABEL === */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            y: step >= 1 ? 0 : 10,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <g filter="url(#glow-soft)">
            <rect
              x="200"
              y="20"
              width="150"
              height="24"
              rx="12"
              fill="white"
              stroke="#C9A961"
              strokeWidth="1.5"
              fillOpacity="0.95"
            />
            <text
              x="275"
              y="36"
              textAnchor="middle"
              fontSize="11"
              fill="#C9A961"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              letterSpacing="1px"
            >
              SAME MECHANISM
            </text>
          </g>
          <line x1="275" y1="44" x2="275" y2="50" stroke="#C9A961" strokeWidth="1.5" strokeDasharray="2,2" />
        </motion.g>

        {/* === RIGHT ENDPOINT: Macro (Skeletal change) === */}
        <motion.g
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
        >
          {/* Icon Container */}
          <circle cx="500" cy="50" r="30" fill="#E76F51" opacity={0.15} />
          <circle cx="500" cy="50" r="25" fill="#E76F51" opacity={0.3} />

          {/* Skeletal transformation silhouette */}
          <g transform="translate(485, 35) scale(0.6)">
            <path d="M5 25 Q20 10 45 25" fill="none" stroke="#1E3A5F" strokeWidth="3" opacity={0.8} />
            <line x1="15" y1="20" x2="10" y2="40" stroke="#1E3A5F" strokeWidth="2" opacity={0.8} />
            <line x1="35" y1="20" x2="40" y2="40" stroke="#1E3A5F" strokeWidth="2" opacity={0.8} />
            <circle cx="45" cy="25" r="5" fill="#1E3A5F" opacity={0.8} />
          </g>
          {/* Label */}
          <text
            x="500"
            y="95"
            textAnchor="middle"
            fontSize="12"
            fill="#E76F51"
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.5px"
          >
            MACRO: BONE TYPES
          </text>
          {/* Time label */}
          <rect x="460" y="105" width="80" height="20" rx="10" fill="white" stroke="#E76F51" strokeWidth="1" />
          <text
            x="500"
            y="119"
            textAnchor="middle"
            fontSize="10"
            fill="#E76F51"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            ~5 million yrs
          </text>
        </motion.g>

        {/* === "NO WALL" CALLOUT === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: step >= 2 ? 1 : 0,
            scale: step >= 2 ? 1 : 0.9,
          }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        >
          <rect
            x="165"
            y="150"
            width="220"
            height="32"
            rx="8"
            fill="#1E3A5F"
            filter="drop-shadow(0px 10px 20px rgba(30,58,95,0.25))"
          />
          <text
            x="275"
            y="171"
            textAnchor="middle"
            fontSize="12"
            fill="white"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.5px"
          >
            NO KNOWN "BIOLOGICAL WALL"
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
