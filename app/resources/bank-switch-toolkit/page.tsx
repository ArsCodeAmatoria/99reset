import { ResourceLayout, ResourceSection, ResourceCallout, ResourceStats, ResourceStat } from "@/components/resource-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank Switch Toolkit — 99% Reset",
  description: "Step-by-step guide to moving deposits from corporate banks to credit unions. Includes comparison charts and conversation scripts.",
};

export default function BankSwitchToolkit() {
  return (
    <ResourceLayout
      title="Bank Switch Toolkit"
      category="Finance"
      description="Step-by-step guide to moving deposits from corporate banks to credit unions. Includes comparison charts and conversation scripts."
      video="/videos/resources.mp4"
      difficulty="Easy"
      timeframe="4 weeks"
      impact="High"
      videoPosition="left"
    >
      <h2>Why Switch?</h2>
      <p>
        Canada&apos;s Big 5 banks (RBC, TD, BMO, Scotiabank, CIBC) financed <strong>$900 billion</strong> in fossil 
        fuels since 2016 and enable billionaire wealth concentration through offshore havens. Every dollar in your 
        chequing account becomes capital they deploy toward extraction and speculation.
      </p>
      
      <p>
        Credit unions operate under a fundamentally different model. They&apos;re <strong>member-owned</strong>, 
        with one-member-one-vote governance that puts democratic control in the hands of depositors—not shareholders 
        chasing quarterly returns. Their non-profit structure means lower fees, with savings passed directly to members 
        rather than extracted as executive bonuses. Most importantly, they&apos;ve largely <strong>divested from fossil fuels</strong>, 
        and they keep money circulating locally through mortgages and small business loans instead of offshore tax havens.
      </p>

      <p>
        The math is stark: moving just $50 billion in deposits—merely 1% of the Big 5&apos;s base—crashes their 
        credit ratings <strong>three times faster</strong> than regulation ever could, forcing divestment from the 
        speculative assets that fuel climate collapse and wealth concentration.
      </p>

      <ResourceCallout type="info">
        <p><strong>Impact Multiplier:</strong> When you switch, you&apos;re not just withdrawing your money—you&apos;re 
        undermining the Big 5&apos;s credit rating, which makes it more expensive for them to lend. This cascades into 
        forced divestment from high-risk assets like fossil fuels.</p>
      </ResourceCallout>

      <h2>30-Day Switch Plan</h2>

      <h3>Week 1: Research &amp; Choose</h3>
      
      <p>
        <strong>Start with the Credit Union Central of Canada&apos;s locator to find institutions in your region.</strong> 
        Most credit unions restrict membership to people who live or work within their service area, so geography matters. 
        When comparing options, scrutinize fees, ATM network access, online banking platforms, and—critically—fossil fuel 
        divestment policies. Vancity in British Columbia, Alterna in Ontario, and Desjardins in Quebec consistently rank 
        among the strongest choices for progressive banking.
      </p>

      <p>
        <strong>Eligibility typically requires proof of residency or employment within the credit union&apos;s territory.</strong> 
        Joining means purchasing a membership share—usually between $5 and $25—which transforms you from customer to 
        <em>owner</em> with voting rights on major decisions. This isn&apos;t a fee; it&apos;s equity in a democratic institution.
      </p>

      <p>
        <strong>Open both chequing and savings accounts to mirror your current setup,</strong> minimizing disruption during 
        the transition. Request a debit card, online banking access, and paper cheques. Most credit unions process these 
        requests within 5-7 business days.
      </p>

      <h3>Week 2: Redirect Income</h3>

      <p>
        <strong>Once your new accounts are active, redirect all income streams.</strong> For employer payroll, submit 
        a void cheque from your new credit union to HR—the same process you used when you first started the job. 
        Government benefits like CPP and EI require updates through My Service Canada&apos;s online portal. Don&apos;t 
        forget pension payments, investment dividends, or any other recurring income.
      </p>

      <p>
        <strong>Run both accounts in parallel for at least two to three payroll cycles.</strong> This safety buffer 
        catches any payments that slip through during the transition. Keep your old bank account open with minimal 
        funds—enough to avoid fees but not enough to matter if you forget about a straggling automatic payment. 
        Only after confirming that every income source reliably hits your new account should you proceed to the next phase.
      </p>

      <h3>Week 3: Move Bill Payments</h3>

      <p>
        <strong>Compile a complete inventory of every automatic payment linked to your old account:</strong> utilities, 
        rent or mortgage, phone bills, streaming subscriptions, insurance premiums, gym memberships. The comprehensive 
        list prevents surprises. Update each service with your new account details, either through their online portals 
        or by calling customer service. Set calendar reminders for the first billing cycle of each to confirm the 
        transition succeeded.
      </p>

      <p>
        <strong>Investment accounts require special handling to avoid tax consequences.</strong> RRSPs and TFSAs can be 
        transferred directly between institutions without triggering withdrawal penalties or affecting your contribution 
        room—but only if executed properly. Contact your new credit union&apos;s investment advisor to initiate a direct 
        transfer. Never withdraw funds yourself; let the institutions handle the backend paperwork.
      </p>

      <h3>Week 4: Close Old Bank</h3>

      <p>
        <strong>Verify that no pending transactions remain in your old account before closing it.</strong> Check for 
        any outstanding cheques, pending deposits, or scheduled transfers. Once you&apos;ve confirmed everything has 
        cleared, withdraw or transfer the remaining balance to your credit union. Most closures can be handled by phone, 
        though some banks require an in-person visit. Always request written confirmation of the closure—without it, 
        dormant account fees may surprise you months later.
      </p>

      <p>
        <strong>The final step is recruitment.</strong> This isn&apos;t charity work; it&apos;s strategic economic warfare. 
        Tell five friends: "I switched to [Credit Union]. The Big 5 banks have financed $900 billion in fossil fuels with 
        our deposits." Share your experience on social media with #99Reset and #BankSwitch. Every conversation plants a seed. 
        Every switch compounds the pressure on extractive finance. The cascade effect begins with you.
      </p>

      <h2>Comparison Chart</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-4">Feature</th>
              <th className="text-left p-4">Big 5 Banks</th>
              <th className="text-left p-4">Credit Unions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Ownership</strong></td>
              <td className="p-4">Shareholders (profit-driven)</td>
              <td className="p-4">Members (democratic)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Monthly Fees</strong></td>
              <td className="p-4">$10-30</td>
              <td className="p-4">$0-10</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Fossil Financing</strong></td>
              <td className="p-4">$900B+ since 2016</td>
              <td className="p-4">Mostly divested</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Local Lending</strong></td>
              <td className="p-4">&lt;20% of deposits</td>
              <td className="p-4">&gt;80% of deposits</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><strong>Tax Status</strong></td>
              <td className="p-4">For-profit</td>
              <td className="p-4">Non-profit</td>
            </tr>
            <tr>
              <td className="p-4"><strong>ATM Access</strong></td>
              <td className="p-4">National networks</td>
              <td className="p-4">Exchange/Interac networks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Conversation Scripts</h2>

      <h3>At Work (Break Room)</h3>
      <ResourceCallout>
        <p>
          <strong>You:</strong> &quot;Hey, did you know our bank financed $180 billion in oil since 2016? 
          I just switched to [Credit Union]—same online banking, but my money stays local. Takes like 3 weeks. 
          Want the link?&quot;
        </p>
      </ResourceCallout>

      <h3>At Family Dinner</h3>
      <ResourceCallout>
        <p>
          <strong>You:</strong> &quot;Mom, Dad—I moved to [Credit Union]. Remember when the Big 5 got bailed out 
          in 2008? Credit unions didn&apos;t need that because they don&apos;t gamble with deposits. Plus, lower fees. 
          You should check them out.&quot;
        </p>
      </ResourceCallout>

      <h3>Online Post</h3>
      <ResourceCallout>
        <p>
          &quot;Just completed my #BankSwitch to [Credit Union]! No more funding fossil fuels with my savings. 
          Took 4 weeks, saved $15/month in fees, and now I&apos;m a co-owner. If 1% of Canadians do this, we crash 
          Big 5 credit ratings. Who&apos;s next? #99Reset&quot;
        </p>
      </ResourceCallout>

      <h2>FAQs</h2>

      <p><strong>Q: Will I lose access to ATMs?</strong></p>
      <p>
        A: Most credit unions use Exchange/Interac networks (7,000+ ATMs). Some partner with Credit Union Central 
        for surcharge-free access.
      </p>

      <p><strong>Q: Is my money safe?</strong></p>
      <p>
        A: Yes. Credit unions are insured by provincial deposit insurance (e.g., DICO in Ontario, CUDIC in BC) 
        up to $100K, same as CDIC for banks.
      </p>

      <p><strong>Q: Can I still pay bills online?</strong></p>
      <p>
        A: Absolutely. Credit unions offer the same Interac bill payment system as Big 5.
      </p>

      <p><strong>Q: What if I need a mortgage?</strong></p>
      <p>
        A: Credit unions often have <strong>better rates</strong> (0.1-0.3% lower) because they&apos;re non-profit. 
        They also approve more local borrowers.
      </p>

      <p><strong>Q: Will my employer accept credit union direct deposit?</strong></p>
      <p>
        A: Yes. Provide a void cheque or direct deposit form—it&apos;s identical to bank setup.
      </p>

      <h2>Impact Projections</h2>

      <ResourceStats>
        <ResourceStat value="$1B" label="Moved to Credit Unions" />
        <ResourceStat value="50-100" label="Local Loans Funded" />
        <ResourceStat value="5%" label="Deposit Loss = Rating Drop" />
        <ResourceStat value="$1.5M" label="Annual Fees Redirected" />
      </ResourceStats>

      <p>
        <strong>The numbers tell a compelling story.</strong> If 100,000 Canadians each switch $10,000 in deposits, 
        $1 billion flows out of the Big 5 and into credit unions. That capital gets redirected into 50 to 100 local 
        mortgages and small business loans—the kind of productive lending that builds community wealth rather than 
        extracting it.
      </p>

      <p>
        <strong>But the real leverage comes from credit ratings.</strong> Moody&apos;s and S&amp;P downgrade banks when 
        deposit flight crosses the 5% threshold, which dramatically increases their borrowing costs and forces asset 
        liquidation. Meanwhile, $1.5 million in monthly fees—money that once padded executive compensation—stays in 
        communities. At scale, this is $18 million annually per 100,000 switchers.
      </p>

      <p>
        <strong>Historical precedent proves this works.</strong> The 2017 #DeleteFacebook campaign moved 10 million 
        users and tanked the company&apos;s stock by 20% in weeks. Banks are <em>more</em> vulnerable because their 
        credit ratings directly determine loan costs. A coordinated switch isn&apos;t just symbolic—it&apos;s structural sabotage.
      </p>

      <h2>Resources</h2>
      <p>
        <strong>Credit Union Central of Canada</strong> maintains a national locator at <a href="https://www.cucentral.ca" target="_blank" rel="noopener noreferrer">cucentral.ca</a> for 
        finding institutions in your region. The <strong>Rainforest Action Network</strong> publishes annual reports 
        documenting Big 5 fossil fuel financing at <a href="https://www.ran.org" target="_blank" rel="noopener noreferrer">ran.org</a>. Provincial deposit insurance details 
        are available through <a href="https://www.dico.com" target="_blank" rel="noopener noreferrer">DICO for Ontario</a> and <a href="https://www.cudic.bc.ca" target="_blank" rel="noopener noreferrer">CUDIC for British Columbia</a>.
      </p>

      <ResourceCallout type="success">
        <p>
          <strong>Last Updated:</strong> November 2025<br />
          <strong>Difficulty:</strong> Easy (4 weeks)<br />
          <strong>Impact:</strong> High (starves Big 5 fossil funding)
        </p>
      </ResourceCallout>
    </ResourceLayout>
  );
}

