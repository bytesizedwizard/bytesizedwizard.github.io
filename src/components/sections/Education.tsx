import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/education'
import { MapPin } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="section-padding bg-bg-base relative overflow-hidden">

      {/* Halftone background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(circle, rgb(var(--accent-rgb) / 0.06) 1px, transparent 1px)',
              'radial-gradient(circle, rgb(var(--accent-rgb) / 0.03) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '28px 28px, 14px 14px',
            backgroundPosition: '0 0, 7px 7px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 65% at 50% 50%, transparent 30%, var(--bg-base) 88%)',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionHeading label="Education" title="Where it all began." />

        <div className="flex flex-col gap-6">
          {education.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              className="magic-card bg-bg-elevated/90 backdrop-blur-sm border border-border/70 rounded-2xl p-6 hover:border-accent/25 transition-colors duration-200"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-heading font-semibold text-xl text-text-primary">
                  {entry.institution}
                </h3>
                <span className="text-xs font-body font-medium text-text-secondary tabular-nums shrink-0 px-2.5 py-0.5 rounded-full bg-bg-surface border border-border/60">
                  {entry.startYear} – {entry.endYear}
                </span>
              </div>

              <p className="font-body text-sm font-medium text-accent mb-1">
                {entry.degree}
              </p>
              <p className="font-body text-sm text-text-secondary mb-3 leading-snug">
                {entry.field}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {entry.location && (
                  <span className="inline-flex items-center gap-1 text-xs font-body text-text-muted">
                    <MapPin size={11} aria-hidden />
                    {entry.location}
                  </span>
                )}
                {entry.honors && (
                  <span className="text-xs font-body px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                    {entry.honors}
                  </span>
                )}
              </div>

              {entry.description && (
                <p className="font-body text-sm text-text-muted mt-3 leading-relaxed border-t border-border/40 pt-3">
                  {entry.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
