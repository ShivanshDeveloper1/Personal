import React, { Suspense } from "react";

import { Blog } from "@/models/Blog"; // Import your DB logic
import Featured from "../components/(Blog)/Featured";
import HomePage from "../components/(Blog)/Home";

// Revalidate data every hour (ISR)

export const metadata = {
 title: "Shivansh Singh Blog | Web Development, Next.js & SEO Insights",
  description:
    "Explore web development tutorials, Next.js tips, SEO strategies, and real-world coding insights by Shivansh Singh. Learn modern development and build better websites.",
};

// export const revalidate = 2592000; // 30 days  make it open after some time

export default  function BlogPage() {


  return (
    <>
      <HomePage />
      {/* 2. Pass the data to the client component */}
      <Suspense fallback={<BlogsSkeleton />}>

 
    <FeaturedWrapper />
      </Suspense>
    </>
  );
}


async function FeaturedWrapper (){
  const blogs = await Blog.list()
  return <Featured initialBlogs={blogs}  />
}


function BlogsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-80 rounded-2xl animate-pulse bg-gray-200 dark:bg-gray-800"
        />
      ))}
    </div>
  );
}