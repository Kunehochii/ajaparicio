"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold mb-6 text-slate-100">About Me</h2>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="text-slate-400 space-y-4 leading-relaxed">
                {portfolioData.about.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.4}>
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Technical Skills</h3>
            </Reveal>
            <div className="space-y-6">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <Reveal key={category} delay={0.1 * index}>
                  <GlassCard className="p-4">
                    <h4 className="text-violet-400 font-medium mb-3 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-cyan-300 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
