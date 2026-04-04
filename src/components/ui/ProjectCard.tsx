import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

const statusConfig = {
  stable: { label: 'Stable', dot: 'bg-green-400', text: 'text-green-400', border: 'border-green-500/20', bg: 'bg-green-500/10' },
  wip: { label: 'In Progress', dot: 'bg-amber-400 animate-pulse', text: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/10' },
  archived: { label: 'Archived', dot: 'bg-text-muted', text: 'text-text-muted', border: 'border-text-muted/20', bg: 'bg-text-muted/10' },
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="magic-card group relative flex flex-col bg-bg-elevated/90 backdrop-blur-sm border border-border/70 rounded-2xl p-6 overflow-hidden transition-all duration-200 hover:border-accent/30 min-h-[220px]"
    >
      {/* Top row: status + links */}
      <div className="flex items-center justify-between mb-5">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-body font-light tracking-wider px-2.5 py-1 rounded-full border ${status.bg} ${status.border} ${status.text}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${status.dot}`} aria-hidden />
          {status.label}
        </span>
        <div className="flex gap-1">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
              aria-label={`${project.title} GitHub repository`}
            >
              <GitHubIcon size={15} />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
              aria-label={`${project.title} live site`}
            >
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
              aria-label={`${project.title} App Store`}
            >
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.links.npm && (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
              aria-label={`${project.title} on npm`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
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
