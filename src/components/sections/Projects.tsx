import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeaturedProjectCard } from '@/components/ui/FeaturedProjectCard'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeading
          label="My work"
          title="Things I've built."
          description="A selection of projects — from shipped consumer apps to open-source developer tooling."
        />

        <div className="flex flex-col gap-6">
          {/* Featured project */}
          {featured && <FeaturedProjectCard project={featured} />}

          {/* Regular project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
