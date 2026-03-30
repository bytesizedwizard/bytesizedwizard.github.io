export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  status: 'stable' | 'wip' | 'archived'
  featured?: boolean
  featuredBg?: string
  links: {
    github?: string
    live?: string
    appStore?: string
    playStore?: string
    npm?: string
    writeup?: string
    privacy?: string
    terms?: string
  }
}

export const projects: Project[] = [
  {
    id: 'cipher',
    title: 'Cipher',
    description: 'A local-first, privacy-focused 2FA authenticator that stores all data on-device and works completely offline.',
    longDescription:
      'Cipher is a mobile 2FA authenticator built around a local-first, privacy-first philosophy. All TOTP secrets are generated and stored exclusively on-device using AES-grade encryption — zero cloud sync, zero account required, zero network dependency. Cipher implements RFC 6238 compliant time-based one-time passwords and is designed for users who believe their security credentials should never leave their device.',
    tech: ['Flutter', 'Dart', 'Cryptography'],
    status: 'stable',
    featured: true,
    featuredBg: '#02140E',
    links: {
      appStore: 'https://apps.apple.com/in/app/cipher-authenticator/id6755045757',
      playStore: 'https://play.google.com/store/apps/details?id=dev.bytesizedwizard.cipherauth',
      privacy: '/cipher/privacy/',
      terms: '/cipher/terms/',
    },
  },
  {
    id: 'opencode',
    title: 'OpenCode',
    description: 'An open-source collaborative coding evaluation platform — think LeetCode, but fully open and self-hostable.',
    longDescription:
      'OpenCode is an open-source collaborative coding evaluation platform. It provides structured environments for creating, sharing, and solving programming challenges across any language, enabling organizations to run custom technical assessments without vendor lock-in. Community-driven, self-hostable, and built for extensibility.',
    tech: ['PostgreSQL', 'Golang', 'Next.js', 'Docker'],
    status: 'wip',
    links: {
      github: 'https://github.com/bytesizedwizard/opencode',
    },
  },
  {
    id: 'buildit',
    title: 'BuildIt',
    description: 'A framework-agnostic CLI tool for initializing and scaffolding code projects across any tech stack.',
    longDescription:
      'BuildIt is a framework-agnostic CLI tool for project initialization and scaffolding. Rather than juggling framework-specific generators, BuildIt provides a unified interface for bootstrapping projects across any stack — React, Vue, Go, Python, and more. It supports configurable templates, opinionated presets, and composable plugins, giving teams a standardized project structure without ecosystem lock-in.',
    tech: ['Golang'],
    status: 'wip',
    links: {
      github: 'https://github.com/bytesizedwizard/buildit',
      npm: 'https://www.npmjs.com/package/buildit',
    },
  },
]
