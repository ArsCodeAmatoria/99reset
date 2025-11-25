# SEO Improvements & Best Practices

This document outlines comprehensive SEO strategies to improve Google search rankings and visibility for 99reset.org.

---

## ✅ Already Implemented

### 1. Technical SEO Foundation
- ✅ Dynamic sitemap.xml with proper priorities
- ✅ Robots.txt with crawl directives
- ✅ SSL/HTTPS (via Vercel)
- ✅ Mobile-responsive design
- ✅ Fast loading times (Next.js optimization)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Image alt text on all images
- ✅ Canonical URLs
- ✅ OpenGraph metadata for social sharing

### 2. On-Page SEO
- ✅ Unique title and meta description for every page
- ✅ Keyword-optimized URLs (/banking-reset, /housing-reset, etc.)
- ✅ Header tags (H1, H2, H3) properly structured
- ✅ Internal linking between related pages
- ✅ Descriptive anchor text

### 3. Structured Data (Schema.org)
- ✅ Organization schema
- ✅ HowTo schema on reset pages
- ✅ FAQ schema (banking-reset page)
- ✅ Article schema capability (lib/schema.ts)

---

## 🚀 High-Impact Improvements to Implement

### 1. **Add FAQ Schema to All Pages with FAQs**

**Impact:** ⭐⭐⭐⭐⭐ (Shows rich snippets in Google search results)

**Pages to update:**
- ✅ `app/banking-reset/page.tsx` (DONE)
- ⏳ `app/housing-reset/page.tsx`
- ⏳ `app/workplace-reset/page.tsx`
- ⏳ `app/wealth-reset/page.tsx`
- ⏳ `app/resources/bank-switch-toolkit/page.tsx`

**How to implement:**
```typescript
import { createFAQSchema } from "@/lib/schema";
import { StructuredData } from "@/components/structured-data";

const faqSchema = createFAQSchema([
  {
    question: "Your question here?",
    answer: "Your answer here."
  },
  // ... more FAQs
]);

// In the component:
<StructuredData data={faqSchema} />
```

**Expected result:** FAQ rich snippets in Google search results (increases CTR by 20-30%)

---

### 2. **Create Content Hub / Blog Strategy**

**Impact:** ⭐⭐⭐⭐⭐ (Long-term traffic growth)

**Current state:**
- Good: Have "Updates" section with 6 articles
- Missing: Regular publishing schedule

**Action plan:**

**Weekly Content Calendar:**
- **Week 1:** Success story (e.g., "How Vancouver Organizers Moved $2M to Credit Unions")
- **Week 2:** How-to guide (e.g., "5 Steps to Start a Union Drive at Amazon")
- **Week 3:** Data/analysis (e.g., "Big 5 Banks: Q4 Fossil Fuel Financing Report")
- **Week 4:** Interview (e.g., "Worker Co-op Founder: Our First Year")

**Content types to add:**
1. **Case Studies** (500-1000 words each)
   - Successful bank switch campaigns
   - Union drives that won
   - Worker co-ops that thrived
   - Community land trusts in action

2. **City/Province Guides** (like Vancouver guide, but expand)
   - Toronto Organizing Guide
   - Montreal Economic Justice Guide
   - Calgary Worker Power Guide
   - Halifax Community Organizing

3. **Comparison Content** (great for SEO)
   - "Credit Union vs Bank: Complete Comparison 2025"
   - "Union vs Non-Union Wages: Canada Data"
   - "Worker Co-op vs Traditional Business: Pros & Cons"

4. **Data Journalism**
   - Monthly: "Bank Boycott Tracker: $X Moved This Month"
   - Quarterly: "Union Organizing Wins in Canada"
   - Annual: "State of Worker Cooperatives in Canada"

**SEO benefit:** Each article targets long-tail keywords and builds topical authority

---

### 3. **Improve Internal Linking**

**Impact:** ⭐⭐⭐⭐ (Helps Google understand site structure)

**Current state:**
- Have basic navigation
- Missing: contextual in-content links

**Where to add links:**

**On every Update/Blog post:**
- Link to relevant Reset page (banking/housing/workplace/wealth)
- Link to related resources/toolkits
- Link to other related updates

**On landing pages:**
- Link to specific resources (e.g., Banking Reset → Bank Switch Toolkit)
- Link to related updates
- Add "Related Resources" section at bottom

**Example:**
```markdown
<!-- In an update about bank boycotts -->
Ready to make the switch? Check out our [Banking Reset landing page](/banking-reset) 
and [Bank Switch Toolkit](/resources/bank-switch-toolkit) for step-by-step instructions.

Related: [The Cascade Effect: Bank Boycott Strategy](/updates/bank-boycott-cascade-effect)
```

**Anchor text best practices:**
- Use descriptive text (not "click here")
- Include target keywords naturally
- Vary anchor text (don't repeat exact same phrase)

---

### 4. **Add Breadcrumb Navigation**

**Impact:** ⭐⭐⭐ (Improves UX and shows in search results)

**What:** Show navigation trail at top of pages

**Example:**
```
Home > Resources > Bank Switch Toolkit
Home > Updates > Bank Boycott Strategy
```

**Implementation:**
```typescript
import { createBreadcrumbSchema } from "@/lib/schema";

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Resources", url: "/resources" },
  { name: "Bank Switch Toolkit", url: "/resources/bank-switch-toolkit" }
]);
```

**Visual component needed:**
```tsx
<nav aria-label="Breadcrumb" className="mb-4">
  <ol className="flex items-center gap-2 text-sm text-textDim">
    <li><Link href="/">Home</Link></li>
    <li>/</li>
    <li><Link href="/resources">Resources</Link></li>
    <li>/</li>
    <li className="text-text">Bank Switch Toolkit</li>
  </ol>
</nav>
```

---

### 5. **Optimize Images for SEO**

**Impact:** ⭐⭐⭐ (Page speed + image search traffic)

**Current state:**
- ✅ Using Next.js Image component
- ✅ Alt text present
- ⏳ Could improve file names and sizes

**Improvements:**

**A. Use descriptive file names**
```
Bad:  resourcenew.png, resourcenew1.png
Good: bank-switch-toolkit-credit-union.png, union-organizing-guide.png
```

**B. Add more context to alt text**
```typescript
Bad:  alt="Bank Switch Toolkit"
Good: alt="Step-by-step guide showing how to switch from big banks to credit unions in Canada"
```

**C. Consider WebP format for smaller file sizes**
- Convert PNG/JPG images to WebP
- Next.js can auto-convert on the fly

**D. Add image schema for key visuals**
```typescript
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://99reset.org/images/bank-switch-guide.webp",
  "caption": "30-day guide to switching from Big 5 banks to credit unions",
  "creator": "99% Reset"
}
```

---

### 6. **Create Pillar Content Pages**

**Impact:** ⭐⭐⭐⭐⭐ (Establishes topical authority)

**What:** Comprehensive guides (3000-5000 words) that rank for competitive keywords

**Proposed pillar pages:**

1. **"The Complete Guide to Credit Unions in Canada (2025)"**
   - What are credit unions
   - History and structure
   - Every credit union by province
   - How to choose
   - How to switch
   - Common myths debunked
   - Target keyword: "credit unions canada"

2. **"How to Start a Union: Complete Guide for Canadian Workers"**
   - Legal rights by province
   - Step-by-step process
   - Common employer tactics
   - How to overcome resistance
   - Success stories
   - Resources and contacts
   - Target keyword: "how to start a union canada"

3. **"Worker Cooperatives in Canada: Ultimate Guide"**
   - What is a worker co-op
   - How they work
   - Legal structures by province
   - How to start one
   - Financing options
   - Directory of Canadian co-ops
   - Success stories
   - Target keyword: "worker cooperatives canada"

4. **"Community Land Trusts: Complete Guide for Canada"**
   - What is a CLT
   - How they work
   - Existing CLTs in Canada
   - How to start one
   - Funding sources
   - Legal frameworks
   - Target keyword: "community land trust canada"

**SEO strategy:**
- Target competitive, high-volume keywords
- Link out to all related resources/toolkits
- Update quarterly with new data
- Promote heavily to get backlinks

---

### 7. **Local SEO (if applicable)**

**Impact:** ⭐⭐⭐⭐ (for chapter-based organizing)

**If you have physical chapters:**

**A. Google Business Profile**
- Create listings for each chapter
- Add address, hours, description
- Post updates regularly
- Encourage reviews

**B. Local schema markup**
```typescript
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "99% Reset Vancouver Chapter",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "postalCode": "...",
    "addressCountry": "CA"
  }
}
```

**C. City-specific landing pages**
- /vancouver (not just /updates/vancouver-organizing-guide)
- /toronto
- /montreal
- Target local keywords: "union organizing vancouver", "credit unions toronto"

---

### 8. **Video SEO**

**Impact:** ⭐⭐⭐ (Video carousel in search results)

**Current state:**
- Have video content (MP4 files)
- Missing: Video schema markup

**Improvements:**

**A. Add video schema**
```typescript
import { createVideoSchema } from "@/lib/schema";

const videoSchema = createVideoSchema({
  name: "How to Switch to a Credit Union in 30 Days",
  description: "Step-by-step video guide...",
  thumbnailUrl: "/images/video-thumbnail.jpg",
  uploadDate: "2025-11-25",
  duration: "PT5M30S", // 5 minutes 30 seconds
  url: "/videos/bank-switch.mp4"
});
```

**B. Upload to YouTube/TikTok**
- Increases reach
- YouTube videos rank in Google
- Link back to your site in description

**C. Add transcripts**
- Improves accessibility
- Google can index text
- Better for SEO

---

### 9. **Add Related Content Sections**

**Impact:** ⭐⭐⭐ (Increases time on site, reduces bounce rate)

**Where to add:**

**Bottom of every page:**
```tsx
<Section className="py-12 bg-card">
  <Container>
    <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Show 3 related pages/resources */}
    </div>
  </Container>
</Section>
```

**Sidebar on blog posts:**
```tsx
<aside className="sticky top-8">
  <h3 className="font-bold mb-4">Popular Guides</h3>
  <ul className="space-y-3">
    {/* Links to top 5 resources */}
  </ul>
</aside>
```

---

### 10. **Implement Schema for All Resource Pages**

**Impact:** ⭐⭐⭐⭐ (Shows as educational content in search)

**Use Course/LearningResource schema:**
```typescript
import { createCourseSchema } from "@/lib/schema";

const courseSchema = createCourseSchema({
  name: "Bank Switch Toolkit",
  description: "Step-by-step guide to moving deposits...",
  url: "/resources/bank-switch-toolkit"
});
```

---

## 📊 SEO Metrics to Track

### In Google Search Console:
1. **Impressions** - How often you appear in search
2. **Clicks** - How many click through
3. **CTR** - Click-through rate (target: 3-5% average)
4. **Average Position** - Where you rank (target: top 10 = position 1-10)
5. **Top Queries** - What keywords drive traffic
6. **Pages with Most Impressions** - What content ranks best

### Key Performance Indicators:
- **Organic traffic growth**: Target +20% month-over-month
- **Keyword rankings**: Track top 20 target keywords
- **Backlinks**: Use Ahrefs/Moz to track (target: 10+ new backlinks/month)
- **Domain Authority**: Check monthly (target: 30+ within 6 months)
- **Featured snippets**: How many questions trigger your content

---

## 🎯 Quick Wins (Implement Today)

### 1. **Add FAQ Schema to All FAQ Sections** (2 hours)
- Copy pattern from banking-reset page
- Add to housing-reset, workplace-reset, wealth-reset
- Test with Google Rich Results Test

### 2. **Improve Image Alt Text** (1 hour)
- Make more descriptive
- Include target keywords naturally

### 3. **Add Internal Links** (2 hours)
- Go through all update posts
- Add 3-5 contextual links per post
- Link to relevant reset pages and resources

### 4. **Create "Related Resources" Component** (3 hours)
- Build reusable component
- Add to all resource pages
- Add to bottom of update posts

### 5. **Set Up Google Search Console** (30 minutes)
- Follow SEARCH_ENGINE_SUBMISSION.md guide
- Submit sitemap
- Request indexing for top 10 pages

---

## 📅 30-Day SEO Implementation Plan

### Week 1: Technical Foundation
- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing for all main pages
- [ ] Add FAQ schema to all relevant pages
- [ ] Improve image alt text site-wide

### Week 2: Content Optimization
- [ ] Add breadcrumb navigation
- [ ] Implement related content sections
- [ ] Add internal links to all update posts
- [ ] Create first pillar content page

### Week 3: Schema & Structured Data
- [ ] Add Course schema to all resource pages
- [ ] Add Video schema to video content
- [ ] Add Breadcrumb schema site-wide
- [ ] Test all schema with Google Rich Results Test

### Week 4: Content Creation
- [ ] Publish 2 new update posts (with SEO optimization)
- [ ] Start second pillar content page
- [ ] Create city-specific landing page (if applicable)
- [ ] Analyze first month's Search Console data

---

## 🔗 Link Building Strategies

### 1. **Outreach to Aligned Organizations**
- Contact credit union associations
- Reach out to union locals
- Connect with co-op federations
- Ask for link exchange or resource listing

### 2. **Guest Posting**
- Write for progressive news sites (Rabble.ca, The Tyee, etc.)
- Contribute to co-op/union blogs
- Include link back to relevant guide

### 3. **Digital PR**
- Send press releases for major milestones
- Pitch stories to journalists covering economic justice
- Create newsworthy data reports (e.g., "Bank Boycott Tracker")

### 4. **Resource Pages**
- Get listed on:
  - Canadian Worker Co-op Federation resources
  - Credit Union Central resource pages
  - Economic justice organization directories
  - University civic engagement programs

### 5. **Social Proof**
- Testimonials from successful switchers
- Partner organization logos
- Media mentions section

---

## 🛠️ Tools to Use

### Free Tools:
1. **Google Search Console** - Track rankings and clicks
2. **Google Analytics** - Traffic analysis
3. **Google Rich Results Test** - Test schema markup
4. **PageSpeed Insights** - Performance testing
5. **Ubersuggest** (limited free) - Keyword research

### Paid Tools (Optional):
1. **Ahrefs** ($99/mo) - Comprehensive SEO suite
2. **SEMrush** ($119/mo) - Competitor analysis
3. **Surfer SEO** ($69/mo) - Content optimization
4. **Screaming Frog** (free up to 500 URLs) - Site crawling

---

## ⚠️ Common SEO Mistakes to Avoid

1. **Keyword Stuffing** - Use keywords naturally, not 20 times per page
2. **Duplicate Content** - Each page should have unique content
3. **Thin Content** - Pages should be 500+ words minimum
4. **Broken Links** - Check regularly and fix
5. **Slow Page Speed** - Optimize images and code
6. **Missing Mobile Optimization** - Test on mobile devices
7. **No Internal Linking** - Connect related pages
8. **Ignoring Search Console** - Check weekly for issues
9. **Not Updating Content** - Refresh old posts quarterly
10. **Buying Backlinks** - Google will penalize you

---

## 📈 Expected Timeline for Results

### Month 1-2: Foundation
- Technical SEO improvements
- Schema markup added
- Content optimization complete
- Minor ranking improvements

### Month 3-4: Momentum
- Start ranking for long-tail keywords
- Featured snippets appearing
- Traffic increases 50-100%
- Backlinks growing

### Month 5-6: Growth
- Ranking for competitive keywords
- Established topical authority
- Traffic doubles from baseline
- Multiple featured snippets

### Month 7-12: Authority
- Top 3 rankings for target keywords
- Consistent organic traffic growth
- Strong backlink profile
- Domain authority 30+

---

**Last Updated:** November 2025
**Status:** In Progress
**Next Review:** December 2025

