import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          font-archivo font-extrabold
          tracking-[-0.04em]
          bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent 
          leading-[0.8]
          text-center
          text-[52px]
          sm:text-[75px]
          md:text-[110px]
          lg:text-[150px]
          xl:text-[180px]
          max-w-[1400px]
        "
      >
        SOFTWARE ENGINEER
      </motion.h1>

      {/* Image + Glow */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="
          absolute
          top-[58%]
          sm:top-[60%]
          md:top-[62%]
          left-1/2
          -translate-x-1/2
        "
      >
        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            w-48
            h-48
            sm:w-56
            sm:h-56
            md:w-64
            md:h-64
            lg:w-72
            lg:h-72
            bg-blue-500
            rounded-full
            blur-3xl
          "
        />

        {/* Founder Image */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            w-40
            h-50
            sm:w-48
            sm:h-60
            md:w-52
            md:h-65
            lg:w-56
            lg:h-65
          "
        >
          <Image
            src="/Personal_Image.jpeg"
            fill
            priority
            className="object-cover object-top rounded-xl shadow-2xl"
            alt="Founder"
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default FounderSection;