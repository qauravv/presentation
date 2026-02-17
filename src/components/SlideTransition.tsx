import { motion, AnimatePresence } from 'framer-motion'

interface SlideTransitionProps {
  slideKey: string
  children: React.ReactNode
}

export function SlideTransition({ slideKey, children }: SlideTransitionProps) {
  const transition = getTransition(slideKey)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        initial={transition.initial}
        animate={transition.animate}
        exit={transition.exit}
        transition={transition.timing}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function getTransition(slideKey: string) {
  const id = slideKey.match(/slide-\d+\.\d+/)?.[0] ?? ''

  if (id === 'slide-5.1') {
    return {
      initial: { opacity: 0, x: 46, scale: 1.01 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -24, scale: 0.995 },
      timing: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
    }
  }

  if (/^slide-[2-6]\.1$/.test(id)) {
    return {
      initial: { opacity: 0, x: 24 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -16 },
      timing: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }
  }

  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    timing: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }
}
