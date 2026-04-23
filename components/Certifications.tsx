"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Certifications = () => (
  <section id="awards" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <span className="text-sm font-medium text-gradient tracking-wider uppercase">
            Recognition
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Certifications &amp;
            <span className="text-gradient"> Awards</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {portfolioData.certifications.map((c, i) => (
          <Reveal key={c.title} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -4 }}
              className="gradient-border p-6 h-full"
            >
              <Award className="w-5 h-5 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-violet-400 mt-1">
                {c.issuer} · {c.year}
              </p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                {c.detail}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
