"use client"; // Required for Framer Motion in Next.js App Router

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  // 1. Container variants to stagger the text children
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2 second delay between each text element appearing
        delayChildren: 0.1,
      },
    },
  };

  // 2. Individual item variants (slides up from bottom)
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  // 3. Image variants (scales up and slides in from the right)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
    },
  };

  return (
    // Added overflow-hidden to prevent scrollbars during animations pushing items in from off-screen
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Text Content - Wrapped in motion.div to control the stagger */}
        <motion.div 
          className="flex-1 max-w-xl text-center lg:text-left"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={textItemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
          >
            Best <span className="text-yellow-500 dark:text-yellow-400">Social Media Marketing Agency</span> For Leads, Growth, &amp; Results
          </motion.h1>
          
          <motion.span 
            variants={textItemVariants}
            className="block mt-3 text-lg md:text-xl italic font-medium text-yellow-800 dark:text-yellow-200"
          >
            Get Found. Build Trust. Win More Clients.
          </motion.span>

          <motion.p 
            variants={textItemVariants}
            className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Expert social media marketing services designed for businesses ready to expand their online presence. 
            With over 22 years of experience in digital marketing, SEO Discovery understands the challenges 
            brands face when trying to capture attention and engage audiences on social platforms. Many 
            businesses have boosted their visibility, connected with target customers, and increased sales 
            through our proven social media strategies.
          </motion.p>

          <motion.div 
            variants={textItemVariants}
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            {/* Tweaked background and hover colors to look crisp on dark surfaces */}
            <Link href={'/contact'} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg shadow-sm transition-colors block text-center" >
              Contact
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image - Independent animation */}
        <motion.div 
          className="flex-1 w-full max-w-md lg:max-w-none flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-[550px] h-[400px]   aspect-square">
            <Image 
              alt="Social media marketing illustration showing growth and connectivity" 
              src="/social_media/social_med-removebg-preview.png" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"  
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Page;