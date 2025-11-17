import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://99reset.org";
const siteName = "99reset";

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
  // Primary keywords
  "worker cooperatives",
  "community land trusts",
  "union organizing",
  "wealth redistribution",
  "economic democracy",
  "labour movement",
  "credit unions",
  // Secondary keywords
  "income inequality",
  "wealth gap",
  "workers rights",
  "cooperative ownership",
  "housing affordability",
  "bank boycott",
  "wealth tax",
  "citizens wealth fund",
  "worker ownership",
  "economic justice",
  // Long-tail keywords
  "how to start a union",
  "join worker cooperative",
  "community land trust housing",
  "switch to credit union",
  "fight wealth inequality",
  "economic reform movement",
  "non-violent protest",
  "collective bargaining",
  "affordable housing solutions",
  "99 percent movement",
];

export const defaultMetadata: Metadata = {
  title: {
    default: "99reset — Starve the 1%. Own the Future.",
    template: "%s — 99reset",
  },
  description:
    "A global, non-violent plan to shift ownership and bargaining power to workers and communities through worker co-ops, community land trusts, union organizing, and wealth funds. Not welfare — equity, dividends, and permanent affordability.",
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
      "A global movement to redistribute economic power from the 1% to the 99% through worker cooperatives, community land trusts, and union organizing.",
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


