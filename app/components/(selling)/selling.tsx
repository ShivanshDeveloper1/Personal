"use client"

import React, { useState, useRef } from 'react';
import { ShieldCheck, Zap, Download, AlertCircle, Lock, FileText, CheckCircle, Sparkles, BookOpen, Star, Timer } from 'lucide-react';

const SellingPage = () => {
  const [showQR, setShowQR] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  
  const pdfUrl = "/exam-paper.pdf"; 
  const downloadLinkRef = useRef(null);

  const handleVerify = () => {
    // Rule: UPI/UTR IDs are typically 12-digit numbers
    const utrRegex = /^\d{12}$/;
    const input = transactionId.trim();

    if (utrRegex.test(input)) {
      setIsPaid(true);
      setShowQR(false);
      
      setTimeout(() => {
        if (downloadLinkRef.current) {
          downloadLinkRef.current.click();
        }
      }, 500);
      
    } else {
      // Direct feedback to the user on what is wrong
      if (input.length !== 12) {
        alert("Verification Failed: Transaction ID (UTR) must be exactly 12 digits.");
      } else {
        alert("Verification Failed: Transaction ID must contain only numbers.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans pb-24 selection:bg-indigo-200">
      <a ref={downloadLinkRef} href={pdfUrl} download="Last_Minute_Exam_Questions.pdf" className="hidden">Download</a>

      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white text-center py-3 px-4 shadow-lg sticky top-0 z-50">
        <p className="text-sm md:text-base font-bold flex items-center justify-center gap-2 tracking-wide">
          <Timer size={18} className="animate-pulse" /> 
          FLASH SALE: OFFER ENDS IN 4 HOURS - BE READY FOR TOMORROW!
        </p>
      </div>

      <header   id="buy-paper" className="max-w-5xl mx-auto pt-16 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 bg-white text-indigo-700 px-5 py-2 rounded-full text-sm font-bold mb-8 border border-indigo-100 shadow-sm transition hover:shadow-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
          </span>
          1,204 Students bought this today
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.1]">
          The Ultimate <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          NEET
          </span> Cheat Sheet
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
          One single, high-yield PDF packed with the exact questions you need. Stop guessing and start scoring.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['⚛️ Physics', '🧪 Chemistry', '🌿 Botany', '🦁 Zoology', '🧠 Top 100 MCQs'].map((subject, idx) => (
            <span key={idx} className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-xl text-slate-700 font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform duration-200">
              {subject}
            </span>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-1 shadow-2xl shadow-indigo-500/10 max-w-md mx-auto mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="bg-white rounded-[23px] p-8 relative h-full w-full border border-slate-100">
            <div className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={12} /> Limited Time
            </div>
            
            <p className="text-slate-400 line-through text-xl font-medium mt-2">₹150</p>
            <div className="flex justify-center items-center gap-3 mb-8 mt-1">
              <span className="text-7xl font-black text-slate-900 tracking-tighter">₹29</span>
              <span className="bg-green-500/10 text-green-600 text-sm font-black px-3 py-1.5 rounded-lg border border-green-200">70% OFF</span>
            </div>
            
            <button 
              onClick={() => {
                if(!isPaid) setShowQR(true);
                else downloadLinkRef.current?.click();
              }}
              className={`w-full font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-3 text-lg ${
                isPaid 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30" 
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-500/30"
              }`}
            >
              {isPaid ? (
                <><Download size={24} /> DOWNLOAD MASTER PDF</>
              ) : (
                <><Zap size={24} className="fill-current" /> UNLOCK INSTANT ACCESS NOW</>
              )}
            </button>
            <p className="text-xs text-slate-500 mt-4 font-medium flex items-center justify-center gap-1">
              <ShieldCheck size={14} className="text-green-500"/> Secure SSL Encrypted Checkout
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-6 px-2">
          <div>
            <h2 className="text-2xl font-black flex items-center gap-2 text-slate-900">
              <BookOpen className="text-indigo-600" size={28} /> Inside The PDF
            </h2>
            <p className="text-slate-500 text-sm mt-1">Preview of the high-yield questions waiting for you.</p>
          </div>
          {isPaid && (
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-sm">
              <CheckCircle size={18}/> Access Granted
            </span>
          )}
        </div>

        <div className="relative border border-slate-200 rounded-3xl overflow-hidden bg-slate-50 shadow-2xl h-[700px] flex flex-col ring-1 ring-black/5">
          <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center z-20">
            <div className="flex space-x-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-500/20"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-500/20"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-400 border border-green-500/20"></div>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-md">
              <Lock size={12} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-600 font-mono">NEET_Final_Master_Bank.pdf</span>
            </div>
            <div className="w-16"></div> 
          </div>

          <div className="relative flex-1 bg-slate-200 overflow-hidden">
            {!isPaid && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/30 backdrop-blur-[2px]">
                <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl text-center shadow-2xl max-w-md mx-4 border border-white/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                  
                  <div className="bg-indigo-50 p-5 rounded-full inline-block mb-6 ring-8 ring-indigo-50/50">
                    <Lock size={48} className="text-indigo-600" />
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-slate-900">Premium Content</h3>
                  <p className="text-slate-600 mb-8 text-base leading-relaxed font-medium">
                    This masterpiece document contains the highest probability questions for <b>Physics, Chemistry, Botany, and Zoology</b>. <br/><br/> Complete the ₹29 payment to instantly unblur and download.
                  </p>
                  <button 
                    onClick={() => setShowQR(true)}
                    className="bg-slate-900 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold w-full transition-all duration-300 shadow-xl shadow-slate-900/20 flex justify-center items-center gap-2 text-lg group"
                  >
                    Unlock Full PDF <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            )}
            
            <iframe 
              src={`/NEET_QuestionPaper.pdf`}
              className={`w-full h-full transition-all duration-1000 ease-out ${
                !isPaid ? 'blur-[12px] scale-105 pointer-events-none select-none opacity-50' : 'blur-0 scale-100 opacity-100'
              }`}
            />
          </div>
        </div>
      </section>

      {showQR && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-6 md:p-10 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-300 border border-slate-100">
            <button 
                onClick={() => setShowQR(false)}
                className="absolute top-6 right-6 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors border border-slate-200"
            >✕</button>
            
            <div className="text-center mb-8 mt-2">
              <h2 className="text-3xl font-black mb-2 text-slate-900">Pay ₹29</h2>
              <p className="text-slate-500 font-medium">Scan with any UPI app to unlock</p>
            </div>
            
            <div className="bg-white rounded-3xl p-4 border-2 border-dashed border-indigo-200 flex justify-center mb-8 shadow-inner relative group">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
              <img
                src="/UPI.jpeg"
                alt="UPI QR Code"
                className="w-56 h-56 object-contain rounded-2xl mix-blend-multiply"
              />
            </div>

            <div className="space-y-5">
              <div className="bg-indigo-50 p-4 rounded-2xl flex gap-3 border border-indigo-100 items-start">
                <AlertCircle className="text-indigo-600 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-indigo-900 font-medium leading-snug">
                  Payment done? Enter your <b>12-digit UTR / Transaction ID</b> below to grant instant access.
                </p>
              </div>

              <input 
                type="text" 
                placeholder="e.g., 312345678901"
                className="w-full border-2 border-slate-200 rounded-2xl p-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-800 font-bold tracking-wide placeholder:font-normal placeholder:text-slate-400"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />

              <button 
                onClick={handleVerify}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-indigo-600 transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-slate-900/20 flex justify-center items-center gap-2 text-lg"
              >
                <CheckCircle size={22} /> VERIFY & UNLOCK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-8 mt-20 text-slate-400 pb-10 border-t border-slate-200 pt-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><ShieldCheck size={20} className="text-indigo-400"/> 100% Secure Checkout</div>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><CheckCircle size={20} className="text-emerald-400"/> Instant PDF Access</div>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><Star size={20} className="text-amber-400"/> Expert Curated</div>
      </div>
    </div>
  );
};

export default SellingPage;