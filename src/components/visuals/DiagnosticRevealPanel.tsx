import { motion } from 'framer-motion'

interface Props {
  step: number
}

/**
 * DiagnosticRevealPanel — Used on slide 5.7
 * Purpose-built 2-tier reveal layout with Option B spotlight.
 * Tier 1: C (correct) and B (the trap) side by side, large
 * Tier 2: A and D as smaller muted cards
 * Option B gets dedicated "spotlight" treatment with phrase highlighting.
 */
export function DiagnosticRevealPanel({ step }: Props) {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* ─── Tier 1: C and B — large, prominent ─── */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Option C — CORRECT */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl flex flex-col overflow-hidden"
          style={{
            border: '2.5px solid #52B788',
            backgroundColor: 'rgba(82, 183, 136, 0.04)',
          }}
        >
          {/* Header badge */}
          <div className="flex items-center gap-2 px-4 pt-3 pb-2">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: '#52B788' }}
            >
              C
            </span>
            <span
              className="text-xs tracking-[0.1em] uppercase font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(82, 183, 136, 0.12)', color: '#52B788' }}
            >
              ✓ CORRECT
            </span>
          </div>

          <div className="px-4 pb-3 flex-1 flex flex-col justify-between">
            <p className="text-[0.92rem] sm:text-[1.05rem] leading-relaxed" style={{ color: '#264653' }}>
              Organisms with traits that happen to correlate with higher reproduction in their environment leave more offspring, shifting the population over time.
            </p>
            <div className="mt-3 pt-2" style={{ borderTop: '1px solid rgba(82, 183, 136, 0.2)' }}>
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#52B788' }}>
                ✓ &ldquo;Happen to correlate&rdquo; + &ldquo;in their environment&rdquo; = no teleology, context-dependent.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Option B — THE TRAP (spotlight treatment) */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-xl flex flex-col overflow-hidden diagnostic-b-spotlight"
          style={{
            border: '2.5px solid #E63946',
            backgroundColor: 'rgba(230, 57, 70, 0.03)',
          }}
        >
          {/* Header badge */}
          <div className="flex items-center gap-2 px-4 pt-3 pb-2">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: '#E63946' }}
            >
              B
            </span>
            <span
              className="text-xs tracking-[0.1em] uppercase font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', color: '#E63946' }}
            >
              ✘ THE TRAP
            </span>
          </div>

          <div className="px-4 pb-3 flex-1 flex flex-col justify-between">
            <p className="text-[0.92rem] sm:text-[1.05rem] leading-relaxed" style={{ color: '#264653' }}>
              Random mutations create variation; natural selection then{' '}
              <span
                className="font-bold underline decoration-2"
                style={{
                  color: '#E63946',
                  textDecorationColor: '#E63946',
                  textUnderlineOffset: '3px',
                }}
              >
                directs organisms toward optimal
              </span>{' '}
              adaptations.
            </p>

            {/* Emphasized explanation — THE key teaching moment */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-3 rounded-lg"
              style={{
                border: '2px solid rgba(230, 57, 70, 0.4)',
                backgroundColor: 'rgba(230, 57, 70, 0.06)',
                padding: '0.65rem 0.85rem',
              }}
            >
              <p className="text-[0.82rem] sm:text-[0.92rem] font-bold leading-relaxed" style={{ color: '#E63946' }}>
                &ldquo;Directs toward optimal&rdquo; smuggles in teleology.
              </p>
              <p className="text-[0.78rem] sm:text-[0.85rem] leading-relaxed mt-1.5" style={{ color: '#264653', opacity: 0.8 }}>
                Selection doesn&rsquo;t <strong>DIRECT</strong> toward anything — it filters based on current conditions, imperfectly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ─── Tier 2: A and D — smaller, muted ─── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 8 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="grid grid-cols-2 gap-3"
      >
        {/* Option A */}
        <div
          className="rounded-lg flex items-start gap-2.5"
          style={{
            border: '1px solid #CBD5E1',
            backgroundColor: 'rgba(241, 245, 249, 0.6)',
            padding: '0.7rem 1rem',
            opacity: 0.75,
          }}
        >
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: '#94A3B8' }}
          >
            A
          </span>
          <div>
            <p className="text-xs sm:text-sm" style={{ color: '#264653', opacity: 0.7 }}>
              Organisms evolve traits because they need them.
            </p>
            <p className="text-xs font-medium mt-1" style={{ color: '#E63946' }}>
              ✘ Need-based reasoning — teleological.
            </p>
          </div>
        </div>

        {/* Option D */}
        <div
          className="rounded-lg flex items-start gap-2.5"
          style={{
            border: '1px solid #CBD5E1',
            backgroundColor: 'rgba(241, 245, 249, 0.6)',
            padding: '0.7rem 1rem',
            opacity: 0.75,
          }}
        >
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: '#94A3B8' }}
          >
            D
          </span>
          <div>
            <p className="text-xs sm:text-sm" style={{ color: '#264653', opacity: 0.7 }}>
              Evolution always moves organisms toward greater complexity.
            </p>
            <p className="text-xs font-medium mt-1" style={{ color: '#E63946' }}>
              ✘ Progress narrative — parasites disprove this.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ─── Closing line ─── */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 6 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center"
        style={{ borderTop: '1px solid rgba(38, 70, 83, 0.08)', paddingTop: '0.5rem' }}
      >
        <p className="text-[0.92rem] sm:text-[1.05rem] italic font-medium" style={{ color: '#264653', opacity: 0.6 }}>
          If you chose B, you&rsquo;re in good company — it&rsquo;s designed to be tempting.
        </p>
      </motion.div>
    </div>
  )
}
