import { promises as fs } from "fs";
import path from "path";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MDXRenderer } from "@/components/mdx";
import type { Metadata } from "next";
import { Target, Users, Building2, Scale, TrendingUp, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "The Plan — Ninety Nine",
  description: "A comprehensive strategy for democratic socialism: finance, labour, ownership, policy. Building collective power from the ground up.",
};

async function getPlanContent() {
  const filePath = path.join(process.cwd(), "content", "plan.mdx");
  const fileContent = await fs.readFile(filePath, "utf8");
  return fileContent;
}

// Table of Contents component
function TableOfContents() {
  const sections = [
    { id: "finance", label: "金融 Finance", icon: Target },
    { id: "ownership", label: "所有権 Ownership", icon: Building2 },
    { id: "labour", label: "労働 Labour", icon: Users },
    { id: "policy", label: "政策 Policy", icon: Scale },
    { id: "kpis", label: "指標 KPIs", icon: TrendingUp },
  ];

  return (
    <nav className="sticky top-24 space-y-6" aria-label="Table of contents">
      <Card className="p-6 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
          <span className="text-xs font-mono text-accent">目次</span>
          <div className="h-3 w-px bg-accent/30" />
          <span className="text-xs text-textDim">mokuji · contents</span>
        </div>
        
        <ul className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-3 text-sm text-textDim hover:text-accent transition-all py-2 px-3 rounded-lg hover:bg-accent/5 group"
                >
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>{section.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Card>

      <Card className="p-6 space-y-4">
        <h4 className="text-sm font-display font-bold text-text flex items-center gap-2">
          <Zap className="h-4 w-4 text-accent" />
          Quick Actions
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a 
              href="/resources/bank-switch-toolkit" 
              className="text-textDim hover:text-accent transition-colors block py-1.5 px-2 rounded hover:bg-accent/5"
            >
              → Bank Switch Guide
            </a>
          </li>
          <li>
            <a 
              href="/resources/union-organizing-101" 
              className="text-textDim hover:text-accent transition-colors block py-1.5 px-2 rounded hover:bg-accent/5"
            >
              → Union Organizing
            </a>
          </li>
          <li>
            <a 
              href="/resources/worker-coop-formation-guide" 
              className="text-textDim hover:text-accent transition-colors block py-1.5 px-2 rounded hover:bg-accent/5"
            >
              → Start a Co-op
            </a>
          </li>
          <li>
            <a 
              href="/resources/community-land-trust-primer" 
              className="text-textDim hover:text-accent transition-colors block py-1.5 px-2 rounded hover:bg-accent/5"
            >
              → CLT Primer
            </a>
          </li>
        </ul>
      </Card>
    </nav>
  );
}

export default async function PlanPage() {
  const content = await getPlanContent();

  return (
    <>
      {/* Hero Section with Video */}
      <Section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/plan.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/80 to-bg" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Japanese Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-mono text-accent">計画</span>
              <div className="h-4 w-px bg-accent/30" />
              <span className="text-sm text-textDim">keikaku · the plan</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              The <span className="text-accent">99% Reset</span> Plan
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-textDim leading-relaxed max-w-3xl mx-auto">
              A comprehensive strategy for building democratic power through finance, labour, ownership, and policy.
            </p>

            {/* Key Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <Card className="p-6 text-center space-y-2 backdrop-blur-sm bg-card/80">
                <div className="text-3xl font-display font-bold text-accent">20 Years</div>
                <div className="text-sm text-textDim">To reshape the economy</div>
              </Card>
              <Card className="p-6 text-center space-y-2 backdrop-blur-sm bg-card/80">
                <div className="text-3xl font-display font-bold text-accent">4 Fronts</div>
                <div className="text-sm text-textDim">Coordinated action</div>
              </Card>
              <Card className="p-6 text-center space-y-2 backdrop-blur-sm bg-card/80">
                <div className="text-3xl font-display font-bold text-accent">1 Goal</div>
                <div className="text-sm text-textDim">Economic democracy</div>
              </Card>
            </div>

            {/* Japanese Proverb Card */}
            <Card className="p-6 backdrop-blur-sm bg-card/90 text-left relative overflow-hidden max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-red-600" />
              <p className="text-xl font-display font-bold text-text mb-2 pl-4">
                革命は一日にして成らず
              </p>
              <p className="text-sm font-mono text-textDim pl-4">kakumei wa ichinichi ni shite narazu</p>
              <p className="text-base text-textDim italic mt-2 pl-4">
                &quot;Revolution is not built in a day.&quot;
              </p>
              <p className="text-sm text-textDim mt-1 pl-4">
                Patient, strategic organizing creates lasting systemic change. This is a generational project.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Overview Section */}
      <Section className="py-20 bg-gradient-to-br from-accent/5 to-bg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">概要</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">gaiyō · overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Four Pillars of the <span className="text-accent">Reset</span>
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                We don&apos;t protest for change—we become the change through coordinated action on multiple fronts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Finance */}
              <Card className="group p-8 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <a href="#finance" className="text-accent hover:underline text-sm font-mono">
                    → 詳細
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold">Finance · 金融</h3>
                <p className="text-textDim leading-relaxed">
                  Starve extractive banks by moving deposits to democratic credit unions. Build a Citizens&apos; Wealth Fund to distribute dividends.
                </p>
                <div className="pt-2 text-sm font-mono text-accent">
                  Target: $150B moved in 10 years
                </div>
              </Card>

              {/* Ownership */}
              <Card className="group p-8 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="h-7 w-7 text-accent" />
                  </div>
                  <a href="#ownership" className="text-accent hover:underline text-sm font-mono">
                    → 詳細
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold">Ownership · 所有権</h3>
                <p className="text-textDim leading-relaxed">
                  Create worker cooperatives and Community Land Trusts to democratize ownership of businesses and housing.
                </p>
                <div className="pt-2 text-sm font-mono text-accent">
                  Target: 2,000 co-ops, 50,000 CLT homes
                </div>
              </Card>

              {/* Labour */}
              <Card className="group p-8 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <a href="#labour" className="text-accent hover:underline text-sm font-mono">
                    → 詳細
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold">Labour · 労働</h3>
                <p className="text-textDim leading-relaxed">
                  Launch strategic unionization drives in tech, retail, care work, and logistics. Restore workers&apos; share of GDP.
                </p>
                <div className="pt-2 text-sm font-mono text-accent">
                  Target: 1,200 union drives, +5% labour share
                </div>
              </Card>

              {/* Policy */}
              <Card className="group p-8 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Scale className="h-7 w-7 text-accent" />
                  </div>
                  <a href="#policy" className="text-accent hover:underline text-sm font-mono">
                    → 詳細
                  </a>
                </div>
                <h3 className="text-2xl font-display font-bold">Policy · 政策</h3>
                <p className="text-textDim leading-relaxed">
                  Win wealth taxes, labour reforms, and co-op subsidies at municipal, provincial, and federal levels.
                </p>
                <div className="pt-2 text-sm font-mono text-accent">
                  Target: $10B annual wealth fund revenue
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content with TOC */}
      <Section className="py-20 border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            {/* Sidebar TOC - hidden on mobile */}
            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>

            {/* Main content */}
            <article className="max-w-4xl">
              <MDXRenderer source={content} />
            </article>
          </div>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section className="py-20 bg-gradient-to-br from-accent/10 to-bg border-t border-accent/20">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-mono text-accent">行動</span>
              <div className="h-4 w-px bg-accent/30" />
              <span className="text-sm text-textDim">kōdō · action</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Ready to <span className="text-accent">Reset</span>?
            </h2>

            <p className="text-xl text-textDim leading-relaxed max-w-2xl mx-auto">
              The plan is comprehensive. The path is clear. The time is now. Join the movement and help build the alternative.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="/resources"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-display font-bold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Target className="h-5 w-5" />
                Explore Resources
              </a>
              <a
                href="/updates"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card hover:bg-border border border-border text-text font-display font-bold rounded-lg transition-all hover:scale-105"
              >
                <TrendingUp className="h-5 w-5" />
                Latest Updates
              </a>
            </div>

            {/* Japanese Wisdom Card */}
            <Card className="p-8 text-left relative overflow-hidden max-w-2xl mx-auto mt-12">
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-accent to-red-600" />
              <p className="text-2xl font-display font-bold text-text mb-2">
                千里の道も一歩から
              </p>
              <p className="text-sm font-mono text-textDim">senri no michi mo ippo kara</p>
              <p className="text-base text-textDim italic mt-2">
                &quot;A journey of a thousand miles begins with a single step.&quot;
              </p>
              <p className="text-sm text-textDim mt-1">
                Your first action—moving your bank account, talking to a coworker, attending a meeting—starts the transformation.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}


