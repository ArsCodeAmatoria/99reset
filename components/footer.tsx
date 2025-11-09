import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Org info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">99% RESET</h3>
            <p className="text-sm text-textDim leading-relaxed">
              Independent, member-owned movement to shift ownership and bargaining power
              to workers and communities. Non-violent, institutional, permanent.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plan" className="text-textDim hover:text-text transition-colors">
                  Read the Plan
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-textDim hover:text-text transition-colors">
                  Join the Reset
                </Link>
              </li>
              <li>
                <Link href="/chapters" className="text-textDim hover:text-text transition-colors">
                  Find a Chapter
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-textDim hover:text-text transition-colors">
                  Toolkits
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-textDim hover:text-text transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-textDim hover:text-text transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contact@99reset.ca" 
                  className="text-textDim hover:text-text transition-colors"
                >
                  contact@99reset.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-textDim">
          <p>&copy; {new Date().getFullYear()} The 99% Reset. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}


