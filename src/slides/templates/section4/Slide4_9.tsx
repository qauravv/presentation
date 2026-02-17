
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_9({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#1E3A5F] text-white">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] z-0" />
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #457B9D 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight drop-shadow-md">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8 items-center justify-center z-10">

                <div className="flex flex-row gap-16 items-center max-w-7xl w-full">

                    {/* Left: Concept Info */}
                    <div className="flex-1 space-y-10 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[#E76F51] to-transparent opacity-30 rounded-full" />

                        <BuildStep step={0} currentStep={step} duration={0.6}>
                            <div className="pl-8 relative">
                                <span className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#E76F51] shadow-lg shadow-[#E76F51]/50" />
                                <h3 className="text-3xl font-bold mb-3 text-[#E76F51]">Atavisms</h3>
                                <p className="text-xl leading-relaxed text-gray-300 font-light">
                                    Ancestral traits meant to be lost, <strong className="text-white font-semibold">reappearing.</strong>
                                </p>
                            </div>
                        </BuildStep>

                        <BuildStep step={1} currentStep={step} duration={0.6}>
                            <div className="pl-8 relative">
                                <span className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-[#2A9D8F] shadow-lg shadow-[#2A9D8F]/50" />
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-xl italic font-serif text-[#C9A961]">
                                        "The instruction manual is still there."
                                    </p>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="w-12 h-6 bg-[#334155] rounded-full p-1 relative">
                                            <motion.div
                                                className="w-4 h-4 rounded-full bg-gray-500"
                                                animate={{ x: 0 }}
                                            />
                                        </div>
                                        <p className="text-sm opacity-60">Gene Regulatory Network: <span className="text-red-400 font-bold">OFF</span></p>
                                    </div>
                                </div>
                            </div>
                        </BuildStep>

                        <BuildStep step={3} currentStep={step} duration={0.6}>
                            <div className="pl-8 relative">
                                <span className="absolute left-[-5px] top-4 w-3 h-3 rounded-full bg-[#E9C46A] shadow-lg shadow-[#E9C46A]/50" />
                                <div className="mt-2 flex items-center gap-3">
                                    <div className="w-12 h-6 bg-[#2A9D8F]/20 rounded-full p-1 relative border border-[#2A9D8F]">
                                        <motion.div
                                            className="w-4 h-4 rounded-full bg-[#2A9D8F]"
                                            animate={{ x: 24 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    </div>
                                    <p className="text-lg text-[#E9C46A] font-bold">Sometimes, it switches back ON.</p>
                                </div>
                            </div>
                        </BuildStep>
                    </div>

                    {/* Right: Visual (Dolphin Example) */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <BuildStep step={2} currentStep={step} duration={0.8}>
                            <div className="relative w-full max-w-lg aspect-video">
                                {/* X-Ray Scanner Effect Container */}
                                <div className="absolute inset-0 bg-black/40 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                                    {/* Base Dolphin */}
                                    <DolphinSVG skeleton={false} />

                                    {/* X-Ray Overlay using Clip Path animation */}
                                    <motion.div
                                        className="absolute inset-0 bg-[#0F172A] z-10"
                                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                                        animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] }}
                                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                                    >
                                        <div className="w-full h-full relative">
                                            {/* X-Ray Skeleton Visual */}
                                            <DolphinSVG skeleton={true} />
                                            <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#4CC9F0] shadow-[0_0_20px_#4CC9F0]" />
                                            <div className="absolute bottom-4 right-4 text-[#4CC9F0] font-mono text-xs tracking-widest border border-[#4CC9F0] px-2 py-1 rounded">
                                                SCANNING...
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Callout */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute -bottom-6 -right-6 bg-white text-[#1E3A5F] p-4 rounded-xl shadow-xl border-l-4 border-[#E76F51] z-20 max-w-xs"
                                >
                                    <h4 className="font-bold text-[#E76F51]">Dolphin Hind Legs</h4>
                                    <p className="text-xs mt-1 leading-snug font-medium">
                                        Mutations can reactivate ancient pathways, revealing the tetrapod past.
                                    </p>
                                </motion.div>
                            </div>
                        </BuildStep>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DolphinSVG({ skeleton }: { skeleton: boolean }) {
    return (
        <svg viewBox="0 0 500 250" className={`w-full h-full ${skeleton ? 'opacity-100' : 'opacity-80'}`}>
            <defs>
                <linearGradient id="dolphinBody" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#CBD5E1" />
                    <stop offset="50%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#64748B" />
                </linearGradient>
                <filter id="xrayGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Silhouette Body */}
            {!skeleton && (
                <path
                    d="M450,125 Q420,100 350,90 Q250,80 150,100 Q100,110 50,125 Q30,130 10,125 Q30,140 60,145 Q120,155 200,145 Q280,135 350,140 Q400,145 440,160 Q450,140 450,125 Z"
                    fill="url(#dolphinBody)"
                    stroke="none"
                />
            )}

            {/* Skeleton View */}
            {skeleton && (
                <g filter="url(#xrayGlow)">
                    {/* Spine */}
                    <path d="M430,130 Q350,100 200,110 Q100,120 50,130" fill="none" stroke="#4CC9F0" strokeWidth="3" strokeDasharray="4,2" opacity="0.8" />

                    {/* Ribs (simplified) */}
                    {[...Array(6)].map((_, i) => (
                        <path key={i} d={`M${300 - i * 20},${105 + i * 2} L${300 - i * 20},${135 + i * 2}`} stroke="#4CC9F0" strokeWidth="2" opacity="0.6" />
                    ))}

                    {/* Front Flipper Bones */}
                    <g transform="translate(320, 135) rotate(20)">
                        <path d="M0,0 L10,20 L5,25" stroke="#4CC9F0" strokeWidth="2" fill="none" />
                        <circle cx="0" cy="0" r="3" fill="#4CC9F0" />
                    </g>

                    {/* HIND LEG VESTIGE (The Atavism) */}
                    <g transform="translate(130, 125)">
                        <motion.circle cx="0" cy="0" r="15" fill="#E63946" opacity="0.3" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                        <circle cx="0" cy="0" r="8" stroke="#E63946" strokeWidth="1" fill="none" />
                        <path d="M-5,-5 L5,5 M-5,5 L5,-5" stroke="#E63946" strokeWidth="1" />

                        {/* Tiny bones */}
                        <path d="M0,0 L-5,10" stroke="white" strokeWidth="2" />
                        <path d="M-5,10 L-2,15" stroke="white" strokeWidth="1.5" />
                    </g>
                </g>
            )}
        </svg>
    )
}
