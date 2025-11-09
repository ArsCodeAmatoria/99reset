"use server";

import { prisma } from "@/lib/db";
import { coopFounderSchema, type CoopFounderFormData } from "@/lib/validations";
import { sendCoopFounderWelcome } from "@/lib/mail";

export async function submitCoopFounder(formData: CoopFounderFormData) {
  try {
    // Validate input
    const validated = coopFounderSchema.parse(formData);

    // Create co-op founder entry
    await prisma.coopFounder.create({
      data: validated,
    });

    // Send welcome email
    await sendCoopFounderWelcome(validated.email, validated.name);

    return {
      success: true,
      message: "Welcome! A coordinator will reach out within one week.",
    };
  } catch (error) {
    console.error("Co-op founder submission error:", error);
    return {
      success: false,
      error: "Failed to submit. Please try again.",
    };
  }
}


