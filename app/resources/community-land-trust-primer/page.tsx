import { ResourceLayout, ResourceSection, ResourceCallout, ResourceStats, ResourceStat } from "@/components/resource-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Land Trust Primer — 99% Reset",
  description: "How CLTs work, resale formulas, governance structures, and step-by-step guide to launching a CLT in your city.",
};

export default function CommunityLandTrustPrimer() {
  return (
    <ResourceLayout
      title="Community Land Trust Primer"
      category="Housing"
      description="How CLTs work, resale formulas, governance structures, and step-by-step guide to launching a CLT in your city."
      video="/videos/resources4.mp4"
      difficulty="Hard"
      timeframe="18-24 months"
      impact="Very High"
      videoPosition="right"
    >
      <h2>What is a Community Land Trust?</h2>
      <p>
        A Community Land Trust operates as a nonprofit corporation that <strong>permanently removes land from speculative 
        markets.</strong> The CLT owns the land itself while leasing it long-term to residents who own the buildings. This 
        separation between land and structure ownership creates a unique mechanism for ensuring affordability across generations.
      </p>

      <p>
        <strong>The core innovation lies in the resale formula.</strong> When a CLT homeowner sells, they receive only a 
        limited share of appreciation—typically 25%—while the CLT captures the remainder to keep housing affordable for the 
        next buyer. Residents hold 99-year ground leases providing secure tenure while preventing speculative price inflation. 
        Governance follows a tripartite model: one-third current residents, one-third community representatives, one-third 
        public officials.
      </p>

      <ResourceCallout type="info">
        <p>
          <strong>Why CLTs Matter:</strong> Canadian housing prices have increased over 350% since 1979 while wages stagnated. 
          CLTs permanently cap this speculation, allowing residents to build modest equity while ensuring the next generation 
          can afford housing. Community control replaces distant investor decisions about neighborhood development.
        </p>
      </ResourceCallout>

      <ResourceCallout type="info">
        <p>
          <strong>Reset Phase 2:</strong> CLTs provide the housing infrastructure for decommodification. Scaling to 50,000 
          CLT units by year 10 redirects <strong>$15-20 billion</strong> from landlords and speculators into permanent 
          community assets that never return to market-rate pricing.
        </p>
      </ResourceCallout>

      <h2>How CLTs Work: A Comparison</h2>

      <p>
        <strong>Traditional homeownership functions as speculation.</strong> You buy land plus house at market price—say 
        $800,000 in Vancouver. You hope for appreciation, treating your home as an investment vehicle. Eventually you sell 
        at profit or lose everything to foreclosure. This model drives prices beyond reach for working families while enriching 
        those who already own property.
      </p>

      <p>
        <strong>CLT homeownership follows a different logic entirely.</strong> The CLT purchases land for $300,000 using 
        grants and community bonds. You buy only the house for $200,000—less than a third of the $800,000 market price for 
        an equivalent property. Monthly lease fees to the CLT run $50-$150, covering land taxes and CLT operations.
      </p>

      <p>
        <strong>Your equity builds through limited appreciation and mortgage principal payments.</strong> When you sell, the 
        CLT buys back at the formula price rather than market rate. The next buyer gets the same affordability you enjoyed. 
        This intergenerational solidarity sustains community access to housing permanently.
      </p>

      <ResourceCallout>
        <p>
          <strong>Example: Burlington Vermont Model</strong><br />
          Purchase price: $200,000 (house only)<br />
          Market appreciation after 10 years: $300,000<br />
          Resale price: $200,000 + 25% of ($300,000 - $200,000) = <strong>$225,000</strong><br />
          Homeowner equity: $25,000 gain + mortgage principal paid<br />
          Next buyer: Purchases house for $225,000 (still 50% below market)
        </p>
      </ResourceCallout>

      <h2>Governance Structure</h2>

      <p>
        <strong>The tripartite board model balances three constituencies.</strong> One-third of board seats go to current 
        leaseholders, elected by residents. Another third represents community institutions—nonprofits, churches, unions—appointed 
        by those organizations. The final third consists of public representatives including municipal officials and housing 
        advocates, also appointed.
      </p>

      <p>
        <strong>This structure prevents capture by any single interest.</strong> Residents ensure homeowner concerns about 
        maintenance and fees get heard. Community representatives preserve the affordability mission against pressure to drift 
        toward market-rate pricing. Public officials align CLT activities with broader municipal housing policy including zoning 
        and tax credits.
      </p>

      <p>
        <strong>Major decisions require 66% supermajority approval</strong> for changes to bylaws, land acquisition, or resale 
        formulas. Routine votes on budgets and staff hiring pass by simple majority. Critically, residents hold veto power over 
        lease term changes, protecting homeowners from arbitrary policy shifts.
      </p>

      <h2>Financing CLT Land Acquisition</h2>

      <ResourceStats>
        <ResourceStat value="$100K-$5M" label="Municipal Grants" />
        <ResourceStat value="$500K-$20M" label="Provincial Housing Funds" />
        <ResourceStat value="$50K-$2M" label="Community Bonds" />
        <ResourceStat value="$90M/year" label="BC Speculation Tax Revenue" />
      </ResourceStats>

      <p>
        <strong>Municipal grants provide the most accessible initial funding.</strong> Cities facing housing crises—Vancouver, 
        Toronto, Montreal—allocate $100,000-$5,000,000 for affordable housing initiatives that CLTs can tap. Provincial 
        affordable housing funds managed by BC Housing or CMHC co-investment programs offer $500,000-$20,000,000 for larger 
        projects with proper planning.
      </p>

      <p>
        <strong>Community bonds enable grassroots capital raising.</strong> Local residents lend $50,000-$2,000,000 at 3-5% 
        interest over 10-year terms, lower than market rates but providing returns. Philanthropic foundations including Vancity 
        and McConnell contribute $100,000-$10,000,000 for aligned projects. British Columbia&apos;s speculation tax generates 
        $90 million annually—Phase 2 advocacy aims to redirect this to CLT development.
      </p>

      <p>
        <strong>Total cost per unit runs $200,000-$450,000</strong> including $50,000-$150,000 for land and $150,000-$300,000 
        for building construction. This compares favorably to $800,000-$1,500,000 market prices in major Canadian cities, 
        making CLT units genuinely affordable for working families.
      </p>

      <h2>18-Month CLT Launch Plan</h2>

      <h3>Months 1-6: Research & Coalition</h3>

      <p>
        <strong>Begin by assessing local need and political appetite.</strong> Does median home price exceed five times median 
        income—the standard threshold for housing crisis? Do municipal councillors, nonprofits, and residents support exploring 
        alternatives to market-rate development? Without basic political backing, CLT campaigns struggle.
      </p>

      <p>
        <strong>Study existing CLTs to learn from established models.</strong> Québec City CLT and Vancouver CLT in Canada 
        provide domestic precedents. Burlington Vermont, Portland Oregon, and Atlanta CLTs offer mature American examples 
        adaptable to Canadian law. Understanding what works and what fails saves enormous time and prevents repeating others&apos; 
        mistakes.
      </p>

      <p>
        <strong>Form a steering committee of 10-15 committed people:</strong> residents facing housing insecurity, housing 
        advocates with policy expertise, union representatives with organizing experience, and lawyers who understand nonprofit 
        incorporation. Meet monthly and assign specific roles including legal work, fundraising, and communications. Expect 
        this phase to require substantial volunteer hours.
      </p>

      <p>
        <strong>Incorporate as a federal or provincial nonprofit corporation.</strong> Use bylaw templates from the Grounded 
        Solutions Network rather than drafting from scratch. These templates include decades of refinement addressing common 
        governance challenges. Legal incorporation establishes your CLT as a legitimate entity capable of owning land and 
        entering contracts.
      </p>

      <h3>Months 7-12: Fundraising & Land Acquisition</h3>

      <p>
        <strong>Campaign for municipal support through city council presentations.</strong> Your pitch emphasizes solving housing 
        crisis without displacing current residents. Request three specific commitments: land donation of surplus city-owned lots, 
        direct grants of $500,000-$5,000,000 from affordable housing funds, and property tax exemptions for CLT-owned land. Frame 
        these as investments preventing homelessness costs that exceed CLT subsidies.
      </p>

      <p>
        <strong>Launch community bond campaigns to crowdfund $100,000-$500,000 from local residents.</strong> Offer 3-5% interest 
        over 10-year terms—below market rates but attractive for mission-aligned investors. Platforms like REBL Bonds specialize 
        in Canada-specific community financing, handling regulatory compliance that intimidates most grassroots organizations.
      </p>

      <p>
        <strong>Identify target properties matching your criteria:</strong> underutilized lots, foreclosures, or speculative 
        holdings owned by absentee landlords. Start with 10-20 unit developments rather than massive projects. Negotiate 
        below-market purchases at $200,000 per acre versus $500,000 market rates. Sellers gain tax deductions for donations 
        plus community legacy—appealing to some property owners more than maximum profit.
      </p>

      <h3>Months 13-18: Development & Leasing</h3>

      <p>
        <strong>Build or renovate housing using unionized labor and modular construction.</strong> Timeline runs 6-12 months 
        with construction costs of $150,000-$300,000 per unit. CMHC and provincial funds subsidize these expenses, making 
        projects financially viable despite below-market pricing. Quality matters—CLT units must provide dignified housing, 
        not substandard shelter.
      </p>

      <p>
        <strong>Market completed units to income-eligible residents:</strong> typically families earning 60-120% of area median 
        income. Prioritize current renters facing displacement, essential workers, and existing community members. If applications 
        exceed available units, conduct transparent lottery selection rather than arbitrary choices that breed resentment.
      </p>

      <p>
        <strong>Close sales with proper legal documentation.</strong> Residents purchase houses for approximately $200,000 through 
        credit union mortgages. Simultaneously they sign 99-year ground leases with the CLT requiring $50-$150 monthly payments. 
        Both documents need careful legal review—mistakes here create decades of problems.
      </p>

      <p>
        <strong>Ongoing stewardship prevents drift from CLT mission.</strong> Monitor compliance ensuring no unauthorized subletting 
        or resale formula violations. Provide homeowner education covering maintenance, budgeting, and understanding their unique 
        ownership structure. This relationship continues for decades, so build it solidly from the beginning.
      </p>

      <h2>Case Studies</h2>

      <ResourceCallout>
        <p>
          <strong>Burlington Community Land Trust (Vermont):</strong> Founded 1984, now managing 565 units housing 1,200+ residents. 
          Uses appraisal-based 25% resale formula. Achieved zero foreclosures during 2008 financial crisis with 90% homeowner 
          satisfaction. Key lesson: Municipal support through land donation and zoning waivers proves critical for scale.
        </p>
      </ResourceCallout>

      <ResourceCallout>
        <p>
          <strong>Champlain Housing Trust (Vermont):</strong> Created 2006 through merger, now operates 2,200+ units on $30 million 
          annual budget. Diversified model includes CLT homes, rental apartments, and elder housing. Scaled through $50 million 
          municipal bonds without losing tax revenue. Proves CLTs can grow large while staying mission-driven.
        </p>
      </ResourceCallout>

      <ResourceCallout type="warning">
        <p>
          <strong>Québec City CLT (Canada):</strong> Founded 2010, operates 40 units. Faces challenges from less municipal support 
          than US counterparts, resulting in slow scaling. Key lesson: Federal and provincial policy support matters enormously—BC 
          Housing&apos;s proposed CLT fund could transform Canadian CLT viability.
        </p>
      </ResourceCallout>

      <h2>Common Challenges and Solutions</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-4">Challenge</th>
              <th className="text-left p-4">Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Land too expensive</strong></td>
              <td className="p-4">Target foreclosures and city-owned lots; use speculation tax revenue</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Residents want full equity</strong></td>
              <td className="p-4">Educate on trade-off: less equity but no market risk, affordability for children</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Municipal resistance</strong></td>
              <td className="p-4">Build coalition with unions, churches, residents; demonstrate fiscal benefits</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Legal complexity</strong></td>
              <td className="p-4">Use Grounded Solutions templates; hire cooperative housing lawyer</td>
            </tr>
            <tr>
              <td className="p-4"><strong>Scalability concerns</strong></td>
              <td className="p-4">Start with 10 units; prove model; use bonds for expansion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQs</h2>

      <p><strong>Q: Can CLT homeowners refinance mortgages?</strong></p>
      <p>
        A: Yes, but the CLT must approve refinancing to ensure equity preservation requirements remain intact. Most credit unions 
        understand CLT structures—Vancity and Desjardins have specific experience with these arrangements and streamline approval 
        processes.
      </p>

      <p><strong>Q: What happens if a resident defaults on their mortgage?</strong></p>
      <p>
        A: The CLT buys back the home at formula price and resells to the next eligible buyer. The defaulting resident keeps 
        whatever equity they&apos;ve built through principal payments and appreciation share. This protects residents from total 
        loss while maintaining CLT affordability mission.
      </p>

      <p><strong>Q: Do CLTs work for rental housing?</strong></p>
      <p>
        A: Absolutely. The CLT owns both land and buildings, renting units at below-market rates—perhaps $800 monthly versus 
        $1,500 market rent. This model called &quot;limited-equity rental cooperative&quot; provides permanent affordability 
        for renters unable or unwilling to pursue ownership.
      </p>

      <p><strong>Q: Can I leave my CLT home to my children?</strong></p>
      <p>
        A: Yes, subject to CLT approval verifying they meet income eligibility caps. Alternatively, your estate can sell back 
        to the CLT at formula price, allowing your heirs to inherit the equity you built. This preserves both affordability 
        and intergenerational wealth transfer.
      </p>

      <h2>Resources</h2>
      <p>
        <strong>Grounded Solutions Network</strong> at <a href="https://groundedsolutions.org" target="_blank" rel="noopener noreferrer">groundedsolutions.org</a> provides 
        templates, training, and technical assistance. The <a href="https://champlainhousingtrust.org" target="_blank" rel="noopener noreferrer">Burlington/Champlain Housing Trust</a> offers 
        the most developed North American model. <a href="https://clttq.ca" target="_blank" rel="noopener noreferrer">Québec City CLT</a> demonstrates Canadian implementation. 
        <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer">CMHC</a> publishes CLT toolkits and resale formula guides for Canadian contexts.
      </p>

      <ResourceCallout>
        <p>
          <strong>Last Updated:</strong> November 2025<br />
          <strong>Difficulty:</strong> Hard (18-24 months)<br />
          <strong>Impact:</strong> Very High (permanent housing decommodification)
        </p>
      </ResourceCallout>
    </ResourceLayout>
  );
}

