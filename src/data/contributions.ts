export interface Contribution {
  id: string
  repo: string
  org: string
  description: string
  prUrl?: string
  mergedAt?: string
  status: 'merged' | 'open' | 'draft'
}

export const contributions: Contribution[] = [
  {
    id: 'c1',
    repo: 'react',
    org: 'facebook',
    description: 'Fixed edge case in concurrent rendering where state updates in transitions were batched incorrectly under certain error boundaries.',
    prUrl: 'https://github.com/facebook/react/pull/00001',
    mergedAt: 'Jan 2026',
    status: 'merged',
  },
  {
    id: 'c2',
    repo: 'vite',
    org: 'vitejs',
    description: 'Improved HMR performance for large TypeScript monorepos by optimizing the dependency graph traversal on file change.',
    prUrl: 'https://github.com/vitejs/vite/pull/00002',
    mergedAt: 'Nov 2025',
    status: 'merged',
  },
  {
    id: 'c3',
    repo: 'tailwindcss',
    org: 'tailwindlabs',
    description: 'Added documentation and examples for the new `backgroundSize` arbitrary values introduced in v3.4.',
    prUrl: 'https://github.com/tailwindlabs/tailwindcss/pull/00003',
    mergedAt: 'Sep 2025',
    status: 'merged',
  },
  {
    id: 'c4',
    repo: 'framer-motion',
    org: 'framer',
    description: 'Proposed and implemented `useReducedMotion` fallback support for the new `animate` hook variants.',
    prUrl: 'https://github.com/framer/motion/pull/00004',
    status: 'open',
  },
  {
    id: 'c5',
    repo: 'commander.js',
    org: 'tj',
    description: 'Refactored the argument parser to correctly handle nested sub-commands with overlapping option names.',
    prUrl: 'https://github.com/tj/commander.js/pull/00005',
    mergedAt: 'Jul 2025',
    status: 'merged',
  },
]
