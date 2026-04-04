import { motion } from 'framer-motion'
import { MapPin, Hammer, Coffee, Wand2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const quickFacts = [
  { icon: MapPin,   label: 'Based in',           value: 'Pune, Maharashtra, India' },
  { icon: Hammer,   label: 'Currently building',  value: 'Cipher, Gritup, OpenCode' },
  { icon: Coffee,   label: 'Open to',             value: 'Coffee chats · Open-source discussions · Dark arts' },
  { icon: Wand2,    label: 'Powered by',          value: 'Caffeine, curiosity & compiler errors' },
]

const stats = [
  { value: '7+',  label: 'Years of craft' },
  { value: '?', label: 'Lines of code' },
  { value: '∞',   label: 'Debug loops survived' },
]

export function About() {
  const bio       = useScrollAnimation()
  const facts     = useScrollAnimation()
  const statsAnim = useScrollAnimation()

  return (
    <section id="about" className="section-padding relative overflow-hidden">

      {/* ── Halftone background — two offset dot grids + radial vignette ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(circle, rgb(var(--accent-rgb) / 0.07) 1px, transparent 1px)',
              'radial-gradient(circle, rgb(var(--accent-rgb) / 0.035) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '28px 28px, 14px 14px',
            backgroundPosition: '0 0, 7px 7px',
          }}
        />
        {/* Radial fade — keeps the pattern from looking hard-edged */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 65% at 50% 50%, transparent 30%, var(--bg-base) 88%)',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionHeading label="About me" title="The wizard behind the screen." />

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Bio ─────────────────────────────────────────────────────── */}
          <motion.div
            ref={bio.ref}
            variants={bio.variants}
            initial="hidden"
            animate={bio.isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="font-body text-base text-text-secondary leading-relaxed">
              I'm{' '}
              <span className="text-text-primary font-medium">Siddharth Patankar</span> — a
              Technical Lead and senior software developer who builds things that last.
              I specialise in full-stack engineering with a strong lean toward mobile
              development, developer tooling, and software that takes security seriously.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              I've shipped products across iOS, Android, and the web — from zero-to-one
              consumer apps to platform-level infrastructure used by engineering teams.
              I care about code quality, thoughtful architecture, and the craft of building
              things that{' '}
              <span className="text-text-primary font-medium">simply work</span>.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              When I'm not in the terminal, you'll find me contributing to open source,
              exploring new programming paradigms, or perfecting a conjuring trick inside
              an infinite while loop.
            </p>
          </motion.div>

          {/* ── Quick facts card ─────────────────────────────────────────── */}
          <motion.div
            ref={facts.ref}
            variants={facts.variants}
            initial="hidden"
            animate={facts.isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.2 }}
            className="magic-card bg-bg-elevated/90 backdrop-blur-sm border border-border/70 rounded-2xl p-6 flex flex-col gap-6"
          >
            {quickFacts.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 16 }}
                animate={facts.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.09, ease: 'easeOut' as const }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-accent-dim border border-accent/10 shrink-0">
                  <Icon size={15} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-body text-text-muted tracking-wide uppercase">
                    {label}
                  </span>
                  <span className="text-sm font-body text-text-primary mt-0.5">{value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <motion.div
          ref={statsAnim.ref}
          initial="hidden"
          animate={statsAnim.isInView ? 'visible' : 'hidden'}
          variants={{
            hidden:   {},
            visible:  { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
          }}
          className="mt-16 pt-10 border-t border-border/40 grid grid-cols-3 gap-6"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden:   { opacity: 0, y: 20 },
                visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
              }}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <span
                className="font-display font-extrabold text-3xl md:text-4xl text-accent leading-none"
                style={{ letterSpacing: '-0.03em' }}
              >
                {value}
              </span>
              <span className="font-body text-xs text-text-muted tracking-[0.12em] uppercase">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
