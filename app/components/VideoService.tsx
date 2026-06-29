"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaVideo,
  FaRocket,
  FaBullhorn,
  FaVolumeUp,
  FaVolumeMute,
  FaTimes
} from "react-icons/fa";

// Import your fixed data from the new file
import { videos } from "@/data/VideoData";

const VideoCard = ({ video, onOpenModal }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => onOpenModal(video)}
      className="relative w-[260px] md:w-[280px] h-[450px] md:h-[500px] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl flex-shrink-0 group snap-center select-none cursor-pointer"
    >
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        muted={true}
        loop
        playsInline
        preload="metadata"
        draggable={false}
        onMouseOver={(e) => e.target.play()}
        onMouseLeave={(e) => {
          e.target.pause();
          e.target.currentTime = 0;
        }}
      />

      <button
        onClick={toggleAudio}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-black dark:text-white hover:text-white hover:bg-red-600 dark:hover:bg-red-600 transition-colors border border-black/10 dark:border-white/20"
      >
        {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
      </button>

      {/* Kept dark overlay for video text readability */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <div className="px-2 py-1 rounded bg-red-600 text-[10px] font-bold uppercase tracking-wider text-white">
            {video.tag}
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
          {video.title}
        </h3>
        <p className="text-xs text-gray-300 mt-1">Client Campaign</p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <FaPlay className="ml-1 text-white" />
      </div>
    </motion.div>
  );
};

const VideoService = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleContactClick = () => {
    window.open(
      "https://wa.me/917618550475?text=Hi%20Shivansh,%20I%20am%20interested%20in%20Video%20Marketing%20services.",
      "_blank"
    );
  };

  return (
    <section className="py-12 md:py-24 bg-light dark:bg-dark text-text dark:text-white relative border-t border-gray-200 dark:border-gray-800 overflow-hidden font-sans transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-red-600/10 dark:bg-red-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 mb-8 md:mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-bold mb-4 md:mb-6 uppercase tracking-wider">
          <FaBullhorn /> <span>Complete Growth Solution</span>
        </div>

        <h2 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
          We Don't Just Build Websites. <br className="hidden md:block" />
          We Make Them{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Go Viral.
          </span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
          A great website is useless if no one sees it.
          <span className="text-black dark:text-white font-medium"> Our agency </span>
          provides professional{" "}
          <strong className="text-red-500 dark:text-red-400">Video Editing</strong> and{" "}
          <strong className="text-orange-500 dark:text-orange-400">Ad Marketing</strong> services
          designed to stop the scroll.
        </p>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="w-full overflow-x-auto pb-8 md:pb-12 hide-scrollbar cursor-grab active:cursor-grabbing relative z-10 snap-x snap-mandatory"
      >
        <div className="flex gap-4 md:gap-6 px-4 md:px-20 w-max">
          <div className="w-[260px] md:w-[280px] h-[450px] md:h-[500px] flex flex-col justify-center px-6 border-l-2 border-red-600/30 dark:border-red-600/50 snap-center select-none">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black dark:text-white">
              Our<br />Recent<br />Work
            </h3>
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              Swipe to see how we help brands stand out.
            </p>
            <FaArrowRight className="mt-4 text-red-500 animate-pulse" />
          </div>

          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onOpenModal={setSelectedVideo}
            />
          ))}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-[260px] md:w-[280px] h-[450px] md:h-[500px] bg-gradient-to-br from-red-50 to-white dark:from-red-900 dark:to-black rounded-3xl border border-red-200 dark:border-red-700/50 flex flex-col items-center justify-center p-6 md:p-8 text-center flex-shrink-0 snap-center select-none"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.3)] dark:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
              <FaRocket className="text-xl md:text-2xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-black dark:text-white">
              Want This For Your Brand?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
              Get our <strong>"Growth Bundle"</strong>: A High-Speed Website + 3 Viral Video Ads.
            </p>
            <button
              onClick={handleContactClick}
              className="w-full bg-black text-white dark:bg-white dark:text-black font-bold py-3 md:py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base"
            >
              Book Strategy Call
            </button>
          </motion.div>
        </div>
      </div>

      {/* FULL VIEW MODAL - Kept dark for theater mode experience */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-red-600 p-3 rounded-full transition-colors z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <FaTimes size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[90vh] aspect-[9/16] max-w-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src={selectedVideo.src}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const FaArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default VideoService;