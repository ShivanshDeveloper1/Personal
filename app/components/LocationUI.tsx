"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle, Zap, Shield, Globe } from 'lucide-react';

export default function LocationUI({ data }) {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-indigo-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <motion.div 
          initial="initial" animate="animate" variants={fadeInUp}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-indigo-300">
              {data.seo.secondaryKeywords[1] || `Expert Web Solutions in ${data.city}`}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-none">
            {data.seo.primaryKeyword.split(' ').slice(0, -1).join(' ')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              {data.seo.primaryKeyword.split(' ').pop()}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop settling for slow templates. We build <span className="text-white font-medium italic underline decoration-indigo-500/50">high-performance digital assets</span> that dominate search rankings in {data.city}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={() => router.push('/contact')}
              className="group relative px-8 py-4 bg-indigo-600 rounded-xl font-bold transition-all hover:bg-indigo-500 active:scale-95 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Start My Project <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => window.open(`https://wa.me/7618550475`, '_blank')}
              className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Expert
            </button>
          </div>
        </motion.div>
      </section>

      {/* CONDITIONAL INSTAGRAM VIDEO SECTION */}
    {data.instagramVideoId && (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        See How We Build For {data.city}
      </h2>

      <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 aspect-[9/16] max-w-[400px] mx-auto shadow-2xl shadow-indigo-500/10">
        <iframe
          className="w-full h-full"
          // This logic extracts the ID even if you paste a full URL
          src={`https://www.instagram.com/reel/${data.instagramVideoId.split('/')[4] || data.instagramVideoId}/embed`}
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allow="encrypted-media"
          title={`Web Development Process in ${data.city}`} // Better for SEO
        ></iframe>
      </div>

      <p className="text-center text-slate-400 mt-6 italic">
        Watch our recent project delivery in {data.city}.
      </p>
    </div>
  </section>
)}

      {/* 2. BENTO STATS SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
              className="lg:col-span-7 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Why Your {data.city} Business <br />
                  <span className="text-indigo-400 underline decoration-indigo-500/30">Deserves Better</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-lg">
                  Serving {data.nearbyAreas.slice(0, 3).join(', ')}, we bridge the gap between aesthetics and actual revenue generation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { text: 'Local GEO Mastery', icon: <Globe className="w-5 h-5"/> },
                    { text: 'Hyper-Fast (Next.js)', icon: <Zap className="w-5 h-5"/> },
                    { text: 'Conversion Focused', icon: <CheckCircle2 className="w-5 h-5"/> },
                    { text: '24/7 Security', icon: <Shield className="w-5 h-5"/> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-indigo-400">{item.icon}</span>
                      <span className="font-medium text-sm text-slate-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              <div className="col-span-2 relative h-48 rounded-[2rem] overflow-hidden group">
                <Image src={data.images[0]} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Portfolio Preview" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                <div className="absolute bottom-6 left-6 font-bold text-xl">Recent Projects</div>
              </div>
              <div className="p-8 rounded-[2rem] bg-indigo-600 flex flex-col justify-center">
                <p className="text-4xl font-black">{data.stats.completedProjects}+</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Built in India</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white text-black flex flex-col justify-center">
                <p className="text-4xl font-black">{data.stats.yearsExperience}y+</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Tech Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODERN SERVICE CARDS */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Solutions</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.03] group-hover:text-indigo-500/10 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGH-CONVERSION CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative group overflow-hidden rounded-[3rem] p-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500">
          <div className="bg-[#050505] rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/20 blur-[80px]" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Let's Dominate <br className="hidden md:block" /> {data.city} Together.
            </h2>
            <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
              Currently accepting only <span className="text-white font-bold">2 new clients</span> for {new Date().toLocaleString('default', { month: 'long' })}. Book your slot now.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Check My Availability
            </button>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 px-6 bg-[#080808]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: data.seo.aiSearchKeywords[0] || `Why hire a local developer in ${data.city}?`,
                a: `Local presence means we understand the ${data.city} market nuance, providing SEO that targets your specific neighbors and clients in ${data.nearbyAreas[0]}.`
              },
              {
                q: data.faqKeywords[0] || `How fast will my website be?`,
                a: `We use Next.js and Node.js to ensure lightning-fast load times, which is a critical ranking factor for Google.`
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold group-open:text-indigo-400 transition-colors">{faq.q}</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}