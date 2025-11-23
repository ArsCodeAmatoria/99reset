# X (Twitter) Comments Integration Guide

This site uses X (Twitter) as the comment system for articles. Instead of storing comments in a database, each article links to a discussion thread on X.

## How It Works

1. **Discussion Tweets**: Each article can have an associated X tweet that serves as the discussion thread
2. **Embedded Comments**: The tweet and its replies are embedded directly in the article page
3. **Reply on X**: Users can click a button to reply directly on X with the article pre-linked

## Setup Instructions

### 1. Configure Environment Variable

Add to your `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://99reset.vercel.app
```

This is used to generate the canonical URL for each article.

### 2. Create a Discussion Tweet for an Article

When you publish a new article, create a tweet on X:

**Tweet Format Example:**
```
New article: The 99% Reset's Coalition Strategy 🎯

Who to align with in the fight for economic democracy.

Read: https://99reset.vercel.app/updates/coalition-strategy-who-to-align-with

Discuss below 👇
```

**Tips:**
- Keep it engaging and invite discussion
- Include the article URL
- Add relevant hashtags (#99Reset, #DemocraticSocialism, etc.)
- Pin it or keep it accessible

### 3. Add the Tweet URL to Your Article

1. Copy the tweet URL (e.g., `https://x.com/99reset/status/1234567890`)

2. Open `lib/articles.ts`

3. Find your article in the `articles` array

4. Update the `discussionTweetUrl` field:

```typescript
{
  slug: 'coalition-strategy-who-to-align-with',
  title: 'The 99% Reset\'s Coalition Strategy: Who to Align With — And Why',
  // ... other fields
  discussionTweetUrl: 'https://x.com/99reset/status/1234567890', // Add this
},
```

4. Commit and push your changes

### 4. The Comments Section Will Automatically Appear

Once a `discussionTweetUrl` is set, the article page will automatically display:
- A "Comments on X" section
- The embedded tweet thread with all replies
- A "Reply on X" button for users to join the conversation

## Component Architecture

### Files Modified

1. **`components/x-comments.tsx`**: Reusable X comments component
2. **`lib/articles.ts`**: Article metadata including `discussionTweetUrl`
3. **`components/article-layout.tsx`**: Integrated X comments section
4. **All article page files**: Updated to pass tweet URLs

### How the XComments Component Works

```typescript
<XComments
  tweetUrl="https://x.com/99reset/status/1234567890"  // The discussion tweet
  postUrl="https://99reset.vercel.app/updates/slug"    // The article URL
  title="Article Title"                                 // Used for reply intent
/>
```

The component:
1. Loads the X widget script (`platform.twitter.com/widgets.js`)
2. Embeds the tweet using X's embed format
3. Creates a "Reply on X" button with pre-filled content
4. Automatically reloads when the tweet URL changes

## Styling

The comments section follows your site's magazine aesthetic:
- Black, white, red, and gray colors
- Clean borders and spacing
- Serif fonts for headings
- Responsive layout

## Benefits of X Comments

✅ **No Database**: All comments live on X, no storage needed
✅ **Social Engagement**: Drives traffic to your X account
✅ **Easy Moderation**: Use X's moderation tools
✅ **Discoverable**: Comments are public and searchable on X
✅ **Simple Setup**: Just add a tweet URL per article

## Optional: Disable Comments for an Article

Simply set `discussionTweetUrl: undefined` (or omit it) in `lib/articles.ts`. The comments section won't appear.

## Future Enhancements

Potential improvements:
- Auto-post tweets when articles are published
- Display comment count from X API
- Show popular replies first
- Add X profile card for article authors

