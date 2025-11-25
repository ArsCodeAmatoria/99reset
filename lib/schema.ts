// Advanced Schema.org markup generators for SEO

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://99reset.org";

/**
 * FAQ Schema - Shows rich FAQ snippets in Google search results
 */
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * HowTo Schema - Shows step-by-step instructions in search results
 */
export function createHowToSchema({
  name,
  description,
  steps,
  totalTime,
  image,
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string; // ISO 8601 duration format (e.g., "P30D" for 30 days)
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: image || `${siteUrl}/api/og?title=${encodeURIComponent(name)}`,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Article Schema - For blog posts and updates
 */
export function createArticleSchema({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  image,
  author = "99% Reset",
  tags = [],
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  author?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${siteUrl}/api/og?title=${encodeURIComponent(title)}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Organization",
      name: author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "99% Reset",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
    },
    keywords: tags.join(", "),
  };
}

/**
 * Breadcrumb Schema - Shows breadcrumb navigation in search results
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Website SearchAction Schema - Adds search box to Google results
 */
export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "99% Reset",
    description: "Make the 1% irrelevant through coordinated institutional change",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/resources?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Course Schema - For educational resources and toolkits
 */
export function createCourseSchema({
  name,
  description,
  provider = "99% Reset",
  url,
}: {
  name: string;
  description: string;
  provider?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: siteUrl,
    },
    url: `${siteUrl}${url}`,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "Self-paced",
    },
  };
}

/**
 * Action Schema - For CTA buttons and key actions
 */
export function createActionSchema({
  name,
  description,
  url,
  actionType = "JoinAction",
}: {
  name: string;
  description: string;
  url: string;
  actionType?: "JoinAction" | "DonateAction" | "ShareAction";
}) {
  return {
    "@context": "https://schema.org",
    "@type": actionType,
    name,
    description,
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}${url}`,
    },
  };
}

/**
 * Video Schema - For video content
 */
export function createVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  url,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 duration (e.g., "PT5M30S")
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: `${siteUrl}${thumbnailUrl}`,
    uploadDate,
    duration,
    contentUrl: `${siteUrl}${url}`,
    embedUrl: `${siteUrl}${url}`,
  };
}

