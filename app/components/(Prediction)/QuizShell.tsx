import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
  canNext: boolean;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  children: ReactNode;
  accent?: "primary" | "accent";
}

export default function QuizShell({
  step, total, title, subtitle, canNext, onNext, onBack, isLast, children,
}: Props) {
  const pct = ((step + 1) / total) * 100;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-28 pb-32 sm:pb-16 text-slate-900">

      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-widest text-slate-400 font-semibold">
          <span>Question {step + 1} of {total}</span>
          <span>{Math.round(pct)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full bg-cyan-500"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            style={{ boxShadow: "0 0 10px rgba(6, 182, 212, 0.4)" }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-8">{children}</div>
        </motion.div>
      </AnimatePresence>

      {/* Controls (Desktop) */}
      <div className="mt-6 hidden sm:flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm
                     text-slate-400 hover:text-slate-700 hover:bg-slate-100
                     transition disabled:opacity-30 font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <button
          disabled={!canNext}
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400
                     text-white font-semibold px-6 py-3 rounded-full shadow-md
                     shadow-cyan-200 transition
                     disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {isLast ? "See My Result" : "Next"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Controls (Mobile Sticky) */}
      <div className="fixed inset-x-0 bottom-0 z-30 sm:hidden">
        <div className="bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]
                        px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            disabled={step === 0}
            className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600
                       px-4 py-3 transition disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            disabled={!canNext}
            onClick={onNext}
            className="flex-1 flex justify-center items-center gap-2
                       bg-cyan-500 hover:bg-cyan-400 text-white font-semibold
                       px-6 py-3 rounded-full shadow-md shadow-cyan-200
                       transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLast ? "See Result" : "Next"} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  );
}