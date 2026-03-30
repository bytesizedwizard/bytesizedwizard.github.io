import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[100]"
    />
  )
}
