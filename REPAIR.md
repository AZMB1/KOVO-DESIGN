# KOVO Design - File Corruption Repair Document

**Date:** October 19, 2025
**Issue:** Sub-agent ran automated linter that corrupted 24 TypeScript files
**Corruption Pattern:** Character-by-character quote wrapping like `"e"x"p"o"r"t"`

---

## Repair Status: 18/24 Complete (75%) ✅

### ✅ SESSION 1 - REPAIRED FILES (18/24)

1. ✅ `app/faq/page.tsx` - FAQ page with accordion
2. ✅ `app/layout.tsx` - Root layout with fonts  
3. ✅ `app/contact/page.tsx` - Contact page with form
4. ✅ `app/not-found.tsx` - 404 error page
5. ✅ `app/privacy/page.tsx` - Privacy policy page
6. ✅ `app/terms/page.tsx` - Terms of service page
7. ✅ `app/sitemap.ts` - Dynamic sitemap generator
8. ✅ `components/ui/Accordion.tsx` - Accordion component
9. ✅ `components/ui/Button.tsx` - Button component (3 variants)
10. ✅ `components/ui/Container.tsx` - Container wrapper
11. ✅ `components/ui/Card.tsx` - Glass card component
12. ✅ `components/ui/Input.tsx` - Input form field
13. ✅ `components/ui/Textarea.tsx` - Textarea form field
14. ✅ `components/ui/Select.tsx` - Select dropdown
15. ✅ `components/layout/Header.tsx` - Main header/nav
16. ✅ `components/layout/Footer.tsx` - Site footer
17. ✅ `components/layout/MobileMenu.tsx` - Mobile navigation
18. ✅ `components/forms/ContactForm.tsx` - Contact form with validation

---

### 🔧 SESSION 2 - FILES STILL NEEDING REPAIR (6)

#### Priority 1: Critical Pages (5 files)
- [ ] `app/page.tsx` - **HOME PAGE** (CRITICAL - site won't load without this)
- [ ] `app/services/page.tsx` - Services page
- [ ] `app/about/page.tsx` - About page  
- [ ] `app/pricing/page.tsx` - Pricing page
- [ ] `app/portfolio/page.tsx` - Portfolio listing page

#### Priority 2: API Route (1 file)
- [ ] `app/api/contact/route.ts` - Contact form API endpoint

---

## Session 1 Summary

**Tokens Used:** 118k/200k (59%)  
**Files Repaired:** 18/24 (75%)
**Method:** Used `cat` with heredoc to write files directly (bypassing file modification conflicts)
**Issues:** Dev server hot reload was interfering with Write tool, switched to bash cat

---

## Next Session Instructions

**START HERE:**

1. **Rebuild HOME PAGE first** - `app/page.tsx` is the most critical file
   - The site cannot load without the home page
   - This is the main entry point

2. **Then rebuild these 4 pages** (in order):
   - `app/services/page.tsx`
   - `app/about/page.tsx`
   - `app/pricing/page.tsx`
   - `app/portfolio/page.tsx`

3. **Finally rebuild API route**:
   - `app/api/contact/route.ts`

4. **Test everything:**
   ```bash
   npm run dev
   # Visit http://localhost:3002
   # Test all pages load
   # Test contact form
   ```

5. **COMMIT TO GIT IMMEDIATELY after all repairs:**
   ```bash
   git add .
   git commit -m "fix: Restore 24 corrupted TypeScript files

   - All files manually rebuilt after automated linter corruption
   - Fixed character-by-character quote wrapping issue
   - All pages and components functional
   
   🤖 Generated with Claude Code"
   git push
   ```

---

## How to Rebuild Files (Method That Worked)

Use bash `cat` with heredoc instead of Write tool:

```bash
cat > "/path/to/file.tsx" << 'EOF'
// Your code here
EOF
echo "File written"
```

This bypasses file modification conflicts from Next.js hot reload.

---

## Important Notes for Session 2

### 1. Portfolio [slug] Page - NOT CORRUPTED
The file `app/portfolio/[slug]/page.tsx` is **NOT corrupted** by quotes, but it **DOES** have an issue:
- **Issue:** Async params (Next.js 15 requirement)
- **Fix needed:** Change params type to `Promise<{slug: string}>` and await it
- **Lines with smart quotes already fixed:** 248, 266

### 2. Files That Are NOT Corrupted
- ✅ `lib/utils.ts` - Utility functions (OK)
- ✅ `lib/data/portfolio.ts` - Portfolio data (OK)
- ✅ `lib/validations.ts` - Zod schemas (OK)
- ✅ `components/ui/index.ts` - Check this, might need repair
- ✅ `tailwind.config.ts` - Might be corrupted, check it

### 3. Check tailwind.config.ts
This file appeared in the corrupted files list. If it's corrupted, rebuild it with:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-surface': '#1a1a1a',
        'accent-primary': '#6366f1',
        'accent-secondary': '#8b5cf6',
        'accent-interactive': '#06b6d4',
        'text-heading': '#ffffff',
        'text-body': '#a1a1aa',
        'text-muted': '#71717a',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      transitionDuration: {
        fast: '150ms',
        medium: '300ms',
        slow: '500ms',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Quick Reference: Page Structures

All pages follow this pattern:

```tsx
import type { Metadata } from 'next'
import { Container, Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Page Title - Kovo Design',
  description: 'Page description...',
}

export default function PageName() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing">
        <Container className="text-center">
          <h1 className="mb-4">Page Heading</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Description text
          </p>
        </Container>
      </section>

      {/* More sections... */}
    </>
  )
}
```

---

## Files to Reference for Content

All page content was documented in the original conversation. Key reference points:

- **Home page:** 6 sections (Hero, Services, Process, Portfolio teaser, Testimonials, CTA)
- **Services page:** Service breakdown, process, benefits
- **About page:** Philosophy, values, differentiation
- **Pricing page:** 3 pricing tiers, add-ons, mini FAQ
- **Portfolio page:** 4 project cards in grid layout

Refer to PRD.md and CLAUDE.md for detailed content requirements.

---

## After All Repairs Complete

1. Start dev server and test all pages
2. Verify no TypeScript errors
3. Test contact form functionality
4. Check all navigation links work
5. **COMMIT TO GIT** (critical - don't skip this!)
6. Delete REPAIR.md
7. Update PROGRESS.md with success status

---

**END OF SESSION 1 - Continue in Session 2**

*Stopping at 59% context usage (118k/200k tokens) as requested by user.*
