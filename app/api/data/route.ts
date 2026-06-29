import { NextResponse } from "next/server";
import {Blog } from "@/models/Blog";
import dbConnect from "@/lib/db";
import data from "../../../contents/data.json";

export async function POST() {
  try {
    // 1️⃣ Connect to MongoDB
    await dbConnect();

    // 2️⃣ Delete all existing blogs
    await Blog.deleteMany({});
    // console.log("🗑️ All old blogs deleted.");

    // 3️⃣ Insert new blogs (JSON already includes slug)
    const result = await Blog.insertMany(data);
    // console.log(`✅ ${result.length} new blogs inserted.`);

    // 4️⃣ Return response
    return NextResponse.json({
      success: true,
      deletedOld: true,
      insertedCount: result.length,
      message: `✅ All old blogs deleted and ${result.length} new blogs added successfully.`,
    });
  } catch (error: any) {
    console.error("Error resetting blogs:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
