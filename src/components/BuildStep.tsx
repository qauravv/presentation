import { motion } from 'framer-motion'

interface BuildStepProps {
  step: number
  currentStep: number
  children: React.ReactNode
  className?: string
  /** Override fade duration in seconds */
  duration?: number
}

export function BuildStep({
  step,
  currentStep,
  children,
  className = '',
  duration = 0.6,
}: BuildStepProps) {
  const visible = currentStep >= step

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: visible ? duration : 0.15 }}
      className={className}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      {children}
    </motion.div>
  )
}
