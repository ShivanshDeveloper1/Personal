"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PersonalImage = () => {
  const skillsTags = ['Puppeteer', 'Nodejs', 'Playwright', 'XPath', 'CSS Selector', 'Automation', 'REST APIs', 'MONGODB']
  const name = "Shivansh Singh";
  const ref = useRef(null)

  // 1. Capture scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  })

  // 2. Smooth out the scroll progression using a spring physics engine
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 18,
    restDelta: 0.001
  });

  // 3. Create a subtle parallax effect by giving the text and image different scroll speeds
  const yText = useTransform(smoothProgress, [0, 1], [80, 0]);
  const yImage = useTransform(smoothProgress, [0, 1], [140, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  // 4. Framer Motion Variants for the staggered name reveal
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <main ref={ref} className='min-h-[50vh] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 max-w-7xl mx-auto px-6 md:px-20 py-10 overflow-hidden'>
      
      {/* Left Column: Text Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className='flex-1'
      >
        <h1 className='text-yellow-600 tracking-[0.3rem] font-medium uppercase text-base'>
          WEB DEVELOPMENT
        </h1>
        
        <p className='text-4xl font-extrabold tracking-tight leading-tight mt-2 text-white'> 
          <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
            Web Scraping 
          </span> 
          & Data Automation.
        </p>
        
        <hr className='font-bold my-4 border-gray-700' />

        <p className='italic text-gray-300 font-medium leading-relaxed'>
          I build intelligent web scraping solutions using Puppeteer and Node.js to automate repetitive tasks, collect structured data, monitor website changes, and integrate the extracted information into APIs, dashboards, and databases. From e-commerce products to job listings and business directories, I transform websites into usable data. 
        </p>

        <div className='flex flex-wrap gap-3 mt-6'>
          {skillsTags.map((skill, index) => (
            <motion.p 
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className='rounded-2xl bg-blue-500 px-4 py-2 flex items-center justify-center font-medium tracking-wide text-white text-sm cursor-pointer transition-colors duration-200' 
              key={index}
            >
              {skill}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Right Column: Profile Image & Overlay Name */}
      <motion.div
        style={{ y: yImage, opacity }}
        className='flex-1 flex justify-center md:justify-end w-full relative'
      >
        <div className="relative w-fit group">
          <Image
            alt="Profile Image"
            src="/Personal_Image.jpeg"
            width={400}
            height={400}
            className="rounded-xl object-cover shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />

          {/* Staggered Name Overlay */}
          <motion.p 
            variants={nameContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl font-bold drop-shadow-lg flex select-none"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            {name.split('').map((letter, index) => (
              <motion.span
                variants={letterVariants}
                key={index}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>

    </main>
  )
}

export default PersonalImage