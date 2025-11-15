# Deployment Guide

## Quick Start (Vercel)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 99% Reset website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Environment Variables**
   Add these in Vercel dashboard → Settings → Environment Variables:
   ```
   DATABASE_URL=postgresql://user:pass@host:5432/db
   RESEND_API_KEY=re_xxxxxxxxxxxx
   PLAUSIBLE_DOMAIN=99reset.org
   NEXT_PUBLIC_SITE_URL=https://99reset.org
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Get your production URL

## Database Setup (Neon)

1. **Create Database**
   - Go to [neon.tech](https://neon.tech)
   - Create new project
   - Copy connection string

2. **Run Migration**
   ```bash
   # Set DATABASE_URL in .env.local
   npm run db:push
   ```

3. **Verify**
   ```bash
   npm run db:studio
   ```

## Email Setup (Resend)

1. **Sign up**
   - Go to [resend.com](https://resend.com)
   - Add your sending domain
   - Verify DNS records

2. **Get API Key**
   - Dashboard → API Keys → Create
   - Add to environment variables

3. **Test**
   - Submit a form on `/join`
   - Check email delivery

## Custom Domain

1. **Add Domain in Vercel**
   - Project Settings → Domains
   - Add your domain (e.g., 99reset.org)

2. **Update DNS**
   - Point your domain to Vercel's nameservers
   - Or add CNAME record

3. **Update Environment**
   ```
   NEXT_PUBLIC_SITE_URL=https://99reset.org
   PLAUSIBLE_DOMAIN=99reset.org
   ```

## Analytics Setup

### Vercel Analytics
- Automatically enabled on Vercel
- No configuration needed

### Plausible
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain (99reset.org)
3. Set `PLAUSIBLE_DOMAIN` environment variable
4. Redeploy

## Monitoring

### Health Checks
- Home: https://99reset.org
- Forms: https://99reset.org/join
- Plan: https://99reset.org/plan

### Database
- Monitor connections in Neon dashboard
- Set up alerts for quota limits

### Email
- Check delivery rates in Resend dashboard
- Monitor bounce/spam rates

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Database Connection Issues
- Check DATABASE_URL is correct
- Verify IP allowlist in Neon (allow all for Vercel)
- Test connection: `npm run db:studio`

### Email Not Sending
- Verify RESEND_API_KEY is set
- Check domain verification in Resend
- Look for errors in Vercel logs

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
git commit -am "Update dependencies"
git push
```

### Database Backups
- Neon provides automatic backups
- Export manually: Prisma Studio → Export

### Monitor Performance
- Vercel Analytics → Speed Insights
- Check Lighthouse scores monthly
- Monitor Core Web Vitals

## Scaling Considerations

### Database
- Neon scales automatically
- Monitor query performance
- Add indexes as needed

### Forms (High Volume)
- Consider rate limiting
- Add queue system (e.g., Inngest)
- Implement CAPTCHA if spam issues

### Static Assets
- Images: Use Next.js Image optimization
- Fonts: Already optimized with next/font
- Consider CDN for large files

## Security Checklist

- ✅ Environment variables in Vercel (not in code)
- ✅ HTTPS enforced automatically
- ✅ Database credentials secure
- ✅ API keys rotated regularly
- ✅ CORS configured properly
- ✅ Rate limiting on forms (future)
- ✅ Input validation (Zod schemas)

## Post-Deployment

1. **Test All Forms**
   - Pledge form → Check database + email
   - Union drive form → Check database + email
   - Co-op form → Check database + email
   - Chapter application → Check database

2. **Verify SEO**
   - Check robots.txt: https://99reset.org/robots.txt
   - Check sitemap: https://99reset.org/sitemap.xml
   - Test OG image: https://99reset.org/api/og

3. **Accessibility Audit**
   - Run Lighthouse (aim for 90+ accessibility)
   - Test keyboard navigation
   - Verify screen reader compatibility

4. **Analytics Verification**
   - Visit site and check Vercel Analytics
   - Check Plausible dashboard
   - Verify events are tracking

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Neon: [neon.tech/docs](https://neon.tech/docs)
- Resend: [resend.com/docs](https://resend.com/docs)

For code issues:
- Open issue on GitHub
- Email: tech@99reset.org

