"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const MagneticButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-[length:200%_100%] hover:bg-right",
    secondary: "bg-white/10 hover:bg-white/20 border border-white/20",
    outline:
      "bg-transparent border-2 border-violet-500/50 hover:border-violet-500 hover:bg-violet-500/10",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: x * 0.15, y: y * 0.15 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden group transition-all duration-500",
        variants[variant],
        className,
      )}
      {...(props as any)}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-white/20 to-violet-600/0 blur-xl" />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 group-hover:w-3/4 transition-all duration-500" />
    </motion.button>
  );
};
