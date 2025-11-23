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
          <article className="max-w-4xl mx-auto prose dark:prose-invert">
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
    dark: 'bg-card/50 border-y border-border',
    darker: 'bg-card border-y border-border',
    accent: 'bg-accent/5 border-y border-accent/20',
  };

  return (
    <div className={`-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 my-8 ${styles[color]}`}>
      {children}
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg bg-accent/10 border-2 border-accent/30 p-6">
      <div className="font-semibold text-accent">{children}</div>
    </div>
  );
}

export function ArticleCallout({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'success' | 'warning' }) {
  const styles = {
    info: 'bg-blue-100 dark:bg-blue-950/30 border-blue-300 dark:border-blue-900/50 text-blue-900 dark:text-blue-100',
    success: 'bg-green-100 dark:bg-green-950/30 border-green-300 dark:border-green-900/50 text-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 dark:bg-yellow-950/30 border-yellow-300 dark:border-yellow-900/50 text-yellow-900 dark:text-yellow-100',
  };

  return (
    <div className={`my-6 rounded-lg border-2 p-6 ${styles[type]}`}>
      {children}
    </div>
  );
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Card className="p-6">
      <div className="text-3xl font-display font-bold text-accent mb-2">{value}</div>
      <div className="text-sm text-textDim">{label}</div>
    </Card>
  );
}

export function JapaneseHeading({ japanese, english }: { japanese: string; english: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
      <span className="font-japanese-fat text-accent">{japanese}</span>
      <span className="text-textDim"> · {english}</span>
    </h2>
  );
}

