import { Container } from "@/components/container";
import { Section } from "@/components/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 99% Reset",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <Section className="py-20">
      <Container>
        <article className="max-w-3xl mx-auto prose prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-textDim">Last updated: November 9, 2025</p>

          <h2>Our Commitment</h2>
          <p>
            We collect only what we need to coordinate the movement. We never sell data. 
            We respect Do Not Track. We encrypt everything. We&apos;re transparent about 
            what we collect and why.
          </p>

          <h2>What We Collect</h2>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name, email, postal code, city when you 
              sign up for pledges, union drives, or chapter applications.
            </li>
            <li>
              <strong>Analytics:</strong> Aggregate page views via Plausible (privacy-first, 
              no cookies, no tracking).
            </li>
            <li>
              <strong>Cookies:</strong> None for tracking. Only session cookies for forms.
            </li>
          </ul>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>Send you updates related to your signup (pledge confirmations, organizer outreach)</li>
            <li>Coordinate campaigns and connect you with local chapters</li>
            <li>Aggregate statistics (e.g., total pledges, union drives by region)</li>
          </ul>

          <h2>What We Don&apos;t Do</h2>
          <ul>
            <li>Sell or share your data with third parties</li>
            <li>Track you across the web</li>
            <li>Use invasive analytics (no Google Analytics, no Facebook Pixel)</li>
            <li>Store data longer than necessary</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You can request data deletion, export, or corrections at any time by emailing{" "}
            <a href="mailto:privacy@99reset.org">privacy@99reset.org</a>.
          </p>

          <h2>Security</h2>
          <p>
            All data is encrypted in transit (TLS) and at rest. Database access is restricted 
            to core organizers only.
          </p>

          <h2>Changes</h2>
          <p>
            We&apos;ll notify you via email if we make material changes to this policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:privacy@99reset.org">privacy@99reset.org</a>
          </p>
        </article>
      </Container>
    </Section>
  );
}


