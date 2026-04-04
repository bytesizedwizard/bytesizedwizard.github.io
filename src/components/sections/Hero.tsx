import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, StackOverflowIcon } from '@/components/ui/SocialIcons'
import { GlowOrb } from '@/components/ui/GlowOrb'
import { HeroParticles } from '@/components/ui/HeroParticles'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/bytesizedwizard',
    icon: GitHubIcon,
  },
  {
    label: 'Stack Overflow',
    // TODO: replace with your real Stack Overflow profile URL
    href: 'https://stackoverflow.com/users/bytesizedwizard',
    icon: StackOverflowIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bytesizedwizard/',
    icon: LinkedInIcon,
  },
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay: number) => ({
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: 'easeOut' as const },
    },
  })

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden dot-grid scanlines"
    >
      {/* ── Ambient depth glows ───────────────────────────────────────────── */}
      <GlowOrb size="xl" className="-top-40 -left-32" opacity={0.09} />
      <GlowOrb size="md" className="bottom-0 right-0 translate-x-1/4" opacity={0.06} />

      {/* ── Interactive canvas particle mesh ─────────────────────────────── */}
      <HeroParticles />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-32 w-full">
        <div className="flex flex-col items-center text-center gap-7 max-w-[780px] mx-auto">

          {/* Identity badge */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/70 bg-bg-elevated/90 backdrop-blur-sm font-body text-xs font-normal text-text-secondary select-none">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                style={{ boxShadow: '0 0 6px #FFD900' }}
                animate={reduceMotion ? {} : { opacity: [1, 0.2, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              />
              Siddharth Patankar · Technical Lead
            </span>
          </motion.div>

          {/* Headline — two independent lines, word-by-word blur reveal */}
          <h1
            className="font-display font-extrabold leading-[1.04]"
            style={{ fontSize: 'clamp(2.8rem, 6.8vw, 5.4rem)', letterSpacing: '-0.044em' }}
          >
            {/* Line 1: staggered blur+fade per word */}
            <span className="block text-text-primary">
              {['Making', 'it', 'work'].map((word, i, arr) => (
                <motion.span
                  key={word + i}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, filter: 'blur(6px)', y: 14 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.18 + i * 0.11, ease: 'easeOut' as const }}
                  className={`inline-block${i < arr.length - 1 ? ' mr-[0.28em]' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Line 2: staggered blur+fade + breathing glow after reveal */}
            <motion.span
              className="block glow-text"
              style={{ color: '#FFD900' }}
              animate={reduceMotion ? {} : {
                textShadow: [
                  '0 0 18px rgba(255,217,0,0.12)',
                  '0 0 38px rgba(255,217,0,0.42)',
                  '0 0 18px rgba(255,217,0,0.12)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              {['was', 'never', 'the', 'hard', 'part.'].map((word, i, arr) => (
                <motion.span
                  key={word + i}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, filter: 'blur(6px)', y: 14 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.4 + i * 0.11, ease: 'easeOut' as const }}
                  className={`inline-block${i < arr.length - 1 ? ' mr-[0.28em]' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
              {/* Blinking terminal cursor */}
              <motion.span
                aria-hidden
                className="ml-1 font-light"
                style={{ color: '#FFD900' }}
                animate={reduceMotion ? {} : { opacity: [1, 1, 0, 0, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'linear',
                  times: [0, 0.42, 0.5, 0.92, 1],
                }}
              >
                |
              </motion.span>
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp(0.56)}
            initial="hidden"
            animate="visible"
            className="font-body font-light text-text-secondary text-base sm:text-lg leading-relaxed max-w-[520px]"
          >
            Technical Lead who ships full-stack systems, mobile applications, and the
            occasional over-engineered solution to a simple problem.
          </motion.p>

          {/* Expanding divider */}
          <motion.div
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: reduceMotion ? 0 : 0.7, ease: 'easeOut' as const }}
            className="h-px bg-border origin-center w-48 sm:w-64"
          />

          {/* Social link chips */}
          <motion.div
            variants={fadeUp(0.88)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${label} profile`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/70 bg-bg-elevated/80 text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/8 font-body text-sm transition-all duration-200 cursor-pointer"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
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
    </section>
  )
}
