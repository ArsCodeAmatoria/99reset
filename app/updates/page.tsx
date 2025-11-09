import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { BackButton } from "@/components/back-button";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates & Briefings — 99% Reset",
  description: "Campaign updates, policy wins, analysis, and strategic briefings from the movement.",
};

// Placeholder updates - in production, fetch from MDX files
const updates = [
  {
    id: 1,
    title: "Toronto Amazon Warehouse: 62% Card Signatures in 30 Days",
    date: "November 5, 2025",
    excerpt: "YYZ7 fulfillment workers hit majority support. Legal certification expected within two weeks. Employer running classic anti-union playbook.",
    category: "Labour",
  },
  {
    id: 2,
    title: "Vancouver CLT Secures 120 Units, Permanent Affordability",
    date: "October 28, 2025",
    excerpt: "East Van Community Land Trust closes deal on former market-rate building. Resale restrictions lock affordability for generations. Model for other cities.",
    category: "Ownership",
  },
  {
    id: 3,
    title: "Quebec Introduces Wealth Tax Bill: 1% on $10M+",
    date: "October 15, 2025",
    excerpt: "Provincial government tables Citizens' Wealth Fund Act. Estimated $2B annual revenue. Credit union coalition mobilized 50,000 letters in support.",
    category: "Policy",
  },
  {
    id: 4,
    title: "$20M Moved to Credit Unions in Q3 2025",
    date: "October 1, 2025",
    excerpt: "Bank-switch pledges accelerate. TD and RBC report deposit declines. Credit union membership up 12% year-over-year in urban markets.",
    category: "Finance",
  },
  {
    id: 5,
    title: "Tech Worker Co-op Collective Launches with 8 Founding Members",
    date: "September 18, 2025",
    excerpt: "Montreal-based software co-op reaches $1M ARR in first year. Profit-sharing averages $18k per member. Hiring 12 more worker-owners in 2026.",
    category: "Ownership",
  },
];

export default function UpdatesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12">
        <Container>
          <div className="mb-6">
            <BackButton />
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Updates & Briefings
            </h1>
            <p className="text-xl text-textDim">
              Campaign wins, policy analysis, and strategic updates from the movement.
            </p>
          </div>
        </Container>
      </Section>

      {/* Updates Feed */}
      <Section dark className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {updates.map((update) => (
              <Card key={update.id} className="space-y-4 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 text-sm text-textDim">
                  <Calendar className="h-4 w-4" />
                  <span>{update.date}</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                    {update.category}
                  </span>
                </div>
                <h2 className="text-2xl font-display font-bold">
                  {update.title}
                </h2>
                <p className="text-textDim leading-relaxed">
                  {update.excerpt}
                </p>
                <button className="text-accent hover:text-accent/80 text-sm font-medium">
                  Read Full Update →
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="border-t border-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Get Weekly Updates
            </h2>
            <p className="text-lg text-textDim">
              Campaign wins, new toolkits, and strategic briefings delivered every Friday.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}


