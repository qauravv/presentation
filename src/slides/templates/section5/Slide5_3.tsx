import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_3: React.FC<SlideProps> = ({ step }) => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#F7F9FB] font-inter text-[#264653] flex flex-col">
            {/* Title */}
            <div className="pt-8 pb-4 text-center">
                <h1 className="font-playfair text-4xl font-bold text-[#2A9D8F]">Mendel's Solution: Particulate Inheritance</h1>
            </div>

            <div className="flex flex-1 p-8 gap-8">
                {/* Panel 1: Blending (The Problem) */}
                <div className="flex-1 relative rounded-3xl bg-white border border-slate-200 shadow-md p-6 flex flex-col items-center">
                    <div className="absolute top-4 right-4 text-[#E63946] text-4xl font-bold opacity-20">✘</div>
                    <h2 className="text-2xl font-bold text-[#E63946] mb-8 tracking-widest">BLENDING</h2>

                    <div className="flex-1 flex flex-col items-center justify-center space-y-4 opacity-70 grayscale-[0.5]">
                        {/* Simplified Paint Mix Visual */}
                        <div className="flex items-center space-x-2">
                            <div className="h-16 w-16 rounded-full bg-[#E63946]" />
                            <span className="text-2xl">+</span>
                            <div className="h-16 w-16 rounded-full bg-slate-200 border border-slate-300" />
                            <span className="text-2xl">=</span>
                            <div className="h-16 w-16 rounded-full bg-[#FFC0CB]" />
                        </div>
                        <div className="h-12 w-0.5 bg-slate-300" />
                        <div className="flex items-center space-x-2">
                            <div className="h-16 w-16 rounded-full bg-[#FFC0CB]" />
                            <span className="text-2xl">+</span>
                            <div className="h-16 w-16 rounded-full bg-slate-200 border border-slate-300" />
                            <span className="text-2xl">=</span>
                            <div className="h-16 w-16 rounded-full bg-[#FFE4E1]" />
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="font-bold text-[#E63946]">Variation Dissolves</p>
                        <p className="text-sm italic text-slate-500">"Darwin's Problem"</p>
                    </div>
                </div>

                {/* Panel 2: Particulate (The Solution) */}
                <div className="flex-1 relative rounded-3xl bg-white border-[3px] border-[#2A9D8F] shadow-xl p-6 flex flex-col items-center overflow-hidden">
                    <div className="absolute top-4 right-4 text-[#2A9D8F] text-4xl font-bold opacity-20">✓</div>
                    <h2 className="text-2xl font-bold text-[#2A9D8F] mb-8 tracking-widest">PARTICULATE</h2>

                    <div className="flex-1 flex flex-col items-center justify-center w-full">
                        {/* Generation 1 */}
                        <div className="flex justify-center space-x-8 mb-4">
                            <motion.div
                                className="h-20 w-14 bg-[#E63946] rounded-lg shadow-md border-2 border-white flex items-center justify-center text-white font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >A</motion.div>
                            <motion.div
                                className="h-20 w-14 bg-slate-200 rounded-lg shadow-md border-2 border-slate-300 flex items-center justify-center text-slate-500 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >a</motion.div>
                        </div>

                        {/* Arrow */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 40 }}
                            className="w-0.5 bg-[#2A9D8F] mb-4"
                        />

                        {/* Generation 2 (Heterozygote) */}
                        <div className="flex justify-center space-x-2 mb-4 p-4 bg-slate-50 rounded-xl">
                            <motion.div
                                className="h-20 w-14 bg-[#E63946] rounded-lg shadow-md border-2 border-white flex items-center justify-center text-white font-bold"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8 }}
                            >A</motion.div>
                            <motion.div
                                className="h-20 w-14 bg-slate-200 rounded-lg shadow-md border-2 border-slate-300 flex items-center justify-center text-slate-500 font-bold"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.0 }}
                            >a</motion.div>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">Both factors present. One masked, one expressed.</p>

                        {/* Arrow */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 40 }}
                            className="w-0.5 bg-[#2A9D8F] mb-4"
                            transition={{ delay: 1.2 }}
                        />

                        {/* Generation 3 (Reappearance) */}
                        <div className="flex justify-center space-x-8">
                            <motion.div
                                className="h-20 w-14 bg-[#E63946] rounded-lg shadow-md border-2 border-white flex items-center justify-center text-white font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >A</motion.div>
                            <motion.div
                                className="h-20 w-14 bg-slate-200 rounded-lg shadow-md border-2 border-slate-300 flex items-center justify-center text-slate-500 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.7 }}
                            >a</motion.div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="font-bold text-[#2A9D8F]">Discrete Units Preserved</p>
                        <p className="text-sm italic text-slate-500">"Mendel's Solution"</p>
                    </div>
                </div>
            </div>

            {/* Footer Caption */}
            <motion.div
                className="bg-[#1E3A5F] py-6 text-center text-white"
                initial={{ y: 100 }}
                animate={step >= 1 ? { y: 0 } : {}}
            >
                <p className="text-2xl font-medium">
                    Variation is preserved, not diluted.
                    <br />
                    <span className="text-[#2A9D8F] font-bold">This is exactly what natural selection requires.</span>
                </p>
            </motion.div>
        </div>
    )
}
