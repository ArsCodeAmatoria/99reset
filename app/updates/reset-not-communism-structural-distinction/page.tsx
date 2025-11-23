import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';
import { getArticleNavigation, getRelatedArticles } from '@/lib/articles';

export const metadata = {
  title: "The Reset Is Not Communism — Ninety Nine",
  description: "The Reset transfers capital to workers via co-ops, CLTs, and wealth funds—all private, democratic, and irrevocable. Communism centralized power and failed.",
};

export default function ResetNotCommunismArticle() {
  const slug = 'reset-not-communism-structural-distinction';
  const { prev, next } = getArticleNavigation(slug);
  const related = getRelatedArticles(slug, 4);

  return (
    <ArticleLayout
      title="The 99% Reset Is Not Communism: A Structural and Historical Distinction"
      date="2025-11-14"
      category="Theory"
      excerpt="The Reset transfers capital to workers via co-ops, CLTs, and wealth funds—all private, democratic, and irrevocable. Communism centralized power in the state and failed. We succeed where they failed: cooperation over politics."
      image="/images/reset-not-communism.png"
      prevArticle={prev}
      nextArticle={next}
      relatedArticles={related}
    >
      <ColoredSection>
        <JapaneseHeading japanese="要約" english="Executive Summary" />
        <p>The <strong>99% Reset</strong> is a decentralized, ownership-based <strong>democratic socialist movement</strong> that transfers capital from the 1% to the 99% through <strong>worker co-ops, Community Land Trusts (CLTs), credit unions, and Citizens&apos; Wealth Funds</strong>—all <strong>private, democratic, and irrevocable</strong> institutions.</p>
      </ColoredSection>

      <Highlight>
        <p><strong>Communism collapsed</strong> under bureaucratic tyranny, economic miscalculation, and lack of worker voice—evidenced by the <strong>Soviet Union (1991), China&apos;s pivot to state capitalism (1978), and Venezuela&apos;s hyperinflation (2016–2025)</strong>.</p>
      </Highlight>

      <Stats>
        <Stat value="Private" label="Co-ops & CLTs: Not State Property" />
        <Stat value="Democratic" label="One Member, One Vote" />
        <Stat value="Irreversible" label="Perpetual Trusts & Equity Vesting" />
      </Stats>

      <h2>Core Structural Difference</h2>
      <JapaneseHeading japanese="所有権の構造" english="Who Owns Production?" />

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="p-3 text-left">Dimension</th>
              <th className="p-3 text-left">Communism (Historical)</th>
              <th className="p-3 text-left">99% Reset</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Ownership</td>
              <td className="p-3">State (party elites)</td>
              <td className="p-3">Workers, residents (<strong>co-op members, CLT leaseholders</strong>)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Control</td>
              <td className="p-3">Political decree (Five-Year Plans)</td>
              <td className="p-3"><strong>Democratic vote</strong> (one member, one vote)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Legal Form</td>
              <td className="p-3">State property (no exit)</td>
              <td className="p-3"><strong>Private trusts</strong> (perpetual affordability)</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">Example</td>
              <td className="p-3">USSR: State farms → 1989 food shortages</td>
              <td className="p-3"><strong>Québec: 10,000+ co-ops</strong>, Gini drop since 1930s</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleCallout type="warning">
        <p><strong>Communism nationalized everything into the state.</strong><br /><strong>The Reset privatizes everything into the 99%.</strong></p>
      </ArticleCallout>

      <h2>Why Communism Failed</h2>
      <JapaneseHeading japanese="共産主義の崩壊" english="Politics Over Cooperation" />

      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Bureaucratic tyranny:</strong> Stalin&apos;s purges (700K executed); Mao&apos;s Great Leap (30M+ dead). <strong>No worker voice</strong>—party elites controlled everything.</li>
        <li><strong>Economic miscalculation:</strong> Soviet GDP $3.5K vs U.S. $23K (1991). <strong>No price signals</strong>—planners guessed demand; co-ops use market feedback.</li>
        <li><strong>Incentive collapse:</strong> &quot;They pretend to pay us, we pretend to work&quot; (Soviet joke). <strong>No equity stake</strong>; co-ops pay dividends.</li>
        <li><strong>Corruption:</strong> Venezuela&apos;s PDVSA looted; hyperinflation 1M%. State monopoly enabled theft; <strong>co-ops have transparent bylaws</strong>.</li>
      </ul>

      <Highlight>
        <p><strong>Politics killed communism.<br />Cooperation powers the Reset.</strong></p>
      </Highlight>

      <h2>The Reset&apos;s Anti-Communist Safeguards</h2>
      <JapaneseHeading japanese="民主的所有権" english="Democratic Ownership" />

      <div className="my-8 space-y-4">
        <ArticleCallout type="success">
          <p><strong>No state dependency:</strong> All assets in <strong>private trusts</strong>. Burlington VT CLT (0% inflation in 30 years); Mondragón (80% surplus reinvested).</p>
        </ArticleCallout>

        <ArticleCallout type="success">
          <p><strong>Market + democracy:</strong> <strong>Co-ops compete, vote on strategy</strong>. Québec co-ops: $47B revenue, 120K jobs, member-elected boards.</p>
        </ArticleCallout>

        <ArticleCallout type="success">
          <p><strong>No elite capture:</strong> One member, one vote + 5–7 year equity vesting. Colorado law: 2% annual sale to <strong>worker trust</strong>—irrevocable.</p>
        </ArticleCallout>

        <ArticleCallout type="success">
          <p><strong>Legal perpetuity:</strong> Trusts can&apos;t be unwound. Norway Oil Fund: $1.7T, dividends only, no political raids.</p>
        </ArticleCallout>
      </div>

      <h2>Historical Proof</h2>
      <JapaneseHeading japanese="歴史的証拠" english="Cooperation Wins" />

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="p-3 text-left">Movement</th>
              <th className="p-3 text-left">Method</th>
              <th className="p-3 text-left">Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Soviet Communism</td>
              <td className="p-3">Political (state seizure)</td>
              <td className="p-3">Failed 1991—GDP crash, elites fled</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Mondragón Co-ops</td>
              <td className="p-3">Cooperative (worker ownership)</td>
              <td className="p-3"><strong>80K members, 70+ years</strong>, outlasted Franco</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Québec Co-ops</td>
              <td className="p-3">Cooperative (credit unions, farms)</td>
              <td className="p-3"><strong>10K+ entities</strong>, top 1% share 42% → 18%</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">99% Reset</td>
              <td className="p-3">Cooperative (boycotts → co-ops)</td>
              <td className="p-3">Projected: <strong>40% market ownership by 2040</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <ColoredSection>
        <JapaneseHeading japanese="結論" english="Conclusion" />
        <p><strong>Communism failed</strong> because it was political: state ownership → elite capture, central planning → economic collapse. The <strong>99% Reset succeeds</strong> because it is cooperative: worker ownership → aligned incentives, market democracy → adaptive efficiency, irrevocable trusts → permanent power.</p>
      </ColoredSection>

      <Highlight>
        <p><strong>The 99% don&apos;t need the state to own the future. They need to own it themselves.</strong></p>
      </Highlight>

      <p className="text-sm text-textDim italic mt-8">
        <strong>References:</strong> Mondragón Corporation (2025), Québec Co-op Federation (2025), Burlington CLT (2025), Chenoweth (2011), World Bank (2025)
      </p>
    </ArticleLayout>
  );
}

