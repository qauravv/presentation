
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'
import { RealTimeEvolutionSplit } from '../../../components/visuals/RealTimeEvolutionSplit'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_6({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231E3A5F\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }}
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-xl">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8">

                {/* Intro Text */}
                <BuildStep step={0} currentStep={step} duration={0.6}>
                    <div className="text-center mb-6">
                        <p className="text-xl sm:text-2xl font-light text-[#1E3A5F] max-w-4xl mx-auto">
                            Evolution isn't just "ancient history." We see it happen <span className="font-bold text-[#E76F51]">in real time.</span>
                        </p>
                    </div>
                </BuildStep>

                <div className="flex-1 w-full max-w-6xl mx-auto flex items-center justify-center relative">
                    <div className="scale-105 transform origin-center w-full z-10">
                        <RealTimeEvolutionSplit step={step} />
                    </div>

                    {/* Glow effect behind visual */}
                    <motion.div
                        className="absolute inset-0 bg-[#E76F51]/5 blur-3xl rounded-full z-0"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    )
}
