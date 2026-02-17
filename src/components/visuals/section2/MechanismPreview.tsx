import { motion } from 'framer-motion'
import { BuildStep } from '../../BuildStep'

interface Props {
    step: number
}

/**
 * Slide 2.1: Natural Selection Mechanism Preview
 * A dramatic typographic composition replacing standard bullets.
 */
export function MechanismPreview({ step }: Props) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* The "If" clause - premises */}
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-8">
                    <BuildStep step={0} currentStep={step} duration={0.8}>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-darwin-navy">
                            If traits vary,
                        </span>
                    </BuildStep>

                    <BuildStep step={0} currentStep={step} duration={0.8} delay={0.4}>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-darwin-navy opacity-80">
                            some is heritable,
                        </span>
                    </BuildStep>

                    <BuildStep step={0} currentStep={step} duration={0.8} delay={0.8}>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-darwin-navy opacity-60">
                            and reproduction differs...
                        </span>
                    </BuildStep>
                </div>

                {/* The "Then" clause - conclusion */}
                <BuildStep step={0} currentStep={step} duration={1} delay={1.4}>
                    <div className="relative inline-block mt-4 mb-12">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-darwin-charcoal tracking-tight">
                            Then populations <br className="hidden sm:block" />
                            <span className="text-gradient-gold">change over time.</span>
                        </span>

                        {/* Decorative underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 2, ease: "circOut" }}
                            className="absolute -bottom-4 left-0 right-0 h-1 bg-darwin-gold origin-left"
                        />
                    </div>
                </BuildStep>

                {/* The "That's it" punchline */}
                <BuildStep step={1} currentStep={step} duration={0.6}>
                    <div className="mt-8 border-t border-darwin-navy/10 pt-8 max-w-2xl mx-auto">
                        <p className="text-xl sm:text-2xl font-sans text-darwin-charcoal/80 leading-relaxed">
                            That’s it. Now let’s unpack why that works <br />
                            and why it’s not as obvious as it sounds.
                        </p>
                    </div>
                </BuildStep>

            </div>

            {/* Background ambience */}
            <div className="absolute inset-0 pointer-events-none z-[-1] opacity-30">
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-darwin-amber/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-darwin-navy/5 rounded-full blur-[100px]" />
            </div>
        </div>
    )
}
