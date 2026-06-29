"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaPhone,
} from "react-icons/fa";
import { locations } from "@/data/locations";

// ─── helpers ────────────────────────────────────────────────────────────────
const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

const WA_LINK = "https://wa.me/917618550475";

// ─── FADE-UP WRAPPER ────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 1. HERO
// ═══════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1e] text-white">
      {/* decorative mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 flex flex-col items-center text-center gap-7">
        {/* trust pill */}
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-300 uppercase">
            <FaMapMarkerAlt className="text-blue-400" />
            Saharanpur HQ &nbsp;·&nbsp; Delivering Pan-India
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight">
            Websites That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Win Customers
            </span>
            <br />
            — Not Just Compliments
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="max-w-xl text-base md:text-lg text-slate-300 leading-relaxed">
            Fast, mobile-first websites + local SEO for schools, clinics, showrooms &amp;
            startups across India. <strong className="text-white">Real results, real ROI.</strong>
          </p>
        </FadeUp>

        {/* social proof strip */}
        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[
              ["150+", "Sites Delivered"],
              ["4.9★", "Avg. Rating"],
              ["48 hr", "First Draft"],
            ].map(([num, label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">{num}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.26}>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-bold text-white shadow-lg shadow-green-500/20 text-sm"
            >
              <FaWhatsapp size={20} /> WhatsApp करें — Free Consult
            </motion.a>
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white text-sm backdrop-blur-sm"
            >
              <FaRocket className="text-blue-400" /> Get Free Quote
            </motion.button>
          </div>
        </FadeUp>

        {/* urgency nudge */}
        <FadeUp delay={0.32}>
          <p className="text-xs text-amber-400 font-semibold animate-pulse">
            🔥 Only 3 project slots open this month — Book now
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. WHY US — 3 TRUST PILLARS
// ═══════════════════════════════════════════════════════════════════════════
function TrustBar() {
  const pillars = [
    { icon: <FaRocket className="text-blue-400" size={22} />, title: "Speed Guaranteed", body: "Sites load in under 2 seconds. Google rewards speed — and so do customers." },
    { icon: <FaShieldAlt className="text-green-400" size={22} />, title: "Local SEO Baked In", body: "Rank for 'near me' searches in your city from day one. No black-hat tricks." },
    { icon: <FaClock className="text-amber-400" size={22} />, title: "10-Day Delivery", body: "Live draft in 48 hours, full site in 10 days. No endless back-and-forths." },
  ];
  return (
    <section className="bg-white dark:bg-[#0d1527] border-y border-gray-100 dark:border-white/5 py-14 px-5">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {p.icon}
                <h3 className="font-bold text-gray-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{p.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. SERVICES — TIGHT & SCANNABLE
// ═══════════════════════════════════════════════════════════════════════════
function Services() {
  const services = [
    {
      tag: "Most Popular",
      title: "Business Website",
      price: "₹11,999",
      time: "10 Days",
      items: ["Up to 8 pages", "Mobile-first design", "Basic On-page SEO", "1-year free support", "Free domain (.in)"],
      cta: "Order Now",
      highlight: true,
    },
    {
      tag: "Online Store",
      title: "E-Commerce Store",
      price: "₹24,999",
      time: "14 Days",
      items: ["Unlimited products", "UPI / Card payment", "Admin dashboard", "Order management", "Premium SEO"],
      cta: "Start Selling",
      highlight: false,
    },
    {
      tag: "Get Found",
      title: "Local SEO Package",
      price: "₹5,999/mo",
      time: "Monthly",
      items: ["Google My Business", "City keyword targeting", "Competitor analysis", "Monthly rank report", "Review management"],
      cta: "Rank My Business",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-5 bg-gray-50 dark:bg-[#080d1a]">
      <FadeUp className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
          Pick Your Growth Plan
        </h2>
        <p className="mt-3 text-gray-500 dark:text-slate-400">
          Transparent pricing. No hidden charges. EMI available.
        </p>
      </FadeUp>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {services.map((s, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div
              className={`relative h-full flex flex-col rounded-2xl p-7 border transition-shadow ${
                s.highlight
                  ? "border-blue-500 bg-blue-600 text-white shadow-2xl shadow-blue-500/20 ring-2 ring-blue-400"
                  : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white hover:shadow-lg"
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-6 bg-amber-400 text-gray-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  ⭐ Best Value
                </span>
              )}
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${s.highlight ? "text-blue-200" : "text-blue-500 dark:text-blue-400"}`}>
                {s.tag}
              </p>
              <h3 className="text-xl font-black mb-1">{s.title}</h3>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-black">{s.price}</span>
                <span className={`text-sm ${s.highlight ? "text-blue-200" : "text-gray-400"}`}>
                  · {s.time}
                </span>
              </div>
              <ul className="space-y-2.5 flex-grow mb-7">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className={s.highlight ? "text-green-300" : "text-green-500"} />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] ${
                  s.highlight
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                }`}
              >
                {s.cta} →
              </button>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. INDIAN REVIEWS
// ═══════════════════════════════════════════════════════════════════════════
const REVIEWS = [
  {
    name: "Rajesh Sharma",
    city: "Saharanpur, UP",
    role: "Owner, Sharma Hardware",
    text: "Shivansh ne 8 din mein website bana di. Pehle mahine mein hi 3 naye customers Google se aaye. Bahut professional kaam kiya bhai.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Dr. Priya Nair",
    city: "Dehradun, Uttarakhand",
    role: "Dental Clinic Owner",
    text: "My clinic's appointments doubled after the new website and Google My Business setup. Very prompt communication and clean design.",
    rating: 5,
    initial: "P",
  },
  {
    name: "Mohammed Farrukh",
    city: "Muzaffarnagar, UP",
    role: "Director, Farrukh Exports",
    text: "Humara export business ka website bilkul international level ka bana. Clients ne notice kiya. Return on investment bahut acha hai.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Sunita Agarwal",
    city: "Meerut, UP",
    role: "Principal, Bright Star School",
    text: "School ki website aur online admission form — sab kuch seamless. Parents ka trust zyada hua. WhatsApp pe directly baat karke sab sort ho gaya.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Harpreet Singh",
    city: "Ambala, Haryana",
    role: "MD, Singh Auto Showroom",
    text: "Showroom ki leads 40% badh gayi hain. Site fast hai, Google pe dikhti hai, aur mobile pe acha lagti hai. Highly recommended!",
    rating: 5,
    initial: "H",
  },
  {
    name: "Kavita Joshi",
    city: "Rishikesh, Uttarakhand",
    role: "Owner, Ananda Yoga Retreat",
    text: "International tourists now find us on Google. The website looks serene and loads fast even on slow networks. Best investment for my retreat.",
    rating: 5,
    initial: "K",
  },
];

function Reviews() {
  return (
    <section className="py-20 px-5 bg-white dark:bg-[#0a0f1e]">
      <FadeUp className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
          Real Clients. Real Results.
        </h2>
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-amber-400" size={18} />
          ))}
          <span className="ml-2 text-sm text-gray-500 dark:text-slate-400 font-medium">
            4.9/5 from 120+ reviews
          </span>
        </div>
      </FadeUp>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <FadeUp key={i} delay={(i % 3) * 0.1}>
            <div className="h-full flex flex-col gap-4 rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/4 p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-1">
                {[...Array(r.rating)].map((_, j) => (
                  <FaStar key={j} className="text-amber-400" size={14} />
                ))}
              </div>
              <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-white/8">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                  {r.initial}
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{r.name}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">{r.role} · {r.city}</p>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. LOCATION SEO CARDS
// ═══════════════════════════════════════════════════════════════════════════
function LocationServices() {
  if (!locations?.length) return null;
  return (
    <section className="py-20 px-5 bg-gray-50 dark:bg-[#080d1a]">
      <FadeUp className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
          We Serve Businesses Across India
        </h2>
        <p className="mt-3 text-gray-500 dark:text-slate-400 max-w-xl mx-auto">
          Local expertise, national reach. Click your city to see tailored services.
        </p>
      </FadeUp>
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <FadeUp key={i} delay={(i % 3) * 0.08}>
            <Link href={`/locations/${loc.slug}`} className="group block h-full">
              <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 bg-white dark:bg-white/4 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="h-44 relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src={loc.images?.[0]}
                    alt={`Web design services in ${loc.city}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-white font-black text-lg flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-blue-400" size={14} />
                    {loc.city}
                  </h3>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-[11px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-1">
                    {loc.state}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-400 flex-grow leading-relaxed">
                    {loc.description}
                  </p>
                  <span className="mt-4 flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                    View Services <FaArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. CONTACT FORM
// ═══════════════════════════════════════════════════════════════════════════
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const text = encodeURIComponent(
      `🙏 Hello Shivansh!\n\nName: ${fd.get("name")}\nCity: ${fd.get("city")}\nService: ${fd.get("interested")}\nMessage: ${fd.get("message")}\n\nSent via website.`
    );
    window.open(`${WA_LINK}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="py-20 px-5 bg-white dark:bg-[#0a0f1e]">
      <FadeUp className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
          Let's Build Your Website Today
        </h2>
        <p className="mt-3 text-gray-500 dark:text-slate-400">
          Fill the form — get a response within <strong className="text-gray-700 dark:text-white">2 hours</strong> on WhatsApp.
        </p>
      </FadeUp>

      <div className="mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100 dark:border-white/8">
        {/* left panel */}
        <div className="md:w-5/12 bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-10 text-white flex flex-col justify-between gap-8">
          <div className="space-y-5">
            <h3 className="text-2xl font-black leading-snug">Ready to grow?<br />Let's talk.</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Whether it's your first website or a full digital revamp — I'll help you get it right, fast.
            </p>
            {[
              ["📍", "Saharanpur, UP — Serving all India"],
              ["⏰", "Reply within 2 hours, Mon–Sat"],
              ["💳", "EMI available on all plans"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-start gap-2.5 text-sm text-blue-100">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 font-bold text-white text-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <FaWhatsapp size={20} /> Direct WhatsApp Chat
          </a>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-7/12 p-8 md:p-10 bg-gray-50 dark:bg-[#0d1527] space-y-5"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-10">
              <FaCheckCircle className="text-green-500" size={40} />
              <p className="text-xl font-black text-gray-900 dark:text-white">WhatsApp खुल गया!</p>
              <p className="text-sm text-gray-500 dark:text-slate-400">Send the message — I'll reply within 2 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[["name", "Your Name *", "text"], ["city", "Your City *", "text"]].map(([name, ph, type]) => (
                  <input
                    key={name}
                    name={name}
                    type={type}
                    placeholder={ph}
                    required
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                ))}
              </div>
              <select
                name="interested"
                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option>Business Website — ₹11,999</option>
                <option>E-Commerce Store — ₹24,999</option>
                <option>Local SEO Package — ₹5,999/mo</option>
                <option>I need a custom quote</option>
              </select>
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly describe your business (optional)"
                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-4 font-black text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25"
              >
                🚀 Send Enquiry via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400 dark:text-slate-500">
                No spam. No cold calls. Just a friendly reply from Shivansh.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 7. STICKY CTA BAR (mobile)
// ═══════════════════════════════════════════════════════════════════════════
function StickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex gap-3 p-3 bg-white/90 dark:bg-[#0a0f1e]/90 backdrop-blur border-t border-gray-200 dark:border-white/10 shadow-2xl">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-bold text-white text-sm"
      >
        <FaWhatsapp size={18} /> WhatsApp
      </a>
      <button
        onClick={scrollToForm}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white text-sm"
      >
        <FaRocket size={16} /> Get Quote
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════
export default function ServicesUI() {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white transition-colors pb-16 md:pb-0">
      <Hero />
      <TrustBar />
      <Services />
      <Reviews />
      <LocationServices />
      <ContactForm />
      <StickyBar />
    </div>
  );
}