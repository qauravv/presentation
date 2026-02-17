import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef, TemplateBContent, RevealBlock } from '../../../types'
import { Check, X } from 'lucide-react'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_7: React.FC<SlideProps> = ({ def, step }) => {
    const content = def.content as TemplateBContent
    const revealBlock = content.blocks.find(b => b.type === 'reveal') as RevealBlock

    return (
        <div className="relative h-full w-full overflow-hidden bg-[#F7F9FB] font-inter text-[#264653] p-12 flex flex-col">
            {/* Title */}
            <div className="mb-8 border-b-2 border-[#2A9D8F]/30 pb-4 flex justify-between items-center">
                <h2 className="font-playfair text-4xl font-bold text-[#2A9D8F]">ANSWER: Only C</h2>
                <div className="bg-[#2A9D8F]/10 px-4 py-2 rounded-lg">
                    <span className="text-[#2A9D8F] font-bold tracking-wider">DIAGNOSTIC RESULTS</span>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-4 overflow-y-auto">
                {revealBlock.items.map((item, index) => {
                    const isCorrect = item.correct
                    const isTrap = item.emphasis

                    return (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex items-start gap-6 p-6 rounded-xl border-l-4 shadow-sm transition-all duration-300 ${isCorrect
                                    ? 'bg-green-50 border-green-500'
                                    : isTrap
                                        ? 'bg-orange-50 border-orange-400 ring-2 ring-orange-200'
                                        : 'bg-red-50 border-red-400 opacity-60' // Fade out obvious wrong answers a bit
                                }`}
                        >
                            {/* Label Bubble */}
                            <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${isCorrect ? 'bg-green-500' : isTrap ? 'bg-orange-400' : 'bg-red-400'
                                }`}>
                                {item.label}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    {isCorrect ? <Check size={20} className="text-green-600" /> : <X size={20} className={isTrap ? "text-orange-500" : "text-red-500"} />}
                                    <h3 className={`font-bold ${isCorrect ? 'text-green-800' : isTrap ? 'text-orange-800' : 'text-red-800'
                                        }`}>
                                        {isCorrect ? "Correct" : item.text.split('.')[0]}
                                    </h3>
                                </div>
                                <p className={`text-lg leading-snug ${isCorrect ? 'text-green-900' : isTrap ? 'text-orange-900 font-medium' : 'text-red-900'
                                    }`}>
                                    {/* Tricky parsing to show full text properly based on the data structure */}
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Closing Line */}
            {step >= 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 p-4 bg-[#264653] rounded-lg text-white text-center shadow-lg"
                >
                    <p className="text-xl italic font-medium">
                        "If you chose B, you're in good company — it's designed to be tempting."
                    </p>
                </motion.div>
            )}
        </div>
    )
}
