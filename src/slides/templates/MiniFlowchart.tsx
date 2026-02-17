import { motion } from 'framer-motion'

/**
 * Mini mechanism flowchart — persists in top-right corner of Template B slides.
 * Compact horizontal layout at 60% opacity. Clean, non-intrusive.
 */
export function MiniFlowchart() {
  const steps = ['VARIATION', 'HERITABLE', 'SURVIVE', 'REPROD.', 'POP. SHIFTS']

  return (
    <div
      className="absolute top-4 right-4 z-10 pointer-events-none select-none"
      style={{ width: '230px', opacity: 0.55 }}
    >
      <svg viewBox="0 0 230 28" className="w-full">
        {steps.map((label, i) => {
          const x = i * 47
          return (
            <g key={i}>
              <rect
                x={x}
                y={2}
                width={40}
                height={18}
                rx={3}
                fill="#1E3A5F"
              />
              <text
                x={x + 20}
                y={13.5}
                textAnchor="middle"
                fill="#F5F1E8"
                fontSize="4.5"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {label}
              </text>
              {i < steps.length - 1 && (
                <path
                  d={`M${x + 41} 11 L${x + 46} 11`}
                  stroke="#D4A574"
                  strokeWidth="1.2"
                  markerEnd="url(#mini-arrow)"
                />
              )}
            </g>
          )
        })}
        <defs>
          <marker id="mini-arrow" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4" fill="#D4A574" />
          </marker>
        </defs>
      </svg>
      <p
        className="text-center mt-0.5 italic"
        style={{ fontSize: '5px', color: 'rgba(45, 45, 45, 0.4)' }}
      >
        Undirected input → Environmentally biased output
      </p>
    </div>
  )
}

/**
 * Full-size vertical mechanism flowchart for slide 2.2.
 * SVG-based for crispness. Boxes + amber arrows. Build-step animation.
 */
export function FullFlowchart({ step = 0 }: { step?: number }) {
  const boxes = [
    { line1: 'VARIATION', line2: 'exists', keyword: 'VARIATION' },
    { line1: 'Some is', line2: 'HERITABLE', keyword: 'HERITABLE' },
    { line1: 'More offspring', line2: 'than SURVIVE', keyword: 'SURVIVE' },
    { line1: 'Traits → different', line2: 'REPRODUCTION', keyword: 'REPRODUCTION' },
    { line1: 'POPULATION SHIFTS', line2: 'over time', keyword: 'POPULATION SHIFTS' },
  ]

  const boxH = 56
  const boxW = 280
  const gap = 28
  const arrowH = gap
  const startX = 160 - boxW / 2
  const totalH = boxes.length * boxH + (boxes.length - 1) * arrowH + 60

  return (
    <div className="w-full flex flex-col items-center">
      <svg
        viewBox={`0 0 320 ${totalH}`}
        className="w-full"
        style={{ maxWidth: '420px', maxHeight: '70vh' }}
      >
        <defs>
          <marker id="flow-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M1,1 L7,4 L1,7" fill="#D4A574" strokeWidth="0" />
          </marker>
          <filter id="box-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
        </defs>

        {boxes.map((box, i) => {
          const y = i * (boxH + arrowH)
          const visible = step >= i

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
              transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Box */}
              <rect
                x={startX}
                y={y}
                width={boxW}
                height={boxH}
                rx={8}
                fill="#1E3A5F"
                filter="url(#box-shadow)"
              />
              <text
                x={160}
                y={y + 22}
                textAnchor="middle"
                fill="#F5F1E8"
                fontSize="13"
                fontFamily="Inter, sans-serif"
              >
                {box.line1}
              </text>
              <text
                x={160}
                y={y + 40}
                textAnchor="middle"
                fill="#F5F1E8"
                fontSize="15"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
              >
                {box.line2}
              </text>

              {/* Arrow to next box */}
              {i < boxes.length - 1 && (
                <motion.line
                  x1={160}
                  y1={y + boxH + 2}
                  x2={160}
                  y2={y + boxH + arrowH - 2}
                  stroke="#D4A574"
                  strokeWidth="2.5"
                  markerEnd="url(#flow-arrow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= i + 1 ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                />
              )}
            </motion.g>
          )
        })}
      </svg>

      {/* Caption */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 5 ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-lg sm:text-xl font-bold text-darwin-charcoal">
          Undirected input → Environmentally biased output
        </p>
        <div className="w-24 h-[2px] bg-darwin-amber mx-auto mt-2" />
      </motion.div>
    </div>
  )
}

/**
 * Watermark flowchart for slide 6.4 callback (~12% opacity).
 * Vertical layout matching FullFlowchart but ghosted.
 */
export function FlowchartWatermark() {
  const labels = ['VARIATION', 'HERITABLE', 'SURVIVE', 'REPRODUCTION', 'POP. SHIFTS']
  const boxH = 40
  const boxW = 200
  const gap = 20
  const startX = 110 - boxW / 2

  return (
    <div className="watermark-flowchart">
      <svg
        viewBox="0 0 220 340"
        className="w-full h-full"
        style={{ maxWidth: '280px', maxHeight: '60vh' }}
      >
        {labels.map((label, i) => {
          const y = i * (boxH + gap)
          return (
            <g key={i}>
              <rect
                x={startX}
                y={y}
                width={boxW}
                height={boxH}
                rx={6}
                fill="#1E3A5F"
                opacity={0.25}
              />
              <text
                x={110}
                y={y + 25}
                textAnchor="middle"
                fill="#1E3A5F"
                fontSize="11"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                opacity={0.35}
              >
                {label}
              </text>
              {i < labels.length - 1 && (
                <line
                  x1={110}
                  y1={y + boxH + 2}
                  x2={110}
                  y2={y + boxH + gap - 2}
                  stroke="#D4A574"
                  strokeWidth="1.5"
                  opacity={0.3}
                />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
