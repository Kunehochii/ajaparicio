"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal width="100%">
            <span className="text-sm font-medium text-gradient tracking-wider uppercase">
              Featured Work
            </span>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Project
              <span className="text-gradient"> Showcase</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-white/60 mt-4 max-w-xl mx-auto">
              A collection of projects that showcase my skills in full-stack
              development, AI integration, and IoT solutions.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {portfolioData.projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`project-card gradient-border overflow-hidden group h-full ${
                  index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Floating Tech Stack */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full glass text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full glass text-white/70">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium">
                        {project.role}
                      </p>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-xl bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600/20 to-cyan-500/20 hover:from-violet-600/30 hover:to-cyan-500/30 text-white/90 text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* View More CTA */}
        <Reveal delay={0.5}>
          <div className="text-center mt-12">
            <motion.a
              href={portfolioData.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
