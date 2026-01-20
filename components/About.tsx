"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Cpu, Layers } from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  backend: <Code2 className="w-5 h-5" />,
  frontendMobile: <Layers className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  devOps: <Cloud className="w-5 h-5" />,
  aiIot: <Cpu className="w-5 h-5" />,
};

const skillColors: Record<string, string> = {
  backend: "from-violet-500 to-purple-600",
  frontendMobile: "from-cyan-500 to-blue-600",
  database: "from-emerald-500 to-teal-600",
  devOps: "from-orange-500 to-red-600",
  aiIot: "from-pink-500 to-rose-600",
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-sm font-medium text-gradient tracking-wider uppercase">
              About Me
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="text-white/60 space-y-4 leading-relaxed text-lg">
              {portfolioData.about.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bento Grid Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {Object.entries(portfolioData.skills).map(
            ([category, skills], index) => (
              <Reveal key={category} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bento-item gradient-border p-6 h-full ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${skillColors[category]} bg-opacity-20`}
                    >
                      <span className="text-white">{skillIcons[category]}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="skill-tag relative px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white cursor-default"
                      >
                        <span className="relative z-10">{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ),
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies", value: "20+" },
            { label: "Happy Clients", value: "10+" },
          ].map((stat, index) => (
            <Reveal key={stat.label} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
