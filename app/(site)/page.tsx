import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { StatCounter } from "@/components/stat-counter";
import { Card } from "@/components/card";
import { HomeHero } from "@/components/home-hero";
import { FadeIn, SlideIn, ScaleIn } from "@/components/motion-wrapper";
import { ArrowRight, Building2, Users, Landmark, Target, TrendingUp, Shield, Zap, Check, Globe, BookOpen } from "lucide-react";
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

      {/* The 99% vs 1% Section */}
      <Section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-50" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">民主社会主義</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">democratic socialism</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                The <span className="text-accent">99%</span> vs The 1%
              </h2>
              <p className="text-lg text-textDim">
                A democratic socialist movement reclaiming power for the working class.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ScaleIn delay={0.1}>
                <Card className="space-y-3 hover:border-accent/50 transition-colors border-accent/30">
                  <div className="text-5xl font-display font-black text-accent mb-2">99%</div>
                  <div className="text-xl font-display font-bold text-text">The Working Class</div>
                  <ul className="text-sm text-textDim space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Workers who create all value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Exploited by wage labor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Organizing for collective power</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Building democratic alternatives</span>
                    </li>
                  </ul>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <Card className="space-y-3 hover:border-red-600 transition-colors border-red-600/30">
                  <div className="text-5xl font-display font-black text-red-600 mb-2">1%</div>
                  <div className="text-xl font-display font-bold text-text">The Capitalist Class</div>
                  <ul className="text-sm text-textDim space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Extract surplus value from workers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Control means of production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Hoard wealth and power</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Maintain economic inequality</span>
                    </li>
                  </ul>
                </Card>
              </ScaleIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="bg-bg border border-accent rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-textDim">
                  <span className="text-text font-semibold">Our mission:</span> Transfer wealth and power from the 1% to the 99% through 
                  <span className="text-accent font-semibold"> democratic socialist organizing—unions, co-ops, credit unions, and community land trusts.</span> Not through revolution, but through building collective power that starves the capitalist class of their stolen profits.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Four Pillars Section */}
      <Section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">四つの柱</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">yottsu no hashira · four pillars</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                The Four Pillars of <span className="text-accent">The Reset</span>
              </h2>
              <p className="text-xl text-textDim max-w-3xl mx-auto">
                Practical tools for transferring economic power from the 1% to the 99%. 
                Build the democratic socialist future, one institution at a time.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <SlideIn direction="left" delay={0.1}>
                <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <Users className="h-7 w-7 text-accent" />
                      </div>
                      <div className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">組合</div>
                    </div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Unions</h3>
                    <p className="text-textDim leading-relaxed">
                      Organize your workplace. Collective bargaining gives workers power to demand fair wages, 
                      better conditions, and democratic control. Every unionized worker is one less exploitation point for the 1%.
                    </p>
                    <CTAButton href="/resources/union-organizing-101" variant="secondary" className="w-full">
                      Start Organizing →
                    </CTAButton>
                  </div>
                </Card>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <Building2 className="h-7 w-7 text-accent" />
                      </div>
                      <div className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">協同組合</div>
                    </div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Worker Co-ops</h3>
                    <p className="text-textDim leading-relaxed">
                      Own your workplace democratically. Worker cooperatives eliminate the boss, 
                      distribute profits equitably, and prove that capitalism isn&apos;t the only way to run a business.
                    </p>
                    <CTAButton href="/resources/worker-coop-formation-guide" variant="secondary" className="w-full">
                      Form a Co-op →
                    </CTAButton>
                  </div>
                </Card>
              </SlideIn>

              <SlideIn direction="left" delay={0.3}>
                <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <Landmark className="h-7 w-7 text-accent" />
                      </div>
                      <div className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">信用組合</div>
                    </div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Credit Unions</h3>
                    <p className="text-textDim leading-relaxed">
                      Starve predatory banks. Credit unions are member-owned financial cooperatives that 
                      return profits to members, not shareholders. Move your money, defund Wall Street.
                    </p>
                    <CTAButton href="/banking-reset" variant="secondary" className="w-full">
                      Switch Banks →
                    </CTAButton>
                  </div>
                </Card>
              </SlideIn>

              <SlideIn direction="right" delay={0.4}>
                <Card className="group hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <Target className="h-7 w-7 text-accent" />
                      </div>
                      <div className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">土地信託</div>
                    </div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Community Land Trusts</h3>
                    <p className="text-textDim leading-relaxed">
                      Remove land from the speculative market. CLTs provide permanently affordable housing 
                      through collective ownership, ending landlord extraction and ensuring housing as a right.
                    </p>
                    <CTAButton href="/housing-reset" variant="secondary" className="w-full">
                      Learn About CLTs →
                    </CTAButton>
                  </div>
                </Card>
              </SlideIn>
            </div>

            <FadeIn delay={0.5}>
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/20">
                <p className="text-center text-lg text-textDim leading-relaxed">
                  <span className="text-accent font-semibold">These aren&apos;t reforms. They&apos;re weapons.</span> Every dollar moved to a credit union, 
                  every worker joining a union, every co-op formed, every CLT established—this is how we dismantle capitalism and build democratic socialism from the ground up.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Philosophy and Praxis Section */}
      <Section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-50" />
        
        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">実践</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">jissen · praxis</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Theory and <span className="text-accent">Praxis</span>
              </h2>
              <p className="text-xl text-textDim max-w-3xl mx-auto leading-relaxed">
                Democratic socialism bridges philosophical rigor with practical implementation,
                uniting abstract theory with concrete action.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Cards Grid */}
              <div className="space-y-6">
              <SlideIn direction="left" delay={0.1}>
                  <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <BookOpen className="h-7 w-7 text-accent" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                          Theoretical Foundations
                        </h3>
                        <ul className="space-y-2.5 text-textDim">
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Dialectical materialism</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Labour theory of value</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Historical analysis of capitalism</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Democratic political philosophy</span>
                          </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </SlideIn>

                <SlideIn direction="left" delay={0.2}>
                  <Card className="group border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Zap className="h-7 w-7 text-accent" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                          Practical Implementation
                        </h3>
                        <ul className="space-y-2.5 text-textDim">
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Worker cooperatives and unions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Community land trusts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Democratic workplace governance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="font-semibold text-text">Collective ownership structures</span>
                          </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </SlideIn>
              </div>

              {/* Video element */}
              <FadeIn delay={0.3}>
                <div className="relative">
                  <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/praxis.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </div>
                  {/* Enhanced glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-accent/30 via-red-600/20 to-accent/30 rounded-3xl blur-3xl -z-10 opacity-60 animate-pulse" />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Principles Section */}
      <Section dark className="py-20 md:py-32">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-sm font-mono text-accent">我々の原則</span>
              <div className="h-3 w-px bg-accent/30" />
              <span className="text-sm text-textDim">wareware no gensoku · our principles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Democratic Socialist <span className="text-accent">Movement</span> Principles
            </h2>
            <p className="text-lg text-textDim max-w-2xl mx-auto">
              Transferring power from the 1% to the 99% through collective action, 
              democratic ownership, and worker solidarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Worker Power */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Worker Power</h3>
              <p className="text-textDim leading-relaxed">
                Workers create all value. Through unions and co-ops, we take back control 
                from bosses and shareholders. Solidarity is our weapon. Democracy is our method.
              </p>
              <CTAButton 
                href="/resources/union-organizing-101" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Start Organizing
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>

            {/* Collective Ownership */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Collective Ownership</h3>
              <p className="text-textDim leading-relaxed">
                Remove wealth from capitalist extraction. Credit unions, CLTs, and co-ops 
                prove that democratic ownership works. Every institution we build weakens the 1%.
              </p>
              <CTAButton 
                href="/banking-reset" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Take Action
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>

            {/* Class Solidarity */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Class Solidarity</h3>
              <p className="text-textDim leading-relaxed">
                The 99% must unite across race, gender, and nation. Our enemy is the capitalist 
                class. Together, we build the democratic socialist alternative.
              </p>
              <CTAButton 
                href="/plan" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Read The Plan
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Collective Power - Single Video Section */}
      <Section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-bg via-accent/5 to-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-sm font-mono text-accent">集団の力</span>
                    <div className="h-3 w-px bg-accent/30" />
                    <span className="text-sm text-textDim">shūdan no chikara</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold">
                    Collective <span className="text-accent">Power</span>
                  </h2>
                  <div className="p-4 rounded-xl bg-card/50 border border-accent/20 backdrop-blur-sm">
                    <p className="text-lg text-textDim leading-relaxed italic">
                      &quot;三人寄れば文殊の知恵&quot; · <span className="text-accent">sannin yoreba monju no chie</span>
                    </p>
                    <p className="text-sm text-textDim mt-2">
                      When three gather, they possess the wisdom of Manjushri—collective intelligence surpasses individual capacity.
                    </p>
                  </div>
                  <p className="text-2xl text-textDim leading-relaxed">
                    When workers organize collectively, they build power that transforms 
                    individual vulnerability into shared strength. This is the foundation 
                    of democratic socialism—solidarity forged through action.
                  </p>
                  <div className="space-y-4 text-lg text-textDim">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-text mb-1">Organize</h3>
                        <p className="text-textDim">Build unions and cooperatives</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-text mb-1">Mobilize</h3>
                        <p className="text-textDim">Transform consciousness into action</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-text mb-1">Transform</h3>
                        <p className="text-textDim">Reshape economic relations democratically</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src="/videos/collective-power.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-accent/30 via-red-600/20 to-accent/30 rounded-3xl blur-3xl -z-10 opacity-60 animate-pulse" />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Reset Actions Section */}
      <Section className="py-16 md:py-24 bg-accent/5 border-y border-accent/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">行動</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">kōdō · action</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Take Action. <span className="text-accent">Reset The System.</span>
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Practical guides to building democratic socialist alternatives in your community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/banking-reset" className="group">
                <Card className="h-full space-y-4 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Landmark className="h-6 w-6 text-accent" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Banking Reset</h3>
                  <p className="text-textDim">
                    Defund Wall Street. Switch to credit unions and starve predatory banks of capital. 
                    Member-owned financial democracy in action.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">Credit Unions</div>
                    <div className="text-textDim">• Financial Democracy</div>
                  </div>
                </Card>
              </Link>

              <Link href="/housing-reset" className="group">
                <Card className="h-full space-y-4 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Housing Reset</h3>
                  <p className="text-textDim">
                    End landlord parasitism. Community Land Trusts provide permanent affordable housing 
                    through collective ownership. Housing is a right, not a commodity.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">CLTs</div>
                    <div className="text-textDim">• Collective Housing</div>
                  </div>
                </Card>
              </Link>

              <Link href="/workplace-reset" className="group">
                <Card className="h-full space-y-4 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Workplace Reset</h3>
                  <p className="text-textDim">
                    Organize your workplace. Union power forces bosses to share wealth and control. 
                    From basic demands to worker control—solidarity builds power.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">Unions</div>
                    <div className="text-textDim">• Labor Power</div>
                  </div>
                </Card>
              </Link>

              <Link href="/wealth-reset" className="group">
                <Card className="h-full space-y-4 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent/50 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Wealth Reset</h3>
                  <p className="text-textDim">
                    Seize the means. Worker cooperatives eliminate exploitation by giving workers 
                    democratic control and equitable profit sharing. Proof capitalism isn&apos;t inevitable.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">Co-ops</div>
                    <div className="text-textDim">• Worker Ownership</div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Concepts Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Essential Concepts
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Fundamental ideas that shape democratic socialist thought and practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Target className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">The 1%</h3>
                <p className="text-sm text-textDim">The capitalist class that extracts surplus value from workers. They hoard wealth through ownership, not labor.</p>
                <Link href="/plan" className="text-sm text-accent hover:underline">
                  Read More →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Users className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">The 99%</h3>
                <p className="text-sm text-textDim">The working class. We create all value but are denied control. Our collective power can reshape society.</p>
                <Link href="/resources/union-organizing-101" className="text-sm text-accent hover:underline">
                  Organize →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Building2 className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Democratic Socialism</h3>
                <p className="text-sm text-textDim">Economic democracy through worker control, co-ops, unions, and collective ownership. Not reform. Transformation.</p>
                <Link href="/resources/worker-coop-formation-guide" className="text-sm text-accent hover:underline">
                  Learn More →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Landmark className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Dual Power</h3>
                <p className="text-sm text-textDim">Build alternative institutions now. CLTs, credit unions, co-ops—create the socialist future within capitalism&apos;s shell.</p>
                <Link href="/housing-reset" className="text-sm text-accent hover:underline">
                  Take Action →
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Class Consciousness Awakening - Single Video */}
      <Section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SlideIn direction="left" delay={0.1}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/videos/awakening.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                </div>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                      <span className="text-sm font-mono text-accent">覚醒</span>
                      <div className="h-3 w-px bg-accent/30" />
                      <span className="text-sm text-textDim">kakusei · awakening</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                      Class <span className="text-accent">Awakening</span>
                    </h2>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 mb-4">
                      <p className="text-base text-textDim leading-relaxed">
                        <span className="text-accent font-semibold">目覚める</span> (mezameru) — to wake up, to become aware. 
                        The moment of recognizing one&apos;s position within the class structure.
                      </p>
                    </div>
                    <p className="text-xl text-textDim leading-relaxed mb-6">
                      The moment workers recognize their shared interests marks the beginning 
                      of transformative power. Class consciousness is not bestowed—it emerges 
                      through struggle, education, and collective action.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-xl bg-card/50 border border-accent/10 hover:border-accent/30 transition-colors">
                      <h4 className="font-display font-bold mb-2 text-lg">Recognize</h4>
                      <p className="text-sm text-textDim">Understanding systemic exploitation and shared class interests</p>
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-accent/10 hover:border-accent/30 transition-colors">
                      <h4 className="font-display font-bold mb-2 text-lg">Organize</h4>
                      <p className="text-sm text-textDim">Building collective power through solidarity</p>
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-accent/10 hover:border-accent/30 transition-colors">
                      <h4 className="font-display font-bold mb-2 text-lg">Educate</h4>
                      <p className="text-sm text-textDim">Spreading consciousness through theory and practice</p>
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-accent/10 hover:border-accent/30 transition-colors">
                      <h4 className="font-display font-bold mb-2 text-lg">Transform</h4>
                      <p className="text-sm text-textDim">Reshaping economic relations democratically</p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Historical Examples Section */}
      <Section dark className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Historical Examples
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Democratic socialist principles demonstrated through history and contemporary practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Paris Commune</h3>
                    <p className="text-sm text-accent">1871</p>
                  </div>
                  <Shield className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">First attempt at worker self-government. Direct democracy, worker control of factories, radical egalitarianism.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Mondragon Corporation</h3>
                    <p className="text-sm text-accent">1956-Present</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">80,000 worker-owners; $12B revenue. Demonstrates viability of large-scale cooperative enterprise.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Nordic Social Democracy</h3>
                    <p className="text-sm text-accent">1930s-Present</p>
                  </div>
                  <Zap className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">Strong unions, universal services, high taxes. Highest quality of life indices globally.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Allende&apos;s Chile</h3>
                    <p className="text-sm text-accent">1970-1973</p>
                  </div>
                  <Globe className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">Democratic path to socialism. Nationalized copper, land reform, worker participation in management.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">UK Labour Movement</h3>
                    <p className="text-sm text-accent">1900-1979</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">NHS creation, nationalization of industries, welfare state establishment through democratic means.</p>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Emilia-Romagna Co-ops</h3>
                    <p className="text-sm text-accent">1960s-Present</p>
                  </div>
                  <Shield className="h-8 w-8 text-accent/50" />
                </div>
                <p className="text-sm text-textDim">Italian region where co-ops produce 30% of GDP. High wages, low unemployment, strong economy.</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Revolution - Side by Side */}
      <Section dark className="py-20 md:py-32">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1}>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-sm font-mono text-accent">進化</span>
                    <div className="h-3 w-px bg-accent/30" />
                    <span className="text-sm text-textDim">shinka · evolution</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                    Not a <span className="text-accent">Revolution</span>
                    <br />
                    An Evolution
                  </h2>
                  <div className="relative p-5 rounded-2xl bg-card/50 border border-accent/20 backdrop-blur-sm">
                    <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-lg text-textDim leading-relaxed pl-4">
                      <span className="text-accent font-semibold">革命ではなく、改革</span> (kakumei dewanaku, kaikaku) 
                      — Not revolution, but reform. Gradual transformation through democratic participation.
                    </p>
                  </div>
                  <p className="text-2xl text-textDim leading-relaxed">
                    Democratic socialism transforms society through democratic means—
                    ballot boxes, not barricades; organization, not insurrection.
                  </p>
                  <p className="text-lg text-textDim leading-relaxed">
                    We reject both violent revolution and passive reformism. Instead, we build 
                    dual power: creating democratic institutions within capitalism that prefigure 
                    the socialist future while using electoral politics to expand worker power.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <CTAButton href="/plan" variant="primary" className="text-lg px-8 py-4">
                      Read The Plan
                    </CTAButton>
                    <CTAButton href="/resources" variant="secondary" className="text-lg px-8 py-4">
                      Get Resources
                    </CTAButton>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src="/videos/workers-unite.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-accent/30 via-red-600/20 to-accent/30 rounded-3xl blur-3xl -z-10 opacity-60 animate-pulse" />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contemporary Relevance Section */}
      <Section className="py-16 md:py-24 bg-card/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono text-accent">現代</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">gendai · contemporary</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Contemporary Relevance
              </h2>
              <p className="text-lg text-textDim">
                Why democratic socialism offers solutions to modern crises.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="flex items-start gap-4 p-6">
                <div className="text-3xl font-bold text-accent">1</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Climate Crisis</h3>
                  <p className="text-textDim">Capitalism&apos;s endless growth imperative is incompatible with ecological sustainability. Democratic planning can prioritize environmental stewardship over profit.</p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-6">
                <div className="text-3xl font-bold text-accent">2</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Rising Inequality</h3>
                  <p className="text-textDim">Wealth concentration reaches historical extremes. Worker ownership and democratic control offer structural solutions to economic injustice.</p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-6">
                <div className="text-3xl font-bold text-accent">3</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Automation & AI</h3>
                  <p className="text-textDim">Technology threatens mass unemployment under capitalism. Collective ownership ensures technological progress benefits all, not just capital owners.</p>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-text mb-6">
                <span className="font-semibold">&quot;The philosophers have only interpreted the world. The point is to change it.&quot;</span> — Karl Marx
              </p>
              <CTAButton href="/plan" variant="primary">
                Explore Theory
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reading & Study Section */}
      <Section dark className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Further Reading
            </h2>
            <p className="text-lg text-textDim mb-12 max-w-2xl mx-auto">
              Essential texts for understanding democratic socialist theory and practice. 
              From foundational philosophy to contemporary analysis.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">Theory</div>
                <div className="text-sm text-textDim">Classical socialist philosophy and political economy</div>
              </Card>
              <Card className="text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">History</div>
                <div className="text-sm text-textDim">Labour movements and socialist experiments worldwide</div>
              </Card>
              <Card className="text-center space-y-3">
                <div className="text-4xl font-display font-bold text-accent">Practice</div>
                <div className="text-sm text-textDim">Contemporary organizing and cooperative models</div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/resources" variant="primary">
                Browse Library
              </CTAButton>
              <CTAButton href="/updates" variant="secondary">
                Read Articles
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Begin Your Journey - Enhanced Section */}
      <Section className="py-20 md:py-32 border-t-2 border-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <FadeIn delay={0.1}>
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                      <span className="text-sm font-mono text-accent">旅立ち</span>
                      <div className="h-3 w-px bg-accent/30" />
                      <span className="text-sm text-textDim">tabidachi · journey begins</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                      Begin Your <span className="text-accent">Journey</span>
            </h2>
                  </div>

                  {/* Japanese Wisdom Card */}
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-accent to-accent/20 rounded-full" />
                      <div className="space-y-2">
                        <p className="text-xl font-display font-bold">千里の道も一歩から</p>
                        <p className="text-sm font-mono text-textDim">senri no michi mo ippo kara</p>
                        <p className="text-base text-textDim italic">
                          &quot;A journey of a thousand miles begins with a single step.&quot;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
                    <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-lg text-textDim leading-relaxed pl-4">
                      Understanding democratic socialism is an ongoing process of study, reflection, 
                      and engagement with history, theory, and contemporary practice.
                    </p>
                  </div>

                  {/* Quote Card */}
                  <div className="p-5 rounded-xl bg-accent/10 border border-accent/20">
                    <p className="text-base text-textDim leading-relaxed">
                      <span className="text-accent font-semibold">&quot;Theory without practice is sterile, practice without theory is blind.&quot;</span>
                    </p>
                    <p className="text-sm text-textDim mt-2">
                      Explore both to develop a comprehensive understanding of how democratic socialism can address the contradictions of capitalism.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <CTAButton href="/updates" variant="primary" className="min-w-[240px]">
                      Start Exploring
                    </CTAButton>
                    <CTAButton href="/resources" variant="secondary" className="min-w-[240px]">
                      Browse Resources
            </CTAButton>
                  </div>
                </div>
              </FadeIn>

              {/* Video Side */}
              <FadeIn delay={0.3}>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src="/videos/begin.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-accent/30 via-red-600/20 to-accent/30 rounded-3xl blur-3xl -z-10 opacity-60 animate-pulse" />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


