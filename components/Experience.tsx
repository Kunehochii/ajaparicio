"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-100">
            Professional Experience
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/0 via-violet-500/50 to-violet-500/0" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-6 w-[10px] h-[10px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10" />

                {/* Content - Alternating sides for desktop */}
                <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"} pl-8 md:pl-0`}>
                  <Reveal delay={index * 0.1}>
                    <GlassCard hoverEffect className="p-6">
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-violet-400 font-medium mb-2">{exp.company}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </GlassCard>
                  </Reveal>
                </div>
                
                {/* Empty div for grid balance */}
                <div className={`${index % 2 === 0 ? "md:col-start-2" : "hidden md:block"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
