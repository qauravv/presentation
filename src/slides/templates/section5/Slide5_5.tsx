import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_5: React.FC<SlideProps> = ({ step }) => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#1E3A5F] font-inter text-white">
            {/* Background with subtle technological/biological texture */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#2A9D8F 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="relative z-10 flex h-full flex-col px-12 py-10">
                <div className="text-center mb-8">
                    <h2 className="font-playfair text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#2A9D8F]">Two Halves, Joined</h2>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center relative">

                    {/* Animation of Synthesis */}
                    <div className="relative h-64 w-full flex items-center justify-center mb-12">
                        {/* Darwin Orb */}
                        <motion.div
                            className="absolute h-32 w-32 rounded-full flex items-center justify-center bg-[#D4A574]/80 backdrop-blur-sm border-2 border-[#D4A574] shadow-[0_0_50px_rgba(212,165,116,0.5)] z-10"
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: step >= 1 ? -60 : -200, opacity: 1, scale: step >= 1 ? 0.9 : 1 }}
                            transition={{ duration: 1, type: 'spring' }}
                        >
                            <span className="font-playfair font-bold text-[#1E3A5F] text-xl">Darwin</span>
                        </motion.div>

                        {/* Mendel Orb */}
                        <motion.div
                            className="absolute h-32 w-32 rounded-full flex items-center justify-center bg-[#2A9D8F]/80 backdrop-blur-sm border-2 border-[#2A9D8F] shadow-[0_0_50px_rgba(42,157,143,0.5)] z-10"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: step >= 1 ? 60 : 200, opacity: 1, scale: step >= 1 ? 0.9 : 1 }}
                            transition={{ duration: 1, type: 'spring' }}
                        >
                            <span className="font-playfair font-bold text-white text-xl">Mendel</span>
                        </motion.div>

                        {/* Synthesis Glow (appears when they merge) */}
                        {step >= 1 && (
                            <motion.div
                                className="absolute h-40 w-40 rounded-full bg-white blur-[60px] z-0"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 0.6, scale: 1.5 }}
                                transition={{ delay: 0.8, duration: 1 }}
                            />
                        )}
                    </div>

                    {/* Text Content */}
                    <div className="max-w-4xl space-y-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-2xl font-light text-slate-200">
                                In the 1920s–1940s, mathematicians and biologists formally showed that
                                <span className="font-semibold text-[#D4A574]"> Darwinian selection</span> operating on
                                <span className="font-semibold text-[#2A9D8F]"> Mendelian inheritance</span>
                                produces exactly the patterns of adaptation Darwin described.
                            </p>
                        </motion.div>

                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
                            >
                                <p className="text-xl leading-relaxed">
                                    Variation arises through mutation and recombination (undirected).
                                    <br />
                                    Sorted by differential reproduction (non-random, environment-biased).
                                </p>
                            </motion.div>
                        )}

                        {step >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="inline-block"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4A574] to-[#2A9D8F] opacity-75 blur"></div>
                                    <div className="relative rounded-lg bg-[#0D1B2A] px-8 py-4">
                                        <span className="text-2xl font-bold tracking-wide text-white">
                                            Undirected input, environmentally biased output.
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}
