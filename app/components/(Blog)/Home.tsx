"use client";
import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <main className=" "> 
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex items-center justify-center gap-6 flex-col text-center px-4"
      >
        {/* Trust Badge */}
        <motion.div
          animate={{
            borderColor: [
              "rgba(226, 232, 240, 1)",
              "rgba(96, 165, 250, 1)",
              "rgba(226, 232, 240, 1)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          // FIXED: Changed to dark text for light mode, light text for dark mode
          className="border border-slate-200 px-3 py-1 text-slate-800 dark:text-gray-300 flex items-center gap-2 rounded-full shadow-sm text-xs sm:text-sm bg-white dark:bg-transparent"
        >
          <BadgeCheck size={16} strokeWidth={2.5} className="text-blue-600" />
          <p className="font-medium">Trusted by 1,000+ professionals</p>
        </motion.div>

        {/* Main Heading */}
        <motion.p
          variants={itemVariants}
          // FIXED: Changed text-gray-300 to text-slate-900 dark:text-gray-300
          className="font-bold text-3xl sm:text-5xl md:text-7xl max-w-5xl text-slate-900 dark:text-gray-300 leading-snug sm:leading-tight"
        >
         Level Up Your Business – Smart Websites That Bring Leads
         Plot
        </motion.p>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          // FIXED: Removed conflicting text-white/text-gray-500, used responsive dark/light classes
          className="max-w-md sm:max-w-xl text-slate-600 dark:text-gray-400 sm:text-lg"
        >
        Stop Losing Customers – Grow Your Business Online
        </motion.p>

        {/* Stars */}
        <motion.div variants={itemVariants} className="flex items-center gap-1">
          {/* FIXED: Using yellow for stars so they look great in both light and dark mode */}
          <span className="text-yellow-500 text-lg sm:text-xl">★★★★★</span>
        </motion.div>
      </motion.section>

      {/* Blog Card Section */}
      
    </main>
  );
};

export default HomePage;