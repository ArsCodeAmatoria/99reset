import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { MDXRenderer } from "@/components/mdx";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function getUpdate(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/updates", `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);
    
    return {
      title: data.title || 'Untitled',
      date: data.date || '',
      category: data.category || 'Update',
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const update = await getUpdate(slug);
  
  if (!update) {
    return {
      title: "Update Not Found",
    };
  }

  return {
    title: `${update.title} — 99% Reset`,
    description: `${update.category} update from the 99% Reset movement.`,
  };
}

export default async function UpdatePostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const update = await getUpdate(slug);

  if (!update) {
    notFound();
  }

  return (
    <Section className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link 
            href="/updates" 
            className="inline-flex items-center gap-2 text-sm text-textDim hover:text-text transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Updates
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-textDim mb-4">
              <Calendar className="h-4 w-4" />
              <span>{update.date}</span>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                {update.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {update.title}
            </h1>
          </header>

          {/* Article content */}
          <article>
            <MDXRenderer source={update.content} />
          </article>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-display font-bold">Take Action</h3>
              <p className="text-textDim">
                Join the movement to shift ownership and bargaining power to workers and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/join" className="btn-primary">
                  Join the Reset
                </Link>
                <Link href="/chapters" className="btn-secondary">
                  Find a Chapter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

