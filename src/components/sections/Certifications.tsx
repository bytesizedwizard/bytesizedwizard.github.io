import { SectionHeading } from '@/components/ui/SectionHeading'
import { CertCard } from '@/components/ui/CertCard'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-bg-surface/30 relative overflow-hidden">

      {/* Halftone background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(circle, rgb(var(--accent-rgb) / 0.06) 1px, transparent 1px)',
              'radial-gradient(circle, rgb(var(--accent-rgb) / 0.03) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '28px 28px, 14px 14px',
            backgroundPosition: '0 0, 7px 7px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 65% at 50% 50%, transparent 30%, var(--bg-base) 88%)',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionHeading
          label="Credentials"
          title="Licenses & Certifications."
          description="Verified credentials from industry-leading organisations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
