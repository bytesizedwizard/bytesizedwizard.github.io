import { motion } from 'framer-motion'
import { MapPin, Hammer, Coffee, Wand2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const quickFacts = [
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India' },
  { icon: Hammer, label: 'Currently building', value: 'Cipher – 2FA Authenticator' },
  { icon: Coffee, label: 'Open to', value: 'Coffee chats · Open-source Magic · Dark Arts' },
  { icon: Wand2, label: 'Powered by', value: 'Caffeine, curiosity & compiler errors' },
]

export function About() {
  const bio = useScrollAnimation()
  const facts = useScrollAnimation()

  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeading label="About me" title="The wizard behind the screen." />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            ref={bio.ref}
            variants={bio.variants}
            initial="hidden"
            animate={bio.isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="font-body text-base text-text-secondary leading-relaxed">
              I'm <span className="text-text-primary font-medium">Siddharth Patankar</span> — a
              senior software developer and technical lead with a passion for building reliable,
              user-centric products that solve real problems. I specialize in full-stack development
              with a strong lean toward mobile engineering, developer tooling, and
              security-conscious software design.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Over the years I've shipped products across iOS, Android, and the web — from
              zero-to-one consumer apps to platform-level infrastructure used by engineering teams.
              I care deeply about code quality, thoughtful architecture, and the craft of building
              things that simply work.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              When I'm not shipping features, you'll find me contributing to open source, exploring
              new programming paradigms, or practicing magic inside an infinite while loop.
            </p>
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            ref={facts.ref}
            variants={facts.variants}
            initial="hidden"
            animate={facts.isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="magic-card bg-bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4"
          >
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-accent-dim border border-accent/10">
                  <Icon size={15} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-body text-text-muted tracking-wide uppercase">
                    {label}
                  </span>
                  <span className="text-sm font-body text-text-primary mt-0.5">{value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
