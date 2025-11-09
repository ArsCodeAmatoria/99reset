"use client";

import { useState } from "react";
import { Input } from "./input";
import { Select } from "./select";
import { useToast } from "./toast";
import { submitUnionDrive } from "@/app/api/actions/union";

export function UnionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast, ToastContainer } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      employer: formData.get("employer") as string,
      city: formData.get("city") as string,
      contactPreference: formData.get("contactPreference") as "email" | "phone" | "signal",
    };

    const result = await submitUnionDrive(data);

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
          name="employer"
          label="Employer Name"
          placeholder="Amazon Fulfillment"
          required
          disabled={isSubmitting}
        />
        <Input
          name="city"
          label="City"
          placeholder="Toronto"
          required
          disabled={isSubmitting}
        />
        <Select
          name="contactPreference"
          label="Preferred Contact Method"
          required
          disabled={isSubmitting}
          options={[
            { value: "", label: "Select one..." },
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "signal", label: "Signal" },
          ]}
        />
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Start Union Drive"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}


