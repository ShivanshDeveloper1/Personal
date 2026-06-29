import mongoose, { Schema, model, models } from "mongoose";
import  dbConnect  from "@/lib/db"; // Adjust path if your mongodb.ts is somewhere else!

// 1. Schema Definition
const blogSchema = new Schema(
  {
    post: {
      metadata: {
        slug: { type: String, required: true, index: true, unique: true },
        title: { type: String, required: true },
        category: String,
        tags: { type: [String], default: [] },
        publishDate: String,
        readTimeMinutes: Number,
        featuredImage: {
          url: String,
          altText: String,
        },
        summary: String,

        // 👇 NEW: Author Field (Safe for old posts too)
        author: {
          name: { type: String, default: "Shivansh" },
          url: { type: String, default: "https://saharanpurprice.in/about" },
        },
      },
      body: { type: Array, default: [] },
    },
  },
  { timestamps: true, strict: false },
);


// Mongoose pluralizes names automatically.
// 2. Model Singleton
const BlogModel =
  models.Portfolio || model("Portfolio", blogSchema, "Portfolio");

// Here how my blog is workign and going to work okay in this eapplication
// UI → API Route → Blog Service → MongoDB    This eis the weay

export class Blog {
  static async save(blogData: any | any[]) {
    await dbConnect();
    if (Array.isArray(blogData)) {
      await BlogModel.insertMany(blogData);
    } else {
      await BlogModel.create(blogData);
    }
    return { success: true };
  }

static async list(limit = 8, skip = 0) {
  await dbConnect();

  const count = await BlogModel.countDocuments();
  // console.log("Total docs in collection:", count);

  const results = await BlogModel.find({})
    .sort({ "post.metadata.publishDate": -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();

  // console.log("Raw data from DB:", results);

  return results.map(serializeDoc);
}

  static async getBySlug(slug: string) {
    await dbConnect();
    const result = await BlogModel.findOne({
      "post.metadata.slug": slug,
    })
      .lean()
      .exec();

    if (!result) return null;
    return serializeDoc(result);
  }

  // ✅ ADD THIS
  static async deleteBySlug(slug: string) {
    await dbConnect();
    return await BlogModel.findOneAndDelete({
      "post.metadata.slug": slug,
    });
  }
}
function serializeDoc(doc: any) {
  return {
    ...doc,
    _id: doc._id.toString(),
    slug: doc.post?.metadata?.slug || null,
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : null,
    updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString() : null,
  };
}
