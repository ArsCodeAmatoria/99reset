"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-textDim hover:text-text transition-colors focus-ring py-2"
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}

