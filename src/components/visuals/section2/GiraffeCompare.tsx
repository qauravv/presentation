import { motion } from 'framer-motion'

interface Props {
    step: number
}

/**
 * Slide 2.9: The Giraffe Explanation
 * Comparative visual of two "Theory Cards".
 */
export function GiraffeCompare({ step }: Props) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

                {/* Card 1: Student 1 (Lamarck/Need-based) */}
                <TheoryCard
                    title="Student 1 Theory"
                    subtitle="Need-based / Stretching"
                    isCorrect={false}
                    step={step}
                    index={0}
                >
                    <div className="flex flex-col gap-4 text-darwin-charcoal/80">
                        <p>Argues that the giraffe <span className="font-bold text-uni-red">needed</span> to reach higher.</p>
                        <div className="h-24 bg-uni-red/5 rounded-lg border border-uni-red/10 flex items-center justify-center relative overflow-hidden">
                            {/* Visual: Stretching neck arrow */}
                            <div className="absolute bottom-0 w-2 bg-uni-red/40 h-10 rounded-full animate-pulse origin-bottom" style={{ height: '70%' }} />
                            <span className="relative z-10 text-xs font-semibold text-uni-red">Effort = Change?</span>
                        </div>
                        <p className="text-sm italic">"Use and Disuse" (Lamarckian)</p>
                    </div>
                </TheoryCard>

                {/* Card 2: Student 2 (Darwin/Sorting) */}
                <TheoryCard
                    title="Student 2 Theory"
                    subtitle="Variation & Sorting"
                    isCorrect={true}
                    step={step}
                    index={1}
                >
                    <div className="flex flex-col gap-4 text-darwin-charcoal/80">
                        <p>Argues that taller giraffes <span className="font-bold text-uni-green">survived better</span>.</p>
                        <div className="h-24 bg-uni-green/5 rounded-lg border border-uni-green/10 flex items-center justify-center relative overflow-hidden p-2 gap-2">
                            {/* Visual: Sorting */}
                            <div className="w-2 bg-darwin-charcoal/20 h-8 rounded-full opacity-30" />
                            <div className="w-2 bg-darwin-charcoal/20 h-10 rounded-full opacity-30" />
                            <div className="w-2 bg-uni-green h-16 rounded-full shadow-lg" />
                            <span className="absolute bottom-1 right-2 text-xs font-semibold text-uni-green">Selection</span>
                        </div>
                        <p className="text-sm italic">Natural Selection</p>
                    </div>
                </TheoryCard>

            </div>

            {/* Conclusion Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 20 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-darwin-navy text-white px-8 py-4 rounded-full shadow-xl flex items-center gap-3"
            >
                <span className="text-2xl">💡</span>
                <span className="text-lg font-medium">Evolution is a <strong className="text-darwin-gold">sorting process</strong>, not a transforming process.</span>
            </motion.div>
        </div>
    )
}

function TheoryCard({ title, subtitle, isCorrect, children, step, index }: any) {
    const revealed = step >= (index + 1)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: revealed ? 1 : 0.4,
                scale: revealed ? 1 : 0.9,
                filter: revealed ? 'grayscale(0%)' : 'grayscale(100%) blur(2px)'
            }}
            transition={{ duration: 0.5 }}
            className={`
                relative rounded-2xl p-6 border-2 
                ${isCorrect ? 'border-uni-green bg-white shadow-green-100' : 'border-uni-red bg-white shadow-red-100'}
                shadow-xl flex flex-col gap-4
            `}
        >
            <div className="flex justify-between items-start border-b pb-3 border-gray-100">
                <div>
                    <h3 className="text-xl font-heading font-bold text-darwin-navy">{title}</h3>
                    <p className={`text-sm font-semibold ${isCorrect ? 'text-uni-green' : 'text-uni-red'}`}>{subtitle}</p>
                </div>
                <div className={`
                    text-2xl
                    ${isCorrect ? 'text-uni-green' : 'text-uni-red'}
                `}>
                    {isCorrect ? '✓' : '✗'}
                </div>
            </div>

            <div className="flex-grow">
                {children}
            </div>

            {!isCorrect && revealed && (
                <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, rotate: -10, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: -10, scale: 1 }}
                        className="bg-uni-red text-white font-bold px-4 py-1 rounded shadow-lg border-2 border-white transform"
                    >
                        INCORRECT MECHANISM
                    </motion.div>
                </div>
            )}
        </motion.div>
    )
}
