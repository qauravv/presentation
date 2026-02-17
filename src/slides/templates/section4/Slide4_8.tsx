import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_8({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8 items-center">

                {/* Intro Text */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="text-center mb-8 max-w-4xl">
                        <p className="text-xl font-light">
                            Comparison of forelimbs across different species reveals a striking pattern.
                        </p>
                    </div>
                </BuildStep>

                {/* Visualization Grid */}
                <div className="flex-1 w-full max-w-6xl grid grid-cols-4 gap-4">
                    <LimbPanel
                        step={step}
                        index={0}
                        species="Human"
                        usage="Grasping"
                        bones={originalBones.human}
                    />
                    <LimbPanel
                        step={step}
                        index={1}
                        species="Cat"
                        usage="Walking"
                        bones={originalBones.cat}
                    />
                    <LimbPanel
                        step={step}
                        index={2}
                        species="Whale"
                        usage="Swimming"
                        bones={originalBones.whale}
                    />
                    <LimbPanel
                        step={step}
                        index={3}
                        species="Bat"
                        usage="Flying"
                        bones={originalBones.bat}
                    />
                </div>

                {/* Legend / Insight */}
                <BuildStep step={1} currentStep={step} duration={0.6}>
                    <div className="mt-8 flex items-center gap-8 bg-white/80 px-6 py-3 rounded-full shadow-sm border border-[#1E3A5F]/10">
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#E76F51]" /> <span className="text-xs font-bold">Humerus</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#2A9D8F]" /> <span className="text-xs font-bold">Radius/Ulna</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#E9C46A]" /> <span className="text-xs font-bold">Carpals</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#264653]" /> <span className="text-xs font-bold">Phalanges</span></div>
                    </div>
                    <p className="mt-4 text-lg font-bold text-[#C9A961]">
                        Why use the same bones for such different jobs?
                    </p>
                </BuildStep>
            </div>
        </div>
    )
}

function LimbPanel({ step, index, species, usage, bones }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 20 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-[#1E3A5F]/10 flex flex-col items-center p-4 relative overflow-hidden group hover:shadow-lg transition-shadow"
        >
            <div className="mb-2 text-center">
                <h3 className="text-lg font-bold text-[#1E3A5F]">{species}</h3>
                <span className="text-xs text-[#1E3A5F]/60 uppercase tracking-wider">{usage}</span>
            </div>

            <div className="flex-1 w-full flex items-center justify-center relative">
                {/* Simplified Bone SVG Construction */}
                <svg viewBox="0 0 100 200" className="h-full w-auto max-h-[220px]">
                    {/* Humerus */}
                    <path d={bones.humerus} fill="#E76F51" opacity={0.8} />
                    {/* Radius/Ulna */}
                    <path d={bones.radiusUlna} fill="#2A9D8F" opacity={0.8} />
                    {/* Carpals */}
                    <path d={bones.carpals} fill="#E9C46A" opacity={0.8} />
                    {/* Phalanges */}
                    <path d={bones.phalanges} fill="#264653" opacity={0.8} />
                </svg>
            </div>
        </motion.div>
    )
}

// Very simplified bone paths for visual representation
const originalBones = {
    human: {
        humerus: "M45 20 L55 20 L52 70 L48 70 Z",
        radiusUlna: "M42 72 L48 72 L45 130 L40 130 Z M52 72 L58 72 L55 130 L50 130 Z",
        carpals: "M40 132 L60 132 L60 145 L40 145 Z",
        phalanges: "M35 147 L40 147 L38 190 L33 190 Z M45 147 L50 147 L48 195 L43 195 Z M55 147 L60 147 L58 190 L53 190 Z M65 147 L70 147 L68 180 L63 180 Z"
    },
    cat: {
        humerus: "M40 20 L60 25 L55 65 L45 65 Z",
        radiusUlna: "M42 67 L48 67 L46 120 L40 120 Z M52 67 L58 67 L56 120 L50 120 Z",
        carpals: "M40 122 L60 122 L60 135 L40 135 Z",
        phalanges: "M35 137 L40 137 L38 160 L33 160 Z M45 137 L50 137 L48 165 L43 165 Z M55 137 L60 137 L58 160 L53 160 Z M65 137 L70 137 L68 155 L63 155 Z"
    },
    whale: {
        humerus: "M30 30 L70 30 L65 60 L35 60 Z",
        radiusUlna: "M35 62 L48 62 L48 90 L35 90 Z M52 62 L65 62 L65 90 L52 90 Z",
        carpals: "M30 92 L70 92 L70 110 L30 110 Z",
        phalanges: "M25 112 L35 112 L35 170 L25 170 Z M40 112 L50 112 L50 180 L40 180 Z M55 112 L65 112 L65 170 L55 170 Z M70 112 L80 112 L80 150 L70 150 Z"
    },
    bat: {
        humerus: "M45 20 L55 20 L52 50 L48 50 Z",
        radiusUlna: "M48 52 L52 52 L51 90 L49 90 Z",
        carpals: "M45 92 L55 92 L55 98 L45 98 Z",
        phalanges: "M10 100 L15 100 L45 98 L40 98 Z M30 105 L35 105 L90 140 L85 140 Z M50 105 L55 105 L95 160 L90 160 Z M70 105 L75 105 L98 180 L93 180 Z"
    }
}
