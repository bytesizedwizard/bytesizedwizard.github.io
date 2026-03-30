import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Certification } from '@/data/certifications'

interface CertCardProps {
  cert: Certification
  index?: number
}

export function CertCard({ cert, index = 0 }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="magic-card shimmer-hover group relative flex flex-col gap-3 bg-bg-surface border border-border rounded-2xl p-5 overflow-hidden hover:border-accent/30 transition-all duration-200"
    >
      {/* Issuer logo + name */}
      <div className="flex items-center gap-3">
        {cert.logoUrl ? (
          <img
            src={cert.logoUrl}
            alt={`${cert.issuer} logo`}
            className="w-8 h-8 object-contain rounded"
            onError={e => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : (
          <div className="w-8 h-8 rounded bg-accent-dim border border-accent/20 flex items-center justify-center">
            <span className="text-accent text-xs font-heading font-bold">{cert.issuer[0]}</span>
          </div>
        )}
        <span className="text-xs font-body text-text-muted">{cert.issuer}</span>
      </div>

      {/* Title */}
      <h4 className="font-heading font-semibold text-base text-text-primary leading-snug">
        {cert.title}
      </h4>

      {/* Date + Verify link */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-xs font-body text-text-muted">
          {cert.issuedDate}
          {cert.expiryDate && ` – ${cert.expiryDate}`}
        </span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-body text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
            aria-label={`Verify ${cert.title} credential`}
          >
            Verify
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
