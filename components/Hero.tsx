"use client";

import { portfolioData } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <Reveal width="100%">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="glass px-4 py-2 rounded-full flex items-center justify-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                </div>
                <span className="text-sm text-white/70">
                  Available for opportunities
                </span>
              </div>
            </motion.div>
          </Reveal>

          {/* Main Content */}
          <div className="text-center">
            <Reveal delay={0.1} width="100%">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-white/50" />
                <span className="text-white/50 text-sm">
                  {portfolioData.profile.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-center">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">
                  {portfolioData.profile.name.split(" ")[0]}
                </span>
                <br />
                <span className="text-white/90">
                  {portfolioData.profile.role}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.3} width="100%">
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed text-center">
                {portfolioData.hero.subHeadline}
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.4} width="100%">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <MagneticButton
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    View My Work
                  </span>
                </MagneticButton>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={portfolioData.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass hover:bg-white/10 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                    href={portfolioData.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass hover:bg-white/10 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </motion.a>
                </div>
              </div>
            </Reveal>

            {/* Profile Image with Bento Style */}
            <Reveal delay={0.5} width="100%">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                {/* Animated Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #00f5a0, #667eea)",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-950" />
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 blur-2xl" />

                {/* Image Container */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={portfolioData.profile.image}
                    alt={portfolioData.profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 top-4 glass px-3 py-1.5 rounded-full"
                >
                  <span className="text-xs font-medium text-white/90">
                    🚀 Builder
                  </span>
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* Scroll Indicator */}
          <Reveal delay={0.7} width="100%">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center mt-16"
            >
              <span className="text-xs text-white/40 mb-2">
                Scroll to explore
              </span>
              <ArrowDown className="w-4 h-4 text-white/40" />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
