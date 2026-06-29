import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error("❌ Please define MONGO_URI in environment variables");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// @ts-ignore
let cached: MongooseCache = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}



export default async function dbConnect() {
  // console.log("Trying to connect to MongoDB...");
  // console.log("Current DB:", mongoose.connection.db?.databaseName);

  if (cached.conn) {
    // console.log("Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    // console.log("Creating new connection...");
    // console.log("URI:", MONGODB_URI);

    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "portfolio",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;

  // console.log("✅ Connected to DB:", cached.conn.connection.name);
  // console.log("Collections:", Object.keys(cached.conn.connection.collections));

  return cached.conn;
}