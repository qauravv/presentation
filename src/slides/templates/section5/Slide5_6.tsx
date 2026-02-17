import React from 'react'
import { motion } from 'framer-motion'
import { DarwinSlideDef, TemplateDContent } from '../../../types'

interface SlideProps {
    def: DarwinSlideDef
    step: number
}

export const Slide5_6: React.FC<SlideProps> = ({ def }) => {
    const content = def.content as TemplateDContent

    return (
        <div className="relative h-full w-full overflow-hidden bg-[#F7F9FB] font-inter text-[#264653] flex flex-col p-12">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-[#E76F51] flex items-center justify-center text-white text-2xl shadow-lg">
                    🎯
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[#E76F51] tracking-widest uppercase">CHECKPOINT</h2>
                    <h1 className="font-playfair text-3xl font-bold text-[#264653]">{content.question}</h1>
                </div>
            </div>

            {/* Options Grid */}
            <div className="flex-1 grid grid-cols-2 gap-6">
                {content.options.map((option, index) => (
                    <motion.div
                        key={option.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="relative bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="absolute top-6 left-6 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                            {option.label}
                        </div>
                        <div className="mt-8 flex-1 flex items-center">
                            <p className="text-xl font-medium leading-relaxed text-[#264653]">
                                {option.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer Instructions */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex justify-between items-center text-slate-500"
            >
                <div className="flex items-center space-x-2">
                    <span className="italic">{content.processingCue}</span>
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {content.formatInstructions}
                </div>
            </motion.div>
        </div>
    )
}
