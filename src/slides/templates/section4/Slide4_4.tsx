
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_4({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#0D1B2A] text-[#F1FAEE]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Effect - Dynamic Pulse */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5F]/40 to-black/80 opacity-60 pointer-events-none" />
            <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] bg-[#E63946]/10 blur-[100px] rounded-full pointer-events-none"
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#0D1B2A]/90 backdrop-blur-sm border-b border-white/10">
                <h2 className="text-4xl font-heading font-black text-white tracking-widest uppercase text-shadow-sm">
                    What Would Disprove This?
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col items-center justify-center p-8 text-center space-y-12">

                {/* Darwin Quote - Premium Blockquote */}
                <BuildStep step={0} currentStep={step} duration={0.8}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative max-w-5xl mx-auto px-12 py-10 bg-white/5 border-l-4 border-[#C9A961] backdrop-blur-md rounded-r-xl shadow-2xl"
                    >
                        <span className="absolute top-4 left-4 text-6xl text-[#C9A961]/30 font-serif leading-none">“</span>
                        <p className="text-2xl sm:text-3xl md:text-3xl leading-relaxed font-serif italic text-white/95 text-left">
                            If it could be demonstrated that any complex organ existed which could not possibly have been formed by numerous, successive, slight modifications, <span className="text-[#E63946] font-semibold bg-[#E63946]/10 px-1 rounded">my theory would absolutely break down.</span>
                        </p>
                        <div className="mt-6 flex items-center justify-end">
                            <div className="h-[1px] w-12 bg-[#C9A961]/50 mr-4" />
                            <p className="text-[#C9A961] font-bold tracking-widest uppercase text-sm">
                                Charles Darwin
                            </p>
                        </div>
                    </motion.div>
                </BuildStep>

                <div className="flex flex-row gap-8 items-stretch w-full max-w-5xl justify-center">
                    {/* The Concrete Test */}
                    <BuildStep step={1} currentStep={step} duration={0.6}>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex-1 bg-white/10 border border-white/10 rounded-xl p-8 backdrop-blur-sm flex flex-col items-center justify-center text-left"
                        >
                            <span className="text-[#A8DADC] font-bold uppercase tracking-widest text-xs mb-2">The Limit Condition</span>
                            <p className="text-xl font-light">
                                <span className="font-bold text-white">Concrete test:</span><br />
                                A rabbit skeleton in 500-million-year-old rock.
                            </p>
                            <div className="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-50" />
                            <p className="text-sm text-[#E63946] mt-2 font-mono">
                                = FUNDAMENTAL PROBLEM
                            </p>
                        </motion.div>
                    </BuildStep>

                    {/* The Result */}
                    <BuildStep step={2} currentStep={step} duration={0.6}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex-1 px-8 py-8 bg-[#C9A961]/20 border-2 border-[#C9A961] rounded-xl shadow-[0_0_30px_rgba(201,169,97,0.15)] flex flex-col items-center justify-center"
                        >
                            <div className="text-5xl mb-4">🚫🐇</div>
                            <p className="text-2xl font-bold text-[#C9A961] mb-2 leading-tight">
                                160+ years of searching.
                            </p>
                            <p className="text-lg text-white/80 font-medium">
                                No such discovery verified.
                            </p>
                        </motion.div>
                    </BuildStep>
                </div>
            </div>
        </div>
    )
}
