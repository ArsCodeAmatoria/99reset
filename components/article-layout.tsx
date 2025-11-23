import React from 'react';
import { Container } from './container';
import { Section } from './section';
import { Card } from './card';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';
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
    <>
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
      <Section className="py-12 md:py-20 bg-card/30">
        <Container>
          <article className="max-w-2xl mx-auto prose dark:prose-invert prose-lg prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-2 prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </Container>
      </Section>
    </>
  );
}

// Reusable article components
export function ColoredSection({ children, color = 'dark' }: { children: React.ReactNode; color?: 'dark' | 'darker' | 'accent' }) {
  const styles = {
    dark: 'bg-card/50 border-l-4 border-border',
    darker: 'bg-card border-l-4 border-border',
    accent: 'bg-accent/5 border-l-4 border-accent',
  };

  return (
    <div className={`px-6 py-6 my-8 rounded-r-lg ${styles[color]}`}>
      {children}
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-6 bg-accent/10 border-l-4 border-accent rounded-r-lg">
      <div className="text-lg font-medium text-accent leading-relaxed">{children}</div>
    </div>
  );
}

export function ArticleCallout({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'success' | 'warning' }) {
  const styles = {
    info: 'bg-blue-100 dark:bg-blue-950/30 border-blue-500 text-blue-900 dark:text-blue-100',
    success: 'bg-green-100 dark:bg-green-950/30 border-green-500 text-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 dark:bg-yellow-950/30 border-yellow-500 text-yellow-900 dark:text-yellow-100',
  };

  return (
    <div className={`my-8 p-6 border-l-4 rounded-r-lg ${styles[type]}`}>
      {children}
    </div>
  );
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 not-prose">
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-6 bg-card border-l-4 border-accent rounded-r-lg hover:shadow-lg transition-shadow">
      <div className="text-3xl font-display font-bold text-accent mb-2">{value}</div>
      <div className="text-sm text-textDim leading-snug">{label}</div>
    </div>
  );
}

export function JapaneseHeading({ japanese, english }: { japanese: string; english: string }) {
  return (
    <div className="flex items-center gap-3 my-6 not-prose">
      <span className="text-2xl font-japaneseFat text-accent">{japanese}</span>
      <span className="text-lg text-textDim font-mono">· {english}</span>
    </div>
  );
}

