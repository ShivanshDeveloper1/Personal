"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cost, OtherService, CostItem } from "@/data/website-cost/service";
import { CheckCircle2, ArrowRight } from "lucide-react";

const MotionLink = motion(Link);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function HeroAnimation() {
  const [selectedWebsite, setSelectedWebsite] = useState<CostItem | null>(null);
  const [selectedServices, setSelectedServices] = useState<CostItem[]>([]);

  const handleService = (service: CostItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((item) => item.title === service.title);
      return exists
        ? prev.filter((item) => item.title !== service.title)
        : [...prev, service];
    });
  };

  const total =
    (selectedWebsite?.Price || 0) +
    selectedServices.reduce((sum, service) => sum + service.Price, 0);

  return (
    <main className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* HERO SECTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-16 lg:px-24 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 max-w-7xl mx-auto"
      >
        <div className="w-full md:flex-1 space-y-5">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
         <span className="font-bolder bg-gradient-to-r from-yellow-600 via-yellow-400 to bg-yellow-800  bg-clip-text text-transparent  ">2026</span>   Website Cost Calculator India
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            Estimate your web development cost in Saharanpur, UP, and major
            Indian cities. Calculate accurate pricing for website design,
            custom functionality, e-commerce, and maintenance.
          </motion.p>

          <motion.div variants={itemVariants}>
            <MotionLink
              href="#calculator"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              Calculate Cost Now <ArrowRight className="w-5 h-5" />
            </MotionLink>
          </motion.div>
        </div>

        <motion.div variants={imageVariants} className="w-full md:flex-1 flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="py-12 px-4 sm:px-6 md:px-14 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          
          {/* LEFT: SELECTION PANELS */}
          <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                What are you looking for?
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Choose your website type and optional services.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              {/* WEBSITE TYPES */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                  1. Select Website Type
                </h3>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Cost.map((it) => {
                    const Icon = it.icon;
                    const isSelected = selectedWebsite?.title === it.title;

                    return (
                      <div
                        key={it.title}
                        onClick={() => setSelectedWebsite(it)}
                        className={`
                          relative cursor-pointer rounded-xl border p-5 flex flex-col justify-between transition-all duration-200
                          ${it.color.bg} ${it.color.darkBg}
                          ${
                            isSelected
                              ? "border-primary ring-2 ring-primary/40 shadow-md bg-white dark:bg-slate-800"
                              : `${it.color.border} ${it.color.darkBorder} hover:-translate-y-1 hover:shadow-md hover:border-primary/50`
                          }
                        `}
                      >
                        <div className="flex items-start justify-between">
                          <div className={`p-2.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm ${it.color.text} ${it.color.darkText}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          )}
                        </div>

                        <div className="mt-4">
                          <p className={`font-semibold text-slate-900 dark:text-slate-100 ${isSelected ? "text-primary dark:text-primary" : ""}`}>
                            {it.title}
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                            ₹{it.Price.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ADDITIONAL SERVICES */}
              <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                  2. Additional Services
                </h3>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {OtherService.map((it) => {
                    const Icon = it.icon;
                    const isSelected = selectedServices.some((s) => s.title === it.title);

                    return (
                      <div
                        key={it.title}
                        onClick={() => handleService(it)}
                        className={`
                          relative cursor-pointer rounded-xl border p-4 flex items-center gap-4 transition-all duration-200
                          ${it.color.bg} ${it.color.darkBg}
                          ${
                            isSelected
                              ? "border-emerald-500 ring-2 ring-emerald-500/30 bg-white dark:bg-slate-800"
                              : `${it.color.border} ${it.color.darkBorder} hover:-translate-y-1 hover:shadow-md`
                          }
                        `}
                      >
                        <div className={`p-2.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm ${it.color.text} ${it.color.darkText}`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm truncate">
                            {it.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            +₹{it.Price.toLocaleString('en-IN')}
                          </p>
                        </div>

                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="h-fit sticky top-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6">
            <h3 className="text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-800 pb-4 text-xl">
              Estimate Summary
            </h3>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/80 my-2">
              {/* PRIMARY SELECTION */}
              {selectedWebsite ? (
                <div className="flex justify-between items-center py-3.5">
                  <div className="flex items-center gap-2">
                    <selectedWebsite.icon className="w-4 h-4 text-primary" />
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">
                      {selectedWebsite.title}
                    </span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    ₹{selectedWebsite.Price.toLocaleString('en-IN')}
                  </span>
                </div>
              ) : (
                <p className="py-4 text-sm text-slate-400 dark:text-slate-500 italic">
                  Select a primary website type above
                </p>
              )}

              {/* SERVICES SELECTION */}
              {selectedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex justify-between items-center py-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-500" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">
                      ₹{service.Price.toLocaleString('en-IN')}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* TOTAL */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Estimated Total
              </span>
              <span className="font-extrabold text-2xl text-primary">
                ₹{total.toLocaleString('en-IN')}
              </span>
            </div>

            <Link
              href={'/contact'}
              className="w-full block mt-6 py-3.5 px-4 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 text-white font-semibold transition-all shadow-md shadow-blue-500/10 cursor-pointer disabled:cursor-not-allowed"
            >
              Get Detailed Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}