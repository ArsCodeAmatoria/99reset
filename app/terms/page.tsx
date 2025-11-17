import { Container } from "@/components/container";
import { Section } from "@/components/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — 99reset",
  description: "Terms and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <Section className="py-20">
      <Container>
        <article className="max-w-3xl mx-auto prose prose-invert">
          <h1>Terms of Use</h1>
          <p className="text-textDim">Last updated: November 9, 2025</p>

          <h2>Acceptance</h2>
          <p>
            By using this site and participating in the movement, you agree to these terms.
          </p>

          <h2>Purpose</h2>
          <p>
            This platform exists to coordinate non-violent, institutional campaigns to shift 
            ownership and bargaining power to workers and communities. All actions must be 
            legal and non-violent.
          </p>

          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Advocate violence or illegal activity</li>
            <li>Impersonate others or provide false information</li>
            <li>Spam, harass, or abuse other participants</li>
            <li>Attempt to breach security or access others&apos; data</li>
          </ul>

          <h2>Content</h2>
          <p>
            Toolkits, guides, and resources are provided for educational purposes. 
            We make no warranties about completeness or applicability to your situation. 
            Consult legal/financial advisors before taking action.
          </p>

          <h2>Liability</h2>
          <p>
            We are not liable for outcomes of campaigns, employer retaliation, legal disputes, 
            or financial losses. Union organizing and co-op formation carry risks—proceed 
            with informed consent.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or ban users who violate these terms or engage in bad-faith behavior.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by Canadian law. Disputes resolved in Ontario courts.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:info@99reset.org">info@99reset.org</a>
          </p>
        </article>
      </Container>
    </Section>
  );
}


