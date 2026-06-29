"use client";

import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function Blogs({ content = [] }: { content: any[] }) {
  // ✨ Helper: shorten long text safely
  const truncateText = (text = "", limit = 12) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
    /* Moved background here so it fills the whole section width */
    <section className="py-20 bg-white dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {content.slice(0, 6).map((blog, index) => (
            <motion.article
              key={index}
              /* Updated card background to pop against the gray-900/80 gradient */
              className="bg-white dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-white/5"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <Link href={`/blogs/${encodeURIComponent(blog.post.metadata.slug)}`}>
                <motion.h3
                  className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {truncateText(blog.post.metadata.title, 10)}
                </motion.h3>
              </Link>

              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {truncateText(
                  blog.post.metadata.summary ||
                    blog.excerpt ||
                    "No description available.",
                  20
                )}
              </motion.p>

              <motion.div
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-500 space-x-4 border-t border-gray-100 dark:border-white/5 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="flex items-center hover:text-blue-500 transition-colors cursor-default">
                  <FaCalendarAlt className="mr-2" />
                  {new Date(blog.post.metadata.publishDate).toLocaleDateString()}
                </span>

                <span className="flex items-center hover:text-blue-500 transition-colors cursor-default">
                  <FaClock className="mr-2" />
                  {blog.post.metadata.readTimeMinutes} min read
                </span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/blogs"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-blue-600/20"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}