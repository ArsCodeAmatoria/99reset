"use client";

import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useToast } from "./toast";
import { submitChapterApplication } from "@/app/api/actions/chapter";

export function ChapterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast, ToastContainer } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      city: formData.get("city") as string,
      region: formData.get("region") as string,
      message: formData.get("message") as string || undefined,
    };

    const result = await submitChapterApplication(data);

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
          name="city"
          label="City"
          placeholder="Ottawa"
          required
          disabled={isSubmitting}
        />
        <Input
          name="region"
          label="Province/State"
          placeholder="Ontario"
          required
          disabled={isSubmitting}
        />
        <Textarea
          name="message"
          label="Why do you want to start a chapter? (optional)"
          placeholder="Tell us about your organizing experience and vision..."
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}


