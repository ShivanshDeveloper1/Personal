"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'

const Testimonials = () => {

  const testimonials = [
    {
      name: "Sneha Patel",
      role: "College Peer",
      feedback:
        "He built a full portfolio site for me during finals week. Super fast, clean design, and helped me deploy on Vercel too!",
      initials: "SP",
    },
    {
      name: "Ahmed Khan",
      role: "Local Business Owner",
      feedback:
        "I needed a simple site for my tuition center and Shivansh handled everything – SEO, design, and Google ranking setup!",
      initials: "AK",
    },
    {
      name: "Riya Sharma",
      role: "Startup Founder",
      feedback:
        "Handed him a rough idea and a tight deadline. Came back with a landing page that actually converted. Communicates well too.",
      initials: "RS",
    },
  ];

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      scale: 0.9,
      x: (i - 1) * 36,
      rotate: (i - 1) * 12,
    }),
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: i % 2 === 0 ? -1.5 : 1.5,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="bg-white dark:bg-[#0f172a] transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4">

        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-jakarta leading-[1.15] text-slate-900 dark:text-slate-100">
            What <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">clients say</span>
          </h2>
          <p className="text-lg text-slate-600 font-inter dark:text-slate-400 max-w-lg leading-relaxed mt-4">
            A few words from people I've built things for.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              whileHover={{ y: -6, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between flex-1 min-h-[260px] shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 font-jakarta font-extrabold text-6xl text-indigo-500/10 dark:text-indigo-400/20 leading-none select-none"
              >
                "
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-inter text-slate-700 dark:text-white leading-relaxed">
                  {test.feedback}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8 relative z-10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center font-jakarta font-semibold text-sm text-white shrink-0">
                  {test.initials}
                </div>
                <div>
                  <p className="font-jakarta font-semibold text-sm text-slate-900 dark:text-slate-100">
                    {test.name}
                  </p>
                  <p className="font-inter text-xs text-slate-500 dark:text-slate-400">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials