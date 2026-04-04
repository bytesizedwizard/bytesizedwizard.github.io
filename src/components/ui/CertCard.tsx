import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Certification } from '@/data/certifications'

interface CertCardProps {
  cert: Certification
  index?: number
}

export function CertCard({ cert, index = 0 }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      className="magic-card group relative flex flex-col bg-bg-elevated/90 backdrop-blur-sm border border-border/70 rounded-2xl p-6 overflow-hidden hover:border-accent/30 transition-all duration-200"
    >
      {/* Issuer logo + name */}
      <div className="flex items-center gap-3 mb-4">
        {cert.logoUrl ? (
          <img
            src={cert.logoUrl}
            alt={`${cert.issuer} logo`}
            className="w-7 h-7 object-contain rounded shrink-0"
            onError={e => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : (
          <div className="w-7 h-7 rounded bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <span className="text-accent text-xs font-heading font-bold">{cert.issuer[0]}</span>
          </div>
        )}
        <span className="text-xs font-body text-text-muted leading-snug">{cert.issuer}</span>
      </div>

      {/* Title */}
      <h4 className="font-heading font-semibold text-base text-text-primary leading-snug mb-auto pr-8">
        {cert.title}
      </h4>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/40">
        <span className="text-xs font-body text-text-muted tabular-nums">
          {cert.issuedDate}
          {cert.expiryDate && ` – ${cert.expiryDate}`}
        </span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-body font-medium text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer group/link"
            aria-label={`Verify ${cert.title} credential`}
          >
            Verify
            <ArrowUpRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
