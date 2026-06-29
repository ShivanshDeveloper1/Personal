import dbConnect from "@/lib/db";

import Blogs from "./Blogs";
import { Blog } from "@/models/Blog";


export const revalidate = 259200;

async function getBlogs() {
  await dbConnect();

  const blogs = await Blog.list(6, 0);

  return blogs;
}

export default async function BlogsWrapper() {
  const blogs = await getBlogs();
  return <Blogs content={blogs} />;
}