"use client";

import { portfolioData } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h2 className="text-cyan-400 font-medium mb-4 tracking-wide">
              Hi, I'm {portfolioData.profile.name}
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-slate-100">
              {portfolioData.hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              {portfolioData.hero.subHeadline}
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="flex gap-4">
              <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </MagneticButton>
              <a
                href={portfolioData.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center relative">
          <Reveal delay={0.6}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 border-r-violet-500 blur-sm"
              />
              <div className="absolute inset-2 rounded-full bg-slate-800 overflow-hidden border border-white/10">
                 {/* Placeholder Image */}
                 <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-slate-500">
                    Profile Image
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
