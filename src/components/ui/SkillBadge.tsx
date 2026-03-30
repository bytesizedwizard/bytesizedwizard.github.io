import type { Skill } from '@/data/skills'

interface SkillBadgeProps {
  skill: Skill
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="magic-card group flex flex-col items-center gap-2 p-4 bg-bg-surface border border-border rounded-2xl hover:border-accent/30 hover:bg-accent-dim hover:-translate-y-0.5 transition-all duration-200 cursor-default">
      <img
        src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
        alt={`${skill.name} icon`}
        className="w-7 h-7 object-contain"
        loading="lazy"
        onError={e => {
          ;(e.currentTarget as HTMLImageElement).style.opacity = '0'
        }}
      />
      <span className="text-xs font-body font-light text-text-secondary text-center leading-tight">
        {skill.name}
      </span>
    </div>
  )
}
