"use client";

import { useState } from "react";
import { Input } from "./input";
import { Select } from "./select";
import { Textarea } from "./textarea";
import { useToast } from "./toast";
import { submitCoopFounder } from "@/app/api/actions/founder";

export function FounderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast, ToastContainer } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      sector: formData.get("sector") as string,
      city: formData.get("city") as string,
      role: formData.get("role") as "founder" | "ally",
      notes: formData.get("notes") as string || undefined,
    };

    const result = await submitCoopFounder(data);

    if (result.success) {
      showToast(result.message || "Success!", "success");
      e.currentTarget.reset();
    } else {
      showToast(result.error || "Something went wrong", "error");
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          label="Full Name"
          placeholder="Jane Smith"
          required
          disabled={isSubmitting}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="jane@example.com"
          required
          disabled={isSubmitting}
        />
        <Input
          name="sector"
          label="Sector"
          placeholder="Tech, Manufacturing, Care Work, etc."
          required
          disabled={isSubmitting}
        />
        <Input
          name="city"
          label="City"
          placeholder="Montreal"
          required
          disabled={isSubmitting}
        />
        <Select
          name="role"
          label="Your Role"
          required
          disabled={isSubmitting}
          options={[
            { value: "", label: "Select one..." },
            { value: "founder", label: "Co-op/CLT Founder" },
            { value: "ally", label: "Supporter/Ally" },
          ]}
        />
        <Textarea
          name="notes"
          label="Additional Notes (optional)"
          placeholder="Tell us about your project..."
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join Founder Network"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}


