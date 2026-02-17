import { useState } from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_8({ def, step }: Props) {
    const [hoveredBone, setHoveredBone] = useState<string | null>(null)

    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Subtle Grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#1E3A5F 1px, transparent 1px), linear-gradient(90deg, #1E3A5F 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-lg">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8 items-center">

                {/* Intro Text */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="text-center mb-6 max-w-4xl relative z-20">
                        <p className="text-xl font-light leading-relaxed">
                            Comparison of forelimbs across different species reveals a <span className="font-bold text-[#E76F51]">striking pattern.</span>
                        </p>
                    </div>
                </BuildStep>

                {/* Visualization Grid */}
                <div className="flex-1 w-full max-w-6xl grid grid-cols-4 gap-4 perspective-1000">
                    <LimbPanel
                        step={step}
                        index={0}
                        species="Human"
                        usage="Grasping"
                        bones={originalBones.human}
                        hoveredBone={hoveredBone}
                        setHoveredBone={setHoveredBone}
                    />
                    <LimbPanel
                        step={step}
                        index={1}
                        species="Cat"
                        usage="Walking"
                        bones={originalBones.cat}
                        hoveredBone={hoveredBone}
                        setHoveredBone={setHoveredBone}
                    />
                    <LimbPanel
                        step={step}
                        index={2}
                        species="Whale"
                        usage="Swimming"
                        bones={originalBones.whale}
                        hoveredBone={hoveredBone}
                        setHoveredBone={setHoveredBone}
                    />
                    <LimbPanel
                        step={step}
                        index={3}
                        species="Bat"
                        usage="Flying"
                        bones={originalBones.bat}
                        hoveredBone={hoveredBone}
                        setHoveredBone={setHoveredBone}
                    />
                </div>

                {/* Legend / Insight */}
                <BuildStep step={1} currentStep={step} duration={0.6}>
                    <div className="mt-6 flex flex-col items-center z-20">
                        <div className="flex items-center gap-6 bg-white px-8 py-3 rounded-full shadow-md border border-[#1E3A5F]/10 mb-4 transform hover:scale-105 transition-transform duration-300">
                            <LegendItem color="#E76F51" label="Humerus" id="humerus" setHoveredBone={setHoveredBone} hoveredBone={hoveredBone} />
                            <LegendItem color="#2A9D8F" label="Radius/Ulna" id="radiusUlna" setHoveredBone={setHoveredBone} hoveredBone={hoveredBone} />
                            <LegendItem color="#E9C46A" label="Carpals" id="carpals" setHoveredBone={setHoveredBone} hoveredBone={hoveredBone} />
                            <LegendItem color="#264653" label="Phalanges" id="phalanges" setHoveredBone={setHoveredBone} hoveredBone={hoveredBone} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-2xl font-bold text-[#1E3A5F]">
                                Why use the same bones for such different jobs?
                            </p>
                            <p className="text-sm text-[#1E3A5F]/60 mt-1 uppercase tracking-widest font-bold">
                                Because they inherited them.
                            </p>
                        </motion.div>
                    </div>
                </BuildStep>
            </div>
        </div>
    )
}

function LegendItem({ color, label, id, setHoveredBone, hoveredBone }: any) {
    const isHovered = hoveredBone === id
    const isDimmed = hoveredBone && !isHovered

    return (
        <div
            className={`flex items-center gap-2 cursor-pointer transition-opacity duration-300 ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
            onMouseEnter={() => setHoveredBone(id)}
            onMouseLeave={() => setHoveredBone(null)}
        >
            <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: color }} />
            <span className="text-xs font-bold uppercase tracking-wide text-[#1E3A5F]">{label}</span>
        </div>
    )
}

function LimbPanel({ step, index, species, usage, bones, hoveredBone, setHoveredBone }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: step >= 0 ? 1 : 0, rotateX: step >= 0 ? 0 : 90 }}
            transition={{ delay: index * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-[#1E3A5F]/10 flex flex-col items-center p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-50" />

            <div className="mb-4 text-center z-10">
                <h3 className="text-xl font-bold text-[#1E3A5F] font-heading">{species}</h3>
                <span className="text-[10px] font-bold text-[#E76F51] bg-[#E76F51]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{usage}</span>
            </div>

            <div className="flex-1 w-full flex items-center justify-center relative">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-[#F5F1E8] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-30" />

                <svg viewBox="0 0 100 200" className="h-full w-auto max-h-[220px] drop-shadow-lg z-10">
                    <BonePath d={bones.humerus} color="#E76F51" id="humerus" hoveredBone={hoveredBone} setHoveredBone={setHoveredBone} />
                    <BonePath d={bones.radiusUlna} color="#2A9D8F" id="radiusUlna" hoveredBone={hoveredBone} setHoveredBone={setHoveredBone} />
                    <BonePath d={bones.carpals} color="#E9C46A" id="carpals" hoveredBone={hoveredBone} setHoveredBone={setHoveredBone} />
                    <BonePath d={bones.phalanges} color="#264653" id="phalanges" hoveredBone={hoveredBone} setHoveredBone={setHoveredBone} />
                </svg>
            </div>
        </motion.div>
    )
}

function BonePath({ d, color, id, hoveredBone, setHoveredBone }: any) {
    const isHovered = hoveredBone === id
    const isDimmed = hoveredBone && !isHovered

    return (
        <motion.path
            d={d}
            fill={color}
            initial={{ opacity: 0.9 }}
            animate={{
                opacity: isDimmed ? 0.3 : 1,
                scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
            style={{ originX: "50%", originY: "50%" }}
            onMouseEnter={() => setHoveredBone(id)}
            onMouseLeave={() => setHoveredBone(null)}
            className="cursor-pointer transition-colors duration-300 hover:brightness-110"
        />
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
