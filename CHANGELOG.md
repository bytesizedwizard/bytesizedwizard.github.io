# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [0.1.0] — 2026-03-30

### Added

#### Project Foundation
- Bootstrapped full SPA with **Vite 8**, **React 19**, **TypeScript 5.9**, replacing the previous static HTML landing page
- Configured strict TypeScript (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noUncheckedSideEffectImports`)
- Added `@/` path alias pointing to `./src` in both Vite and TypeScript configs
- ESLint 9 with `react-hooks` and `react-refresh` plugins
- `gh-pages` deploy script + GitHub Actions workflow (push to `main` → build → deploy to `gh-pages` branch with CNAME `www.bytesizedwizard.dev`)

#### Design System
- **Tailwind CSS v3** with full custom token set: accent `#FFD900`, base/surface/elevated backgrounds, border tokens, text hierarchy (primary / secondary / muted)
- Custom font stack: **Sen** (display), **Space Grotesk** (headings), **DM Sans** (body)
- Global CSS: CSS custom properties for dark (default) and light themes, dot-grid + scanline background effects, shimmer hover animation, morse-code scroll animation, yellow `glow-text` text-shadow, `section-padding` utility, `prefers-reduced-motion` guard

#### Data Layer (placeholder content — all data can be updated without touching components)
- `src/data/projects.ts` — `Project` interface + 3 entries: **Cipher** (featured), **OpenCode** (WIP), **BuildIt** (stable)
- `src/data/skills.ts` — `Skill` + `SkillCategory` interfaces + 23 skills across 5 categories keyed to SimpleIcons slugs
- `src/data/education.ts` — `EducationEntry` interface + 2 dummy academic entries
- `src/data/certifications.ts` — `Certification` interface + 4 dummy credentials
- `src/data/contributions.ts` — `Contribution` interface + 5 dummy open-source PR entries

#### Custom React Hooks
- `useScrollAnimation` — wraps Framer Motion `useInView` with `prefers-reduced-motion` support; returns `ref`, `isInView`, `variants`, `transition`
- `useMagnetic` — cursor-follow magnetic translate effect with spring-back on mouse leave
- `useScrollProgress` — spring-damped `scaleX` motion value for the scroll progress bar

#### UI Component Primitives
- `AnimatedText` — character-by-character stagger entrance animation (hero display name)
- `GlowOrb` — absolute-positioned radial-gradient yellow glow element
- `ScrollProgress` — `#FFD900` progress bar fixed at top of viewport
- `SectionHeading` — consistent label + `h2` + optional description with scroll-triggered entrance
- `SkillBadge` — SimpleIcons CDN icon + label grid tile with hover lift
- `ThemeToggle` — animated sun/moon swap button using `AnimatePresence`
- `SocialIcons` — inline SVG brand icons (`GitHubIcon`, `LinkedInIcon`, `XIcon`, `InstagramIcon`) replacing lucide-react v1+ which dropped brand icons
- `ProjectCard` — status badge, tech tag pills, icon link row, `whileHover` lift
- `FeaturedProjectCard` — full-width card with animated morse-code SVG background
- `CertCard` — shimmer-on-hover cert card with issuer logo and verify link
- `ContributionItem` — yellow left-accent-bar list row with status badge

#### Layout Components
- `Navbar` — fixed glassmorphic header with scroll-based background transition, `IntersectionObserver` active-link highlighting, smooth-scroll navigation, theme toggle, "Available for hire" badge, and animated full-screen mobile menu overlay
- `Footer` — social icon row, Cipher legal page links, logotype watermark

#### Page Sections
- `Hero` — full-viewport section with dot-grid + scanline overlay, animated character-stagger display name, floating mascot, GitHub CTA, scroll indicator arrow
- `About` — two-column bio + quick-facts card (location, open-to, currently-building, availability)
- `Skills` — categorised `SkillBadge` grid with per-tile `whileInView` stagger
- `Education` — vertical timeline with yellow accent dots and hover-border cards
- `Certifications` — responsive `CertCard` grid with shimmer hover
- `Projects` — `FeaturedProjectCard` (Cipher) + responsive `ProjectCard` grid
- `OpenSource` — contribution list with merged/open/draft status badges
- `Contact` — magnetic email + phone links, social icon row, display heading

#### Assets
- `public/logo.png` — wizard mascot
- `public/logotype.png` — wordmark
- `public/favicon-16x16.png`, `favicon-32x32.png`, `favicon.svg`, `apple-touch-icon.png`
- `public/CNAME` — sets custom domain to `www.bytesizedwizard.dev`
- `public/cipher/privacy/index.html` — Cipher Privacy Policy (preserved, standalone)
- `public/cipher/terms/index.html` — Cipher Terms of Use (preserved, standalone)

### Fixed
- Replaced all `ease: number[]` cubic-bezier arrays (which fail TypeScript in Framer Motion v11) with `'easeOut' as const` throughout all components and hooks
- Replaced removed lucide-react v1+ brand icons (`Github`, `Linkedin`, `Twitter`, `Instagram`) with custom inline SVG components in `SocialIcons.tsx`
- Removed unused `transition` destructure from `SectionHeading` and `Contact` (strict `noUnusedLocals`)

### Notes
> All portfolio content (projects, skills, education, certifications, contributions) currently uses **placeholder/dummy data**. Real data will be substituted in a future release without requiring any component changes.

---

[Unreleased]: https://github.com/bytesizedwizard/bytesizedwizard.github.io/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/bytesizedwizard/bytesizedwizard.github.io/releases/tag/v0.1.0
