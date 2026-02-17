import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * RadiometricTimeline — Used on slide 4.5
 * Dual-track horizontal timeline: Biology (fossils) and Physics (radiometric dating).
 * Both tracks converge on matching ages. Step-based reveal:
 *   step 0 = biology track
 *   step 1 = physics track + convergence highlight
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
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 460 260"
        className="w-full"
        style={{ maxWidth: '720px', maxHeight: '300px' }}
      >
        <defs>
          <linearGradient id="rt-bio-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="rt-phys-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C9A961" stopOpacity="0.3" />
          </linearGradient>
          <filter id="rt-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Biology track icon + label */}
          <g transform={`translate(6, ${trackY.bio - 8})`}>
            <path d="M0 4 Q4 0 8 2 Q12 4 10 8 Q8 12 4 10 Q0 8 0 4Z" fill="#1E3A5F" opacity={0.5} />
            <text x="14" y="9" fontSize="9" fill="#1E3A5F" fontWeight="700" fontFamily="Inter, sans-serif">
              Biology
            </text>
          </g>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Physics track icon + label */}
          <g transform={`translate(6, ${trackY.phys - 8})`}>
            <circle cx="5" cy="5" r="4" fill="none" stroke="#D4A574" strokeWidth="1.2" />
            <circle cx="5" cy="5" r="1.5" fill="#D4A574" opacity={0.6} />
            <line x1="8" y1="2" x2="11" y2="-1" stroke="#D4A574" strokeWidth="0.8" />
            <text x="14" y="9" fontSize="9" fill="#C9A961" fontWeight="700" fontFamily="Inter, sans-serif">
              Physics
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
          strokeWidth="1.5"
          opacity={0.2}
        />
        <text
          x={435}
          y={trackY.axis + 4}
          fontSize="7"
          fill="#1E3A5F"
          opacity={0.4}
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
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: step >= 0 ? 1 : 0,
                y: step >= 0 ? 0 : 6,
              }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <circle cx={pt.x} cy={trackY.bio} r="5" fill="#1E3A5F" opacity={0.2} />
              <circle cx={pt.x} cy={trackY.bio} r="3" fill="#1E3A5F" opacity={0.6} />
              <text
                x={pt.x}
                y={trackY.bio - 12}
                textAnchor="middle"
                fontSize="7"
                fill="#1E3A5F"
                opacity={0.7}
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
                strokeWidth="0.8"
                strokeDasharray="2,2"
                opacity={0.25}
              />
              {/* Age on axis */}
              <text
                x={pt.x}
                y={trackY.axis + 14}
                textAnchor="middle"
                fontSize="8"
                fill="#1E3A5F"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                opacity={0.65}
              >
                {pt.age}
              </text>
              {/* Axis tick */}
              <line
                x1={pt.x}
                y1={trackY.axis - 3}
                x2={pt.x}
                y2={trackY.axis + 3}
                stroke="#1E3A5F"
                strokeWidth="1.2"
                opacity={0.35}
              />
            </motion.g>

            {/* Physics data point */}
            <motion.g
              initial={{ opacity: 0, y: -6 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                y: step >= 1 ? 0 : -6,
              }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.1 }}
            >
              <circle cx={pt.x} cy={trackY.phys} r="5" fill="#D4A574" opacity={0.15} />
              <circle cx={pt.x} cy={trackY.phys} r="3" fill="#D4A574" opacity={0.6} />
              <text
                x={pt.x}
                y={trackY.phys + 18}
                textAnchor="middle"
                fontSize="7"
                fill="#C9A961"
                opacity={0.7}
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
                stroke="#D4A574"
                strokeWidth="0.8"
                strokeDasharray="2,2"
                opacity={0.25}
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
                stroke="#C9A961"
                strokeWidth="1.5"
                opacity={0.2}
              />
              <circle
                cx={pt.x}
                cy={trackY.axis}
                r="4"
                fill="#C9A961"
                opacity={0.15}
                filter="url(#rt-glow)"
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
          strokeWidth="2"
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
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: step >= 1 ? 1 : 0,
            opacity: step >= 1 ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Convergence callout */}
        <motion.g
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            y: step >= 1 ? 0 : 6,
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <rect
            x="130"
            y="228"
            width="200"
            height="26"
            rx="6"
            fill="rgba(201, 169, 97, 0.12)"
            stroke="#C9A961"
            strokeWidth="1"
          />
          <text
            x="230"
            y="245"
            textAnchor="middle"
            fontSize="9"
            fill="#1E3A5F"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            Independent methods → same chronological order
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
