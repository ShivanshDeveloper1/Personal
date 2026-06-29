// app/api/posts/route.js
import { NextResponse } from "next/server";
import { Blog } from "@/models/Blog"; // Note: you don't even need dbConnect here anymore because Blog.save() handles it!

export async function POST(request) {
  try {
    const data = await request.json();

    // 👉 Use your custom static method directly!
    const result = await Blog.save(data);

    return NextResponse.json(
      { message: "Blog post created successfully!", success: result.success },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create blog post.", error: error.message },
      { status: 500 }
    );
  }
}