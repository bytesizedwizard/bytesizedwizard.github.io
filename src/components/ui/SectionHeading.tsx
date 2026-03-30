import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      {/* block forces a new line so the h2 never sits on the same line as the label */}
      <span className="block text-xs font-body font-light tracking-[0.2em] uppercase text-text-muted mb-3">
        {label}
      </span>
      <h2 className="relative inline-block font-heading font-bold text-3xl md:text-4xl text-text-primary leading-tight">
        {title}
        {/* Animated golden underline – slides in when section enters view */}
        <motion.span
          className="absolute left-0 -bottom-2 h-[2px] rounded-full"
          style={{ background: 'linear-gradient(90deg, rgb(var(--accent-rgb) / 0.75), transparent)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: '55%' } : { width: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
          aria-hidden
        />
      </h2>
      {description && (
        <p className="mt-4 text-base text-text-secondary font-body max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
