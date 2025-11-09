"use server";

import { prisma } from "@/lib/db";
import { chapterApplicationSchema, type ChapterApplicationFormData } from "@/lib/validations";

export async function submitChapterApplication(formData: ChapterApplicationFormData) {
  try {
    // Validate input
    const validated = chapterApplicationSchema.parse(formData);

    // Create chapter application
    await prisma.chapterApplication.create({
      data: validated,
    });

    return {
      success: true,
      message: "Application received! We'll be in touch within one week.",
    };
  } catch (error) {
    console.error("Chapter application error:", error);
    return {
      success: false,
      error: "Failed to submit application. Please try again.",
    };
  }
}


