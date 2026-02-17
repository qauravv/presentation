
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

// 3-Panel Storyboard Component
export function Slide4_3({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">

            {/* Map texture background (faint) */}
            <div className="absolute inset-0 opacity-10 mix-blend-multiply filter sepia"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L50 20 L30 50 Z M150 150 L180 140 L160 180 Z' fill='black'/%3E%3C/svg%3E")`,
                    backgroundSize: '400px 400px'
                }}
            />

            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Header */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-2xl">
                <h2 className="text-4xl font-heading font-bold text-white tracking-widest uppercase">
                    THE POWER OF PREDICTION
                </h2>
                <div className="absolute bottom-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#C9A961] to-transparent opacity-20" />
            </div>

            {/* Main Content: 3 Panels */}
            <div className="absolute inset-0 top-[14%] flex items-stretch">

                {/* Panel 1: Prediction */}
                <div className="flex-1 border-r border-[#1E3A5F]/20 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-[#1E3A5F] text-white font-bold text-xs tracking-widest z-20 shadow-md">
                        STEP 1
                    </div>

                    <div className="h-full p-8 flex flex-col justify-center relative z-10 bg-white/40 group-hover:bg-white/60 transition-colors duration-500">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: step >= 0 ? 1 : 0.3 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center text-4xl mb-6 mx-auto shadow-xl">
                                🧠
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-heading text-[#1E3A5F]">The Prediction</h3>
                            <p className="text-lg leading-relaxed font-medium text-[#1E3A5F]/80">
                                If fish-to-tetrapod transition happened, fossils should exist in <span className="text-[#E76F51] font-bold">~375 Ma rocks</span> formed in ancient shallow water.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Panel 2: The Search */}
                <div className="flex-1 border-r border-[#1E3A5F]/20 relative group overflow-hidden bg-[#F0EBE0]">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-[#E9C46A] text-[#1E3A5F] font-bold text-xs tracking-widest z-20 shadow-md">
                        STEP 2
                    </div>

                    <div className="h-full p-8 flex flex-col justify-center relative z-10">
                        <BuildStep step={1} currentStep={step}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center relative"
                            >
                                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/43/Canadian_Arctic_Archipelago_location_map.svg')] bg-cover opacity-10 rounded-full" />

                                <div className="w-20 h-20 rounded-full bg-[#E9C46A] text-[#1E3A5F] flex items-center justify-center text-4xl mb-6 mx-auto shadow-xl ring-4 ring-white/50">
                                    🗺️
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-[#1E3A5F]">The Search</h3>
                                <p className="text-lg leading-relaxed font-medium text-[#1E3A5F]/80">
                                    Paleontologists looked at geological maps. They chose the <span className="font-bold underline decoration-[#E9C46A] decoration-2">Canadian Arctic</span>.
                                </p>
                                <div className="mt-6 inline-block px-4 py-1 rounded-full bg-[#1E3A5F]/10 text-sm font-mono text-[#1E3A5F]">
                                    3 years of digging
                                </div>
                            </motion.div>
                        </BuildStep>
                    </div>
                </div>

                {/* Panel 3: The Finding */}
                <div className="flex-1 relative group overflow-hidden bg-[#1E3A5F] text-white">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-[#E76F51] text-white font-bold text-xs tracking-widest z-20 shadow-md">
                        STEP 3
                    </div>

                    <div className="h-full p-8 flex flex-col justify-center relative z-10">
                        <BuildStep step={2} currentStep={step}>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="text-center"
                            >
                                <motion.div
                                    className="w-full h-40 bg-black/20 rounded-xl mb-6 overflow-hidden relative border border-white/10"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Placeholder for Tiktaalik simple SVG or image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl filter drop-shadow-[0_0_10px_rgba(231,111,81,0.5)]">🦎</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                                    <span className="absolute bottom-2 left-4 font-mono text-xs text-[#E76F51]">TIKTAALIK ROSEAE</span>
                                </motion.div>

                                <h3 className="text-2xl font-bold mb-4 font-heading text-[#E76F51]">The Finding</h3>
                                <ul className="text-left space-y-2 text-sm md:text-base opacity-90 mx-auto max-w-[200px]">
                                    <li className="flex items-center"><span className="text-[#E76F51] mr-2">✓</span> Gills & Scales (Fish)</li>
                                    <li className="flex items-center"><span className="text-[#E76F51] mr-2">✓</span> Flat Skull (Tetrapod)</li>
                                    <li className="flex items-center"><span className="text-[#E76F51] mr-2">✓</span> Neck (Tetrapod)</li>
                                    <li className="flex items-center"><span className="text-[#E76F51] mr-2">✓</span> Wrist bones (Tetrapod)</li>
                                </ul>
                            </motion.div>
                        </BuildStep>
                    </div>
                </div>
            </div>

            {/* Punchline Overlay */}
            <BuildStep step={3} currentStep={step}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-12 left-0 w-full flex justify-center z-30 pointer-events-none"
                >
                    <div className="px-10 py-5 bg-[#C9A961] text-[#1E3A5F] rounded-2xl shadow-2xl border-2 border-white transform hover:scale-105 transition-transform duration-300">
                        <p className="text-2xl font-bold tracking-tight">
                            Strong theories tell you <span className="underline decoration-white decoration-4">where to look</span> before you look.
                        </p>
                    </div>
                </motion.div>
            </BuildStep>

        </div>
    )
}
