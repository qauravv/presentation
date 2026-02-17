import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_4: React.FC<SlideProps> = ({ step }) => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#F7F9FB] font-inter text-[#264653]">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2A9D8F]/5 skew-x-12" />

            <div className="p-12 h-full flex flex-col">
                {/* Title */}
                <div className="mb-12 border-b-2 border-[#2A9D8F]/30 pb-4">
                    <h2 className="font-playfair text-4xl font-bold text-[#2A9D8F]">One of the Great Near-Misses in Science</h2>
                </div>

                <div className="flex-1 flex justify-center items-center relative">
                    {/* Central Timeline Line */}
                    <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-slate-200 -ml-0.5 rounded-full" />
                    <motion.div
                        className="absolute left-1/2 top-10 w-1 bg-[#2A9D8F] -ml-0.5 rounded-full"
                        initial={{ height: 0 }}
                        animate={{ height: step >= 1 ? '90%' : '100%' }} // Animate down
                        transition={{ duration: 3, ease: 'easeInOut' }}
                    />

                    <div className="w-full max-w-4xl space-y-16 relative z-10">
                        {/* Event 1: Mendel's Experiments */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-12 text-right">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="block font-bold text-[#2A9D8F] text-xl">1856–1863</span>
                                    <span className="text-xl">Mendel's experiments</span>
                                </motion.div>
                            </div>
                            <div className="relative flex items-center justify-center w-8">
                                <div className="h-4 w-4 rounded-full bg-[#2A9D8F] border-4 border-white shadow-sm z-20" />
                            </div>
                            <div className="w-1/2 pl-12" />
                        </div>

                        {/* Event 2: Mendel Publishes */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-12" />
                            <div className="relative flex items-center justify-center w-8">
                                <div className="h-4 w-4 rounded-full bg-[#2A9D8F] border-4 border-white shadow-sm z-20" />
                            </div>
                            <div className="w-1/2 pl-12">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    <span className="block font-bold text-[#E76F51] text-2xl">1866</span>
                                    <span className="text-xl font-semibold">Mendel publishes</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Event 3: Jenkin's Critique */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-12 text-right">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5 }}
                                >
                                    <span className="block font-bold text-[#E63946] text-2xl">1867</span>
                                    <span className="text-xl font-semibold">Jenkin's critique of Darwin</span>
                                    <span className="block text-sm italic text-slate-500 mt-1">"The blending problem"</span>
                                </motion.div>
                            </div>
                            <div className="relative flex items-center justify-center w-8">
                                <div className="h-4 w-4 rounded-full bg-[#E63946] border-4 border-white shadow-sm z-20" />
                            </div>
                            <div className="w-1/2 pl-12" />
                        </div>

                        {/* Event 4: Darwin Dies */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-12" />
                            <div className="relative flex items-center justify-center w-8">
                                <div className="h-4 w-4 rounded-full bg-[#1E3A5F] border-4 border-white shadow-sm z-20" />
                            </div>
                            <div className="w-1/2 pl-12">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.0 }}
                                >
                                    <span className="block font-bold text-[#1E3A5F] text-xl">1882</span>
                                    <span className="text-xl">Darwin dies</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Narrative Conclusion */}
                {step >= 1 && (
                    <motion.div
                        className="absolute bottom-12 left-0 right-0 mx-auto max-w-3xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#2A9D8F]/20 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="text-xl leading-relaxed text-[#264653]">
                            Mendel published <span className="font-bold text-[#E76F51]">one year before</span> Jenkin's critique.
                            <br />
                            Darwin almost certainly did not appreciate its significance.
                            <br />
                            <span className="italic opacity-70">Both died without the connection being made.</span>
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
