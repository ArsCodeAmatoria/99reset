# Seed Demo Comments

This guide will help you add demo comments with replies to your articles.

## Prerequisites

Make sure you have `DATABASE_URL` in your `.env.local` file:
```env
DATABASE_URL="your-postgres-connection-string"
```

## Steps

### 1. Run Migration (if not done already)

This adds the `parentId` field for threaded replies:

```bash
npx prisma migrate dev --name add_comment_replies
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Seed Demo Comments

```bash
npx tsx prisma/seed-comments.ts
```

This will add:
- **Coalition Strategy article**: 5 comments with threaded discussions
- **Bank Boycott article**: 3 comments about switching banks  
- **Reset Not Communism article**: 3 comments about structural distinctions

### 4. View the Comments

Restart your dev server and visit:
- http://localhost:3000/updates/coalition-strategy-who-to-align-with
- http://localhost:3000/updates/bank-boycott-cascade-effect
- http://localhost:3000/updates/reset-not-communism-structural-distinction

## Demo Comments Preview

### Coalition Strategy Article:
- Sarah Chen discussing worker co-op organizing in Toronto
  - Marcus Johnson replies about union work with faith communities
  - Sarah Chen responds about Catholic Worker movement
- David Kim asking about converting small landlords
  - Amira Hassan replies about 110% buyout strategy

### Bank Boycott Article:
- Elena Rodriguez about switching to Vancity
  - James Cooper replies about his mortgage switch
- Fatima Al-Rashid organizing Calgary campaign

### Reset Not Communism Article:
- Thomas Petrov (former Soviet Ukraine) on distinction from communism
  - Mei Lin replies about explaining to her Chinese parents
- Robert Anderson on Mondragón success

## Features Demonstrated

✅ **Threaded Replies**: Click "Reply" on any comment
✅ **Nested Display**: Replies indented with red border accent
✅ **Realistic Content**: Authentic discussions about organizing
✅ **Timestamps**: Realistic dates (Nov 12-17, 2025)
✅ **Names & Context**: Diverse commenters with real concerns

## To Add More Comments

1. Visit any article page
2. Scroll to comments section
3. Fill out the form and submit
4. Click "Reply" to respond to existing comments

## To Clear Demo Comments (Optional)

```bash
npx prisma studio
```

Then delete comments from the GUI, or run:

```sql
DELETE FROM "Comment" WHERE email LIKE '%@example.com';
```

## Troubleshooting

**Migration fails**: Make sure DATABASE_URL is correct
**Seed script errors**: Run `npm install -D tsx` first
**Comments not appearing**: Check that `approved: true` in the database

Enjoy your demo comments! 🎉

