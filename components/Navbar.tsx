"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="container mx-auto px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl transition-all duration-500",
              scrolled
                ? "glass-strong px-6 py-3 shadow-lg shadow-black/20"
                : "bg-transparent px-0 py-0",
            )}
          >
            {/* Logo */}
            <Link href="#" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-black tracking-tight"
              >
                <span className="text-gradient">AJA</span>
                <span className="text-white/80">.</span>
              </motion.div>
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={cn(
                      "relative z-10 text-sm font-medium transition-colors duration-300",
                      activeSection === link.href.slice(1)
                        ? "text-white"
                        : "text-white/60 group-hover:text-white",
                    )}
                  >
                    {link.name}
                  </span>
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-white">Resume</span>
                <ExternalLink className="relative z-10 w-4 h-4 text-white/80" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl glass"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 p-4 md:hidden"
          >
            <div className="glass-strong rounded-2xl p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium transition-all",
                      activeSection === link.href.slice(1)
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="/resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
              >
                Resume
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
