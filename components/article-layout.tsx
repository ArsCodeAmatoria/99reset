import React from 'react';
import { Calendar, Share2, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { Section } from './section';
import { XComments } from './x-comments';
import { Comments } from './comments';
import { getComments, getCommentCount } from '@/app/api/actions/comment';
import { getDemoComments, getDemoCommentCount } from '@/lib/demo-comments';

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  prevArticle?: RelatedArticle;
  nextArticle?: RelatedArticle;
  relatedArticles?: RelatedArticle[];
  discussionTweetUrl?: string;
  slug: string;
}

export async function ArticleLayout({ children, title, date, category, excerpt, image, prevArticle, nextArticle, relatedArticles, discussionTweetUrl, slug }: ArticleLayoutProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://99reset.vercel.app';
  const postUrl = `${siteUrl}/updates/${slug}`;

  // Fetch comments data - with fallback to demo comments if database not available
  let comments, commentCount;
  try {
    [comments, commentCount] = await Promise.all([
      getComments(slug),
      getCommentCount(slug),
    ]);
    // If no database comments, use demo
    if (comments.length === 0) {
      comments = getDemoComments(slug);
      commentCount = getDemoCommentCount(slug);
    }
  } catch (error) {
    // Database not available, use demo comments
    console.log('Using demo comments (database not connected)');
    comments = getDemoComments(slug);
    commentCount = getDemoCommentCount(slug);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Back to Updates Button */}
      <Section className="py-6 md:py-8 bg-card/30">
        <Container>
          <Link href="/updates" className="inline-flex items-center gap-2 text-textDim hover:text-accent transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Updates</span>
          </Link>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section className="py-12 md:py-20 relative overflow-hidden">
        <Container>
          <div className={`grid ${image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 md:gap-16 items-center`}>
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-mono text-accent">{category}</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">記事 (kiji)</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-balance">
                {title}
              </h1>
              <p className="text-lg text-textDim leading-relaxed">
                {excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-textDim">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{date}</span>
                </div>
                <button className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Image */}
            {image && (
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl">
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-3
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
          prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-serif prose-p:text-lg
          prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-black dark:prose-strong:text-white prose-strong:font-bold
          prose-ul:my-6 prose-ol:my-6
          prose-li:text-gray-800 dark:prose-li:text-gray-200 prose-li:my-2 prose-li:leading-relaxed
          prose-blockquote:border-l-4 prose-blockquote:border-red-600 prose-blockquote:pl-6 prose-blockquote:italic
          prose-table:border-collapse prose-table:w-full
          prose-th:border prose-th:border-gray-300 dark:prose-th:border-gray-700 prose-th:bg-gray-50 dark:prose-th:bg-gray-900 prose-th:p-3 prose-th:text-left
          prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700 prose-td:p-3">
          {children}
        </div>

        {/* Article Navigation */}
        {(prevArticle || nextArticle) && (
          <nav className="mt-16 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevArticle ? (
                <Link 
                  href={`/updates/${prevArticle.slug}`}
                  className="group p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="uppercase tracking-wider">Previous</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-black dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                    {prevArticle.title}
                  </h3>
                </Link>
              ) : <div />}
              
              {nextArticle && (
                <Link 
                  href={`/updates/${nextArticle.slug}`}
                  className="group p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-colors text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="uppercase tracking-wider">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-black dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                    {nextArticle.title}
                  </h3>
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>

      {/* X Comments Section */}
      {discussionTweetUrl && (
        <XComments
          tweetUrl={discussionTweetUrl}
          postUrl={postUrl}
          title={title}
        />
      )}

      {/* Website Comments Section */}
      <Comments
        articleSlug={slug}
        initialComments={comments}
        commentCount={commentCount}
      />

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <Section className="py-16 bg-gray-50 dark:bg-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-black dark:text-white mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-800">
                Recent & Suggested Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/updates/${article.slug}`}
                    className="group"
                  >
                    {article.image && (
                      <div className="mb-4 overflow-hidden border-2 border-gray-200 dark:border-gray-800 group-hover:border-red-600 transition-colors">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
                        <span className="text-red-600 font-bold">{article.category}</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500 dark:text-gray-400">{article.date}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-black dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}

// Article Components - Clean Magazine Style
export function ColoredSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 py-8 px-10 bg-gray-50 dark:bg-gray-900 border-l-4 border-red-600">
      {children}
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 py-6 px-8 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600">
      <div className="text-xl font-serif italic text-gray-900 dark:text-gray-100 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function ArticleCallout({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'success' | 'warning' }) {
  const styles = {
    info: 'bg-gray-50 dark:bg-gray-900 border-gray-400 dark:border-gray-600',
    success: 'bg-gray-50 dark:bg-gray-900 border-black dark:border-white',
    warning: 'bg-red-50 dark:bg-red-950/20 border-red-600',
  };

  return (
    <div className={`my-8 px-8 py-6 border-l-4 ${styles[type]}`}>
      <div className="text-base leading-loose font-serif text-gray-800 dark:text-gray-200">
        {children}
      </div>
    </div>
  );
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 py-8 border-y border-gray-200 dark:border-gray-800 not-prose">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-serif font-bold text-red-600 mb-2">{value}</div>
      <div className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}

export function JapaneseHeading({ japanese, english }: { japanese: string; english: string }) {
  return (
    <div className="flex items-center gap-3 my-8 not-prose">
      <span className="text-red-600 font-bold text-sm uppercase tracking-wider">{japanese}</span>
      <span className="text-gray-400">·</span>
      <span className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{english}</span>
    </div>
  );
}
