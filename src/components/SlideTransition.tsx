import { motion, AnimatePresence } from 'framer-motion'

interface SlideTransitionProps {
  slideKey: string
  children: React.ReactNode
}

export function SlideTransition({ slideKey, children }: SlideTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
