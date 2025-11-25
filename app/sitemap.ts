import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://99reset.org'
  
  // Core pages with high priority
  const corePages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/plan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Reset landing pages - high priority for SEO
  const resetPages = [
    'banking-reset',
    'housing-reset',
    'workplace-reset',
    'wealth-reset',
  ].map((page) => ({
    url: `${siteUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Resources section
  const resourcePages = [
    'bank-switch-toolkit',
    'union-organizing-101',
    'worker-coop-formation-guide',
    'community-land-trust-primer',
    'policy-advocacy-toolkit',
    'chapter-organizer-handbook',
  ].map((slug) => ({
    url: `${siteUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Updates/blog pages
  const updatePages = [
    'bank-boycott-cascade-effect',
    'canadian-billionaires-strategic-targeting',
    'coalition-strategy-who-to-align-with',
    'reset-not-communism-structural-distinction',
    'bc-politicians-guide-nov-2025',
    'vancouver-organizing-guide-nov-2025',
  ].map((slug) => ({
    url: `${siteUrl}/updates/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Secondary pages
  const secondaryPages = [
    'resources',
    'updates',
    'privacy',
    'terms',
  ].map((page) => ({
    url: `${siteUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...corePages,
    ...resetPages,
    ...resourcePages,
    ...updatePages,
    ...secondaryPages,
  ]
}

