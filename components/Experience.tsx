"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal width="100%">
            <span className="text-sm font-medium text-gradient tracking-wider uppercase">
              Career Journey
            </span>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Professional
              <span className="text-gradient"> Experience</span>
            </h2>
          </Reveal>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Gradient Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-transparent" />

            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative pl-20 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-gray-950 border-2 border-violet-500/50 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(0,245,160,0.3)] transition-all duration-300">
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Card */}
                    <div className="gradient-border p-6 group-hover:shadow-[0_0_40px_rgba(102,126,234,0.15)] transition-shadow duration-500">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-medium text-violet-400">
                              {exp.company}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-white/60 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Hover Arrow */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ x: 0 }}
                          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ChevronRight className="w-5 h-5 text-white/60" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
