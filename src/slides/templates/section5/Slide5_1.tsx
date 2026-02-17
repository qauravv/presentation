import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_1: React.FC<SlideProps> = ({ step }) => {
    return (
        <div className="relative h-full w-full overflow-hidden font-inter">
            {/* Background with Gradient Transition */}
            <div
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#F5F1E8] to-[#F7F9FB]"
                style={{
                    background: 'linear-gradient(90deg, #F5F1E8 0%, #F5F1E8 30%, #2A9D8F 100%)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A9D8F]/10 to-[#2A9D8F]/20" />
            </div>

            {/* Shapes for visual interest */}
            <motion.div
                className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-[#2A9D8F] blur-[150px] opacity-20"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute left-[-200px] bottom-[-200px] h-[600px] w-[600px] rounded-full bg-[#1E3A5F] blur-[120px] opacity-10"
            />

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-12 px-20 text-center">
                {/* Step 0: Darwin's Era */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="font-playfair text-5xl font-bold leading-tight text-[#1E3A5F]">
                        Everything so far has been Darwin's argument <br />
                        <span className="italic opacity-80">using ideas available in his time.</span>
                    </h1>
                </motion.div>

                {/* Step 1: The Shift */}
                {step >= 1 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center space-x-4"
                    >
                        <div className="h-[2px] w-24 bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F]" />
                        <span className="font-inter text-2xl font-semibold tracking-widest text-[#2A9D8F] uppercase">
                            Now we move forward
                        </span>
                        <div className="h-[2px] w-24 bg-gradient-to-r from-[#2A9D8F] to-[#1E3A5F]" />
                    </motion.div>
                )}

                {/* Step 2: The Problem */}
                {step >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl rounded-2xl bg-white/60 p-12 shadow-xl backdrop-blur-md border border-white/40"
                    >
                        <p className="font-inter text-3xl font-medium leading-relaxed text-[#264653]">
                            Darwin had a serious problem he couldn't solve —
                            <br />
                            and the solution existed in his lifetime,
                            <br />
                            <strong className="text-[#E76F51]">but he never saw it.</strong>
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Decorative Eras */}
            <div className="absolute bottom-10 left-10 opacity-40">
                <span className="font-playfair text-xl font-bold text-[#1E3A5F]">1859</span>
            </div>
            <div className="absolute bottom-10 right-10 opacity-60">
                <span className="font-inter text-xl font-bold text-[#2A9D8F]">Modern Synthesis</span>
            </div>
        </div>
    )
}
