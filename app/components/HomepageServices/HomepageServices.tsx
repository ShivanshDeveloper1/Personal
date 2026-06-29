"use client";
import React from "react";
import { service } from "../../../data/Service";
import Link from "next/link";
import { motion } from "framer-motion";

const HomepageServices = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    /* Updated background to a rich dark theme that matches your premium style */
    <main className="relative py-16 md:py-24 bg-gradient-to-b overflow-hidden bg-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Big Text - Color updated for better contrast */}
      <div className="relative flex justify-center items-center mb-12 md:mb-20">
        <span className="absolute text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-extrabold tracking-tighter text-gray-100 dark:text-white/[0.03] select-none pointer-events-none uppercase">
          Services
        </span>

        <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 text-transparent bg-clip-text z-10">
          My Expertise
        </h2>
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 px-6"
      >
        {/* Intro Card */}
        <motion.div
          variants={cardVariants}
          className="relative group h-80 flex flex-col items-center justify-center px-6 overflow-hidden rounded-3xl shadow-lg border border-transparent dark:border-white/5"
        >
          <div className="absolute inset-0 bg-[url('/profil.avif')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
          <div className="relative z-10 text-center">
            <p className="font-bold text-xl text-white leading-tight">
              Premium <br /> Digital Solutions
            </p>
            <Link
              href={"/service"}
              className="mt-5 inline-block px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
            >
              View All Services
            </Link>
          </div>
        </motion.div>

        {/* Dynamic Service Cards */}
        {service.map((serv, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-80 [perspective:1000px] group"
          >
            <motion.div
              whileHover={{ rotateY: 180 }}
              whileTap={{ rotateY: 180 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
            >
              {/* FRONT - Updated to a "Glass-Dark" look for dark mode */}
              <div
                className="absolute inset-0 rounded-3xl p-8 
                bg-white dark:bg-[#16161a]
                border border-gray-100 dark:border-white/[0.05]
                shadow-sm group-hover:shadow-blue-500/10
                flex flex-col items-center justify-center
                [backface-visibility:hidden] transition-all"
              >
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400">
                   <span className="text-2xl font-bold">{serv.title[0][0]}</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 leading-tight">
                  {serv.title[0]} <br />
                  <span className="text-blue-600 dark:text-blue-500">{serv.title[1]}</span>
                </h3>
                <p className="text-xs mt-4 text-center text-gray-500 dark:text-gray-400 line-clamp-3">
                  {serv.excerpt}
                </p>
              </div>

              {/* BACK - Using your requested Deep Blue/Indigo Gradient */}
              <div
                className="absolute inset-0 rounded-3xl p-8
                bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900
                shadow-2xl flex items-center justify-center
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p className="text-sm text-center text-white font-medium leading-relaxed">
                  {serv.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};

export default HomepageServices;