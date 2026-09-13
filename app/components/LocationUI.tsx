"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowRight, Star } from 'lucide-react'
import FeaturedProject from './(location)/FeaturedProject'
import Testimonials from './(location)/Testimonials'
import Pricing from './(location)/Pricing'
import TechnologyUsed from './(location)/TechnologyUsed'
import ContactSection from './(location)/ContactSection'


const LocationUI = ({ data }) => {
  const router = useRouter()

  return (

  


<main  className='' >

    <div className="min-h-screen flex flex-col font-inter justify-center bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24 flex flex-col  md:flex-row items-center  gap-12">
        
        {/* Left Column: Copy & CTAs */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          
          {/* Main Headline: Punchy & Minimal */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-jakarta leading-[1.15]">
            Web Developer in <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{data.city}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-600 font-inter dark:text-slate-400 max-w-lg leading-relaxed">
            {data.description}
          </p>

          {/* Primary CTA + Social Proof Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
            <button 
              onClick={() => router.push('/contact')}
              className="group relative px-6 py-4 bg-indigo-600 text-white rounded-xl font-bold transition-all hover:bg-indigo-500 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 overflow-hidden shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Contact Me <ArrowRight className="w-5 h-5" />
            </button>

            {/* Social Proof Stack inline with button */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 overflow-hidden">
                <Image width={40} height={40} src="/Suite.png" alt="Client" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" />
                <Image width={40} height={40} src="https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" />
                <Image width={40} height={40} src="https://plus.unsplash.com/premium_photo-1691030255048-0880e06d3b81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" />
              </div>
              <div>
                <p className="font-bold text-xs sm:text-sm leading-tight">Trusted by local brands in {data.city}</p>
                <div className="flex items-center gap-1 text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-500 dark:text-slate-400 text-xs ml-1 font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex gap-8 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 text-center">{data.stats?.completedProjects || 50}+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="border-l border-slate-200 dark:border-slate-800 pl-8">
              <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 text-center">{data.stats?.yearsExperience || 3}+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Visual */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative group w-full max-w-md">
            <div className="absolute  -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-65 transition duration-500"></div>
            <Image 
              height={450} 
              width={450} 
              src={ '/Personal_Image.jpeg' || data.images?.[0]} 
              alt={data.seo?.primaryKeyword || "Web Developer"} 
              className="relative object-cover object-top rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full h-[400px]"
              priority 
            />
          </div>
        </div>

      </div>


          </div>



      <FeaturedProject/>

      <Testimonials />

      <Pricing />
      <TechnologyUsed />

      <ContactSection />
      
          </main>
  )
}

export default LocationUI