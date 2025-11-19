import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { CheckCircle2, ArrowRight, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workplace Reset — Unionize & Convert to Worker Co-ops in Canada",
  description: "Build worker power through unions, then transition to worker ownership. Learn how to unionize your workplace, launch worker buyouts, and join 150+ Canadian co-ops. Democracy at work starts here.",
  keywords: "unionize Canada, worker co-op Canada, worker buyout, union organizing, start a union, worker cooperative, employee ownership, workplace democracy, union drive Canada",
};

export default function WorkplaceResetPage() {
  return (
    <>
      <Section className="py-12 md:py-20">
        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Own Your Workplace. <span className="text-accent">Share the Profits.</span>
            </h1>
            <p className="text-xl text-textDim mb-8">
              Unionize your workplace, then buy it out. Worker co-ops share profits equally, elect managers democratically, and never lay off for shareholder returns. Build real power at work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/join#union" variant="primary">
                Start a Union Drive
              </CTAButton>
              <CTAButton href="/resources/worker-coop-formation-guide" variant="secondary">
                Worker Co-op Guide
              </CTAButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">42,000</div>
              <p className="text-sm text-textDim">Worker-owners in Canadian co-ops</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">20%</div>
              <p className="text-sm text-textDim">Higher wages in unionized vs. non-union jobs</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">$40K</div>
              <p className="text-sm text-textDim">Average profit share per worker in Mondragon co-ops</p>
            </Card>
          </div>

          {/* Two-Track Approach */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Two Tracks to Worker Power</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-accent/5 border-accent/20">
                <h3 className="text-2xl font-display font-bold mb-4 text-accent">Track 1: Unionize</h3>
                <p className="text-textDim mb-4">
                  Build collective bargaining power. Unions raise wages 20%, secure benefits, and protect against arbitrary firing. Critical first step before ownership.
                </p>
                <ul className="space-y-2 text-textDim text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Contact existing union (UFCW, SEIU, Unifor)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>50%+1 of workers sign union cards</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>File for certification with Labour Board</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Negotiate first contract (6-12 months)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-accent/5 border-accent/20">
                <h3 className="text-2xl font-display font-bold mb-4 text-accent">Track 2: Worker Buyout</h3>
                <p className="text-textDim mb-4">
                  Convert to worker co-op. Employees own shares, elect board, share profits. When owner retires or sells, organize buyout with CWCF loans.
                </p>
                <ul className="space-y-2 text-textDim text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Build worker organizing committee</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Hire co-op developer (CWCF, worker co-op federation)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Secure financing (CWCF loans, worker shares)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Incorporate as worker co-op (one member, one vote)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* How to Unionize */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">How to Unionize Your Workplace in 90 Days</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Weeks 1-2: Build Core Committee</h3>
                    <p className="text-textDim mb-3">Recruit 3-5 trusted coworkers. Meet off-site. Identify workplace issues (wages, safety, favoritism). Keep organizing confidential from management.</p>
                    <p className="text-sm text-textDim">Tip: Choose organizers from different shifts/departments for maximum reach.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Weeks 3-4: Contact Union & Map Workplace</h3>
                    <p className="text-textDim mb-3">Reach out to established unions (UFCW for retail/food, SEIU for service, Unifor for auto/manufacturing). Map coworkers: supporters, undecided, management allies.</p>
                    <p className="text-sm text-textDim">Unions provide: Legal support, organizer training, strike funds.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Weeks 5-8: Collect Union Cards</h3>
                    <p className="text-textDim mb-3">One-on-one conversations with coworkers. Get 50%+1 to sign union cards. Goal: 70% support to weather management pressure. Use inoculation: address anti-union talking points preemptively.</p>
                    <p className="text-sm text-textDim">Common concerns: &ldquo;Will we strike?&rdquo; (Only if majority votes yes), &ldquo;Dues too high?&rdquo; (Avg $50/mo, but wages rise 20%).</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Weeks 9-12: File Certification & Negotiate</h3>
                    <p className="text-textDim">Submit cards to provincial Labour Board. Expect management anti-union campaign (legal consultants, captive-audience meetings). Stay strong. After certification, negotiate first contract with union bargaining team.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <CTAButton href="/resources/union-organizing-101" variant="primary">
                Get the Full Union Organizing Guide
              </CTAButton>
            </div>
          </div>

          {/* Worker Co-op Benefits */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Why Convert to a Worker Co-op?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Traditional Corporation</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Profits go to shareholders (often billionaires)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>No vote in company decisions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>Layoffs to boost stock price</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <span>CEO makes 300x average worker</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-accent">Worker Co-op</h3>
                <ul className="space-y-3 text-textDim">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Profits shared equally among workers</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>One member, one vote (elect board)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>No layoffs unless voted by members</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Managers paid 3-4x average worker (Mondragon rule)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <Users className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-lg italic text-textDim mb-4">
                    &ldquo;We unionized our warehouse in 2019, then bought the company when the owner retired in 2022. Now I make $68K + $12K profit share. We elect our managers. No one gets laid off to pad shareholder dividends.&rdquo;
                  </p>
                  <p className="font-semibold">— James L., Hamilton</p>
                  <p className="text-sm text-textDim">Worker-owner at Hamilton Logistics Co-op</p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Can my employer fire me for organizing a union?</h3>
                <p className="text-textDim">No. It&apos;s illegal under federal and provincial labour codes. If fired, file unfair labour practice complaint with Labour Board. Union will provide legal support and you&apos;ll likely be reinstated with back pay.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How much do union dues cost?</h3>
                <p className="text-textDim">Average $40-60/month (about 1.5% of wages). But unionized workers earn 20% more on average, so you gain $400-600/month in wages—a 10x return on dues.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Do I need to buy shares to join a worker co-op?</h3>
                <p className="text-textDim">Yes, but it&apos;s affordable. Most co-ops require $500-$5,000 membership share, often deducted from paychecks over 1-2 years. You get dividends + your share back if you leave.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">How do we afford to buy out the owner?</h3>
                <p className="text-textDim">
                  Canadian Worker Co-op Federation (CWCF) provides loans at low interest. Typical structure: 30% worker shares, 40% CWCF loan, 30% seller financing (owner gets paid over 5-10 years from co-op profits).
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">What if the owner won&apos;t sell?</h3>
                <p className="text-textDim">Start a competing worker co-op. Use your skills + union solidarity to attract customers. Example: Evergreen Cooperatives in Cleveland launched worker-owned laundry competing with corporate services.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">Are worker co-ops profitable?</h3>
                <p className="text-textDim">Yes. Mondragon (Spain) has 80,000 worker-owners, $12B revenue. In Canada, worker co-ops have 90% 5-year survival rate vs. 50% for traditional startups. Higher retention, productivity, and worker commitment.</p>
              </Card>
            </div>
          </div>

          {/* Email Capture CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-card border-accent/50">
              <h2 className="text-2xl font-display font-bold mb-4">Ready to Own Your Workplace?</h2>
              <p className="text-textDim mb-6">
                Connect with union organizers and co-op developers. Get the 90-day union organizing guide, worker buyout templates, and legal resources.
              </p>
              <CTAButton href="/join#union" variant="primary" className="w-full sm:w-auto">
                Start Organizing <ArrowRight className="inline h-5 w-5 ml-2" />
              </CTAButton>
              <p className="text-xs text-textDim mt-4">
                Confidential support. Free resources. Connect with experienced organizers.
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

