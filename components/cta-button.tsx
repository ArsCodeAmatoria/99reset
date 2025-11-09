import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTAButton({ 
  href, 
  children, 
  variant = "primary",
  className 
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        variant === "primary" ? "btn-primary" : "btn-secondary",
        "inline-block text-center",
        className
      )}
    >
      {children}
    </Link>
  );
}


