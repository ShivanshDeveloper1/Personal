"use client";

import React from "react";
import {
  BadgeDollarSign,
  TrendingUp,
  BarChart3,
  Palette,
} from "lucide-react";
import { Anton } from "next/font/google";
import { videos } from "@/data/VideoData";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const SocialEfforts = () => {
  const reasons = [
    {
      icon: BadgeDollarSign,
      text: "Lack of Leads or Sales from Social?",
    },
    {
      icon: TrendingUp,
      text: "Struggling to Keep Up with Trends & Platforms?",
    },
    {
      icon: BarChart3,
      text: "Unsure How to Measure Social Media ROI?",
    },
    {
      icon: Palette,
      text: "Lacking Creative Production Capabilities?",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden pb-32">
      
      {/* --- TOP SECTION: FOREGROUND CONTENT --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-16">
        <h1 className="text-blue-600 dark:text-blue-500 font-extrabold text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-tight">
          Tired of Social Media Efforts That Don’t Deliver?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 transition-all flex flex-col items-center duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.20)] dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)]"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon
                    size={40}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100 leading-relaxed text-center">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- BOTTOM SECTION: BLUE BACKGROUND WITH TOP & BOTTOM WAVES --- */}
      <div className="w-full bg-blue-600 relative mt-32 pt-16 pb-2">
        
        {/* 1. TOP WAVE: Positioned at bottom-full (above top edge), rotated 180° */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-full left-0 w-full h-[60px] md:h-[100px] fill-blue-600 rotate-180 pointer-events-none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>

        {/* 2. BOTTOM WAVE: Positioned at top-full (below bottom edge), standard orientation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-full left-0 w-full h-[60px] md:h-[100px] fill-blue-600 pointer-events-none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>

        <section className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
       <h2
  className={`${anton.className} text-5xl md:text-7xl text-white tracking-tight text-center mb-6`}
>
  Shivansh: Building Digital Experiences Since 2024
</h2>

<p className="text-center text-blue-50 max-w-4xl text-lg md:text-xl leading-relaxed mb-12">
  Since 2024, I've been helping businesses establish a strong online presence
  through modern websites, web applications, and SEO-focused solutions. Every
  project is built with performance, user experience, and long-term growth in
  mind.
</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full mb-16">
            <p className="text-xl md:text-2xl text-white">
              <span className="text-yellow-400 font-bold block mb-2">Data-Driven Strategies</span> 
              Tailored to Your Goals
            </p>
            <p className="text-xl md:text-2xl text-white">
              <span className="text-yellow-400 font-bold block mb-2">Expert Execution</span> 
              Across All Major Platforms
            </p>
            <p className="text-xl md:text-2xl text-white">
              <span className="text-yellow-400 font-bold block mb-2">Transparent Reporting</span> 
              Focused on Key Business Metrics
            </p>
          </div>

          {/* --- VIDEO CAROUSEL --- */}
          <div className="w-screen relative z-10 overflow-hidden group">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 30s linear infinite;
              }
              .group:hover .animate-marquee {
                animation-play-state: paused;
              }
            `}</style>

            <div className="animate-marquee gap-6">
              {[...videos, ...videos].map((vid, index) => (
                <div
                  key={`${vid.id}-${index}`}
                  className="bg-slate-900 border border-slate-700 aspect-[9/16] w-[250px] shrink-0 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                >
                  <video
                    src={vid.src}
                    className="w-full h-[80%] object-cover"
                    controls
                    muted
                    playsInline
                  />
                  <div className="p-4 h-[20%] flex flex-col justify-center bg-slate-900">
                    <p className="font-semibold text-white truncate">{vid.title}</p>
                    <p className="text-sm text-blue-300 font-medium">{vid.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SocialEfforts;