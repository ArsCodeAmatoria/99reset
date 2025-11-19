import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { CheckCircle2, ArrowRight, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking Reset — Switch from Big Banks to Credit Unions in Canada",
  description: "Move your money from Big 5 banks to credit unions. Stop funding fossil fuels and billionaire wealth extraction. Join 100,000+ Canadians boycotting RBC, TD, BMO, Scotiabank, and CIBC.",
  keywords: "switch to credit union Canada, leave big banks, bank boycott Canada, credit union vs bank, move money credit union, RBC alternatives, TD alternatives, ethical banking Canada, fossil fuel divestment",
};

export default function BankingResetPage() {
  return (
    <>
      <Section className="py-12 md:py-20">
        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Stop Funding Billionaires. <span className="text-accent">Switch Your Bank.</span>
            </h1>
            <p className="text-xl text-textDim mb-8">
              Canada&apos;s Big 5 banks financed $900 billion in fossil fuels since 2016. Move your deposits to credit unions—member-owned, democratic, and divested from extraction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/join#pledge" variant="primary">
                Pledge to Switch Banks
              </CTAButton>
              <CTAButton href="/resources/bank-switch-toolkit" variant="secondary">
                30-Day Switch Guide
              </CTAButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">$900B</div>
              <p className="text-sm text-textDim">Big 5 fossil fuel financing since 2016</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">$150B</div>
              <p className="text-sm text-textDim">Target deposits to move by 2030</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">30 Days</div>
              <p className="text-sm text-textDim">Average time to complete switch</p>
            </Card>
          </div>

          {/* Why Switch Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Why Switch from Big 5 Banks to Credit Unions?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Big 5 Banks Extract</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>$56 billion profit in 2024 (record high)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Finance fossil fuels, offshore tax havens</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>$15/month in fees on average</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Shareholder profits over community</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Credit Unions Serve</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Member-owned (you get a vote)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Divested from fossil fuels</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Lower fees, better rates</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Fund local mortgages & small businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Switch */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">How to Switch Banks in 30 Days</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Week 1: Research & Open Account</h3>
                    <p className="text-textDim mb-3">Choose a local credit union (Vancity, Desjardins, Alterna). Open checking and savings accounts online or in-branch.</p>
                    <p className="text-sm text-textDim">Recommended: Vancity (BC), Desjardins (QC), Alterna (ON), Servus (AB)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Week 2: Redirect Direct Deposits</h3>
                    <p className="text-textDim">Update payroll, benefits, and any recurring deposits to your new credit union account.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Week 3: Transfer Pre-Authorized Payments</h3>
                    <p className="text-textDim">Move rent, utilities, subscriptions, and credit card autopay to your credit union.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Week 4: Close Big Bank Accounts</h3>
                    <p className="text-textDim">After 2 payroll cycles, transfer remaining balance and close your Big 5 accounts. Keep records.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <CTAButton href="/resources/bank-switch-toolkit" variant="primary">
                Get the Full 30-Day Toolkit
              </CTAButton>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <DollarSign className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-lg italic text-textDim mb-4">
                    &ldquo;Switching to Vancity took 3 weeks. I saved $180/year in fees, and my money now funds local mortgages instead of oil sands. Best financial decision I&apos;ve made.&rdquo;
                  </p>
                  <p className="font-semibold">— Sarah K., Vancouver</p>
                  <p className="text-sm text-textDim">Switched from TD to Vancity, March 2024</p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Are credit unions safe? Is my money protected?</h3>
                <p className="text-textDim">Yes. Credit unions are insured by provincial deposit insurance (up to $250,000 in most provinces) or CDIC, just like big banks. They&apos;re regulated by OSFI and provincial authorities.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Can I still use ATMs and online banking?</h3>
                <p className="text-textDim">Yes. Credit unions share ATM networks (Acculink, Exchange) with 3,000+ fee-free ATMs Canada-wide. Most offer full online/mobile banking, e-transfers, and bill payments.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Will switching hurt my credit score?</h3>
                <p className="text-textDim">No. Closing bank accounts doesn&apos;t affect credit scores. Only closing credit cards impacts your score (keep those open or transfer them separately).</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">What if I have a mortgage with a Big 5 bank?</h3>
                <p className="text-textDim">You can still switch your checking/savings. Keep your mortgage until renewal, then refinance with a credit union (they often offer better rates).</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How does this hurt Big 5 banks?</h3>
                <p className="text-textDim">Banks need deposits to lend. A $10B outflow triggers credit rating reviews by Moody&apos;s/S&P, regulatory scrutiny by OSFI, and forces them to raise capital or cut lending to billionaires.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Which credit union should I choose?</h3>
                <p className="text-textDim">
                  <strong>BC:</strong> Vancity, Coast Capital<br/>
                  <strong>QC:</strong> Desjardins<br/>
                  <strong>ON:</strong> Alterna, Meridian<br/>
                  <strong>AB:</strong> Servus, Connect First<br/>
                  <strong>National:</strong> Tangerine (online, ING-owned but better rates)
                </p>
              </Card>
            </div>
          </div>

          {/* Email Capture CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-card border-accent/50">
              <h2 className="text-2xl font-display font-bold mb-4">Ready to Starve the Banks?</h2>
              <p className="text-textDim mb-6">
                Join 100,000+ Canadians pledging to move their deposits. Get the 30-day toolkit, credit union comparison guide, and monthly progress updates.
              </p>
              <CTAButton href="/join#pledge" variant="primary" className="w-full sm:w-auto">
                Pledge to Switch Banks <ArrowRight className="inline h-5 w-5 ml-2" />
              </CTAButton>
              <p className="text-xs text-textDim mt-4">
                No spam. Unsubscribe anytime. We&apos;ll never sell your data.
              </p>
            </Card>
          </div>

          {/* Related Pages */}
          <div className="max-w-4xl mx-auto mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-display font-bold mb-6">Explore Other Tracks</h2>
            <div className="grid md:grid-cols-3 gap-6">
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
              <Card className="p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-display font-bold mb-2">Wealth Reset</h3>
                <p className="text-sm text-textDim mb-4">Build a Citizens&apos; Wealth Fund with billionaire taxes</p>
                <a href="/wealth-reset" className="text-accent text-sm hover:underline">Learn More →</a>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

