import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates & Briefings — Ninety Nine",
  description: "Campaign updates, policy wins, analysis, and strategic briefings from the movement.",
};

async function getUpdates() {
  const updatesDirectory = path.join(process.cwd(), "content/updates");
  
  try {
    const filenames = await fs.readdir(updatesDirectory);
    const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));
    
    const updates = await Promise.all(
      mdxFiles.map(async (filename) => {
        try {
          const filePath = path.join(updatesDirectory, filename);
          const fileContent = await fs.readFile(filePath, "utf8");
          const { data } = matter(fileContent);
          
          return {
            slug: filename.replace('.mdx', ''),
            title: data.title || 'Untitled',
            date: data.date || '',
            excerpt: data.excerpt || '',
            category: data.category || 'Update',
            image: data.image || null,
          };
        } catch (error) {
          console.error(`Error parsing ${filename}:`, error);
          return null;
        }
      })
    );
    
    // Filter out null entries and sort by date descending
    const validUpdates = updates.filter(Boolean) as Array<{
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      category: string;
      image: string | null;
    }>;
    
    return validUpdates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading updates directory:', error);
    // Return empty array if directory doesn't exist yet
    return [];
  }
}

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12 bg-gradient-to-b from-accent/5 to-bg">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-accent" />
              <span className="text-sm font-mono text-accent">更新情報</span>
              <div className="h-4 w-px bg-accent/30" />
              <span className="text-sm text-textDim">kōshin jōhō · updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Updates & <span className="text-accent">Briefings</span>
            </h1>
            <p className="text-xl text-textDim max-w-2xl mx-auto">
              Campaign wins, policy analysis, and strategic updates from the movement.
            </p>
          </div>
        </Container>
      </Section>

      {/* Updates Feed */}
      <Section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto space-y-12">
            {updates.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-textDim">No updates yet. Check back soon for campaign news and strategic briefings.</p>
              </Card>
            ) : (
              updates.map((update, index) => (
                <Link key={update.slug} href={`/updates/${update.slug}`}>
                  <Card className="group overflow-hidden hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/5">
                    {update.image ? (
                      <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-[400px_1fr]' : 'md:grid-cols-[1fr_400px]'} gap-8`}>
                        {/* Image - Left for even, Right for odd */}
                        <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                          <Image
                            src={update.image}
                            alt={update.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className={`flex flex-col justify-center space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                          <div className="flex items-center gap-3 text-sm text-textDim">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-mono">
                              {update.category}
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-display font-bold group-hover:text-accent transition-colors">
                            {update.title}
                          </h2>

                          <p className="text-textDim leading-relaxed line-clamp-3">
                            {update.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-accent font-medium pt-2">
                            <span>Read Full Analysis</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* No image layout */
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-textDim">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-mono">
                            {update.category}
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-display font-bold group-hover:text-accent transition-colors">
                          {update.title}
                        </h2>

                        <p className="text-textDim leading-relaxed">
                          {update.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-accent font-medium pt-2">
                          <span>Read Full Analysis</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}
                  </Card>
                </Link>
              ))
            )}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="py-20 bg-gradient-to-br from-accent/10 to-bg border-t border-accent/20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-card to-accent/5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-mono text-accent">購読</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-sm text-textDim">kōdoku · subscribe</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Get Weekly Updates
              </h2>
              <p className="text-lg text-textDim max-w-xl mx-auto">
                Campaign wins, new toolkits, and strategic briefings delivered every Friday.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input flex-1"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-textDim pt-2">
                知識は力なり · Knowledge is power
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}


