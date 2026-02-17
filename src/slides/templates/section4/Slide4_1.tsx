import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

// Particle background component for "stunning" effect
const Particles = () => {
    // Generate static random positions to avoid hydration mismatch
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5
        }))
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full opacity-10"
                    style={{
                        top: p.top,
                        left: p.left,
                        width: '4px',
                        height: '4px',
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.2, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    )
}

export function Slide4_1({ def, step }: Props) {
    const lines = [
        { label: "FOSSILS", side: 'left', delay: 0, color: "#E9C46A" },
        { label: "GENETICS", side: 'top', delay: 0.2, color: "#2A9D8F" },
        { label: "ANATOMY", side: 'right', delay: 0.4, color: "#E76F51" },
        { label: "OBSERVATION", side: 'bottom', delay: 0.6, color: "#F4A261" },
    ]

    return (
        <div className="w-full h-full relative overflow-hidden bg-[#1E1E1E] text-white font-sans">
            {/* Dark, premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#000000]" />
            <Particles />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title integrated into the design */}
            <div className="absolute top-8 left-0 w-full text-center z-20">
                <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">
                    {def.title}
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#E9C46A] to-transparent mx-auto mt-4" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">

                {/* Central "Truth" Core */}
                <div className="relative w-[600px] h-[600px] flex items-center justify-center">

                    {/* Converging Lines */}
                    {lines.map((line, i) => {
                        const isHorizontal = line.side === 'left' || line.side === 'right';
                        const isVertical = line.side === 'top' || line.side === 'bottom';

                        let initialPos = {};
                        if (line.side === 'left') initialPos = { x: -300, opacity: 0 };
                        if (line.side === 'right') initialPos = { x: 300, opacity: 0 };
                        if (line.side === 'top') initialPos = { y: -300, opacity: 0 };
                        if (line.side === 'bottom') initialPos = { y: 300, opacity: 0 };

                        return (
                            <motion.div
                                key={i}
                                className="absolute flex items-center justify-center"
                                style={{
                                    [line.side]: '0%',
                                    ...(isHorizontal ? { top: '50%', width: '50%', height: '2px', translateY: '-50%' } : {}),
                                    ...(isVertical ? { left: '50%', height: '50%', width: '2px', translateX: '-50%' } : {}),
                                    ...(line.side === 'right' || line.side === 'bottom' ? { transformOrigin: 'top left' } : { transformOrigin: 'bottom right' })
                                }}
                            >
                                <BuildStep step={0} currentStep={step}>
                                    <motion.div
                                        className="relative w-full h-full bg-white/20 overflow-visible flex items-center justify-center"
                                        initial={initialPos}
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: line.delay, type: 'spring', bounce: 0.2 }}
                                    >
                                        <div className="absolute bg-current blur-[2px]" style={{ backgroundColor: line.color, inset: 0 }} />
                                        <div className="absolute bg-white" style={{ backgroundColor: line.color, inset: 0 }} />

                                        {/* Label Badge */}
                                        <div
                                            className={`absolute px-4 py-2 rounded-lg bg-[#0F172A]/90 border border-white/10 backdrop-blur-md shadow-2xl
                                                ${line.side === 'left' ? '-left-24' : ''}
                                                ${line.side === 'right' ? '-right-24' : ''}
                                                ${line.side === 'top' ? '-top-16' : ''}
                                                ${line.side === 'bottom' ? '-bottom-16' : ''}
                                            `}
                                        >
                                            <span className="text-sm font-bold tracking-widest text-white">{line.label}</span>
                                        </div>
                                    </motion.div>
                                </BuildStep>
                            </motion.div>
                        )
                    })}

                    {/* Central Glowing Orb */}
                    <div className="relative z-30">
                        <BuildStep step={1} currentStep={step}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
                                className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#0A1625] border-2 border-white/20 flex items-center justify-center shadow-[0_0_60px_rgba(42,157,143,0.4)]"
                            >
                                <div className="absolute inset-0 rounded-full animate-pulse bg-[#2A9D8F]/20 blur-xl" />
                                <div className="flex flex-col items-center text-center p-4">
                                    <span className="text-xs uppercase tracking-[0.2em] text-[#E9C46A] mb-1">Single</span>
                                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#A8DADC]">
                                        CONCLUSION
                                    </span>
                                </div>
                            </motion.div>
                        </BuildStep>
                    </div>
                </div>

                {/* Bottom Punchline */}
                <BuildStep step={2} currentStep={step}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute bottom-16 px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl max-w-2xl text-center"
                    >
                        <p className="text-xl md:text-2xl font-light text-gray-200">
                            Different researchers. Different methods.
                            <br />
                            <span className="font-semibold text-[#E9C46A]">Same result.</span>
                        </p>
                    </motion.div>
                </BuildStep>

            </div>
        </div>
    )
}
