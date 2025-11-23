import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';
import { getArticleNavigation, getRelatedArticles, articles } from '@/lib/articles';

export const metadata = {
  title: "The 99% Reset's Coalition Strategy — Ninety Nine",
  description: "The Reset is not a culture war. It's an economic ownership war. Align with anyone under $1M who builds co-ops, CLTs, and unions.",
  openGraph: {
    title: "The 99% Reset's Coalition Strategy: Who to Align With — And Why",
    description: "The Reset is not a culture war. It's an economic ownership war. Align with anyone under $1M who builds co-ops, CLTs, and unions.",
    images: ['/images/coalition-strategy.png'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The 99% Reset's Coalition Strategy: Who to Align With — And Why",
    description: "The Reset is not a culture war. It's an economic ownership war. Align with anyone under $1M who builds co-ops, CLTs, and unions.",
    images: ['/images/coalition-strategy.png'],
  },
};

export default function CoalitionStrategyArticle() {
  const slug = 'coalition-strategy-who-to-align-with';
  const article = articles.find(a => a.slug === slug);
  const { prev, next } = getArticleNavigation(slug);
  const related = getRelatedArticles(slug, 4);

  return (
    <ArticleLayout
      title="The 99% Reset's Coalition Strategy: Who to Align With — And Why"
      date="2025-11-15"
      category="Strategy"
      excerpt="The Reset is not a culture war. It's an economic ownership war. Align with anyone under $1M who builds co-ops, CLTs, and unions. Reject anyone over $1M who blocks worker ownership—regardless of identity."
      image="/images/coalition-strategy.png"
      slug={slug}
      discussionTweetUrl={article?.discussionTweetUrl}
      prevArticle={prev}
      nextArticle={next}
      relatedArticles={related}
    >
      <ColoredSection>
        <JapaneseHeading japanese="要約" english="Executive Summary" />
        <p>The 99% Reset is a <strong>democratic socialist movement</strong>, not a culture war. It is an <strong>economic ownership war</strong> against the 1%, built on the four pillars of <strong>credit unions, Community Land Trusts (CLTs), worker co-ops, and unions</strong>.</p>
      </ColoredSection>

      <Highlight>
        <p><strong>Our coalition rule:</strong> Align with anyone who owns &lt; $1M net worth and is willing to build credit unions, CLTs, worker co-ops, or unions.</p>
        <p><strong>Reject anyone</strong>—regardless of identity—who hoards &gt; $1M, funds the 1%, or blocks worker ownership.</p>
      </Highlight>

      <p>This paper maps <strong>nine identity/political groups</strong> against three Reset litmus tests: <strong>Wealth position</strong> (net worth distribution), <strong>Ownership stance</strong> (supports credit unions, CLTs, worker co-ops, unions vs. state/private monopoly), and <strong>Action alignment</strong> (participates in bank boycotts, CLT formation, union organizing, tax activism).</p>

      <Stats>
        <Stat value="7 Groups" label="Core Allies: Working-class communities + progressives" />
        <Stat value="2 Types" label="Tactical Allies: Small capitalists (co-op converts)" />
        <Stat value="0 Tolerance" label="Opponents: Billionaire donors + state-socialists" />
      </Stats>

      <ArticleCallout type="success">
        <p><strong>The Reset is post-partisan, post-identity, pro-ownership.</strong> We unite the 99% by <strong>who they own</strong>, not who they are.</p>
      </ArticleCallout>

      <h2>The Three Litmus Tests</h2>
      <JapaneseHeading japanese="三つの試金石" english="Tests of Alliance" />

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="p-3 text-left">Test</th>
              <th className="p-3 text-left">Question</th>
              <th className="p-3 text-left">Pass Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Wealth</td>
              <td className="p-3">Where are you in the 99% vs. 1%?</td>
              <td className="p-3">&lt; $1M net worth (StatsCan 2025: 99% threshold)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Ownership</td>
              <td className="p-3">Do you want worker/community ownership or state/private monopoly?</td>
              <td className="p-3">Supports credit unions, CLTs, worker co-ops, unions; rejects state seizure</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">Action</td>
              <td className="p-3">Will you boycott banks, unionize, build co-ops?</td>
              <td className="p-3">Joins bank boycotts, CLT formation, union organizing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Core Allies: The 99% Ownership Bloc</h2>
      <JapaneseHeading japanese="同盟" english="United by Ownership" />

      <ArticleCallout type="success">
        <p><strong>Why they&apos;re allies:</strong> Shared economic pain (rents, wages) combined with <strong>deep co-op traditions</strong>—Jewish kibbutzim and credit unions, Islamic zakat and anti-usury principles, Catholic Worker co-ops, LGBTQ rainbow housing initiatives. These communities inherently understand collective ownership.</p>
      </ArticleCallout>

      <h3>Working-Class Faith Communities & LGBTQ</h3>
      <p><strong>Jewish communities</strong> are actively involved, with DSA Jewish caucuses running <strong>co-op bakeries</strong> and JVP employing economic boycott models. <strong>Muslim communities</strong> are building mosque <strong>credit unions</strong> (e.g., UMAA in Vancouver) and tenant unions through CAIR. <strong>Christian communities</strong> see labor priests leading <strong>union drives</strong> (VDLC faith caucus) and evangelical networks forming food <strong>co-ops</strong>. <strong>LGBTQ communities</strong> are establishing <strong>Pride CLTs</strong> to combat housing discrimination and create worker-owned spaces.</p>

      <h3>Democratic Socialists & Progressives</h3>
      <Highlight>
        <p><strong>Why they&apos;re core allies:</strong> These groups are instrumental in building the four pillars—<strong>credit unions, CLTs, worker co-ops, and unions</strong>. Electoral victories like Mamdani&apos;s <strong>$4B tax win</strong> in NYC provide crucial funding.</p>
      </Highlight>

      <p><strong>DSA chapters</strong> are actively <strong>unionizing</strong> Amazon and Lululemon, building <strong>worker co-ops</strong>, and advocating for bank-to-<strong>credit union</strong> conversions. <strong>NDP and Green parties</strong> push for SVT to generate <strong>CLT funding</strong> (<strong>$90M/year</strong> in BC) and support <strong>credit unions</strong> through legislation.</p>

      <h2>Tactical Allies: Small Capitalists</h2>
      <JapaneseHeading japanese="戦術的同盟" english="The Co-op Converts" />

      <p>Small capitalists can become tactical allies if their trajectory aligns with the Reset:</p>

      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Credit Union Members:</strong> Individuals in institutions like Vancity (500K members, $35B assets) who can redirect capital from Big 5 banks.</li>
        <li><strong>Small Landlords:</strong> Those owning 1-3 properties ($500K-$1M net worth) willing to sell to CLTs at 110% market value.</li>
        <li><strong>Co-op Suppliers:</strong> Contractors building UCI projects, incentivized toward worker ownership (Colorado model: 2% equity/year to worker trust).</li>
      </ul>

      <ArticleCallout type="info">
        <p><strong>Rule:</strong> They remain allies only if they actively vest equity to workers and communities. If they refuse worker ownership, they&apos;re opponents.</p>
      </ArticleCallout>

      <h2>Opponents: The 1% in Any Clothing</h2>
      <JapaneseHeading japanese="敵" english="Enemies Regardless of Identity" />

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="p-3 text-left">Group</th>
              <th className="p-3 text-left">Example</th>
              <th className="p-3 text-left">Why Opposed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Billionaire Donors</td>
              <td className="p-3">Chip Wilson, Jim Pattison</td>
              <td className="p-3">Anti-union, speculation, wealth hoarding</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">State-Socialists</td>
              <td className="p-3">Tankies, CPUSA hardliners</td>
              <td className="p-3">Reject co-ops for state seizure</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">Corporate Progressives</td>
              <td className="p-3">Bloomberg (anti-Mamdani PAC)</td>
              <td className="p-3">Social causes, oppose wealth redistribution</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleCallout type="warning">
        <p><strong>No exceptions. Wealth &gt; $1M = opponent.</strong> They give crumbs to buy legitimacy; <strong>we want the bakery.</strong></p>
      </ArticleCallout>

      <h2>Vancouver 2025 Playbook</h2>
      <JapaneseHeading japanese="所有権 > アイデンティティ" english="Ownership > Identity" />

      <p>The Vancouver 2025 playbook outlines concrete actions to build the 99% Ownership Bloc:</p>

      <div className="my-8 space-y-6">
        <ArticleCallout type="info">
          <h3 className="font-bold mb-2">November 14, 2025: Interfaith Co-op Summit</h3>
          <p>Vancouver Central Mosque, Beth Israel Synagogue, Christ Church Cathedral (rotating hosts). Panel: &quot;Co-ops in Our Traditions&quot; led by Rabbi, Imam, Priest. Breakout sessions: bank boycotts (Jewish), credit unions (Muslim), union organizing (Christian).</p>
          <p className="font-bold mt-2">Goal: 1,000 bank switchers by Dec 31, redirecting $100M to Vancity.</p>
        </ArticleCallout>

        <ArticleCallout type="info">
          <h3 className="font-bold mb-2">December 2025: Pride CLT Launch</h3>
          <p>Building on Toronto&apos;s Pride Housing (50 units, 0% flips since 2018), target East Vancouver&apos;s Commercial Drive. Funding: BC SVT revenue ($90M) + private bonds ($5M).</p>
          <p className="font-bold mt-2">Goal: 100 units of permanent affordable LGBTQ housing by 2027.</p>
        </ArticleCallout>

        <ArticleCallout type="info">
          <h3 className="font-bold mb-2">January 2026: Mamdani North Townhall</h3>
          <p>Feature Mamdani (NYC) and Kshama Sawant (Seattle) with Vancouver&apos;s COPE. Topic: &quot;How Electoral Wins Fund Co-ops.&quot; Ask NDP to redirect SVT revenue to UCI co-op fund ($10M/year).</p>
        </ArticleCallout>

        <ArticleCallout type="info">
          <h3 className="font-bold mb-2">March 2026: Vancity Equity Sale Campaign</h3>
          <p>Target Vancity&apos;s 500K members: Vote to convert into full worker co-op via 2% equity sale annually (Colorado law model).</p>
          <p className="font-bold mt-2">Goal: 100K worker-owners by 2030.</p>
        </ArticleCallout>
      </div>

      <h2>Why This Works: Post-Identity, Pro-Ownership</h2>
      <JapaneseHeading japanese="深掘り" english="In-Depth Analysis" />

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="p-3 text-left">Identity Politics</th>
              <th className="p-3 text-left">99% Reset</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3">Divides by who you are</td>
              <td className="p-3">Unites by who you own</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">State as savior</td>
              <td className="p-3">Co-ops as owner</td>
            </tr>
            <tr>
              <td className="p-3">Culture war</td>
              <td className="p-3">Class war</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Highlight>
        <p><strong>The 1% want you fighting over pronouns, prayers, or passports.<br />The Reset fights over who owns the bakery.</strong></p>
      </Highlight>

      <ColoredSection>
        <JapaneseHeading japanese="結論" english="Conclusion" />
        <p>This is a <strong>democratic socialist movement</strong>. Our strategy is clear:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Align with:</strong> Anyone under $1M who builds <strong>credit unions, CLTs, worker co-ops, and unions</strong>.</li>
          <li><strong>Reject:</strong> Anyone over $1M who blocks ownership.</li>
          <li><strong>Win by:</strong> Owning the future together.</li>
        </ul>
      </ColoredSection>

      <p>In Vancouver, November 14, 2025, we will host the <strong>99% Ownership Summit</strong>—bringing together Jews, Muslims, Christians, LGBTQ, democratic socialists, and small capitalists. The agenda: <strong>$100M bank boycott</strong>, <strong>5 new CLTs</strong>, <strong>10 worker co-ops</strong>.</p>

      <Highlight>
        <p><strong>The 1% don&apos;t care about your identity. Neither should we.</strong><br />#99ResetVan | Ownership &gt; Identity</p>
      </Highlight>

      <h2>For Organizers: Talking Points</h2>
      <JapaneseHeading japanese="オーガナイザー向け" english="Organizer Toolkit" />

      <h3>When recruiting allies:</h3>
      <p>Focus on shared economic realities: <em>&quot;Do you own your workplace? No? Then you&apos;re one of us.&quot;</em> Highlight community strengths: <em>&quot;Your mosque/synagogue/church has co-op roots. Let&apos;s revive them.&quot;</em> Connect to social justice: <em>&quot;Pride isn&apos;t just about rights—it&apos;s about owning our community.&quot;</em></p>

      <h3>When rejecting opponents:</h3>
      <p>Be direct about wealth and opposition to democratic ownership: <em>&quot;You have $5M? Great. Sell $4M to the wealth fund or you&apos;re the enemy.&quot;</em> Counter state-centric arguments: <em>&quot;You want state control? We tried that in the USSR. It failed. Co-ops work.&quot;</em></p>

      <Highlight>
        <p><strong>The unifying frame:</strong> <em>&quot;In 20 years, either billionaires own everything, or we do. Pick a side.&quot;</em></p>
      </Highlight>

      <p className="text-sm text-textDim italic mt-8">
        <strong>References:</strong> Pew Research (2025), ISPU (2025), PRRI (2025), UCLA Williams Institute (2025), StatsCan (Q1 2025)
      </p>

      <p className="text-sm text-textDim mt-4">
        <strong>Take Action:</strong> <a href="/chapters" className="text-accent hover:underline">Find Your Chapter</a> | <a href="/resources" className="text-accent hover:underline">Interfaith Toolkit</a> | <a href="/plan" className="text-accent hover:underline">Read the Plan</a>
      </p>
    </ArticleLayout>
  );
}

