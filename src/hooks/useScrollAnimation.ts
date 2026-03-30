import { useInView } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const reduceMotion = useReducedMotion()

  const variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 0.6,
    ease: 'easeOut' as const,
  }

  return { ref, isInView, variants, transition }
}

