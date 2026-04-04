import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeaturedProjectCard } from '@/components/ui/FeaturedProjectCard'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { WorkProjectCard } from '@/components/ui/WorkProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  const personalFeatured = projects.filter(p => p.featured && !p.workProject)
  const personalRest = projects.filter(p => !p.featured && !p.workProject)
  const workProjects = projects.filter(p => p.workProject)

  return (
    <section id="projects" className="section-padding bg-bg-base relative overflow-hidden">

      {/* Subtle glow top-left */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 0%, rgb(var(--accent-rgb) / 0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionHeading
          label="My work"
          title="Things I've built."
          description="A selection of projects — from shipped consumer apps to open-source developer tooling."
        />

        <div className="flex flex-col gap-6">

          {/* ── Personal featured ─────────────────────────────────────────── */}
          {personalFeatured.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}

          {/* ── In-progress personal ─────────────────────────────────────── */}
          {personalRest.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                className="flex items-center gap-4"
              >
                <div className="h-px flex-1 bg-border/40" />
                <span className="flex items-center gap-2 text-xs font-body font-medium tracking-[0.18em] uppercase text-text-muted shrink-0">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 animate-pulse"
                    aria-hidden
                  />
                  Also building
                </span>
                <div className="h-px flex-1 bg-border/40" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {personalRest.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </>
          )}

          {/* ── Professional work ─────────────────────────────────────────── */}
          {workProjects.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="flex items-center gap-4 mt-2"
              >
                <div className="h-px flex-1 bg-border/40" />
                <span className="flex items-center gap-2 text-xs font-body font-medium tracking-[0.18em] uppercase text-text-muted shrink-0">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    style={{ boxShadow: '0 0 5px rgb(var(--accent-rgb) / 0.6)' }}
                    aria-hidden
                  />
                  Professional work
                </span>
                <div className="h-px flex-1 bg-border/40" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workProjects.map((project, index) => (
                  <WorkProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  )
}
