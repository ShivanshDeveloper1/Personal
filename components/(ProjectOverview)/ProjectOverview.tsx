"use client"

import { ChevronLeft, Eye, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'


const ProjectOverview = ({ project, onBack }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!project) {
    return <div>No project selected.</div>;
  }

  // Fallback metadata if specific fields are missing
  const projectCategories = project.categories && project.categories.length > 0 
    ? project.categories.join(", ") 
    : "Web Application";
    
  const projectYear = project.details && project.details[0] 
    ? project.details[0] 
    : "Production Work";

  return (
    <motion.main  
    initial={{y:60 , opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.5 , ease:easeOut}} 
     className="max-w-6xl mx-auto flex flex-col space-y-12 p-6 min-h-screen transition-colors duration-300 light:bg-stone-50 light:text-gray-900 dark:text-gray-100">
      
      {/* Header Section */}
      <div className="flex flex-col space-y-6">
        <button 
          onClick={onBack}
          className="flex gap-2 items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-purple-300 transition-colors w-fit group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>
        
        <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h1>
        
        <p className="text-gray-600 dark:text-zinc-400 leading-relaxed max-w-3xl text-lg">
          {project.description}
        </p>
      </div>

      {/* Metadata & Action Button Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Metadata Grid */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-400 dark:text-purple-400/70 uppercase tracking-wider text-xs font-semibold">Category</span>
            <span className="font-medium text-gray-800 dark:text-zinc-200">{projectCategories}</span>
          </div>
          
          <span className="text-gray-300 dark:text-purple-950 font-light text-2xl">/</span>
          
          <div className="flex flex-col space-y-1">
            <span className="text-gray-400 dark:text-purple-400/70 uppercase tracking-wider text-xs font-semibold">Core Stack</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-sm font-medium text-gray-800 dark:text-zinc-200 bg-gray-100 dark:bg-gray-800/60 px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <span className="text-gray-300 dark:text-purple-950 font-light text-2xl">/</span>
          
          <div className="flex flex-col space-y-1">
            <span className="text-gray-400 dark:text-purple-400/70 uppercase tracking-wider text-xs font-semibold">Timeline</span>
            <span className="font-medium text-gray-800 dark:text-zinc-200">{projectYear}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
          {project.githubLink && (
            <Link 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-3 border border-gray-300 dark:border-zinc-700 rounded-full font-medium text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all text-center justify-center grow md:grow-0"
            >
              <span>Source Code</span>
            </Link>
          )}

          <Link 
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 bg-gray-900 dark:bg-zinc-900 items-center px-8 py-3 text-white rounded-full font-bold hover:bg-black dark:hover:bg-purple-900/40 dark:hover:text-purple-200 border border-transparent dark:border-purple-500/20 transition-all shadow-lg text-center justify-center grow md:grow-0"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Launch Live System</span>
            
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div
                    key="arrow"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <SquareArrowOutUpRight size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="eye"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <Eye size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Image Banner */}
      <div className="w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-purple-950/30 border border-transparent dark:border-purple-500/10 aspect-video relative max-h-[600px]">
        <Image 
          src={project.image} 
          alt={`${project.title} detailed visual preview`} 
          fill
          priority
          className="object-cover w-full h-full shadow-xl hover:scale-102 transition-transform duration-700 ease-out" 
        />
      </div>

      {/* Dynamic Deep-Dive Sections (If provided in JSON data) */}
      {project.sections && project.sections.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 border-t border-gray-100 dark:border-zinc-800">
          {project.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {section.heading}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm">
                {section.paragraph}
              </p>
            </div>
          ))}
        </div>
      )}

    </motion.main>
  )
}

export default ProjectOverview