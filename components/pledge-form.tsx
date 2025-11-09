"use client";

import { useState } from "react";
import { Input } from "./input";
import { useToast } from "./toast";
import { submitPledge } from "@/app/api/actions/pledge";

export function PledgeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast, ToastContainer } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      postalCode: formData.get("postalCode") as string,
      amountMoved: Number(formData.get("amountMoved")) || 0,
    };

    const result = await submitPledge(data);

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
          name="postalCode"
          label="Postal/Zip Code"
          placeholder="M5V 3A8"
          required
          disabled={isSubmitting}
        />
        <Input
          name="amountMoved"
          type="number"
          label="Amount to Move (optional)"
          placeholder="0"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Pledge to Switch"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}


