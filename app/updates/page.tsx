import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates & Briefings — 99% Reset",
  description: "Campaign updates, policy wins, analysis, and strategic briefings from the movement.",
};

async function getUpdates() {
  const updatesDirectory = path.join(process.cwd(), "content/updates");
  
  try {
    const filenames = await fs.readdir(updatesDirectory);
    const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));
    
    const updates = await Promise.all(
      mdxFiles.map(async (filename) => {
        const filePath = path.join(updatesDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContent);
        
        return {
          slug: filename.replace('.mdx', ''),
          title: data.title || 'Untitled',
          date: data.date || '',
          excerpt: data.excerpt || '',
          category: data.category || 'Update',
        };
      })
    );
    
    // Sort by date descending
    return updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    // Return empty array if directory doesn't exist yet
    return [];
  }
}

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Updates & Briefings
            </h1>
            <p className="text-xl text-textDim">
              Campaign wins, policy analysis, and strategic updates from the movement.
            </p>
          </div>
        </Container>
      </Section>

      {/* Updates Feed */}
      <Section dark className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {updates.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-textDim">No updates yet. Check back soon for campaign news and strategic briefings.</p>
              </Card>
            ) : (
              updates.map((update) => (
                <Link key={update.slug} href={`/updates/${update.slug}`}>
                  <Card className="space-y-4 hover:border-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 text-sm text-textDim">
                      <Calendar className="h-4 w-4" />
                      <span>{update.date}</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                        {update.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-display font-bold">
                      {update.title}
                    </h2>
                    <p className="text-textDim leading-relaxed">
                      {update.excerpt}
                    </p>
                    <span className="text-accent hover:text-accent/80 text-sm font-medium">
                      Read Full Update →
                    </span>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="border-t border-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Get Weekly Updates
            </h2>
            <p className="text-lg text-textDim">
              Campaign wins, new toolkits, and strategic briefings delivered every Friday.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}


