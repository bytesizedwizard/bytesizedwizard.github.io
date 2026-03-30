import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillBadge } from '@/components/ui/SkillBadge'
import { skillCategories } from '@/data/skills'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Skills() {
  const heading = useScrollAnimation()

  return (
    <section id="skills" className="section-padding bg-bg-surface/30">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeading label="Tech stack" title="Tools of the trade." />

        <div ref={heading.ref} className="flex flex-col gap-10">
          {skillCategories.map((cat, catIndex) => (
            <div key={cat.key}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="text-xs font-body font-light tracking-[0.2em] uppercase text-text-muted mb-4"
              >
                {cat.label}
              </motion.h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.05 + skillIndex * 0.04,
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
