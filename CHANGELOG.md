# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [0.2.0] — 2026-03-30

### Added

#### Ambient Background (MagicBackground)
- New `MagicBackground` component rendered as the first child of the page root, providing a persistent ambient layer behind all content
- Composed of: an aurora radial-gradient sweep (top-right), 4 independently animated blob shapes with blur, and 26 floating particles with randomised positions, sizes, and staggered animation delays
- All animations respect `prefers-reduced-motion`
- Light-mode variant uses warm-amber/golden gradients and a `floatParticleLight` keyframe so the effect remains legible on light backgrounds

#### Magic-Card Hover Glow
- `.magic-card` CSS class added to `globals.css`; provides a warm golden border-glow on pointer interaction
- Applied to: `SkillBadge`, `CertCard`, `ProjectCard`, education entry cards, and the About quick-facts card

#### Animated Section Heading Underline
- `SectionHeading` gains a Framer Motion `whileInView` animated golden underline that slides in from left to right on scroll entry

#### Cipher — Official Store Badges
- `public/app-store-badge.svg` — official Apple App Store badge asset
- `public/play-store-badge.svg` — official Google Play badge asset
- `FeaturedProjectCard`: renders both badges at 40 px height alongside Privacy Policy and Terms of Service links in a single `flex-wrap` row
- `projects.ts` (Cipher entry): added real `appStore` and `playStore` URL fields

#### Assets
- `public/logotype-dark.png` — dark-theme wordmark asset for the theme-pair logotype

### Fixed

#### Light Mode — Root Cause Fix
- All Tailwind `extend.colors` tokens previously used bare hex strings (`--bg-surface: #0f0f13`), causing alpha-modified utilities such as `bg-bg-surface/30` to emit `rgb(#0f0f13 / 0.3)` — invalid CSS silently ignored by browsers and the primary cause of all light-mode colour failures
- `tailwind.config.js`: every token now uses `rgb(var(--xxx-rgb) / <alpha-value>)` pattern
- `globals.css`: paired `--xxx-rgb` channel vars added to both `:root` (dark) and `.light` scopes
- `glow-text` text-shadow fixed for light mode (was effectively invisible)

#### Navbar & Footer
- Removed "Available for hire" badge from the Navbar; the site is a general portfolio
- Logotype in both Navbar and Footer replaced with a theme-pair (`block dark:hidden` light asset / `hidden dark:block` dark asset) so the correct wordmark renders for each colour scheme

#### SectionHeading Layout
- Label `<span>` changed from `inline-block` to `block`, fixing a one-liner collapse bug where the label and heading rendered on the same line

#### Contact Section
- Removed unused `Phone` import (phone card was removed from the UI)

### Changed

- `Hero`: mascot moved to the **left column**; `hidden md:block` guard removed so the mascot is visible on all breakpoints; responsive sizing `w-36 sm:w-44 md:w-60 xl:w-72`
- `About` quick-facts: replaced hiring-oriented items with wizard-themed facts using `Coffee` and `Wand2` icons
- `Contact` blurb: removed "open to new opportunities" hiring copy; text now focuses on collaboration and project inquiries
- Portfolio data files updated with real content: skills, education, certifications, and open-source contributions

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

[Unreleased]: https://github.com/bytesizedwizard/bytesizedwizard.github.io/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/bytesizedwizard/bytesizedwizard.github.io/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/bytesizedwizard/bytesizedwizard.github.io/releases/tag/v0.1.0
