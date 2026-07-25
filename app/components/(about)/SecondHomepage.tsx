"use client"
import { Anton } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

// 1. Define reusable animation variants outside the component for better performance
const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between "SHIVANSH" and "SINGH"
      delayChildren: 0.1,
    }
  }
};

const textWord = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] // Custom Expo-out curve for premium feel
    }
  }
};

const imageVariant = {
  hidden: { y: 120, opacity: 0, scale: 1.05 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.4, 
      delay: 0.3, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const SecHomepage = () => {
  const MotionImage = motion(Image);
  
  return (
    <div className='min-h-dvh overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center w-full relative'>
        
        {/* BACKGROUND TEXT (SOLID) */}
        <motion.h1 
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className={`${anton.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full flex flex-col md:flex-row justify-center items-center gap-0 md:gap-6 text-center leading-[0.85] text-[24vw] md:text-[12vw] lg:text-[200px]`}
        >
          {/* Wrapping in overflow-hidden creates a clean "reveal" mask effect */}
          <span className="overflow-hidden pb-4 md:pb-6">
            <motion.span variants={textWord} className="inline-block">SHIVANSH</motion.span>
          </span>
          <span className="overflow-hidden pb-4 md:pb-6">
            <motion.span variants={textWord} className="inline-block">SINGH</motion.span>
          </span>
        </motion.h1>

        {/* RESPONSIVE CENTERED IMAGE */}
        <MotionImage 
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          src={'/Suite.png'} 
          alt='Shivansh Singh' 
          height={900} 
          width={800}
          priority 
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[95%] sm:w-[75%] md:w-[60%] lg:w-[45%] max-w-[1500px] h-[100dvh] object-contain object-bottom' 
        />

        {/* FOREGROUND TEXT (STROKED) */}
        <motion.h1 
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className={`${anton.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-full flex flex-col md:flex-row justify-center items-center gap-0 md:gap-6 text-center leading-[0.85] text-[24vw] md:text-[12vw] lg:text-[200px] text-transparent [-webkit-text-stroke:2px_rgba(0,0,0,0.8)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.8)] md:[-webkit-text-stroke:3px_rgba(0,0,0,0.8)] md:dark:[-webkit-text-stroke:3px_rgba(255,255,255,0.8)] pointer-events-none`}
        >
          <span className="overflow-hidden pb-4 md:pb-6">
            <motion.span variants={textWord} className="inline-block">SHIVANSH</motion.span>
          </span>
          <span className="overflow-hidden pb-4 md:pb-6">
            <motion.span variants={textWord} className="inline-block">SINGH</motion.span>
          </span>
        </motion.h1>
        
    </div>
  )
}

export default SecHomepage