import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { CheckCircle2, ArrowRight, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wealth Reset — Citizens' Wealth Fund & Billionaire Tax in Canada",
  description: "Tax billionaires to build a Citizens' Wealth Fund. Norway's $1.6T fund pays $30K/year per citizen. Canada can do the same. Join the movement for universal dividends and economic sovereignty.",
  keywords: "Citizens Wealth Fund Canada, billionaire tax Canada, wealth tax, universal basic dividend, sovereign wealth fund, tax the rich, economic democracy, Alaska Permanent Fund Canada",
};

export default function WealthResetPage() {
  return (
    <>
      <Section className="py-12 md:py-20">
        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Tax Billionaires. <span className="text-accent">Fund Everyone.</span>
            </h1>
            <p className="text-xl text-textDim mb-8">
              Build a Citizens&apos; Wealth Fund—like Norway&apos;s $1.6 trillion fund or Alaska&apos;s Permanent Fund. Tax billionaires, invest proceeds, pay universal dividends. Economic security for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/join#founders" variant="primary">
                Campaign for Wealth Fund
              </CTAButton>
              <CTAButton href="/plan" variant="secondary">
                Read the Full Plan
              </CTAButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">$1.6T</div>
              <p className="text-sm text-textDim">Norway&apos;s Citizens&apos; Wealth Fund (pays $30K/year/citizen)</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">$3,284</div>
              <p className="text-sm text-textDim">Alaska Permanent Fund dividend per resident (2022)</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">$500B</div>
              <p className="text-sm text-textDim">Potential Canadian fund from 5% billionaire wealth tax</p>
            </Card>
          </div>

          {/* What is a CWF */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">What is a Citizens&apos; Wealth Fund?</h2>
            
            <Card className="p-8 mb-8 bg-accent/5 border-accent/20">
              <p className="text-lg text-textDim mb-4">
                A <strong className="text-text">Citizens&apos; Wealth Fund (CWF)</strong> is a sovereign wealth fund owned by all citizens. It invests in co-ops, public infrastructure, and ethical assets—then pays universal dividends. Not welfare. Ownership.
              </p>
              <p className="text-lg text-textDim">
                <strong className="text-text">How it works:</strong> 5% annual wealth tax on billionaires → $500B fund within 10 years → Invest in worker co-ops, CLTs, green energy → Pay $2,000-5,000/year dividends to every Canadian + compound growth for future generations.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Current System (Extraction)</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>87 Canadian billionaires control $350B</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Capital gains taxed 50% less than wages</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Profits siphoned to offshore tax havens</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Citizens own nothing collectively</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Citizens&apos; Wealth Fund (Ownership)</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>$500B fund owned by all Canadians</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>5% wealth tax on billionaires funds it</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Invests in co-ops, green energy, affordable housing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Universal dividends ($2K-5K/year per person)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Build CWF */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">How to Build a Citizens&apos; Wealth Fund</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Pass Billionaire Wealth Tax (Years 1-2)</h3>
                    <p className="text-textDim mb-3">Campaign for 5% annual wealth tax on fortunes over $10M. Target: Weston family ($12B), Thomson family ($65B), Rogers, Irving. Fund initial CWF capitalization.</p>
                    <p className="text-sm text-textDim">Precedent: Spain, Norway, Switzerland already have wealth taxes. Constitutional in Canada.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Establish Fund Governance (Year 2)</h3>
                    <p className="text-textDim mb-3">Create independent board: 1/3 citizen lottery, 1/3 elected representatives, 1/3 economic experts. Mandate: Invest in co-ops, green infrastructure, affordable housing. Prohibit fossil fuels, weapons, tax havens.</p>
                    <p className="text-sm text-textDim">Model: Alaska Permanent Fund board structure (political independence + transparency).</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Invest Strategically (Years 3-10)</h3>
                    <p className="text-textDim mb-3">60% worker co-op equity (own shares in democratic workplaces), 25% Community Land Trusts + social housing, 15% renewable energy infrastructure. Target 7% annual returns.</p>
                    <p className="text-sm text-textDim">Rationale: Co-ops + CLTs generate stable returns while building worker/community power.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Pay Universal Dividends (Year 5+)</h3>
                    <p className="text-textDim">Once fund reaches $100B, distribute 50% of annual returns as universal dividends. Every Canadian citizen gets equal check quarterly. No means testing. Compounds economic security.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <CTAButton href="/plan" variant="primary">
                Read the Full Economic Plan
              </CTAButton>
            </div>
          </div>

          {/* Impact Calculator */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">What Would You Get?</h2>
            
            <Card className="p-8 bg-accent/5 border-accent/20">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">Citizens&apos; Wealth Fund Dividend Calculator</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-6">
                    <div className="text-sm text-textDim mb-2">Year 5 (Fund at $100B)</div>
                    <div className="text-3xl font-display font-bold text-accent mb-1">$2,000</div>
                    <div className="text-sm text-textDim">Per Canadian per year</div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <div className="text-sm text-textDim mb-2">Year 10 (Fund at $500B)</div>
                    <div className="text-3xl font-display font-bold text-accent mb-1">$8,000</div>
                    <div className="text-sm text-textDim">Per Canadian per year</div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <div className="text-sm text-textDim mb-2">Year 20 (Fund at $1.5T)</div>
                    <div className="text-3xl font-display font-bold text-accent mb-1">$20,000</div>
                    <div className="text-sm text-textDim">Per Canadian per year</div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <div className="text-sm text-textDim mb-2">Family of 4 (Year 10)</div>
                    <div className="text-3xl font-display font-bold text-accent mb-1">$32,000</div>
                    <div className="text-sm text-textDim">Annual household dividend</div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-textDim text-center">
                    <strong className="text-text">Assumptions:</strong> 5% wealth tax on $350B billionaire wealth, 7% annual fund returns, 50% of returns paid as dividends (other 50% compounds). Conservative estimates based on Norway&apos;s fund performance.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Testimonial (Hypothetical) */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <DollarSign className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-lg italic text-textDim mb-4">
                    &ldquo;Norway&apos;s wealth fund changed everything. I get $30,000/year just for being a citizen—on top of my wages. It&apos;s not welfare. I own a share of our national wealth. Canada deserves the same.&rdquo;
                  </p>
                  <p className="font-semibold">— Kari H., Oslo</p>
                  <p className="text-sm text-textDim">Beneficiary of Norway&apos;s Government Pension Fund</p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Is a wealth tax constitutional in Canada?</h3>
                <p className="text-textDim">Yes. Federal government has constitutional authority to tax wealth under s.91 (public debt and property). BC already has speculation tax. Precedent: Spain, Norway, Switzerland have permanent wealth taxes.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Won&apos;t billionaires just move their money offshore?</h3>
                <p className="text-textDim">Tax wealth wherever held (like U.S. taxes citizens globally). Require asset disclosure. Penalize banks facilitating evasion. Exit tax: 40% of wealth if they renounce citizenship (like U.S. expatriation tax).</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How is this different from UBI (Universal Basic Income)?</h3>
                <p className="text-textDim">UBI is government welfare funded by taxes. CWF dividends come from <em>ownership</em>—returns on investments we collectively own. It&apos;s property income, not redistribution. Alaska&apos;s model proves it works politically (even conservatives support it).</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Will dividends cause inflation?</h3>
                <p className="text-textDim">No. Alaska&apos;s Permanent Fund has paid dividends since 1982 with no inflation spike. Dividends are funded by investment returns, not money printing. Plus, CLTs + co-ops stabilize housing/goods prices.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Why not just fund social programs instead?</h3>
                <p className="text-textDim">Both. Fund programs <em>and</em> build ownership. CWF gives citizens direct stake in economy—can&apos;t be cut by future governments like programs. Norway does both: strong welfare state + $1.6T fund.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How do we get politicians to pass this?</h3>
                <p className="text-textDim">Mass organizing. 99reset chapters campaign locally. Pledge 100,000 Canadians to vote based on CWF support. Target ridings: downtown Toronto, Vancouver, Montreal. Model: Alaska&apos;s bipartisan support for Permanent Fund.</p>
              </Card>
            </div>
          </div>

          {/* Email Capture CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-card border-accent/50">
              <h2 className="text-2xl font-display font-bold mb-4">Ready to Tax Billionaires &amp; Fund Everyone?</h2>
              <p className="text-textDim mb-6">
                Join the campaign for a Canadian Citizens&apos; Wealth Fund. Get policy briefs, campaign toolkits, and connect with organizers pushing for wealth taxes.
              </p>
              <CTAButton href="/join#founders" variant="primary" className="w-full sm:w-auto">
                Join the Campaign <ArrowRight className="inline h-5 w-5 ml-2" />
              </CTAButton>
              <p className="text-xs text-textDim mt-4">
                Evidence-based policy. Free resources. Build economic democracy.
              </p>
            </Card>
          </div>

          {/* Related Pages */}
          <div className="max-w-4xl mx-auto mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-display font-bold mb-6">Explore Other Tracks</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-display font-bold mb-2">Banking Reset</h3>
                <p className="text-sm text-textDim mb-4">Move your money from Big 5 banks to credit unions</p>
                <a href="/banking-reset" className="text-accent text-sm hover:underline">Learn More →</a>
              </Card>
              <Card className="p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-display font-bold mb-2">Housing Reset</h3>
                <p className="text-sm text-textDim mb-4">Secure affordable housing forever through Community Land Trusts</p>
                <a href="/housing-reset" className="text-accent text-sm hover:underline">Learn More →</a>
              </Card>
              <Card className="p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-display font-bold mb-2">Workplace Reset</h3>
                <p className="text-sm text-textDim mb-4">Unionize your workplace and transition to worker ownership</p>
                <a href="/workplace-reset" className="text-accent text-sm hover:underline">Learn More →</a>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

