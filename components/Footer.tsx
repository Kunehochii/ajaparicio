"use client";

import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-24 pb-8">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <Reveal>
              <span className="text-sm font-medium text-gradient tracking-wider uppercase">
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white">
                Let's Build Something
                <span className="text-gradient"> Amazing</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </Reveal>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Reveal delay={0.3}>
              <motion.a
                href={`mailto:${portfolioData.profile.email}`}
                whileHover={{ y: -4, scale: 1.02 }}
                className="gradient-border p-6 flex flex-col items-center text-center group"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 mb-4 group-hover:shadow-[0_0_30px_rgba(102,126,234,0.3)] transition-shadow">
                  <Mail className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-white/50 text-sm break-all">
                  {portfolioData.profile.email}
                </p>
              </motion.a>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.a
                href={`tel:${portfolioData.profile.phone}`}
                whileHover={{ y: -4, scale: 1.02 }}
                className="gradient-border p-6 flex flex-col items-center text-center group"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 mb-4 group-hover:shadow-[0_0_30px_rgba(0,245,160,0.3)] transition-shadow">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-white/50 text-sm">
                  {portfolioData.profile.phone}
                </p>
              </motion.a>
            </Reveal>

            <Reveal delay={0.5}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="gradient-border p-6 flex flex-col items-center text-center group"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 mb-4 group-hover:shadow-[0_0_30px_rgba(240,147,251,0.3)] transition-shadow">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-white/50 text-sm">
                  {portfolioData.profile.location}
                </p>
              </motion.div>
            </Reveal>
          </div>

          {/* Social Links */}
          <Reveal delay={0.6}>
            <div className="flex justify-center gap-4 mt-12">
              <motion.a
                href={portfolioData.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl glass hover:bg-white/10 group transition-colors"
              >
                <Github className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href={portfolioData.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl glass hover:bg-white/10 group transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href={`mailto:${portfolioData.profile.email}`}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl glass hover:bg-white/10 group transition-colors"
              >
                <Mail className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>© {currentYear}</span>
              <span className="text-gradient font-semibold">
                {portfolioData.profile.name}
              </span>
              <span>• All rights reserved</span>
            </div>

            <div className="flex items-center gap-1 text-white/40 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
              <span>using</span>
              <span className="text-gradient font-medium ml-1">
                Next.js & Framer Motion
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
