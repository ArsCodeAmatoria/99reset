import { ResourceLayout, ResourceSection, ResourceCallout, ResourceStats, ResourceStat } from "@/components/resource-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapter Organizer Handbook — 99% Reset",
  description: "How to run meetings, plan campaigns, build coalitions, and grow your chapter from 10 to 1000 members.",
};

export default function ChapterOrganizerHandbook() {
  return (
    <ResourceLayout
      title="Chapter Organizer Handbook"
      category="Organizing"
      description="How to run meetings, plan campaigns, build coalitions, and grow your chapter from 10 to 1000 members."
      video="/videos/resources6.mp4"
      difficulty="Medium"
      timeframe="Ongoing"
      impact="Very High"
      videoPosition="left"
    >
      <h2>What is a 99% Reset Chapter?</h2>
      <p>
        A chapter functions as a local node in the broader movement—anywhere from 10 to 1,000 members executing Phase 1-3 
        tactics in their city or region. <strong>Chapters operate with substantial autonomy</strong>, choosing whether to 
        prioritize bank boycotts, union organizing drives, or Community Land Trust development based on local conditions and 
        member expertise.
      </p>

      <p>
        <strong>Democratic governance defines chapter identity.</strong> One member equals one vote on strategic decisions, 
        from campaign selection to budget allocation. Chapters connect through a network sharing toolkits and coordinating 
        national campaigns while maintaining independence. This isn&apos;t a book club or discussion forum—chapters build 
        power through concrete action that shifts economic relationships.
      </p>

      <ResourceCallout type="info">
        <p>
          <strong>Why Chapters Matter:</strong> One hundred chapters with 100 members each creates 10,000 activists—sufficient 
          critical mass for policy wins at provincial and federal levels. Decentralization prevents single points of failure 
          while distributed action proves harder to suppress than centralized organizations. Elected leadership and transparent 
          finances build credibility with media and politicians.
        </p>
      </ResourceCallout>

      <h2>Chapter Lifecycle: Three Stages</h2>

      <p>
        <strong>Launch phase spans months 1-6 with 10-25 initial members.</strong> Your goal centers on proving the concept 
        through one visible campaign—perhaps a bank switch pledge drive targeting 50 switchers. Meet weekly with 8-10 regular 
        attendees. Structure remains informal with rotating facilitators and shared Google Drive organization. Funding stays 
        at zero dollars through potlucks and free meeting spaces.
      </p>

      <p>
        <strong>Growth phase covers months 7-18 as membership reaches 25-100.</strong> Now you aim for policy victory or 
        institution-building like launching a CLT or worker cooperative. Monthly general meetings attract 30-50 participants. 
        Three working groups—finance, labour, housing—divide specialized work. Structure becomes semi-formal with an elected 
        5-7 person steering committee. Budget grows to $5,000-$20,000 annually from membership dues and small donations.
      </p>

      <p>
        <strong>Institutionalization begins after 18 months with 100-1,000 members.</strong> Goals shift toward permanent 
        infrastructure including office space, paid staff, and multiple simultaneous campaigns. Quarterly assemblies draw 100+ 
        attendees. Five or more working groups operate with 1-3 paid organizers coordinating volunteer efforts. Formal incorporation 
        as a nonprofit with board of directors provides legal structure. Annual budget reaches $50,000-$500,000 from grants, 
        membership dues, and fundraising events.
      </p>

      <h2>Launching Your Chapter: 60-Day Plan</h2>

      <h3>Weeks 1-2: Recruit Founders</h3>

      <p>
        <strong>Identify 5-10 trusted people who share your values and demonstrate reliability.</strong> Seek diversity across 
        age, race, and class rather than recruiting from a single demographic or social circle. Look among friends, coworkers, 
        union hall contacts, and existing activist networks. Your pitch should be direct: &quot;I&apos;m starting a local chapter 
        of the 99% Reset—shifting power from billionaires to workers through boycotts, unions, and co-ops. Interested in helping 
        launch? First meeting next Friday.&quot;
      </p>

      <h3>Weeks 3-4: First Meeting</h3>

      <p>
        <strong>Structure your initial two-hour gathering carefully.</strong> Start with 15 minutes introducing the 99% Reset 
        using content from the plan page. Run a 15-minute icebreaker asking each person to name one systemic problem they want 
        to fix. Spend 45 minutes brainstorming potential first campaigns, then vote on the top three. Use 15 minutes assigning 
        initial roles—facilitator, note-taker, social media coordinator. Reserve final 30 minutes for informal socializing with 
        snacks, building personal relationships that sustain organizing through difficult periods.
      </p>

      <p>
        <strong>Choose accessible free spaces for meetings:</strong> public libraries, parks, or rotating through members&apos; 
        homes. Paying for meeting space wastes resources better spent on campaigns during this bootstrap phase.
      </p>

      <h3>Weeks 5-6: Build Infrastructure</h3>

      <p>
        <strong>Establish secure communications through a Signal group for your core team.</strong> Public-facing channels 
        should include Instagram and Twitter/X accounts posting three times weekly. Set up email lists using free Substack or 
        Mailchimp accounts for broader announcements. Create consistent branding using templates from the 99reset.org press 
        section. Name your chapter &quot;99% Reset [City]&quot; or &quot;[City] Reset Chapter&quot; for clear geographic identity.
      </p>

      <h3>Weeks 7-8: Launch Campaign</h3>

      <p>
        <strong>Select the simplest campaign likely to produce visible wins.</strong> Bank switch pledge drives asking 50 people 
        to commit within 30 days work well. Union information sessions hosting speakers at local union halls can draw 50 attendees. 
        Community Land Trust research publishing reports on vacant lots demonstrates expertise. Whatever you choose, announce it 
        publicly through press releases to local media and social media posts declaring: &quot;We&apos;re the [City] chapter. 
        Our first goal: [X]. Join us.&quot;
      </p>

      <h2>Running Effective Meetings</h2>

      <p>
        <strong>Prepare one week in advance by sending agendas three days before meetings.</strong> Sample structure includes 
        welcome (5 minutes), campaign updates (20 minutes), working group reports (15 minutes), open discussion (40 minutes), 
        announcements (10 minutes), and social time (30 minutes). Assign rotating roles—facilitator, note-taker, time-keeper—on 
        monthly rotation to build broad capacity rather than concentrating power.
      </p>

      <p>
        <strong>Start meetings punctually regardless of who&apos;s absent.</strong> Waiting for stragglers rewards lateness while 
        punishing punctual members. Use speaker stacks for contentious discussions: the facilitator maintains a list of raised 
        hands and calls on people in order. Impose 2-3 minute time limits per person on controversial topics to prevent domination 
        by verbose members.
      </p>

      <p>
        <strong>Share notes within 24 hours in Google Docs or Notion.</strong> Include clear action items specifying who does 
        what by when, tagging responsible individuals. Direct message anyone who volunteered but seemed hesitant to check their 
        genuine commitment—better to know early than have tasks fall through later.
      </p>

      <h2>Growing from 10 to 100 Members</h2>

      <p>
        <strong>Host monthly public events attracting broader audiences.</strong> Film screenings, panel discussions, or guest 
        speakers on housing crisis topics can draw 30-50 people. Convert approximately 10%—3-5 new members—through personal 
        conversations during events. Set up tables at farmers markets, university campuses, and union rallies with flyers, 
        sign-up sheets, and QR codes to your Signal group.
      </p>

      <p>
        <strong>Partner with aligned organizations to expand reach.</strong> Co-host events with unions, tenant unions, or 
        climate groups. A joint protest against RBC fossil fuel financing, for example, exposes your chapter to their membership 
        base. Run social media contests asking followers to tag three friends. Secure shout-outs from local influencers sympathetic 
        to economic justice issues.
      </p>

      <p>
        <strong>Onboard new members systematically rather than letting them drift.</strong> Send welcome emails within 24 hours 
        explaining who you are, when the next meeting occurs, and how they can help immediately. Pair newcomers with veteran 
        members for coffee chats answering questions. Give new recruits easy initial tasks like &quot;Can you post this on 
        Instagram?&quot; to build investment before requesting larger commitments.
      </p>

      <h2>Working Group Structure</h2>

      <ResourceStats>
        <ResourceStat value="Finance" label="Bank Boycotts, Wealth Taxes" />
        <ResourceStat value="Labour" label="Unions, Worker Co-ops" />
        <ResourceStat value="Housing" label="CLTs, Tenant Organizing" />
        <ResourceStat value="Policy" label="Lobbying, Legislation" />
      </ResourceStats>

      <p>
        <strong>Chapters scale through specialized working groups of 5-15 people focused on single domains.</strong> Finance 
        working groups handle bank boycotts, credit union partnerships, and wealth tax campaigns. Labour groups support union 
        organizing drives and worker cooperative feasibility studies. Housing groups launch CLTs, organize tenants, and advocate 
        for speculation taxes. Policy groups draft legislation, lobby decision-makers, and build coalitions.
      </p>

      <p>
        <strong>Working groups report monthly to general meetings while steering committees ensure alignment.</strong> This 
        structure prevents bottlenecks where everything requires full membership approval while maintaining democratic 
        accountability for major decisions.
      </p>

      <h2>Governance Models by Size</h2>

      <p>
        <strong>Informal governance serves 10-25 member chapters.</strong> Weekly meetings with rotating facilitators make 
        decisions by consensus or majority vote. This approach moves quickly and stays flexible, though personality conflicts 
        can create cliquish dynamics without formal structures to mediate disputes.
      </p>

      <p>
        <strong>Steering committees work for 25-100 member chapters.</strong> Members elect 5-7 leaders serving six-month terms. 
        The steering committee meets weekly while general membership gathers monthly to vote on major decisions. Roles include 
        coordinator, treasurer, communications lead, and 2-3 campaign leads. This model balances scalability with accountability, 
        though leaders must actively solicit input to avoid top-down drift.
      </p>

      <p>
        <strong>Board of directors structures enable chapters beyond 100 members.</strong> Boards of 7-11 members serving 
        one-year terms set strategic direction while paid staff execute operations. Boards meet monthly, general membership 
        quarterly. This professional model sustains long-term institution-building but risks losing grassroots character without 
        robust feedback mechanisms.
      </p>

      <h2>Funding by Budget Tier</h2>

      <ResourceCallout>
        <p>
          <strong>Shoestring ($0-$5K/year):</strong> Potlucks, free venues, volunteer labour. Spend on domain names ($20), 
          printing ($500), meeting snacks ($300).
        </p>
        <p>
          <strong>Sustainable ($5K-$50K/year):</strong> Membership dues at $10-$50 monthly times 50 members generates 
          $6,000-$30,000. Add small donations. Spend on office rental ($5K), part-time paid organizer ($20K), event costs ($5K).
        </p>
        <p>
          <strong>Institutionalized ($50K-$500K/year):</strong> Foundation grants, union contributions, major donors, fundraising 
          events. Spend on 2-3 full-time staff ($150K), office space ($15K), campaign budgets ($50K).
        </p>
      </ResourceCallout>

      <p>
        <strong>Publish budgets quarterly in publicly accessible Google Sheets.</strong> Treasurers should present financial 
        reports at every general meeting. This transparency builds trust and prevents the appearance of financial impropriety 
        that destroys organizations.
      </p>

      <h2>Conflict Resolution</h2>

      <p>
        <strong>Personality clashes require private mediation by steering committee members.</strong> If unresolved, suggest 
        one person temporarily step back from leadership rather than forcing ongoing collaboration that damages the group. 
        Strategic disagreements should go to membership votes with 66% majority for major decisions. The minority can dissent 
        publicly but must respect democratic outcomes.
      </p>

      <p>
        <strong>Recognize red flags for toxic dynamics early:</strong> one person dominating every meeting, decisions made 
        outside official meetings through back-channel cliques, retaliation against members who dissent from leadership positions. 
        Address immediately through steering committee intervention. If unresolved, remove toxic members by 66% vote—protecting 
        chapter health outweighs individual accommodation.
      </p>

      <ResourceCallout type="warning">
        <p>
          <strong>Enforce term limits:</strong> no one stays in leadership beyond two years. Distribute tasks widely rather 
          than concentrating them on a few dedicated people. This prevents burnout while building broad capacity across membership.
        </p>
      </ResourceCallout>

      <h2>FAQs</h2>

      <p><strong>Q: How much time does organizing require?</strong></p>
      <p>
        A: Launch phase demands 5-10 hours weekly. Growth phase increases to 10-20 hours weekly. If you work full-time, share 
        leadership through co-coordinator arrangements. Better to sustain modest involvement long-term than burn out through 
        unsustainable overcommitment.
      </p>

      <p><strong>Q: What if no one attends the first meeting?</strong></p>
      <p>
        A: Reschedule and personally invite 10 specific people through one-on-one conversations. Mass invitations get ignored—direct 
        asks to individuals produce commitment. If repeated attempts fail, your network may not contain organizing potential. 
        Join existing groups to build relationships before trying again.
      </p>

      <p><strong>Q: Should we incorporate as a nonprofit immediately?</strong></p>
      <p>
        A: Not until reaching 100+ members. Legal and tax overhead wastes resources during early phases. Before formal 
        incorporation, use fiscal sponsorship through allied nonprofits for any grants requiring nonprofit status.
      </p>

      <h2>Resources</h2>
      <p>
        Monthly training webinars for chapter leaders provide ongoing skill development. Join the #chapter-leaders Slack channel 
        for peer support from organizers facing similar challenges. Download meeting agendas, campaign templates, and bylaw 
        samples from the 99reset.org resources section. <a href="https://beautifultrouble.org" target="_blank" rel="noopener noreferrer">Beautiful Trouble</a> maintains 
        an extensive tactics library documenting successful organizing methods globally.
      </p>

      <ResourceCallout>
        <p>
          <strong>Last Updated:</strong> November 2025<br />
          <strong>Difficulty:</strong> Medium (ongoing commitment)<br />
          <strong>Impact:</strong> Very High (builds durable power)
        </p>
      </ResourceCallout>
    </ResourceLayout>
  );
}

