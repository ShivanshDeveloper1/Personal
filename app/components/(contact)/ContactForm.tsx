"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" 
        {...fadeInUp}
      >
        Contact Shivansh Singh - Professional Web Developer
      </motion.h1>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Let’s collaborate to design ultra-fast web platforms that outrank your local competition and increase conversion rates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Panel */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get a Free Strategy Consultation</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Searching for the best website developer in <strong>Saharanpur, Haridwar, Dehradun, Roorkee, or Yamunanagar</strong>? Whether you need a secure custom e-commerce application, automated management portals for educational coaching setups, localized high-performance business sites, or programmatic SEO structures, reach out today.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800"
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Direct Email</h3>
                <a
                  href="mailto:shivanshsingh4539@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  shivanshsingh4539@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800"
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                <FaPhone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone & WhatsApp</h3>
                <a
                  href="tel:+917618550475"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                >
                  +91 7618550475
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800"
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Service Hub Headquarters</h3>
                <p className="text-gray-600 dark:text-gray-400">Saharanpur, Uttar Pradesh, India</p>
              </div>
            </motion.div>

            <motion.a
              href="https://www.instagram.com/shivanshdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mt-6 inline-flex items-center gap-3
                px-6 py-3.5
                bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]
                text-white text-base font-bold
                rounded-xl shadow-lg shadow-pink-500/15
                hover:shadow-pink-500/30
                transition-all duration-300
              "
            >
              <FaInstagram className="text-2xl" />
              <span>Review Portfolio Content on Instagram</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Lead Collection Form Container */}
        <motion.div
          className="bg-white dark:bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
          {...slideInRight}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
               
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
               
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Project Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
               
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-6 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-emerald-500 font-medium text-center text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Inquiry successfully dispatched. Shivansh will contact you shortly!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="text-rose-500 font-medium text-center text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ⚠ Transmission pipeline error. Please check fields or use phone connectivity channels.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}