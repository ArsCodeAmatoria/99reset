import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { MDXRenderer } from "@/components/mdx";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function getResource(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/resources", `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);
    
    return {
      title: data.title || 'Untitled',
      category: data.category || 'Resource',
      description: data.description || '',
      content,
    };
  } catch (error) {
    console.error(`Error reading resource ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const resource = await getResource(slug);
  
  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: `${resource.title} — 99% Reset`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const resource = await getResource(slug);

  if (!resource) {
    notFound();
  }

  return (
    <Section className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Resource header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-textDim mb-4">
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                {resource.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {resource.title}
            </h1>
            <p className="text-xl text-textDim leading-relaxed">
              {resource.description}
            </p>
          </header>

          {/* Resource content */}
          <article className="mdx-content">
            <MDXRenderer source={resource.content} hideTitle={true} />
          </article>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-display font-bold">Ready to Take Action?</h3>
              <p className="text-textDim">
                Join the movement and connect with others using these tools in your community.
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

