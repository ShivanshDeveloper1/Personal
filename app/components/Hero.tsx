"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto px-4 pt-16 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center items-center mb-6"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profil.avif"
              alt="Shivansh Singh - Website Developer in Saharanpur"
              width={120}
              height={120}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-full w-32 h-32 object-cover ring-4 ring-primary/70 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* H1: Primary Search Target / SEO Keyword */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Website Developer
          </motion.h1>

          {/* H2: Secondary Heading / Introduction */}
          <motion.h2
            className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
            {...fadeInUp}
            transition={{ delay: 0.35 }}
          >
            Hi, I'm <span className="text-primary">Shivansh Singh</span>
          </motion.h2>

          {/* Paragraph / Value Proposition */}
          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            I build modern websites and manage Google Ads & Meta Ads to help businesses grow online.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-6 mb-10"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/ShivanshDeveloper1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/shivanshdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/shivansh-singh-bb1b0b328/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
              >
                View My Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto border border-primary text-primary dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all shadow-md"
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