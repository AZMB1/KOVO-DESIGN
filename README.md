# KOVO Design

A modern, professional website for KOVO Design — a design studio specializing in custom website design and development.

**Live Site:** kovo-design.io (coming soon)  
**Status:** Development Complete - Ready for Deployment

---

## 🚀 Features

### Design
- **Dark Theme**: Professional dark aesthetic with blue-violet gradient accents
- **Glass Morphism**: Translucent frosted glass effect cards and surfaces
- **Smooth Animations**: Hover effects and transitions (Framer Motion ready)
- **Fully Responsive**: Mobile-first design across all devices
- **Accessible**: WCAG AA compliant with keyboard navigation support

### Pages (15 Total)

#### Core Pages
- **Home** (`/`) - Hero, services, process, portfolio teaser, testimonials, CTA
- **Services** (`/services`) - Service breakdown, process timeline, benefits
- **About** (`/about`) - Philosophy, values, team approach
- **Pricing** (`/pricing`) - 3 pricing tiers, add-ons, FAQ
- **FAQ** (`/faq`) - 20+ questions with accordion interface
- **Contact** (`/contact`) - Full form with validation and Resend integration
- **404** (`/not-found`) - Custom error page

#### Portfolio
- **Portfolio Listing** (`/portfolio`) - 4 featured projects in grid layout
- **Individual Projects** (4 pages):
  - TechFlow (`/portfolio/techflow`)
  - GreenLeaf Market (`/portfolio/greenleaf-market`)
  - Pulse Fitness (`/portfolio/pulse-fitness`)
  - DevDocs (`/portfolio/devdocs`)

#### Legal
- **Privacy Policy** (`/privacy`)
- **Terms of Service** (`/terms`)

---

## 🛠️ Tech Stack

### Core
- **Next.js 15** - App Router, React Server Components
- **React 18.3** - UI library
- **TypeScript 5.6** - Type safety
- **Tailwind CSS 3.4** - Utility-first styling

### Libraries
- **Framer Motion 11** - Animation library
- **React Hook Form 7.53** - Form state management
- **Zod 3.23** - Schema validation
- **Resend 4.0** - Email delivery

### Dev Tools
- ESLint 8.57
- Prettier 3.3
- TypeScript strict mode
- PostCSS with Autoprefixer

---

## 📁 Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   ├── contact/             # Contact page
│   ├── faq/                 # FAQ page
│   ├── portfolio/           # Portfolio pages
│   │   ├── [slug]/          # Dynamic project pages
│   │   └── page.tsx         # Portfolio listing
│   ├── pricing/             # Pricing page
│   ├── privacy/             # Privacy policy
│   ├── services/            # Services page
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── terms/               # Terms of service
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── not-found.tsx        # 404 page
│   └── page.tsx             # Home page
├── components/
│   ├── forms/               # Form components
│   ├── layout/              # Header, Footer, MobileMenu
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── data/                # Static data (portfolio)
│   ├── utils.ts             # Utility functions
│   └── validations.ts       # Zod schemas
├── public/
│   ├── fonts/               # Custom fonts
│   ├── images/              # Static images
│   └── robots.txt           # SEO robots file
├── types/
│   └── index.ts             # TypeScript types
└── ...config files
```

---

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kovo-design
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Resend API Key (for contact form)
   RESEND_API_KEY=re_your_api_key_here
   
   # Contact form recipient email
   CONTACT_EMAIL=hello@kovo-design.io
   
   # Site URL (for metadata)
   NEXT_PUBLIC_SITE_URL=http://localhost:3002
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3002](http://localhost:3002)

---

## 📜 Available Scripts

```bash
# Start development server (port 3002)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# TypeScript type checking
npm run type-check
```

---

## 🎨 Design System

### Color Palette

```css
/* Base Colors */
--bg-primary: #0a0a0a;      /* Deep charcoal */
--bg-secondary: #141414;    /* Slightly lighter */
--bg-surface: #1a1a1a;      /* Elevated elements */

/* Accents */
--accent-primary: #6366f1;  /* Blue-violet */
--accent-secondary: #8b5cf6;
--accent-interactive: #06b6d4; /* Cyan */

/* Text */
--text-heading: #ffffff;
--text-body: #a1a1aa;
--text-muted: #71717a;
```

### Typography

- **Headings**: Space Grotesk (500-700 weight)
- **Body**: Inter (400-500 weight)

### Breakpoints

- Mobile: 640px
- Tablet: 768px
- Desktop: 1024px
- Large: 1280px

---

## 🧩 Components

### UI Components
- **Button** - 3 variants (primary, secondary, ghost), loading states
- **Card** - Glass morphism styling with hover effects
- **Input** - Text, email, textarea with validation
- **Select** - Custom dropdown styling
- **Container** - Responsive wrapper with max-width
- **Accordion** - Collapsible Q&A component

### Layout Components
- **Header** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with links
- **MobileMenu** - Full-screen mobile navigation

### Form Components
- **ContactForm** - Full validation with React Hook Form + Zod

---

## 📧 Contact Form Setup

The contact form requires a Resend API key to send emails.

### Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

### Form Fields

- Name (required)
- Email (required, validated)
- Company (optional)
- Project Type (dropdown, required)
- Budget (dropdown, required)
- Timeline (dropdown, required)
- Message (required, min 20 characters)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings

3. **Add Environment Variables**
   
   In Vercel dashboard, add:
   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=hello@kovo-design.io
   NEXT_PUBLIC_SITE_URL=https://kovo-design.io
   ```

4. **Configure Domain**
   - Add custom domain: `kovo-design.io`
   - Follow Vercel's DNS setup instructions

5. **Deploy!**
   - Vercel will automatically deploy on every push to `main`

---

## 🌐 SEO Features

- ✅ Dynamic sitemap (`/sitemap.xml`)
- ✅ Robots.txt configured
- ✅ Meta tags on all pages
- ✅ Semantic HTML structure
- ⏳ Open Graph images (todo)
- ⏳ JSON-LD structured data (todo)

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast ratios meet WCAG AA standards
- `prefers-reduced-motion` support (ready for animations)

---

## 🧪 Testing

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (latest)

### Manual Testing Checklist
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Form validation displays errors correctly
- [ ] Mobile menu opens/closes properly
- [ ] All pages responsive on mobile/tablet/desktop
- [ ] Images load properly
- [ ] 404 page displays for invalid routes

---

## 📝 Content Guidelines

### Tone of Voice
- Professional but human
- Clear and direct
- Confident without arrogance
- Benefit-focused, not feature-focused

### Restrictions
- ❌ No fake metrics ("500+ projects")
- ❌ No made-up testimonials
- ❌ No emojis (unless contextually appropriate)
- ❌ No buzzwords or jargon

---

## 📚 Documentation

- **PRD.md** - Complete product requirements document
- **CLAUDE.md** - Project context for AI assistants
- **TODO.md** - Development task tracking
- **SUMMARY.md** - Project completion summary
- **README.md** - This file

---

## 🔮 Future Enhancements

- [ ] Framer Motion page transitions
- [ ] Blog/Insights section
- [ ] CMS integration (Sanity/Contentful)
- [ ] Real client testimonials
- [ ] Real case studies
- [ ] Newsletter signup
- [ ] Live chat widget
- [ ] Project calculator
- [ ] Dark/light mode toggle

---

## 📄 License

MIT License - Feel free to use this as a template for your projects.

---

## 📞 Support

**Email:** hello@kovo-design.io  
**Website:** kovo-design.io

---

**© 2025 KOVO Design. All rights reserved.**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
