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
    >
      <h2>Why Switch?</h2>
      <p>
        Canada&apos;s Big 5 banks (RBC, TD, BMO, Scotiabank, CIBC) financed <strong>$900 billion</strong> in fossil 
        fuels since 2016 and enable billionaire wealth concentration through offshore havens. Your deposits fund this. 
        Credit unions, by contrast:
      </p>
      
      <ul>
        <li><strong>Member-owned:</strong> One-member-one-vote governance</li>
        <li><strong>Community-focused:</strong> Loans stay local (mortgages, small business)</li>
        <li><strong>Lower fees:</strong> Non-profit structure passes savings to members</li>
        <li><strong>Divested:</strong> Most have fossil-free portfolios</li>
      </ul>

      <p>
        Moving $50 billion in deposits (just 1% of Big 5&apos;s base) crashes their credit ratings <strong>3x faster</strong> than 
        regulation, forcing divestment from speculative assets.
      </p>

      <ResourceCallout type="info">
        <p><strong>Impact Multiplier:</strong> When you switch, you&apos;re not just withdrawing your money—you&apos;re 
        undermining the Big 5&apos;s credit rating, which makes it more expensive for them to lend. This cascades into 
        forced divestment from high-risk assets like fossil fuels.</p>
      </ResourceCallout>

      <h2>30-Day Switch Plan</h2>

      <h3>Week 1: Research &amp; Choose</h3>
      
      <p><strong>1. Find Your Credit Union:</strong></p>
      <ul>
        <li>Use Credit Union Central of Canada&apos;s locator</li>
        <li>Compare: Fees, ATM networks, online banking, fossil-free policies</li>
        <li>Top picks: Vancity (BC), Alterna (ON), Desjardins (QC)</li>
      </ul>

      <p><strong>2. Check Eligibility:</strong></p>
      <ul>
        <li>Most credit unions require you live/work in their region</li>
        <li>Join with a $5-25 membership share (you become an owner!)</li>
      </ul>

      <p><strong>3. Open New Accounts:</strong></p>
      <ul>
        <li>Chequing + Savings (mirror your current setup)</li>
        <li>Request debit card, online access, cheques</li>
      </ul>

      <h3>Week 2: Redirect Income</h3>

      <p><strong>4. Update Direct Deposits:</strong></p>
      <ul>
        <li>Employer payroll: Provide new void cheque</li>
        <li>Government benefits (CPP, EI): Update via My Service Canada</li>
        <li>Other income sources (pension, investments)</li>
      </ul>

      <p><strong>5. Run Dual Accounts:</strong></p>
      <ul>
        <li>Keep old bank open temporarily to catch stragglers</li>
        <li>Verify 2-3 payroll cycles hit new account</li>
      </ul>

      <h3>Week 3: Move Bill Payments</h3>

      <p><strong>6. Transfer Pre-Authorized Payments:</strong></p>
      <ul>
        <li>List all automatic payments (utilities, rent, subscriptions)</li>
        <li>Update each with new account details</li>
        <li>Set reminders for first billing cycles to confirm</li>
      </ul>

      <p><strong>7. Migrate Investments:</strong></p>
      <ul>
        <li>Transfer RRSPs/TFSAs (contact new credit union&apos;s advisor)</li>
        <li>Avoid withdrawal penalties by direct transfer</li>
      </ul>

      <h3>Week 4: Close Old Bank</h3>

      <p><strong>8. Final Steps:</strong></p>
      <ul>
        <li>Confirm zero pending transactions</li>
        <li>Withdraw/transfer remaining balance</li>
        <li>Close accounts in-person or by phone</li>
        <li>Request written confirmation</li>
      </ul>

      <p><strong>9. Celebrate &amp; Recruit:</strong></p>
      <ul>
        <li>Tell 5 friends: &quot;I switched to [Credit Union]. Big 5 banks fund fossil fuels with our money.&quot;</li>
        <li>Post on social: #99Reset #BankSwitch</li>
      </ul>

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

      <p>If <strong>100,000 Canadians</strong> switch $10,000 each:</p>
      <ul>
        <li><strong>$1 billion</strong> moved to credit unions</li>
        <li><strong>50-100</strong> local mortgages/small business loans funded</li>
        <li><strong>Big 5 rating downgrade</strong> if trend accelerates (Moody&apos;s threshold: 5% deposit loss)</li>
        <li><strong>$1.5 million</strong> in fees redirected to communities (at $15/person/month)</li>
      </ul>

      <p>
        Historical precedent: 2017 #DeleteFacebook moved 10M users; banks are more vulnerable because ratings 
        determine loan costs.
      </p>

      <h2>Resources</h2>
      <ul>
        <li><strong>Credit Union Locator:</strong> <a href="https://www.cucentral.ca" target="_blank" rel="noopener noreferrer">cucentral.ca</a></li>
        <li><strong>Big 5 Fossil Financing Report:</strong> <a href="https://www.ran.org" target="_blank" rel="noopener noreferrer">Rainforest Action Network</a></li>
        <li><strong>Provincial Deposit Insurance:</strong> <a href="https://www.dico.com" target="_blank" rel="noopener noreferrer">DICO (ON)</a>, <a href="https://www.cudic.bc.ca" target="_blank" rel="noopener noreferrer">CUDIC (BC)</a></li>
      </ul>

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

