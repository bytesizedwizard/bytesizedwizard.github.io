import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContributionItem } from '@/components/ui/ContributionItem'
import { contributions } from '@/data/contributions'

export function OpenSource() {
  return (
    <section id="open-source" className="section-padding bg-bg-surface/30">
      <div className="max-w-[1100px] mx-auto px-6">
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
