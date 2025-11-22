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
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-display font-bold tracking-tight focus-visible:outline-none focus-visible:text-accent transition-colors"
          >
            NINETY NINE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-textDim hover:text-text transition-colors relative py-1 focus-visible:outline-none focus-visible:text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.name}
              </Link>
            ))}
            {/* Locale switcher placeholder */}
            <div className="flex items-center gap-2 text-sm border-l border-border pl-8">
              <button className="text-text font-medium focus-visible:outline-none focus-visible:text-accent transition-colors">EN</button>
              <span className="text-textDim">/</span>
              <button className="text-textDim hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent">FR</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-border/30 transition-colors focus-visible:outline-none focus-visible:bg-border/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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
          <div className="md:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-textDim hover:text-accent transition-colors px-3 py-2 rounded-lg hover:bg-border/30 focus-visible:outline-none focus-visible:bg-border/30 focus-visible:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 text-sm pt-4 border-t border-border px-3">
              <button className="text-text font-medium focus-visible:outline-none focus-visible:text-accent transition-colors">EN</button>
              <span className="text-textDim">/</span>
              <button className="text-textDim hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent">FR</button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}


