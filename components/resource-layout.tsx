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

      {/* Content Section */}
      <Section className="py-16">
        <Container>
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            {children}
          </article>
        </Container>
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
    info: "border-accent/20 bg-accent/5",
    warning: "border-warn/20 bg-warn/5",
    success: "border-success/20 bg-success/5",
  };

  return (
    <Card className={`p-6 border-l-4 ${colors[type]} my-6`}>
      <div className="prose dark:prose-invert max-w-none">
        {children}
      </div>
    </Card>
  );
}

export function ResourceStats({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {children}
    </div>
  );
}

export function ResourceStat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-6 text-center border-l-4 border-accent">
      <div className="text-3xl font-bold text-accent mb-2">{value}</div>
      <div className="text-sm text-textDim">{label}</div>
    </Card>
  );
}

