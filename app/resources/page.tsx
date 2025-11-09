import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { BackButton } from "@/components/back-button";
import { FileText, BookOpen, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Toolkits — 99% Reset",
  description: "Guides, templates, and toolkits for bank switching, union organizing, and co-op formation.",
};

// Placeholder resources - in production, fetch from MDX files
const resources = [
  {
    id: 1,
    title: "Bank Switch Toolkit",
    description: "Step-by-step guide to moving deposits from corporate banks to credit unions. Includes comparison charts and conversation scripts.",
    category: "Finance",
    icon: FileText,
  },
  {
    id: 2,
    title: "Union Organizing 101",
    description: "Card-check campaigns, legal rights, employer tactics, and how to build majority support in your workplace.",
    category: "Labour",
    icon: Users,
  },
  {
    id: 3,
    title: "Worker Co-op Formation Guide",
    description: "Legal structures, governance models, financing options, and sector-specific case studies for starting a co-op.",
    category: "Ownership",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Community Land Trust Primer",
    description: "How CLTs work, resale formulas, governance structures, and step-by-step guide to launching a CLT in your city.",
    category: "Ownership",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Policy Advocacy Toolkit",
    description: "Template legislation, lobbying strategies, and coalition-building for wealth taxes, labour law reform, and co-op incentives.",
    category: "Policy",
    icon: FileText,
  },
  {
    id: 6,
    title: "Chapter Organizer Handbook",
    description: "How to run meetings, plan campaigns, build coalitions, and grow your chapter from 10 to 1000 members.",
    category: "Organizing",
    icon: Users,
  },
];

export default function ResourcesPage() {
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
              Resources & Toolkits
            </h1>
            <p className="text-xl text-textDim">
              Practical guides for taking action. Bank switching, union organizing, 
              co-op formation, and policy advocacy.
            </p>
          </div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section dark className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="space-y-4 hover:border-accent/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <Icon className="h-8 w-8 text-accent" />
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-textDim leading-relaxed">
                    {resource.description}
                  </p>
                  <button className="btn-secondary text-sm">
                    Read Guide
                  </button>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Need Custom Support?
            </h2>
            <p className="text-lg text-textDim">
              Chapters get access to one-on-one consultations, legal support, 
              and customized toolkits for local campaigns.
            </p>
            <a href="/chapters/apply" className="btn-primary inline-block">
              Start a Chapter
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}


