import Link from "next/link";
import { Container } from "./container";
import { Mail, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-border relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
      <Container className="relative z-10">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand column - spans more space */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-3xl font-display font-bold tracking-tight mb-4">
                  99% RESET
                </h3>
                <p className="text-base text-textDim leading-relaxed max-w-md">
                  Independent, member-owned movement to shift ownership and bargaining power
                  to workers and communities.
                </p>
              </div>
              
              {/* Tagline */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-text">
                  Not welfare. Ownership.
                </p>
                <p className="text-xs text-textDim mt-1">
                  Non-violent, institutional, permanent.
                </p>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="mailto:contact@99reset.ca"
                  className="inline-flex items-center gap-2 text-sm text-textDim hover:text-accent transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="h-4 w-4" />
                  <span>contact@99reset.ca</span>
                </a>
              </div>
            </div>

            {/* Navigation columns - spans remaining space */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Movement */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text mb-5">
                  Movement
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/plan" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      The Plan
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/join" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Join
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/chapters" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Chapters
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text mb-5">
                  Learn
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/resources" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Toolkits
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/updates" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Updates
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/press" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text mb-5">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://twitter.com/99reset" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-textDim hover:text-text transition-colors inline-flex items-center gap-2"
                    >
                      <Twitter className="h-3.5 w-3.5" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/99reset" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-textDim hover:text-text transition-colors inline-flex items-center gap-2"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:press@99reset.ca" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Media
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text mb-5">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/privacy" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/terms" 
                      className="text-sm text-textDim hover:text-text transition-colors inline-block"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-textDim">
              &copy; {new Date().getFullYear()} The 99% Reset. All rights reserved.
            </p>
            <p className="text-xs text-textDim">
              Built for institutional change, not symbolic gestures.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}


