import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://99reset.org";

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "The 99% Reset",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: "The 99% Reset — Starve the 1%. Own the Future.",
    template: "%s — The 99% Reset",
  },
  description:
    "A global, non-violent plan to shift ownership and bargaining power to workers and communities. Not welfare — equity, dividends, and permanent affordability.",
  keywords: [
    "worker cooperatives",
    "community land trusts",
    "union organizing",
    "wealth fund",
    "economic democracy",
    "labour movement",
    "credit unions",
  ],
  authors: [{ name: "The 99% Reset" }],
  metadataBase: new URL(siteUrl),
};


