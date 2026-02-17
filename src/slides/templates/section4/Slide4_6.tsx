import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { RealTimeEvolutionSplit } from '../../../components/visuals/RealTimeEvolutionSplit'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_6({ def, step }: Props) {
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
                <div className="flex-1 w-full max-w-6xl mx-auto flex items-center justify-center">
                    <div className="scale-110 transform origin-center w-full">
                        <RealTimeEvolutionSplit step={step} />
                    </div>
                </div>
            </div>
        </div>
    )
}
