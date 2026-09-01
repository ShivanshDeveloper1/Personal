"use client";

import Image from "next/image";
import Link from "next/link"; // 1. Import Next.js Link
import React from "react";
import { motion } from "framer-motion";

// 2. Create the MotionLink component
const MotionLink = motion(Link);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function HeroAnimation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        min-h-screen
        px-6 md:px-16 lg:px-24
        py-12 md:py-16
        flex
        flex-col-reverse md:flex-row
        items-center
        justify-between
        gap-10 md:gap-16
      "
    >
      {/* Text Section */}
      <div className="w-full md:flex-1 space-y-5">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Website Cost Calculator India | Estimate Web Development Pricing
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
        >
          Estimate your web development cost in Saharanpur, UP, and major Indian cities. Calculate accurate pricing for website design, custom functionality, e-commerce, and maintenance.
        </motion.p>

        <motion.div variants={itemVariants}>
          {/* 3. Use MotionLink with inline-block for proper transforms */}
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 transition-colors duration-200"
          >
            Calculate Cost Now
          </MotionLink>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        variants={imageVariants}
        className="w-full md:flex-1 flex justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full aspect-[4/3] max-w-lg md:max-w-none"
        >
          <Image
            alt="Website Cost Calculator India - Web Development Pricing Tool"
            src="/Cost_Calculator/calculator.png"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}