import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({
  children,
  className,
  hoverEffect = false,
}: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
      className={cn(
        "backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-xl p-6",
        hoverEffect && "hover:border-white/20 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
