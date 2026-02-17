import { motion } from 'framer-motion'

interface BuildStepProps {
  step: number
  currentStep: number
  children: React.ReactNode
  className?: string
  duration?: number
  /** Delay in seconds for stagger effects */
  delay?: number
  /** Use pure fade instead of fade+slide */
  fadeOnly?: boolean
}

export function BuildStep({
  step,
  currentStep,
  children,
  className = '',
  duration = 0.4,
  delay = 0,
  fadeOnly = false,
}: BuildStepProps) {
  const visible = currentStep >= step

  return (
    <motion.div
      initial={{ opacity: 0, y: fadeOnly ? 0 : 12 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : (fadeOnly ? 0 : 12),
      }}
      transition={{
        duration: visible ? duration : 0.15,
        delay: visible ? delay : 0,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      {children}
    </motion.div>
  )
}
