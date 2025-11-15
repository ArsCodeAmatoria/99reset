import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPledgeThankYou(email: string, name: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set, skipping email");
    return;
  }

  try {
    await resend.emails.send({
      from: "The 99% Reset <noreply@99reset.org>",
      to: email,
      subject: "Thank you for joining the 99% Reset",
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Thank you for pledging to move your deposits and join the 99% Reset.</p>
        <p>Your action is part of a global movement to shift ownership and bargaining power to workers and communities.</p>
        <h2>Next Steps:</h2>
        <ul>
          <li>Research credit unions in your area</li>
          <li>Open an account and move your deposits</li>
          <li>Share the movement with friends and colleagues</li>
        </ul>
        <p><a href="https://99reset.org/resources">View our toolkit for switching banks</a></p>
        <p>In solidarity,<br/>The 99% Reset</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send pledge thank you email:", error);
  }
}

export async function sendUnionDriveConfirmation(email: string, name: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set, skipping email");
    return;
  }

  try {
    await resend.emails.send({
      from: "The 99% Reset <noreply@99reset.org>",
      to: email,
      subject: "Union Drive Support — 99% Reset",
      html: `
        <h1>Thank you, ${name}!</h1>
        <p>We've received your union drive inquiry. An organizer will reach out within 48 hours to discuss strategy, legal support, and resources.</p>
        <h2>What to expect:</h2>
        <ul>
          <li>Confidential consultation with an experienced organizer</li>
          <li>Card-check campaign toolkit and legal overview</li>
          <li>Connection to local labour networks</li>
        </ul>
        <p><a href="https://99reset.org/resources">Browse organizing resources</a></p>
        <p>In solidarity,<br/>The 99% Reset</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send union drive confirmation:", error);
  }
}

export async function sendCoopFounderWelcome(email: string, name: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set, skipping email");
    return;
  }

  try {
    await resend.emails.send({
      from: "The 99% Reset <noreply@99reset.org>",
      to: email,
      subject: "Co-op & CLT Founder Support — 99% Reset",
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Thank you for joining the co-op and CLT founder network. We'll connect you with:</p>
        <ul>
          <li>Sector-specific incubation programs</li>
          <li>Legal and financial structuring support</li>
          <li>Funding opportunities (Wealth Fund + grants)</li>
          <li>Peer mentorship from established co-ops</li>
        </ul>
        <p>A coordinator will reach out within one week to schedule a consultation.</p>
        <p><a href="https://99reset.org/resources">Explore co-op startup resources</a></p>
        <p>In solidarity,<br/>The 99% Reset</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send co-op founder welcome:", error);
  }
}


