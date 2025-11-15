# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database (Development)

**Option A: Use Neon (Recommended)**
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string

**Option B: Local PostgreSQL**
```bash
# Install PostgreSQL locally
# Create database: createdb 99reset
```

### 3. Configure Environment
```bash
# Create .env.local file
cat > .env.local << EOF
DATABASE_URL="postgresql://user:password@localhost:5432/99reset"
RESEND_API_KEY=""
PLAUSIBLE_DOMAIN="99reset.org"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
EOF
```

### 4. Initialize Database
```bash
npm run db:push
```

### 5. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📝 Test the Forms

### Without Email (Development)
Forms will work but emails won't send (check console for warnings).

### With Email (Optional)
1. Get free API key at [resend.com](https://resend.com)
2. Add to `.env.local`: `RESEND_API_KEY=re_xxx`
3. Restart dev server

---

## 🏗 Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 📦 Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Or push to GitHub and import to Vercel dashboard
```

---

## 🔍 Check Your Work

- **Home:** http://localhost:3000
- **Plan:** http://localhost:3000/plan
- **Join Forms:** http://localhost:3000/join
- **Chapters:** http://localhost:3000/chapters

---

## ⚡️ Next Steps

1. **Customize Content**
   - Edit `/content/plan.mdx`
   - Update chapter data in `/app/chapters/page.tsx`
   - Add resources/updates

2. **Update Copy**
   - Replace placeholder chapter info
   - Add real stat numbers
   - Customize emails in `/lib/mail.ts`

3. **Deploy**
   - See `DEPLOYMENT.md` for full guide
   - Set up production database
   - Configure email sending

---

## 💡 Common Issues

**Database connection fails:**
```bash
# Check your DATABASE_URL is correct
npm run db:studio
# Should open Prisma Studio
```

**Build fails:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Emails not sending:**
- Check RESEND_API_KEY is set
- Verify domain in Resend dashboard
- Look for errors in console

---

## 📚 Full Documentation

- **README.md** — Overview and tech stack
- **DEPLOYMENT.md** — Production deployment guide
- **CONTRIBUTING.md** — How to contribute
- **PROJECT_SUMMARY.md** — Complete feature list

---

**Ready to build the movement? Let's go. 🔥**

