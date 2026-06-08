// src/components/ScrollReveal.jsx
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const animationVariants = {
  fadeUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
  fadeLeft: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({ children, variant = "fadeUp" }) {
  const selectedAnimation = animationVariants[variant];

  return (
    <MotionDiv
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -150px 0px" }}
      transition={{
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionDiv>
  );
}
