import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { GlowOrb } from '@/components/ui/GlowOrb'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden dot-grid scanlines"
    >
      {/* Background glows */}
      <GlowOrb size="xl" className="-top-48 left-1/2 -translate-x-1/2" opacity={0.06} />
      <GlowOrb size="md" className="bottom-24 -left-16" opacity={0.05} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          {/* Left: mascot – visible on all breakpoints */}
          <div className="flex justify-center items-center relative py-2 md:py-0">
            <GlowOrb size="lg" className="absolute inset-0 m-auto" opacity={0.12} />
            <motion.img
              src="/logo.png"
              alt="bytesizedwizard mascot"
              className="relative z-10 w-36 sm:w-44 md:w-60 xl:w-72 h-auto drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                reduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 1, scale: 1, y: [0, -10, 0] }
              }
              transition={
                reduceMotion
                  ? { duration: 0.6, delay: 0.8 }
                  : {
                      opacity: { duration: 0.6, delay: 0.8 },
                      scale: { duration: 0.6, delay: 0.8 },
                      y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                    }
              }
            />
          </div>

          {/* Right: text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            {/* Name label */}
            <motion.div variants={itemVariants}>
              <span className="text-xs font-body font-light tracking-[0.25em] uppercase text-text-muted">
                Siddharth Patankar
              </span>
            </motion.div>

            {/* Display name */}
            <motion.h1 variants={itemVariants} className="font-display font-extrabold leading-none glow-text" style={{ fontSize: 'clamp(2rem, 5.5vw, 4.2rem)', letterSpacing: '-0.04em' }}>
              <AnimatedText text="bytesizedwizard" delay={0.5} />
            </motion.h1>

            {/* Role */}
            <motion.p variants={itemVariants} className="font-heading font-semibold text-lg md:text-xl text-text-secondary">
              Technical Lead · Part-time Magician
            </motion.p>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="font-body font-light italic text-text-muted text-base">
              "Practicing magic inside an infinite while loop."
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-accent text-accent font-heading font-semibold text-sm hover:bg-accent hover:text-bg-base transition-all duration-200 cursor-pointer"
              >
                View my work
                <ArrowDown size={16} />
              </button>
              <a
                href="https://github.com/bytesizedwizard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-text-secondary hover:text-text-primary font-body text-sm transition-colors duration-200 cursor-pointer"
                aria-label="GitHub profile"
              >
                <GitHubIcon size={18} />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
