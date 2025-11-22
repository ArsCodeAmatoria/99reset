"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-16 rounded-full border border-border bg-card transition-colors hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Moon className="h-4 w-4 text-blue-400" />
      </div>
      <div
        className={`absolute top-1 ${
          theme === "dark" ? "right-1" : "left-1"
        } h-7 w-7 rounded-full bg-accent transition-all duration-300 ease-in-out`}
      />
    </button>
  );
}

