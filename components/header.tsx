"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Plan", href: "/plan" },
  { name: "Join", href: "/join" },
  { name: "Chapters", href: "/chapters" },
  { name: "Press", href: "/press" },
  { name: "Resources", href: "/resources" },
  { name: "Updates", href: "/updates" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <Container>
        <nav className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-display font-bold tracking-tight focus-ring">
            99% RESET
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-textDim hover:text-text transition-colors focus-ring"
              >
                {item.name}
              </Link>
            ))}
            {/* Locale switcher placeholder */}
            <div className="flex items-center gap-2 text-sm border-l border-border pl-8">
              <button className="text-text font-medium">EN</button>
              <span className="text-textDim">/</span>
              <button className="text-textDim hover:text-text transition-colors">FR</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden focus-ring p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-textDim hover:text-text transition-colors focus-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 text-sm pt-4 border-t border-border">
              <button className="text-text font-medium">EN</button>
              <span className="text-textDim">/</span>
              <button className="text-textDim hover:text-text transition-colors">FR</button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}


