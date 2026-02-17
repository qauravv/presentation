import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { StratigraphicColumn } from '../../../components/visuals/StratigraphicColumn'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_2({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {/* Background Texture (Subtle Geological Pattern) */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231E3A5F\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
            />

            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-row">
                {/* Left Column: Visual */}
                <div className="w-1/2 h-full flex items-center justify-center p-8 relative">
                    <div className="scale-110 transform origin-center">
                        <StratigraphicColumn step={step} />
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-1/2 h-full flex flex-col justify-center p-12 space-y-8">
                    <BuildStep step={1} currentStep={step} duration={0.6}>
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#1E3A5F] shadow-sm">
                            <p className="text-2xl font-bold leading-snug">
                                Fossils in adjacent layers should be more similar than fossils from widely separated layers.
                            </p>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-1 bg-[#C9A961] mt-4"
                            />
                            <p className="text-xl font-semibold text-[#C9A961] mt-2">
                                Confirmed consistently.
                            </p>
                        </div>
                    </BuildStep>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg italic opacity-60 ml-4 max-w-md"
                    >
                        Geology is messy. Strata fold and fault. But the broad pattern holds across formations worldwide.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}
