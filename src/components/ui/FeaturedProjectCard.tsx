import { motion } from 'framer-motion'
import { ExternalLink, GitPullRequest, ShieldCheck, Globe, Briefcase } from 'lucide-react'
import type { Project } from '@/data/projects'

interface FeaturedProjectCardProps {
  project: Project
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full rounded-2xl overflow-hidden border border-white/5"
      style={{ backgroundColor: project.featuredBg ?? '#111113' }}
    >
      {/* Morse code animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none" aria-hidden>
        <div className="morse-scroll flex gap-8 items-center h-full whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <MorsePattern key={i} />
          ))}
        </div>
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Left: content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            {/* Project icon — use asset if available, else letter avatar */}
            {project.icon ? (
              <img
                src={project.icon}
                alt={`${project.title} icon`}
                className="w-14 h-14 rounded-2xl shadow-xl shrink-0"
                onError={e => {
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
            ) : (
              <div
                className="w-14 h-14 rounded-2xl shadow-xl shrink-0 flex items-center justify-center border border-white/10"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <span className="font-display font-extrabold text-2xl text-white/80 select-none">
                  {project.title[0]}
                </span>
              </div>
            )}
            <div>
              <h3 className="font-display font-extrabold text-3xl text-white">{project.title}</h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-body font-light tracking-wider text-white/50 uppercase">
                {project.workProject && <Briefcase size={11} aria-hidden />}
                {project.workProject ? 'Professional Work' : 'Featured Project'}
              </span>
            </div>
          </div>

          <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-xl">
            {project.longDescription}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="text-xs font-body font-light px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links row */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white font-body font-medium text-sm hover:bg-white/15 transition-colors duration-200 cursor-pointer border border-white/10"
              >
                <Globe size={16} />
                Visit Site
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80"
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  height="40"
                  className="h-[40px] w-auto"
                  draggable={false}
                />
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80"
              >
                <img
                  src="/play-store-badge.svg"
                  alt="Get it on Google Play"
                  height="40"
                  className="h-[40px] w-auto"
                  draggable={false}
                />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white font-body font-medium text-sm hover:bg-white/15 transition-colors duration-200 cursor-pointer border border-white/10"
              >
                <GitPullRequest size={16} />
                GitHub
              </a>
            )}
            {project.links.privacy && (
              <a
                href={project.links.privacy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white/60 font-body text-sm hover:bg-white/10 hover:text-white/80 transition-colors duration-200 cursor-pointer border border-white/5"
              >
                <ShieldCheck size={16} />
                Privacy Policy
              </a>
            )}
            {project.links.terms && (
              <a
                href={project.links.terms}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white/60 font-body text-sm hover:bg-white/10 hover:text-white/80 transition-colors duration-200 cursor-pointer border border-white/5"
              >
                <ExternalLink size={16} />
                Terms of Use
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MorsePattern() {
  const elements = [
    'long', 'dot', 'dot', 'long', 'long', 'dot', 'long', 'dot', 'dot',
    'long', 'dot', 'long', 'dot', 'long', 'dot', 'dot', 'long', 'dot',
  ]
  return (
    <div className="flex items-center gap-2">
      {elements.map((type, i) => (
        <div
          key={i}
          className={`bg-white rounded-full h-2 ${type === 'long' ? 'w-8' : 'w-2'}`}
        />
      ))}
    </div>
  )
}
