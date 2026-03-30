import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from '@/components/ui/SocialIcons'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/bytesizedwizard', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bytesizedwizard/', icon: LinkedInIcon },
  { label: 'Twitter / X', href: 'https://x.com/bytesizedwizard', icon: XIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/bytesizedwizard', icon: InstagramIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border mt-0">
      <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Logotype watermark */}
        <img
          src="/logotype.png"
          alt="bytesizedwizard"
          className="h-6 w-auto object-contain opacity-20 dark:brightness-100 brightness-0"
          aria-hidden
        />

        {/* Social links */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-body text-text-muted">
          <span>© 2026 Siddharth Patankar · bytesizedwizard</span>
          <div className="flex gap-4">
            <a href="/cipher/privacy/" className="hover:text-text-secondary transition-colors duration-200 cursor-pointer">
              Cipher Privacy Policy
            </a>
            <a href="/cipher/terms/" className="hover:text-text-secondary transition-colors duration-200 cursor-pointer">
              Cipher Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
