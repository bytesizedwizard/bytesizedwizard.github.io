export interface Skill {
  name: string
  iconSlug: string   // SimpleIcons slug for https://cdn.simpleicons.org/<slug>
  category: 'language' | 'framework' | 'mobile' | 'infra' | 'database'
}

export interface SkillCategory {
  key: Skill['category']
  label: string
  skills: Skill[]
}

const allSkills: Skill[] = [
  // Languages
  { name: 'Go', iconSlug: 'go', category: 'language' },
  { name: 'TypeScript', iconSlug: 'typescript', category: 'language' },
  { name: 'JavaScript', iconSlug: 'javascript', category: 'language' },
  { name: 'Python', iconSlug: 'python', category: 'language' },
  { name: 'Dart', iconSlug: 'dart', category: 'language' },

  // Frameworks & Libraries
  { name: 'Angular', iconSlug: 'angular', category: 'framework' },
  { name: 'React', iconSlug: 'react', category: 'framework' },
  { name: 'Node.js', iconSlug: 'nodedotjs', category: 'framework' },
  { name: 'Next.js', iconSlug: 'nextdotjs', category: 'framework' },
  { name: 'Tailwind CSS', iconSlug: 'tailwindcss', category: 'framework' },

  // Mobile
  { name: 'Flutter', iconSlug: 'flutter', category: 'mobile' },

  // Infrastructure & Tooling
  { name: 'Docker', iconSlug: 'docker', category: 'infra' },
  { name: 'GitHub Actions', iconSlug: 'githubactions', category: 'infra' },
  { name: 'AWS', iconSlug: 'aws', category: 'infra' },
  { name: 'Kubernetes', iconSlug: 'kubernetes', category: 'infra' },
  { name: 'Linux', iconSlug: 'linux', category: 'infra' },

  // Databases
  { name: 'PostgreSQL', iconSlug: 'postgresql', category: 'database' },
  { name: 'MongoDB', iconSlug: 'mongodb', category: 'database' },
  { name: 'Redis', iconSlug: 'redis', category: 'database' },
  { name: 'MySQL', iconSlug: 'mysql', category: 'database' },
]

export const skillCategories: SkillCategory[] = [
  { key: 'language', label: 'Languages', skills: allSkills.filter(s => s.category === 'language') },
  { key: 'framework', label: 'Frameworks & Libraries', skills: allSkills.filter(s => s.category === 'framework') },
  { key: 'mobile', label: 'Mobile', skills: allSkills.filter(s => s.category === 'mobile') },
  { key: 'infra', label: 'Infrastructure & Tooling', skills: allSkills.filter(s => s.category === 'infra') },
  { key: 'database', label: 'Databases', skills: allSkills.filter(s => s.category === 'database') },
]
