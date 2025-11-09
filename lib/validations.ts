import { z } from "zod";

export const pledgeSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  postalCode: z.string().min(3, "Please enter a valid postal code"),
  amountMoved: z.coerce.number().min(0, "Amount must be positive").default(0),
});

export const unionDriveSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  employer: z.string().min(2, "Employer name is required"),
  city: z.string().min(2, "City is required"),
  contactPreference: z.enum(["email", "phone", "signal"], {
    errorMap: () => ({ message: "Please select a contact preference" }),
  }),
});

export const coopFounderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  sector: z.string().min(2, "Sector is required"),
  city: z.string().min(2, "City is required"),
  role: z.enum(["founder", "ally"], {
    errorMap: () => ({ message: "Please select your role" }),
  }),
  notes: z.string().optional(),
});

export const chapterApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City is required"),
  region: z.string().min(2, "Region/Province is required"),
  message: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  locale: z.string().default("en"),
});

export type PledgeFormData = z.infer<typeof pledgeSchema>;
export type UnionDriveFormData = z.infer<typeof unionDriveSchema>;
export type CoopFounderFormData = z.infer<typeof coopFounderSchema>;
export type ChapterApplicationFormData = z.infer<typeof chapterApplicationSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;


