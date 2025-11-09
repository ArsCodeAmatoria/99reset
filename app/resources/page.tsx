import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { FileText, BookOpen, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Toolkits — 99% Reset",
  description: "Guides, templates, and toolkits for bank switching, union organizing, and co-op formation.",
};

const iconMap = {
  FileText: FileText,
  BookOpen: BookOpen,
  Users: Users,
};

async function getResources() {
  const resourcesDirectory = path.join(process.cwd(), "content/resources");
  
  try {
    const filenames = await fs.readdir(resourcesDirectory);
    const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));
    
    const resources = await Promise.all(
      mdxFiles.map(async (filename) => {
        try {
          const filePath = path.join(resourcesDirectory, filename);
          const fileContent = await fs.readFile(filePath, "utf8");
          const { data } = matter(fileContent);
          
          return {
            slug: filename.replace('.mdx', ''),
            title: data.title || 'Untitled',
            description: data.description || '',
            category: data.category || 'Resource',
            icon: data.icon || 'FileText',
          };
        } catch (error) {
          console.error(`Error parsing ${filename}:`, error);
          return null;
        }
      })
    );
    
    return resources.filter(Boolean) as Array<{
      slug: string;
      title: string;
      description: string;
      category: string;
      icon: string;
    }>;
  } catch (error) {
    console.error('Error reading resources directory:', error);
    return [];
  }
}

export default async function ResourcesPage() {
  const resources = await getResources();
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Resources & Toolkits
            </h1>
            <p className="text-xl text-textDim">
              Practical guides for taking action. Bank switching, union organizing, 
              co-op formation, and policy advocacy.
            </p>
          </div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section dark className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = iconMap[resource.icon as keyof typeof iconMap] || FileText;
              return (
                <Link key={resource.slug} href={`/resources/${resource.slug}`}>
                  <Card className="space-y-4 hover:border-accent/50 transition-colors cursor-pointer h-full">
                    <div className="flex items-start justify-between">
                      <Icon className="h-8 w-8 text-accent" />
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-textDim leading-relaxed">
                      {resource.description}
                    </p>
                    <span className="btn-secondary text-sm inline-block">
                      Read Guide
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Need Custom Support?
            </h2>
            <p className="text-lg text-textDim">
              Chapters get access to one-on-one consultations, legal support, 
              and customized toolkits for local campaigns.
            </p>
            <a href="/chapters/apply" className="btn-primary inline-block">
              Start a Chapter
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}


