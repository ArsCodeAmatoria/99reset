# Vercel Deployment Guide

## Quick Deploy

Your code is now on GitHub. Here's how to deploy to Vercel in under 5 minutes.

---

## Step 1: Import Project

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Find your repository: `ArsCodeAmatoria/99reset`
4. Click "Import"

Vercel will auto-detect:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

Click "Deploy" to proceed.

---

## Step 2: Environment Variables

Before the first deployment, add these environment variables:

### Required Variables

Click "Environment Variables" and add:

```
DATABASE_URL
```
Value: Your PostgreSQL connection string from Neon or Supabase
Example: `postgresql://user:password@host.region.neon.tech:5432/database?sslmode=require`

```
RESEND_API_KEY
```
Value: Your Resend API key (get from resend.com)
Example: `re_xxxxxxxxxxxxxxxxxxxxx`

```
PLAUSIBLE_DOMAIN
```
Value: Your domain for analytics
Example: `99reset.org`

```
NEXT_PUBLIC_SITE_URL
```
Value: Your production URL (use Vercel preview URL first, update after custom domain)
Example: `https://99reset.vercel.app` or `https://99reset.org`

### Important Notes

- Select "Production", "Preview", and "Development" for all variables
- DATABASE_URL should be a pooling connection for serverless
- NEXT_PUBLIC_SITE_URL must be publicly accessible (no localhost)

---

## Step 3: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Visit your preview URL (e.g., `https://99reset.vercel.app`)

### First Deployment Checklist

- [ ] Site loads successfully
- [ ] Home page displays correctly
- [ ] Navigation works
- [ ] Forms are visible on `/join`

---

## Step 4: Database Setup

After first deployment, initialize your database:

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run database migration
npm run db:push
```

### Option B: Using Neon Dashboard

1. Go to your Neon dashboard
2. Click "SQL Editor"
3. Run the Prisma schema manually (see prisma/schema.prisma)

OR

### Option C: Local then Verify

```bash
# Set DATABASE_URL in .env.local
npm run db:push

# Verify tables created
npm run db:studio
```

---

## Step 5: Test Forms

1. Go to `https://your-domain.vercel.app/join`
2. Submit each form:
   - Bank-switch pledge
   - Union drive inquiry
   - Co-op founder application
3. Check for:
   - Success toast notification
   - Email delivery (check spam folder)
   - Database entry (use Prisma Studio or Neon dashboard)

---

## Step 6: Custom Domain (Optional)

### Add Domain

1. Go to Project Settings → Domains
2. Click "Add"
3. Enter your domain (e.g., `99reset.org`)
4. Click "Add"

### Configure DNS

Vercel will provide DNS instructions. Two options:

**Option A: Nameservers (Recommended)**
- Change nameservers at your registrar to Vercel's
- Vercel manages all DNS

**Option B: CNAME Record**
- Add CNAME record: `cname.vercel-dns.com`
- Keep existing nameservers

### Update Environment Variables

After domain is verified:

1. Go to Settings → Environment Variables
2. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
3. Update `PLAUSIBLE_DOMAIN` to your custom domain
4. Redeploy (Deployments → Click "..." → Redeploy)

---

## Step 7: Enable Analytics

### Vercel Analytics (Already Enabled)

Vercel Analytics is automatically enabled. View stats:
- Dashboard → Your Project → Analytics tab

### Plausible Analytics (Optional)

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Already configured in code (uses `PLAUSIBLE_DOMAIN` env var)
4. Verify data is flowing

---

## Troubleshooting

### Build Fails

**Error: Prisma Client not generated**
- Fixed automatically (build command includes `prisma generate`)
- If persists, check logs for specific error

**Error: Module not found**
- Check all imports are correct
- Verify `package.json` has all dependencies
- Try: Settings → General → "Clear Cache and Redeploy"

**TypeScript errors**
- Should not happen (tested locally)
- Check deployment logs for specific errors
- Verify all types are correct

### Forms Not Working

**Database connection fails**
- Verify `DATABASE_URL` is correct
- Check Neon allows connections from Vercel IPs (usually automatic)
- Test connection: Deploy a test API route that queries DB

**Emails not sending**
- Check `RESEND_API_KEY` is set correctly
- Verify domain in Resend dashboard
- Check deployment logs for error messages
- Emails may take 1-2 minutes to arrive

**Forms submit but no toast**
- Check browser console for JavaScript errors
- Verify Server Actions are working (check Network tab)
- Check for client-side hydration errors

### Site is Slow

**First load slow**
- Normal for cold starts (serverless)
- Consider upgrading to Pro plan for better performance
- Enable Edge Functions (Settings → Functions)

**Images slow**
- Use `next/image` component (already implemented)
- Consider Image Optimization (automatic on Vercel)

### 404 Errors

**Pages not found**
- Verify file structure matches expected routes
- Check build logs for page generation errors
- Clear cache and redeploy

---

## Monitoring

### Check Health

After deployment, verify:

1. **Home page loads**: `https://your-domain.com`
2. **Forms work**: `https://your-domain.com/join`
3. **Plan renders**: `https://your-domain.com/plan`
4. **Chapters display**: `https://your-domain.com/chapters`
5. **OG images generate**: `https://your-domain.com/api/og`
6. **Sitemap exists**: `https://your-domain.com/sitemap.xml`
7. **Robots.txt exists**: `https://your-domain.com/robots.txt`

### Set Up Alerts

1. Go to Settings → Notifications
2. Enable:
   - Deployment failed
   - Build failed
   - Domain configuration issues

### Monitor Performance

1. Analytics → Speed Insights
2. Check Core Web Vitals
3. Monitor error rates
4. Review deployment frequency

---

## Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "feat: your feature"
git push

# Vercel automatically deploys
# Preview deployment for all branches
# Production deployment for main branch
```

### Preview Deployments

- Every branch gets a preview URL
- Test changes before merging
- Share with team for feedback

### Production Deployments

- Only `main` branch deploys to production
- Previous deployments remain accessible
- Can rollback instantly if needed

---

## Post-Deployment Checklist

- [ ] Site accessible at production URL
- [ ] All pages render correctly
- [ ] Forms submit successfully
- [ ] Emails are delivered
- [ ] Database entries created
- [ ] Analytics tracking
- [ ] Sitemap generated
- [ ] OG images rendering
- [ ] Custom domain working (if added)
- [ ] SSL certificate active (automatic)
- [ ] Lighthouse score 90+ (run test)

---

## Updating Content

### MDX Content

1. Edit `/content/plan.mdx` locally
2. Commit and push to GitHub
3. Vercel redeploys automatically
4. Changes live in 2-3 minutes

### Chapter Data

1. Edit `/app/chapters/page.tsx`
2. Update the `chapters` array
3. Commit and push
4. Auto-deploys

### Environment Variables

1. Settings → Environment Variables
2. Edit value
3. Redeploy required for changes to take effect

---

## Scaling

Your site is ready to scale. Vercel automatically handles:

- **Traffic spikes** (automatic scaling)
- **Global CDN** (assets cached worldwide)
- **Edge Functions** (faster Server Actions)
- **Image Optimization** (WebP, AVIF formats)

If traffic grows significantly:
1. Consider upgrading to Pro plan
2. Enable Edge Middleware for geo-routing
3. Add database read replicas (Neon supports this)
4. Implement ISR (Incremental Static Regeneration) for dynamic pages

---

## Support

**Vercel Issues**
- [vercel.com/support](https://vercel.com/support)
- Check status: [vercel-status.com](https://www.vercel-status.com)

**Database Issues**
- Neon: [neon.tech/docs](https://neon.tech/docs)
- Supabase: [supabase.com/docs](https://supabase.com/docs)

**Email Issues**
- Resend: [resend.com/docs](https://resend.com/docs)

**Code Issues**
- Check deployment logs in Vercel dashboard
- Open issue on GitHub
- Review `DEPLOYMENT.md` for troubleshooting

---

## Next Steps

1. Monitor first 24 hours for errors
2. Test all forms with real data
3. Share site with team for feedback
4. Run Lighthouse audit
5. Set up monitoring dashboard
6. Plan content updates (resources, updates pages)
7. Add real chapter data
8. Create downloadable media kit files

---

Your site is live. Time to build the movement.

Not welfare. Ownership.

