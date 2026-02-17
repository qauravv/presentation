import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_9({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8 items-center justify-center">

                <div className="flex flex-row gap-12 items-center max-w-6xl">
                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-8">
                        <BuildStep step={0} currentStep={step} duration={0.6}>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-[#E76F51]">Atavisms</h3>
                                <p className="text-xl leading-relaxed opacity-80">
                                    Recurrence of a trait from an ancestral species that had been lost.
                                </p>
                            </div>
                        </BuildStep>

                        <BuildStep step={1} currentStep={step} duration={0.6}>
                            <div className="bg-white/60 p-6 rounded-xl border-l-4 border-[#2A9D8F]">
                                <p className="text-lg italic font-medium">
                                    "Gene regulatory networks are conserved."
                                </p>
                                <p className="mt-2 text-base opacity-70">
                                    The instructions for legs, teeth, or tails are often still there — just switched off.
                                </p>
                            </div>
                        </BuildStep>

                        <BuildStep step={3} currentStep={step} duration={0.6}>
                            <div className="text-[#C9A961] font-bold text-xl mt-4">
                                Sometimes, they switch back on.
                            </div>
                        </BuildStep>
                    </div>

                    {/* Right: Visual (Dolphin Example) */}
                    <div className="flex-1 flex items-center justify-center relative h-[400px]">
                        <BuildStep step={2} currentStep={step} duration={0.8}>
                            <div className="relative">
                                {/* Abstract Dolphin Silhouette */}
                                <svg viewBox="0 0 400 200" className="w-full h-auto drop-shadow-xl">
                                    <path d="M50 100 Q80 20 180 30 T320 60 Q360 80 380 90 L360 110 Q320 120 280 120 T150 140 Q100 150 50 100 Z" fill="#1E3A5F" />
                                    <circle cx="80" cy="80" r="4" fill="white" opacity={0.6} />

                                    {/* Hind Legs Callout */}
                                    <g transform="translate(250, 115)">
                                        <motion.circle
                                            cx="0" cy="0" r="15"
                                            fill="none" stroke="#E63946" strokeWidth="2"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <path d="M0 0 L10 20 L5 25" stroke="white" strokeWidth="2" fill="none" opacity={0.8} />
                                    </g>
                                </svg>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-0 right-10 bg-white p-3 rounded-lg shadow-md border border-[#E63946]/30"
                                >
                                    <p className="text-sm font-bold text-[#E63946]">Dolphin Hind Legs</p>
                                    <p className="text-xs text-gray-500">Documented anomalies</p>
                                </motion.div>
                            </div>
                        </BuildStep>
                    </div>
                </div>
            </div>
        </div>
    )
}
