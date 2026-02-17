import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * MicroMacroScale — Used on slide 4.7
 * Horizontal continuum visualization: finch beak (micro) to skeletal change (macro).
 * Deliberately unbroken gradient bar — no wall, no barrier.
 * Step 0 = left endpoint + continuum bar
 * Step 1 = right endpoint + "same mechanism" label
 * Step 2 = "no wall" punchline
 */
export function MicroMacroScale({ step }: Props) {
  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 520 180"
        className="w-full"
        style={{ maxWidth: '740px', maxHeight: '210px' }}
      >
        <defs>
          <linearGradient id="mm-bar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#D4A574" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#C9A961" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="mm-pulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="0" />
            <stop offset="40%" stopColor="#C9A961" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#C9A961" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* === LEFT ENDPOINT: Micro (Finch beak) === */}
        <motion.g
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -12 }}
          transition={{ duration: 0.5 }}
        >
          {/* Finch head with beak */}
          <g transform="translate(30, 45)">
            <circle cx="24" cy="24" r="18" fill="#1E3A5F" opacity={0.12} />
            <circle cx="24" cy="24" r="14" fill="#1E3A5F" opacity={0.35} />
            <circle cx="28" cy="20" r="2.5" fill="white" opacity={0.7} />
            <circle cx="28.5" cy="20" r="1.2" fill="#1E3A5F" opacity={0.8} />
            <path d="M37 22 L52 24 L37 28Z" fill="#D4A574" opacity={0.7} />
            <path d="M37 22 L52 24 L37 28Z" fill="none" stroke="#D4A574" strokeWidth="0.8" opacity={0.4} />
          </g>
          {/* Label */}
          <text
            x="54"
            y="108"
            textAnchor="middle"
            fontSize="12"
            fill="#1E3A5F"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            Finch beak
          </text>
          {/* Time label */}
          <rect x="28" y="116" width="52" height="20" rx="4" fill="rgba(30, 58, 95, 0.06)" />
          <text
            x="54"
            y="130"
            textAnchor="middle"
            fontSize="10"
            fill="#1E3A5F"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
            opacity={0.65}
          >
            ~5 years
          </text>
        </motion.g>

        {/* === CONTINUUM BAR === */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main bar */}
          <rect x="100" y="63" width="320" height="8" rx="4" fill="url(#mm-bar)" />

          {/* Pulsing overlay */}
          <motion.rect
            x="100"
            y="63"
            width="320"
            height="8"
            rx="4"
            fill="url(#mm-pulse)"
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Small tick marks along bar */}
          {[140, 180, 220, 260, 300, 340, 380].map((x) => (
            <line
              key={x}
              x1={x}
              y1="64"
              x2={x}
              y2="70"
              stroke="#1E3A5F"
              strokeWidth="0.5"
              opacity={0.15}
            />
          ))}

          {/* Arrow tips on bar ends */}
          <polygon points="98,67 93,62 93,72" fill="#1E3A5F" opacity={0.35} />
          <polygon points="422,67 427,62 427,72" fill="#1E3A5F" opacity={0.35} />
        </motion.g>

        {/* === "same mechanism" LABEL === */}
        <motion.g
          initial={{ opacity: 0, y: 4 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            y: step >= 1 ? 0 : 4,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <rect
            x="195"
            y="38"
            width="130"
            height="20"
            rx="10"
            fill="rgba(201, 169, 97, 0.15)"
            stroke="#C9A961"
            strokeWidth="0.8"
          />
          <text
            x="260"
            y="52"
            textAnchor="middle"
            fontSize="9.5"
            fill="#C9A961"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            same mechanism
          </text>
        </motion.g>

        {/* === RIGHT ENDPOINT: Macro (Skeletal change) === */}
        <motion.g
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : 12 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Skeletal transformation silhouette */}
          <g transform="translate(432, 40)">
            {/* Fish-to-tetrapod transformation */}
            <g opacity={0.35}>
              {/* Spine */}
              <path d="M10 28 Q24 22 42 26 Q52 28 58 24" fill="none" stroke="#1E3A5F" strokeWidth="2" />
              {/* Ribs */}
              <line x1="18" y1="26" x2="16" y2="36" stroke="#1E3A5F" strokeWidth="1.2" />
              <line x1="24" y1="24" x2="22" y2="34" stroke="#1E3A5F" strokeWidth="1.2" />
              <line x1="30" y1="24" x2="28" y2="34" stroke="#1E3A5F" strokeWidth="1.2" />
              <line x1="36" y1="24" x2="35" y2="34" stroke="#1E3A5F" strokeWidth="1.2" />
              <line x1="42" y1="25" x2="42" y2="34" stroke="#1E3A5F" strokeWidth="1.2" />
              {/* Skull */}
              <ellipse cx="58" cy="22" rx="8" ry="6" fill="#1E3A5F" opacity={0.3} stroke="#1E3A5F" strokeWidth="1" />
              {/* Limbs */}
              <path d="M20 36 L16 46 L20 48" fill="none" stroke="#1E3A5F" strokeWidth="1.2" />
              <path d="M40 34 L44 44 L40 46" fill="none" stroke="#1E3A5F" strokeWidth="1.2" />
            </g>
          </g>
          {/* Label */}
          <text
            x="466"
            y="108"
            textAnchor="middle"
            fontSize="12"
            fill="#1E3A5F"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            Bone structure
          </text>
          {/* Time label */}
          <rect x="428" y="116" width="76" height="20" rx="4" fill="rgba(30, 58, 95, 0.06)" />
          <text
            x="466"
            y="130"
            textAnchor="middle"
            fontSize="10"
            fill="#1E3A5F"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
            opacity={0.65}
          >
            ~5 million yrs
          </text>
        </motion.g>

        {/* === "NO WALL" CALLOUT === */}
        <motion.g
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: step >= 2 ? 1 : 0,
            y: step >= 2 ? 0 : 6,
          }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <rect
            x="160"
            y="150"
            width="200"
            height="24"
            rx="6"
            fill="rgba(201, 169, 97, 0.1)"
            stroke="#C9A961"
            strokeWidth="1"
          />
          <text
            x="260"
            y="166"
            textAnchor="middle"
            fontSize="10"
            fill="#1E3A5F"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            No known barrier. No wall. No stop.
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
