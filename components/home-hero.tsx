"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { VideoPlayer } from "@/components/video-player";

export function HomeHero() {
  return (
    <Section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text content */}
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
              Starve the <span className="text-accent">1%</span>. Own the Future.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-textDim leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              A global, non-violent plan to shift ownership and bargaining power to workers 
              and communities. Not welfare — <span className="text-text font-semibold">equity, dividends, and permanent affordability</span>.
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
                  Join the Reset
                </CTAButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CTAButton href="/plan" variant="secondary" className="min-w-[200px]">
                  Read the Plan
                </CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side: Video player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <VideoPlayer 
              videoUrl="/videos/99reset%201.mp4" 
              className="w-full aspect-square shadow-2xl shadow-accent/20"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

