export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  status: 'stable' | 'wip' | 'archived'
  featured?: boolean
  workProject?: boolean
  featuredBg?: string
  icon?: string
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
    icon: '/cipher/cipher-icon.png',
    links: {
      appStore: 'https://apps.apple.com/in/app/cipher-authenticator/id6755045757',
      playStore: 'https://play.google.com/store/apps/details?id=dev.bytesizedwizard.cipherauth',
      privacy: '/cipher/privacy/',
      terms: '/cipher/terms/',
    },
  },
  {
    id: 'gritup',
    title: 'GritUp',
    description: 'Practice management and growth platform for allied healthcare clinics — scheduling, billing, AI documentation, and patient retention built in.',
    longDescription:
      'GritUp is a full-stack practice management and growth platform purpose-built for physiotherapy and allied healthcare clinics. It handles end-to-end clinic operations — smart scheduling, frictionless billing, automated WhatsApp follow-ups, and patient records — while layering in GritUp Scribe, an AI assistant that transcribes sessions and auto-generates structured clinical notes. The platform is HIPAA compliant and ISO 27001 certified, trusted by clinics across India.',
    tech: ['React', 'Golang', 'Flutter', 'PostgreSQL', 'MySQL', 'Generative AI', 'AWS'],
    status: 'stable',
    featured: true,
    workProject: true,
    featuredBg: '#021A14',
    links: {
      live: 'https://www.gritup.io',
    },
  },
  {
    id: 'pies-studio',
    title: 'PIES Studio',
    description: 'AI-powered no-code development studio for building and deploying production-grade applications through a visual interface with full code export.',
    longDescription:
      'PIES Studio is an AI-powered no-code platform that enables businesses to ideate, build, and ship full-scale software without writing traditional code. By leveraging generative AI as a virtual developer, PIES Studio dramatically accelerates the path from idea to production — delivering over 80% productivity gains and 90% cost reduction for its clients. Projects retain full IP ownership with clean code export.',
    tech: ['Angular', 'TypeScript', 'Golang' , 'Docker', 'Kubernetes', 'Generative AI', 'Azure'],
    status: 'stable',
    featured: true,
    workProject: true,
    featuredBg: '#0A0614',
    links: {
      live: 'https://pies.io',
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