import { motion } from 'framer-motion'
import { ExternalLink, AppWindow } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

const statusConfig = {
  stable: { label: 'Stable', className: 'bg-green-500/10 text-green-400 border-green-500/20' },
  wip: { label: 'WIP', className: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  archived: { label: 'Archived', className: 'bg-text-muted/10 text-text-muted border-text-muted/20' },
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="magic-card group relative flex flex-col bg-bg-surface border border-border rounded-2xl p-6 overflow-hidden transition-shadow duration-200 hover:shadow-card-hover hover:border-accent/30"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-xs font-body font-light tracking-wider px-2.5 py-1 rounded-full border ${status.className}`}
        >
          {status.label}
        </span>
        <div className="flex gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label={`${project.title} GitHub repository`}
            >
              <GitHubIcon size={16} />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label={`${project.title} live site`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label={`${project.title} App Store`}
            >
              <AppWindow size={16} />
            </a>
          )}
          {project.links.npm && (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label={`${project.title} on npm`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title + Description */}
      <h3 className="font-heading font-semibold text-xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>
      <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(tech => (
          <span
            key={tech}
            className="text-xs font-body font-light px-2.5 py-1 rounded-full bg-bg-elevated border border-border text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
