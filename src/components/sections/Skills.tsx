import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillBadge } from '@/components/ui/SkillBadge'
import { skillCategories } from '@/data/skills'
import { SectionParticles } from '@/components/ui/SectionParticles'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-surface/30 relative overflow-hidden">

      {/* Background effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-24 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(var(--accent-rgb) / 0.06) 0%, transparent 70%)', filter: 'blur(48px)' }}
        />
        <div
          className="absolute -bottom-24 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(var(--accent-rgb) / 0.04) 0%, transparent 70%)', filter: 'blur(48px)' }}
        />
        <SectionParticles />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionHeading label="Tech stack" title="Tools of the trade." />

        <div className="flex flex-col gap-10">
          {skillCategories.map((cat, catIndex) => (
            <div key={cat.key}>

              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.04, ease: 'easeOut' }}
                className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/30"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                  style={{ boxShadow: '0 0 5px rgb(var(--accent-rgb) / 0.6)' }}
                />
                <span className="text-xs font-body font-medium tracking-[0.18em] uppercase text-text-secondary">
                  {cat.label}
                </span>
                <span className="text-xs font-body text-text-muted ml-auto tabular-nums">
                  {cat.skills.length}
                </span>
              </motion.div>

              {/* Badge grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.38,
                      delay: catIndex * 0.04 + skillIndex * 0.045,
                      ease: 'easeOut',
                    }}
                  >
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
