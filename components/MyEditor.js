// components/MyEditor.js
"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

// Import all the tools you need
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image"; // 👈 Import ImageTool

const MyEditor = ({ setEditorInstance }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs-container",
        tools: {
          header: Header,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true, // Allows for bold, italic, etc.
          },
          image: {
            // 👈 Add the ImageTool configuration
            class: ImageTool,
            config: {
              // This tells the editor to send the image to your backend
              uploader: {
                async uploadByFile(file) {
                  const formData = new FormData();
                  formData.append("image", file);

                  // Send the file to your API route
                  const response = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                  });

                  const result = await response.json();

                  // Editor.js expects a specific response format
                  return {
                    success: 1,
                    file: {
                      url: result.url,
                    },
                  };
                },
              },
            },
          },
        },
        placeholder: "Start writing your amazing blog post!",
      });
      editorRef.current = editor;
      setEditorInstance(editor);
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [setEditorInstance]);

  return (
    <div
      id="editorjs-container"
      style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
    />
  );
};

export default MyEditor;
