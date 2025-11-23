import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';
import { getArticleNavigation, getRelatedArticles, articles } from '@/lib/articles';

export const metadata = {
  title: "BC Politicians for the 99% Reset — Ninety Nine",
  description: "Strategic guide to BC politicians advancing wealth taxes, co-ops, and CLTs—versus those blocking reform.",
  openGraph: {
    title: "BC Politicians for the 99% Reset: Support & Oppose Guide",
    description: "Strategic guide to BC politicians advancing wealth taxes, co-ops, and CLTs—versus those blocking reform.",
    images: ['/images/bc-politicians.png'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BC Politicians for the 99% Reset: Support & Oppose Guide",
    description: "Who to support, who to oppose, and how to leverage provincial power for institutional change.",
    images: ['/images/bc-politicians.png'],
  },
};

export default function BCPoliticiansArticle() {
  const slug = 'bc-politicians-guide-nov-2025';
  const article = articles.find(a => a.slug === slug);
  const { prev, next } = getArticleNavigation(slug);
  const related = getRelatedArticles(slug, 4);

  return (
    <ArticleLayout
      title="BC Politicians for the 99% Reset: Support & Oppose Guide – November 2025"
      date="2025-11-09"
      category="Policy"
      excerpt="Strategic guide to BC politicians advancing wealth taxes, co-ops, and CLTs—versus those blocking reform. Who to support, who to oppose, and how to leverage provincial power for institutional change."
      image="/images/bc-politicians.png"
      slug={slug}
      discussionTweetUrl={article?.discussionTweetUrl}
      prevArticle={prev}
      nextArticle={next}
      relatedArticles={related}
    >
      <ColoredSection>
        <JapaneseHeading japanese="要約" english="Executive Summary" />
        <p>British Columbia&apos;s extreme wealth concentration—where the top 1% controls approximately 25% of wealth amid 350%+ home price surges since 1979—fuels the debt bubbles and crashes outlined in the <strong>99% Reset playbook</strong>. With the <strong>NDP holding a slim majority</strong> post-2024 election, the <strong>Greens</strong> in confidence-and-supply, and <strong>Conservatives</strong> as opposition, the movement can leverage provincial levers like the <strong>Speculation & Vacancy Tax (SVT)</strong> to accelerate democratic socialist change.</p>
      </ColoredSection>

      <Highlight>
        <p>This guide prioritizes support for politicians advancing <strong>Phase 1</strong> (tax activism, bank boycotts, unions) and <strong>Phase 2</strong> (wealth/land taxes, worker co-ops, CLTs) tactics.</p>
      </Highlight>

      <Stats>
        <Stat value="5 Allies" label="NDP & Green Champions" />
        <Stat value="5 Opponents" label="Conservative Barriers" />
        <Stat value="$90M" label="SVT Annual Revenue for Co-ops" />
      </Stats>

      <h2>Support: Champions of the Reset</h2>
      <JapaneseHeading japanese="支持すべき人々" english="NDP & Green Allies" />
      
      <p>
        <strong>These politicians control the legislative levers enabling democratic socialist transformation</strong> through specific policy mechanisms aligned with Phase 1 (starve the parasites) and Phase 2 (flood counter-power) strategies. Speculation and Vacancy Tax increases target billionaires like Chip Wilson whose real estate portfolios depend on artificially constrained supply. Co-op development subsidies and CLT land grants build parallel ownership infrastructure while extractive capital faces mounting costs. These aren&apos;t symbolic gestures but material interventions redistributing wealth through tax policy, land use authority, and public financing—the essential tools for constructing worker ownership at scale. Each politician&apos;s alignment gets measured through concrete legislative actions enabling credit unions, CLTs, worker cooperatives, and union organizing rather than rhetorical support divorced from budgetary commitment.
      </p>

      <div className="my-8 space-y-6">
        <ArticleCallout type="success">
          <h3 className="font-bold text-lg mb-2">David Eby — Vancouver-Point Grey (NDP)</h3>
          <p><strong>Score: 38/40</strong></p>
          <p>Doubled SVT (2025: 1%/3% rates, +$90M revenue); Homes for BC plan funds <strong>co-ops</strong> ($10B non-profit housing); backs BCGEU land-value tax on transit gains.</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> Lobby for federal co-op act extension; petition to expand SVT to billionaire ranches.</p>
        </ArticleCallout>

        <ArticleCallout type="success">
          <h3 className="font-bold text-lg mb-2">Ravi Kahlon — Delta North (NDP)</h3>
          <p><strong>Score: 35/40</strong></p>
          <p>Housing Minister: $318M BC Builds for middle-income/<strong>co-op units</strong>; supports vacancy control, <strong>CLT transparency registry</strong> (2024).</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> Fundraise for Delta <strong>CLTs</strong> via REFBC grants; campaign #KahlonForCoOps.</p>
        </ArticleCallout>

        <ArticleCallout type="success">
          <h3 className="font-bold text-lg mb-2">Sonia Furstenau — Cowichan Valley (Green)</h3>
          <p><strong>Score: 36/40</strong></p>
          <p>Platform: 18% tax on $1B+ corps, double property tax on $3M+; vacancy control, REIT bans for renters.</p>
          <p className="text-sm mt-2"><strong>Reset Actions:</strong> Ally for green <strong>co-ops</strong>; push proportional rep for Reset votes.</p>
        </ArticleCallout>
      </div>

      <h2>Oppose: Barriers to the Reset</h2>
      <JapaneseHeading japanese="反対すべき人々" english="Conservative Opponents" />
      
      <p>
        <strong>Conservative politicians systematically dismantle the policy architecture</strong> enabling democratic ownership through legislative attacks on speculation taxes, development cost charges, and cooperative financing mechanisms. Their SVT repeal proposals explicitly benefit speculative capital accumulation over affordable housing development. Deregulation eliminates the land use controls that enable Community Land Trust prioritization in rezoning processes. Tax cuts defund the public programs providing seed capital for worker cooperative conversion. These policy positions don&apos;t emerge from ideological confusion but clear alignment with the 1% whose wealth depends on blocking democratic alternatives to extractive capitalism. Opposition requires systematic exposure of their billionaire donors, boycotts of the companies financing their campaigns, and direct action disrupting their legislative agenda. Political theater accomplishes nothing; material consequences force accountability.
      </p>

      <div className="my-8 space-y-6">
        <ArticleCallout type="warning">
          <h3 className="font-bold text-lg mb-2">John Rustad — Nechako Lakes (Conservative)</h3>
          <p><strong>Score: 8/40</strong></p>
          <p>Pledges SVT cancellation (&quot;tax grab for speculators&quot;); nuclear push over green co-ops; opposes wealth taxes as &quot;aspiration killers.&quot;</p>
          <p className="text-sm mt-2"><strong>Reset Counter-Actions:</strong> Boycott oil-tied firms; petition CRA audits.</p>
        </ArticleCallout>

        <ArticleCallout type="warning">
          <h3 className="font-bold text-lg mb-2">Elaine McLean — Kamloops-North Thompson (Conservative)</h3>
          <p><strong>Score: 10/40</strong></p>
          <p>House Leader: Scraps &quot;home-killing&quot; DCCs/SVT; prioritizes luxury builders over <strong>CLTs</strong>.</p>
          <p className="text-sm mt-2"><strong>Reset Counter-Actions:</strong> <strong>Union drives</strong> at Kamloops retail; expose fossil loans.</p>
        </ArticleCallout>
      </div>

      <ColoredSection>
        <JapaneseHeading japanese="結論" english="Conclusion" />
        <p>
          <strong>Supporting the NDP core of Eby and Kahlon</strong> combined with Green flanking from Furstenau and Lowan creates the legislative coalition capable of operationalizing British Columbia as the 99% Reset&apos;s North American vanguard. These politicians control budgetary authority directing Speculation and Vacancy Tax revenue—currently $90 million annually but expandable to $200+ million through rate increases and expanded coverage—toward CLT land acquisition and cooperative development subsidies. Parliamentary arithmetic matters: the NDP&apos;s slim majority depends on confidence-and-supply agreements with Greens whose policy platforms align on wealth redistribution and cooperative economics. Strategic support concentrating resources on these champions maximizes legislative output enabling all four pillars of democratic ownership.
        </p>
        <p>
          <strong>The tangible outcomes are quantifiable.</strong> SVT expansion alone redirects $90+ million annually from speculative hoarding toward permanently affordable housing and worker-owned enterprises. Paired with land value capture on transit investments, vacancy control enforcement, and cooperative financing programs, these policies could reduce the top 1%&apos;s wealth share by 7 percentage points over a decade—transferring approximately $50 billion in accumulated assets into democratic control. This represents the largest wealth redistribution in BC history, accomplished through democratic legislative processes rather than authoritarian seizure.
        </p>
      </ColoredSection>

      <Highlight>
        <p>
          <strong>Opposing Rustad&apos;s Conservative coalition becomes equally critical.</strong> Their platform explicitly dismantles every mechanism enabling the Reset: SVT repeal returns $90 million annually to speculative landlords, development charge cuts defund affordable housing infrastructure, and tax reductions starve cooperative financing programs. These policies don&apos;t accidentally harm worker ownership—they deliberately protect the extractive capital flows enriching Wilson, Thomson, and Pattison. Their tax cuts and deregulation agenda replicates the conditions generating 2008&apos;s financial collapse, inflating asset bubbles benefiting wealth holders while workers face mounting debt. The choice facing British Columbians is stark and material: <strong>cooperatives building collective prosperity or oligarchs hoarding concentrated wealth.</strong>
        </p>
      </Highlight>

      <p className="text-sm text-textDim italic mt-8">
        <strong>References:</strong> BC NDP (2025), CCPA (2025), BC Greens (2025), CTV News (2025), The Tyee (2025)
      </p>

      <p className="text-sm text-textDim mt-4">
        <strong>Take Action:</strong> <a href="/chapters" className="text-accent hover:underline">Join a BC Chapter</a> | <a href="/plan" className="text-accent hover:underline">Read the Full Plan</a>
      </p>
    </ArticleLayout>
  );
}

