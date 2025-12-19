"use client";

import { motion } from "framer-motion";

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]"
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 100, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"
      />
    </div>
  );
};
