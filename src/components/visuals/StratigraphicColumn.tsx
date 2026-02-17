import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * StratigraphicColumn — Used on slide 4.2
 * Enhanced for high-fidelity, "stunning" presentation.
 */
export function StratigraphicColumn({ step }: Props) {
  const strata = [
    {
      age: '540 Ma',
      label: 'Cambrian',
      organism: 'Trilobites',
      color: '#A8DADC',
      fillStart: '#1E3A5F',
      fillEnd: '#2C4A6E',
      pattern: 'dots',
      drawOrganism: drawTrilobite,
    },
    {
      age: '400 Ma',
      label: 'Devonian',
      organism: 'Fish',
      color: '#457B9D',
      fillStart: '#2C4A6E',
      fillEnd: '#35587A',
      pattern: 'stripes',
      drawOrganism: drawFish,
    },
    {
      age: '250 Ma',
      label: 'Triassic',
      organism: 'Reptiles',
      color: '#F1FAEE',
      fillStart: '#35587A',
      fillEnd: '#4A7596',
      pattern: 'waves',
      drawOrganism: drawReptile,
    },
    {
      age: '65 Ma',
      label: 'Cretaceous',
      organism: 'Mammals',
      color: '#F4A261',
      fillStart: '#4A7596',
      fillEnd: '#5684A4',
      pattern: 'dots',
      drawOrganism: drawMammal,
    },
    {
      age: 'Recent',
      label: 'Quaternary',
      organism: 'Modern',
      color: '#E76F51',
      fillStart: '#5684A4',
      fillEnd: '#6B9AC4',
      pattern: 'grid',
      drawOrganism: drawModern,
    },
  ]

  const layerH = 60
  const startY = 20
  const colX = 100
  const colW = 220

  return (
    <div className="w-full flex justify-center filter drop-shadow-2xl">
      <svg
        viewBox="0 0 450 360"
        className="w-full"
        style={{ maxWidth: '800px', maxHeight: '450px' }}
      >
        <defs>
          <linearGradient id="glow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <pattern id="pat-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" opacity="0.1" />
          </pattern>
          <pattern id="pat-stripes" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 10L10 0M-2 2L2 -2M8 12L12 8" stroke="white" strokeWidth="1" opacity="0.1" />
          </pattern>
          <pattern id="pat-waves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q5 5 10 10 T20 10" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
          </pattern>
        </defs>

        {/* Strata layers — bottom to top */}
        {strata.map((s, i) => {
          const reverseI = strata.length - 1 - i
          const y = startY + reverseI * layerH

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: step >= 0 ? 1 : 0,
                x: step >= 0 ? 0 : -50,
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                type: "spring", stiffness: 50
              }}
            >
              {/* Layer Block with Gradient */}
              <defs>
                <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={s.fillStart} />
                  <stop offset="100%" stopColor={s.fillEnd} />
                </linearGradient>
              </defs>

              <path
                d={`M${colX} ${y} 
                       L${colX + colW} ${y} 
                       L${colX + colW - (i % 2 === 0 ? 10 : -10)} ${y + layerH} 
                       L${colX - (i % 2 === 0 ? 5 : -5)} ${y + layerH} Z`}
                fill={`url(#grad-${i})`}
                stroke="white" strokeWidth="0.5" strokeOpacity="0.3"
              />

              {/* Pattern Overlay */}
              <path
                d={`M${colX} ${y} 
                       L${colX + colW} ${y} 
                       L${colX + colW - (i % 2 === 0 ? 10 : -10)} ${y + layerH} 
                       L${colX - (i % 2 === 0 ? 5 : -5)} ${y + layerH} Z`}
                fill={`url(#pat-${s.pattern === 'dots' ? 'dots' : s.pattern === 'stripes' ? 'stripes' : 'waves'})`}
              />

              {/* Glass Shine */}
              <path
                d={`M${colX} ${y} 
                       L${colX + colW} ${y} 
                       L${colX + colW} ${y + 10} 
                       L${colX} ${y + 25} Z`}
                fill="url(#glow-gradient)"
              />

              {/* Age label */}
              <text
                x={colX - 25}
                y={y + layerH / 2}
                textAnchor="end"
                fontSize="14"
                fill="#1E3A5F"
                fontWeight="900"
                fontFamily="sans-serif"
                dominantBaseline="middle"
              >
                {s.age}
              </text>

              {/* Period label */}
              <text
                x={colX - 25}
                y={y + layerH / 2 + 14}
                textAnchor="end"
                fontSize="10"
                fill="#1E3A5F"
                opacity={0.6}
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {s.label}
              </text>

              {/* Organism silhouette */}
              <g transform={`translate(${colX + colW / 2 - 15}, ${y + 16}) scale(1.2)`}>
                {s.drawOrganism(s.color)}
              </g>

              {/* Organism name */}
              <text
                x={colX + colW + 20}
                y={y + layerH / 2}
                fontSize="16"
                fill={s.fillStart}
                fontWeight="800"
                fontFamily="sans-serif"
                dominantBaseline="middle"
              >
                {s.organism}
              </text>
            </motion.g>
          )
        })}

        {/* Prediction callout */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            scale: step >= 1 ? 1 : 0.8,
          }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
        >
          {/* Bracket */}
          <path
            d={`M${colX + colW + 120} ${startY + layerH * 1.5} 
                C${colX + colW + 140} ${startY + layerH * 1.5} 
                 ${colX + colW + 140} ${startY + layerH * 3.5} 
                 ${colX + colW + 120} ${startY + layerH * 3.5}`}
            fill="none"
            stroke="#C9A961"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Callout box */}
          <rect
            x={colX + colW + 150}
            y={startY + layerH * 2 - 10}
            width="140"
            height="80"
            rx="12"
            fill="white"
            stroke="#C9A961"
            strokeWidth="2"
            filter="drop-shadow(0px 10px 20px rgba(0,0,0,0.15))"
          />
          <text
            x={colX + colW + 220}
            y={startY + layerH * 2 + 25}
            textAnchor="middle"
            fontSize="14"
            fill="#1E3A5F"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            ADJACENT LAYERS
          </text>
          <text
            x={colX + colW + 220}
            y={startY + layerH * 2 + 45}
            textAnchor="middle"
            fontSize="12"
            fill="#555"
            fontFamily="sans-serif"
          >
            = MORE SIMILAR
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Organism Silhouette SVG Drawings
   ═══════════════════════════════════════════ */

function drawTrilobite(color: string) {
  return (
    <g>
      <ellipse cx="15" cy="14" rx="12" ry="10" fill="white" opacity={0.2} />
      <path d="M15 4 V24 M5 10 H25 M5 14 H25 M5 18 H25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="8" r="2" fill={color} />
      <circle cx="20" cy="8" r="2" fill={color} />
    </g>
  )
}

function drawFish(color: string) {
  return (
    <g>
      <path d="M4 14 Q10 4 20 8 Q28 10 28 14 Q28 18 20 20 Q10 24 4 14 Z" fill="white" opacity={0.2} stroke="white" strokeWidth="1.5" />
      <circle cx="24" cy="13" r="2" fill={color} />
    </g>
  )
}

function drawReptile(color: string) {
  return (
    <g>
      <ellipse cx="15" cy="16" rx="10" ry="6" fill="white" opacity={0.2} stroke="white" strokeWidth="1.5" />
      <circle cx="26" cy="11" r="2" fill={color} />
    </g>
  )
}

function drawMammal(color: string) {
  return (
    <g>
      <circle cx="13" cy="14" r="8" fill="white" opacity={0.2} stroke="white" strokeWidth="1.5" />
      <circle cx="26" cy="9" r="2" fill={color} />
    </g>
  )
}

function drawModern(color: string) {
  return (
    <g>
      <path d="M15 28 L15 10 M15 16 L22 24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15" cy="8" r="3" fill={color} />
    </g>
  )
}
