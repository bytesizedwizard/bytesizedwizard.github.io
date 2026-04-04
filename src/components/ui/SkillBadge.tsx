import type { Skill } from '@/data/skills'

interface SkillBadgeProps {
  skill: Skill
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="magic-card group flex flex-col items-center justify-center gap-2 p-4 bg-bg-elevated/90 backdrop-blur-sm border border-border/70 rounded-2xl hover:border-accent/40 hover:bg-accent-dim hover:-translate-y-1 transition-all duration-200 cursor-default h-[100px]">
      <img
        src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
        alt={`${skill.name} icon`}
        className="w-8 h-8 object-contain"
        loading="lazy"
        onError={e => {
          ;(e.currentTarget as HTMLImageElement).style.opacity = '0'
        }}
      />
      <span className="text-xs font-body font-normal text-text-secondary text-center leading-tight">
        {skill.name}
      </span>
    </div>
  )
}
