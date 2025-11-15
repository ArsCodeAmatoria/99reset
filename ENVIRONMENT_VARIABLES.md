# Environment Variables Configuration

This document describes all environment variables used in the 99% Reset application.

## Required Variables

### Database
```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```
PostgreSQL database connection string (use Neon, Supabase, or similar).

### Email Service
```env
RESEND_API_KEY="re_xxxxx"
```
API key from [Resend](https://resend.com) for transactional emails.

### Site Configuration
```env
NEXT_PUBLIC_SITE_URL="https://99reset.org"
```
Your production domain URL (required for SEO, OG images, sitemaps).

## Analytics (Recommended)

### Plausible Analytics
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="99reset.org"
```
Privacy-friendly, GDPR-compliant analytics. Recommended primary analytics platform.

**Setup:**
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain: `99reset.org`
3. Copy the domain name to this variable
4. No additional configuration needed

**Features:**
- No cookies
- GDPR compliant
- Lightweight script
- Real-time dashboard
- Custom events supported

### Google Analytics (Optional)
```env
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```
Google Analytics 4 measurement ID (only if you need additional tracking features).

**Setup:**
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with `G-`)
3. Add to environment variables
4. Configured with:
   - Anonymous IP tracking
   - Cookie consent flags
   - Page view tracking
   - Custom event tracking

**When to use:**
- Need advanced funnel analysis
- Want demographic data
- Require Google Ads integration
- Need e-commerce tracking (future)

## Search Engine Verification (Optional)

### Google Search Console
```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-google-verification-code"
```

**Setup:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://99reset.org`
3. Choose "HTML tag" method
4. Copy the content value from the meta tag
5. Add to `lib/seo.ts` verification object

**Benefits:**
- Monitor search performance
- Submit sitemaps
- Check indexing status
- View search queries

### Bing Webmaster Tools
```env
NEXT_PUBLIC_BING_SITE_VERIFICATION="your-bing-verification-code"
```

**Setup:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site: `https://99reset.org`
3. Choose meta tag verification
4. Copy verification code
5. Add to `lib/seo.ts` verification object

### Yandex Webmaster
```env
NEXT_PUBLIC_YANDEX_SITE_VERIFICATION="your-yandex-verification-code"
```
For Russian/Eastern European audience reach.

## Vercel Deployment

When deploying to Vercel:

1. Go to Project Settings → Environment Variables
2. Add each variable with appropriate scope:
   - **Production**: Live site variables
   - **Preview**: Test/staging values (optional)
   - **Development**: Local dev values (optional)

3. Redeploy after adding variables:
   ```bash
   vercel --prod
   ```

## Local Development

Create a `.env.local` file (never commit this):

```env
# Copy from .env.example and fill in your values
DATABASE_URL="postgresql://..."
RESEND_API_KEY="re_..."
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="99reset.org"
# NEXT_PUBLIC_GA_ID="G-..."  # Optional
```

## Security Notes

⚠️ **Never commit sensitive keys to git**
- `.env.local` is gitignored
- Use Vercel for production secrets
- Rotate keys if accidentally exposed

✅ **Public variables** (prefixed with `NEXT_PUBLIC_`)
- Safe to expose to browser
- Used for client-side features
- Still keep out of git

🔒 **Private variables** (no prefix)
- Server-side only
- Never exposed to browser
- Used for API keys, database URLs

## Verification Checklist

Before deploying:

- [ ] `DATABASE_URL` set in Vercel
- [ ] `RESEND_API_KEY` set in Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` = `https://99reset.org`
- [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `99reset.org`
- [ ] Analytics working (check Plausible dashboard)
- [ ] Test email sending
- [ ] Check sitemap: `https://99reset.org/sitemap.xml`
- [ ] Check robots.txt: `https://99reset.org/robots.txt`
- [ ] Verify OG images: `https://99reset.org/api/og`

