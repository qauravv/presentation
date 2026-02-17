import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { MicroMacroScale } from '../../../components/visuals/MicroMacroScale'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_7({ def, step }: Props) {
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

                {/* Top Statement */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="max-w-4xl text-center mb-8">
                        <p className="text-2xl sm:text-3xl font-light mb-4">
                            No biological barrier says “selection can change beak size but not bone structure.”
                        </p>
                        <p className="text-xl sm:text-2xl font-normal opacity-80">
                            Same mechanism — heritable variation sorted by reproduction — operating over different timescales.
                        </p>
                    </div>
                </BuildStep>

                {/* Visualization */}
                <div className="w-full max-w-5xl h-[300px] flex items-center justify-center mb-4">
                    <MicroMacroScale step={step} />
                </div>

                {/* Bottom Punchline */}
                <BuildStep step={2} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-[#1E3A5F] text-white px-8 py-4 rounded-xl shadow-lg border-b-4 border-[#C9A961]"
                    >
                        <p className="text-xl sm:text-2xl font-bold">
                            No one has found a point where the process hits a wall and stops.
                        </p>
                    </motion.div>
                </BuildStep>
            </div>
        </div>
    )
}
