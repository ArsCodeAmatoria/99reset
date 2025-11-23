import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';

export const metadata = {
  title: "BC Politicians for the 99% Reset — Ninety Nine",
  description: "Strategic guide to BC politicians advancing wealth taxes, co-ops, and CLTs—versus those blocking reform.",
};

export default function BCPoliticiansArticle() {
  return (
    <ArticleLayout
      title="BC Politicians for the 99% Reset: Support & Oppose Guide – November 2025"
      date="2025-11-09"
      category="Policy"
      excerpt="Strategic guide to BC politicians advancing wealth taxes, co-ops, and CLTs—versus those blocking reform. Who to support, who to oppose, and how to leverage provincial power for institutional change."
      image="/images/bc-politicians.png"
    >
      <ColoredSection color="accent">
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
      
      <p>These politicians align with <strong>starving parasites</strong> (SVT hikes targeting billionaires like Wilson) and <strong>flooding counter-power</strong> (co-op subsidies, CLT grants). These are the democratic socialists building the infrastructure of collective ownership.</p>

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
      
      <p>These politicians block <strong>Phases 1-3</strong> via SVT repeal, deregulation, and pro-speculator cuts. They represent the <strong>1%&apos;s interests</strong>, not the 99%. Expose them via boycotts, op-eds, and direct action.</p>

      <div className="my-8 space-y-6">
        <ArticleCallout type="warning">
          <h3 className="font-bold text-lg mb-2">John Rustad — Nechako Lakes (Conservative)</h3>
          <p><strong>Score: 8/40</strong></p>
          <p>Pledges SVT cancellation ("tax grab for speculators"); nuclear push over green co-ops; opposes wealth taxes as "aspiration killers."</p>
          <p className="text-sm mt-2"><strong>Reset Counter-Actions:</strong> Boycott oil-tied firms; petition CRA audits.</p>
        </ArticleCallout>

        <ArticleCallout type="warning">
          <h3 className="font-bold text-lg mb-2">Elaine McLean — Kamloops-North Thompson (Conservative)</h3>
          <p><strong>Score: 10/40</strong></p>
          <p>House Leader: Scraps "home-killing" DCCs/SVT; prioritizes luxury builders over <strong>CLTs</strong>.</p>
          <p className="text-sm mt-2"><strong>Reset Counter-Actions:</strong> <strong>Union drives</strong> at Kamloops retail; expose fossil loans.</p>
        </ArticleCallout>
      </div>

      <ColoredSection color="darker">
        <JapaneseHeading japanese="結論" english="Conclusion" />
        <p>Support <strong>NDP&apos;s Eby/Kahlon core</strong> + <strong>Greens&apos; Furstenau/Lowan flank</strong> to operationalize BC as the Reset&apos;s vanguard. <strong>SVT hikes alone</strong> could redirect $90M+ annually to CLTs and co-ops, dropping the top 1% wealth share by 7 percentage points.</p>
      </ColoredSection>

      <Highlight>
        <p>Oppose <strong>Rustad-led Conservatives</strong> as 1% enablers. Their tax cuts and deregulation would inflate asset bubbles like 2008. The choice is stark: <strong>co-ops or oligarchs</strong>.</p>
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

