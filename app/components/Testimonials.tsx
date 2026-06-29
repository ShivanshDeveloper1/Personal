"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/utils/animations";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    feedback:
      "shivansh delivered a blazing fast landing page for our startup, complete with animations and mobile responsiveness. Highly recommended!",
    initials: "RV",
  },
  {
    name: "Sneha Patel",
    role: "College Peer",
    feedback:
      "He built a full portfolio site for me during finals week. Super fast, clean design, and helped me deploy on Vercel too!",
    initials: "SP",
  },
  {
    name: "Ahmed Khan",
    role: "Local Business Owner",
    feedback:
      "I needed a simple site for my tuition center and shivansh handled everything – SEO, design, and Google ranking setup!",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      /* FIX: In Tailwind v4, we use bg-white for light mode 
         and dark:bg-linear-to-b to trigger the gradient transition correctly.
      */
      className="py-20 bg-white dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-800"
      {...fadeIn}
      transition={{ delay: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" 
          {...fadeInUp}
        >
          Testimonials
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate" // Changed to whileInView for better UX
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              /* Cards now have subtle borders to pop against the dark gray background */
              className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-white/5 hover:scale-[1.03] transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                "{t.feedback}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}