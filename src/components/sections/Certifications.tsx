import { SectionHeading } from '@/components/ui/SectionHeading'
import { CertCard } from '@/components/ui/CertCard'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-bg-surface/30">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionHeading
          label="Credentials"
          title="Licenses & Certifications."
          description="Verified credentials from industry-leading organisations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
