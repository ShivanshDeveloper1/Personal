import { ArrowBigUp } from 'lucide-react'
import React from 'react'
import { projects } from '@/contents/projects'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
      {/* Adjusted this container to flex-col on mobile and flex-row on desktop for perfect responsiveness */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <h1 className="text-4xl md:text-6xl font-bold font-jakarta max-w-sm leading-tight">
          Featured Projects
        </h1>
        <p className="flex items-center gap-3 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity">
          View all Work
          <span className="w-9 h-9 rounded-xl p-2 flex items-center justify-center border border-black">
            <ArrowBigUp className="w-5 h-5" />
          </span>
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0,4).map((item, index) => {
          // Select background color from item property or fallback array
          const bgStyle =
            item.bgGradient || DEFAULT_GRADIENTS[index % DEFAULT_GRADIENTS.length]

          return (
            <div key={item.id || index} className="group flex flex-col cursor-pointer" onClick={() => window.open(item.demoLink, "_blank")}>
              
              {/* बदलाव 1: aspect-[4/3] को हटाकर aspect-[16/10] या aspect-video (16:9) कर दिया है */}
              {/* बदलाव 2: पैडिंग (p-6) को थोड़ा एडजस्ट किया है ताकि फ्रेम ज्यादा बेहतर दिखे */}
              <div
                className={`relative aspect-[16/10] xl:aspect-[16/9] w-full rounded-3xl overflow-hidden ${bgStyle} p-4 sm:p-6 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.015] shadow-lg`}
              >
                {/* बदलाव 3: यहाँ bg-white या bg-gray-50 जोड़ा है ताकि अगर हल्का सा गैप बचे तो वो बुरा न लगे */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
                  <Image
                    src={item.image}
                    alt={item.title || 'Project Screenshot'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    
                    // बदलाव 4: वापस object-cover और object-top लगा दिया है
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="mt-4 flex flex-col space-y-1">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {item.categories?.join(' • ') || 'Web Development'}
                </p>
              </div>

            </div>
          )
        })}
      </div>
    </main>
  )
}

export default FeaturedProject