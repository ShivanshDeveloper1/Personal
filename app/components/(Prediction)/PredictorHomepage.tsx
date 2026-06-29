"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 41, seconds: 36 });
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* Particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const dots: { x: number; y: number; r: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 70; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.3 + 0.08,
        opacity: Math.random() * 0.35 + 0.08,
      });
    }
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        // Using a color that works for both; amber-500 is universally visible
        ctx.fillStyle = `rgba(245,158,11,${d.opacity})`; 
        ctx.fill();
        d.y -= d.speed;
        if (d.y < -5) d.y = canvas.height + 5;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const stats = [
    { num: '47,200+', label: 'Students tested' },
    { num: '94%',     label: 'Prediction accuracy' },
    { num: '2 min',   label: 'Avg completion' },
  ];

  const pills = ['2-minute test', 'No signup', 'AI-powered', 'Free forever'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.7); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0;   }
        }
        @keyframes imgFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-space    { font-family: 'Space Mono', monospace; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }

        .gradient-text {
          font-style: italic;
          background: linear-gradient(95deg, #f59e0b 0%, #ea580c 55%, #ef4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .reveal { opacity: 0; animation: fadeUp 0.75s ease forwards; }
        .d1 { animation-delay: 0.10s; }
        .d2 { animation-delay: 0.26s; }
        .d3 { animation-delay: 0.42s; }
        .d4 { animation-delay: 0.58s; }
        .d5 { animation-delay: 0.74s; }
        .d6 { animation-delay: 0.90s; }

        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(245,158,11,0.4);
          animation: pulseRing 1.8s ease-out infinite;
        }

        .cta-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .cta-primary:hover::after { transform: translateX(100%); }
        .cta-primary:hover .arrow { transform: translateX(6px); }

        .img-float { animation: imgFloat 6s ease-in-out infinite; }
      `}</style>

      {/* ── Root ── */}
      <div className="font-dm relative min-h-screen text-slate-900 dark:text-white bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">

        {/* Particle canvas */}
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

        {/* Dynamic Grid Overlay */}
       

        {/* Ambient amber glow - adjusted for dark mode */}
        <div
          className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(234,88,12,0.06) 40%, transparent 70%)',
          }}
        />

        {/* ── Nav ── */}
        <nav className="relative z-10 max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
          <span className="font-space text-[13px] tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400">
            NEET&nbsp;<span className="text-amber-500">·</span>&nbsp;2026
          </span>

          <div className="font-space inline-flex items-center gap-2 px-4 py-[6px] rounded-full border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 text-[11px] tracking-[0.1em] uppercase text-amber-600 dark:text-amber-400">
            <span className="pulse-dot relative w-[7px] h-[7px] rounded-full bg-amber-500 flex-shrink-0" />
            Live Results Tonight
          </div>
        </nav>

        {/* ── Hero ── */}
        <main className="relative z-10 max-w-[1200px] mx-auto px-8 pt-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div className="flex flex-col">
              <div className="reveal d1 flex items-center gap-3 mb-7">
                <span className="inline-block w-9 h-[2px] bg-amber-500/70 flex-shrink-0" />
                <span className="font-space text-[11px] tracking-[0.18em] uppercase text-amber-600 dark:text-amber-400">
                  Final Readiness Check
                </span>
              </div>

              <h1
                className="font-playfair font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight reveal d2"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 5.4rem)' }}
              >
                Are you ready<br />
                for{' '}
                <span className="gradient-text">tomorrow</span>'s<br />
                exam?
              </h1>

              <p
                className="font-dm font-light text-slate-600 dark:text-slate-400 leading-relaxed mt-6 reveal d3"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.12rem)', maxWidth: '460px' }}
              >
                Take a 2-minute predictor test built around this year's NEET pattern.
                Know exactly where you stand — before the hall begins.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-11 reveal d4">
                <button
                  className="cta-primary relative overflow-hidden inline-flex items-center gap-3 px-9 py-4 bg-amber-400 text-slate-900 font-dm font-medium text-base rounded-[6px] transition-all duration-200 hover:bg-amber-300 hover:-translate-y-0.5 active:scale-[0.98]"
                  onClick={() => router.push('/neet-result-predictor')}
                >
                  Start Prediction
                  <span className="arrow inline-block transition-transform duration-200">→</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-7 reveal d5">
                {pills.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3.5 py-[7px] rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[0.77rem] font-bold"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-amber-500 opacity-80 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-12 reveal d5" />

              <div className="flex flex-wrap items-start gap-12 reveal d6">
                <div>
                  <p className="font-space text-[10px] tracking-[0.2em] uppercase text-amber-600/60 mb-4">
                    Time until exam
                  </p>
                  <div className="flex items-start gap-0.5">
                    {[
                      { val: mounted ? pad(timeLeft.hours)   : '23', unit: 'hrs' },
                      { val: mounted ? pad(timeLeft.minutes) : '41', unit: 'min' },
                      { val: mounted ? pad(timeLeft.seconds) : '36', unit: 'sec' },
                    ].map((item, i) => (
                      <React.Fragment key={item.unit}>
                        <div className="text-center">
                          <div
                            className="font-space font-bold text-amber-500 leading-none"
                            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
                          >
                            {item.val}
                          </div>
                          <div className="font-space text-[10px] tracking-[0.15em] uppercase text-amber-600/60 mt-1">
                            {item.unit}
                          </div>
                        </div>
                        {i < 2 && (
                          <span
                            className="font-space text-amber-500/40 leading-none self-start mt-1 px-0.5"
                            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)' }}
                          >
                            :
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex gap-10 flex-wrap border-l border-slate-200 dark:border-slate-800 pl-12">
                  {stats.map(({ num, label }) => (
                    <div key={label}>
                      <div
                        className="font-space font-bold text-amber-500 leading-none"
                        style={{ fontSize: '1.5rem' }}
                      >
                        {num}
                      </div>
                      <div className="text-[0.75rem] text-slate-500 dark:text-slate-400 mt-1 tracking-wide font-dm">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center reveal d3">
              <div className="relative w-full max-w-[500px]">
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 68%)',
                    transform: 'scale(1.15)',
                  }}
                />

                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-amber-300 rounded-tl-md pointer-events-none z-20" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-amber-300 rounded-br-md pointer-events-none z-20" />

                <div className="img-float relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent z-10 rounded-2xl pointer-events-none" />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1678693021253-25ab291d1da8?q=80&w=687&auto=format&fit=crop"
                    alt="Medical student"
                    className="w-full object-cover object-center"
                    style={{ height: '580px' }}
                  />

                  <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-3">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
                      <div>
                        <div className="font-space text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase">Live now</div>
                        <div className="font-dm font-medium text-slate-800 dark:text-slate-200 text-sm mt-0.5">1,240 students testing</div>
                      </div>
                    </div>

                    <div className="bg-amber-50/90 dark:bg-amber-950/80 backdrop-blur-md border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-3 text-center flex-shrink-0 shadow-sm">
                      <div className="font-space font-bold text-amber-600 dark:text-amber-400 text-xl leading-none">94%</div>
                      <div className="font-space text-[10px] text-amber-600/70 dark:text-amber-400/70 uppercase tracking-wider mt-1">accuracy</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 z-20 flex items-center gap-2 bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 shadow-md rounded-full px-4 py-2">
                  <span className="text-amber-500 text-sm">★</span>
                  <span className="font-dm text-[0.78rem] text-slate-700 dark:text-slate-300 font-medium">NEET 2026</span>
                </div>
              </div>
            </div>

          </div>
        </main>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <footer className="relative z-10 max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between flex-wrap gap-3">
          <span className="font-space text-[10px] text-slate-400 dark:text-slate-500 tracking-[0.1em]">
            NEET UG 2025 · PREDICTOR ENGINE V3.1
          </span>
          <span className="font-space text-[10px] text-slate-400 dark:text-slate-500 tracking-[0.1em]">
            Results are indicative, not official
          </span>
        </footer>
      </div>
    </>
  );
}