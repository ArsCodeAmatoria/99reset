import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://99reset.org";
const siteName = "99% Reset";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: tags || defaultKeywords,
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@99reset",
      creator: "@99reset",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    verification: {
      // Add these when you have them
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}

const defaultKeywords = [
  // Primary keywords - Movement focus
  "99% reset",
  "economic justice",
  "worker cooperatives",
  "credit unions",
  "bank boycott",
  "community land trust",
  "union organizing",
  "wealth redistribution",
  "worker ownership",
  "economic democracy",
  // Secondary keywords - Action-oriented
  "switch to credit union",
  "start a union",
  "worker co-op",
  "democratize wealth",
  "fight inequality",
  "collective ownership",
  "democratic workplace",
  "community organizing",
  "workers rights",
  "affordable housing",
  // Long-tail keywords - Solutions
  "how to switch banks to credit union",
  "how to start a union at work",
  "how to form a worker cooperative",
  "community land trust explained",
  "citizens wealth fund",
  "bank switch toolkit",
  "union organizing guide",
  "economic inequality solutions",
  "worker power movement",
  "institutional economic change",
];

export const defaultMetadata: Metadata = {
  title: {
    default: "99% Reset — Starve the 1%. Own the Future.",
    template: "%s — 99% Reset",
  },
  description:
    "Make the 1% irrelevant through coordinated institutional change. Switch to credit unions, unionize your workplace, form worker co-ops, and build community land trusts. Economic democracy through collective action.",
  keywords: defaultKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data (JSON-LD) helpers
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "A global movement to make the 1% irrelevant through coordinated institutional change. Bank boycotts, union organizing, worker cooperatives, and community land trusts to shift economic power to workers and communities.",
    sameAs: [
      "https://www.youtube.com/@99Reset",
      "https://x.com/99reset",
      "https://www.tiktok.com/@99reset.org",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@99reset.org",
      contactType: "General Inquiries",
    },
  };
}

export function createArticleSchema({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}${path}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    keywords: tags?.join(", "),
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
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


