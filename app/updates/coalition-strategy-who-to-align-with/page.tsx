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
      <p>
        <strong>Jewish communities bring generations of cooperative tradition</strong> stretching back to the kibbutzim and credit union movements that sustained immigrant communities through the early 20th century. Today, DSA Jewish caucuses operate cooperative bakeries applying those historical lessons to modern economic democracy. Jewish Voice for Peace deploys economic boycott models refined through decades of social justice organizing, targeting banks financing occupation and extraction.
      </p>

      <p>
        <strong>Muslim communities are building sophisticated financial alternatives</strong> rooted in Islamic principles prohibiting usury and emphasizing community welfare through zakat. The United Muslims Association of America launched a mosque-based credit union in Vancouver serving members who reject interest-bearing conventional banking. CAIR chapters across Canada organize tenant unions addressing discrimination in housing markets while building collective power among renters facing exploitation.
      </p>

      <p>
        <strong>Christian communities provide crucial union organizing infrastructure</strong> through labor priests and progressive evangelical networks. The Vancouver and District Labour Council&apos;s faith caucus mobilizes clergy who view union drives as moral imperatives rather than merely economic struggles. Evangelical food cooperative networks apply biblical principles of mutual aid to creating alternative distribution systems that bypass corporate grocery monopolies, demonstrating that cooperative economics transcends theological differences.
      </p>

      <p>
        <strong>LGBTQ communities face particular housing discrimination</strong> that makes Community Land Trusts essential infrastructure. Pride CLTs modeled on Toronto&apos;s successful 50-unit project create permanently affordable housing while building queer-owned economic spaces. These developments prevent displacement that typically follows neighborhood gentrification, maintaining community cohesion across generations. Worker-owned queer spaces from cafes to bookstores provide employment free from discrimination while serving community needs.
      </p>

      <h3>Democratic Socialists & Progressives</h3>
      <Highlight>
        <p><strong>Why they&apos;re core allies:</strong> Democratic socialists and progressive electoral coalitions provide the legislative infrastructure enabling cooperative economics at scale. Zohran Mamdani&apos;s <strong>$4 billion tax victory</strong> in New York City demonstrates how electoral power translates directly into funding for credit unions, CLTs, worker co-ops, and union organizing drives.</p>
      </Highlight>

      <p>
        <strong>DSA chapters across North America coordinate sophisticated multi-front campaigns.</strong> Their Amazon unionization drives at fulfillment centers combine traditional labor organizing with modern digital solidarity networks. Lululemon workers receive organizing support connecting retail employees across dozens of locations. Simultaneously, DSA cooperative working groups provide technical assistance for worker co-op formation while pressuring credit unions to accept conversions from conventional banks. This integrated approach builds all four pillars of economic democracy simultaneously rather than pursuing isolated single-issue campaigns.
      </p>

      <p>
        <strong>NDP and Green parties translate grassroots organizing into legislative victories</strong> when elected to power. British Columbia&apos;s speculation and vacancy tax generates $90 million annually—revenue that could fund thousands of Community Land Trust units if properly allocated. Provincial NDP governments have enacted credit union protection legislation preventing hostile takeovers by conventional banks while providing capital access for cooperative expansion. Green parties push land use policies favoring CLT development over market-rate speculation, using zoning authority to enable affordable housing construction.
      </p>

      <h2>Tactical Allies: Small Capitalists</h2>
      <JapaneseHeading japanese="戦術的同盟" english="The Co-op Converts" />

      <p>
        Small capitalists occupy an ambiguous position in the economic transformation toward worker ownership. Their trajectory matters more than their current class position—those moving toward cooperative models become allies, while those defending private accumulation remain opponents. <strong>Credit union members</strong> demonstrate this potential. Vancity&apos;s 500,000 members collectively control $35 billion in assets, capital that could be systematically redirected from Big 5 banks financing fossil fuels and speculation toward democratic finance supporting community development. These members aren&apos;t yet worker-owners of the credit union itself, but their deposits provide the foundation for that eventual conversion.
      </p>

      <p>
        <strong>Small landlords present a more contentious case</strong> given housing&apos;s role in wealth extraction. Those owning 1-3 properties with $500,000-$1,000,000 net worth can become tactical allies through specific mechanisms. Community Land Trusts offer these property owners 110% of market value—modest profit securing their retirement while transferring land into permanent community ownership. This 10% premium costs less than decades of future speculation while immediately creating affordable housing. However, landlords demanding maximum profit through continued speculation or refusing CLT sales remain opponents regardless of how &quot;mom and pop&quot; their operation appears. Small-scale exploitation remains exploitation.
      </p>

      <p>
        <strong>Cooperative suppliers and contractors</strong> building worker-owned projects face structural incentives toward conversion. Colorado&apos;s pioneering model mandates 2% annual equity transfers to worker trusts in companies receiving state contracts or subsidies. Contractors repeatedly working on UCI or CLT projects encounter worker ownership as practical reality rather than abstract ideology. Those who embrace gradual conversion—perhaps selling 51% equity over 25 years—become allies helping scale the cooperative economy. Those treating worker ownership as merely another revenue stream while maintaining conventional business models contribute nothing to economic transformation.
      </p>

      <ArticleCallout type="info">
        <p><strong>The non-negotiable standard:</strong> Small capitalists remain allies only through active equity vesting to workers and communities. Passive support or rhetorical endorsement while maintaining extractive ownership models accomplishes nothing. The test is simple—are they transferring ownership or just extracting profit? Those refusing democratization become opponents indistinguishable from large capital, regardless of their scale.</p>
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
        <p>This is a <strong>democratic socialist movement</strong> with a crystalline strategy. We <strong>align with anyone</strong> holding less than $1 million in net worth who actively builds <strong>credit unions, CLTs, worker co-ops, and unions</strong>—the four pillars of economic democracy. We <strong>reject anyone</strong> hoarding wealth exceeding $1 million who blocks worker ownership, regardless of their progressive rhetoric or identity markers. We <strong>win by owning</strong> the economic infrastructure together rather than petitioning the powerful for crumbs.</p>
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

