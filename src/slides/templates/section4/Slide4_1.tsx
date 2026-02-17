import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_1({ def, step }: Props) {
    // Enhanced arrows for the "Hero" version
    const arrows = [
        {
            label: 'Fossils',
            sublabel: 'Paleontology',
            angle: 200, // Top-left ish
            color: '#A8DADC', // Lighter teal
            icon: '🦴',
        },
        {
            label: 'DNA',
            sublabel: 'Genetics',
            angle: 340, // Top-right ish
            color: '#457B9D', // Medium blue
            icon: '🧬',
        },
        {
            label: 'Anatomy',
            sublabel: 'Comparative',
            angle: 160, // Bottom-left ish
            color: '#F1FAEE', // Off-white
            icon: '🦴',
        },
        {
            label: 'Direct Obs.',
            sublabel: 'Real-time',
            angle: 20, // Bottom-right ish
            color: '#E63946', // Red accent
            icon: '🔬',
        },
    ]

    return (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#162E4C] to-[#0D1B2A] text-white">
            {/* Background Texture/Particles */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Area */}
            <div className="absolute top-0 left-0 w-full h-[16%] flex items-center px-[6%] z-10 bg-gradient-to-b from-[#0D1B2A]/80 to-transparent">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight drop-shadow-md">
                    {def.title}
                </h2>
            </div>

            {/* Main Content Area */}
            <div className="absolute inset-0 flex flex-col items-center justify-center top-[10%]">

                {/* Intro Text */}
                <BuildStep step={0} currentStep={step} duration={0.8}>
                    <p className="text-xl sm:text-2xl text-center max-w-4xl text-[#F1FAEE] font-light leading-relaxed px-8 drop-shadow-lg">
                        No single line of evidence is conclusive alone. <br />
                        <span className="font-semibold text-[#A8DADC]">Different researchers</span>, <span className="font-semibold text-[#A8DADC]">different methods</span>, <span className="font-semibold text-[#A8DADC]">different fields</span>.
                    </p>
                </BuildStep>

                {/* Visual Engine */}
                <div className="relative w-[800px] h-[500px] mt-8 flex items-center justify-center">
                    {/* Center Node */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: step >= 1 ? 1 : 0, opacity: step >= 1 ? 1 : 0 }}
                        transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
                        className="relative z-20 w-32 h-32 rounded-full bg-[#1E3A5F] border-4 border-[#C9A961] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(201,169,97,0.4)]"
                    >
                        <span className="text-xs uppercase tracking-widest text-[#C9A961] mb-1">Same</span>
                        <span className="text-lg font-bold text-white">Conclusion</span>
                    </motion.div>

                    {/* Arrows */}
                    {arrows.map((arrow, i) => {
                        const distance = 280;
                        const angleRad = (arrow.angle * Math.PI) / 180;
                        const startX = Math.cos(angleRad) * distance;
                        const startY = Math.sin(angleRad) * distance;

                        return (
                            <motion.div
                                key={i}
                                initial={{ x: startX * 1.5, y: startY * 1.5, opacity: 0 }}
                                animate={{
                                    x: step >= 1 ? startX : startX * 1.5,
                                    y: step >= 1 ? startY : startY * 1.5,
                                    opacity: step >= 1 ? 1 : 0
                                }}
                                transition={{ delay: 0.2 + (i * 0.15), duration: 0.8, type: 'spring' }}
                                className="absolute z-10 flex flex-col items-center"
                                style={{ left: '50%', top: '50%', marginLeft: -40, marginTop: -30, x: startX, y: startY }}
                            >
                                {/* Line pointing to center */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: '50%', left: '50%',
                                        width: distance - 60, height: 2,
                                        background: `linear-gradient(90deg, ${arrow.color}, transparent)`,
                                        transformOrigin: '0 50%',
                                        transform: `rotate(${arrow.angle + 180}deg) translate(20px, 0)`,
                                        zIndex: -1
                                    }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: step >= 1 ? 1 : 0 }}
                                    transition={{ delay: 0.5 + (i * 0.15), duration: 0.6 }}
                                />

                                <div className="bg-[#0D1B2A] border border-white/20 p-3 rounded-xl shadow-xl backdrop-blur-sm flex flex-col items-center gap-1 w-24">
                                    <span className="text-2xl">{arrow.icon}</span>
                                    <span className="text-xs font-bold text-white">{arrow.label}</span>
                                    <span className="text-[10px] text-white/60">{arrow.sublabel}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Punchline */}
                <BuildStep step={2} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="mt-4 px-8 py-3 bg-[#C9A961]/10 border border-[#C9A961]/50 rounded-full"
                    >
                        <p className="text-xl font-bold text-[#C9A961] tracking-wide">
                            The convergence is what makes the case powerful.
                        </p>
                    </motion.div>
                </BuildStep>

            </div>
        </div>
    )
}
