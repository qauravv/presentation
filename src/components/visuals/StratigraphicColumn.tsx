import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * StratigraphicColumn — Used on slide 4.2
 * SVG geological column showing layered strata with organism silhouettes.
 * Oldest at bottom, youngest at top. Step-based reveal animates layers
 * from bottom to top. Prediction callout highlights "adjacent = more similar."
 * Darwin-era palette.
 */
export function StratigraphicColumn({ step }: Props) {
  const strata = [
    {
      age: '540 Ma',
      label: 'Cambrian',
      organism: 'Trilobites',
      color: '#2C4A6E',
      fill: 'rgba(30, 58, 95, 0.55)',
      drawOrganism: drawTrilobite,
    },
    {
      age: '400 Ma',
      label: 'Devonian',
      organism: 'Fish',
      color: '#35587A',
      fill: 'rgba(30, 58, 95, 0.42)',
      drawOrganism: drawFish,
    },
    {
      age: '250 Ma',
      label: 'Triassic',
      organism: 'Reptiles',
      color: '#3E6688',
      fill: 'rgba(30, 58, 95, 0.32)',
      drawOrganism: drawReptile,
    },
    {
      age: '65 Ma',
      label: 'Cretaceous',
      organism: 'Mammals',
      color: '#4A7596',
      fill: 'rgba(30, 58, 95, 0.22)',
      drawOrganism: drawMammal,
    },
    {
      age: 'Recent',
      label: 'Quaternary',
      organism: 'Modern life',
      color: '#5684A4',
      fill: 'rgba(30, 58, 95, 0.12)',
      drawOrganism: drawModern,
    },
  ]

  const layerH = 52
  const startY = 20
  const colX = 85
  const colW = 180

  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 420 330"
        className="w-full"
        style={{ maxWidth: '700px', maxHeight: '340px' }}
      >
        <defs>
          <linearGradient id="strat-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#1E3A5F" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.08" />
          </linearGradient>
          <filter id="strat-shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#1E3A5F" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Column border */}
        <rect
          x={colX - 1}
          y={startY - 2}
          width={colW + 2}
          height={layerH * 5 + 4}
          rx="4"
          fill="none"
          stroke="#1E3A5F"
          strokeWidth="1.5"
          opacity={0.2}
        />

        {/* Strata layers — bottom to top, index 0 = oldest (bottom) */}
        {strata.map((s, i) => {
          const reverseI = strata.length - 1 - i
          const y = startY + reverseI * layerH

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: step >= 0 ? 1 : 0,
                y: step >= 0 ? 0 : 8,
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Layer fill */}
              <rect
                x={colX}
                y={y}
                width={colW}
                height={layerH}
                fill={s.fill}
                rx={i === 0 ? 0 : 0}
              />
              <rect
                x={colX}
                y={y}
                width={colW}
                height={layerH}
                fill="url(#strat-edge)"
              />

              {/* Layer divider line */}
              {reverseI < strata.length - 1 && (
                <line
                  x1={colX}
                  y1={y + layerH}
                  x2={colX + colW}
                  y2={y + layerH}
                  stroke="#1E3A5F"
                  strokeWidth="0.8"
                  opacity={0.25}
                  strokeDasharray="3,2"
                />
              )}

              {/* Age label — left side */}
              <text
                x={colX - 10}
                y={y + layerH / 2 + 1}
                textAnchor="end"
                fontSize="9"
                fill="#1E3A5F"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                dominantBaseline="middle"
              >
                {s.age}
              </text>

              {/* Period label — small, inside left edge */}
              <text
                x={colX + 6}
                y={y + 11}
                fontSize="7"
                fill="#1E3A5F"
                opacity={0.5}
                fontFamily="Inter, sans-serif"
              >
                {s.label}
              </text>

              {/* Organism silhouette — center of layer */}
              <g transform={`translate(${colX + colW / 2 - 15}, ${y + 14})`}>
                {s.drawOrganism()}
              </g>

              {/* Organism name — right side */}
              <text
                x={colX + colW + 10}
                y={y + layerH / 2 + 1}
                fontSize="9.5"
                fill={s.color}
                fontWeight="500"
                fontFamily="Inter, sans-serif"
                dominantBaseline="middle"
              >
                {s.organism}
              </text>
            </motion.g>
          )
        })}

        {/* "Older" / "Younger" axis labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 0 ? 0.5 : 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <text
            x={colX + colW / 2}
            y={startY + layerH * 5 + 18}
            textAnchor="middle"
            fontSize="8"
            fill="#1E3A5F"
            fontStyle="italic"
            fontFamily="Inter, sans-serif"
          >
            Older ↓
          </text>
          <text
            x={colX + colW / 2}
            y={startY - 8}
            textAnchor="middle"
            fontSize="8"
            fill="#1E3A5F"
            fontStyle="italic"
            fontFamily="Inter, sans-serif"
          >
            ↑ Younger
          </text>
        </motion.g>

        {/* Prediction callout — "adjacent layers = more similar" */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            x: step >= 1 ? 0 : 10,
          }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Bracket */}
          <path
            d={`M${colX + colW + 55} ${startY + layerH * 1.5} 
                C${colX + colW + 68} ${startY + layerH * 1.5} 
                 ${colX + colW + 68} ${startY + layerH * 3.5} 
                 ${colX + colW + 55} ${startY + layerH * 3.5}`}
            fill="none"
            stroke="#C9A961"
            strokeWidth="1.5"
          />
          {/* Arrow tips */}
          <line
            x1={colX + colW + 55}
            y1={startY + layerH * 1.5}
            x2={colX + colW + 48}
            y2={startY + layerH * 1.5}
            stroke="#C9A961"
            strokeWidth="1.5"
          />
          <line
            x1={colX + colW + 55}
            y1={startY + layerH * 3.5}
            x2={colX + colW + 48}
            y2={startY + layerH * 3.5}
            stroke="#C9A961"
            strokeWidth="1.5"
          />

          {/* Callout box */}
          <rect
            x={colX + colW + 72}
            y={startY + layerH * 2 - 2}
            width="80"
            height="56"
            rx="6"
            fill="rgba(201, 169, 97, 0.12)"
            stroke="#C9A961"
            strokeWidth="1"
          />
          <text
            x={colX + colW + 112}
            y={startY + layerH * 2 + 16}
            textAnchor="middle"
            fontSize="7.5"
            fill="#1E3A5F"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            Adjacent layers
          </text>
          <text
            x={colX + colW + 112}
            y={startY + layerH * 2 + 28}
            textAnchor="middle"
            fontSize="7.5"
            fill="#1E3A5F"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            = more similar
          </text>
          <text
            x={colX + colW + 112}
            y={startY + layerH * 2 + 43}
            textAnchor="middle"
            fontSize="7"
            fill="#C9A961"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            Confirmed
          </text>
          <text
            x={colX + colW + 112}
            y={startY + layerH * 2 + 52}
            textAnchor="middle"
            fontSize="7"
            fill="#C9A961"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            consistently
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Organism Silhouette SVG Drawings
   Each renders within a 30x28 local coordinate space
   ═══════════════════════════════════════════ */

function drawTrilobite() {
  return (
    <g>
      <ellipse cx="15" cy="14" rx="12" ry="10" fill="#1E3A5F" opacity={0.3} />
      <ellipse cx="15" cy="14" rx="12" ry="10" fill="none" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.6} />
      <line x1="15" y1="4" x2="15" y2="24" stroke="#1E3A5F" strokeWidth="0.8" opacity={0.4} />
      <line x1="5" y1="10" x2="25" y2="10" stroke="#1E3A5F" strokeWidth="0.6" opacity={0.3} />
      <line x1="5" y1="14" x2="25" y2="14" stroke="#1E3A5F" strokeWidth="0.6" opacity={0.3} />
      <line x1="5" y1="18" x2="25" y2="18" stroke="#1E3A5F" strokeWidth="0.6" opacity={0.3} />
      <circle cx="10" cy="8" r="2" fill="#D4A574" opacity={0.5} />
      <circle cx="20" cy="8" r="2" fill="#D4A574" opacity={0.5} />
    </g>
  )
}

function drawFish() {
  return (
    <g>
      <path
        d="M4 14 Q10 4 20 8 Q28 10 28 14 Q28 18 20 20 Q10 24 4 14 Z"
        fill="#1E3A5F"
        opacity={0.3}
        stroke="#1E3A5F"
        strokeWidth="1"
        strokeOpacity={0.5}
      />
      <path d="M2 14 L-2 8 L-2 20 Z" fill="#1E3A5F" opacity={0.25} transform="translate(3,0)" />
      <circle cx="24" cy="13" r="1.5" fill="#D4A574" opacity={0.6} />
      <line x1="12" y1="10" x2="12" y2="18" stroke="#1E3A5F" strokeWidth="0.5" opacity={0.3} />
      <line x1="16" y1="9" x2="16" y2="19" stroke="#1E3A5F" strokeWidth="0.5" opacity={0.3} />
    </g>
  )
}

function drawReptile() {
  return (
    <g>
      <ellipse cx="15" cy="16" rx="10" ry="6" fill="#1E3A5F" opacity={0.25} stroke="#1E3A5F" strokeWidth="0.8" strokeOpacity={0.5} />
      <circle cx="24" cy="12" r="4" fill="#1E3A5F" opacity={0.3} stroke="#1E3A5F" strokeWidth="0.8" strokeOpacity={0.5} />
      <circle cx="26" cy="11" r="1.2" fill="#D4A574" opacity={0.5} />
      <line x1="7" y1="22" x2="5" y2="27" stroke="#1E3A5F" strokeWidth="1" opacity={0.35} />
      <line x1="12" y1="22" x2="10" y2="27" stroke="#1E3A5F" strokeWidth="1" opacity={0.35} />
      <line x1="18" y1="22" x2="20" y2="27" stroke="#1E3A5F" strokeWidth="1" opacity={0.35} />
      <line x1="23" y1="22" x2="25" y2="27" stroke="#1E3A5F" strokeWidth="1" opacity={0.35} />
      <path d="M5 16 Q2 14 0 16" fill="none" stroke="#1E3A5F" strokeWidth="0.8" opacity={0.3} />
    </g>
  )
}

function drawMammal() {
  return (
    <g>
      <ellipse cx="13" cy="14" rx="10" ry="7" fill="#1E3A5F" opacity={0.25} stroke="#1E3A5F" strokeWidth="0.8" strokeOpacity={0.5} />
      <circle cx="24" cy="10" r="5" fill="#1E3A5F" opacity={0.3} stroke="#1E3A5F" strokeWidth="0.8" strokeOpacity={0.5} />
      <circle cx="26" cy="9" r="1.2" fill="#D4A574" opacity={0.5} />
      <path d="M21 6 L19 2 L22 5" fill="#1E3A5F" opacity={0.3} />
      <path d="M27 6 L29 2 L26 5" fill="#1E3A5F" opacity={0.3} />
      <line x1="6" y1="21" x2="5" y2="26" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.35} />
      <line x1="11" y1="21" x2="10" y2="26" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.35} />
      <line x1="15" y1="21" x2="16" y2="26" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.35} />
      <line x1="20" y1="21" x2="21" y2="26" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.35} />
    </g>
  )
}

function drawModern() {
  return (
    <g>
      {/* Tree silhouette */}
      <line x1="8" y1="28" x2="8" y2="16" stroke="#1E3A5F" strokeWidth="1.5" opacity={0.35} />
      <circle cx="8" cy="12" r="6" fill="#1E3A5F" opacity={0.2} />
      {/* Bird */}
      <path d="M20 8 Q22 5 26 6 Q24 8 26 10" fill="none" stroke="#1E3A5F" strokeWidth="1" opacity={0.4} />
      {/* Human figure */}
      <circle cx="22" cy="16" r="2.5" fill="#1E3A5F" opacity={0.3} />
      <line x1="22" y1="18.5" x2="22" y2="25" stroke="#1E3A5F" strokeWidth="1.2" opacity={0.35} />
      <line x1="22" y1="20" x2="19" y2="23" stroke="#1E3A5F" strokeWidth="0.8" opacity={0.3} />
      <line x1="22" y1="20" x2="25" y2="23" stroke="#1E3A5F" strokeWidth="0.8" opacity={0.3} />
      <line x1="22" y1="25" x2="20" y2="28" stroke="#1E3A5F" strokeWidth="0.8" opacity={0.3} />
      <line x1="22" y1="25" x2="24" y2="28" stroke="#1E3A5F" strokeWidth="0.8" opacity={0.3} />
    </g>
  )
}
