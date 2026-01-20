"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));
};

export const Background = () => {
  const [particles, setParticles] = useState<
    ReturnType<typeof generateParticles>
  >([]);

  useEffect(() => {
    setParticles(generateParticles(50));
  }, []);

  return (
    <>
      {/* Noise Overlay */}
      <div className="noise" />

      {/* Main Background Container */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Morphing Gradient Orb 1 - Top Left */}
        <motion.div
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] animate-morph"
          style={{
            background:
              "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.15) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Morphing Gradient Orb 2 - Bottom Right */}
        <motion.div
          animate={{
            x: [0, -80, -40, 0],
            y: [0, -60, -120, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] animate-morph"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 245, 160, 0.2) 0%, rgba(0, 217, 245, 0.1) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Accent Orb - Center */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 60, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-[40%] left-[40%] w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
            }}
            animate={{
              y: [`${particle.y}vh`, `${particle.y - 30}vh`, `${particle.y}vh`],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background:
                particle.id % 3 === 0
                  ? "rgba(102, 126, 234, 0.8)"
                  : particle.id % 3 === 1
                    ? "rgba(0, 245, 160, 0.8)"
                    : "rgba(240, 147, 251, 0.8)",
              boxShadow: `0 0 ${particle.size * 2}px currentColor`,
            }}
          />
        ))}

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_rgba(3,7,18,0.8)_100%)]" />
      </div>
    </>
  );
};
