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
      <span className="inline-block text-xs font-body font-light tracking-[0.2em] uppercase text-text-muted mb-3">
        {label}
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-text-secondary font-body max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
