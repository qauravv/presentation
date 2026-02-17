import { motion } from 'framer-motion'


interface Props {
    slideId: 'slide-2.3' | 'slide-2.4' | 'slide-2.5'
    step: number
}

/**
 * Visualizes the 4 components of natural selection as building blocks.
 * Slide 2.3: Blocks 1 & 2 (Variation, Heritability)
 * Slide 2.4: Blocks 3 & 4 (Overproduction, Differential Reproduction)
 * Slide 2.5: The Consequence (The resulting change)
 */
export function ComponentStack({ slideId, step }: Props) {
    const is23 = slideId === 'slide-2.3'
    const is24 = slideId === 'slide-2.4'
    const is25 = slideId === 'slide-2.5'

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
            <div className="w-full max-w-4xl grid grid-cols-1 gap-6 relative z-10">

                {/* BLOCK 1: VARIATION */}
                <Block
                    isVisible={is23 || is24 || is25}
                    isActive={is23 && step >= 0}
                    customIndex={0}
                    title="1. Variation Exists"
                    content={
                        <ul className="list-disc pl-5 space-y-1 text-darwin-charcoal/80 text-lg">
                            <li>Individuals differ (size, color, speed)</li>
                            <li>Always present in populations</li>
                        </ul>
                    }
                    color="bg-white/60"
                    borderColor="border-darwin-navy/20"
                />

                {/* BLOCK 2: HERITABILITY */}
                <Block
                    isVisible={is23 ? step >= 0 : true}
                    isActive={is23 && step >= 0}
                    customIndex={1}
                    title="2. Some Variation is Heritable"
                    content={
                        <div className="flex flex-col gap-2">
                            <p className="text-darwin-charcoal/80 text-lg">Offspring resemble parents more than unrelated individuals.</p>
                            {is23 && (
                                <p className="text-sm italic text-darwin-navy/60 mt-1">
                                    *Darwin didn’t know the genetic mechanism yet.
                                </p>
                            )}
                        </div>
                    }
                    color="bg-white/70"
                    borderColor="border-darwin-navy/30"
                    delay={is23 ? 0.2 : 0}
                />

                {/* BLOCK 3: OVERPRODUCTION (Enter on 2.4) */}
                {(is24 || is25) && (
                    <Block
                        isVisible={true}
                        isActive={is24 && step >= 0}
                        customIndex={2}
                        title="3. More Offspring Than Survive"
                        content={
                            <ul className="list-disc pl-5 space-y-1 text-darwin-charcoal/80 text-lg">
                                <li>Resources are finite</li>
                                <li>Significant fraction dies before reproducing</li>
                            </ul>
                        }
                        color="bg-darwin-amber/10"
                        borderColor="border-darwin-amber/40"
                        delay={is24 ? 0 : 0}
                    />
                )}

                {/* BLOCK 4: DIFFERENTIAL REPRODUCTION (Enter on 2.4, step 0) */}
                {(is24 || is25) && (
                    <Block
                        isVisible={true}
                        isActive={is24 && step >= 0} // In slide 2.4, this is the main point
                        customIndex={3}
                        title="4. Survival is Not Random"
                        content={
                            <div className="text-lg text-darwin-charcoal">
                                Some traits correlate with higher survival. <br />
                                <span className="font-bold text-darwin-navy">Those organisms leave more offspring.</span>
                            </div>
                        }
                        color="bg-darwin-amber/20"
                        borderColor="border-darwin-amber"
                        highlight={true}
                        delay={is24 ? 0.2 : 0}
                    />
                )}

                {/* THE CONSEQUENCE (Enter on 2.5) */}
                {is25 && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        className="mt-8 text-center"
                    >
                        <div className="gold-box inline-block mb-6 relative z-20">
                            <span className="text-2xl sm:text-3xl lg:text-4xl text-darwin-charcoal">
                                Populations Change Over Time
                            </span>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl sm:text-2xl text-darwin-charcoal/80 max-w-3xl mx-auto italic font-serif leading-relaxed"
                        >
                            &ldquo;Not because any process guided the outcome — but because individuals less suited left fewer descendants.&rdquo;
                        </motion.p>
                    </motion.div>
                )}

            </div>

            {/* Connector Line */}
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-darwin-navy/10 -z-0 ml-[-50%] sm:ml-0" />
        </div>
    )
}

function Block({ isVisible, isActive, title, content, color, borderColor, highlight, delay = 0 }: any) {
    if (!isVisible) return null
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
                opacity: 1,
                x: 0,
                scale: isActive ? 1.02 : 1,
                boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
            transition={{ duration: 0.5, delay }}
            className={`
                relative rounded-xl border-l-4 p-6 shadow-sm backdrop-blur-sm transition-colors
                ${color} ${borderColor} ${highlight ? 'shadow-md ring-2 ring-darwin-amber/20' : ''}
            `}
        >
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-darwin-navy shrink-0 w-full sm:w-1/3">
                    {title}
                </h3>
                <div className="grow">
                    {content}
                </div>
            </div>
        </motion.div>
    )
}
