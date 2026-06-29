"use client";

import { useState } from "react";
import { Leaf, Sun, Cloud, CloudRain, CloudLightning } from "lucide-react";
import QuizShell from "./QuizShell";
import { quizData } from "@/lib/quizData";
import ResultPage from "./(Result)/ResultPredicoter";

const IconMap: Record<string, React.ElementType> = {
  "leaf": Leaf,
  "sun": Sun,
  "cloud": Cloud,
  "cloud-rain": CloudRain,
  "cloud-lightning": CloudLightning,
};

export default function QuizBoard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [completed, setCompleted] = useState(false);

  if (completed) {
    const formattedAnswers = {
      direction: answers["q1"],
      month: answers["q2"],
      syllabus: answers["q3"],
      mind: answers["q4"],
       studyTime: answers["q5"],
      
    };
    const handleReset = () => {
      setCompleted(false);
      setCurrentStep(0);
      setAnswers({});
    };
    return <ResultPage answers={formattedAnswers} onReset={handleReset} />;
  }

  const question = quizData[currentStep];
  const totalSteps = quizData.length;
  const isLast = currentStep === totalSteps - 1;
  const currentAnswer = answers[question.id];
  const canNext = currentAnswer !== undefined;

  const handleNext = () => {
    if (isLast) setCompleted(true);
    else setCurrentStep((prev) => prev + 1);
  };
  const handleBack = () => setCurrentStep((prev) => Math.max(0, prev - 1));
  const handleSelect = (value: string | number) =>
    setAnswers((prev) => ({ ...prev, [question.id]: value }));

  // ── Single-choice pills ──────────────────────────────────────────
  const renderSingleChoice = () => (
    <div className="flex flex-wrap justify-center gap-3">
      {(question.options as string[]).map((option) => {
        const isSelected = currentAnswer === option;
        return (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`rounded-full px-7 py-2.5 text-sm font-medium border transition-all
              ${isSelected
                ? "bg-cyan-50 border-cyan-500 text-cyan-700 ring-2 ring-cyan-400/30"
                : "bg-white border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  // ── Grid-choice pills ────────────────────────────────────────────
  const renderGridChoice = () => (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
      {(question.options as string[]).map((option) => {
        const isSelected = currentAnswer === option;
        return (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`rounded-full px-4 py-2.5 text-sm font-medium border transition-all
              ${isSelected
                ? "bg-cyan-50 border-cyan-500 text-cyan-700 ring-2 ring-cyan-400/30"
                : "bg-white border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  // ── Slider ───────────────────────────────────────────────────────
  const renderSlider = () => {
    const min = question.sliderConfig?.min ?? 0;
    const max = question.sliderConfig?.max ?? 100;
    const step = question.sliderConfig?.step ?? 1;
    const suffix = question.sliderConfig?.suffix ?? "";
    const val = currentAnswer !== undefined ? (currentAnswer as number) : 50;

    if (currentAnswer === undefined) handleSelect(50);

    return (
      <div className="flex flex-col items-center w-full max-w-md mx-auto pt-4 gap-4">
        {/* Big value display */}
        <span className="text-6xl font-bold text-cyan-600 tabular-nums">
          {val}{suffix}
        </span>

        {/* Track */}
        <div className="relative w-full">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={val}
            onChange={(e) => handleSelect(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer
                       bg-slate-200 accent-cyan-500
                       [&::-webkit-slider-thumb]:w-5
                       [&::-webkit-slider-thumb]:h-5
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-cyan-500
                       [&::-webkit-slider-thumb]:shadow-md"
          />
        </div>

        <div className="flex justify-between w-full text-xs font-semibold text-slate-400">
          <span>{min}%</span>
          <span>{max}%</span>
        </div>
      </div>
    );
  };

  // ── Icon-choice cards ────────────────────────────────────────────
  const renderIconChoice = () => (
    <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-3">
      {(question.options as { label: string; icon: string }[]).map((option) => {
        const isSelected = currentAnswer === option.label;
        const IconComponent = IconMap[option.icon] ?? Leaf;

        return (
          <button
            key={option.label}
            onClick={() => handleSelect(option.label)}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all
              flex-1 min-w-[80px] aspect-square sm:aspect-auto sm:h-28
              ${isSelected
                ? "bg-cyan-50 border-cyan-500 text-cyan-700 ring-2 ring-cyan-400/30"
                : "bg-white border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-800"
              }`}
          >
            <IconComponent className="h-8 w-8 mb-2.5" strokeWidth={1.5} />
            <span className="text-[10px] tracking-widest font-bold uppercase">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <QuizShell
      step={currentStep}
      total={totalSteps}
      title={question.title}
      subtitle={question.subtitle}
      canNext={canNext}
      onNext={handleNext}
      onBack={handleBack}
      isLast={isLast}
      accent="primary"
    >
      <div className="mt-6 w-full">
        {question.type === "single-choice" && renderSingleChoice()}
        {question.type === "grid-choice"   && renderGridChoice()}
        {question.type === "slider"        && renderSlider()}
        {question.type === "icon-choice"   && renderIconChoice()}
      </div>
    </QuizShell>
  );
}