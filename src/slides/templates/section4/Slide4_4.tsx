import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_4({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#0D1B2A] text-[#F1FAEE]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1B3A5F]/40 to-transparent opacity-60 pointer-events-none" />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#0D1B2A]/90 backdrop-blur-sm border-b border-white/10">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    What Would Disprove This?
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col items-center justify-center p-8 text-center space-y-12">
                {/* Darwin Quote */}
                <BuildStep step={0} currentStep={step} duration={0.8}>
                    <div className="relative max-w-4xl mx-auto">
                        <span className="absolute -top-12 left-0 text-[8rem] text-[#C9A961]/20 font-serif leading-none">“</span>
                        <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed font-serif italic text-white/90 drop-shadow-lg">
                            If it could be demonstrated that any complex organ existed which could not possibly have been formed by numerous, successive, slight modifications, <span className="text-[#E63946] font-semibold">my theory would absolutely break down.</span>
                        </p>
                        <span className="absolute -bottom-24 right-0 text-[8rem] text-[#C9A961]/20 font-serif leading-none">”</span>
                        <p className="text-right mt-6 text-[#C9A961] font-semibold tracking-widest uppercase text-sm">
                            — Charles Darwin
                        </p>
                    </div>
                </BuildStep>

                {/* The Concrete Test */}
                <BuildStep step={1} currentStep={step} duration={0.6}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-3xl backdrop-blur-sm">
                        <p className="text-xl sm:text-2xl font-light">
                            <span className="font-bold">Concrete test:</span> A rabbit skeleton in 500-million-year-old rock = fundamental problem.
                        </p>
                    </div>
                </BuildStep>

                {/* The Result */}
                <BuildStep step={2} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="px-10 py-5 bg-[#C9A961]/10 border-2 border-[#C9A961] rounded-lg shadow-[0_0_30px_rgba(201,169,97,0.2)]"
                    >
                        <p className="text-2xl sm:text-3xl font-bold text-[#C9A961]">
                            160+ years of searching. No such discovery verified.
                        </p>
                    </motion.div>
                </BuildStep>
            </div>
        </div>
    )
}
