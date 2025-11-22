"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Plan", href: "/plan" },
  { name: "Resources", href: "/resources" },
  { name: "Updates", href: "/updates" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-accent/20 bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/60 shadow-lg shadow-accent/5">
      <Container>
        <nav className="flex items-center justify-between py-5 md:py-7">
          {/* Logo - Urban Fat Font Style */}
          <Link 
            href="/" 
            className="group relative"
          >
            <div className="text-2xl md:text-4xl font-display font-black tracking-tighter uppercase focus-visible:outline-none transition-all duration-300 hover:scale-105">
              <span className="relative inline-block">
                <span className="relative z-10 text-text">
                  NINETY NINE
                </span>
                {/* Urban underline effect */}
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </div>
            {/* Japanese subtitle */}
            <div className="text-xs md:text-sm font-mono font-bold text-accent tracking-wider mt-0.5">
              リセット
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base lg:text-lg font-display font-bold text-text hover:text-accent transition-all duration-300 relative py-2 focus-visible:outline-none focus-visible:text-accent group uppercase tracking-tight"
              >
                <span className="relative">
                  {item.name}
                  {/* Thick underline */}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  {/* Shadow effect */}
                  <span className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 bg-accent/50 transition-opacity duration-300" />
                </span>
              </Link>
            ))}
            {/* Theme Toggle */}
            <div className="border-l-2 border-accent/30 pl-6 lg:pl-8">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-3 -mr-2 rounded-xl hover:bg-accent/10 transition-all duration-300 focus-visible:outline-none focus-visible:bg-accent/20 focus-visible:ring-2 focus-visible:ring-accent border-2 border-transparent hover:border-accent/30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7 stroke-[2.5]" />
            ) : (
              <Menu className="h-7 w-7 stroke-[2.5]" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t-2 border-accent/20 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-display font-bold text-text hover:text-accent transition-all duration-300 px-4 py-3 rounded-xl hover:bg-accent/10 focus-visible:outline-none focus-visible:bg-accent/10 focus-visible:text-accent uppercase tracking-tight border-2 border-transparent hover:border-accent/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 text-sm pt-4 border-t-2 border-accent/20 px-4">
              <ThemeToggle />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}


