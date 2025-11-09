"use server";

import { prisma } from "@/lib/db";
import { pledgeSchema, type PledgeFormData } from "@/lib/validations";
import { sendPledgeThankYou } from "@/lib/mail";

export async function submitPledge(formData: PledgeFormData) {
  try {
    // Validate input
    const validated = pledgeSchema.parse(formData);

    // Check if email already exists
    const existing = await prisma.pledge.findUnique({
      where: { email: validated.email },
    });

    if (existing) {
      return {
        success: false,
        error: "This email has already been registered. Thank you for your commitment!",
      };
    }

    // Create pledge
    await prisma.pledge.create({
      data: validated,
    });

    // Send thank you email
    await sendPledgeThankYou(validated.email, validated.name);

    return {
      success: true,
      message: "Thank you for your pledge! Check your email for next steps.",
    };
  } catch (error) {
    console.error("Pledge submission error:", error);
    return {
      success: false,
      error: "Failed to submit pledge. Please try again.",
    };
  }
}


