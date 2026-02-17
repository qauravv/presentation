
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
            {/* Rich Geological Texture Background - Darker/Warmer for contrast */}
            <div className="absolute inset-0 bg-[#E0D8C8]" />
            <div className="absolute inset-0 opacity-15 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 120px'
                }}
            />

            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Title Bar with Shadow */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-xl">
                <h2 className="text-4xl font-heading font-black text-[#F5F1E8] tracking-tight">
                    {def.title}
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C9A961]" />
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-row">

                {/* Left Column: Visual (Stratigraphic Column) */}
                <div className="w-[55%] h-full flex items-center justify-center p-8 relative">
                    <div className="absolute inset-4 bg-white/30 rounded-3xl backdrop-blur-sm border border-white/40 shadow-inner" />

                    {/* The Visual itself */}
                    <div className="relative z-10 scale-125 origin-center transform -translate-y-4">
                        <StratigraphicColumn step={step} />
                    </div>
                </div>

                {/* Right Column: Content Cards */}
                <div className="w-[45%] h-full flex flex-col justify-center p-12 pr-16 space-y-8 z-20">

                    <BuildStep step={1} currentStep={step}>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="bg-white p-8 rounded-2xl border-l-8 border-[#1E3A5F] shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E3A5F]/5 rounded-bl-full transition-transform group-hover:scale-110" />

                            <h3 className="text-sm font-bold tracking-widest text-[#C9A961] mb-2 uppercase">Prediction</h3>
                            <p className="text-3xl font-bold leading-tight text-[#1E3A5F]">
                                Fossils in adjacent layers should be <span className="text-[#E76F51]">more similar</span>.
                            </p>

                            <BuildStep step={2} currentStep={step}>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="mt-6 pt-6 border-t border-gray-100"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-[#52B788] text-white p-1 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-xl font-bold text-[#2A9D8F]">Confirmed Consistently</span>
                                    </div>
                                </motion.div>
                            </BuildStep>
                        </motion.div>
                    </BuildStep>

                    <BuildStep step={3} currentStep={step}>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#1E3A5F]/10 p-6 rounded-xl border border-[#1E3A5F]/10 backdrop-blur-md"
                        >
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl">⚠️</span>
                                <p className="text-lg font-medium text-[#1E3A5F]/80 italic">
                                    "Geology is messy. Strata fold and fault. But the broad pattern holds."
                                </p>
                            </div>
                        </motion.div>
                    </BuildStep>

                </div>
            </div>
        </div>
    )
}
