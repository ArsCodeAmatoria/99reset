'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { MessageSquare, ExternalLink } from 'lucide-react';

interface XCommentsProps {
  tweetUrl: string;      // The URL of the tweet that serves as the discussion thread
  postUrl: string;       // The canonical URL of the blog post
  title: string;         // Blog post title
}

/**
 * XComments Component
 * 
 * Integrates X (Twitter) as the comment system for blog posts.
 * 
 * HOW TO USE:
 * 
 * 1. For each article, create a discussion tweet on X:
 *    - Tweet format: "New article: [TITLE] - Discuss below 👇"
 *    - Include the article URL in the tweet
 *    - Copy the tweet URL (e.g., https://x.com/username/status/1234567890)
 * 
 * 2. Add the tweet URL to the article metadata in lib/articles.ts:
 *    discussionTweetUrl: 'https://x.com/username/status/1234567890'
 * 
 * 3. Set NEXT_PUBLIC_SITE_URL in your .env.local:
 *    NEXT_PUBLIC_SITE_URL=https://99reset.vercel.app
 * 
 * 4. The component will:
 *    - Embed the discussion tweet
 *    - Show a "Reply on X" button
 *    - Load all replies in the thread
 */
export function XComments({ tweetUrl, postUrl, title }: XCommentsProps) {
  // Reload X widgets when the tweet URL changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, [tweetUrl]);

  // Create the X intent URL for replying
  // Format: Title + blank line + URL (so X fetches the card preview)
  const tweetText = `${title}\n\n${postUrl}`;
  const replyIntentUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  return (
    <>
      {/* Load X widget script */}
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />

      <section className="max-w-4xl mx-auto px-6 py-16 border-t-2 border-gray-200 dark:border-gray-800">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-serif font-bold text-black dark:text-white">
                Comments on X
              </h2>
            </div>
            
            {/* Reply on X Button */}
            <a
              href={replyIntentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-colors"
            >
              <span>Reply on X</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Join the discussion on X. All comments are public and part of the thread below.
          </p>

          {/* Embedded Tweet Thread */}
          <div className="mt-8">
            <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
              <a href={tweetUrl}>View the discussion on X</a>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

