import React from 'react'
import { BuildStep } from '../../BuildStep'

interface Props {
    step: number
}

const stages = [
    {
        id: 1,
        title: 'Light-sensitive patch',
        description: 'Detects predator\'s shadow. Higher reproduction.',
        image: '/brain/0d200545-da7c-4d0d-9cc0-afe151857ba6/eye_stage_1_patch_1771341131734.png'
    },
    {
        id: 2,
        title: 'Cup shape',
        description: 'Registers light direction. Locates threats more precisely.',
        image: '/brain/0d200545-da7c-4d0d-9cc0-afe151857ba6/eye_stage_2_cup_1771341441049.png'
    },
    {
        id: 3,
        title: 'Pinhole',
        description: 'Detects shape + movement. Significant reproductive difference.',
        image: null // Placeholder until generated
    },
    {
        id: 4,
        title: 'Lens',
        description: 'Sharp images. Hunting, navigation, mate recognition.',
        image: null // Placeholder until generated
    },
    {
        id: 5,
        title: 'Camera-type eye',
        description: 'Adjustable focus, iris, resolution.',
        image: null // Placeholder until generated
    }
]

export function EyeStagesGallery({ step }: Props) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-4">
            <div className="flex flex-row gap-4 items-stretch justify-center w-full max-w-[90rem]">
                {stages.map((stage, index) => (
                    <BuildStep
                        key={stage.id}
                        step={index}
                        currentStep={step}
                        duration={0.5}
                        delay={index * 0.1}
                    >
                        <div
                            className="flex-1 flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl transition-all duration-500"
                            style={{
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(245,241,232,0.90))'
                            }}
                        >
                            <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center">
                                {stage.image ? (
                                    <img src={stage.image} alt={stage.title} className="object-cover w-full h-full" />
                                ) : (
                                    <div className="text-gray-400 text-sm">Generating...</div>
                                )}
                                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center font-bold text-sm shadow-md">
                                    {stage.id}
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-1 w-full text-center">
                                <h3 className="text-[#1E3A5F] font-bold text-base mb-2 leading-tight min-h-[2.5rem] flex items-center justify-center">
                                    {stage.title}
                                </h3>
                                <p className="text-[#2D2D2D] text-sm leading-snug opacity-90">
                                    {stage.description}
                                </p>
                            </div>
                        </div>
                    </BuildStep>
                ))}
            </div>

            <BuildStep step={stages.length} currentStep={step} duration={0.5}>
                <div className="mt-4 px-8 py-3 bg-[#1E3A5F] rounded-full shadow-lg">
                    <p className="text-[#F5F1E8] font-bold text-lg">
                        No stage is &lsquo;half an eye.&rsquo; Each is a complete, functional visual system.
                    </p>
                </div>
            </BuildStep>
        </div>
    )
}
