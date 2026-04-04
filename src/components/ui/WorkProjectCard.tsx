import { motion } from 'framer-motion'
import { ArrowUpRight, Briefcase } from 'lucide-react'
import type { Project } from '@/data/projects'

interface WorkProjectCardProps {
  project: Project
  index?: number
}

export function WorkProjectCard({ project, index = 0 }: WorkProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="magic-card group relative flex flex-col bg-bg-elevated/90 backdrop-blur-sm border border-border/70 rounded-2xl p-6 overflow-hidden transition-all duration-200 hover:border-accent/30 min-h-[220px]"
    >
      {/* Top row: work badge + link */}
      <div className="flex items-center justify-between mb-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-body font-light tracking-wider px-2.5 py-1 rounded-full border bg-accent/10 border-accent/20 text-accent">
          <Briefcase size={10} aria-hidden />
          Professional Work
        </span>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
            aria-label={`Visit ${project.title}`}
          >
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map(tech => (
          <span
            key={tech}
            className="text-xs font-body font-light px-2.5 py-1 rounded-full bg-bg-surface border border-border text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
