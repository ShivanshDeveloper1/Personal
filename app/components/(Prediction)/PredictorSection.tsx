"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Brain, Moon, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AuthModal from "../AuthModal";


interface PredictorCardProps {
  title: string;
  description: string;
  icon: any;
  buttonText: string;
  variant: "purple" | "cyan";
  onClick: () => void;
  imagePath: string;
}

const PredictorCard = ({
  title,
  description,
  icon: Icon,
  buttonText,
  variant,
  onClick,
  imagePath,
}: PredictorCardProps) => {
  const isPurple = variant === "purple";

  return (
    <div className="relative group p-[1px] rounded-[32px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 flex flex-col">
      {/* 1. Top Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div
          className={`absolute inset-0 z-0 opacity-40 blur-3xl rounded-b-xl ${
            isPurple ? "bg-purple-900" : "bg-cyan-900"
          }`}
        />
        <Image
          src={imagePath}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
          priority
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out z-10"
        />
        <div
          className={`absolute bottom-4 left-6 md:left-8 w-14 h-14 rounded-2xl flex items-center justify-center z-20 ${
            isPurple
              ? "bg-indigo-500/30 backdrop-blur-lg text-indigo-400"
              : "bg-cyan-500/30 backdrop-blur-lg text-cyan-400"
          }`}
        >
          <Icon size={28} />
        </div>
      </div>

      {/* 2. Content Section - Enhanced Description */}
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between text-left">
        <div className="mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 leading-tight">
            {title}
          </h3>
          
          {/* ENHANCED DESCRIPTION: Bold, Larger, and High Contrast */}
          <p className="text-gray-100 font-extrabold text-lg md:text-xl leading-relaxed drop-shadow-sm">
            {description}
          </p>
        </div>

        {/* 3. Glow Button */}
        <button
          onClick={onClick}
          className={`w-full py-4 px-6 rounded-full font-bold text-black flex items-center justify-center gap-2 transition-all hover:gap-3 hover:shadow-lg active:scale-95 ${
            isPurple
              ? "bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              : "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          }`}
        >
          <span className="hidden xs:inline">{buttonText}</span>
          <span className="xs:hidden">Start Now</span>
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default function PredictorSection() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");

  const handleStart = (url: string) => {
    setPendingUrl(url);
    setModalOpen(true);
  };

  const handleAuthSuccess = () => {
    router.push(pendingUrl);
    setModalOpen(false);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-[#0A0D15]">
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(#ffffff22 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-full h-full bg-indigo-900/10 blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4 block">
          Two Ways To Know
        </span>

        <h2 className="text-4xl xs:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Pick your{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            predictor
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Scientific data or Vedic wisdom — Bulbul gives you both lenses on your
          readiness.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <PredictorCard
            title="Leaked Question Paper"
            description="Based on Your District, if a paper leaks it will be sent to your WhatsApp number directly."
            icon={Brain}
            buttonText="Check Scientific Prediction"
            variant="purple"
            onClick={() => handleStart("/neet-paper")}
            imagePath="/NeetLeaked.png"
          />

          <PredictorCard
            title="Vedic Insight Predictor"
            description="Get concentration suggestions, motivation insights, ideal study timing, and calming guidance."
            icon={Moon}
            buttonText="Check Vedic Insight"
            variant="cyan"
            onClick={() => handleStart("/neet-result-predictor/quiz/vedic")}
            imagePath="/ResultPrediction.png"
          />
        </div>
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </section>
  );
}