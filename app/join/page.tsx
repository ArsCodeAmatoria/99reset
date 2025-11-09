import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { PledgeForm } from "@/components/pledge-form";
import { UnionForm } from "@/components/union-form";
import { FounderForm } from "@/components/founder-form";
import { BackButton } from "@/components/back-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Reset — Take Action Today",
  description: "Move your money, organize your workplace, or build worker-owned alternatives. Three ways to shift power now.",
};

export default function JoinPage() {
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
              Join the Reset
            </h1>
            <p className="text-xl text-textDim">
              Three concrete ways to shift ownership and bargaining power. 
              Choose your track and take action today.
            </p>
          </div>
        </Container>
      </Section>

      {/* Forms Section */}
      <Section dark className="pb-24">
        <Container>
          <div className="space-y-16 max-w-2xl mx-auto">
            {/* Pledge Form */}
            <Card id="pledge">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-2">
                    1. Bank-Switch Pledge
                  </h2>
                  <p className="text-textDim">
                    Move deposits from corporate banks to credit unions. 
                    Cut off capital to the 1% and build member-owned finance.
                  </p>
                </div>
                <PledgeForm />
              </div>
            </Card>

            {/* Union Form */}
            <Card id="union">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-2">
                    2. Start a Union Drive
                  </h2>
                  <p className="text-textDim">
                    Organize your workplace for collective bargaining. 
                    We&apos;ll connect you with experienced organizers and legal support.
                  </p>
                </div>
                <UnionForm />
              </div>
            </Card>

            {/* Founder Form */}
            <Card id="founders">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-2">
                    3. Found a Co-op or CLT
                  </h2>
                  <p className="text-textDim">
                    Build worker-owned businesses or community land trusts. 
                    Access startup capital, legal support, and mentorship.
                  </p>
                </div>
                <FounderForm />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Info Section */}
      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-textDim">
              All three tracks work together. Move money <em>and</em> organize labour. 
              Found a co-op <em>and</em> unionize your current job. 
              Institutional change requires coordinated action.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}


