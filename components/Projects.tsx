"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-100">
            Project Showcase
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <GlassCard className="h-[400px] p-0 overflow-hidden group relative border-0">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-600 font-bold text-4xl opacity-20">
                        {project.title.substring(0, 2)}
                    </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/80 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium mb-4">{project.role}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                         <span className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300">+{project.stack.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Slide Up Content */}
                  <div
                    className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  >
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
