import { motion } from 'framer-motion'


interface Props {
    step: number
}

/**
 * Slide 2.6: The Key Distinction
 * Split screen visualization:
 * Left: Undirected / Random (Red tint, chaotic particle motion)
 * Right: Non-Random / Sorting (Green tint, ordered/filtering motion)
 */
export function KeyDistinctionSplit({ step }: Props) {
    return (
        <div className="w-full h-full flex flex-col md:flex-row relative overflow-hidden rounded-xl border border-darwin-navy/10 shadow-lg bg-white">

            {/* LEFT SIDE: UNDIRECTED */}
            <div className="flex-1 relative p-8 flex flex-col items-center justify-start overflow-hidden group border-r border-dashed border-darwin-navy/20">
                <div className="absolute inset-0 bg-uni-red/5" />
                <h3 className="text-2xl font-heading font-bold text-uni-red relative z-10 mb-2">Undirected</h3>
                <p className="text-center text-darwin-charcoal/70 relative z-10 font-medium">Input (Variation)</p>

                {/* Chaotic Particles Visual */}
                <div className="absolute inset-0 top-24 opacity-60">
                    <ChaoticParticles />
                </div>

                {/* Description appears step 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 10 }}
                    className="mt-auto relative z-10 bg-white/90 p-4 rounded-lg shadow-sm border border-uni-red/20 text-center w-full"
                >
                    <p className="text-sm font-semibold text-uni-red">NO GOAL</p>
                    <p className="text-xs text-darwin-charcoal/80">Mutations happen regardless of need.</p>
                </motion.div>
            </div>

            {/* CENTRAL ARROW */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md border border-darwin-navy/10">
                <ArrowIcon className="w-8 h-8 text-darwin-navy" />
            </div>

            {/* RIGHT SIDE: NON-RANDOM */}
            <div className="flex-1 relative p-8 flex flex-col items-center justify-start overflow-hidden">
                <div className="absolute inset-0 bg-uni-green/5" />
                <h3 className="text-2xl font-heading font-bold text-uni-green relative z-10 mb-2">Non-Random</h3>
                <p className="text-center text-darwin-charcoal/70 relative z-10 font-medium">Output (Survival)</p>

                {/* Sorting Filters Visual */}
                <div className="absolute inset-0 top-24 opacity-60">
                    <SortingParticles />
                </div>

                {/* Description appears step 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
                    className="mt-auto relative z-10 bg-white/90 p-4 rounded-lg shadow-sm border border-uni-green/20 text-center w-full"
                >
                    <p className="text-sm font-semibold text-uni-green">HIGHLY BIASED</p>
                    <p className="text-xs text-darwin-charcoal/80">Environment strictly sorts based on traits.</p>
                </motion.div>
            </div>

        </div>
    )
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    )
}

function ChaoticParticles() {
    // Random bouncing balls
    return (
        <svg viewBox="0 0 200 300" className="w-full h-full">
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.circle
                    key={i}
                    r={3 + (i % 3)}
                    fill="#E63946"
                    initial={{ cx: Math.random() * 200, cy: Math.random() * 300 }}
                    animate={{
                        cx: [Math.random() * 200, Math.random() * 200, Math.random() * 200],
                        cy: [Math.random() * 300, Math.random() * 300, Math.random() * 300]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    opacity={0.4}
                />
            ))}
        </svg>
    )
}

function SortingParticles() {
    // Particles falling through a "filter"
    const filterY = 150
    return (
        <svg viewBox="0 0 200 300" className="w-full h-full">
            {/* Filter Line */}
            <line x1="0" y1={filterY} x2="200" y2={filterY} stroke="#52B788" strokeWidth="2" strokeDasharray="4 4" opacity={0.5} />

            {Array.from({ length: 15 }).map((_, i) => {
                const isFit = i % 3 !== 0 // 2/3rds survive
                return (
                    <motion.circle
                        key={i}
                        r={3}
                        fill={isFit ? "#52B788" : "#999"}
                        initial={{ cx: 20 + Math.random() * 160, cy: -20 }}
                        animate={{
                            cy: isFit ? 320 : filterY - 5,
                            opacity: isFit ? [0, 1, 1, 0] : [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "linear"
                        }}
                    />
                )
            })}
        </svg>
    )
}
