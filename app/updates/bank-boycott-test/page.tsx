import { ArticleLayout, ColoredSection, Highlight, Stats, Stat, ArticleCallout, JapaneseHeading } from '@/components/article-layout';

export default function BankBoycottArticle() {
  return (
    <ArticleLayout
      title="The Cascade Effect: How a $10 Billion Bank Boycott in Canada Can Ignite Regulatory Scrutiny and Propel Wealth Tax Reforms"
      date="2025-11-11"
      category="Strategy"
      excerpt="A coordinated $10B deposit outflow from Big Five banks triggers credit rating reviews, regulatory probes, and policy momentum for wealth taxes—unlocking $30B annually in progressive revenue."
      image="/images/bank-boycott.png"
    >
      <ColoredSection color="accent">
        <JapaneseHeading japanese="要約" english="Executive Summary" />

        <p>
          In an era of unprecedented wealth concentration—where Canada&apos;s 61 billionaires control $324 billion amid record inequality—the <strong>99% Reset movement</strong> proposes a non-violent strategy to redistribute power: a coordinated boycott of the <strong>Big Five banks</strong> (RBC, TD, Scotiabank, BMO, CIBC), which hold over 80% of retail deposits and financed $900 billion in fossil fuels since 2016.
        </p>
      </ColoredSection>

      <Highlight>
        <p>
          This paper expands on the mechanism: A targeted <strong>$10 billion deposit outflow</strong>—achievable through mass switches to <strong>credit unions</strong>—triggers credit rating reviews by agencies like Moody&apos;s and S&P, prompting investigations by OSFI and FCAC.
        </p>
      </Highlight>

      <p>
        These probes expose systemic risks tied to billionaire lending, fueling public and political momentum for <strong>wealth taxes</strong>, as evidenced by the NDP&apos;s 2025 platform (projected $94.5 billion over four years).
      </p>

      <Stats>
        <Stat value="$10B" label="Target Deposit Outflow to Credit Unions" />
        <Stat value="12-24 mo" label="Timeline to Policy Wins" />
        <Stat value="$30B/year" label="Unlocked Progressive Revenue" />
      </Stats>

      <ArticleCallout type="success">
        <p><strong>Projected timeline:</strong> 12-24 months to policy wins that fundamentally reshape Canadian finance.</p>
      </ArticleCallout>

      <ColoredSection color="darker">
        <JapaneseHeading japanese="序章" english="Introduction" />

        <p>
          Canada&apos;s financial system is a linchpin of inequality. The <strong>Big Five banks</strong> dominate with $6.5 trillion in total assets (Q1 2025), including $3-4 trillion in retail deposits, yet they enable wealth hoarding through low-wage financing and tax havens ($682 billion hidden offshore).
        </p>

        <p>
          The <strong>99% Reset</strong> counters this via <strong>Phase 1: Starve the parasite</strong> through boycotts, targeting $10 billion in outflows. By redirecting funds to <strong>credit unions</strong>, the movement builds parallel power while destabilizing enablers of the 1%.
        </p>
      </ColoredSection>

      <h2>The Chain Reaction</h2>
      <p>
        <strong>Boycott → Rating Review → Regulatory Probe → Policy Momentum</strong>
      </p>

      <p>
        This is how we transform $324B in billionaire wealth into <strong>democratic assets</strong> owned by the 99%. The Montgomery Bus Boycott lasted 381 days. Ours will be faster—because we have the internet, the precedents, and the <strong>99% behind us</strong>.
      </p>

      <ArticleCallout type="info">
        <p><strong>Take Action:</strong> Switch your bank today. Join the movement at your local chapter.</p>
      </ArticleCallout>
    </ArticleLayout>
  );
}

