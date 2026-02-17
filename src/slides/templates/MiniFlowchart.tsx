import { motion } from 'framer-motion'

/**
 * Mini mechanism flowchart — persists in top-right corner of slides.
 * Vertical layout with per-slide highlighting. Readable from back of room.
 */
export function MiniFlowchart({ highlight }: { highlight?: number[] }) {
  const labels = ['VARIATION', 'HERITABLE', 'SURVIVE', 'REPROD.', 'POP. SHIFTS']
  const boxW = 164
  const boxH = 24
  const gap = 10
  const startX = 18
  const cx = 100

  return (
    <div
      className="absolute top-3 right-3 z-10 pointer-events-none select-none"
      style={{ width: '200px' }}
    >
      <svg viewBox="0 0 200 166" className="w-full" style={{ opacity: 0.72 }}>
        <defs>
          <marker id="mini-arrow-v" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5" fill="#D4A574" />
          </marker>
          <filter id="mini-hl-glow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#C9A961" floodOpacity="0.35" />
          </filter>
        </defs>
        {labels.map((label, i) => {
          const y = i * (boxH + gap) + 2
          const active = !highlight || highlight.includes(i + 1)
          return (
            <g key={i} opacity={active ? 1 : 0.25} className="svg-flowchart-box">
              <rect
                x={startX}
                y={y}
                width={boxW}
                height={boxH}
                rx={5}
                fill="#1E3A5F"
                filter={active && highlight ? 'url(#mini-hl-glow)' : undefined}
              />
              <text
                x={cx}
                y={y + 15.5}
                textAnchor="middle"
                fill="#F5F1E8"
                fontSize="9.5"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {label}
              </text>
              {i < labels.length - 1 && (
                <line
                  x1={cx}
                  y1={y + boxH + 1}
                  x2={cx}
                  y2={y + boxH + gap - 3}
                  stroke="#D4A574"
                  strokeWidth="1.5"
                  markerEnd="url(#mini-arrow-v)"
                />
              )}
            </g>
          )
        })}
      </svg>
      <p
        className="text-center italic leading-none"
        style={{ fontSize: '8px', color: 'rgba(45, 45, 45, 0.5)', marginTop: '-2px' }}
      >
        Undirected input → Biased output
      </p>
    </div>
  )
}

/**
 * Full-size mechanism flowchart for slide 2.2.
 * Staggered spatial layout with curved amber arrows. Build-step animation.
 * THE most important visual in the seminar — referenced on 39 of 46 slides.
 * UPGRADED: Museum poster aesthetic.
 */
export function FullFlowchart({ step = 0 }: { step?: number }) {
  const boxes = [
    { line1: 'VARIATION', line2: 'exists' },
    { line1: 'Some is', line2: 'HERITABLE' },
    { line1: 'More offspring', line2: 'than SURVIVE' },
    { line1: 'Traits → different', line2: 'REPRODUCTION' },
    { line1: 'POPULATION SHIFTS', line2: 'over time' },
  ]

  const boxW = 280
  const boxH = 64
  const gap = 36
  const svgW = 500
  const svgCx = svgW / 2
  const offsets = [-40, 40, -40, 40, -40]
  const totalH = boxes.length * boxH + (boxes.length - 1) * gap + 20

  return (
    <div className="w-full flex flex-col items-center">
      <svg
        viewBox={`0 0 ${svgW} ${totalH}`}
        className="w-full"
        style={{ maxWidth: '580px', maxHeight: '70vh', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <marker id="flow-arrow-lg" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M1,1 L11,6 L1,11" fill="#D69E66" />
          </marker>
          <filter id="box-shadow-lg">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
          </filter>
          <linearGradient id="box-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B3254" />
            <stop offset="100%" stopColor="#152642" />
          </linearGradient>
        </defs>

        {boxes.map((box, i) => {
          const y = i * (boxH + gap) + 10
          const cx = svgCx + offsets[i]!
          const bx = cx - boxW / 2
          const visible = step >= i

          let arrowPath = ''
          if (i < boxes.length - 1) {
            const nextCx = svgCx + offsets[i + 1]!
            const aY1 = y + boxH
            const aY2 = y + boxH + gap
            const midY = (aY1 + aY2) / 2
            // Organic curve
            arrowPath = `M${cx},${aY1} C${cx},${midY} ${nextCx},${midY} ${nextCx},${aY2}`
          }

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <rect
                x={bx}
                y={y}
                width={boxW}
                height={boxH}
                rx={12}
                fill="url(#box-gradient)"
                filter="url(#box-shadow-lg)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <text
                x={cx}
                y={y + 26}
                textAnchor="middle"
                fill="#D69E66"
                fontSize="13"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                letterSpacing="0.05em"
              >
                {box.line1}
              </text>
              <text
                x={cx}
                y={y + 50}
                textAnchor="middle"
                fill="#F2EFE7"
                fontSize="19"
                fontWeight="700"
                fontFamily="Playfair Display, serif"
                letterSpacing="0.02em"
              >
                {box.line2}
              </text>
              {arrowPath && (
                <motion.path
                  d={arrowPath}
                  fill="none"
                  stroke="#D69E66"
                  strokeWidth="3"
                  markerEnd="url(#flow-arrow-lg)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: step >= i + 1 ? 1 : 0, opacity: step >= i + 1 ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              )}
            </motion.g>
          )
        })}
      </svg>

      {/* Caption — the most important recurring phrase in the seminar */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: step >= 5 ? 1 : 0, y: step >= 5 ? 0 : 10 }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="inline-block text-xl sm:text-2xl font-bold tracking-wide font-heading"
          style={{
            color: '#262626',
            borderBottom: '3px solid #C2A153',
            paddingBottom: '8px',
          }}
        >
          Undirected input → Environmentally biased output
        </span>
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
