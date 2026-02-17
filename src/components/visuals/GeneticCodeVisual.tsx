import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * GeneticCodeVisual — Used on slide 6.1
 * Resolution palette DNA / genetic code anchor:
 * - Central double helix (shared machinery)
 * - Codon triplets → amino acid icons motif
 * - Build-aware:
 *   - step 0: helix only
 *   - step 1: codon → amino-acid mapping appears
 *   - step 2: subtle key phrase underline
 */
export function GeneticCodeVisual({ step }: Props) {
  const showMapping = step >= 1
  const showEmphasis = step >= 2

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="rounded-2xl mx-auto relative overflow-hidden"
        style={{
          backgroundColor: 'rgba(250, 249, 246, 0.9)',
          border: '1px solid rgba(201, 169, 97, 0.4)',
          boxShadow:
            '0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.6)',
          padding: '1.5rem 1.75rem 1.4rem',
        }}
      >
        {/* Subtle header strip */}
        <div className="flex items-center justify-between mb-2.5">
          <p
            className="text-[0.8rem] tracking-[0.18em] uppercase font-semibold"
            style={{ color: '#1E3A5F', opacity: 0.7 }}
          >
            UNIVERSAL GENETIC MACHINERY
          </p>
          <div className="flex items-center gap-1.5 text-[0.7rem]">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '999px',
                backgroundColor: '#1E3A5F',
                opacity: 0.28,
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '999px',
                backgroundColor: '#FFB703',
                opacity: 0.45,
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '999px',
                backgroundColor: '#2A9D8F',
                opacity: 0.25,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-[1.1fr,1.1fr] gap-4 items-center mt-1">
          {/* Left: DNA double helix */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -10 }}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-center"
          >
            <svg
              viewBox="0 0 180 260"
              className="w-full max-w-xs"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gc-helix-a" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#457B9D" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gc-helix-b" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Left strand */}
              <path
                d="M60 20 Q30 60 60 100 Q90 140 60 180 Q30 220 60 250"
                fill="none"
                stroke="url(#gc-helix-a)"
                strokeWidth={4}
              />
              {/* Right strand */}
              <path
                d="M120 20 Q150 60 120 100 Q90 140 120 180 Q150 220 120 250"
                fill="none"
                stroke="url(#gc-helix-b)"
                strokeWidth={4}
              />

              {/* Rungs (base pairs) */}
              {[40, 70, 100, 130, 160, 190, 220].map((y, i) => {
                const offset = i % 2 === 0 ? 6 : -6
                const x1 = 70 + offset
                const x2 = 110 - offset
                const isHighlight = showMapping && i >= 2 && i <= 4
                return (
                  <g key={y}>
                    <line
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke={isHighlight ? '#FFB703' : '#C9A961'}
                      strokeWidth={isHighlight ? 3 : 2}
                      strokeLinecap="round"
                      opacity={isHighlight ? 1 : 0.7}
                    />
                    {/* Codon tick marks */}
                    <circle
                      cx={x1}
                      cy={y}
                      r={2.3}
                      fill={isHighlight ? '#1E3A5F' : '#1E3A5F'}
                      opacity={isHighlight ? 0.9 : 0.4}
                    />
                    <circle
                      cx={(x1 + x2) / 2}
                      cy={y}
                      r={2.3}
                      fill={isHighlight ? '#457B9D' : '#457B9D'}
                      opacity={isHighlight ? 0.9 : 0.4}
                    />
                    <circle
                      cx={x2}
                      cy={y}
                      r={2.3}
                      fill={isHighlight ? '#2A9D8F' : '#2A9D8F'}
                      opacity={isHighlight ? 0.9 : 0.4}
                    />
                  </g>
                )
              })}
            </svg>
          </motion.div>

          {/* Right: codon-to-amino-acid mapping */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: showMapping ? 1 : 0, x: showMapping ? 0 : 12 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <p
              className="text-[0.85rem] font-semibold tracking-[0.16em] uppercase"
              style={{ color: '#1E3A5F', opacity: 0.8 }}
            >
              CODONS → AMINO ACIDS
            </p>

            <div className="grid grid-cols-2 gap-2">
              {[
                { codon: 'AUG', label: 'Start / Met' },
                { codon: 'UUU', label: 'Phe' },
                { codon: 'GCU', label: 'Ala' },
                { codon: 'UGA', label: 'Stop' },
              ].map((row, i) => (
                <div
                  key={row.codon}
                  className="rounded-xl flex items-center justify-between gap-2"
                  style={{
                    padding: '0.5rem 0.6rem',
                    border:
                      i === 0 || i === 3
                        ? '1.5px solid rgba(255,183,3,0.6)'
                        : '1px solid rgba(38,70,83,0.16)',
                    backgroundColor:
                      i === 0 || i === 3
                        ? 'rgba(255,183,3,0.12)'
                        : 'rgba(255,255,255,0.7)',
                  }}
                >
                  <div
                    className="rounded-md px-2 py-1 text-[0.78rem] font-semibold"
                    style={{
                      backgroundColor: 'rgba(30,58,95,0.9)',
                      color: '#F5F1E8',
                      letterSpacing: '0.16em',
                    }}
                  >
                    {row.codon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[0.62rem] font-semibold"
                      style={{
                        background:
                          i === 0 || i === 3
                            ? 'linear-gradient(135deg,#FFB703,#F5A623)'
                            : 'rgba(42,157,143,0.12)',
                        color: i === 0 || i === 3 ? '#2D2D2D' : '#2A9D8F',
                        border:
                          i === 0 || i === 3
                            ? '1px solid rgba(255,183,3,0.7)'
                            : '1px solid rgba(42,157,143,0.35)',
                      }}
                    >
                      aa
                    </div>
                    <p
                      className="text-[0.7rem]"
                      style={{ color: '#2D2D2D', opacity: 0.8 }}
                    >
                      {row.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {showEmphasis && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-[0.78rem] sm:text-[0.85rem] font-semibold text-center mt-1 accent-line-bottom"
                style={{ color: '#1E3A5F' }}
              >
                Same basic coding system, from bacteria to humans.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

