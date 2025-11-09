import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12 md:py-16">
      <Container>
        {/* Main content - centered */}
        <div className="max-w-4xl mx-auto">
          {/* Org info - centered */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold mb-4">99% RESET</h3>
            <p className="text-sm text-textDim leading-relaxed max-w-2xl mx-auto">
              Independent, member-owned movement to shift ownership and bargaining power
              to workers and communities. Non-violent, institutional, permanent.
            </p>
          </div>

          {/* Links grid - centered and balanced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text mb-4">Movement</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/plan" className="text-textDim hover:text-text transition-colors">
                    The Plan
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-textDim hover:text-text transition-colors">
                    Join
                  </Link>
                </li>
                <li>
                  <Link href="/chapters" className="text-textDim hover:text-text transition-colors">
                    Chapters
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text mb-4">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/resources" className="text-textDim hover:text-text transition-colors">
                    Toolkits
                  </Link>
                </li>
                <li>
                  <Link href="/updates" className="text-textDim hover:text-text transition-colors">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-textDim hover:text-text transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-textDim hover:text-text transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-textDim hover:text-text transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="mailto:contact@99reset.ca" 
                    className="text-textDim hover:text-text transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright - centered */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-textDim">
            &copy; {new Date().getFullYear()} The 99% Reset. All rights reserved.
          </p>
          <p className="text-xs text-textDim mt-2">
            Not welfare. Ownership.
          </p>
        </div>
      </Container>
    </footer>
  );
}


