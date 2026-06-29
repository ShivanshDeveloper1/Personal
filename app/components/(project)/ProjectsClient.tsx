"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function ProjectsClient() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Verified Production Work
      </motion.h1>

      <motion.p
        className="text-lg text-gray-500 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A selection of real-world applications, localized enterprise platforms, and automated software architectures built to solve complex business operations.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-between bg-white dark:bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 shadow-md overflow-hidden h-full group"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div>
              {/* Flagship Indicator Pin */}
              {project.flagship && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-pink-500/20 tracking-wider uppercase">
                    🚀 Flagship System
                  </span>
                </div>
              )}

              {/* Responsive Image Wrapper with layout scale controls */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={`Screenshot of project: ${project.title}`}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  width={600}
                  height={340}
                  priority={index < 3} // Priority load the top row above fold
                />
              </div>

              {/* Body Text Context Area */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors group-hover:text-indigo-500">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Bottom Tech-Badge & Link Section */}
            <div className="px-6 pb-6 pt-2">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 border-t border-gray-100 dark:border-gray-800 pt-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                )}

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors ml-auto"
                >
                  <span>Launch Live</span>
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}