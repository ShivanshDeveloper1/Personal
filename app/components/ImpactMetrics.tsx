"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUp, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const ImpactDashboard = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-800">
      
      {/* Background Ambience - Adjusted to blend with your gray-900 theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live Performance Metrics
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-gray-900 dark:text-white">
            I Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Websites
            </span>{" "}
            That Turn Traffic Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Paying Clients.
            </span>
          </h2>
        </div>

        {/* THE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px] pb-10">
          
          {/* CARD 1: THE MONEY (ROI) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white dark:bg-gray-800/40 backdrop-blur-md border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-green-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="p-8 pb-2 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold mb-1 text-sm uppercase tracking-wider">
                  <FaMoneyBillWave /> <span>Ad Performance</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  Profitable Campaigns
                </h3>
              </div>
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white block">
                  +240%
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">
                  ROAS Return
                </span>
              </div>
            </div>

            <div className="relative w-full flex-grow mt-4 min-h-[300px] px-4 pb-4">
              <Image
                src="/adsence.png"
                alt="AdSense ROI"
                fill
                className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN STACK */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* CARD 2: SPEED */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 bg-white dark:bg-gray-800/40 backdrop-blur-md border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-blue-500/50 transition-all duration-500 relative min-h-[280px]"
            >
              <div className="absolute top-6 left-6 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase">
                  <FaCheckCircle /> <span>Core Web Vitals</span>
                </div>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src="/webvitals.png"
                  alt="Lighthouse Score"
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* CARD 3: TRAFFIC */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 bg-white dark:bg-gray-800/40 backdrop-blur-md border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-purple-500/50 transition-all duration-500 relative min-h-[280px]"
            >
              <div className="absolute top-6 left-6 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase">
                  <FaArrowUp /> <span>SEO Growth</span>
                </div>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src="/realpro.png"
                  alt="Analytics Graph"
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;