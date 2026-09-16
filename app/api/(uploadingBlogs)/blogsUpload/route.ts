import { NextResponse } from "next/server";
import { Blog } from "@/models/Blog";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await Blog.save(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}