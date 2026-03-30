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
  { name: 'TypeScript', iconSlug: 'typescript', category: 'language' },
  { name: 'JavaScript', iconSlug: 'javascript', category: 'language' },
  { name: 'Swift', iconSlug: 'swift', category: 'language' },
  { name: 'Kotlin', iconSlug: 'kotlin', category: 'language' },
  { name: 'Python', iconSlug: 'python', category: 'language' },
  { name: 'Go', iconSlug: 'go', category: 'language' },

  // Frameworks & Libraries
  { name: 'React', iconSlug: 'react', category: 'framework' },
  { name: 'Node.js', iconSlug: 'nodedotjs', category: 'framework' },
  { name: 'Next.js', iconSlug: 'nextdotjs', category: 'framework' },
  { name: 'Tailwind CSS', iconSlug: 'tailwindcss', category: 'framework' },
  { name: 'Vite', iconSlug: 'vite', category: 'framework' },

  // Mobile
  { name: 'SwiftUI', iconSlug: 'swift', category: 'mobile' },
  { name: 'Jetpack Compose', iconSlug: 'jetpackcompose', category: 'mobile' },
  { name: 'React Native', iconSlug: 'react', category: 'mobile' },
  { name: 'Flutter', iconSlug: 'flutter', category: 'mobile' },

  // Infrastructure & Tooling
  { name: 'Docker', iconSlug: 'docker', category: 'infra' },
  { name: 'GitHub Actions', iconSlug: 'githubactions', category: 'infra' },
  { name: 'AWS', iconSlug: 'amazonaws', category: 'infra' },
  { name: 'Linux', iconSlug: 'linux', category: 'infra' },

  // Databases
  { name: 'PostgreSQL', iconSlug: 'postgresql', category: 'database' },
  { name: 'MongoDB', iconSlug: 'mongodb', category: 'database' },
  { name: 'Redis', iconSlug: 'redis', category: 'database' },
  { name: 'SQLite', iconSlug: 'sqlite', category: 'database' },
]

export const skillCategories: SkillCategory[] = [
  { key: 'language', label: 'Languages', skills: allSkills.filter(s => s.category === 'language') },
  { key: 'framework', label: 'Frameworks & Libraries', skills: allSkills.filter(s => s.category === 'framework') },
  { key: 'mobile', label: 'Mobile', skills: allSkills.filter(s => s.category === 'mobile') },
  { key: 'infra', label: 'Infrastructure & Tooling', skills: allSkills.filter(s => s.category === 'infra') },
  { key: 'database', label: 'Databases', skills: allSkills.filter(s => s.category === 'database') },
]
