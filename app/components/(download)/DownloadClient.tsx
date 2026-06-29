"use client";

import { FaDownload, FaEye } from "react-icons/fa";

export default function DownloadClient() {
  const resumeUrl = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Shivansh_Singh_Web_Developer_Resume.pdf"; // Descriptive file name for recruiters
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
      <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
        Professional Resume
      </h1>
      
      <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
        Review my tech stack, project history, and experience architecting fast platforms for clients across Saharanpur, Haridwar, and all over india.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Force instant file download */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
        >
          <FaDownload />
          Download PDF
        </button>

        {/* Let them read it in-browser without forcing a download path */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 rounded-full font-bold hover:scale-105 transition-all active:scale-95"
        >
          <FaEye />
          View In Browser
        </a>
      </div>

      <div className="mt-8 text-xs text-gray-500 bg-gray-900/40 px-4 py-2 rounded-md border border-gray-800/60">
        File details: <span className="text-gray-400 font-medium">~200KB</span> • Format: <span className="text-gray-400 font-medium">PDF Document</span>
      </div>
    </div>
  );
}