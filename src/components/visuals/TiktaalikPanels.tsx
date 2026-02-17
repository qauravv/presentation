import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * TiktaalikPanels — Used on slide 4.3
 * Three rich panels: Prediction → Search → Finding.
 * Each panel has a colored accent top bar, SVG illustration, and description.
 * Step-based staggered reveal. Gold caption at bottom.
 */
export function TiktaalikPanels({ step }: Props) {
  const panels = [
    {
      accentColor: '#1E3A5F',
      accentBg: 'rgba(30, 58, 95, 0.04)',
      title: 'THE PREDICTION',
      text: 'Transitional fossils should exist in ~375 Ma rocks from ancient shallow water.',
      draw: drawPrediction,
    },
    {
      accentColor: '#E63946',
      accentBg: 'rgba(230, 57, 70, 0.03)',
      title: 'THE SEARCH',
      text: 'Canadian Arctic. Chosen based on geological predictions. 3 years of searching.',
      draw: drawSearch,
    },
    {
      accentColor: '#D4A574',
      accentBg: 'rgba(212, 165, 116, 0.05)',
      title: 'THE FINDING',
      text: 'Tiktaalik: gills + scales + flat skull + neck + wrist-like fin bones.',
      draw: drawFinding,
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full">
        {panels.map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: step >= i ? 1 : 0, y: step >= i ? 0 : 12 }}
            transition={{ duration: 0.5, delay: i * 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl flex flex-col overflow-hidden"
            style={{
              border: `1.5px solid ${panel.accentColor}20`,
              backgroundColor: panel.accentBg,
            }}
          >
            {/* Colored accent top bar */}
            <div
              className="shrink-0"
              style={{ height: '4px', backgroundColor: panel.accentColor, opacity: 0.6 }}
            />

            {/* Panel header */}
            <div className="px-4 pt-3 pb-1">
              <p
                className="text-xs sm:text-sm font-bold tracking-[0.12em] uppercase"
                style={{ color: panel.accentColor }}
              >
                {panel.title}
              </p>
            </div>

            {/* SVG illustration */}
            <div className="flex-1 flex items-center justify-center px-3" style={{ minHeight: '120px' }}>
              {panel.draw()}
            </div>

            {/* Description text */}
            <div className="px-4 pb-3 pt-1">
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: '#2D2D2D', opacity: 0.75 }}
              >
                {panel.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gold caption */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-base sm:text-lg lg:text-xl text-darwin-charcoal gold-box inline-block">
          Strong theories tell you where to look before you look.
        </p>
      </motion.div>
    </div>
  )
}

function drawPrediction() {
  return (
    <svg viewBox="0 0 140 110" className="w-full" style={{ maxHeight: '120px' }}>
      <defs>
        <linearGradient id="tik-rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Rock layers */}
      {[
        { y: 78, age: '350 Ma', opacity: 0.12 },
        { y: 62, age: '375 Ma', opacity: 0.18 },
        { y: 46, age: '400 Ma', opacity: 0.24 },
        { y: 30, age: '420 Ma', opacity: 0.3 },
      ].map((layer, i) => (
        <g key={i}>
          <rect x="30" y={layer.y} width="80" height="14" fill="#1E3A5F" opacity={layer.opacity} rx="1" />
          <text
            x="26"
            y={layer.y + 10}
            textAnchor="end"
            fontSize="6"
            fill="#1E3A5F"
            opacity={0.5}
            fontFamily="Inter, sans-serif"
          >
            {layer.age}
          </text>
        </g>
      ))}

      {/* Target marker on 375 Ma */}
      <circle cx="70" cy="69" r="8" fill="none" stroke="#E63946" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="70" cy="69" r="3" fill="#E63946" opacity={0.4} />
      <text
        x="70"
        y="99"
        textAnchor="middle"
        fontSize="7"
        fill="#E63946"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
        opacity={0.7}
      >
        Target: ~375 Ma
      </text>

      {/* Arrow pointing to target */}
      <path d="M115 30 Q112 50 90 64" fill="none" stroke="#E63946" strokeWidth="1" strokeDasharray="3,2" opacity={0.5} />
      <polygon points="90,62 88,67 93,65" fill="#E63946" opacity={0.5} />
      <text
        x="120"
        y="26"
        textAnchor="middle"
        fontSize="6"
        fill="#E63946"
        opacity={0.6}
        fontFamily="Inter, sans-serif"
        fontStyle="italic"
      >
        hypothesis
      </text>
    </svg>
  )
}

function drawSearch() {
  return (
    <svg viewBox="0 0 140 110" className="w-full" style={{ maxHeight: '120px' }}>
      {/* Simplified map of Canadian Arctic / Ellesmere Island area */}
      <g transform="translate(10, 8)">
        {/* Land mass outlines */}
        <path
          d="M20 75 Q25 55 40 50 Q55 45 70 48 Q85 50 95 42 Q108 35 115 45 Q120 55 110 65 Q100 72 85 70 Q70 68 55 72 Q40 76 30 80 Z"
          fill="#1E3A5F"
          opacity={0.1}
          stroke="#1E3A5F"
          strokeWidth="1"
          strokeOpacity={0.3}
        />
        <path
          d="M30 40 Q45 30 60 32 Q75 34 85 28 Q95 22 100 30 Q95 38 80 40 Q65 42 50 40 Z"
          fill="#1E3A5F"
          opacity={0.08}
          stroke="#1E3A5F"
          strokeWidth="0.8"
          strokeOpacity={0.25}
        />
        <path
          d="M50 18 Q65 12 80 16 Q90 20 82 26 Q70 28 55 24 Z"
          fill="#1E3A5F"
          opacity={0.06}
          stroke="#1E3A5F"
          strokeWidth="0.8"
          strokeOpacity={0.2}
        />

        {/* Location pin */}
        <g transform="translate(70, 22)">
          <circle cx="0" cy="0" r="12" fill="#E63946" opacity={0.08} />
          <circle cx="0" cy="0" r="7" fill="#E63946" opacity={0.12} />
          <path d="M0 -6 Q-4 -6 -4 -2 Q-4 2 0 6 Q4 2 4 -2 Q4 -6 0 -6Z" fill="#E63946" opacity={0.7} />
          <circle cx="0" cy="-2" r="1.5" fill="white" opacity={0.8} />
        </g>

        {/* Search radius */}
        <circle cx="70" cy="22" r="18" fill="none" stroke="#E63946" strokeWidth="0.8" strokeDasharray="3,2" opacity={0.3} />

        {/* "Ellesmere Island" label */}
        <text
          x="70"
          y="50"
          textAnchor="middle"
          fontSize="7"
          fill="#1E3A5F"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          opacity={0.5}
        >
          Ellesmere Island
        </text>

        {/* "Canadian Arctic" region label */}
        <text
          x="70"
          y="88"
          textAnchor="middle"
          fontSize="6.5"
          fill="#1E3A5F"
          opacity={0.4}
          fontFamily="Inter, sans-serif"
          fontStyle="italic"
        >
          Canadian Arctic
        </text>

        {/* 3-year callout */}
        <rect x="88" y="55" width="32" height="16" rx="4" fill="rgba(230, 57, 70, 0.08)" stroke="#E63946" strokeWidth="0.6" />
        <text
          x="104"
          y="66"
          textAnchor="middle"
          fontSize="7"
          fill="#E63946"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          opacity={0.7}
        >
          3 years
        </text>
      </g>
    </svg>
  )
}

function drawFinding() {
  return (
    <svg viewBox="0 0 140 110" className="w-full" style={{ maxHeight: '120px' }}>
      {/* Tiktaalik skeletal diagram */}
      <g transform="translate(10, 15)">
        {/* Spine */}
        <path
          d="M15 42 Q35 38 55 40 Q75 42 95 38 Q105 36 110 38"
          fill="none"
          stroke="#D4A574"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Ribs */}
        {[25, 35, 45, 55, 65, 75, 85].map((x, i) => {
          const dy = Math.sin(i * 0.5) * 1.5
          return (
            <line
              key={i}
              x1={x}
              y1={39 + dy}
              x2={x - 2}
              y2={52 + dy}
              stroke="#D4A574"
              strokeWidth="1.2"
              opacity={0.5}
            />
          )
        })}

        {/* Flat skull (key feature) */}
        <path
          d="M105 36 Q112 30 118 32 Q124 34 122 40 Q120 44 112 44 Q105 42 105 38"
          fill="rgba(212, 165, 116, 0.2)"
          stroke="#D4A574"
          strokeWidth="1.5"
        />
        <circle cx="116" cy="36" r="1.5" fill="#1E3A5F" opacity={0.4} />

        {/* Tail fin */}
        <path d="M15 42 Q10 36 5 38 Q8 42 5 46 Q10 48 15 42" fill="rgba(212, 165, 116, 0.15)" stroke="#D4A574" strokeWidth="1" />

        {/* Front fins (wrist-like bones!) */}
        <g>
          <line x1="90" y1="42" x2="88" y2="54" stroke="#D4A574" strokeWidth="1.8" />
          <line x1="88" y1="54" x2="85" y2="60" stroke="#D4A574" strokeWidth="1.2" />
          <line x1="88" y1="54" x2="90" y2="61" stroke="#D4A574" strokeWidth="1.2" />
          <circle cx="88" cy="54" r="2" fill="#D4A574" opacity={0.3} />
        </g>
        <g>
          <line x1="70" y1="42" x2="68" y2="54" stroke="#D4A574" strokeWidth="1.8" />
          <line x1="68" y1="54" x2="65" y2="60" stroke="#D4A574" strokeWidth="1.2" />
          <line x1="68" y1="54" x2="70" y2="61" stroke="#D4A574" strokeWidth="1.2" />
          <circle cx="68" cy="54" r="2" fill="#D4A574" opacity={0.3} />
        </g>

        {/* Scales pattern */}
        {[30, 42, 55, 68, 80].map((x, i) => (
          <circle key={i} cx={x} cy={36 + Math.sin(i) * 1} r="1" fill="#D4A574" opacity={0.2} />
        ))}

        {/* Annotation labels */}
        <g opacity={0.55}>
          {/* Flat skull label */}
          <line x1="118" y1="28" x2="118" y2="22" stroke="#1E3A5F" strokeWidth="0.6" />
          <text x="118" y="19" textAnchor="middle" fontSize="5.5" fill="#1E3A5F" fontFamily="Inter, sans-serif" fontWeight="500">
            flat skull
          </text>

          {/* Neck label */}
          <line x1="100" y1="34" x2="100" y2="26" stroke="#1E3A5F" strokeWidth="0.6" />
          <text x="100" y="23" textAnchor="middle" fontSize="5.5" fill="#1E3A5F" fontFamily="Inter, sans-serif" fontWeight="500">
            neck
          </text>

          {/* Wrist-like fins label */}
          <line x1="88" y1="62" x2="98" y2="68" stroke="#1E3A5F" strokeWidth="0.6" />
          <text x="104" y="72" textAnchor="start" fontSize="5.5" fill="#1E3A5F" fontFamily="Inter, sans-serif" fontWeight="500">
            wrist-like fins
          </text>

          {/* Scales + gills label */}
          <line x1="42" y1="34" x2="42" y2="26" stroke="#1E3A5F" strokeWidth="0.6" />
          <text x="42" y="23" textAnchor="middle" fontSize="5.5" fill="#1E3A5F" fontFamily="Inter, sans-serif" fontWeight="500">
            scales + gills
          </text>
        </g>
      </g>

      {/* "Transitional" badge */}
      <rect x="28" y="88" width="84" height="14" rx="7" fill="rgba(212, 165, 116, 0.15)" stroke="#D4A574" strokeWidth="0.8" />
      <text
        x="70"
        y="98"
        textAnchor="middle"
        fontSize="6.5"
        fill="#D4A574"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.06em"
      >
        TRANSITIONAL FORM
      </text>
    </svg>
  )
}
