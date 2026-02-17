import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_2: React.FC<SlideProps> = ({ step }) => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#F7F9FB] font-inter text-[#264653]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-[#457B9D] opacity-10 blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -left-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-[#2A9D8F] opacity-10 blur-[100px]"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="relative z-10 flex h-full flex-col px-12 py-10">
                {/* Title Bar */}
                <div className="mb-8 border-b-2 border-[#2A9D8F]/30 pb-4">
                    <h2 className="font-playfair text-4xl font-bold text-[#2A9D8F]">Darwin's Unsolved Problem</h2>
                </div>

                <div className="flex flex-1 items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-3xl leading-relaxed text-[#264653]">
                                In Darwin's era, traits were assumed to blend like mixing paint:
                                <span className="font-bold text-[#457B9D]"> tall + short = medium.</span>
                            </p>
                        </motion.div>

                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-xl border-l-4 border-[#E76F51] bg-[#E76F51]/10 p-6 shadow-sm"
                            >
                                <p className="text-2xl font-bold leading-relaxed text-[#264653]">
                                    If blending is true, any beneficial new variant gets halved each generation.
                                    <br />
                                    <span className="text-[#E76F51]">Within a few generations, it dissolves.</span>
                                </p>
                                <p className="mt-4 text-xl font-medium text-[#264653]">
                                    Selection requires variation to persist. Blending destroys it.
                                </p>
                            </motion.div>
                        )}

                        {step >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="font-playfair text-xl italic text-[#264653]/70">
                                    Fleeming Jenkin pointed this out in 1867. Darwin had no adequate answer.
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* Visual Metaphor: Paint Mixing */}
                    <div className="flex h-full flex-1 flex-col items-center justify-center rounded-3xl bg-white/50 p-8 shadow-lg backdrop-blur-sm">
                        <div className="relative flex h-64 w-full items-center justify-center space-x-4">
                            {/* Red Drop */}
                            <motion.div
                                className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#E63946] shadow-lg"
                                initial={{ x: 0, opacity: 1 }}
                                animate={step >= 1 ? { x: 50, opacity: 0.5, scale: 0.8 } : {}}
                                transition={{ duration: 1.5, type: 'spring' }}
                            >
                                <span className="font-bold text-white">RED</span>
                            </motion.div>

                            {/* Plus Sign */}
                            <motion.div
                                className="text-4xl text-[#264653]"
                                animate={step >= 1 ? { opacity: 0 } : { opacity: 1 }}
                            >+</motion.div>

                            {/* White Drop */}
                            <motion.div
                                className="relative flex h-32 w-32 items-center justify-center rounded-full bg-slate-100 border-2 border-slate-200 shadow-lg"
                                initial={{ x: 0, opacity: 1 }}
                                animate={step >= 1 ? { x: -50, opacity: 0.5, scale: 0.8 } : {}}
                                transition={{ duration: 1.5, type: 'spring' }}
                            >
                                <span className="font-bold text-slate-500">WHITE</span>
                            </motion.div>

                            {/* Resulting Pink Blob appearing */}
                            {step >= 1 && (
                                <motion.div
                                    className="absolute inset-0 m-auto flex h-40 w-40 items-center justify-center rounded-full bg-[#FFC0CB] shadow-xl"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1.2, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    <span className="font-bold text-[#E63946]">PINK</span>
                                </motion.div>
                            )}
                        </div>

                        <motion.div className="mt-8 text-center" animate={{ opacity: step >= 1 ? 1 : 0 }}>
                            <p className="text-lg font-bold text-[#E76F51]">VARIATION LOST</p>
                            <p className="text-sm text-[#264653]/60">The distinct "Red" is gone forever.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
