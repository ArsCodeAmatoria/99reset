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
    <nav className="sticky top-24 space-y-2" aria-label="Table of contents">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-textDim mb-4">
        Contents
      </h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-textDim hover:text-text transition-colors block py-1"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
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


