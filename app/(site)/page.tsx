import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { StatCounter } from "@/components/stat-counter";
import { Card } from "@/components/card";
import { ArrowRight, Building2, Users, Landmark } from "lucide-react";

// In production, these would be fetched from the database
async function getStats() {
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
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32 pb-24 md:pb-40">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-balance">
              Starve the 1%. Own the Future.
            </h1>
            <p className="text-xl md:text-2xl text-textDim leading-relaxed max-w-3xl mx-auto">
              A global, non-violent plan to shift ownership and bargaining power to workers 
              and communities. Not welfare — equity, dividends, and permanent affordability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <CTAButton href="/join" variant="primary" className="min-w-[200px]">
                Join the Reset
              </CTAButton>
              <CTAButton href="/plan" variant="secondary" className="min-w-[200px]">
                Read the Plan
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

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

      {/* Three Tracks Section */}
      <Section className="py-24 md:py-32">
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

      {/* CTA Section */}
      <Section dark className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Reset the System?
            </h2>
            <p className="text-lg text-textDim">
              Join thousands taking concrete action: moving money, organizing workplaces, 
              and building worker-owned alternatives.
            </p>
            <CTAButton href="/join" variant="primary" className="min-w-[200px]">
              Take Action Now
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}


