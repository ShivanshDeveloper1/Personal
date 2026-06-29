"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="flex justify-center items-center mb-6"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profil.avif"
              alt="Shivansh Singh - Saharanpur Web Developer"
              width={120}
              height={120}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-full w-32 h-32 object-cover ring-4 ring-primary/70 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-5"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <span className="text-primary">Hi, I’m Shivansh Singh</span>
          </motion.h1>

          <motion.p
            // Retained the excellent responsive text size and dark mode support
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
            // Increased the max width slightly for better flow on large screens (2xl -> 3xl)
            // Increased bottom margin slightly for more breathing room (mb-8 -> mb-10)

            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {/* Added a subtle span to the main title to enhance hierarchy and allow easier color targeting */}
            <span className="font-semibold text-gray-900 dark:text-white">
              Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
            </span>
            <br />{" "}
            {/* Added a line break for better visual separation on a single line */}
            <span className="text-gray-500 dark:text-gray-400">
              Based in <strong>Saharanpur, India</strong>
            </span>
          </motion.p>
          <motion.div
            className="flex justify-center space-x-5 mb-9"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/ShivanshDeveloper1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/shivanshdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/shivansh-singh-bb1b0b328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
           
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            {/* Blue Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 
                 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
              >
                View My Projects
              </Link>
            </motion.div>

            {/* Outline Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-primary text-primary px-8 py-3 
                 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all shadow-md"
              >
                Let’s Work Together
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
