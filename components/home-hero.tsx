"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";

export function HomeHero() {
  return (
    <Section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                99
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-textDim leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                A cerebral exploration of democratic socialism, worker cooperatives, and collective ownership. 
                Where <span className="text-text font-semibold">philosophy meets praxis</span> at the intersection of theory and practice.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CTAButton href="/join" variant="primary" className="min-w-[200px]">
                    Explore Ideas
                  </CTAButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CTAButton href="/plan" variant="secondary" className="min-w-[200px]">
                    Read Theory
                  </CTAButton>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Video element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
              </div>
              {/* Accent glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-red-600/20 rounded-3xl blur-3xl -z-10 opacity-50" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

