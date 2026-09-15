"use client";

import { ArrowBigUp } from 'lucide-react'
import React from 'react'
import { projects } from '@/contents/projects'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

// Fallback gradient palette for dynamic card backgrounds
const DEFAULT_GRADIENTS = [
  'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500',
  'bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400',
  'bg-gradient-to-br from-rose-500 via-orange-500 to-amber-400',
  'bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-600',
  'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700',
]

const FeaturedProject = () => {
  const router = useRouter()

  return (
    <main className="max-w-7xl md:px-12 px-4 mx-auto min-h-screen py-12">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <h2 className="text-4xl md:text-6xl font-bold font-jakarta max-w-sm leading-tight text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <button 
          onClick={() => router.push('/projects')}
          className="flex items-center gap-3 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity text-gray-900 dark:text-white"
        >
          View all Work
          <span className="w-9 h-9 rounded-xl p-2 flex items-center justify-center border border-gray-300 dark:border-gray-700">
            <ArrowBigUp className="w-5 h-5" />
          </span>
        </button>
      </div>

      {/* Projects Grid (Sliced to exactly 6 items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {projects.slice(0, 6).map((project, index) => {
          // Select background color from item property or fallback array
          const bgStyle = project.bgGradient || DEFAULT_GRADIENTS[index % DEFAULT_GRADIENTS.length]

          return (
            <div 
              key={project.id || index} 
              className="group flex flex-col cursor-pointer"
              onClick={() => window.open(project.demoLink, "_blank")}
            >
              
              {/* Premium Image Frame with Gradient */}
              <div
                className={`relative aspect-[16/10] xl:aspect-[16/9] w-full rounded-3xl overflow-hidden ${bgStyle} p-4 sm:p-6 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.015] shadow-lg`}
              >
                {/* Flagship Indicator Pin */}
                {project.flagship && (
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-pink-500/30 tracking-wider uppercase">
                      🚀 Flagship System
                    </span>
                  </div>
                )}

                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white dark:bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title || 'Project Screenshot'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Data Context Area Below Image */}
              <div className="mt-6 flex flex-col space-y-3 px-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-indigo-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">
                    {project.description || (project.categories && project.categories.join(' • '))}
                  </p>
                </div>

                {/* Technologies List */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 rounded-md text-xs font-medium">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                )}

                {/* Quick Link Actions */}
                <div className="flex gap-6 border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
                  {project.githubLink && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents card click from firing
                        window.open(project.githubLink, "_blank");
                      }}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>Source Code</span>
                    </button>
                  )}

                  {project.demoLink && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents card click from firing
                        window.open(project.demoLink, "_blank");
                      }}
                      className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                    >
                      <span>Launch Live</span>
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </main>
  )
}

export default FeaturedProject