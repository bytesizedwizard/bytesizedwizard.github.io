import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from '@/components/ui/SocialIcons'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/bytesizedwizard', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bytesizedwizard/', icon: LinkedInIcon },
  { label: 'Twitter / X', href: 'https://x.com/bytesizedwizard', icon: XIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/bytesizedwizard', icon: InstagramIcon },
]

const POLICY_LINKS = [
  { label: 'Cipher Privacy Policy', href: '/cipher/privacy/' },
  { label: 'Cipher Terms of Use', href: '/cipher/terms/' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Accent line at top */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgb(var(--accent-rgb) / 0.5) 35%, rgb(var(--accent-rgb) / 0.5) 65%, transparent 100%)',
        }}
      />

      {/* Subtle warm background tint */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgb(var(--accent-rgb) / 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 pt-12 pb-8 relative z-10">
        {/* Main footer row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <img
                src="/logotype.png"
                alt="bytesizedwizard"
                className="block dark:hidden h-5 w-auto object-contain opacity-60"
              />
              <img
                src="/logotype-dark.png"
                alt="bytesizedwizard"
                className="hidden dark:block h-5 w-auto object-contain opacity-60"
              />
            </div>
            <p className="text-xs font-body text-text-muted leading-relaxed max-w-[180px]">
              Shipped with care.<br />Fuelled by curiosity.
            </p>
          </div>

          {/* Legal links column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-body font-medium tracking-[0.18em] uppercase text-text-muted">
              Legal
            </span>
            <div className="flex flex-col gap-2">
              {POLICY_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-body text-text-muted hover:text-text-secondary transition-colors duration-200 cursor-pointer w-fit"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social column */}
          <div className="flex flex-col gap-3 md:items-end">
            <span className="text-xs font-body font-medium tracking-[0.18em] uppercase text-text-muted">
              Find me
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-xl border border-border/50 text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border/40 pt-6 flex items-center justify-between">
          <span className="text-xs font-body text-text-muted">
            © 2026 Siddharth Patankar · bytesizedwizard
          </span>
          <span className="text-xs font-body text-text-muted hidden sm:block">
            Built with React + Vite + Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
