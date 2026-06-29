// app/admin/create-post/page.js

"use client";

import { useState } from "react";
import MyEditor from "@/components/MyEditor"; // Adjust path if needed

export default function CreatePostPage() {
  // State for the metadata fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [slug, setSlug] = useState("");

  // State to hold the Editor.js instance
  const [editorInstance, setEditorInstance] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editorInstance) {
      alert("Editor is not ready yet.");
      return;
    }

    // 1. Get the content from Editor.js
    const editorData = await editorInstance.save();

    // 2. Construct the full payload that matches your schema
    const payload = {
      post: {
        metadata: {
          title,
          category,
          summary,
          slug,
        },
        body: editorData, // This is the JSON output from Editor.js
      },
    };

    // 3. Send it to your API
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const result = await response.json();
      // console.log("Success:", result);
      alert("Blog post created successfully!");
      // Optionally, redirect the user or clear the form
    } catch (error) {
      // console.error("Failed to create post:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for your metadata */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Slug (URL-friendly version of title)</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", minHeight: "80px" }}
          />
        </div>

        {/* Your Editor component */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Post Content</label>
          <MyEditor setEditorInstance={setEditorInstance} />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Create Post
        </button>
      </form>
    </div>
  );
}
