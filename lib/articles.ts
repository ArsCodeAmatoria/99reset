export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  discussionTweetUrl?: string; // Optional: URL of the X discussion tweet
}

// All articles in chronological order (newest first)
export const articles: Article[] = [
  {
    slug: 'coalition-strategy-who-to-align-with',
    title: 'The 99% Reset\'s Coalition Strategy: Who to Align With — And Why',
    excerpt: 'The Reset is not a culture war. It\'s an economic ownership war. Align with anyone under $1M who builds co-ops, CLTs, and unions. Reject anyone over $1M who blocks worker ownership—regardless of identity.',
    date: '2025-11-15',
    category: 'Strategy',
    image: '/images/coalition-strategy.png',
    discussionTweetUrl: undefined, // TODO: Add X discussion tweet URL
  },
  {
    slug: 'reset-not-communism-structural-distinction',
    title: 'The 99% Reset Is Not Communism: A Structural and Historical Distinction',
    excerpt: 'The Reset transfers capital to workers via co-ops, CLTs, and wealth funds—all private, democratic, and irrevocable. Communism centralized power in the state and failed. We succeed where they failed: cooperation over politics.',
    date: '2025-11-14',
    category: 'Theory',
    image: '/images/reset-not-communism.png',
    discussionTweetUrl: undefined, // TODO: Add X discussion tweet URL
  },
  {
    slug: 'vancouver-organizing-guide-nov-2025',
    title: 'Organizing for the 99% Reset in Vancouver: A Local Action Guide – November 2025',
    excerpt: 'Vancouver-specific tactics for bank boycotts, union drives, worker co-ops, CLTs, and wealth taxes. Leverage NDP\'s SVT, COPE\'s tenant unions, and local allies. 10K new union members and 1K CLT units in 24 months.',
    date: '2025-11-12',
    category: 'Local Organizing',
    image: '/images/vancouver-organizing.png',
    discussionTweetUrl: undefined, // TODO: Add X discussion tweet URL
  },
  {
    slug: 'bank-boycott-cascade-effect',
    title: 'The Cascade Effect: How a $10 Billion Bank Boycott in Canada Can Ignite Regulatory Scrutiny and Propel Wealth Tax Reforms',
    excerpt: 'A coordinated $10B deposit outflow from Big Five banks triggers credit rating reviews, regulatory probes, and policy momentum for wealth taxes—unlocking $30B annually in progressive revenue.',
    date: '2025-11-11',
    category: 'Strategy',
    image: '/images/bank-boycott.png',
    discussionTweetUrl: undefined, // TODO: Add X discussion tweet URL
  },
  {
    slug: 'bc-politicians-guide-nov-2025',
    title: 'BC Politicians for the 99% Reset: Support & Oppose Guide – November 2025',
    excerpt: 'Strategic guide to BC politicians advancing wealth taxes, co-ops, and CLTs—versus those blocking reform. Who to support, who to oppose, and how to leverage provincial power for institutional change.',
    date: '2025-11-09',
    category: 'Policy',
    image: '/images/bc-politicians.png',
    discussionTweetUrl: undefined, // TODO: Add X discussion tweet URL
  },
  {
    slug: 'canadian-billionaires-strategic-targeting',
    title: 'Strategic Targeting in the 99% Reset: Prioritizing Canadian Billionaires for Non-Violent Economic Disruption',
    excerpt: 'Seven priority billionaires controlling $52B whose disruption unlocks $10-15B annually for citizens\' funds and affordable housing. Thomson, Gilgan, Bouchard, Wilson, Pattison, Fidani, and Katz—ranked by wealth scale, systemic harm, and vulnerability to coordinated action.',
    date: '2025-11-09',
    category: 'Strategy',
    image: '/images/billionaires-targeting.png',
    discussionTweetUrl: undefined, // TODO: Add X discussion tweet URL
  },
];

export function getArticleNavigation(currentSlug: string) {
  const currentIndex = articles.findIndex(a => a.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? articles[currentIndex - 1] : undefined,
    next: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined,
  };
}

export function getRelatedArticles(currentSlug: string, count: number = 4) {
  return articles
    .filter(a => a.slug !== currentSlug)
    .slice(0, count);
}

