import type { Metadata } from "next";
import Script from "next/script";

// Component Components
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ImpactMetrics from "./components/ImpactMetrics";
import HomepageServices from "./components/HomepageServices/HomepageServices";
import BlogsWrapper from "./components/(Blog)/(homepage)/BlogsWrapper";
import VideoService from "./components/VideoService";
import PersonalImage from "@/components/(personal)/PersonalImage";

// Hyper-Targeted Homepage Metadata
export const metadata: Metadata = {
title: "Best Web Developer in Saharanpur | Next.js & MERN Stack", // This overrides the layout default
  description: "Professional freelance web developer in Saharanpur. Specializing in high-performance Next.js web applications, e-commerce, and advanced SEO strategies.",
  keywords: [
    "Saharanpur web developer",
    "web developer in Saharanpur",
    "Best Web Developer in Saharanpur",
    "best website designing company in saharanpur",
    "cheap website developer near me",
    "Best Web Developer in Dehradun",
    "website developer in dehradun",
    "freelance web developer in Saharanpur",
    "Next.js developer India",
    "MERN stack developer Saharanpur",
    "SEO expert in Saharanpur",
  ],
  openGraph: {
    title: "Shivansh Singh | Saharanpur Web Developer & SEO Expert",
    description: "Building modern, ultra-fast web applications with React, Next.js, and Tailwind CSS based in Saharanpur, India.",
    url: "https://webcontractor.in",
    images: [
      {
        url: "https://webcontractor.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivansh Singh - Web Developer ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Singh | Saharanpur Web Developer",
    description: "High-performance full stack web solutions optimized for search visibility.",
    images: ["https://webcontractor.in/og-image.jpg"],
  },
};

export default function Home() {
  // Local Business & WebSite Sitelinks Search Schema combined
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://webcontractor.in/#website",
        "url": "https://webcontractor.in",
        "name": "WebContractor",
        "description": "Premium Next.js & MERN Stack Web Development Services",
        "publisher": { "@id": "https://webcontractor.in/#person" }
      },
  {
  "@type": "ProfessionalService",
  "@id": "https://webcontractor.in/#service",
  "name": "Shivansh - Web Developer",
  "url": "https://webcontractor.in",
  "image": "https://webcontractor.in/og-image.jpg",
  "telephone": "+917618550475",
  "priceRange": "₹₹",

  "founder": {
    "@id": "https://webcontractor.in/#person"
  },

  "description":
    "Professional website development, ecommerce solutions, SEO services, and custom web applications for businesses in Saharanpur, Haridwar, Dehradun, and nearby areas.",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Delhi Road",
    "addressLocality": "Saharanpur",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "247001",
    "addressCountry": "IN"
  },

  "areaServed": [
    { "@type": "City", "name": "Saharanpur" },
    { "@type": "City", "name": "Haridwar" },
    { "@type": "City", "name": "Dehradun" },
    { "@type": "City", "name": "Yamuna Nagar" },
    { "@type": "City", "name": "Muzaffarnagar" },
    { "@type": "City", "name": "Deoband" },
    { "@type": "City", "name": "Behat" },
    { "@type": "City", "name": "Nanauta" },
    { "@type": "City", "name": "Rampur Maniharan" }
  ],

  "openingHours": [
    "Mo-Su 00:00-23:59"
  ],

  "sameAs": [
    "https://www.instagram.com/shivanshdeveloper",
    "https://github.com/ShivanshDeveloper1",
    "https://www.linkedin.com/in/shivansh-singh-bb1b0b328/"
  ]
}
    ]
  };

  return (
    <>
      <Script
        id="homepage-structural-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      
      <Hero />
      <ImpactMetrics />
      <Projects />
      <PersonalImage />


      <HomepageServices />
      <VideoService />
      <Testimonials />
      <BlogsWrapper />
      
      <Newsletter />
    </>
  );
}