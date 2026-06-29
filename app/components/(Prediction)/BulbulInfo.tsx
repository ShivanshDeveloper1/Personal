"use client";

import React from "react";
import { Zap, Shield, CheckCircle, Activity, Users, Clock, Quote } from "lucide-react";

export default function BulbulInfo() {
  return (
    <div className="bg-[#0a0a0a] text-gray-100 py-24 px-6 space-y-32">
      
      {/* --- Section 1: How Bulbul Works --- */}
      <section className="max-w-6xl mx-auto text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-4 block">
          How Bulbul works
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Three steps to <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">clarity</span>
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          No sign-up. No data leaves your device. Just answers and insight.
        </p>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {[
            { step: "Step 1", title: "Choose Prediction Type", desc: "Pick Scientific or Vedic — or try both. Each takes about two minutes.", icon: Zap },
            { step: "Step 2", title: "Answer Quick Questions", desc: "Honest, simple inputs about your prep, habits, and headspace.", icon: Shield },
            { step: "Step 3", title: "Get Confidence Score", desc: "A clear readiness score, strength chips, and tonight's action list.", icon: CheckCircle },
          ].map((item, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{item.step}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Trending Tonight (Stats) --- */}
      <section className="max-w-6xl mx-auto">
        <div className="p-12 rounded-[40px] bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/5 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[100px]" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4 block">
                Trending tonight
              </span>
              <h2 className="text-4xl font-extrabold mb-6">The night before energy</h2>
              <p className="text-gray-400 text-lg">Real students, real readiness checks — happening right now.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Predictions today", value: "1,240+", sub: "And climbing every minute.", icon: Activity },
                { label: "Students this week", value: "9,430", sub: "Most are Class 12 aspirants.", icon: Users },
                { label: "NEET starts soon", value: "1 day", sub: "Don't go in unsure.", icon: Clock },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-cyan-400 mb-2"><stat.icon size={20} /></div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-[10px] text-gray-600">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Testimonials --- */}
      <section className="max-w-6xl mx-auto text-center pb-20">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-purple-400 mb-4 block">
          Loved by aspirants
        </span>
        <h2 className="text-4xl font-extrabold mb-16">Calm before the storm</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { name: "Aanya R.", loc: "Class 12 · Lucknow", text: "Bulbul helped me feel confident before NEET. The score made the night peaceful.", initial: "A" },
            { name: "Kabir S.", loc: "Dropper · Kota", text: "The readiness score gave me clarity. I knew exactly what to revise last.", initial: "K" },
            { name: "Meher J.", loc: "Class 11 · Pune", text: "I love the Vedic side — calmed my nerves and told me when I focus best.", initial: "M" },
          ].map((review, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/[0.07] transition-colors">
              <div>
                <Quote className="text-indigo-500/40 mb-6" size={32} />
                <p className="text-gray-300 italic leading-relaxed mb-8">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}