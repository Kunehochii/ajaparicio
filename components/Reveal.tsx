"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
  direction = "up",
  blur = true,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: 50 };
      case "right":
        return { x: -50 };
      case "none":
        return {};
      default:
        return { y: 50 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: blur ? "blur(10px)" : "blur(0px)",
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
