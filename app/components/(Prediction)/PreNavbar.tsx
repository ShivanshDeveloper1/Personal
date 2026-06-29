"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold transition-transform group-hover:scale-110">
            P
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            BulBul- Your Predictor
          </span>
        </div>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Success Stories
          </a>
        </div> */}

        {/* Auth Buttons */}
        {/* <div className="flex items-center gap-4">
          <button className="hidden sm:block px-5 py-2 text-sm font-medium hover:text-white transition-colors text-gray-300">
            Login
          </button>
          <button className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-all active:scale-95">
            Get Started
          </button>
        </div> */}
      </div>
    </nav>
  );
}