import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { MapPin, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapters — Find Your Local Movement",
  description: "Connect with organizers in your city. Join existing chapters or start your own.",
};

// Placeholder chapter data - in production, fetch from database
const chapters = [
  {
    id: 1,
    city: "Toronto",
    region: "Ontario",
    members: 342,
    nextMeeting: "Nov 15, 2025",
    contact: "info@99reset.org",
  },
  {
    id: 2,
    city: "Montreal",
    region: "Quebec",
    members: 287,
    nextMeeting: "Nov 12, 2025",
    contact: "info@99reset.org",
  },
  {
    id: 3,
    city: "Vancouver",
    region: "British Columbia",
    members: 216,
    nextMeeting: "Nov 18, 2025",
    contact: "info@99reset.org",
  },
  {
    id: 4,
    city: "Calgary",
    region: "Alberta",
    members: 143,
    nextMeeting: "Nov 20, 2025",
    contact: "info@99reset.org",
  },
];

export default function ChaptersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Find Your Chapter
            </h1>
            <p className="text-xl text-textDim">
              Connect with organizers in your city. Coordinate campaigns, 
              share resources, and build local power.
            </p>
            <CTAButton href="/chapters/apply" variant="primary">
              Start a New Chapter
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section dark className="border-y border-border">
        <Container>
          <div className="bg-card border border-border rounded-card p-12 text-center">
            <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
            <p className="text-textDim">
              Interactive chapter map coming soon
            </p>
          </div>
        </Container>
      </Section>

      {/* Chapter Directory */}
      <Section className="py-16">
        <Container>
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Active Chapters
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold">
                      {chapter.city}
                    </h3>
                    <p className="text-textDim">{chapter.region}</p>
                  </div>
                  <MapPin className="h-6 w-6 text-accent" />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-textDim">
                    <Users className="h-4 w-4" />
                    <span>{chapter.members} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-textDim">
                    <Calendar className="h-4 w-4" />
                    <span>Next meeting: {chapter.nextMeeting}</span>
                  </div>
                </div>

                <a
                  href={`mailto:${chapter.contact}`}
                  className="text-accent hover:text-accent/80 text-sm font-medium"
                >
                  {chapter.contact}
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section dark className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Don&apos;t See Your City?
            </h2>
            <p className="text-lg text-textDim">
              Start a chapter and connect with organizers in your region. 
              We&apos;ll provide resources, training, and support.
            </p>
            <CTAButton href="/chapters/apply" variant="primary">
              Apply to Start a Chapter
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

