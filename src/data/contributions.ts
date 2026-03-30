export interface Contribution {
  id: string
  repo: string
  org: string
  description: string
  prUrl?: string
  mergedAt?: string
  status: 'merged' | 'open' | 'draft' | 'accepted'
}

export const contributions: Contribution[] = [
  {
    id: 'c1',
    repo: 'openai-go',
    org: 'openai',
    description: 'Set the \'Include Usage\' parameter under \'Stream Options\' to true in the \'chat-completion-accumulating\' example',
    prUrl: 'https://github.com/openai/openai-go/pull/125',
    mergedAt: 'November 18, 2024',
    status: 'accepted',
  },
  {
    id: 'c2',
    repo: 'fl_chart',
    org: 'imaNNeo',
    description: 'Added fitInsideVertically support for bar chart and line chart tooltips',
    prUrl: 'https://github.com/imaNNeo/fl_chart/pull/240',
    mergedAt: 'March 15, 2020',
    status: 'merged',
  },
]
