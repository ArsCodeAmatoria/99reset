import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { ChapterForm } from "@/components/chapter-form";
import { BackButton } from "@/components/back-button";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Chapter — 99% Reset",
  description: "Apply to start a local chapter and organize your community.",
};

export default function ChapterApplicationPage() {
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
              Start a Chapter
            </h1>
            <p className="text-xl text-textDim">
              Lead the movement in your city. We&apos;ll provide training, 
              resources, and connections to build local power.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section dark className="border-y border-border py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">
              What You&apos;ll Get
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Organizer training and mentorship",
                "Campaign toolkits and templates",
                "Connection to national network",
                "Legal and policy support",
                "Access to Wealth Fund grants",
                "Monthly chapter calls and strategy sessions",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-textDim">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-2">
                    Chapter Application
                  </h2>
                  <p className="text-textDim">
                    Tell us about yourself and why you want to start a chapter. 
                    We&apos;ll follow up within one week.
                  </p>
                </div>
                <ChapterForm />
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}


