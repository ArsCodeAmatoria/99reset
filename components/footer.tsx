import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { Mail, Youtube } from "lucide-react";
import { SiTiktok, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
      <Container className="relative z-10">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Brand column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter uppercase text-text">
                    NINETY NINE
                  </h3>
                  <div className="text-xs md:text-sm font-mono font-bold text-accent tracking-wider mt-1">
                    リセット
                  </div>
                </div>
                <p className="text-base text-textDim leading-relaxed max-w-md">
                  A cerebral exploration of democratic socialism, worker empowerment, 
                  and collective ownership.
                </p>
              </div>
              
              {/* Tagline */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-text">
                  Theory and Praxis
                </p>
                <p className="text-xs text-textDim mt-1">
                  Where philosophy meets practice.
                </p>
              </div>

              {/* Aligned Organizations */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs font-semibold uppercase tracking-widest text-text mb-3">
                  Democratic Socialist Allies
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.ndp.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="NDP"
                  >
                    <Image
                      src="/svg/NDP-orange.png"
                      alt="NDP Logo"
                      width={140}
                      height={93}
                      className="h-16 w-auto"
                    />
                  </a>
                  <a
                    href="https://www.greenparty.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="Green Party"
                  >
                    <Image
                      src="/svg/Green_Party_logo.svg.png"
                      alt="Green Party Logo"
                      width={100}
                      height={67}
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="mailto:info@99reset.org"
                  className="inline-flex items-center gap-2 text-sm text-textDim hover:text-accent transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@99reset.org</span>
                </a>
              </div>
            </div>

            {/* Navigation columns - spans remaining space */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Theory */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text mb-5">
                  Theory
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/plan" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      Philosophy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/resources" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      Economics
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/updates" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      History
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Explore */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text mb-5">
                  Explore
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/resources" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/updates" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/plan" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      Analysis
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
                      href="https://www.youtube.com/@99Reset" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-textDim hover:text-accent transition-all inline-flex items-center gap-2 hover:translate-x-1"
                    >
                      <Youtube className="h-3.5 w-3.5" />
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://x.com/99reset" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-textDim hover:text-accent transition-all inline-flex items-center gap-2 hover:translate-x-1"
                    >
                      <SiX className="h-3.5 w-3.5" />
                      X
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.tiktok.com/@99reset.org" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-textDim hover:text-accent transition-all inline-flex items-center gap-2 hover:translate-x-1"
                    >
                      <SiTiktok className="h-3.5 w-3.5" />
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:info@99reset.org" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
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
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/terms" 
                      className="text-sm text-textDim hover:text-accent transition-all inline-block hover:translate-x-1"
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
              &copy; {new Date().getFullYear()} Ninety Nine. All rights reserved.
            </p>
            <p className="text-xs text-textDim">
              &quot;From each according to their ability, to each according to their needs.&quot;
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}


