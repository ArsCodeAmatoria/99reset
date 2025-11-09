import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Card({ children, className, id }: CardProps) {
  return (
    <div id={id} className={cn("card p-6 md:p-8", className)}>
      {children}
    </div>
  );
}

