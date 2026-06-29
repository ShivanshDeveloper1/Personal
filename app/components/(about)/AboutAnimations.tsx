"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export const HeroDiv = ({ children, className }) => (
  <motion.div className={className} {...fadeInDown}>
    {children}
  </motion.div>
);

export const InstaButton = ({ children, href, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={className}
  >
    {children}
  </motion.a>
);

export const StaggerGrid = ({ children, className }) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    {children}
  </motion.div>
);

export const StaggerCard = ({ children, className }) => (
  <motion.div variants={fadeInUp} className={className}>
    {children}
  </motion.div>
);

export const SectionFadeInUp = ({ children, className }) => (
  <motion.section className={className} {...fadeInUp}>
    {children}
  </motion.section>
);

export const SectionFadeIn = ({ children, className, delay = 0 }) => (
  <motion.section className={className} {...fadeIn} transition={{ delay }}>
    {children}
  </motion.section>
);

export const HeadingFadeInUp = ({ children, className }) => (
  <motion.h2 className={className} {...fadeInUp}>
    {children}
  </motion.h2>
);

export const HoverCard = ({ children, className }) => (
  <motion.div className={className} variants={fadeInUp} {...cardHover}>
    {children}
  </motion.div>
);

export const HoverCardSmall = ({ children, className }) => (
  <motion.div className={className} variants={fadeInUp} {...cardHoverSmall}>
    {children}
  </motion.div>
);

export const RotateIconDiv = ({ children, className }) => (
  <motion.div className={className} whileHover={{ rotate: 10 }}>
    {children}
  </motion.div>
);