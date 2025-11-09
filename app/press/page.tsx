import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Download, FileText, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media Kit — 99% Reset",
  description: "Logos, one-pager, media contact, and press releases for journalists covering the movement.",
};

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Press & Media
            </h1>
            <p className="text-xl text-textDim">
              Resources for journalists covering the movement. 
              For interviews or inquiries, contact us directly.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section dark className="border-y border-border py-12">
        <Container>
          <Card className="max-w-2xl mx-auto text-center space-y-4">
            <Mail className="h-12 w-12 text-accent mx-auto" />
            <h2 className="text-2xl font-display font-bold">Media Contact</h2>
            <p className="text-textDim">
              For press inquiries, interviews, or background briefings:
            </p>
            <a
              href="mailto:press@99reset.ca"
              className="text-accent text-lg font-medium hover:text-accent/80"
            >
              press@99reset.ca
            </a>
            <p className="text-sm text-textDim">
              We respond within 24 hours. Available for print, broadcast, and podcast interviews.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Downloads */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Media Kit
              </h2>
              <p className="text-textDim">
                Logos, one-pager, and key facts for coverage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="space-y-4">
                <FileText className="h-10 w-10 text-accent" />
                <h3 className="text-xl font-display font-bold">One-Pager</h3>
                <p className="text-sm text-textDim">
                  Movement overview, key metrics, three tracks, policy asks.
                  Perfect for background research.
                </p>
                <button className="btn-secondary inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </Card>

              <Card className="space-y-4">
                <div className="h-10 w-10 bg-accent rounded flex items-center justify-center text-white font-display font-bold">
                  99%
                </div>
                <h3 className="text-xl font-display font-bold">Logo Pack</h3>
                <p className="text-sm text-textDim">
                  High-resolution logos (PNG, SVG) in black, white, and red.
                  Usage guidelines included.
                </p>
                <button className="btn-secondary inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download ZIP
                </button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Facts */}
      <Section dark className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-display font-bold text-center">
              Key Facts
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-bold mb-2">What is the 99% Reset?</h3>
                <p className="text-textDim">
                  A global, non-violent movement to make the top 1% politically and 
                  economically irrelevant within a generation by shifting ownership 
                  and bargaining power to workers and communities.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-bold mb-2">Three Tracks</h3>
                <p className="text-textDim">
                  Finance (credit unions + wealth fund), Ownership (worker co-ops + CLTs), 
                  Labour (union drives + sectoral bargaining).
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-bold mb-2">Current Reach</h3>
                <p className="text-textDim">
                  $15M+ deposits moved, 87 union drives launched, 143 worker co-ops formed, 
                  892 CLT homes secured. Active chapters in 4 cities.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-bold mb-2">Structure</h3>
                <p className="text-textDim">
                  Independent, member-owned movement. No corporate funding, no partisan affiliation. 
                  Financed by member contributions and future wealth fund dividends.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


