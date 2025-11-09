"use server";

import { prisma } from "@/lib/db";
import { unionDriveSchema, type UnionDriveFormData } from "@/lib/validations";
import { sendUnionDriveConfirmation } from "@/lib/mail";

export async function submitUnionDrive(formData: UnionDriveFormData) {
  try {
    // Validate input
    const validated = unionDriveSchema.parse(formData);

    // Create union drive entry
    await prisma.unionDrive.create({
      data: validated,
    });

    // Send confirmation email
    await sendUnionDriveConfirmation(validated.email, validated.name);

    return {
      success: true,
      message: "Thank you! An organizer will reach out within 48 hours.",
    };
  } catch (error) {
    console.error("Union drive submission error:", error);
    return {
      success: false,
      error: "Failed to submit. Please try again.",
    };
  }
}


