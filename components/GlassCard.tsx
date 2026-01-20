"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "primary" | "accent" | "none";
}

export const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  glowColor = "none",
  ...props
}: GlassCardProps) => {
  const glowStyles = {
    primary: "hover:shadow-[0_0_40px_rgba(102,126,234,0.2)]",
    accent: "hover:shadow-[0_0_40px_rgba(0,245,160,0.2)]",
    none: "",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "glass",
        hoverEffect && "transition-all duration-300 cursor-pointer",
        hoverEffect && glowStyles[glowColor],
        className,
      )}
      {...props}
    >
      {/* Optional gradient border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
