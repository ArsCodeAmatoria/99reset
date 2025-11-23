import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { FileText, BookOpen, Users, ArrowRight, Scale, Building2, Building, Megaphone, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Toolkits — 99% Reset",
  description: "Guides, templates, and toolkits for bank switching, union organizing, and co-op formation.",
};

// Map resources to images
const imageMap: Record<string, string> = {
  'bank-switch-toolkit': '/images/resources.png',
  'union-organizing-101': '/images/resources1.png',
  'worker-coop-formation-guide': '/images/resources2.png',
  'community-land-trust-primer': '/images/resources3.png',
  'policy-advocacy-toolkit': '/images/resources4.png',
  'chapter-organizer-handbook': '/images/resources5.png',
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
      {/* Hero with Japanese */}
      <Section className="pt-20 pb-16 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Japanese Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-mono text-accent">リソース</span>
              <div className="h-3 w-px bg-accent/30" />
              <span className="text-sm text-textDim">Resources</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Tools for the 99%
            </h1>
            <p className="text-xl text-textDim leading-relaxed">
              Practical guides and toolkits for building worker power. From bank boycotts 
              to union organizing, we provide the blueprints for democratic change.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{resources.length}</div>
                <div className="text-sm text-textDim">Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-textDim">Free</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">Open</div>
                <div className="text-sm text-textDim">Source</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section className="py-16 border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Japanese Concept */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-xs font-mono text-accent">哲学</span>
                  <div className="h-3 w-px bg-accent/30" />
                  <span className="text-xs text-textDim">Philosophy</span>
                </div>
                
                <h2 className="text-4xl font-display font-bold">
                  相互扶助<br />
                  <span className="text-2xl text-accent">Sōgo Fujo</span>
                </h2>
                
                <div className="space-y-4 text-textDim leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-text">Mutual Aid:</strong> The principle that communities thrive 
                    through cooperation, not competition. Resources aren&apos;t just information—they&apos;re 
                    tools for collective liberation.
                  </p>
                  <p>
                    Every guide here is built on decades of organizing experience. From the Montgomery 
                    Bus Boycott to Mondragón&apos;s worker cooperatives, these tactics have proven results.
                  </p>
                </div>
              </div>

              {/* Right: Key Concepts */}
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text mb-1">連帯 (Rentai)</h3>
                      <p className="text-sm text-textDim">
                        <strong>Solidarity:</strong> Worker power grows when we organize together across industries, 
                        borders, and identities.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Scale className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text mb-1">公正 (Kōsei)</h3>
                      <p className="text-sm text-textDim">
                        <strong>Equity:</strong> True fairness means redistributing wealth and power, 
                        not just access.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text mb-1">自治 (Jichi)</h3>
                      <p className="text-sm text-textDim">
                        <strong>Self-Governance:</strong> Workers and communities control their own institutions 
                        through democratic ownership.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section className="py-16 bg-card/30">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-xs font-mono text-accent">道具</span>
              <div className="h-3 w-px bg-accent/30" />
              <span className="text-xs text-textDim">Tools</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">
              Practical Organizing Guides
            </h2>
            <p className="text-textDim">
              Step-by-step toolkits tested by organizers in the field. Download, adapt, and deploy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = iconMap[resource.icon as keyof typeof iconMap] || FileText;
              const image = imageMap[resource.slug] || '/images/resources.png';
              
              return (
                <Link key={resource.slug} href={`/resources/${resource.slug}`}>
                  <Card className="group overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-card">
                      <Image
                        src={image}
                        alt={resource.title}
                        width={800}
                        height={600}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                        {resource.category}
                      </span>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute bottom-4 right-4">
                        <div className="p-2.5 bg-bg/95 backdrop-blur-sm rounded-full border-2 border-accent/30 shadow-lg">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold group-hover:text-accent transition-colors">
                      {resource.title}
                    </h3>
                      <p className="text-sm text-textDim leading-relaxed flex-1">
                      {resource.description}
                    </p>
                      
                      {/* Japanese Sub-heading */}
                      <div className="flex items-center gap-2 text-xs text-accent/70 font-mono pt-3 border-t border-border/50">
                        <span>実践的なガイド</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How to Use Section */}
      <Section className="py-16 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-xs font-mono text-accent">使い方</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-xs text-textDim">How to Use</span>
              </div>
              <h2 className="text-3xl font-display font-bold">
                From Theory to Action
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="font-display font-bold text-lg">
                  学ぶ (Manabu)
                </h3>
                <p className="text-sm text-textDim">
                  <strong>Learn:</strong> Read the guide thoroughly. Understand the theory, 
                  tactics, and potential obstacles.
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-display font-bold text-lg">
                  適応 (Tekiō)
                </h3>
                <p className="text-sm text-textDim">
                  <strong>Adapt:</strong> Customize for your local context. Every community 
                  has unique conditions and opportunities.
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-display font-bold text-lg">
                  実行 (Jikkō)
                </h3>
                <p className="text-sm text-textDim">
                  <strong>Execute:</strong> Take action with your collective. Document results 
                  and share learnings.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Possible */}
      <Section className="py-16 bg-card/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-xs font-mono text-accent">可能性</span>
                <div className="h-3 w-px bg-accent/30" />
                <span className="text-xs text-textDim">What&apos;s Possible</span>
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">
                The Power of Collective Action
              </h2>
              <p className="text-textDim">
                These tools enable coordinated campaigns that shift real economic power.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-accent">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Building className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-bold">
                      Credit Unions
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">Redirect Capital Flow</h3>
                  <p className="text-sm text-textDim leading-relaxed">
                    Coordinated bank switches can move millions from extractive institutions 
                    to democratic financial cooperatives that serve communities.
                  </p>
                  <div className="text-xs text-accent font-mono">
                    転換 → Capital redirection
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Megaphone className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-bold">
                      Union Organizing
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">Build Worker Power</h3>
                  <p className="text-sm text-textDim leading-relaxed">
                    Step-by-step organizing guides help workers win certification votes, 
                    negotiate contracts, and secure democratic voice at work.
                  </p>
                  <div className="text-xs text-accent font-mono">
                    組合 → Collective bargaining
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Home className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-bold">
                      Community Land Trusts
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">Secure Permanent Affordability</h3>
                  <p className="text-sm text-textDim leading-relaxed">
                    CLT models remove housing from speculative markets permanently, 
                    ensuring affordability for generations.
                  </p>
                  <div className="text-xs text-accent font-mono">
                    土地 → Democratic housing
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-bold">
                      Worker Co-ops
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">Democratic Ownership</h3>
                  <p className="text-sm text-textDim leading-relaxed">
                    Worker cooperatives distribute profits equitably and give every 
                    member an equal vote in business decisions.
                  </p>
                  <div className="text-xs text-accent font-mono">
                    協同 → Shared prosperity
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA with Japanese */}
      <Section className="py-20 border-t border-border bg-gradient-to-b from-transparent to-accent/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Japanese Proverb */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border">
              <span className="text-sm font-mono text-accent">団結は力なり</span>
              <div className="h-3 w-px bg-border" />
              <span className="text-xs text-textDim">Unity is strength</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              力を合わせて<br />
              <span className="text-xl text-accent">Build Together</span>
            </h2>
            <p className="text-lg text-textDim leading-relaxed">
              These tools are even more powerful when used collectively. Connect with organizers, 
              share strategies, and coordinate campaigns for maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/plan" className="btn-primary inline-flex items-center gap-2">
                Read the Plan
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/updates" className="btn-secondary inline-flex items-center gap-2">
                Latest Updates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


