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

      {/* The Philosophy Section */}
      <Section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-50" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Democratic Socialism: <span className="text-accent">Theory</span> and Practice
              </h2>
              <p className="text-lg text-textDim">
                Economic democracy as the logical extension of political democracy.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ScaleIn delay={0.1}>
                <Card className="text-center space-y-3 hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-display font-bold text-accent">Economic</div>
                  <div className="text-sm text-textDim">Workplace democracy through worker ownership and cooperatives</div>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <Card className="text-center space-y-3 hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-display font-bold text-accent">Political</div>
                  <div className="text-sm text-textDim">Collective decision-making and participatory governance</div>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.3}>
                <Card className="text-center space-y-3 hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-display font-bold text-accent">Social</div>
                  <div className="text-sm text-textDim">Universal access to housing, healthcare, and education</div>
                </Card>
              </ScaleIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="bg-bg border border-border rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-textDim">
                  <span className="text-text font-semibold">Core principle:</span> If democracy is desirable in governance, 
                  it must be desirable in economic life. Workers should control the means of production democratically,
                  <span className="text-accent font-semibold"> not through violent revolution, but through cooperative organization and collective ownership.</span>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Core Principles of Democratic Socialism
            </h2>
            <p className="text-lg text-textDim max-w-2xl mx-auto">
              Economic democracy, collective ownership, and worker empowerment as 
              foundational pillars of a just society.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Worker Control */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Worker Control</h3>
              <p className="text-textDim leading-relaxed">
                Democratic ownership and governance of workplaces. Workers should control 
                the means of production through cooperatives, unions, and participatory management.
              </p>
              <CTAButton 
                href="/plan#worker-control" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Explore Theory
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
                Social ownership of productive resources. Community land trusts, public utilities,
                and cooperative enterprises replace private extraction.
              </p>
              <CTAButton 
                href="/plan#collective-ownership" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Explore Theory
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </Card>

            {/* Democratic Planning */}
            <Card className="space-y-4 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Democratic Planning</h3>
              <p className="text-textDim leading-relaxed">
                Participatory economic decision-making. Communities democratically determine 
                production priorities, resource allocation, and distribution.
              </p>
              <CTAButton 
                href="/plan#democratic-planning" 
                variant="secondary" 
                className="inline-flex items-center gap-2 mt-4"
              >
                Explore Theory
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
                  <h2 className="text-5xl md:text-7xl font-display font-bold">
                    Collective <span className="text-accent">Power</span>
                  </h2>
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

      {/* Explore Topics Section */}
      <Section className="py-16 md:py-24 bg-accent/5 border-y border-accent/20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Explore Topics
              </h2>
              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Deep dives into democratic socialist theory, practice, and historical examples.
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
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Economic Democracy</h3>
                  <p className="text-textDim">
                    Theoretical foundations of workplace democracy, democratic ownership, and participatory economics.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">Theory</div>
                    <div className="text-textDim">• Philosophy</div>
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
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Worker Cooperatives</h3>
                  <p className="text-textDim">
                    Practical models of worker ownership. Historical examples from Mondragon to modern tech cooperatives.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">Practice</div>
                    <div className="text-textDim">• Case studies</div>
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
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Labour Movement History</h3>
                  <p className="text-textDim">
                    From the Paris Commune to modern union organizing. Historical analysis of worker power and solidarity.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">History</div>
                    <div className="text-textDim">• Analysis</div>
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
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">Socialist Philosophy</h3>
                  <p className="text-textDim">
                    From Marx to modern democratic socialists. Philosophical foundations of collective ownership and equality.
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <div className="text-accent font-bold">Philosophy</div>
                    <div className="text-textDim">• Dialectics</div>
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
                <h3 className="text-lg font-display font-bold">Surplus Value</h3>
                <p className="text-sm text-textDim">The difference between the value workers create and wages they receive. Core to understanding exploitation.</p>
                <Link href="/resources/bank-switch-toolkit" className="text-sm text-accent hover:underline">
                  Read More →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Users className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Class Consciousness</h3>
                <p className="text-sm text-textDim">Workers&apos; awareness of their shared interests and collective power against capital.</p>
                <Link href="/resources/union-organizing-101" className="text-sm text-accent hover:underline">
                  Read More →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Building2 className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Means of Production</h3>
                <p className="text-sm text-textDim">Tools, factories, and resources used to produce goods. Should be collectively owned.</p>
                <Link href="/resources/worker-coop-formation-guide" className="text-sm text-accent hover:underline">
                  Read More →
                </Link>
              </Card>

              <Card className="space-y-4 hover:border-accent/50 transition-colors">
                <Landmark className="h-10 w-10 text-accent" />
                <h3 className="text-lg font-display font-bold">Dialectical Analysis</h3>
                <p className="text-sm text-textDim">Understanding social change through contradictions and their resolution over time.</p>
                <Link href="/resources/policy-advocacy-toolkit" className="text-sm text-accent hover:underline">
                  Read More →
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Class Consciousness Awakening - Split Section */}
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
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                      Class <span className="text-accent">Awakening</span>
                    </h2>
                    <p className="text-xl text-textDim leading-relaxed mb-6">
                      The moment workers recognize their shared interests marks the beginning 
                      of transformative power. Class consciousness is not bestowed—it emerges 
                      through struggle, education, and collective action.
                    </p>
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-xl">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src="/videos/class-consciousness.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent flex items-end p-4">
                      <p className="text-lg font-display font-bold">From Awareness to Action</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-xl bg-card/50 border border-accent/10">
                      <h4 className="font-display font-bold mb-2">Recognize</h4>
                      <p className="text-sm text-textDim">Understanding exploitation</p>
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-accent/10">
                      <h4 className="font-display font-bold mb-2">Organize</h4>
                      <p className="text-sm text-textDim">Building collective power</p>
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

      {/* Revolution - Full Width Cinematic */}
      <Section dark className="py-0 relative overflow-hidden">
        <div className="relative h-[80vh] min-h-[600px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/revolution.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/50 to-bg/80" />
          
          {/* Content */}
          <Container className="relative z-10 h-full flex items-center justify-center">
            <FadeIn className="text-center max-w-4xl">
              <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 drop-shadow-2xl">
                Not a <span className="text-accent">Revolution</span>
                <br />
                An Evolution
              </h2>
              <p className="text-2xl md:text-3xl text-textDim drop-shadow-lg mb-12">
                Democratic socialism transforms society through democratic means—
                <br className="hidden md:block" />
                ballot boxes, not barricades; organization, not insurrection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/plan" variant="primary" className="text-lg px-8 py-4">
                  Read The Plan
                </CTAButton>
                <CTAButton href="/resources" variant="secondary" className="text-lg px-8 py-4">
                  Get Resources
                </CTAButton>
              </div>
            </FadeIn>
          </Container>
          
          {/* Bottom fade to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card/30 to-transparent" />
        </div>
      </Section>

      {/* Contemporary Relevance Section */}
      <Section className="py-16 md:py-24 bg-card/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
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

      {/* Final CTA Section */}
      <Section className="py-20 md:py-32 border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Begin Your Journey
            </h2>
            <p className="text-xl text-textDim leading-relaxed">
              Understanding democratic socialism is an ongoing process of study, reflection, and engagement 
              with history, theory, and contemporary practice.
            </p>
            <p className="text-lg text-textDim">
              <span className="text-accent font-semibold">&quot;Theory without practice is sterile, practice without theory is blind.&quot;</span> 
              Explore both to develop a comprehensive understanding of how democratic socialism can address the contradictions of capitalism.
            </p>
            <CTAButton href="/updates" variant="primary" className="min-w-[240px] mt-6">
              Start Exploring
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}


