import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Reset — Community Land Trusts & Affordable Housing in Canada",
  description: "Secure permanently affordable housing through Community Land Trusts (CLTs). Keep homes 40-50% below market forever. Join the movement to end speculation and make housing a right, not a commodity.",
  keywords: "community land trust Canada, affordable housing Canada, housing co-op Canada, CLT housing, buy affordable home, stop housing speculation, permanent affordability, housing crisis solution",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Launch a Community Land Trust in Canada",
  description: "A step-by-step guide to creating a Community Land Trust for permanently affordable housing in your city.",
  step: [
    {
      "@type": "HowToStep",
      name: "Build Coalition",
      text: "Partner with tenant unions, housing advocates, churches, and local chapters. Need 20-30 core organizers.",
      position: 1
    },
    {
      "@type": "HowToStep",
      name: "Incorporate Nonprofit",
      text: "File as nonprofit corporation. Draft bylaws ensuring community control, resale formulas, and democratic governance.",
      position: 2
    },
    {
      "@type": "HowToStep",
      name: "Secure Land",
      text: "Request municipal land donations. Crowdfund via community bonds. Apply for CMHC grants or speculation tax revenue.",
      position: 3
    },
    {
      "@type": "HowToStep",
      name: "Build or Convert Housing",
      text: "Partner with co-op housing developers or convert existing buildings. Aim for 50-100 units in first phase.",
      position: 4
    }
  ],
  totalTime: "P36M"
};

export default function HousingResetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Section className="py-12 md:py-20">
        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Affordable Housing. <span className="text-accent">Forever.</span>
            </h1>
            <p className="text-xl text-textDim mb-8">
              Community Land Trusts (CLTs) separate land from housing, keeping homes 40-50% below market in perpetuity. No speculation. No flipping. Just secure, affordable shelter for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/join#founders" variant="primary">
                Start a CLT in Your City
              </CTAButton>
              <CTAButton href="/resources/community-land-trust-primer" variant="secondary">
                CLT Formation Guide
              </CTAButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">+350%</div>
              <p className="text-sm text-textDim">Housing price increase since 1979 vs. 40% wage growth</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">40-50%</div>
              <p className="text-sm text-textDim">Below market forever in CLT homes</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">0</div>
              <p className="text-sm text-textDim">Foreclosures in Burlington CLT during 2008 crisis</p>
            </Card>
          </div>

          {/* What is a CLT */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">What is a Community Land Trust?</h2>
            
            <Card className="p-8 mb-8 bg-accent/5 border-accent/20">
              <p className="text-lg text-textDim mb-4">
                A <strong className="text-text">Community Land Trust (CLT)</strong> is a nonprofit that owns land and leases it to residents at affordable rates. You buy the house (or co-op shares), but the land stays in the trust forever—capping resale prices and ensuring perpetual affordability.
              </p>
              <p className="text-lg text-textDim">
                <strong className="text-text">How it works:</strong> CLT buys land ($300K) via grants/bonds → You buy house only ($200K vs. $800K market) → Monthly lease fee $50-150 → When you sell, CLT caps your profit to keep next buyer&apos;s price affordable.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Traditional Housing (Speculation)</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Prices rise 350% while wages stagnate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Billionaires flip homes for profit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Families priced out every generation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Foreclosures during recessions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">CLT Housing (Permanence)</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>40-50% below market forever</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>No speculation or flipping</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Affordable for next generation too</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Zero foreclosures (proven track record)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Start a CLT */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">How to Launch a Community Land Trust</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Build Coalition (Months 1-3)</h3>
                    <p className="text-textDim mb-3">Partner with tenant unions, housing advocates, churches, and local chapters. Need 20-30 core organizers.</p>
                    <p className="text-sm text-textDim">Key allies: ACORN, co-op housing federations, municipal councillors</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Incorporate Nonprofit (Months 4-6)</h3>
                    <p className="text-textDim">File as nonprofit corporation (federally or provincially). Draft bylaws ensuring community control, resale formulas, and democratic governance.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Secure Land (Months 6-18)</h3>
                    <p className="text-textDim mb-3">Request municipal land donations (surplus schools, parking lots). Crowdfund via community bonds. Apply for CMHC grants or speculation tax revenue.</p>
                    <p className="text-sm text-textDim">Funding sources: Municipal donations, community bonds ($100-$5K/investor), vacancy tax revenue</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Build or Convert Housing (Months 18-36)</h3>
                    <p className="text-textDim">Partner with co-op housing developers or convert existing buildings. Use fast-track zoning for social housing. Aim for 50-100 units in first phase.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <CTAButton href="/resources/community-land-trust-primer" variant="primary">
                Get the Full CLT Formation Guide
              </CTAButton>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <Home className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-lg italic text-textDim mb-4">
                    &ldquo;I bought my CLT home in Burlington for $180K when market rate was $450K. 15 years later, market&apos;s at $800K, but I&apos;m still paying my affordable mortgage. My kids will inherit this security.&rdquo;
                  </p>
                  <p className="font-semibold">— Maria T., Burlington</p>
                  <p className="text-sm text-textDim">Burlington CLT resident since 2009</p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Do I actually own my CLT home?</h3>
                <p className="text-textDim">Yes. You own the house (or co-op shares) and can mortgage, renovate, and live in it like any homeowner. You lease the land from the CLT for $50-150/month, which covers property taxes.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Can I sell my CLT home and make a profit?</h3>
                <p className="text-textDim">Yes, but capped. Most CLTs let you keep 25% of appreciation. Example: You buy for $200K, sell for $300K → You get $225K ($200K + 25% of $100K gain). This keeps next buyer&apos;s price affordable.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How is this different from co-op housing?</h3>
                <p className="text-textDim">Co-ops are resident-owned buildings (you buy shares, not property). CLTs own land and lease to individuals/co-ops/nonprofits. Many CLTs partner with housing co-ops for maximum affordability.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Where do CLTs get funding to buy land?</h3>
                <p className="text-textDim">
                  • Municipal land donations (surplus public land)<br/>
                  • Community bonds (residents invest $100-$5K)<br/>
                  • CMHC co-investment grants<br/>
                  • Speculation/vacancy tax revenue<br/>
                  • Philanthropic foundations
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Are there CLTs in Canada already?</h3>
                <p className="text-textDim">Yes! Vancouver Community Land Trust, Cooper Institute (PEI), and dozens of co-op land trusts. Burlington, Vermont (just across the border) has the longest-running model—565 homes, zero foreclosures since 1984.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How long does it take to start a CLT?</h3>
                <p className="text-textDim">18-36 months from coalition to first homes. Burlington took 3 years (1984-1987). Vancouver CLT launched in 2019, secured first land in 2021. Faster if your city donates land upfront.</p>
              </Card>
            </div>
          </div>

          {/* Email Capture CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-card border-accent/50">
              <h2 className="text-2xl font-display font-bold mb-4">Ready to Secure Affordable Housing Forever?</h2>
              <p className="text-textDim mb-6">
                Join organizers launching CLTs in 50+ Canadian cities. Get the formation guide, legal templates, and connect with experienced CLT founders.
              </p>
              <CTAButton href="/join#founders" variant="primary" className="w-full sm:w-auto">
                Start a CLT in Your City <ArrowRight className="inline h-5 w-5 ml-2" />
              </CTAButton>
              <p className="text-xs text-textDim mt-4">
                Free resources. No spam. Connect with local organizers.
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

