import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { StatCounter } from "@/components/stat-counter";
import { Card } from "@/components/card";
import { HomeHero } from "@/components/home-hero";
import { FadeIn, SlideIn, ScaleIn } from "@/components/motion-wrapper";
import { ArrowRight, Building2, Users, Landmark, Target, TrendingUp, Shield, Zap, Check, Globe } from "lucide-react";
import Link from "next/link";

// In production, these would be fetched from the database
async function getStats() {
  // Return placeholder stats (works without database)
  return {
    depositsMove: 15420000,
    unionDrives: 87,
    workerCoops: 143,
    cltHomes: 892,
  };
}

export default async function HomePage() {
  const stats = await getStats();

  return (
    <>
      {/* Hero Section with animations */}
      <HomeHero />

      {/* Stats Section */}
      <Section dark className="border-y border-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter
              end={stats.depositsMove}
              label="Deposits Moved"
              prefix="$"
            />
            <StatCounter
              end={stats.unionDrives}
              label="Union Drives Launched"
            />
            <StatCounter
              end={stats.workerCoops}
              label="Worker Co-ops Formed"
            />
            <StatCounter
              end={stats.cltHomes}
              label="CLT Homes Secured"
            />
          </div>
        </Container>
      </Section>

      {/* The Problem Section */}
      <Section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-50" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                The Problem: <span className="text-accent">40 Years</span> of Upward Transfer
              </h2>
              <p className="text-lg text-textDim">
                Since 1979, the economy has grown—but only billionaires benefited.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ScaleIn delay={0.1}>
                <Card className="text-center space-y-3 hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-display font-bold text-accent">25%</div>
                  <div className="text-sm text-textDim">Top 1% now control 25% of wealth (was 8% in 1980)</div>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <Card className="text-center space-y-3 hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-display font-bold text-accent">+350%</div>
                  <div className="text-sm text-textDim">Housing prices since 1979 while wages rose only 40%</div>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.3}>
                <Card className="text-center space-y-3 hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-display font-bold text-accent">$2.3T</div>
                  <div className="text-sm text-textDim">Household debt (175% of disposable income)</div>
                </Card>
              </ScaleIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="bg-bg border border-border rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-textDim">
                  <span className="text-text font-semibold">The cycle:</span> Billionaires extract wages → Workers borrow to afford housing → 
                  Interest enriches billionaires → Repeat until crash (1929, 2008, 2025?). 
                  <span className="text-accent font-semibold"> We break the cycle by moving money, organizing labour, and owning assets collectively.</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* How We're Different Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Not Protest. <span className="text-accent">Construction</span>.
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Traditional movements fail because they ask billionaires to change. 
                We build parallel institutions that make them irrelevant.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <SlideIn direction="left" delay={0.1}>
                <Card className="space-y-4 h-full hover:border-red-900/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-red-900/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">❌</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">Old Movements</h3>
                      <ul className="space-y-2 text-textDim text-sm">
                        <li>• Protests (symbolic, ignored)</li>
                        <li>• Electoral politics (bought, slow)</li>
                        <li>• Mutual aid (small-scale, temporary)</li>
                        <li>• Ask for change</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <Card className="space-y-4 h-full border-accent/50 hover:border-accent transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">The Reset</h3>
                      <ul className="space-y-2 text-textDim text-sm">
                        <li>• Build institutions (co-ops, CLTs, unions)</li>
                        <li>• Withdraw consent (boycotts, strikes)</li>
                        <li>• Lock in wins (wealth taxes, labour law)</li>
                        <li>• <span className="text-accent font-semibold">Become the change</span></li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </SlideIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Three Tracks Section */}
      <Section dark className="py-20 md:py-32">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Three Tracks to Reset Power
            </h2>
            <p className="text-lg text-textDim max-w-2xl mx-auto">
              Coordinated, institutional shifts in finance, ownership, and labour that 
              make the 1% irrelevant within a generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Finance Track */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Finance</h3>
              <p className="text-textDim leading-relaxed">
                Move deposits to credit unions and seed a Citizens&apos; Wealth Fund with 
                transaction fees, wealth taxes, and vacancy receipts. Build permanent 
                public wealth.
              </p>
              <CTAButton 
                href="/plan#finance" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>

            {/* Ownership Track */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Ownership</h3>
              <p className="text-textDim leading-relaxed">
                Scale worker co-ops and Community Land Trusts for permanent affordability 
                and profit-sharing. Replace extraction with equity.
              </p>
              <CTAButton 
                href="/plan#ownership" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>

            {/* Labour Track */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Labour</h3>
              <p className="text-textDim leading-relaxed">
                Unionize high-leverage employers to raise labour&apos;s share of GDP. 
                Card-check, first-contract arbitration, sector bargaining.
              </p>
              <CTAButton 
                href="/plan#labour" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Concrete Actions, Real Impact
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Every member takes measurable steps. No symbolic gestures—only institutional shifts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Target className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Bank Boycotts</h3>
                <p className="text-sm text-textDim">Switch deposits from Big 5 banks to credit unions. $150B moved crashes ratings 3x.</p>
                <Link href="/resources/bank-switch-toolkit" className="text-sm text-accent hover:underline">
                  30-Day Guide →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Users className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Union Drives</h3>
                <p className="text-sm text-textDim">Organize workplaces. 1,200 drives by year 10 shifts $200B to workers annually.</p>
                <Link href="/resources/union-organizing-101" className="text-sm text-accent hover:underline">
                  90-Day Plan →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Building2 className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Worker Co-ops</h3>
                <p className="text-sm text-textDim">Start or convert businesses. 2,000 co-ops = 100,000 worker-owners with equity.</p>
                <Link href="/resources/worker-coop-formation-guide" className="text-sm text-accent hover:underline">
                  Formation Guide →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Landmark className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Policy Wins</h3>
                <p className="text-sm text-textDim">Lobby for wealth taxes, CLT funds, card-check. Lock in grassroots victories.</p>
                <Link href="/resources/policy-advocacy-toolkit" className="text-sm text-accent hover:underline">
                  Campaign Template →
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Proof It Works Section */}
      <Section dark className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Proof It Works
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Every tactic has historical precedent. We&apos;re not inventing—we&apos;re scaling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Alaska Permanent Fund</h3>
                    <p className="text-sm text-accent">1976-Present</p>
                  </div>
                  <Shield className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">$78B fund pays $1,000-$2,000/year dividend to every resident. Reduced poverty 20%.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Québec Co-ops</h3>
                    <p className="text-sm text-accent">1970s-Present</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">10,000 co-ops; 200,000 worker-owners. 12% of provincial GDP. Highest wages in Canada.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Burlington CLT</h3>
                    <p className="text-sm text-accent">1984-Present</p>
                  </div>
                  <Zap className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">565 homes stay 40-50% below market forever. Zero foreclosures during 2008 crisis.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Mondragon Corp</h3>
                    <p className="text-sm text-accent">1956-Present, Spain</p>
                  </div>
                  <Globe className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">80,000 worker-owners; $12B revenue. CEO:worker pay 6:1 vs. 300:1 in corporations.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Post-WW2 Era</h3>
                    <p className="text-sm text-accent">1945-1979</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">90% top tax + strong unions. Top 1% share fell from 45% to 20%. Fastest GDP growth in history.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">BC Speculation Tax</h3>
                    <p className="text-sm text-accent">2018-Present</p>
                  </div>
                  <Shield className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">$90M/year from vacant homes. Survived legal challenge. Model for national expansion.</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Now Section */}
      <Section className="py-16 md:py-24 bg-card/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Why Now? The Window Is Open
              </h2>
              <p className="text-lg text-textDim">
                Three converging conditions make 2025-2030 uniquely favorable.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="flex items-start gap-4 p-6">
                <div className="text-3xl font-bold text-accent">1</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Crisis Awareness</h3>
                  <p className="text-textDim">89% of Canadians say wealth inequality is a problem (C4TF 2025). Housing, debt, wage stagnation hit critical mass. People are ready for systemic solutions.</p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-6">
                <div className="text-3xl font-bold text-accent">2</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Political Leverage</h3>
                  <p className="text-textDim">NDP minority government (2025-2029 window). BC/QC have progressive provincial power. Municipal wins in Vancouver, Toronto, Montréal. Policy openings rare—capitalize now.</p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-6">
                <div className="text-3xl font-bold text-accent">3</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Proven Playbook</h3>
                  <p className="text-textDim">Starbucks unionized 400 stores (2020-2025). #DeleteFacebook moved 10M users. We have tested tactics, legal templates, and organizing infrastructure. Time to scale.</p>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-text mb-6">
                <span className="font-semibold">The best time to organize was 1979.</span> The second best time is November 2025.
              </p>
              <CTAButton href="/plan" variant="primary">
                Read the Full Strategy
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Local Chapters Section */}
      <Section dark className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Find Your Local Chapter
            </h2>
            <p className="text-lg text-textDim mb-12 max-w-2xl mx-auto">
              Chapters coordinate bank boycotts, union drives, and policy campaigns in 50+ cities. 
              Join weekly meetings, access toolkits, and connect with organizers.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">50+</div>
                <div className="text-sm text-textDim">Active chapters across Canada and US</div>
              </Card>
              <Card className="text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">2hrs/wk</div>
                <div className="text-sm text-textDim">Average member commitment (sustainable pace)</div>
              </Card>
              <Card className="text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">100%</div>
                <div className="text-sm text-textDim">Democratic—one member, one vote on strategy</div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/chapters" variant="primary">
                Find a Chapter
              </CTAButton>
              <CTAButton href="/chapters/apply" variant="secondary">
                Start a Chapter
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="py-20 md:py-32 border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Your Next 30 Days
            </h2>
            <p className="text-xl text-textDim leading-relaxed">
              <span className="text-text font-semibold">Week 1:</span> Switch banks. <span className="text-text font-semibold">Week 2:</span> Talk to 3 coworkers about unionizing. 
              <span className="text-text font-semibold"> Week 3:</span> Attend chapter meeting. <span className="text-text font-semibold">Week 4:</span> Email your councillor about wealth tax.
            </p>
            <p className="text-lg text-textDim">
              In 5 years, you&apos;ll have helped move $150B, launch 1,200 unions, create 2,000 co-ops, 
              and secure 50,000 affordable homes. <span className="text-accent font-semibold">That&apos;s not utopian. That&apos;s arithmetic.</span>
            </p>
            <CTAButton href="/join" variant="primary" className="min-w-[240px] mt-6">
              Join the Reset
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}


