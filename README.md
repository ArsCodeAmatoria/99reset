```
 ██████╗  ██████╗ ██╗  ██╗    ██████╗ ███████╗███████╗███████╗████████╗
██╔════╝ ██╔════╝ ╚██╗██╔╝    ██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝
╚██████╗ ╚██████╗  ╚███╔╝     ██████╔╝█████╗  ███████╗█████╗     ██║   
 ╚════██╗ ╚════██╗ ██╔██╗     ██╔══██╗██╔══╝  ╚════██║██╔══╝     ██║   
 ██████╔╝ ██████╔╝██╔╝ ██╗    ██║  ██║███████╗███████║███████╗   ██║   
 ╚═════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝   
```

**Starve the 1%. Own the Future.**

A production-ready Next.js 14 website for the 99% Reset movement — a global, non-violent plan to shift ownership and bargaining power to workers and communities through coordinated institutional change.

---

## Overview

The 99% Reset is a movement to make the top 1% politically and economically irrelevant within a generation by executing three coordinated tracks:

1. **Finance** — Move deposits to credit unions and seed a Citizens' Wealth Fund
2. **Ownership** — Scale worker cooperatives and Community Land Trusts
3. **Labour** — Unionize high-leverage employers to restore bargaining power

This repository contains the public-facing website that enables recruitment, education, and conversion across all three tracks.

---

## Purpose

Not welfare. Ownership.

We measure institutional change through concrete metrics:
- Deposits moved from corporate banks to credit unions
- Union drives launched and won
- Worker cooperatives formed with profit-sharing
- Community Land Trust homes secured with permanent affordability
- Wealth fund contributions and per-capita dividends

---

## Technology Stack

**Framework & Language**
- Next.js 14 (App Router)
- TypeScript (strict mode)
- React 18

**Styling & UI**
- Tailwind CSS
- Custom design system (black/white/red minimalist)
- Radix UI primitives
- Lucide icons
- Google Fonts (Inter + Newsreader)

**Database & Backend**
- Prisma ORM
- PostgreSQL (Neon/Supabase)
- Server Actions (no API routes)
- Zod validation

**Email & Communication**
- Resend (transactional emails)

**Content Management**
- MDX (next-mdx-remote)
- Markdown for long-form content
- Gray-matter for frontmatter

**Analytics & Monitoring**
- Vercel Analytics
- Plausible (privacy-first, cookieless)

**SEO & Performance**
- next-sitemap
- OpenGraph image generation
- Static page generation
- Edge runtime for OG images

---

## Project Structure

```
/app
  /(site)              Site layout group with header/footer
    /page.tsx          Home page with hero and stat counters
  /plan                The Plan (MDX content with TOC)
  /join                Three conversion forms
  /chapters            Chapter directory and applications
  /press               Media kit and contact
  /resources           Toolkits and guides
  /updates             Campaign news and briefings
  /privacy             Privacy policy
  /terms               Terms of use
  /api
    /actions           Server Actions for form submissions
    /og                OpenGraph image generation

/components            Reusable React components
/lib                   Utilities and helpers
/content               MDX content files
/styles                Global styles and design tokens
/prisma                Database schema
```

---

## Database Schema

Five core models for campaign coordination:

**Pledge** — Bank-switch commitments  
**UnionDrive** — Union organizing inquiries  
**CoopFounder** — Co-op/CLT founder network  
**ChapterApplication** — Local chapter applications  
**Newsletter** — Email subscriptions  

All models indexed and optimized for read-heavy workloads.

---

## Design System

**Visual Language: Institutional Revolution**

Minimalist civic design that conveys credibility, urgency, and institutional power. No gradient backgrounds, no playful illustrations, no consumer-app aesthetics.

**Colors**
```
Background:  #0A0A0A  (rich black)
Card:        #111113  (darker gray)
Border:      #27272A  (subtle gray)
Text:        #F8FAFC  (near-white)
Text Dim:    #D1D5DB  (muted gray)
Accent:      #E11D48  (radical red)
Success:     #10B981  (green)
Warning:     #FACC15  (amber)
```

**Typography**
- **Display (headings):** Newsreader (serif, for institutional gravitas)
- **UI (body, forms):** Inter (sans-serif, for readability)

**Component Patterns**
- Cards: rounded corners (1.25rem), thin borders, subtle shadows
- Buttons: accent red primary, outlined secondary, rounded (0.875rem)
- Inputs: dark background with focus rings, accessible contrast
- Sections: alternating black/darker backgrounds for visual rhythm

---

## Key Features

**Home Page**
- Hero section with tagline and dual CTAs
- Animated stat counters (deposits moved, union drives, co-ops, CLT homes)
- Three tracks overview with icon cards
- Secondary CTA section

**Plan Page**
- Full MDX rendering with custom prose styles
- Sticky table-of-contents sidebar (desktop)
- Anchor links to sections (Finance, Ownership, Labour, Policy, KPIs)
- Responsive tables and typography

**Join Page**
- Three stacked conversion forms:
  - Bank-switch pledge (name, email, postal code, amount)
  - Union drive inquiry (name, email, employer, city, contact preference)
  - Co-op/CLT founder application (name, email, sector, city, role, notes)
- Real-time validation with Zod
- Toast notifications for success/error
- Email confirmations via Resend
- Server-side form processing (no client state leakage)

**Chapters**
- Directory of active chapters with member counts and meeting dates
- Chapter application form with textarea for experience
- Map placeholder (future: interactive map component)

**Content Management**
- MDX for long-form content (plan, resources, updates)
- Custom components for code highlighting and tables
- Easy editing without touching React code

**SEO & Metadata**
- Per-page title and description
- OpenGraph images with dynamic title generation
- Sitemap and robots.txt generation
- Canonical URLs and structured data

**Accessibility**
- WCAG AA compliance
- Keyboard navigation with visible focus rings
- Skip-to-content link
- Semantic HTML (article, nav, section, aside)
- ARIA labels for interactive elements
- ARIA live regions for form feedback
- Screen reader-tested

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database (local or hosted)
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd 99reset

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Initialize database
npm run db:push

# Start development server
npm run dev
```

Visit http://localhost:3000

### Environment Variables

Required for development:

```env
DATABASE_URL=postgresql://user:password@host:5432/database
RESEND_API_KEY=re_xxxxxxxxxxxx
PLAUSIBLE_DOMAIN=99reset.ca
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, use your hosted database URL and production domain.

---

## Development

### Commands

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run db:push     # Push schema changes to database
npm run db:studio   # Open Prisma Studio (database GUI)
```

### Code Standards

- TypeScript strict mode enabled
- ESLint with Next.js config
- Prettier for formatting
- No explicit `any` types
- Server Components by default (use "use client" sparingly)
- Zod for all form validation
- Prisma for all database access

### Adding Content

**Plan Content**
Edit `/content/plan.mdx` directly. Markdown with MDX support.

**Resources/Updates**
Add MDX files to `/content/resources/` or `/content/updates/`.

**Chapter Data**
Update the chapters array in `/app/chapters/page.tsx` (future: fetch from database).

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Vercel will automatically:
- Detect Next.js configuration
- Run Prisma generate during build
- Generate sitemap post-build
- Enable Vercel Analytics
- Provide preview deployments for PRs

### Database Setup

**Neon (Recommended)**
1. Create account at neon.tech
2. Create new project
3. Copy connection string to `DATABASE_URL`
4. Run `npm run db:push` locally to initialize schema

**Supabase**
1. Create project at supabase.com
2. Get connection string from dashboard
3. Use pooling connection string for serverless
4. Run `npm run db:push` to initialize

### Email Setup

1. Sign up at resend.com
2. Add and verify your sending domain
3. Create API key
4. Add to environment variables as `RESEND_API_KEY`
5. Test by submitting a form

### Custom Domain

1. Add domain in Vercel project settings
2. Update DNS records (CNAME or A record)
3. Update environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
   - `PLAUSIBLE_DOMAIN=yourdomain.com`
4. Redeploy

---

## Architecture Decisions

**Why Server Actions over API Routes?**
- Simpler code (colocated with components)
- Type-safe by default
- No need for fetch/axios
- Better error handling
- Automatic revalidation

**Why Prisma over raw SQL?**
- Type-safe database access
- Automatic migrations
- Schema as code
- Excellent Next.js integration
- Prevents SQL injection

**Why MDX over CMS?**
- Content lives in repository (version controlled)
- No external dependencies
- Faster builds (no API calls)
- Complete control over rendering
- Easy for developers to edit

**Why Static Generation?**
- Faster page loads
- Lower server costs
- Better SEO
- Cacheable at CDN edge
- Can revalidate on-demand

---

## Performance

**Bundle Sizes**
- Home page: 96.5 kB first load
- Average page: 87-97 kB first load
- Shared chunks: 87.2 kB (cached)

**Optimizations**
- Static page generation where possible
- Font optimization with next/font (no layout shift)
- Image optimization with next/image
- Code splitting by route
- Edge runtime for OG images
- Minimal client-side JavaScript

**Lighthouse Targets**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## Security

**Data Protection**
- Environment variables for secrets
- Prisma parameterized queries (no SQL injection)
- Zod input validation on all forms
- HTTPS enforced in production
- Database credentials never in client code

**Privacy**
- No tracking cookies
- Plausible analytics (privacy-first, GDPR-compliant)
- Minimal data collection (name, email, city only)
- Clear privacy policy
- User data deletion available on request

**Dependencies**
- Regular updates via `npm update`
- Security audits via `npm audit`
- No deprecated packages
- Minimal dependency tree

---

## Testing

Currently no automated tests (contributions welcome).

Manual testing checklist:
- All forms submit successfully
- Database entries created
- Emails sent and delivered
- Navigation works (mobile + desktop)
- Keyboard navigation functional
- Screen reader compatibility
- Lighthouse scores above 90
- Build completes without errors

---

## Contributing

We welcome contributions from developers, designers, writers, and organizers.

**How to Contribute**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test locally (`npm run build` must succeed)
5. Commit with clear message (`feat: add your feature`)
6. Push and open a Pull Request

See `CONTRIBUTING.md` for detailed guidelines.

**Areas for Contribution**
- Bug fixes and performance improvements
- Accessibility enhancements
- Test coverage (Jest + React Testing Library)
- French translations (i18n setup ready)
- Additional toolkits and resources (MDX)
- Design improvements

---

## License

[Specify your license here]

---

## Contact

**General Inquiries:** contact@99reset.ca  
**Press/Media:** press@99reset.ca  
**Privacy Questions:** privacy@99reset.ca  
**Technical Support:** tech@99reset.ca  

---

## Acknowledgments

Built with Next.js, TypeScript, Tailwind CSS, Prisma, and the conviction that institutional change is possible through coordinated, non-violent action.

**Not welfare. Ownership.**

Equity, dividends, and permanent affordability. The 1% become irrelevant when they no longer control the levers.

---

**Status:** Production-ready  
**Version:** 1.0.0  
**Last Updated:** November 2025
