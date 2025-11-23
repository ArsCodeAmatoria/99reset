# Comments System Setup Guide

The site now has a full-featured comment system using Next.js Server Actions + Prisma + PostgreSQL.

## Architecture

- **Database**: PostgreSQL via Prisma ORM
- **Server Actions**: Form handling without API routes
- **Real-time**: Auto-revalidates on new comments
- **Moderation**: Built-in approval system (auto-approved by default)

## Setup Instructions

### 1. Run Database Migration

```bash
npx prisma migrate dev --name add_comments
```

This creates the `Comment` table with:
- `id`: Unique identifier
- `articleSlug`: Links comment to article
- `name`: Commenter name (required)
- `email`: Optional email for notifications
- `content`: Comment text (up to 2000 chars)
- `approved`: Moderation flag (true = visible)
- `createdAt`: Timestamp

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Deploy to Production

When deploying to Vercel:

1. **Add DATABASE_URL** to your Vercel project environment variables
2. **Run migration** in production:
   ```bash
   npx prisma migrate deploy
   ```

## Features

### ✅ Comment Posting
- Name (required)
- Email (optional)
- Content (10-2000 characters)
- Real-time validation
- Auto-refresh on submit

### ✅ Comment Display
- Shows all approved comments
- Sorted by newest first
- Shows comment count
- Formatted dates
- Empty state for no comments

### ✅ Moderation
- All comments auto-approved (change in `comment.ts`)
- Can add manual approval later
- Comments filtered by `approved: true`

### ✅ Magazine Design
- Black, white, red, gray colors
- Clean borders and spacing
- Serif fonts for readability
- Responsive layout

## File Structure

```
prisma/
  └── schema.prisma          # Comment model definition

app/api/actions/
  └── comment.ts             # Server actions (create, fetch)

components/
  ├── comments.tsx           # Comment form + display
  └── article-layout.tsx     # Integration point

```

## Comment Flow

1. **User fills form** → Client-side validation
2. **Form submits** → Server Action (`createComment`)
3. **Validation** → Zod schema check
4. **Save to DB** → Prisma creates record
5. **Revalidate** → Next.js updates page
6. **Show comment** → Appears instantly

## Moderation (Optional)

To enable manual approval:

In `app/api/actions/comment.ts`, change:
```typescript
approved: true,  // Auto-approve
```
to:
```typescript
approved: false, // Require approval
```

Then create an admin panel to approve comments.

## Email Notifications (Future)

The `email` field is optional but stored for future features:
- Reply notifications
- Mention alerts
- Comment threads

## Anti-Spam (Future Enhancements)

Consider adding:
- Rate limiting (1 comment per 5 minutes)
- CAPTCHA for anonymous users
- Link detection
- Profanity filter
- IP tracking

## Testing Locally

1. **Start dev server**: `npm run dev`
2. **Go to any article**: `/updates/[slug]`
3. **Scroll to comments section**
4. **Post a test comment**
5. **Refresh to see it appear**

## Database Management

### View comments:
```bash
npx prisma studio
```

### Delete test comments:
```sql
DELETE FROM "Comment" WHERE email LIKE '%test%';
```

### Get comment stats:
```sql
SELECT articleSlug, COUNT(*) as count
FROM "Comment"
WHERE approved = true
GROUP BY articleSlug
ORDER BY count DESC;
```

## Styling

Comments section follows the magazine aesthetic:
- Serif fonts for content
- Red accents for interactive elements
- Gray borders for structure
- White/black backgrounds
- Minimal, clean design

## Order of Appearance

1. Article content
2. Navigation (prev/next)
3. **X Comments** (if tweet URL set)
4. **Website Comments** (always visible)
5. Related articles

## Support

- Comments are stored permanently in PostgreSQL
- All timestamps in UTC
- Comments paginated (coming soon)
- Search functionality (coming soon)

