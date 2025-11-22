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

      {/* Theory of Change Section */}
      <Section className="py-20 bg-gradient-to-br from-accent/5 to-bg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">理論</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">riron · theory</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Theory of <span className="text-accent">Change</span>
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                Traditional movements fail because they attack one lever. We coordinate three fronts simultaneously.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/plan1.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <Card className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-accent">Front 1: Withdrawal of Consent</h3>
                  <p className="text-textDim">
                    Move deposits, boycott brands, quit exploitative jobs. Crashes billionaire asset values and credit ratings.
                  </p>
                </Card>
                <Card className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-accent">Front 2: Counter-Institutions</h3>
                  <p className="text-textDim">
                    Build co-ops, CLTs, credit unions, wealth funds. Creates viable alternatives to capitalism.
                  </p>
                </Card>
                <Card className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-accent">Front 3: Policy Capture</h3>
                  <p className="text-textDim">
                    Win wealth taxes, labour reforms, co-op subsidies. Locks in gains and scales institutions.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Finance Section */}
      <Section id="finance" className="py-20 border-t border-border">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Target className="h-4 w-4 text-accent" />
                <span className="text-sm font-mono text-accent">金融</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">kin'yū · finance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Starving the <span className="text-accent">Financial Extraction</span> Machine
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                Canada&apos;s Big 5 banks don&apos;t serve the economy—they extract from it. We move our money to democratic alternatives.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              {/* Content */}
              <div className="space-y-6">
                <Card className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Credit Union Migration</h3>
                  <p className="text-textDim leading-relaxed">
                    Move deposits to member-owned, democratic credit unions that are divested from fossil fuels and serve communities.
                  </p>
                  <div className="pt-2">
                    <div className="text-sm font-mono text-accent">Target: $150B moved in 10 years</div>
                    <div className="text-sm text-textDim">Phase 1: $10B in years 1-4</div>
                  </div>
                </Card>

                <Card className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Citizens&apos; Wealth Fund</h3>
                  <p className="text-textDim leading-relaxed">
                    Build a public wealth fund through wealth taxes, speculation taxes, and financial transaction taxes. Distribute dividends to all citizens.
                  </p>
                  <div className="pt-2">
                    <div className="text-sm font-mono text-accent">Target: $1 trillion fund by year 20</div>
                    <div className="text-sm text-textDim">Annual dividend: $500-$2,000/person</div>
                  </div>
                </Card>
              </div>

              {/* Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/plan2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Ownership Section */}
      <Section id="ownership" className="py-20 bg-gradient-to-br from-accent/5 to-bg border-t border-border">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Building2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-mono text-accent">所有権</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">shoyūken · ownership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                From Extraction to <span className="text-accent">Equity</span>
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                Workers create value but own nothing. We democratize ownership through cooperatives and community land trusts.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              {/* Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/plan3.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <Card className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Worker Cooperatives</h3>
                  <p className="text-textDim leading-relaxed">
                    Businesses owned and controlled by employees. Democratic governance, profit-sharing, and higher wages. Proven in Québec and Mondragon.
                  </p>
                  <div className="pt-2">
                    <div className="text-sm font-mono text-accent">Target: 2,000+ co-ops by year 10</div>
                    <div className="text-sm text-textDim">100,000 worker-owners</div>
                  </div>
                </Card>

                <Card className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Community Land Trusts</h3>
                  <p className="text-textDim leading-relaxed">
                    Nonprofits that own land and lease it to residents, capping resale prices forever. Permanent affordable housing.
                  </p>
                  <div className="pt-2">
                    <div className="text-sm font-mono text-accent">Target: 50,000 CLT homes by year 10</div>
                    <div className="text-sm text-textDim">40-50% below market, permanently</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Additional Video Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-12">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[21/9] object-cover"
              >
                <source src="/videos/plan4.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent flex items-end">
                <div className="p-8">
                  <Card className="p-6 backdrop-blur-sm bg-card/90 max-w-2xl">
                    <p className="text-lg font-display font-bold text-text mb-2">
                      Ownership is the ultimate power—and it must be democratized.
                    </p>
                    <p className="text-sm text-textDim">
                      When workers own their businesses and communities own their land, extraction ends and equity begins.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Labour Section */}
      <Section id="labour" className="py-20 border-t border-border">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm font-mono text-accent">労働</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">rōdō · labour</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Restoring <span className="text-accent">Bargaining Power</span>
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                40 years of wage theft through union decline. We rebuild worker power through strategic unionization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              {/* Content */}
              <div className="space-y-6">
                <Card className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-bold">Strategic Sectors</h3>
                  <ul className="space-y-3 text-textDim">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span><strong>Tech:</strong> Amazon, Google, Apple - 100,000+ workers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span><strong>Retail:</strong> Walmart, Loblaws - 500,000+ workers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span><strong>Care Work:</strong> Nursing homes, childcare - 400,000+ workers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span><strong>Logistics:</strong> FedEx, trucking - 200,000+ workers</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-bold">Labour Law Reform</h3>
                  <ul className="space-y-2 text-sm text-textDim">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Card-check certification (55%+ auto-union)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      First-contract arbitration (prevent stalling)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Sectoral bargaining (industry-wide contracts)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Ban replacement workers (stop scab labor)
                    </li>
                  </ul>
                  <div className="pt-2 text-sm font-mono text-accent">
                    Target: 1,200 drives, +5% labour GDP share
                  </div>
                </Card>
              </div>

              {/* Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/plan5.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Wide Video Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[21/9] object-cover"
              >
                <source src="/videos/plan6.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-bg/80 to-transparent flex items-center">
                <div className="p-8 max-w-2xl">
                  <Card className="p-6 backdrop-blur-sm bg-card/90">
                    <p className="text-xl font-display font-bold text-text mb-3">
                      連帯 · Solidarity
                    </p>
                    <p className="text-base text-textDim">
                      Union workers earn $5.40/hour more. But the real power is collective: when we organize together, we shift the entire economy.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Policy Section */}
      <Section id="policy" className="py-20 bg-gradient-to-br from-accent/5 to-bg border-t border-border">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Scale className="h-4 w-4 text-accent" />
                <span className="text-sm font-mono text-accent">政策</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">seisaku · policy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Locking In <span className="text-accent">Grassroots Wins</span>
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                Grassroots action builds power, but policy makes it permanent. We win at municipal, provincial, and federal levels.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              {/* Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/plan7.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <Card className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-accent">Municipal (Years 1-3)</h3>
                  <ul className="space-y-2 text-sm text-textDim">
                    <li>• Vacancy taxes (500% on empty homes)</li>
                    <li>• CLT land donations from city surplus</li>
                    <li>• Living wage ordinances ($25/hour)</li>
                    <li>• Co-op zoning preferences</li>
                  </ul>
                </Card>

                <Card className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-accent">Provincial (Years 2-5)</h3>
                  <ul className="space-y-2 text-sm text-textDim">
                    <li>• Wealth tax (1-2% on $10M+)</li>
                    <li>• Speculation & vacancy tax expansion</li>
                    <li>• Card-check unionization</li>
                    <li>• Worker co-op incentives & grants</li>
                  </ul>
                </Card>

                <Card className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-accent">Federal (Years 3-7)</h3>
                  <ul className="space-y-2 text-sm text-textDim">
                    <li>• Capital gains reform (100% inclusion)</li>
                    <li>• Offshore haven crackdown</li>
                    <li>• Co-op Development Bank ($1B fund)</li>
                    <li>• Citizens&apos; Wealth Fund (FTT)</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* KPIs Section */}
      <Section id="kpis" className="py-20 border-t border-border">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-sm font-mono text-accent">指標</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">shihyō · metrics</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                How We Track <span className="text-accent">Progress</span>
              </h2>
              <p className="text-lg text-textDim max-w-3xl mx-auto">
                We measure institutional change, not symbolic gestures. Real numbers, real impact.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[21/9] object-cover"
              >
                <source src="/videos/plan8.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">$150B</div>
                <div className="text-sm text-textDim">Deposits moved to credit unions by year 10</div>
              </Card>
              <Card className="p-6 text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">1,200</div>
                <div className="text-sm text-textDim">Union drives launched by year 10</div>
              </Card>
              <Card className="p-6 text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">2,000</div>
                <div className="text-sm text-textDim">Worker co-ops formed by year 10</div>
              </Card>
              <Card className="p-6 text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">50,000</div>
                <div className="text-sm text-textDim">CLT homes secured by year 10</div>
              </Card>
            </div>

            <Card className="p-8 mt-12 text-center">
              <p className="text-2xl font-display font-bold text-text mb-4">
                By Year 20: <span className="text-accent">$1 Trillion</span> Wealth Fund
              </p>
              <p className="text-lg text-textDim">
                Annual dividend: <span className="text-accent font-bold">$2,000 per person</span>
              </p>
              <p className="text-sm text-textDim mt-2">
                Top 1% wealth share drops from 25% to 10%. Economic democracy achieved.
              </p>
            </Card>
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


