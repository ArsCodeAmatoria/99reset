import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';
import { getArticleNavigation, getRelatedArticles, articles } from '@/lib/articles';

export const metadata = {
  title: "Vancouver Organizing Guide — Ninety Nine",
  description: "Vancouver-specific tactics for bank boycotts, union drives, worker co-ops, CLTs, and wealth taxes.",
  openGraph: {
    title: "Organizing for the 99% Reset in Vancouver: A Local Action Guide",
    description: "Vancouver-specific tactics for bank boycotts, union drives, worker co-ops, CLTs, and wealth taxes. 10K new union members and 1K CLT units in 24 months.",
    images: ['/images/vancouver-organizing.png'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Organizing for the 99% Reset in Vancouver: A Local Action Guide",
    description: "Vancouver-specific tactics for bank boycotts, union drives, worker co-ops, CLTs, and wealth taxes.",
    images: ['/images/vancouver-organizing.png'],
  },
};

export default function VancouverOrganzingArticle() {
  const slug = 'vancouver-organizing-guide-nov-2025';
  const article = articles.find(a => a.slug === slug);
  const { prev, next } = getArticleNavigation(slug);
  const related = getRelatedArticles(slug, 4);

  return (
    <ArticleLayout
      title="Organizing for the 99% Reset in Vancouver: A Local Action Guide – November 2025"
      date="2025-11-12"
      category="Local Organizing"
      excerpt="Vancouver-specific tactics for bank boycotts, union drives, worker co-ops, CLTs, and wealth taxes. Leverage NDP's SVT, COPE's tenant unions, and local allies. 10K new union members and 1K CLT units in 24 months."
      image="/images/vancouver-organizing.png"
      slug={slug}
      discussionTweetUrl={article?.discussionTweetUrl}
      prevArticle={prev}
      nextArticle={next}
      relatedArticles={related}
    >
      <ColoredSection>
        <JapaneseHeading japanese="要約" english="Executive Summary" />
        <p>Vancouver exemplifies Canada&apos;s wealth crisis: average home prices exceed <strong>$1.2 million</strong> (up 350% since 1979), rents surged 20% YoY, and the top 1% controls ~25% of wealth. Billionaires like <strong>Chip Wilson</strong> ($7.5B) and <strong>Jim Pattison</strong> ($11.4B) amplify speculation.</p>
      </ColoredSection>

      <Highlight>
        <p>The <strong>99% Reset</strong> counters this through <strong>democratic socialist tactics</strong>: bank boycotts, <strong>union drives</strong>, <strong>worker co-ops, CLTs</strong>, and provincial <strong>wealth taxes</strong>—the four pillars of economic democracy.</p>
      </Highlight>

      <Stats>
        <Stat value="10K" label="New Union Members Target" />
        <Stat value="$500M" label="Deposits to Vancity Credit Union" />
        <Stat value="1K Units" label="CLT Affordable Housing" />
      </Stats>

      <h2>Local Context and Opportunities</h2>
      <JapaneseHeading japanese="地域の機会" english="Vancouver's Ecosystem" />

      <p>
        <strong>Vancouver&apos;s organizing infrastructure contains both structural weakness and institutional strength</strong> creating strategic openings for democratic socialist transformation. Private-sector union density languishes at just 15% compared to 72% public sector density—massive untapped organizing potential among retail, service, and tech workers who currently face employers individually. Yet the Vancouver and District Labour Council coordinates 90+ affiliated unions representing 60,000 workers, providing established networks for campaign mobilization. This combination of low private unionization and high organizational capacity means coordinated drives could rapidly expand union coverage across strategic sectors from Lululemon retail to Amazon warehouses.
      </p>

      <p>
        <strong>Political arithmetic creates unusual leverage for progressive policy.</strong> The NDP&apos;s slim legislative majority depends on confidence-and-supply agreements with Green MLAs whose platforms align on wealth redistribution, speculation taxes, and cooperative economics. This minority government situation means organized constituencies can extract concessions through strategic pressure on swing votes. The Greens need to demonstrate policy wins to justify their coalition partnership, creating opportunities to push Speculation and Vacancy Tax expansion, CLT funding increases, and cooperative development subsidies that wouldn&apos;t pass under NDP majority or Conservative control. The next 18 months before potential election calls represent a window for securing legislative gains that outlast the current government.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="p-3 text-left">Opportunity</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Reset Alignment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">SVT Expansion</td>
              <td className="p-3">NDP 2025: +13 municipalities, <strong>$90M revenue</strong></td>
              <td className="p-3">Phase 1: Tax Wilson holdings</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Tenant Unions</td>
              <td className="p-3">COPE bylaw: Legalize bargaining, end demovictions</td>
              <td className="p-3">Phase 2: Counter demovictions via <strong>CLTs</strong></td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-bold">Co-op Funding</td>
              <td className="p-3">City fast-track: 20-30% cost cuts for non-profits</td>
              <td className="p-3">Phase 2: UCI BUILD for 10 co-ops</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">Union Drives</td>
              <td className="p-3">CUPE: 3,200+ UBC GRAs unionized 2025</td>
              <td className="p-3">Phase 1: VDLC targets Lululemon/Amazon</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Phase 1: Starve the Parasite (2-4 Years)</h2>
      <JapaneseHeading japanese="フェーズ１" english="Bank Boycotts & Unions" />

      <p>
        <strong>Bank boycotts operate as precision strikes against capital concentration.</strong> Vancity Credit Union maintains ethical lending policies excluding fossil fuel financing while growing assets 3.26% in Q1 2025—demonstrating capacity to absorb significant deposit transfers. The $500 million outflow target represents approximately 1.5% of Vancity&apos;s current $35 billion asset base, achievable through coordinated campaigns launched at the November 14 Green Party social and amplified through VDLC&apos;s November 22 rally. Every dollar switched from Royal Bank or TD to Vancity simultaneously starves the Big Five banks financing Wilson&apos;s speculation and Pattison&apos;s extractive holdings while capitalizing democratic financial infrastructure governed by depositor-members. The mechanism isn&apos;t symbolic but material—banks losing deposits face credit rating scrutiny, regulatory investigations, and rising borrowing costs that cascade through their entire lending portfolios.
      </p>

      <p>
        <strong>Union drives transform isolated workers into collective agents</strong> capable of challenging employer power through coordinated withdrawal of labor. VDLC and CUPE campaigns targeting Lululemon retail locations strike directly at Chip Wilson&apos;s anti-union business model while Amazon warehouse organizing builds solidarity among logistics workers facing algorithmic management. Science World organizing creates public sector precedent for cultural workers. OECD research demonstrates that every 10 percentage point increase in union density generates 4-6% wage gains across affected sectors through both direct bargaining and spillover effects pressuring non-union employers. British Columbia&apos;s card-check certification process—requiring 55% employee signatures rather than prolonged elections—enables rapid union recognition when organizing succeeds. The timeline requires sustained outreach: 5,000 new Vancouver members across 2-4 years translates to approximately 100 successful card drives among medium-sized workplaces.
      </p>

      <p>
        <strong>Tax activism mobilizes public pressure for progressive revenue generation.</strong> Premier Eby&apos;s willingness to expand the Speculation and Vacancy Tax to 13 additional municipalities demonstrates political receptiveness when constituent demand materializes. Extending SVT coverage to billionaire ranch holdings and luxury secondary properties could generate an additional $50-100 million annually beyond current $90 million provincial revenue. Canadians for Tax Fairness polling shows 89% public support for wealth taxes—overwhelming consensus rarely translating into policy absent organized campaigns forcing legislative action. Petition drives, town halls with NDP MLAs, and media advocacy create the political cover enabling progressive taxation that otherwise dies in committee facing business lobby opposition.
      </p>

      <ArticleCallout type="info">
        <p><strong>Milestone:</strong> 1K bank switchers by Dec 2025; <strong>$50M outflow</strong> triggers OSFI review. <strong>5K new union members</strong> by mid-2027.</p>
      </ArticleCallout>

      <h2>Phase 2: Flood the Zone (4-8 Years)</h2>
      <JapaneseHeading japanese="フェーズ２" english="Co-ops & CLTs" />

      <p>
        <strong>Worker cooperative expansion requires capital, technical assistance, and market access</strong>—infrastructure the Union Co-op Initiative and Vancouver Arts, Leisure, and Unique workers model provide through established programs. UCI&apos;s BUILD program offers patient capital loans, cooperative governance training, and shared services reducing startup costs that typically kill worker ownership conversions. The Vancouver Arts model demonstrates viability in creative sectors where irregular income and project-based work historically prevented collective ownership. Citizens&apos; Wealth Fund JEDDI grants targeting BIPOC-led conversions address the racial wealth gap systematically excluding communities of color from business ownership through discriminatory lending. Each $50,000 JEDDI grant capitalizes one cooperative—10 cooperatives by 2030 requires $500,000 in seed funding, achievable through municipal social procurement policies and provincial cooperative development funds. Strategic sectors include retail replacing corporate chains, tech cooperatives offering ethical alternatives to surveillance capitalism, food service building community-controlled restaurants, and creative industries democratizing cultural production currently concentrated in corporate hands.
      </p>

      <p>
        <strong>Community Land Trusts permanently remove housing from speculative markets</strong> through ground lease structures separating land ownership from building ownership. Co-operative Housing Federation of BC tours showcase existing CLT models while identifying acquisition targets including East Pender vacant lots and the Aaron Webster memorial site—properties transitioning to community ownership rather than market-rate development. BlackRock&apos;s 22% ownership of Vancouver rental units demonstrates institutional investor dominance driving rent inflation; 500% tax penalties on investor-owned homes would force portfolio sales creating CLT acquisition opportunities at distressed prices. The 1,000 unit target by 2030 requires approximately 100 units annually—aggressive but achievable given Vancouver currently adds 5,000+ market units yearly. Indigenous-led CLTs incorporating traditional governance structures would address colonial land dispossession through contemporary legal mechanisms creating perpetual community stewardship.
      </p>

      <Highlight>
        <p><strong>Community Land Trusts create irreversible democratic ownership through legal architecture.</strong> Once land enters trust structures with 99-year ground leases ensuring affordability, no developer can purchase it for market-rate conversion, no politician can sell it for budget revenue, no market crash can inflate it beyond affordability formulas. Burlington&apos;s CLT maintained price stability through the 2008 financial crisis, 2020 pandemic disruption, and current speculation mania—30 years of permanent affordability across radically different economic conditions. This is structural change, not temporary subsidy. The legal form determines the outcome.</p>
      </Highlight>

      <h2>Your 30-Day Action List (Start Nov 10, 2025)</h2>
      <JapaneseHeading japanese="３０日間の行動" english="Get Started Now" />

      <ol className="list-decimal pl-6 space-y-3 my-6">
        <li><strong>Join allies:</strong> Sign up <strong>VDLC</strong> (vdlc.ca), <strong>UCI</strong> (unioncoopbc.ca), <strong>MVA</strong> (metvanalliance.nationbuilder.com). Attend Nov 14 Green social.</li>
        <li><strong>Bank switch:</strong> Move to <strong>Vancity</strong>—use #BreakUpWithYourBank. Every deposit is a vote for democratic finance.</li>
        <li><strong>Union/organize:</strong> Contact <strong>CUPE</strong> (cupe.bc.ca) about your workplace. Start a <strong>tenant union</strong> via <strong>COPE</strong>.</li>
        <li><strong>CLT/co-op boost:</strong> Email <strong>CHF BC</strong> (chf.bc.ca) for tours; divert $50/month to <strong>UCI</strong>. Petition Minister <strong>Kahlon</strong> for CLT funding.</li>
        <li><strong>Event blitz:</strong> Nov 19 NDP workshop—pitch wealth tax. Host <strong>#99ResetVan meetup Nov 22</strong>.</li>
        <li><strong>Amplify:</strong> Post: &quot;<strong>Vancouver Reset: Boycott Big Five, Build Co-ops</strong>.&quot; Tag @BCNDP, @COPEVancouver, @BCGreens.</li>
      </ol>

      <ColoredSection>
        <JapaneseHeading japanese="結論" english="Conclusion" />
        <p>Vancouver—ground zero for housing speculation—can lead the <strong>99% Reset</strong> as the vanguard city of <strong>democratic socialism</strong>. <strong>UCI co-ops</strong> starve parasites, <strong>CHF CLTs</strong> flood counter-power, and <strong>SVT revenue</strong> ($90M annually) funds the infrastructure.</p>
      </ColoredSection>

      <Highlight>
        <p><strong>The 1% (Wilson/Pattison) rule on our consent—withdraw it.</strong> In 24 months: 10K unionized, 1K housed in <strong>CLTs</strong>, $500M in <strong>credit unions</strong>.</p>
      </Highlight>

      <p className="text-sm text-textDim italic mt-8">
        <strong>References:</strong> StatsCan (Q1 2025), C4TF (2025), CHF BC (2025), VDLC (2025), COPE (2025), NDP BC (2025)
      </p>
    </ArticleLayout>
  );
}

