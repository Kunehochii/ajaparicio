"use client";

import { portfolioData } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">Let's Connect</h2>
        
        <div className="flex justify-center gap-8 mb-8">
          <a
            href={portfolioData.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={portfolioData.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-violet-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
