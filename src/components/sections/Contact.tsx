import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import { useMagnetic } from '@/hooks/useMagnetic'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/bytesizedwizard', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bytesizedwizard/', icon: LinkedInIcon },
  { label: 'Twitter / X', href: 'https://x.com/bytesizedwizard', icon: XIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/bytesizedwizard', icon: InstagramIcon },
]

interface MagneticContactProps {
  href: string
  icon: React.ElementType
  label: string
  value: string
}

function MagneticContact({ href, icon: Icon, label, value }: MagneticContactProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25)

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      onMouseMove={onMouseMove as React.MouseEventHandler<HTMLAnchorElement>}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}
      className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 hover:bg-accent-dim transition-colors duration-200 cursor-pointer group w-full max-w-sm"
      aria-label={label}
    >
      <div className="p-2.5 rounded-xl bg-accent-dim border border-accent/15 group-hover:border-accent/40 transition-colors duration-200">
        <Icon size={18} className="text-accent" />
      </div>
      <div>
        <p className="text-xs font-body text-text-muted uppercase tracking-wider">{label}</p>
        <p className="font-body text-sm text-text-primary mt-0.5">{value}</p>
      </div>
    </a>
  )
}

export function Contact() {
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-body font-light tracking-[0.2em] uppercase text-text-muted mb-3">
            Get in touch
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-text-primary leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
            Let's build something.
          </h2>
          <p className="font-body text-base text-text-secondary max-w-md mx-auto">
            Got a cool project, an open-source adventure, or just want to grab a virtual coffee?
            Drop me a line — I read every message.
          </p>
        </motion.div>

        {/* Contact items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <MagneticContact
            href="mailto:tobytesizedwizard@proton.me"
            icon={Mail}
            label="Email"
            value="tobytesizedwizard@proton.me"
          />
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-3"
        >
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-border text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-dim transition-all duration-200 cursor-pointer"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
