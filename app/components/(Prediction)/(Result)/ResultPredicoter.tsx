"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  RotateCcw, 
  Home, 
  Compass, 
  Zap,
  Star
} from "lucide-react";
import { useRouter } from "next/navigation";

// ============================================================================
// --- ALGORITHM MODULE (Keeping your original logic) ---
// ============================================================================

const getZodiacSign = (month) => {
  const signs = {
    Jan: "Capricorn", Feb: "Aquarius", Mar: "Pisces", Apr: "Aries",
    May: "Taurus", Jun: "Gemini", Jul: "Cancer", Aug: "Leo",
    Sep: "Virgo", Oct: "Libra", Nov: "Scorpio", Dec: "Sagittarius"
  };
  return signs[month] || "Cosmic";
};

const calculateEnergy = (syllabus, mind) => {
  let base = syllabus || 50;
  const mindModifiers = { LIGHT: 15, EASY: 10, STEADY: 5, HEAVY: -10, STORM: -20 };
  let finalEnergy = base + (mindModifiers[mind] || 0);
  return Math.min(99, Math.max(15, finalEnergy));
};

const generateHeadline = (mind) => {
  switch(mind) {
    case "LIGHT": return "Your mind is clear — perfect for deep focus.";
    case "EASY": return "Morning light is your power window — use it.";
    case "STEADY": return "You are in rhythm — maintain your momentum.";
    case "HEAVY": return "Twilight is your power window — use it for tough topics.";
    case "STORM": return "Night is your sanctuary — study in absolute silence.";
    default: return "The universe is aligning for your breakthrough.";
  }
};

const generateTips = (answers) => {
  const { direction, syllabus, mind } = answers;
  const tips = [];
  if (direction === "East") tips.push("Study facing East to align with rising energy and better retention.");
  else if (direction === "North") tips.push("Facing North enhances clarity. Perfect for complex math.");
  else if (direction === "West") tips.push("West brings creative problem-solving for theoretical subjects.");
  else tips.push("Facing South builds resilience. Keep pushing through the mock tests.");

  if (syllabus < 40) tips.push("Focus only on high-weightage topics now. Don't start new chapters.");
  else if (syllabus < 70) tips.push("Revise formulas and short notes tonight before sleep.");
  else tips.push("You are well prepared. Focus entirely on analyzing mock tests.");

  if (mind === "HEAVY" || mind === "STORM") {
    tips.push("Practice 5 mins of deep breathing to clear the mental fog.");
    tips.push("Sleep early — a rested mind reads questions much faster.");
  } else {
    tips.push("Your momentum is great. Use Pomodoro to avoid sudden burnout.");
  }
  tips.push("Carry something blue or silver for steady focus on exam day.");
  return tips;
};

export const runPredictionAlgorithm = (answers) => {
  const sign = getZodiacSign(answers.month);
  const energy = calculateEnergy(answers.syllabus, answers.mind);
  const headline = generateHeadline(answers.mind);
  const tips = generateTips(answers);
  return { sign, energy, headline, tips };
};

// ============================================================================
// --- UI COMPONENTS ---
// ============================================================================

const AnimatedProgress = ({ percentage }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setVal(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (val / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg className="w-48 h-48 transform -rotate-90">
        <circle cx="96" cy="96" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="12" fill="none" />
        <motion.circle
          cx="96" cy="96" r={radius}
          stroke="url(#grad_blue)" strokeWidth="12" fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad_blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-5xl font-bold text-white tracking-tight block"
        >
          {Math.round(val)}%
        </motion.span>
        <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Focus Energy</span>
      </div>
    </div>
  );
};

export default function ResultPage({ answers, onReset }) {
  if (!answers) return null;
  const result = runPredictionAlgorithm(answers);

  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#05040a] text-slate-200 font-sans relative overflow-hidden flex flex-col items-center py-12 px-6">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-3 h-3" /> Prediction Unlocked
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {result.headline}
          </h1>
          <p className="text-slate-400 text-lg">
            Your cosmic signature: <span className="text-indigo-400 font-semibold">{result.sign} Energy</span>
          </p>
        </div>

        {/* Results Grid (THE OLD LAYOUT YOU LIKED) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          
          {/* Energy Score Card */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex items-center justify-center backdrop-blur-xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <AnimatedProgress percentage={result.energy} />
          </motion.div>

          {/* Guidance List Card */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              <Compass className="w-4 h-4" /> Your Path to Success
            </div>
            
            <div className="space-y-4">
              {result.tips.map((tip, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all group"
                >
                  <Sparkles className="w-4 h-4 text-cyan-500 mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">{tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divine Blessing Section */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full bg-gradient-to-r from-orange-500/10 via-purple-500/5 to-transparent border border-orange-500/20 rounded-[2.5rem] p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full animate-pulse" />
            <img 
              src="/Budh.jpg" 
              alt="Divine" 
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-orange-500/40"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-orange-200 mb-2 flex items-center justify-center md:justify-start gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              Divine Blessings
            </h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed italic max-w-2xl">
              "Release your anxiety. You have worked hard, and the universe honors that effort. Trust your preparation and enter the hall with a fearless, calm mind. You are protected."
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={()=> router.push('/neet-result-predictor#buy-paper')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            Buy Question Paper <Zap className="w-4 h-4 fill-white" />
          </motion.button>
          
          <button onClick={onReset} className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
            <RotateCcw className="w-4 h-4" /> Retake
          </button>
          
          <button onClick={()=> router.push('/')} className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
            <Home className="w-4 h-4" /> Home
          </button>
        </div>

      </motion.div>
    </div>
  );
}