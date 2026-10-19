import mongoose, { Schema, model, models } from "mongoose";
import  dbConnect  from "@/lib/db"; // Adjust path if your mongodb.ts is somewhere else!

// 1. Schema Definition
const blogSchema = new Schema(
  {
    post: {
      metadata: {
        slug: { type: String, required: true, index: true, unique: true },
        title: { type: String, required: true },
       contentType: {
  type: String,
  enum: ["pillar", "supporting", "standalone"],
  default: "standalone",   //Wherether pillar supporting article or standalone article
},
pillarSlug: {
  type: String,
  default: null,
  index: true,     //For a supporting article, stores the slug of its main pillar article.
},
relatedSlugs: {
  type: [String],
  default: [],  //Stores the slugs of other articles that are genuinely related and worth recommending.
},
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
      body: { type: Array, default: [] },   //MOngoose is not restricting each item into a specific structure . frontend is deciding how to show the paragraoh an dheading thise thigns okayownwards here .
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


const CARD_PROJECTION = {
  _id: 0,
  "post.metadata.slug": 1,
  "post.metadata.title": 1,
  "post.metadata.summary": 1,
  "post.metadata.category": 1,
  "post.metadata.publishDate": 1,
  "post.metadata.readTimeMinutes": 1,
  "post.metadata.featuredImage": 1,
};

function toCard(doc: any) {
  const m = doc?.post?.metadata ?? {};
  return {
    slug: m.slug as string,
    title: m.title as string,
    summary: (m.summary ?? "") as string,
    category: (m.category ?? "") as string,
    publishDate: (m.publishDate ?? "") as string,
    readTimeMinutes: (m.readTimeMinutes ?? 0) as number,
    image: (m.featuredImage?.url ?? "") as string,
    imageAlt: (m.featuredImage?.altText ?? m.title ?? "") as string,
  };
}

export type BlogCard = ReturnType<typeof toCard>;



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


  // Get several cards by slug in ONE query (using $in).
  // ❌ Slow way: loop and call getBySlug() 3 times = 3 DB trips.
  // ✅ Fast way: one query with $in.
  static async getCardsBySlugs(slugs: string[]): Promise<BlogCard[]> {
    if (!slugs.length) return [];
    await dbConnect();

    const docs = await BlogModel.find(
      { "post.metadata.slug": { $in: slugs } },
      CARD_PROJECTION
    )
      .lean() // plain JS objects (faster than full Mongoose documents)
      .exec();

    // $in does NOT keep order, so we re-order to match the slugs array
    // (so YOUR order in relatedSlugs is respected).
    const bySlug = new Map(docs.map((d: any) => [d.post.metadata.slug, toCard(d)]));
    return slugs.map((s) => bySlug.get(s)).filter(Boolean) as BlogCard[];
  }

  // All "supporting" articles that belong to a pillar (except the current one).
  static async getSupportingByPillar(
    pillarSlug: string,
    excludeSlug: string,
    limit = 4
  ): Promise<BlogCard[]> {
    await dbConnect();
    const docs = await BlogModel.find(
      {
        "post.metadata.pillarSlug": pillarSlug, // this field is indexed in your schema 👍
        "post.metadata.slug": { $ne: excludeSlug },
      },
      CARD_PROJECTION
    )
      .sort({ "post.metadata.publishDate": -1 })
      .limit(limit)
      .lean()
      .exec();
    return docs.map(toCard);
  }

  // Fallback: same-category articles (used when relatedSlugs is empty,
  // so the bottom section is never blank).
  static async getByCategory(
    category: string,
    excludeSlugs: string[],
    limit = 3
  ): Promise<BlogCard[]> {
    if (!category || limit <= 0) return [];
    await dbConnect();
    const docs = await BlogModel.find(
      {
        "post.metadata.category": category,
        "post.metadata.slug": { $nin: excludeSlugs },
      },
      CARD_PROJECTION
    )
      .sort({ "post.metadata.publishDate": -1 })
      .limit(limit)
      .lean()
      .exec();
    return docs.map(toCard);
  }

  // 🎯 ONE function the page calls. It decides what to show based on contentType.
  static async getRelatedBundle(m: any) {
    // ⚠️ IMPORTANT: .lean() SKIPS schema defaults!
    // Old posts in your DB may not have contentType at all,
    // so we default to "standalone" ourselves with ??
    const type: string = m.contentType ?? "standalone";
    const slug: string = m.slug;

    // ⚡ SPEED TRICK #2: Promise.all runs both queries AT THE SAME TIME
    // instead of one after another.
    const [sidebar, related] = await Promise.all([
      // Sidebar part (pillar logic)
      (async () => {
        if (type === "supporting" && m.pillarSlug) {
          const [pillarArr, siblings] = await Promise.all([
            this.getCardsBySlugs([m.pillarSlug]),
            this.getSupportingByPillar(m.pillarSlug, slug, 3),
          ]);
          return { pillar: pillarArr[0] ?? null, cluster: siblings };
        }
        if (type === "pillar") {
          return {
            pillar: null,
            cluster: await this.getSupportingByPillar(slug, slug, 4),
          };
        }
        return { pillar: null, cluster: [] as BlogCard[] };
      })(),

      // Bottom "recommended" part (relatedSlugs)
      this.getCardsBySlugs(
        (m.relatedSlugs ?? []).filter((s: string) => s !== slug).slice(0, 3)
      ),
    ]);

    // Fallback if the author didn't fill relatedSlugs (or only filled 1)
    let more = related;
    if (more.length < 3) {
      const exclude = [
        slug,
        ...(sidebar.pillar ? [sidebar.pillar.slug] : []),
        ...more.map((c) => c.slug),
      ];
      const fill = await this.getByCategory(m.category, exclude, 3 - more.length);
      more = [...more, ...fill];
    }

    return { pillar: sidebar.pillar, cluster: sidebar.cluster, more };
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



