"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, Play, Pause } from "lucide-react";
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

interface HeaderProps {
  videoUrl?: string;
}

export function Header({ videoUrl }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <Container>
        <nav className="flex items-center justify-between gap-6 py-4 md:py-6">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-8 flex-1">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-display font-bold tracking-tight focus-visible:outline-none focus-visible:text-accent transition-colors whitespace-nowrap"
            >
              99% RESET
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
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
              <div className="flex items-center gap-2 text-sm border-l border-border pl-6">
                <button className="text-text font-medium focus-visible:outline-none focus-visible:text-accent transition-colors">EN</button>
                <span className="text-textDim">/</span>
                <button className="text-textDim hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent">FR</button>
              </div>
            </div>
          </div>

          {/* Right side: Video */}
          {videoUrl && (
            <div className="hidden md:block relative w-48 lg:w-64 h-36 lg:h-40 rounded-lg overflow-hidden bg-card border border-border flex-shrink-0">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onClick={toggleVideo}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
              
              {/* Play/Pause Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </button>
              )}
              
              {/* Pause button when playing */}
              {isPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute top-2 right-2 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors"
                  aria-label="Pause video"
                >
                  <Pause className="h-5 w-5 text-white" fill="white" />
                </button>
              )}
            </div>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-border/30 transition-colors focus-visible:outline-none focus-visible:bg-border/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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


