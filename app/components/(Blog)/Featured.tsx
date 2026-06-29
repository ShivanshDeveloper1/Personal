"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; // 1. Import Next.js Image

// --- HELPER FUNCTION: Simplified ---
// We just need to make sure the path starts with / so it looks in the public folder
const getImagePath = (path: string) => {
  if (!path) return "/main.png"; // Default placeholder in public folder
  if (path.startsWith("http")) return path; // Use full URL if external
  
  // Ensure the path starts with / and remove any leading dots
  const cleanPath = path.replace(/^\.+/, ""); 
  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
};

interface FeaturedProps {
  initialBlogs: any[];
}

export const Featured = ({ initialBlogs = [] }: FeaturedProps) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [skip, setSkip] = useState(8);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreBlogs = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const res = await fetch(`/api/blogs?limit=8&skip=${skip}`);
    const newBlogs = await res.json();

    if (newBlogs.length < 8) {
      setHasMore(false);
    } else {
      setBlogs((prev) => [...prev, ...newBlogs]);
      setSkip((prev) => prev + 8);
    }
    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <main className="min-h-screen   py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Featured Posts
          </h1>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Hand-picked insights and guides to boost your real estate journey
          </p>
        </div>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((cur , index) => (
            <motion.div
             key={`${cur.post.metadata.slug}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Link
                href={`/blogs/${encodeURIComponent(cur.post.metadata.slug)}`}
                className="block h-full bg-[#111827] border border-gray-800/60 rounded-2xl overflow-hidden hover:border-cyan-400/40 shadow-md hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* --- IMAGE FIX: Using Next.js Image component --- */}
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={getImagePath(cur.post.metadata.featuredImage.url)}
                    alt={cur.post.metadata.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col gap-2">
                  <p className="text-cyan-400 font-medium text-sm">
                    {cur.post.metadata.category}
                  </p>
                  <h2 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 leading-snug">
                    {cur.post.metadata.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {cur.post.metadata.publishDate} &bull;{" "}
                    {cur.post.metadata.readTimeMinutes} min read
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        <div className="mt-16 text-center">
          {hasMore && (
            <button
              onClick={loadMoreBlogs}
              disabled={loading}
              className="text-white font-semibold py-3 px-8 bg-transparent border border-gray-700 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-base"
            >
              {loading ? "Loading..." : "Explore More Articles"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Featured;