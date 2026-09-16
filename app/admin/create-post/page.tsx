"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaUpload,
  FaPlus,
  FaTrash,
  FaArrowUp,
  FaArrowDown,
  FaYoutube,
  FaInstagram,
  FaFilePdf,
  FaHeading,
  FaParagraph,
  FaList,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

type ContentBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "youtube"; videoId: string }
  | { type: "instagram"; videoId: string }
  | { type: "pdf"; title: string; url: string };

export default function AdminCreateBlog() {
  const router = useRouter();

  // --- METADATA STATE ---
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Real Estate");
  const [tagsInput, setTagsInput] = useState("");
  const [publishDate, setPublishDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [readTimeMinutes, setReadTimeMinutes] = useState(5);
  const [summary, setSummary] = useState("");
  const [authorName, setAuthorName] = useState("Shivansh");
  const [authorUrl, setAuthorUrl] = useState(
    "https://saharanpurprice.in/about"
  );

  // Featured Image
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [featuredImageAlt, setFeaturedImageAlt] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  // --- DYNAMIC BODY BLOCKS STATE ---
  const [bodyBlocks, setBodyBlocks] = useState<ContentBlock[]>([]);
  const [submitting, setSubmitting] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")
    );
  };

  // --- CLOUDINARY UPLOAD HANDLER ---
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        setFeaturedImageUrl(data.url);
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      setUploadingImage(false);
    }
  };

  // --- BLOCK MANAGEMENT ---
  const addBlock = (type: ContentBlock["type"]) => {
    switch (type) {
      case "heading":
        setBodyBlocks((prev) => [...prev, { type: "heading", level: 2, text: "" }]);
        break;
      case "paragraph":
        setBodyBlocks((prev) => [...prev, { type: "paragraph", text: "" }]);
        break;
      case "list":
        setBodyBlocks((prev) => [...prev, { type: "list", items: [""] }]);
        break;
      case "youtube":
        setBodyBlocks((prev) => [...prev, { type: "youtube", videoId: "" }]);
        break;
      case "instagram":
        setBodyBlocks((prev) => [...prev, { type: "instagram", videoId: "" }]);
        break;
      case "pdf":
        setBodyBlocks((prev) => [...prev, { type: "pdf", title: "", url: "" }]);
        break;
    }
  };

  const updateBlock = (index: number, updatedBlock: ContentBlock) => {
    const newBlocks = [...bodyBlocks];
    newBlocks[index] = updatedBlock;
    setBodyBlocks(newBlocks);
  };

  const removeBlock = (index: number) => {
    setBodyBlocks((prev) => prev.filter((_, i) => i !== index));
  };

  const moveBlock = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === bodyBlocks.length - 1)
    )
      return;

    const newBlocks = [...bodyBlocks];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[targetIndex];
    newBlocks[targetIndex] = temp;
    setBodyBlocks(newBlocks);
  };

  // --- FORM SUBMIT ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !featuredImageUrl) {
      alert("Please fill in Title, Slug, and upload a Featured Image!");
      return;
    }

    setSubmitting(true);

    const tagsArray = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // Exact structure expected by your Mongoose Schema
    const payload = {
      post: {
        metadata: {
          slug,
          title,
          category,
          tags: tagsArray,
          publishDate,
          readTimeMinutes: Number(readTimeMinutes),
          featuredImage: {
            url: featuredImageUrl,
            altText: featuredImageAlt || title,
          },
          summary,
          author: {
            name: authorName,
            url: authorUrl,
          },
        },
        body: bodyBlocks,
      },
    };

    try {
      const res = await fetch("/api/blogsUpload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        alert("Blog published successfully!");
        router.push(`/blogs/${slug}`);
      } else {
        alert("Error publishing: " + data.error);
      }
    } catch (err) {
      alert("Failed to connect to backend server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-4 sm:px-6 md:px-12 py-16 sm:py-24 relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Background Subtle Radial Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-800/80 pb-8 backdrop-blur-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
              Content Management System
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 tracking-tight">
              Blog Publishing Dashboard
            </h1>
            <p className="text-slate-400 text-sm mt-1.5 font-medium">
              Create and manage SEO-optimized articles seamlessly linked to MongoDB
            </p>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
          >
            {submitting ? (
              <>
                <FaSpinner className="animate-spin text-base" /> Publishing...
              </>
            ) : (
              "Publish Post"
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* SECTION 1: METADATA */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl shadow-black/40 hover:border-slate-700/80 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-xs border border-cyan-500/20">
                01
              </span>
              <h2 className="text-lg font-bold text-slate-100 tracking-wide">
                Article Metadata & SEO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Title <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  required
                  placeholder="e.g. Best Properties in Saharanpur"
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  URL Slug <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  placeholder="auto-generated-slug"
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-cyan-300/90 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Saharanpur, Real Estate, Construction"
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Publish Date
                </label>
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Read Time (Minutes)
                </label>
                <input
                  type="number"
                  value={readTimeMinutes}
                  onChange={(e) => setReadTimeMinutes(Number(e.target.value))}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                SEO Summary <span className="text-cyan-400">*</span>
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={3}
                placeholder="Brief meta description for search engines..."
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium leading-relaxed"
              />
            </div>

            {/* Author */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800/80">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Author URL
                </label>
                <input
                  type="text"
                  value={authorUrl}
                  onChange={(e) => setAuthorUrl(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: FEATURED IMAGE */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl shadow-black/40 hover:border-slate-700/80 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-xs border border-cyan-500/20">
                02
              </span>
              <h2 className="text-lg font-bold text-slate-100 tracking-wide">
                Featured Image Media
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Upload Image (Cloudinary)
                </label>
                <div className="relative border-2 border-dashed border-slate-700 hover:border-cyan-400/80 bg-slate-950/50 hover:bg-slate-950/80 rounded-2xl p-8 text-center transition-all duration-300 group cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="p-3.5 rounded-full bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      {uploadingImage ? (
                        <FaSpinner className="animate-spin text-xl" />
                      ) : (
                        <FaUpload className="text-xl" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {uploadingImage
                          ? "Uploading to Cloudinary..."
                          : "Click or drag image to upload"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        SVG, PNG, JPG or WEBP (Max 10MB)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={featuredImageAlt}
                    onChange={(e) => setFeaturedImageAlt(e.target.value)}
                    placeholder="Descriptive alt text for accessibility & SEO"
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Image Preview
                </label>
                {featuredImageUrl ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/80 group shadow-lg">
                    <Image
                      src={featuredImageUrl}
                      alt="Featured"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                      <FaCheckCircle size={12} /> Uploaded
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-slate-950/60 rounded-2xl flex flex-col items-center justify-center border border-slate-800/80 text-slate-500 space-y-2">
                    <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center bg-slate-900">
                      <FaUpload size={14} className="text-slate-600" />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      No featured image uploaded yet
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 3: DYNAMIC BODY BUILDER */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl shadow-black/40 hover:border-slate-700/80 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-xs border border-cyan-500/20">
                03
              </span>
              <h2 className="text-lg font-bold text-slate-100 tracking-wide">
                Article Body Content Blocks
              </h2>
            </div>

            {/* BLOCK CONTROLS BAR */}
            <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1 mb-1">
                Insert Block Element
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => addBlock("heading")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 border border-slate-700/50"
                >
                  <FaHeading className="text-cyan-400 group-hover:text-slate-950" /> Add Heading
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("paragraph")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 border border-slate-700/50"
                >
                  <FaParagraph className="text-cyan-400" /> Add Paragraph
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("list")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 border border-slate-700/50"
                >
                  <FaList className="text-cyan-400" /> Add List / FAQ
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("youtube")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-red-500/90 hover:text-white text-slate-200 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 border border-slate-700/50"
                >
                  <FaYoutube className="text-red-400" /> Add YouTube
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("instagram")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-pink-500/90 hover:text-white text-slate-200 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 border border-slate-700/50"
                >
                  <FaInstagram className="text-pink-400" /> Add Instagram
                </button>
                <button
                  type="button"
                  onClick={() => addBlock("pdf")}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/90 hover:bg-sky-500 hover:text-slate-950 text-slate-200 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 border border-slate-700/50"
                >
                  <FaFilePdf className="text-sky-400" /> Add PDF Button
                </button>
              </div>
            </div>

            {/* BLOCK LIST RENDERER */}
            <div className="space-y-4 pt-2">
              {bodyBlocks.length === 0 && (
                <div className="text-center py-12 px-4 rounded-2xl bg-slate-950/40 border border-dashed border-slate-800 text-slate-500 space-y-2">
                  <p className="text-sm font-medium">
                    No content blocks added yet.
                  </p>
                  <p className="text-xs text-slate-600">
                    Use the toolbar controls above to build structured article content.
                  </p>
                </div>
              )}

              {bodyBlocks.map((block, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-950/90 rounded-2xl border border-slate-800/90 hover:border-slate-700 space-y-4 transition-all duration-200 shadow-md"
                >
                  <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      Block #{index + 1}: {block.type}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => moveBlock(index, "up")}
                        disabled={index === 0}
                        className="p-1.5 hover:bg-slate-800 hover:text-cyan-400 text-slate-400 rounded-lg transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                        title="Move Up"
                      >
                        <FaArrowUp size={12} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(index, "down")}
                        disabled={index === bodyBlocks.length - 1}
                        className="p-1.5 hover:bg-slate-800 hover:text-cyan-400 text-slate-400 rounded-lg transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                        title="Move Down"
                      >
                        <FaArrowDown size={12} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeBlock(index)}
                        className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition ml-1"
                        title="Remove Block"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </div>

                  {/* HEADING BLOCK */}
                  {block.type === "heading" && (
                    <div className="flex gap-3">
                      <select
                        value={block.level}
                        onChange={(e) =>
                          updateBlock(index, {
                            ...block,
                            level: Number(e.target.value),
                          })
                        }
                        className="bg-slate-900 border border-slate-800 text-cyan-400 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-cyan-500 cursor-pointer"
                      >
                        <option value={2}>H2</option>
                        <option value={3}>H3</option>
                        <option value={4}>H4</option>
                      </select>
                      <input
                        type="text"
                        value={block.text}
                        onChange={(e) =>
                          updateBlock(index, {
                            ...block,
                            text: e.target.value,
                          })
                        }
                        placeholder="Heading text..."
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-semibold"
                      />
                    </div>
                  )}

                  {/* PARAGRAPH BLOCK */}
                  {block.type === "paragraph" && (
                    <textarea
                      value={block.text}
                      onChange={(e) =>
                        updateBlock(index, { ...block, text: e.target.value })
                      }
                      rows={4}
                      placeholder="Supports **bold text** and [Link Title](https://link.com)..."
                      className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 leading-relaxed font-normal"
                    />
                  )}

                  {/* LIST BLOCK */}
                  {block.type === "list" && (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-400">
                        Format FAQ items like: <span className="font-mono text-cyan-300">**What is price?** Price starts at ₹50 Lakhs.</span>
                      </p>
                      {block.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const updatedItems = [...block.items];
                              updatedItems[itemIdx] = e.target.value;
                              updateBlock(index, {
                                ...block,
                                items: updatedItems,
                              });
                            }}
                            placeholder={`List item #${itemIdx + 1}`}
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updatedItems = block.items.filter(
                                (_, i) => i !== itemIdx
                              );
                              updateBlock(index, {
                                ...block,
                                items: updatedItems,
                              });
                            }}
                            className="p-2 text-slate-500 hover:text-red-400 transition"
                          >
                            <FaTrash size={12} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          updateBlock(index, {
                            ...block,
                            items: [...block.items, ""],
                          })
                        }
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 mt-1 transition"
                      >
                        <FaPlus size={10} /> Add List Item
                      </button>
                    </div>
                  )}

                  {/* YOUTUBE BLOCK */}
                  {block.type === "youtube" && (
                    <div>
                      <input
                        type="text"
                        value={block.videoId}
                        onChange={(e) =>
                          updateBlock(index, {
                            ...block,
                            videoId: e.target.value,
                          })
                        }
                        placeholder="YouTube Video ID (e.g., dQw4w9WgXcQ)"
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  )}

                  {/* INSTAGRAM BLOCK */}
                  {block.type === "instagram" && (
                    <div>
                      <input
                        type="text"
                        value={block.videoId}
                        onChange={(e) =>
                          updateBlock(index, {
                            ...block,
                            videoId: e.target.value,
                          })
                        }
                        placeholder="Instagram Post ID (e.g., C-x9yZ_123)"
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  )}

                  {/* PDF BLOCK */}
                  {block.type === "pdf" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={block.title}
                        onChange={(e) =>
                          updateBlock(index, {
                            ...block,
                            title: e.target.value,
                          })
                        }
                        placeholder="PDF Button Title (e.g. Download Brochure)"
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                      <input
                        type="text"
                        value={block.url}
                        onChange={(e) =>
                          updateBlock(index, {
                            ...block,
                            url: e.target.value,
                          })
                        }
                        placeholder="PDF Download URL"
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}