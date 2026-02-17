import React from 'react'
import { BuildStep } from '../../BuildStep'

interface Props {
    step: number
}

const eyes = [
    {
        name: 'Octopus',
        desc: 'Camera eye — retina faces light directly. No blind spot.',
        image: null // Placeholder
    },
    {
        name: 'Insect',
        desc: 'Compound eye — thousands of individual ommatidia.',
        image: null // Placeholder
    },
    {
        name: 'Mammal',
        desc: 'Camera eye — inverted retina with blind spot.',
        image: null // Placeholder
    }
]

export function ConvergentEyesGrid({ step }: Props) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-6">
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
                {eyes.map((eye, index) => (
                    <BuildStep key={eye.name} step={index} currentStep={step} duration={0.6} delay={index * 0.15}>
                        <div className="flex flex-col items-center">
                            <div className="w-64 h-64 rounded-full bg-gray-200 border-4 border-[#1E3A5F] shadow-xl overflow-hidden relative mb-6 group transition-transform hover:scale-105 duration-500">
                                {eye.image ? (
                                    <img src={eye.image} alt={eye.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-white">Generating...</div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{eye.name}</h3>
                            <p className="text-center text-[#2D2D2D] text-lg max-w-xs leading-relaxed">
                                {eye.desc}
                            </p>
                        </div>
                    </BuildStep>
                ))}
            </div>

            <BuildStep step={3} currentStep={step} duration={0.5} delay={0.2}>
                <div className="mt-12 bg-white/80 backdrop-blur border border-[#1E3A5F]/20 px-8 py-4 rounded-xl shadow-sm">
                    <p className="text-xl text-[#1E3A5F] italic font-medium">
                        Structurally different solutions to the same environmental pressure.
                    </p>
                </div>
            </BuildStep>
        </div>
    )
}
