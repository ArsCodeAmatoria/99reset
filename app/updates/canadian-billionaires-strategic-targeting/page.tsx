import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';

export const metadata = {
  title: "Strategic Targeting: Canadian Billionaires — Ninety Nine",
  description: "Seven priority billionaires whose disruption unlocks $10-15B annually for citizens' funds and affordable housing.",
};

export default function BillionairesArticle() {
  return (
    <ArticleLayout
      title="Strategic Targeting in the 99% Reset: Prioritizing Canadian Billionaires for Non-Violent Economic Disruption"
      date="2025-11-09"
      category="Strategy"
      excerpt="Seven priority billionaires controlling $52B whose disruption unlocks $10-15B annually for citizens' funds and affordable housing. Thomson, Gilgan, Bouchard, Wilson, Pattison, Fidani, and Katz—ranked by wealth scale, systemic harm, and vulnerability to coordinated action."
      image="/images/billionaires-targeting.png"
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
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Tax activism:</strong> Mass CRA audit demands (Thomson&apos;s $240M avoidance). <strong>Projected: $2-3B immediate revenue</strong> to <strong>credit union development</strong>.</li>
        <li><strong>Bank boycotts:</strong> Shift $5T from Big 5. Target Lululemon/Mattamy sales (-10% YoY). Every dollar to <strong>Vancity</strong> starves billionaire enablers.</li>
        <li><strong>Union drives:</strong> <strong>5M workers</strong> via Unifor at Couche-Tard/Mattamy. Every unionized worker is a democratic socialist in training.</li>
      </ul>

      <p><strong>Phase 2: Flood the Zone (4-8 Years)</strong></p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Progressive taxes:</strong> BC model yields <strong>$30B/year</strong>. Vacancy penalties force sales to <strong>CLTs</strong>.</li>
        <li><strong>Co-op conversions:</strong> Colorado-style equity mandates. <strong>CWCF JEDDI funds</strong> seed 1K <strong>co-ops</strong>.</li>
        <li><strong>CLT expansion:</strong> <strong>10K affordable housing units</strong> from speculative holdings (Wilson&apos;s Vancouver sites).</li>
      </ul>

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

