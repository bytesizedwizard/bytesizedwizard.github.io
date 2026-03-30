import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/education'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeading label="Education" title="Where it all began." />

        <div className="relative flex flex-col gap-0 ml-4">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-border-subtle rounded-full" aria-hidden />

          {education.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg-base"
                aria-hidden
              />

              <div className="bg-bg-surface border border-border rounded-2xl p-6 hover:border-accent/25 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading font-semibold text-lg text-text-primary">
                    {entry.institution}
                  </h3>
                  <span className="text-xs font-body text-text-muted shrink-0">
                    {entry.startYear} – {entry.endYear}
                  </span>
                </div>

                <p className="font-heading font-medium text-base text-accent mb-1">
                  {entry.degree}
                </p>
                <p className="font-body text-sm text-text-secondary mb-2">{entry.field}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-body text-text-muted">{entry.location}</span>
                  {entry.honors && (
                    <span className="text-xs font-body px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                      {entry.honors}
                    </span>
                  )}
                </div>

                {entry.description && (
                  <p className="font-body text-sm text-text-muted mt-3 leading-relaxed">
                    {entry.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
