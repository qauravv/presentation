import React from 'react'
import { BuildStep } from '../../BuildStep'

interface Props {
    step: number
}

export function EyeObjectionHero({ step }: Props) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/brain/0d200545-da7c-4d0d-9cc0-afe151857ba6/eye_macro_background_1771340975318.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.6
                }}
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div
                className="absolute inset-0 z-1"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)'
                }}
            />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12 text-center">
                <BuildStep step={0} currentStep={step} duration={1}>
                    <div className="max-w-4xl relative">
                        <span
                            aria-hidden
                            className="absolute -left-12 -top-12 font-heading select-none text-[8rem] leading-none"
                            style={{ color: 'rgba(201, 169, 97, 0.5)' }}
                        >
                            &ldquo;
                        </span>
                        <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-tight font-heading font-bold italic text-[#F5F1E8] drop-shadow-lg">
                            If an eye only functions when all parts are assembled, how could natural selection build it incrementally?
                        </h1>
                        <span
                            aria-hidden
                            className="absolute -right-12 -bottom-20 font-heading select-none text-[8rem] leading-none"
                            style={{ color: 'rgba(201, 169, 97, 0.5)' }}
                        >
                            &rdquo;
                        </span>
                    </div>
                </BuildStep>

                <BuildStep step={1} currentStep={step} duration={0.8} delay={0.3}>
                    <div className="mt-12 max-w-2xl">
                        <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8 rounded-full" />
                        <p className="text-xl sm:text-2xl text-[#F5F1E8] font-light opacity-90">
                            Each intermediate stage would be useless.
                        </p>
                    </div>
                </BuildStep>
            </div>
        </div>
    )
}
