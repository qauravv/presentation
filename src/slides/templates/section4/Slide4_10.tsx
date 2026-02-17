
import { motion } from 'framer-motion'
import { DarwinSlideDef } from '../../../types'
import { BuildStep } from '../../../components/BuildStep'
import { MiniFlowchart } from '../MiniFlowchart'

interface Props {
    def: DarwinSlideDef
    step: number
}

export function Slide4_10({ def, step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#F5F1E8] text-[#1E3A5F]">
            {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50l25 25M50 50l-25 -25\' stroke=\'%231E3A5F\' stroke-width=\'1\'/%3E%3C/svg%3E")',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Title Bar */}
            <div className="absolute top-0 left-0 w-full h-[14%] flex items-center px-[6%] z-10 bg-[#1E3A5F] shadow-lg">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {def.title}
                </h2>
                <div className="absolute top-0 right-0 h-full w-24 bg-[#E76F51] opacity-20 transform -skew-x-12" />
            </div>

            <div className="absolute inset-0 top-[14%] flex flex-col p-8 items-center justify-center">

                <div className="flex flex-row w-full h-full max-w-7xl gap-12 py-8">

                    {/* Left Column: Embryos */}
                    <div className="flex-1 flex flex-col items-center relative rounded-3xl bg-white/40 border border-[#1E3A5F]/10 p-6 backdrop-blur-sm shadow-sm group hover:shadow-xl transition-shadow duration-500">
                        <div className="absolute -top-4 bg-[#E76F51] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
                            Embryology
                        </div>

                        <div className="flex-1 w-full flex flex-col justify-center gap-8">
                            <div className="flex justify-around items-end w-full">
                                <EmbryoCard type="Fish" color="#457B9D" delay={0.2} step={step} />
                                <EmbryoCard type="Reptile" color="#E9C46A" delay={0.4} step={step} />
                                <EmbryoCard type="Human" color="#E76F51" delay={0.6} step={step} />
                            </div>

                            <BuildStep step={0} currentStep={step} duration={0.6}>
                                <div className="text-center bg-white/60 p-4 rounded-xl border border-[#E76F51]/20">
                                    <p className="text-lg font-bold text-[#E76F51] mb-1">Deep Homology</p>
                                    <p className="text-sm opacity-70">Gill slits & tails in all early stages.</p>
                                </div>
                            </BuildStep>
                        </div>
                    </div>

                    {/* Center Divider */}
                    <div className="w-16 flex flex-col items-center justify-center relative">
                        <motion.div
                            className="w-1 h-full bg-gradient-to-b from-[#1E3A5F]/0 via-[#C9A961]/50 to-[#1E3A5F]/0"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1 }}
                        />
                        <div className="absolute bg-[#1E3A5F] text-[#C9A961] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-lg z-10 border-2 border-[#C9A961]">
                            AND
                        </div>
                    </div>

                    {/* Right Column: DNA */}
                    <div className="flex-1 flex flex-col items-center relative rounded-3xl bg-white/40 border border-[#1E3A5F]/10 p-6 backdrop-blur-sm shadow-sm group hover:shadow-xl transition-shadow duration-500">
                        <div className="absolute -top-4 bg-[#2A9D8F] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
                            Genetics
                        </div>

                        <div className="flex-1 w-full flex flex-col justify-center items-center">
                            <div className="w-full h-40 flex items-center justify-center mb-6 relative overflow-hidden rounded-xl bg-[#2A9D8F]/5">
                                {/* DNA Double Helix Simulation */}
                                <div className="absolute inset-0 flex items-center justify-center gap-1">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-[#2A9D8F]"
                                            animate={{
                                                height: [10, 60, 10],
                                                opacity: [0.3, 0.8, 0.3],
                                                backgroundColor: ["#2A9D8F", "#264653", "#2A9D8F"]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                                ease: "easeInOut"
                                            }}
                                            style={{ borderRadius: 2 }}
                                        />
                                    ))}
                                </div>
                                <p className="absolute bottom-2 right-4 font-mono text-xs text-[#2A9D8F] opacity-60">ATCG...</p>
                            </div>

                            <BuildStep step={1} currentStep={step} duration={0.6}>
                                <div className="space-y-3 w-full max-w-md">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center font-bold text-[#2A9D8F]">U</div>
                                        <div>
                                            <p className="font-bold text-[#1E3A5F]">Universal Code</p>
                                            <p className="text-xs opacity-60">Bacteria, plants, humans share the same language.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center font-bold text-[#2A9D8F]">98%</div>
                                        <div>
                                            <p className="font-bold text-[#1E3A5F]">Shared DNA</p>
                                            <p className="text-xs opacity-60">With Chimpanzees. The molecular signature of ancestry.</p>
                                        </div>
                                    </div>
                                </div>
                            </BuildStep>
                        </div>
                    </div>
                </div>

                {/* Bottom Conclusion */}
                <BuildStep step={2} currentStep={step} duration={0.6}>
                    <motion.div
                        initial={{ y: 20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#1E3A5F] text-white px-12 py-5 rounded-xl shadow-2xl border-t-4 border-[#C9A961] relative z-20"
                    >
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#C9A961] w-20 h-1 rounded-full" />
                        <p className="text-2xl font-bold tracking-tight text-center">
                            Not just similar bodies. <span className="text-[#C9A961]">Similar recipes.</span>
                        </p>
                    </motion.div>
                </BuildStep>

            </div>
        </div>
    )
}

function EmbryoCard({ type, color, delay, step }: { type: string, color: string, delay: number, step: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 20 }}
            transition={{ delay, duration: 0.5 }}
            className="flex flex-col items-center gap-3"
        >
            <div className="w-24 h-32 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b from-white to-[${color}]/10`} />
                <svg width="60" height="90" viewBox="0 0 60 90">
                    {/* Abstract Embryo Shape */}
                    <path d="M30 10 Q50 10 50 30 Q50 60 30 80 Q10 60 10 30 Q10 10 30 10 Z" fill={color} opacity="0.2" />
                    <path d="M30 15 Q40 15 40 30 Q40 50 30 70 Q20 50 20 30 Q20 15 30 15 Z" fill={color} opacity="0.6" />
                    <circle cx="28" cy="25" r="3" fill="white" />
                    {/* Gill Slits */}
                    <path d="M32 35 L38 38 M32 40 L38 43" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <span className="text-sm font-bold text-[#1E3A5F]">{type}</span>
        </motion.div>
    )
}
