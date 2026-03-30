import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Contribution } from '@/data/contributions'

interface ContributionItemProps {
  contribution: Contribution
  index?: number
}

const statusConfig = {
  merged: { label: 'Merged', className: 'bg-green-500/10 text-green-400 border-green-500/20' },
  open: { label: 'Open', className: 'bg-accent/10 text-accent border-accent/20' },
  draft: { label: 'Draft', className: 'bg-text-muted/10 text-text-muted border-text-muted/20' },
}

export function ContributionItem({ contribution, index = 0 }: ContributionItemProps) {
  const status = statusConfig[contribution.status]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex gap-4 py-4 border-b border-border last:border-0"
    >
      {/* Yellow accent bar */}
      <div className="shrink-0 w-[3px] rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className="font-heading font-semibold text-base text-text-primary">
            {contribution.org}/{contribution.repo}
          </span>
          <span className={`text-xs font-body font-light px-2 py-0.5 rounded-full border ${status.className}`}>
            {status.label}
          </span>
          {contribution.mergedAt && (
            <span className="text-xs font-body text-text-muted">{contribution.mergedAt}</span>
          )}
        </div>
        <p className="font-body text-sm text-text-secondary leading-relaxed">{contribution.description}</p>
      </div>

      {contribution.prUrl && (
        <a
          href={contribution.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-center p-1.5 rounded-md text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
          aria-label="View pull request"
        >
          <ExternalLink size={15} />
        </a>
      )}
    </motion.div>
  )
}
