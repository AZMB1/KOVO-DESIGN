# CLAUDE.md - Project Context File

## Project Overview

**Project Name:** Kovo Design Website
**Domain:** kovo-design.io
**Purpose:** Professional website for Kovo Design, a design studio specializing in custom website design and development for clients.
**Status:** Phases 1-5 Complete - Ready for Animations/SEO/Deployment

---

## Business Context

- **Type:** Design studio / web agency
- **Stage:** New business (no existing clients/portfolio yet)
- **Primary Goal:** Generate qualified leads and establish professional credibility
- **Target Audience:** Startups, small businesses, e-commerce, growing companies needing web solutions

---

## Tech Stack

### Framework & Core
- **Next.js 14+** (App Router, React Server Components)
- **TypeScript** (type safety)
- **React 18+**

### Styling
- **Tailwind CSS** (utility-first styling)
- CSS Variables for theming
- Custom design tokens

### Animation
- **Framer Motion** (React animation library)

### Forms & Validation
- **React Hook Form** (form state management)
- **Zod** (schema validation)

### Email
- **Resend** (contact form email delivery)

### Hosting & Infrastructure
- **Vercel** (hosting, deployment, edge functions)
- **Vercel Analytics** (privacy-friendly analytics)
- **GitHub** (version control)

### Development Tools
- ESLint (code linting)
- Prettier (code formatting)
- TypeScript strict mode

---

## Project Structure

```
/
├── app/                        # Next.js App Router
│   ├── (routes)/
│   │   ├── page.tsx           # Home page
│   │   ├── services/          # Services page
│   │   ├── portfolio/         # Portfolio listing + individual projects
│   │   ├── about/             # About page
│   │   ├── pricing/           # Pricing page
│   │   ├── faq/               # FAQ page
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy Policy
│   │   ├── terms/             # Terms of Service
│   │   └── not-found.tsx      # 404 page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/                # React components
│   ├── ui/                    # Reusable UI components (buttons, inputs, cards)
│   ├── layout/                # Layout components (header, footer, nav)
│   ├── sections/              # Page sections (hero, CTA, etc.)
│   └── forms/                 # Form components
├── lib/                       # Utility functions
│   ├── utils.ts               # Helper functions
│   └── validations.ts         # Zod schemas
├── public/                    # Static assets
│   ├── images/                # Images, mockups, placeholders
│   └── fonts/                 # Custom fonts (if any)
├── styles/                    # Additional styles (if needed)
├── types/                     # TypeScript type definitions
├── PRD.md                     # Product Requirements Document
├── CLAUDE.md                  # This file
└── README.md                  # Project README (TBD)
```

---

## Design System

### Color Palette

**Base:**
- `--bg-primary`: #0a0a0a (deep charcoal)
- `--bg-secondary`: #141414 (slightly lighter)
- `--bg-surface`: #1a1a1a (elevated elements)

**Accents:**
- `--accent-primary`: #6366f1 → #8b5cf6 (blue-violet gradient)
- `--accent-interactive`: #06b6d4 (cyan)
- `--success`: #10b981
- `--warning`: #f59e0b
- `--error`: #ef4444

**Text:**
- `--text-heading`: #ffffff
- `--text-body`: #a1a1aa
- `--text-muted`: #71717a

### Typography

**Fonts:**
- Headings: **Space Grotesk** (500-700 weight)
- Body: **Inter** (400-500 weight)

**Scale:**
- H1: 48-72px (responsive)
- H2: 36-48px
- H3: 24-32px
- Body: 16-18px
- Small: 14px

**Line Height:**
- Headings: 1.2
- Body: 1.6

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120px

### Breakpoints
- Mobile: 320-640px
- Tablet: 641-1024px
- Desktop: 1025-1440px
- Large: 1441px+

---

## Key Design Principles

1. **Dark Theme**: Professional, modern, minimalist
2. **Glass Morphism**: Backdrop blur, semi-transparent surfaces, subtle borders
3. **Subtle Glows**: Soft shadows with color, radial gradients, light effects
4. **No Generic AI Look**: No emojis, no random illustrations, intentional design
5. **Inspiration**: termius.com aesthetic (clean, sophisticated, alive but minimal)
6. **Performance First**: Fast loading, optimized images, smooth animations
7. **Accessibility**: WCAG AA compliance, keyboard nav, screen reader support

---

## Pages & Routes

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Complete |
| Services | `/services` | ✅ Complete |
| Portfolio (listing) | `/portfolio` | ✅ Complete |
| Portfolio Project 1 | `/portfolio/techflow` | ✅ Complete |
| Portfolio Project 2 | `/portfolio/greenleaf-market` | ✅ Complete |
| Portfolio Project 3 | `/portfolio/pulse-fitness` | ✅ Complete |
| Portfolio Project 4 | `/portfolio/devdocs` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Pricing | `/pricing` | ✅ Complete |
| FAQ | `/faq` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| Privacy Policy | `/privacy` | ✅ Complete |
| Terms of Service | `/terms` | ✅ Complete |
| 404 | `/404` or `not-found` | ✅ Complete |

---

## Feature Requirements

### Must-Have (MVP)
- ✅ Responsive design (mobile-first) - DONE
- ✅ Contact form with Resend integration - DONE (needs API key)
- ⏳ SEO optimization (meta tags, Open Graph, sitemap) - Partial (metadata done, needs OG images)
- ⏳ Accessibility (WCAG AA) - Needs testing
- ⏳ Performance (Lighthouse 90+) - Needs audit
- ✅ 4 placeholder portfolio projects - DONE
- ✅ Pricing packages (3 tiers) - DONE
- ✅ FAQ page - DONE
- ✅ Custom 404 page - DONE
- ⏳ Animations & micro-interactions - Optional (Framer Motion installed)
- ✅ Loading states - DONE (in forms)
- ⏳ Vercel Analytics - Needs deployment

### Future Enhancements (Post-Launch)
- [ ] CMS integration (Sanity/Contentful)
- [ ] Blog section
- [ ] Real client testimonials
- [ ] Real case studies
- [ ] Newsletter signup
- [ ] Live chat
- [ ] Project calculator
- [ ] Client portal
- [ ] Multi-language support

---

## Contact Form Specifications

### Fields:
- **Name** (required, text)
- **Email** (required, email validation)
- **Company** (optional, text)
- **Project Type** (required, dropdown):
  - New Website
  - Website Redesign
  - E-commerce Site
  - Landing Page
  - Ongoing Support
  - Other
- **Budget** (required, dropdown):
  - Under $5,000
  - $5,000 - $10,000
  - $10,000 - $20,000
  - $20,000 - $50,000
  - $50,000+
  - Not sure yet
- **Timeline** (required, dropdown):
  - Urgent (1-2 weeks)
  - Soon (1 month)
  - Flexible (2-3 months)
  - Just exploring
- **Message** (required, textarea, min 20 chars)

### Behavior:
- Client-side validation (React Hook Form + Zod)
- Server-side validation (API route)
- Email sent via Resend to `hello@kovo-design.io` (or configured email)
- Success/error states
- Loading indicator
- No auto-response (can add later)

---

## Pricing Packages

### Essentials
- **Price**: Starting from $3,500
- **Target**: Startups & small businesses
- **Includes**: 5 pages, mobile responsive, contact form, basic SEO, 2 revisions, 2-3 week delivery

### Professional (Most Popular)
- **Price**: Starting from $8,500
- **Target**: Growing businesses
- **Includes**: 10 pages, custom design system, CMS optional, advanced SEO, analytics, 3 revisions, 4-6 week delivery, 30 days support

### Premium
- **Price**: Starting from $20,000
- **Target**: Established companies
- **Includes**: Unlimited pages, advanced features, brand strategy, full CMS, priority support, unlimited revisions, custom timeline, 90 days support

### Add-Ons:
- Logo Design: From $1,500
- Copywriting: From $500/page
- Monthly Maintenance: $300/month
- Additional Revisions: $500/round
- Rush Delivery: +50% fee

---

## Environment Variables

### Required for Production:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=hello@kovo-design.io
NEXT_PUBLIC_SITE_URL=https://kovo-design.io
```

### Development:
```env
RESEND_API_KEY=re_test_xxxxxxxxxxxxx
CONTACT_EMAIL=test@kovo-design.io
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Development Workflow

### Setup:
```bash
npm install
npm run dev
```

### Build:
```bash
npm run build
npm start
```

### Linting:
```bash
npm run lint
```

### Type Checking:
```bash
npm run type-check
```

---

## Git Workflow

- **Main Branch**: `main` (production)
- **Development**: Feature branches → PR → merge to `main`
- **Commit Convention**: Conventional Commits (feat, fix, docs, style, refactor, test, chore)

---

## Deployment

### Vercel Configuration:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Environment Variables**: Set in Vercel dashboard

### Domain:
- **Custom Domain**: kovo-design.io
- **SSL**: Auto-provisioned by Vercel

### Deployment Trigger:
- Auto-deploy on push to `main` branch

---

## Performance Targets

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

---

## Accessibility Standards

- **Target**: WCAG AA compliance
- **Keyboard Navigation**: Full support (tab, enter, escape, arrows)
- **Screen Readers**: Semantic HTML, ARIA labels
- **Color Contrast**: 4.5:1 minimum
- **Focus Indicators**: Visible on all interactive elements
- **Motion**: Respect `prefers-reduced-motion`

---

## SEO Strategy

### Technical SEO:
- Semantic HTML5
- Meta tags (title, description)
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs

### On-Page SEO:
- H1-H6 hierarchy
- Alt text for images
- Internal linking
- Fast loading
- Mobile-first

---

## Content Guidelines

### Tone of Voice:
- Professional but human
- Clear and direct
- Confident without arrogance
- Benefit-focused
- No jargon

### Restrictions:
- **NO** fake metrics (e.g., "500+ projects")
- **NO** made-up client testimonials
- **NO** emojis (unless explicitly requested)
- **NO** generic stock descriptions
- **NO** overused phrases

### Best Practices:
- Short sentences
- Active voice
- Specific benefits
- Scannable (bullets, headings)
- Authentic voice

---

## Animation Philosophy

### Approach:
- **Subtle & purposeful** (like termius.com)
- Enhance UX, don't distract
- Respect `prefers-reduced-motion`

### Types:
- Page transitions (fade, slide)
- Scroll-triggered reveals (fade up, stagger)
- Hover states (scale, glow, underline)
- Loading states (skeleton screens)
- Form validation feedback
- Micro-interactions (clicks, hovers)

### Timing:
- Fast: 150ms (hovers)
- Medium: 300ms (elements)
- Slow: 500ms (page transitions)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## Known Constraints

1. **No Real Portfolio**: Using 4 placeholder projects initially
2. **No Client Testimonials**: Empty state with professional messaging
3. **No CMS Yet**: Hard-coded content, can add later
4. **New Business**: Pricing and copy avoid fake authority/metrics

---

## Important Decisions Made

### Pricing Strategy:
- **Package-based** with 3 tiers (Essentials, Professional, Premium)
- "Starting from" pricing for flexibility
- Transparent add-ons
- Builds trust and filters leads

### Tech Choices:
- **Next.js 14+**: Modern, performant, great SEO
- **Tailwind CSS**: Rapid development, consistent styling
- **Framer Motion**: Industry-standard animations
- **Resend**: Simple, reliable email delivery
- **Vercel**: Zero-config deployment, edge network

### Design Approach:
- **Dark theme** (professional, modern)
- **Glass morphism** (elevated, premium feel)
- **Subtle glows** (alive but not distracting)
- **No templates** (custom design)
- Inspired by termius.com

---

## Project Timeline (Estimated)

### Phase 1: Foundation (Week 1)
- Setup, design system, base components

### Phase 2: Core Pages (Week 2-3)
- Home, Services, About, Pricing, FAQ, 404

### Phase 3: Portfolio (Week 3)
- Listing page + 4 project pages

### Phase 4: Contact & Forms (Week 4)
- Form implementation, Resend integration

### Phase 5: Legal & Polish (Week 4)
- Privacy, Terms, final content

### Phase 6: Animations (Week 5)
- Page transitions, micro-interactions

### Phase 7: SEO & Performance (Week 5)
- Meta tags, sitemap, optimization

### Phase 8: Testing & QA (Week 6)
- Cross-browser, accessibility, performance

### Phase 9: Deployment (Week 6)
- Vercel setup, domain config, launch

---

## Current Status

**Phase**: Phases 1-5 COMPLETE ✅ + SEO Basics - Ready for Optional Animations or Deployment
**Last Updated**: October 19, 2025

**Completed Phases:**
- ✅ Phase 1: Foundation (design system, all components)
- ✅ Phase 2: Core Pages (Home, Services, About, Pricing, FAQ, 404)
- ✅ Phase 3: Portfolio (listing + 4 project pages)
- ✅ Phase 4: Contact Form (full validation, API route ready for Resend)
- ✅ Phase 5: Legal Pages (Privacy, Terms)
- ⏳ Phase 7 (Partial): SEO Basics (sitemap, robots.txt, metadata)

**Pages Built:** 15 total
- Main pages: Home, Services, About, Pricing, FAQ, Contact, Privacy, Terms, 404
- Portfolio: Listing + 4 projects (TechFlow, GreenLeaf Market, Pulse Fitness, DevDocs)

**Components:** 11 total
- UI: Button, Card, Input, Textarea, Select, Container, Accordion
- Layout: Header, Footer, MobileMenu
- Forms: ContactForm

**Dev Server:** http://localhost:3002
**Status:** Fully functional, responsive, ready for testing and deployment

**Recent Fixes:**
- Fixed CSS error (`border-border` class removed)
- Fixed FAQ smart quotes syntax error
- All pages loading successfully

**Next Steps:**
1. Optional: Add Framer Motion animations (Phase 6)
2. Complete SEO: Open Graph images, Twitter Cards, JSON-LD (Phase 7)
3. Run Lighthouse audit (Phase 7)
4. Accessibility testing (Phase 8)
5. Deploy to Vercel with RESEND_API_KEY (Phase 9)

---

## Contact Information

**Business Email**: hello@kovo-design.io (to be set up)
**Domain**: kovo-design.io
**Repository**: [GitHub URL to be added]
**Deployment**: [Vercel URL to be added]

---

## Notes for Future AI Sessions

### Critical Workflow Instructions

**TODO List Management:**
- **ALWAYS use TODO.md** to track all development tasks
- **Update TODO.md continuously** as tasks are completed
- Mark tasks with `[x]` when done, `[ ]` when pending
- Keep the "Current Sprint Summary" section updated

**Context/Token Management:**
- **Monitor token usage** throughout the session
- **At 90% context (180k/200k tokens)**: STOP development
- **Before stopping:** Update both TODO.md and CLAUDE.md with current progress
- **Alert the user** to start a new chat when 90% is reached
- **Use /context command** to check current token usage if needed

**Continuous Development:**
- Work through all phases systematically (Phase 1 → 2 → 3... → 9)
- Only stop when: (1) All phases complete, OR (2) 90% context reached
- Update CLAUDE.md after each phase completion
- Update TODO.md after each task completion

### General Guidelines

- **Always check PRD.md** for detailed requirements before making changes
- **Update CLAUDE.md** after every significant milestone (per project rule)
- **Maintain design consistency** with color palette, typography, spacing
- **Follow content guidelines** (no fake metrics, professional tone)
- **Test responsiveness** on all breakpoints
- **Validate accessibility** on every new component
- **Optimize performance** (images, fonts, code splitting)
- **Use TypeScript** strictly (no `any` types without good reason)
- **Follow component structure** in `/components` directory
- **Keep animations subtle** and respect motion preferences

---

## Useful Commands Reference

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Production build
npm run start              # Start production server
npm run lint               # Lint code
npm run type-check         # TypeScript check

# Git
git status                 # Check status
git add .                  # Stage changes
git commit -m "message"    # Commit
git push                   # Push to remote

# Vercel
vercel                     # Deploy preview
vercel --prod              # Deploy production
vercel env pull            # Pull env variables
```

---

**This document will be automatically updated after each milestone completion.**

---

*Last auto-update: Phase 1 Foundation Complete - October 19, 2025*

---

## Completed Components (Phase 1)

### UI Components (/components/ui/)
- **Button.tsx** - 3 variants (primary, secondary, ghost), loading state, asChild support
- **Card.tsx** - Glass morphism design, hover effects, subcomponents (Header, Title, Description, Content, Footer)
- **Input.tsx** - Text/email inputs with labels, errors, helper text
- **Textarea.tsx** - Multi-line input with validation
- **Select.tsx** - Dropdown with custom styling
- **Container.tsx** - Responsive container with size variants
- **index.ts** - Barrel export for all UI components

### Layout Components (/components/layout/)
- **Header.tsx** - Sticky header with scroll detection, desktop/mobile nav
- **Footer.tsx** - Multi-column footer with links
- **MobileMenu.tsx** - Full-screen mobile menu with animations
- **index.ts** - Barrel export for all layout components

### Utilities (/lib/)
- **utils.ts** - cn() utility for className merging with Tailwind

### Type Definitions (/types/)
- **index.ts** - NavItem, PortfolioProject, Service, PricingTier, ContactFormData, FAQItem

### Configuration Files
- **tailwind.config.ts** - Custom theme with design tokens
- **tsconfig.json** - TypeScript strict mode configuration
- **next.config.js** - Next.js configuration
- **package.json** - All dependencies installed
- **.eslintrc.json** - ESLint configuration
- **.prettierrc** - Prettier configuration
- **postcss.config.js** - PostCSS with Tailwind and Autoprefixer

### Global Styles
- **app/globals.css** - CSS variables, utility classes, focus states, glass morphism
