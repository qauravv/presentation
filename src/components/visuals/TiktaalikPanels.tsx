import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * TiktaalikPanels — Used on slide 4.3
 * Three panels: Prediction → Search → Finding.
 * Build step by step for narrative reveal.
 */
export function TiktaalikPanels({ step }: Props) {
  const panels = [
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <circle cx="16" cy="12" r="8" fill="none" stroke="#1E3A5F" strokeWidth="1.5" />
          <path d="M12 10 L14 14 L20 10" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="20" x2="16" y2="28" stroke="#1E3A5F" strokeWidth="1.5" />
          <circle cx="16" cy="28" r="2" fill="#D4A574" />
        </svg>
      ),
      title: 'THE PREDICTION',
      text: 'If fish-to-tetrapod transition happened, transitional fossils should exist in ~375 Ma rocks from ancient shallow water.',
      bgTint: 'rgba(30, 58, 95, 0.04)',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <circle cx="16" cy="16" r="12" fill="none" stroke="#1E3A5F" strokeWidth="1.5" />
          <circle cx="16" cy="12" r="2" fill="#E63946" />
          <line x1="16" y1="14" x2="16" y2="26" stroke="#E63946" strokeWidth="1.5" />
          <line x1="12" y1="22" x2="20" y2="22" stroke="#E63946" strokeWidth="1.5" />
        </svg>
      ),
      title: 'THE SEARCH',
      text: 'Canadian Arctic. Chosen based on geological predictions. 3 years of searching.',
      bgTint: 'rgba(30, 58, 95, 0.04)',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <path d="M6 24 Q16 8 26 24" fill="none" stroke="#D4A574" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="#D4A574" />
          <path d="M10 20 L22 20" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="2,1" />
          <path d="M8 24 L24 24" stroke="#1E3A5F" strokeWidth="1.5" />
        </svg>
      ),
      title: 'THE FINDING',
      text: 'Tiktaalik: gills + scales + flat skull + neck + wrist-like fin bones.',
      bgTint: 'rgba(212, 165, 116, 0.08)',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full">
        {panels.map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= i ? 1 : 0, y: step >= i ? 0 : 10 }}
            transition={{ duration: 0.45, delay: i * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl flex flex-col"
            style={{
              border: i === 2 ? '2px solid #D4A574' : '1px solid #DDD',
              backgroundColor: panel.bgTint,
              padding: '1.5rem',
            }}
          >
            <div className="mb-3">{panel.icon}</div>
            <p className="text-sm sm:text-base font-bold text-darwin-navy tracking-wider uppercase mb-2">
              {panel.title}
            </p>
            <p className="text-xs sm:text-sm text-darwin-charcoal/80 leading-relaxed flex-1">
              {panel.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
