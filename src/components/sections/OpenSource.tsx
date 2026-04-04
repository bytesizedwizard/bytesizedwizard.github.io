import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContributionItem } from '@/components/ui/ContributionItem'
import { contributions } from '@/data/contributions'

export function OpenSource() {
  return (
    <section id="open-source" className="section-padding bg-bg-surface/30 relative overflow-hidden">

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
          label="Open source"
          title="Contributing to the community."
          description="Selected contributions to open-source projects I use and care about."
        />

        <div className="bg-bg-surface border border-border rounded-2xl p-6 md:p-8">
          {contributions.map((contribution, index) => (
            <ContributionItem key={contribution.id} contribution={contribution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
