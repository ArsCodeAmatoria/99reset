import { promises as fs } from "fs";
import path from "path";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { MDXRenderer } from "@/components/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Plan — The 99% Reset",
  description: "Non-violent ownership shift: finance, labour, ownership, policy. Make the 1% irrelevant within a generation.",
};

async function getPlanContent() {
  const filePath = path.join(process.cwd(), "content", "plan.mdx");
  const fileContent = await fs.readFile(filePath, "utf8");
  return fileContent;
}

// Table of Contents component
function TableOfContents() {
  const sections = [
    { id: "finance", label: "1. Finance" },
    { id: "ownership", label: "2. Ownership" },
    { id: "labour", label: "3. Labour" },
    { id: "policy", label: "4. Policy" },
    { id: "kpis", label: "KPIs" },
  ];

  return (
    <nav className="sticky top-24 space-y-4" aria-label="Table of contents">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-textDim mb-3">
          Contents
        </h3>
        <ul className="space-y-1.5 border-l-2 border-border pl-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-textDim hover:text-accent transition-colors block py-1"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-border">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-textDim mb-2">
          Quick Links
        </h4>
        <ul className="space-y-1.5 text-xs">
          <li>
            <a href="/resources/bank-switch-toolkit" className="text-textDim hover:text-accent transition-colors block py-1">
              Bank Switch Guide
            </a>
          </li>
          <li>
            <a href="/resources/union-organizing-101" className="text-textDim hover:text-accent transition-colors block py-1">
              Union Organizing
            </a>
          </li>
          <li>
            <a href="/resources/worker-coop-formation-guide" className="text-textDim hover:text-accent transition-colors block py-1">
              Start a Co-op
            </a>
          </li>
          <li>
            <a href="/resources/community-land-trust-primer" className="text-textDim hover:text-accent transition-colors block py-1">
              CLT Primer
            </a>
          </li>
          <li>
            <a href="/resources/policy-advocacy-toolkit" className="text-textDim hover:text-accent transition-colors block py-1">
              Policy Toolkit
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-4">
        <a 
          href="/join" 
          className="block text-center text-sm font-semibold bg-accent text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          Take Action
        </a>
      </div>
    </nav>
  );
}

export default async function PlanPage() {
  const content = await getPlanContent();

  return (
    <Section className="py-12 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          {/* Sidebar TOC - hidden on mobile */}
          <aside className="hidden lg:block">
            <TableOfContents />
          </aside>

          {/* Main content */}
          <article className="max-w-4xl">
            <MDXRenderer source={content} />
          </article>
        </div>
      </Container>
    </Section>
  );
}


