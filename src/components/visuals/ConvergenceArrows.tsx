import { motion } from 'framer-motion'

interface Props {
  step?: number
  size?: 'compact' | 'full'
}

/**
 * ConvergenceArrows — Used on slides 1.3 and 4.1
 * 4 labeled arrows converging on a single central "Same conclusion" node.
 * SVG-based with Framer Motion animations.
 * 'compact' = smaller for inline use (slide 1.3)
 * 'full' = larger, dominant visual (slide 4.1)
 */
export function ConvergenceArrows({ step = 0, size = 'compact' }: Props) {
  const isFull = size === 'full'

  const arrows = [
    {
      from: { x: 38, y: 28 },
      label: 'Fossils',
      sublabel: 'Paleontology',
      color: '#1E3A5F',
      labelPos: { x: 16, y: 16 },
      icon: drawFossilIcon,
    },
    {
      from: { x: 262, y: 28 },
      label: 'DNA',
      sublabel: 'Genetics',
      color: '#2A9D8F',
      labelPos: { x: 264, y: 16 },
      icon: drawDnaIcon,
    },
    {
      from: { x: 28, y: 160 },
      label: 'Anatomy',
      sublabel: 'Comparative',
      color: '#D4A574',
      labelPos: { x: 14, y: 178 },
      icon: drawAnatomyIcon,
    },
    {
      from: { x: 272, y: 160 },
      label: 'Direct Obs.',
      sublabel: 'Real-time',
      color: '#C9A961',
      labelPos: { x: 260, y: 178 },
      icon: drawObservationIcon,
    },
  ]

  const center = { x: 150, y: 95 }

  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 300 200"
        className="w-full"
        style={{
          maxWidth: isFull ? '620px' : '480px',
          maxHeight: isFull ? '320px' : '220px',
        }}
      >
        <defs>
          {arrows.map((a, i) => (
            <marker
              key={i}
              id={`conv-arrow-v2-${i}`}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0.5 L7,4 L0,7.5" fill={a.color} opacity={0.7} />
            </marker>
          ))}
          <radialGradient id="conv-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
          </radialGradient>
          <filter id="conv-glow-filter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arrows with staggered animation */}
        {arrows.map((a, i) => {
          const dx = center.x - a.from.x
          const dy = center.y - a.from.y
          const len = Math.sqrt(dx * dx + dy * dy)
          const endX = center.x - (dx / len) * 28
          const endY = center.y - (dy / len) * 28

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 0 ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Arrow line */}
              <motion.line
                x1={a.from.x}
                y1={a.from.y}
                x2={endX}
                y2={endY}
                stroke={a.color}
                strokeWidth={isFull ? '2.5' : '2'}
                markerEnd={`url(#conv-arrow-v2-${i})`}
                opacity={0.6}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: step >= 0 ? 1 : 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              />

              {/* Label pill */}
              <g>
                <rect
                  x={a.labelPos.x - (a.from.x < center.x ? 2 : 48)}
                  y={a.labelPos.y - 10}
                  width={isFull ? 58 : 50}
                  height={isFull ? 28 : 22}
                  rx="6"
                  fill={a.color}
                  opacity={0.08}
                />
                <text
                  x={a.labelPos.x + (a.from.x < center.x ? 0 : 0)}
                  y={a.labelPos.y}
                  textAnchor={a.from.x < center.x ? 'start' : 'end'}
                  fontSize={isFull ? '11' : '9.5'}
                  fill={a.color}
                  fontWeight="700"
                  fontFamily="Inter, sans-serif"
                >
                  {a.label}
                </text>
                {isFull && (
                  <text
                    x={a.labelPos.x + (a.from.x < center.x ? 0 : 0)}
                    y={a.labelPos.y + 12}
                    textAnchor={a.from.x < center.x ? 'start' : 'end'}
                    fontSize="7.5"
                    fill={a.color}
                    opacity={0.55}
                    fontFamily="Inter, sans-serif"
                  >
                    {a.sublabel}
                  </text>
                )}
              </g>

              {/* Small icon at arrow source */}
              <g transform={`translate(${a.from.x - 8}, ${a.from.y - 8})`} opacity={0.5}>
                {a.icon()}
              </g>
            </motion.g>
          )
        })}

        {/* Central pulsing glow */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="32"
          fill="url(#conv-center-glow)"
          animate={{ r: [30, 36, 30], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Central node */}
        <circle cx={center.x} cy={center.y} r="24" fill="#1E3A5F" opacity={0.9} />
        <circle cx={center.x} cy={center.y} r="24" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity={0.4} />
        <text
          x={center.x}
          y={center.y - 4}
          textAnchor="middle"
          fontSize={isFull ? '9' : '8'}
          fill="#F5F1E8"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          Same
        </text>
        <text
          x={center.x}
          y={center.y + 8}
          textAnchor="middle"
          fontSize={isFull ? '9' : '8'}
          fill="#F5F1E8"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          conclusion
        </text>
      </svg>
    </div>
  )
}

function drawFossilIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <path d="M4 12 Q8 4 12 12" fill="none" stroke="#1E3A5F" strokeWidth="1.5" />
      <circle cx="8" cy="6" r="2" fill="#1E3A5F" opacity={0.3} />
    </svg>
  )
}

function drawDnaIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <path d="M4 2 Q8 6 4 10 Q8 14 12 10" fill="none" stroke="#2A9D8F" strokeWidth="1.2" />
      <path d="M12 2 Q8 6 12 10 Q8 14 4 10" fill="none" stroke="#2A9D8F" strokeWidth="1.2" />
    </svg>
  )
}

function drawAnatomyIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <ellipse cx="8" cy="5" rx="5" ry="3" fill="none" stroke="#D4A574" strokeWidth="1.2" />
      <line x1="8" y1="8" x2="8" y2="14" stroke="#D4A574" strokeWidth="1.2" />
      <line x1="5" y1="10" x2="11" y2="10" stroke="#D4A574" strokeWidth="0.8" />
    </svg>
  )
}

function drawObservationIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <circle cx="8" cy="8" r="5" fill="none" stroke="#C9A961" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="2" fill="#C9A961" opacity={0.4} />
      <line x1="12" y1="12" x2="15" y2="15" stroke="#C9A961" strokeWidth="1.2" />
    </svg>
  )
}
