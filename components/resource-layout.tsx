"use client";

import { ReactNode } from "react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

interface ResourceLayoutProps {
  title: string;
  category: string;
  description: string;
  video: string;
  difficulty?: string;
  timeframe?: string;
  impact?: string;
  children: ReactNode;
}

export function ResourceLayout({
  title,
  category,
  description,
  video,
  difficulty,
  timeframe,
  impact,
  children,
}: ResourceLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-8 pb-12 border-b border-border">
        <Container>
          <div className="mb-6">
            <Link 
              href="/resources" 
              className="inline-flex items-center gap-2 text-sm text-textDim hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs font-mono text-accent">リソース</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-xs text-textDim">{category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                {title}
              </h1>

              <p className="text-lg text-textDim leading-relaxed">
                {description}
              </p>

              {/* Meta Info */}
              {(difficulty || timeframe || impact) && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {difficulty && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-textDim">Difficulty:</span>
                      <span className="text-sm font-bold text-accent">{difficulty}</span>
                    </div>
                  )}
                  {timeframe && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-textDim">Timeframe:</span>
                      <span className="text-sm font-bold text-accent">{timeframe}</span>
                    </div>
                  )}
                  {impact && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-textDim">Impact:</span>
                      <span className="text-sm font-bold text-accent">{impact}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right: Video */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-lg">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Section - Magazine Style */}
      <Section className="py-20 bg-bg">
        <article className="max-w-3xl mx-auto px-6">
          {/* Optimized for reading: 65-75 char line length */}
          <div className="prose prose-xl dark:prose-invert mx-auto
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
            prose-h2:border-b-2 prose-h2:border-accent/20 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-accent
            prose-p:text-lg prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-text
            prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
            prose-strong:text-text prose-strong:font-bold prose-strong:text-accent
            prose-ul:my-8 prose-ul:space-y-3 prose-li:text-lg prose-li:leading-relaxed prose-li:pl-2
            prose-ol:my-8 prose-ol:space-y-3 prose-ol:pl-6
            prose-code:text-accent prose-code:bg-accent/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-card prose-pre:border prose-pre:border-border
            prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic
            prose-table:border-collapse prose-table:w-full prose-table:my-8
            prose-thead:border-b-2 prose-thead:border-accent
            prose-th:text-left prose-th:font-bold prose-th:text-base prose-th:py-4 prose-th:px-4
            prose-td:py-4 prose-td:px-4 prose-td:border-b prose-td:border-border
            prose-tr:transition-colors hover:prose-tr:bg-card/50
            prose-hr:border-border prose-hr:my-12
            max-w-none">
            {children}
          </div>
        </article>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 border-t border-border bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border">
              <span className="text-sm font-mono text-accent bagel-fat-one-regular">実行</span>
              <div className="h-3 w-px bg-border" />
              <span className="text-xs text-textDim">Take Action</span>
            </div>
            
            <h2 className="text-3xl font-display font-bold">
              Ready to Build Power?
            </h2>
            <p className="text-lg text-textDim leading-relaxed">
              These tools work best when used collectively. Connect with other organizers and 
              coordinate campaigns for maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/resources" className="btn-secondary inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                More Resources
              </Link>
              <Link href="/plan" className="btn-primary inline-flex items-center gap-2">
                Read the Full Plan
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

// Reusable components for resource content
export function ResourceSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`my-12 ${className}`}>
      {children}
    </section>
  );
}

export function ResourceCallout({ children, type = "info" }: { children: ReactNode; type?: "info" | "warning" | "success" }) {
  const colors = {
    info: "border-accent bg-accent/5",
    warning: "border-warn bg-warn/5",
    success: "border-success bg-success/5",
  };
  
  const icons = {
    info: "💡",
    warning: "⚠️",
    success: "✓",
  };

  return (
    <Card className={`p-8 border-l-4 ${colors[type]} my-8 shadow-sm`}>
      <div className="flex gap-4">
        <div className="text-2xl flex-shrink-0">{icons[type]}</div>
        <div className="prose dark:prose-invert max-w-none prose-p:text-base prose-p:leading-relaxed prose-p:mb-4">
          {children}
        </div>
      </div>
    </Card>
  );
}

export function ResourceStats({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 not-prose">
      {children}
    </div>
  );
}

export function ResourceStat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-6 text-center border-l-4 border-accent hover:shadow-lg transition-shadow">
      <div className="text-4xl font-bold text-accent mb-3">{value}</div>
      <div className="text-sm text-textDim font-medium uppercase tracking-wide">{label}</div>
    </Card>
  );
}

