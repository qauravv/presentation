import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_10({ def, step }: Props) {
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

                <div className="flex flex-row w-full h-full max-w-6xl gap-8">

                    {/* Left Column: Embryos */}
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        <h3 className="absolute top-0 text-xl font-bold uppercase tracking-widest text-[#E76F51]">Embryology</h3>
                        <div className="flex gap-4 items-end mt-8">
                            {/* Fish Embryo */}
                            <div className="flex flex-col items-center gap-2">
                                <EmbryoSVG type="fish" />
                                <span className="text-sm font-bold">Fish</span>
                            </div>
                            {/* Reptile Embryo */}
                            <div className="flex flex-col items-center gap-2">
                                <EmbryoSVG type="reptile" />
                                <span className="text-sm font-bold">Reptile</span>
                            </div>
                            {/* Human Embryo */}
                            <div className="flex flex-col items-center gap-2">
                                <EmbryoSVG type="human" />
                                <span className="text-sm font-bold">Human</span>
                            </div>
                        </div>
                        <BuildStep step={0} currentStep={step} duration={0.6}>
                            <div className="mt-6 bg-white/80 p-4 rounded-lg shadow-sm border border-[#E76F51]/30 max-w-sm text-center">
                                <p className="font-semibold text-[#E76F51]">Gill slits & tails in all early stages.</p>
                                <p className="text-sm text-gray-600 mt-1">Why build structures just to discard them?</p>
                            </div>
                        </BuildStep>
                    </div>

                    {/* Center Divider with Arrow */}
                    <div className="w-px bg-gray-300 relative my-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C9A961] text-white rounded-full p-2">
                            <span className="font-bold text-xs uppercase">AND</span>
                        </div>
                    </div>

                    {/* Right Column: DNA */}
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        <h3 className="absolute top-0 text-xl font-bold uppercase tracking-widest text-[#2A9D8F]">Genetics</h3>

                        <div className="relative w-40 h-60 flex items-center justify-center mt-8">
                            {/* Abstract DNA Helix Animation */}
                            <motion.div
                                animate={{ rotateY: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="w-20 h-full border-l-4 border-r-4 border-double border-[#2A9D8F]/40 relative"
                            >
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="absolute w-full h-1 bg-[#2A9D8F] opacity-60" style={{ top: `${i * 10}%` }} />
                                ))}
                            </motion.div>
                        </div>

                        <BuildStep step={1} currentStep={step} duration={0.6}>
                            <div className="mt-6 space-y-4 max-w-sm text-center">
                                <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-[#2A9D8F]/30">
                                    <p className="font-bold text-[#2A9D8F]">Universal Genetic Code</p>
                                    <p className="text-sm text-gray-600">Bacteria, plants, humans share the same language.</p>
                                </div>
                                <div className="bg-white/80 p-4 rounded-lg shadow-sm border border-[#2A9D8F]/30">
                                    <p className="font-bold text-[#2A9D8F]">98% DNA Shared</p>
                                    <p className="text-sm text-gray-600">With Chimpanzees. Deep homology.</p>
                                </div>
                            </div>
                        </BuildStep>
                    </div>
                </div>

                {/* Bottom Conclusion */}
                <BuildStep step={2} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute bottom-8 bg-[#1E3A5F] text-white px-10 py-4 rounded-full shadow-lg border-2 border-[#C9A961]"
                    >
                        <p className="text-xl font-bold">
                            Not just similar bodies. Similar recipes.
                        </p>
                    </motion.div>
                </BuildStep>

            </div>
        </div>
    )
}

function EmbryoSVG({ type }: { type: 'fish' | 'reptile' | 'human' }) {
    // Simplified embryo shapes
    const color = type === 'fish' ? '#457B9D' : type === 'reptile' ? '#E9C46A' : '#E76F51';

    return (
        <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-md">
            <path d="M40 20 Q60 20 60 40 Q60 80 40 100 Q20 80 20 40 Q20 20 40 20 Z" fill={color} opacity="0.2" />
            <path d="M40 25 Q55 25 55 40 Q55 75 40 95 Q25 75 25 40 Q25 25 40 25 Z" fill={color} opacity="0.6" />
            <circle cx="35" cy="35" r="4" fill="white" opacity="0.8" /> {/* Eye */}

            {/* Gill Slits (common feature) */}
            <path d="M45 45 L50 48" stroke="white" strokeWidth="2" opacity="0.6" />
            <path d="M45 50 L50 53" stroke="white" strokeWidth="2" opacity="0.6" />

            {/* Tail */}
            <path d="M40 95 Q45 110 55 115" stroke={color} strokeWidth="3" fill="none" opacity="0.6" />
        </svg>
    )
}
