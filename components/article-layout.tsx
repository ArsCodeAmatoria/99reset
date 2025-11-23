import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}

export function ArticleLayout({ children, title, date, category, excerpt, image }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Back Button */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/updates" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Category & Date */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-wider mb-6">
          <span className="font-bold text-red-600">{category}</span>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
            <Calendar className="h-3.5 w-3.5" />
            <time>{date}</time>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black dark:text-white leading-tight mb-6">
          {title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-serif mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          {excerpt}
        </p>

        {/* Featured Image */}
        {image && (
          <div className="mb-12">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

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
      </article>
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
