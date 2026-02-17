import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { RadiometricTimeline } from '../../../components/visuals/RadiometricTimeline'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_5({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8">
                {/* Main Statement */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="text-center mb-8">
                        <p className="text-2xl sm:text-3xl font-bold max-w-4xl mx-auto leading-normal">
                            Radiometric dating is based on physics of radioactive decay — <span className="text-[#E76F51]">not biology.</span>
                        </p>
                    </div>
                </BuildStep>

                {/* Visualization */}
                <div className="flex-1 relative flex items-center justify-center">
                    <div className="scale-125 transform origin-center w-full max-w-4xl">
                        <RadiometricTimeline step={step} />
                    </div>

                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(circle at 50% 50%, transparent 40%, #F5F1E8 90%)' }}
                    />
                </div>

                {/* Bottom Punchline */}
                <BuildStep step={1} currentStep={step} duration={0.6}>
                    <div className="text-center mt-4">
                        <p className="text-xl italic text-[#C9A961] font-medium bg-white/80 inline-block px-6 py-2 rounded-full border border-[#C9A961]/30 shadow-sm backdrop-blur-sm">
                            This is the “independent convergence” from earlier in action.
                        </p>
                    </div>
                </BuildStep>
            </div>
        </div>
    )
}
