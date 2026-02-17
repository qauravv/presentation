
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { RadiometricTimeline } from '../../../components/visuals/RadiometricTimeline'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_5({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#1E3A5F 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-md">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
                <div className="absolute bottom-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#C9A961] to-transparent opacity-20" />
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8">
                {/* Main Statement */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="text-center mb-8 relative z-10">
                        <p className="text-2xl sm:text-3xl font-bold max-w-4xl mx-auto leading-normal text-[#1E3A5F]">
                            Radiometric dating is based on physics of radioactive decay — <span className="text-[#E76F51] bg-[#E76F51]/10 px-2 rounded-lg">not biology.</span>
                        </p>
                    </div>
                </BuildStep>

                {/* Visualization */}
                <div className="flex-1 relative flex items-center justify-center">
                    <div className="scale-125 transform origin-center w-full max-w-4xl z-10">
                        <RadiometricTimeline step={step} />
                    </div>

                    {/* Glow behind the chart */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201, 169, 97, 0.2) 0%, transparent 70%)' }}
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </div>

                {/* Bottom Punchline */}
                <BuildStep step={1} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center mt-4"
                    >
                        <p className="text-xl italic text-[#1E3A5F] font-medium bg-white/90 inline-block px-8 py-3 rounded-full border border-[#C9A961] shadow-lg backdrop-blur-sm">
                            <span className="text-[#C9A961] font-bold">Consilience:</span> This is the “independent convergence” from earlier in action.
                        </p>
                    </motion.div>
                </BuildStep>
            </div>
        </div>
    )
}
