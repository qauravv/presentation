import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_3({ def, step }: Props) {
    const cards = [
        {
            title: 'THE PREDICTION',
            content: 'If fish-to-tetrapod transition happened, transitional fossils should exist in ~375 Ma rocks from ancient shallow water.',
            color: '#2A9D8F',
            icon: '🗺️'
        },
        {
            title: 'THE SEARCH',
            content: 'Canadian Arctic, chosen based on predictions. 3 years of searching.',
            color: '#E9C46A',
            icon: '⛏️'
        },
        {
            title: 'THE FINDING',
            content: 'Tiktaalik: gills + scales (fish) + flat skull + neck + wrist-like fin bones (tetrapod).',
            color: '#E76F51',
            icon: '🦎'
        }
    ]

    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col items-center justify-center p-8">
                <div className="flex flex-row justify-center gap-6 w-full max-w-6xl h-[60%]">
                    {cards.map((card, index) => (
                        <BuildStep key={index} step={index} currentStep={step} duration={0.5}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 rounded-2xl p-6 shadow-xl border-t-8 flex flex-col relative overflow-hidden bg-white"
                                style={{ borderColor: card.color }}
                            >
                                <div className="absolute -right-4 -top-4 opacity-10 text-9xl">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-wide" style={{ color: card.color }}>
                                    {card.title}
                                </h3>
                                <p className="text-lg leading-relaxed z-10 text-[#2D2D2D]">
                                    {card.content}
                                </p>

                                {/* Visual Placeholder for each card */}
                                <div className="flex-1 mt-4 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200 shadow-inner">
                                    <span className="text-4xl opacity-50 filter grayscale">{card.icon}</span>
                                </div>
                            </motion.div>
                        </BuildStep>
                    ))}
                </div>

                <BuildStep step={3} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="mt-8 bg-[#1E3A5F] text-white px-8 py-4 rounded-full shadow-lg border border-[#C9A961]"
                    >
                        <p className="text-xl font-bold">
                            Strong theories tell you where to look before you look.
                        </p>
                    </motion.div>
                </BuildStep>
            </div>
        </div>
    )
}
