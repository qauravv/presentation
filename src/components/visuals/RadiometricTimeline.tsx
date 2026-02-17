import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * RadiometricTimeline — Used on slide 4.5
 * Dual-track horizontal timeline: Biology (fossils) and Physics (radiometric dating).
 * Enhanced with premium gradients, glowing effects, and smooth animations.
 */
export function RadiometricTimeline({ step }: Props) {
  const points = [
    { age: '540 Ma', bioLabel: 'Cambrian fossils', physLabel: 'U-Pb dating', x: 48 },
    { age: '375 Ma', bioLabel: 'Devonian fish', physLabel: 'K-Ar dating', x: 138 },
    { age: '250 Ma', bioLabel: 'Permian boundary', physLabel: 'Ar-Ar dating', x: 228 },
    { age: '65 Ma', bioLabel: 'K-Pg boundary', physLabel: 'Rb-Sr dating', x: 318 },
    { age: 'Recent', bioLabel: 'Modern', physLabel: '¹⁴C dating', x: 400 },
  ]

  const trackY = { bio: 85, axis: 130, phys: 175 }
  const leftPad = 48

  return (
    <div className="w-full flex justify-center filter drop-shadow-2xl">
      <svg
        viewBox="0 0 460 260"
        className="w-full"
        style={{ maxWidth: '720px', maxHeight: '300px' }}
      >
        <defs>
          <linearGradient id="rt-bio-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2C5282" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="rt-phys-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F6E05E" stopOpacity="0.3" />
          </linearGradient>
          <filter id="rt-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Track labels */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -10 }}
          transition={{ duration: 0.5 }}
        >
          {/* Biology track icon + label */}
          <g transform={`translate(6, ${trackY.bio - 8})`}>
            <circle cx="5" cy="5" r="10" fill="#1E3A5F" opacity={0.1} />
            <path d="M0 4 Q4 0 8 2 Q12 4 10 8 Q8 12 4 10 Q0 8 0 4Z" fill="#1E3A5F" opacity={0.8} />
            <text x="18" y="9" fontSize="10" fill="#1E3A5F" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.5px">
              BIOLOGY
            </text>
          </g>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -10 }}
          transition={{ duration: 0.5 }}
        >
          {/* Physics track icon + label */}
          <g transform={`translate(6, ${trackY.phys - 8})`}>
            <circle cx="5" cy="5" r="10" fill="#C9A961" opacity={0.1} />
            <circle cx="5" cy="5" r="4" fill="none" stroke="#C9A961" strokeWidth="1.5" />
            <circle cx="5" cy="5" r="1.5" fill="#C9A961" />
            <line x1="8" y1="2" x2="11" y2="-1" stroke="#C9A961" strokeWidth="1" />
            <text x="18" y="9" fontSize="10" fill="#C9A961" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.5px">
              PHYSICS
            </text>
          </g>
        </motion.g>

        {/* Central time axis */}
        <line
          x1={leftPad}
          y1={trackY.axis}
          x2={420}
          y2={trackY.axis}
          stroke="#1E3A5F"
          strokeWidth="2"
          opacity={0.1}
          strokeLinecap="round"
        />
        <text
          x={435}
          y={trackY.axis + 4}
          fontSize="8"
          fill="#1E3A5F"
          opacity={0.5}
          fontFamily="Inter, sans-serif"
          fontStyle="italic"
        >
          time →
        </text>

        {/* Data points and convergence lines */}
        {points.map((pt, i) => (
          <g key={i}>
            {/* Biology data point */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: step >= 0 ? 1 : 0,
                scale: step >= 0 ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
            >
              <circle cx={pt.x} cy={trackY.bio} r="5" fill="#1E3A5F" opacity={0.2} />
              <circle cx={pt.x} cy={trackY.bio} r="3" fill="#1E3A5F" />

              {/* Box for label */}
              <rect x={pt.x - 20} y={trackY.bio - 24} width="40" height="14" rx="4" fill="white" fillOpacity="0.8" />
              <text
                x={pt.x}
                y={trackY.bio - 14}
                textAnchor="middle"
                fontSize="8"
                fill="#1E3A5F"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {pt.bioLabel}
              </text>
              {/* Tick to axis */}
              <line
                x1={pt.x}
                y1={trackY.bio + 5}
                x2={pt.x}
                y2={trackY.axis - 4}
                stroke="#1E3A5F"
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity={0.3}
              />
              {/* Age on axis */}
              <text
                x={pt.x}
                y={trackY.axis + 14}
                textAnchor="middle"
                fontSize="9"
                fill="#1E3A5F"
                fontWeight="bold"
                fontFamily="Inter, sans-serif"
                opacity={0.8}
              >
                {pt.age}
              </text>
              {/* Axis tick */}
              <circle cx={pt.x} cy={trackY.axis} r="2" fill="#1E3A5F" opacity={0.4} />
            </motion.g>

            {/* Physics data point */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                scale: step >= 1 ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.1, type: "spring" }}
            >
              <circle cx={pt.x} cy={trackY.phys} r="5" fill="#D4A574" opacity={0.2} />
              <circle cx={pt.x} cy={trackY.phys} r="3" fill="#C9A961" />

              {/* Box for label */}
              <rect x={pt.x - 20} y={trackY.phys + 10} width="40" height="14" rx="4" fill="white" fillOpacity="0.8" />
              <text
                x={pt.x}
                y={trackY.phys + 20}
                textAnchor="middle"
                fontSize="8"
                fill="#C9A961"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
              >
                {pt.physLabel}
              </text>
              {/* Tick to axis */}
              <line
                x1={pt.x}
                y1={trackY.phys - 5}
                x2={pt.x}
                y2={trackY.axis + 4}
                stroke="#C9A961"
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity={0.4}
              />
            </motion.g>

            {/* Convergence connector */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            >
              <line
                x1={pt.x}
                y1={trackY.bio + 5}
                x2={pt.x}
                y2={trackY.phys - 5}
                stroke="#E76F51"
                strokeWidth="2"
                opacity={0.3}
                strokeLinecap="round"
              />
              <circle
                cx={pt.x}
                cy={trackY.axis}
                r="5"
                fill="#E76F51"
                opacity={0.4}
                filter="url(#rt-glow)"
              />
              <circle
                cx={pt.x}
                cy={trackY.axis}
                r="2"
                fill="white"
              />
            </motion.g>
          </g>
        ))}

        {/* Biology track line */}
        <motion.line
          x1={points[0]!.x}
          y1={trackY.bio}
          x2={points[points.length - 1]!.x}
          y2={trackY.bio}
          stroke="url(#rt-bio-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: step >= 0 ? 1 : 0,
            opacity: step >= 0 ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Physics track line */}
        <motion.line
          x1={points[0]!.x}
          y1={trackY.phys}
          x2={points[points.length - 1]!.x}
          y2={trackY.phys}
          stroke="url(#rt-phys-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: step >= 1 ? 1 : 0,
            opacity: step >= 1 ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Convergence callout */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            y: step >= 1 ? 0 : 10,
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <rect
            x="110"
            y="235"
            width="240"
            height="24"
            rx="12"
            fill="#E76F51"
            filter="drop-shadow(0px 4px 10px rgba(231, 111, 81, 0.3))"
          />
          <text
            x="230"
            y="251"
            textAnchor="middle"
            fontSize="10"
            fill="white"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.5px"
          >
            INDEPENDENT METHODS → CONSISTENT RESULTS
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
