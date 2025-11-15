# SEO & Analytics Guide

Complete guide to SEO optimization and analytics tracking for the 99% Reset website.

## Table of Contents

1. [SEO Features Implemented](#seo-features-implemented)
2. [Analytics Setup](#analytics-setup)
3. [Search Console Setup](#search-console-setup)
4. [Tracking Custom Events](#tracking-custom-events)
5. [SEO Best Practices](#seo-best-practices)
6. [Monitoring & Optimization](#monitoring--optimization)

---

## SEO Features Implemented

### ✅ Meta Tags & Structured Data

**Page Metadata:**
- Title tags (60 chars optimal)
- Meta descriptions (155-160 chars)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs
- 30+ targeted keywords

**Structured Data (JSON-LD):**
- Organization schema (home page)
- Article schema (blog posts)
- Breadcrumb schema (navigation)

**Location:** `lib/seo.ts`

### ✅ Sitemap & Robots.txt

**Sitemap:**
- Auto-generated via `next-sitemap`
- Updated on each build
- URL: `https://99reset.org/sitemap.xml`

**Robots.txt:**
- Allows all search engines
- Blocks `/api` routes
- Points to sitemap
- URL: `https://99reset.org/robots.txt`

**Location:** `next-sitemap.config.js`

### ✅ Open Graph Images

Dynamic OG image generation for social sharing:
- 1200x630px (optimal size)
- Custom title per page
- Branded design
- URL: `https://99reset.org/api/og?title=Your+Title`

**Location:** `app/api/og/route.tsx`

### ✅ Performance Optimizations

- Next.js 14 App Router (fast)
- Image optimization (next/image)
- Font optimization (Google Fonts)
- Scroll progress indicator
- Lazy loading components

### ✅ Accessibility (SEO Boost)

- Semantic HTML
- ARIA labels
- Alt text on images
- Focus states
- Skip to content link
- Keyboard navigation

---

## Analytics Setup

### Plausible Analytics (Recommended)

**Why Plausible:**
- Privacy-friendly (no cookies)
- GDPR compliant
- Lightweight (< 1KB)
- Simple, clear dashboard
- Custom events supported

**Setup Steps:**

1. **Create Account:**
   ```
   https://plausible.io → Sign Up
   ```

2. **Add Site:**
   - Domain: `99reset.org`
   - Timezone: Your local timezone

3. **Environment Variable:**
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN="99reset.org"
   ```

4. **Verify Installation:**
   - Visit your site
   - Check Plausible dashboard (real-time)
   - Should see pageview within seconds

**Dashboard Access:**
- URL: `https://plausible.io/99reset.org`
- Metrics: Page views, visitors, sources, devices
- Custom events: Form submits, CTA clicks, etc.

### Google Analytics (Optional)

**When to Use:**
- Need advanced funnels
- Want demographic data
- Require Google Ads integration
- Need e-commerce tracking (future)

**Setup Steps:**

1. **Create GA4 Property:**
   ```
   https://analytics.google.com → Admin → Create Property
   ```

2. **Get Measurement ID:**
   - Format: `G-XXXXXXXXXX`
   - Found in: Admin → Data Streams

3. **Environment Variable:**
   ```env
   NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
   ```

4. **Privacy Settings (Enabled):**
   - Anonymous IP: ✅
   - Cookie consent: ✅
   - Data retention: 14 months (GDPR)

**Dashboard:** `https://analytics.google.com`

### Vercel Analytics

**Included by default:**
- Real-time visitor tracking
- Web Vitals monitoring
- No configuration needed

**Dashboard:** Vercel Project → Analytics tab

---

## Search Console Setup

### Google Search Console

**Benefits:**
- Monitor search rankings
- Submit sitemaps
- Check indexing status
- View search queries
- Find crawl errors

**Setup:**

1. **Add Property:**
   ```
   https://search.google.com/search-console
   → Add Property → URL prefix → https://99reset.org
   ```

2. **Verify Ownership:**
   - Method: HTML tag
   - Copy verification code
   - Add to `lib/seo.ts`:
     ```typescript
     verification: {
       google: "your-code-here",
     }
     ```

3. **Submit Sitemap:**
   - Sitemaps → Add sitemap
   - URL: `https://99reset.org/sitemap.xml`
   - Click "Submit"

4. **Monitor:**
   - Performance: Search queries, clicks, impressions
   - Coverage: Indexed pages, errors
   - Mobile Usability: Mobile-friendly issues

**Important URLs to Monitor:**
- `/` (home)
- `/plan` (main content)
- `/join` (conversion)
- `/updates` (blog index)
- `/resources` (toolkits)

### Bing Webmaster Tools

**Setup:**

1. **Add Site:**
   ```
   https://www.bing.com/webmasters
   → Add site → https://99reset.org
   ```

2. **Verify:**
   - Meta tag method
   - Add to `lib/seo.ts`

3. **Submit Sitemap:**
   - `https://99reset.org/sitemap.xml`

**Why Bing:**
- 3-5% of search traffic (still significant)
- DuckDuckGo uses Bing results
- Easy setup (import from Google)

---

## Tracking Custom Events

### Predefined Events

**Location:** `lib/analytics.tsx` → `track` object

**Available Events:**

```typescript
import { track } from "@/lib/analytics";

// Form submissions
track.formSubmit("pledge-form", true);

// CTA clicks
track.ctaClick("Join the Reset", "hero");

// Downloads
track.download("toolkit.pdf", "pdf");

// External links
track.externalLink("https://youtube.com/@99Reset", "YouTube");

// Video interactions
track.videoPlay("hero-video");
track.videoPause("hero-video");

// Navigation
track.navClick("/plan");

// Social shares
track.socialShare("twitter", "https://99reset.org/plan");

// Email signups
track.emailSignup("footer");

// Resources
track.resourceView("Bank Switch Toolkit", "finance");

// Chapters
track.chapterView("Vancouver");
track.chapterApply();
```

### Example: Track Button Click

```typescript
"use client";

import { track } from "@/lib/analytics";

export function CTAButton() {
  const handleClick = () => {
    track.ctaClick("Join the Reset", "home-hero");
  };

  return <button onClick={handleClick}>Join</button>;
}
```

### Example: Track Form Submit

```typescript
"use server";

import { track } from "@/lib/analytics";

export async function submitPledge(data: FormData) {
  try {
    // ... save to database
    track.formSubmit("pledge", true);
  } catch (error) {
    track.formSubmit("pledge", false);
  }
}
```

---

## SEO Best Practices

### Content Optimization

**Title Tags:**
- ✅ 60 characters or less
- ✅ Include primary keyword
- ✅ Branded (with " — The 99% Reset")
- ❌ Don't keyword stuff

**Meta Descriptions:**
- ✅ 155-160 characters
- ✅ Action-oriented
- ✅ Include CTA
- ❌ Don't duplicate across pages

**Headings:**
- ✅ One H1 per page (in page title)
- ✅ Logical hierarchy (H1 → H2 → H3)
- ✅ Include keywords naturally
- ❌ Don't skip levels (H1 → H3)

**Content:**
- ✅ 1000+ words per page (for ranking)
- ✅ Original, unique content
- ✅ Internal links (3-5 per page)
- ✅ External links to authorities
- ❌ Duplicate content across pages

### Technical SEO

**URL Structure:**
- ✅ Short, descriptive
- ✅ Use hyphens (not underscores)
- ✅ Lowercase
- ❌ Avoid parameters (?id=123)

**Internal Linking:**
- Home → Plan, Join, Resources
- Plan → Resources (toolkits)
- Updates → Related posts
- All pages → Footer links

**Image Optimization:**
- ✅ Descriptive alt text
- ✅ Compressed (< 200KB)
- ✅ WebP format preferred
- ✅ Responsive (next/image)

**Page Speed:**
- Target: < 2s load time
- Check: PageSpeed Insights
- Metrics: LCP, FID, CLS

### Link Building

**Internal:**
- Cross-link related content
- Use descriptive anchor text
- Link from high-traffic pages

**External (Backlinks):**
- Submit to directories (free)
- Guest post on related blogs
- Partner with unions, co-ops
- Press releases (media kit)

---

## Monitoring & Optimization

### Weekly Checks

**Plausible Dashboard:**
- [ ] Page views trending up?
- [ ] Top pages (optimize low performers)
- [ ] Traffic sources (focus on winners)
- [ ] Conversion funnel (join, chapters)

**Google Search Console:**
- [ ] Indexing errors (fix immediately)
- [ ] New search queries (add to content)
- [ ] Click-through rate (improve titles)
- [ ] Mobile usability issues

### Monthly Reviews

**Performance:**
- [ ] PageSpeed Insights (all key pages)
- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Broken links (404s)
- [ ] Sitemap coverage (100% indexed)

**Content:**
- [ ] Update top posts (keep fresh)
- [ ] Add new keywords (trends)
- [ ] Improve low-traffic pages
- [ ] Create new content (updates)

**Backlinks:**
- [ ] Check backlink profile (Ahrefs, Moz)
- [ ] Reach out for partnerships
- [ ] Submit to new directories

### Quarterly Goals

**Q1 (Months 1-3):**
- Get indexed (all pages)
- 1,000+ organic visits/month
- 10+ backlinks

**Q2 (Months 4-6):**
- 5,000+ organic visits/month
- Rank top 10 for "worker cooperative"
- 25+ backlinks

**Q3 (Months 7-9):**
- 10,000+ organic visits/month
- Rank top 5 for key terms
- 50+ backlinks

**Q4 (Months 10-12):**
- 20,000+ organic visits/month
- Multiple #1 rankings
- 100+ backlinks

---

## Tools & Resources

### Free SEO Tools

**Google Tools:**
- Search Console (rankings, indexing)
- PageSpeed Insights (performance)
- Mobile-Friendly Test
- Rich Results Test (structured data)

**Third-Party:**
- [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (free backlinks)
- [Ubersuggest](https://neilpatel.com/ubersuggest/) (keywords)
- [Answer the Public](https://answerthepublic.com/) (content ideas)

### Paid Tools (Optional)

- **Ahrefs** ($99/mo): Backlinks, keywords, competitors
- **SEMrush** ($119/mo): All-in-one SEO suite
- **Moz Pro** ($99/mo): Rankings, link building

### Learning Resources

- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Google Search Central](https://developers.google.com/search/docs)
- [Ahrefs Blog](https://ahrefs.com/blog/)

---

## Quick Reference

### Key URLs

| URL | Purpose |
|-----|---------|
| `https://99reset.org/sitemap.xml` | Sitemap for search engines |
| `https://99reset.org/robots.txt` | Crawler instructions |
| `https://99reset.org/api/og` | OG image generator |

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL="https://99reset.org"
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="99reset.org"
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"  # Optional
```

### Key Files

- `lib/seo.ts` - SEO utilities & metadata
- `lib/analytics.tsx` - Analytics & tracking
- `next-sitemap.config.js` - Sitemap generation
- `app/api/og/route.tsx` - OG image generation

---

## Support

**Questions?**
- Email: tech@99reset.org
- Docs: `/ENVIRONMENT_VARIABLES.md`
- Issues: GitHub Issues

**SEO Audit Request:**
Contact tech@99reset.org for a free quarterly audit.

