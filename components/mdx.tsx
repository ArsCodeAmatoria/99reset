import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import remarkGfm from "remark-gfm";
import { Info, Lightbulb, AlertTriangle, CheckCircle2, Target, TrendingUp } from "lucide-react";

// Callout Components
const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" | "success" }) => {
  const styles = {
    info: "bg-blue-950/30 border-blue-900/50 text-blue-100",
    tip: "bg-purple-950/30 border-purple-900/50 text-purple-100",
    warning: "bg-yellow-950/30 border-yellow-900/50 text-yellow-100",
    success: "bg-green-950/30 border-green-900/50 text-green-100",
  };
  
  const icons = {
    info: Info,
    tip: Lightbulb,
    warning: AlertTriangle,
    success: CheckCircle2,
  };
  
  const Icon = icons[type];
  
  return (
    <div className={`my-6 rounded-lg border-2 p-6 ${styles[type]}`}>
      <div className="flex gap-3">
        <Icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
        <div className="prose prose-invert prose-sm max-w-none">{children}</div>
      </div>
    </div>
  );
};

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 rounded-lg bg-accent/10 border-2 border-accent/30 p-6">
    <div className="prose prose-invert max-w-none font-semibold text-accent">{children}</div>
  </div>
);

const Stats = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {children}
  </div>
);

const Stat = ({ label, value, icon }: { label: string; value: string; icon?: string }) => {
  const IconComponent = icon === "target" ? Target : icon === "trending" ? TrendingUp : CheckCircle2;
  
  return (
    <div className="rounded-lg bg-card border border-border p-6 hover:border-accent/50 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl font-display font-bold text-accent">{value}</div>
        <IconComponent className="h-6 w-6 text-accent/50" />
      </div>
      <div className="text-sm text-textDim">{label}</div>
    </div>
  );
};

const ColoredSection = ({ children, color = "dark" }: { children: React.ReactNode; color?: "dark" | "darker" | "accent" }) => {
  const styles = {
    dark: "bg-card/30",
    darker: "bg-[#0a0a0a]",
    accent: "bg-accent/5 border-y border-accent/20",
  };
  
  return (
    <div className={`-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 my-8 ${styles[color]}`}>
      <div className="prose prose-invert max-w-none">{children}</div>
    </div>
  );
};

// Custom components for MDX
const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="hidden" {...props}>
      {children}
    </h1>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-sm" {...props}>
          {children}
        </table>
      </div>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-border/30" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-border" {...props}>
      {children}
    </tbody>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-textDim" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-border/10 transition-colors" {...props}>
      {children}
    </tr>
  ),
  // Custom components for enhanced MDX
  Callout,
  Highlight,
  Stats,
  Stat,
  ColoredSection,
};

interface MDXRendererProps {
  source: string;
  hideTitle?: boolean;
}

export function MDXRenderer({ source, hideTitle = false }: MDXRendererProps) {
  // If hideTitle is false, exclude the h1 override
  const customComponents = hideTitle
    ? components
    : Object.fromEntries(
        Object.entries(components).filter(([key]) => key !== 'h1')
      );

  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={customComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}

