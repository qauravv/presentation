
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { MicroMacroScale } from '../../../components/visuals/MicroMacroScale'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_7({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(45deg, #1E3A5F 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
                <div className="absolute bottom-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#C9A961] to-transparent opacity-20" />
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8 items-center justify-center">

                {/* Top Statement */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="max-w-4xl text-center mb-8 relative z-10">
                        <p className="text-2xl sm:text-3xl font-light mb-4">
                            No biological barrier says <span className="text-[#E76F51] font-bold">“selection can change beak size but not bone structure.”</span>
                        </p>
                        <hr className="w-24 h-1 bg-[#C9A961] mx-auto border-none rounded mb-4" />
                        <p className="text-xl sm:text-2xl font-normal opacity-80">
                            Same mechanism — heritable variation sorted by reproduction — operating over different timescales.
                        </p>
                    </div>
                </BuildStep>

                {/* Visualization */}
                <div className="w-full max-w-5xl h-[300px] flex items-center justify-center mb-4 relative">
                    <div className="scale-110 transform origin-center w-full z-10">
                        <MicroMacroScale step={step} />
                    </div>
                    <motion.div
                        className="absolute inset-0 bg-[#2A9D8F]/5 blur-3xl rounded-full z-0"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />
                </div>

                {/* Bottom Punchline */}
                <BuildStep step={2} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#1E3A5F] text-white px-10 py-5 rounded-xl shadow-2xl border-b-4 border-[#C9A961] z-10"
                    >
                        <p className="text-xl sm:text-2xl font-bold tracking-wide">
                            No one has found the "Stop Sign".
                        </p>
                    </motion.div>
                </BuildStep>
            </div>
        </div>
    )
}
