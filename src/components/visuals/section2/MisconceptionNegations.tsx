import { motion } from 'framer-motion'

interface Props {
    step: number
}

/**
 * Slide 2.11: What Natural Selection Does Not Do
 * Visual negations of common misconceptions.
 */
export function MisconceptionNegations({ step }: Props) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

                <MisconceptionCard
                    step={step}
                    index={0}
                    title="NO Foresight"
                    icon="🔮"
                    description="It cannot look ahead to future needs."
                />

                <MisconceptionCard
                    step={step}
                    index={1}
                    title="NO Goal"
                    icon="🎯"
                    description="It does not strive for 'progress'."
                />

                <MisconceptionCard
                    step={step}
                    index={2}
                    title="NO Perfection"
                    icon="✨"
                    description="It only selects what works 'better than' others."
                />

            </div>

            {/* Summary Line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 3 ? 1 : 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center max-w-3xl"
            >
                <p className="text-xl sm:text-2xl text-darwin-charcoal/80 font-serif italic">
                    &ldquo;Natural selection is a blind, mechanical process.&rdquo;
                </p>
            </motion.div>
        </div>
    )
}

function MisconceptionCard({ step, index, title, icon, description }: any) {
    const isVisible = step >= index

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
                opacity: isVisible ? 1 : 0.2,
                y: isVisible ? 0 : 20,
                scale: isVisible ? 1 : 0.9
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-darwin-navy/10 shadow-lg flex flex-col items-center text-center gap-4 relative overflow-hidden"
        >
            {/* Big NO background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <span className="text-[10rem] font-bold text-uni-red">NO</span>
            </div>

            <div className="w-16 h-16 bg-darwin-navy/5 rounded-full flex items-center justify-center text-3xl mb-2 relative">
                {icon}
                {/* Red Slash */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isVisible ? 1 : 0 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-full h-1 bg-uni-red rotate-45 absolute" />
                    <div className="w-full h-full border-4 border-uni-red rounded-full absolute opacity-80" />
                </motion.div>
            </div>

            <h3 className="text-2xl font-heading font-bold text-darwin-navy bg-white/50 px-2 relative z-10">
                {title}
            </h3>

            <p className="text-darwin-charcoal/80 leading-relaxed relative z-10">
                {description}
            </p>
        </motion.div>
    )
}
