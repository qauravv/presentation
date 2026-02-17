/**
 * ConvergenceArrows — Used on slides 1.3 and 4.1
 * 4 labeled arrows converging on a single central point.
 * Each arrow from a different direction with different color.
 * SVG-based for crispness.
 */
export function ConvergenceArrows() {
  const arrows = [
    { from: { x: 20, y: 15 }, label: 'Fossils', color: '#1E3A5F', labelPos: { x: 12, y: 10 } },
    { from: { x: 180, y: 15 }, label: 'DNA', color: '#2A9D8F', labelPos: { x: 175, y: 10 } },
    { from: { x: 15, y: 85 }, label: 'Anatomy', color: '#D4A574', labelPos: { x: 8, y: 92 } },
    { from: { x: 185, y: 85 }, label: 'Direct Obs.', color: '#C9A961', labelPos: { x: 172, y: 92 } },
  ]

  const center = { x: 100, y: 50 }

  return (
    <div className="w-full flex justify-center">
      <svg viewBox="0 0 200 105" className="w-full" style={{ maxWidth: '500px', maxHeight: '200px' }}>
        <defs>
          {arrows.map((a, i) => (
            <marker
              key={i}
              id={`conv-arrow-${i}`}
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0.5 L5.5,3 L0,5.5" fill={a.color} />
            </marker>
          ))}
        </defs>

        {/* Arrows */}
        {arrows.map((a, i) => {
          const dx = center.x - a.from.x
          const dy = center.y - a.from.y
          const len = Math.sqrt(dx * dx + dy * dy)
          const endX = center.x - (dx / len) * 18
          const endY = center.y - (dy / len) * 18

          return (
            <g key={i}>
              <line
                x1={a.from.x}
                y1={a.from.y}
                x2={endX}
                y2={endY}
                stroke={a.color}
                strokeWidth="2"
                markerEnd={`url(#conv-arrow-${i})`}
              />
              <text
                x={a.labelPos.x}
                y={a.labelPos.y}
                textAnchor={a.from.x < 100 ? 'start' : 'end'}
                fontSize="9"
                fill={a.color}
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {a.label}
              </text>
            </g>
          )
        })}

        {/* Central node */}
        <circle cx={center.x} cy={center.y} r="16" fill="#1E3A5F" />
        <text
          x={center.x}
          y={center.y - 2}
          textAnchor="middle"
          fontSize="6.5"
          fill="#F5F1E8"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          Same
        </text>
        <text
          x={center.x}
          y={center.y + 6}
          textAnchor="middle"
          fontSize="6.5"
          fill="#F5F1E8"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          conclusion
        </text>
      </svg>
    </div>
  )
}
