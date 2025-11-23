import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';
import { getArticleNavigation, getRelatedArticles, articles } from '@/lib/articles';

export const metadata = {
  title: "Strategic Targeting: Canadian Billionaires — Ninety Nine",
  description: "Seven priority billionaires whose disruption unlocks $10-15B annually for citizens' funds and affordable housing.",
  openGraph: {
    title: "Strategic Targeting: Prioritizing Canadian Billionaires for Economic Disruption",
    description: "Seven priority billionaires controlling $52B whose disruption unlocks $10-15B annually for citizens' funds and affordable housing.",
    images: ['/images/billionaires-targeting.png'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Strategic Targeting: Prioritizing Canadian Billionaires for Economic Disruption",
    description: "Seven priority billionaires whose disruption unlocks $10-15B annually for citizens' funds and affordable housing.",
    images: ['/images/billionaires-targeting.png'],
  },
};

export default function BillionairesArticle() {
  const slug = 'canadian-billionaires-strategic-targeting';
  const article = articles.find(a => a.slug === slug);
  const { prev, next } = getArticleNavigation(slug);
  const related = getRelatedArticles(slug, 4);

  return (
    <ArticleLayout
      title="Strategic Targeting in the 99% Reset: Prioritizing Canadian Billionaires for Non-Violent Economic Disruption"
      date="2025-11-09"
      category="Strategy"
      excerpt="Seven priority billionaires controlling $52B whose disruption unlocks $10-15B annually for citizens' funds and affordable housing. Thomson, Gilgan, Bouchard, Wilson, Pattison, Fidani, and Katz—ranked by wealth scale, systemic harm, and vulnerability to coordinated action."
      image="/images/billionaires-targeting.png"
      slug={slug}
      discussionTweetUrl={article?.discussionTweetUrl}
      prevArticle={prev}
      nextArticle={next}
      relatedArticles={related}
    >
      <ColoredSection>
        <JapaneseHeading japanese="要約" english="Executive Summary" />
        <p>The <strong>99% Reset</strong> is a global, non-violent <strong>democratic socialist movement</strong> aimed at redistributing economic power through targeted boycotts, tax activism, unionization, and <strong>community ownership structures</strong>—specifically <strong>credit unions, Community Land Trusts (CLTs), worker co-ops, and Citizens&apos; Wealth Funds</strong>.</p>
      </ColoredSection>

      <Highlight>
        <p>This paper identifies <strong>seven priority billionaires</strong> based on: (1) <strong>scale of wealth concentration</strong>; (2) <strong>direct contributions to systemic harms</strong> like tax avoidance and housing speculation; (3) <strong>vulnerability to coordinated action</strong>.</p>
      </Highlight>

      <Stats>
        <Stat value="7 Targets" label="Priority Billionaires to Disrupt" />
        <Stat value="$52B" label="Combined Wealth to Redistribute" />
        <Stat value="$10-15B" label="Annual Revenue Unlocked" />
      </Stats>

      <h2>Priority Billionaires</h2>
      <JapaneseHeading japanese="優先ターゲット" english="The Seven Targets" />

      <div className="my-8 space-y-6">
        <ArticleCallout type="info">
          <h3 className="font-bold text-lg mb-2">1. David Thomson ($10.2B) — Thomson Reuters</h3>
          <p><strong>Score: 35/40</strong></p>
          <p>44 subsidiaries in tax havens; avoided $240M taxes (C4TF 2025); media monopoly distorts inequality narratives.</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> Petition CRA for audits; boycott via <strong>media co-ops</strong>. Provincial land tax on holdings. <strong>Citizens&apos; Fund</strong> buys minority stake.</p>
        </ArticleCallout>

        <ArticleCallout type="info">
          <h3 className="font-bold text-lg mb-2">2. Peter Gilgan ($6.4B) — Mattamy Homes</h3>
          <p><strong>Score: 32/40</strong></p>
          <p>Built 70K+ units contributing to +350% price surge; low <strong>union</strong> density in construction (15%).</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> <strong>Unionize</strong> Mattamy sites (Unifor target). Mandate 2% annual equity to <strong>worker trusts</strong> (Colorado model).</p>
        </ArticleCallout>

        <ArticleCallout type="info">
          <h3 className="font-bold text-lg mb-2">3. Chip Wilson ($7.5B) — Lululemon</h3>
          <p><strong>Score: 28/40</strong></p>
          <p>Offshore in Cayman; Vancouver real estate empire; anti-<strong>union</strong> history; luxury emissions from private jets.</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> Boycott Lululemon; switch from Big 5 banks. BC speculation tax on holdings. <strong>Worker co-op</strong> for supply chain.</p>
        </ArticleCallout>

        <ArticleCallout type="info">
          <h3 className="font-bold text-lg mb-2">4. Jim Pattison ($11.4B) — Diversified Holdings</h3>
          <p><strong>Score: 27/40</strong></p>
          <p>15 tax haven subsidiaries; Vancouver estates drive land values; finances oil via dealerships.</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> Divest from Pattison Group loans. <strong>CLTs</strong> target vacant properties. Transaction tax on assets.</p>
        </ArticleCallout>
      </div>

      <h2>Strategic Actions and Impact</h2>
      <JapaneseHeading japanese="戦略的行動" english="Reset Phases 1-3" />

      <p><strong>Phase 1: Starve the Parasite (2-4 Years)</strong></p>
      <p>
        <strong>Tax activism mobilizes through coordinated pressure on the Canada Revenue Agency,</strong> demanding audits of Thomson&apos;s 44 tax haven subsidiaries that facilitated $240 million in tax avoidance documented by Canadians for Tax Fairness. Mass petition campaigns, parliamentary questions from NDP members, and media exposés force CRA to investigate complex corporate structures designed to hide wealth. Successful recovery of even partial amounts—$2-3 billion conservatively—flows into democratic financial infrastructure through new credit union capitalization requirements and cooperative development funds. Each dollar reclaimed from offshore accounts becomes seed capital for worker ownership.
      </p>
      <p>
        <strong>Bank boycotts systematically redirect Canada&apos;s $5 trillion in retail deposits</strong> away from Big Five institutions financing billionaire empires toward credit unions governed by depositor-members. Lululemon and Mattamy Homes lose access to cheap capital as banks tighten lending amid deposit flight, projecting 10% annual sales declines as financing costs increase. Wilson&apos;s real estate speculation depends on Big Five mortgages; remove that credit pipeline and his portfolio becomes illiquid. Every thousand Canadians switching to Vancity or Desjardins starves another tentacle of billionaire-enabling infrastructure. Union drives at Couche-Tard convenience stores and Mattamy construction sites mobilize millions through Unifor campaigns, transforming isolated workers into class-conscious organizers who understand collective bargaining as practical training for worker ownership. Each successful union contract becomes a stepping stone toward cooperative conversion.
      </p>

      <p><strong>Phase 2: Flood the Zone (4-8 Years)</strong></p>
      <p>
        <strong>Progressive taxation modeled on British Columbia&apos;s speculation and vacancy tax</strong> generates $30 billion annually when scaled nationally and expanded to financial assets beyond real estate. Vacancy penalties on Thomson&apos;s media properties and Pattison&apos;s Vancouver estates force sales to Community Land Trusts purchasing at below-market rates—converting speculative holdings into permanently affordable housing. Colorado-style equity mandates require businesses receiving government contracts or subsidies to vest 2% annual ownership in worker trusts, accelerating cooperative conversion at Gilgan&apos;s construction sites and Wilson&apos;s retail operations.
      </p>
      <p>
        <strong>Citizens&apos; Wealth Funds provide patient capital unavailable through conventional finance.</strong> JEDDI funds—Jasper Endowment for Democratic Development Initiatives—capitalize at $10 billion through wealth tax revenue, providing seed funding for 1,000 worker cooperatives across strategic sectors from media to construction to retail. Community Land Trust expansion targets 10,000 affordable housing units extracted from speculative portfolios including Wilson&apos;s prime Vancouver development sites. Once transferred to CLT ownership, these properties exit market speculation permanently through ground lease structures ensuring affordability across generations while building community wealth. This isn&apos;t confiscation but systematic conversion of extractive assets into democratic infrastructure through strategic application of tax policy, capital redirection, and cooperative development—the democratic socialist pathway proven successful in Mondragón, Québec, and Swedish cooperative movements.
      </p>

      <ColoredSection>
        <JapaneseHeading japanese="結論" english="Conclusion" />
        <p>Focusing on these <strong>seven billionaires</strong> transforms $324B in concentrated wealth into <strong>democratic assets</strong>—<strong>credit unions, CLTs, co-ops, and wealth funds</strong> owned by the people. This is not punishment but <strong>structural rebalancing</strong>.</p>
      </ColoredSection>

      <Highlight>
        <p>Historical precedents—<strong>Sweden&apos;s 1950s reforms, Québec co-ops, Mondragón&apos;s 80K worker-owners</strong>—show success without violence. This is the <strong>democratic socialist</strong> path.</p>
      </Highlight>

      <p className="text-sm text-textDim italic mt-8">
        <strong>References:</strong> Forbes (2025), C4TF (2025), Oxfam (2025), Statistics Canada (Q1 2025), NDP Platform (2025)
      </p>
    </ArticleLayout>
  );
}

