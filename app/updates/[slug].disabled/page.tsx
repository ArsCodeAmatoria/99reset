import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MDXRenderer } from "@/components/mdx";
import { Calendar, ArrowLeft, BookOpen, Share2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function getUpdate(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/updates", `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);
    
    console.log(`Successfully parsed frontmatter for ${slug}`);
    console.log('Content length:', content.length);
    
    return {
      title: data.title || 'Untitled',
      date: data.date || '',
      category: data.category || 'Update',
      excerpt: data.excerpt || '',
      image: data.image || null,
      content,
    };
  } catch (error) {
    console.error(`Error reading update ${slug}:`, error);
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
    title: `${update.title} — Ninety Nine`,
    description: update.excerpt || `${update.category} update from the 99% Reset movement.`,
  };
}

export default async function UpdatePostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const update = await getUpdate(slug);

  if (!update) {
    notFound();
  }

  // Simple hash to determine image side alternation
  const hashCode = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageOnLeft = hashCode % 2 === 0;

  return (
    <>
      {/* Back Button */}
      <Section className="pt-24 pb-0">
        <Container>
          <Link 
            href="/updates" 
            className="inline-flex items-center gap-2 text-textDim hover:text-accent transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Updates</span>
          </Link>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section className="py-12 md:py-16 bg-gradient-to-b from-accent/5 to-bg">
        <Container>
          <div className="max-w-6xl mx-auto">
            {update.image ? (
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={update.image}
                    alt={update.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span className="text-xs font-mono text-accent">{update.category}</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                    {update.title}
                  </h1>

                  {update.excerpt && (
                    <p className="text-lg md:text-xl text-textDim leading-relaxed">
                      {update.excerpt}
                    </p>
                  )}

                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-textDim">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm text-textDim hover:text-accent transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* No image layout */
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span className="text-xs font-mono text-accent">{update.category}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                  {update.title}
                </h1>

                {update.excerpt && (
                  <p className="text-xl md:text-2xl text-textDim leading-relaxed max-w-3xl mx-auto">
                    {update.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-4 justify-center pt-4">
                  <div className="flex items-center gap-2 text-sm text-textDim">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm text-textDim hover:text-accent transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section className="py-12 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="mdx-content">
              <MDXRenderer source={update.content} hideTitle={true} />
            </article>
          </div>
        </Container>
      </Section>

      {/* Footer CTA */}
      <Section className="py-16 bg-gradient-to-br from-accent/10 to-bg border-t border-accent/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-card to-accent/5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-mono text-accent">行動</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">kōdō · action</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold">
                Join the <span className="text-accent">Reset</span>
              </h3>

              <p className="text-lg text-textDim max-w-2xl mx-auto">
                Shift ownership and bargaining power to workers and communities. Start building the alternative today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/plan" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-display font-bold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                  Read the Plan
                </Link>
                <Link href="/resources" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card hover:bg-border border border-border text-text font-display font-bold rounded-lg transition-all hover:scale-105">
                  Explore Resources
                </Link>
              </div>

              <p className="text-xs text-textDim pt-4">
                団結すれば強い · United we are strong
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}

