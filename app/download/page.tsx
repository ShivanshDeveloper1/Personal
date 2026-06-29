import type { Metadata } from "next";
import DownloadClient from "@/app/components/(download)/DownloadClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://webcontractor.in"),
  title: "Shivansh Singh Resume | Full Stack Next.js & React Developer",
  description: "Download the official resume of Shivansh Singh, a freelance Full Stack Web Developer and SEO expert serving Saharanpur, Haridwar, and Dehradun. Specializing in React, Next.js, and MERN stack applications.",
  keywords: [
    "Shivansh Singh Resume",
    "Web Developer Resume India",
    "Next.js Developer CV",
    "React Developer Saharanpur",
    "Freelance Web Developer Haridwar",
    "MERN Stack Developer Dehradun",
    "Hire Full Stack Developer",
  ],
  alternates: {
    canonical: "https://webcontractor.in/resume",
  },
  openGraph: {
    title: "Shivansh Singh - Professional Web Developer Resume",
    description: "View and download my professional CV detailing expertise in Next.js, custom e-commerce architecture, and localized search engine optimization.",
    url: "https://webcontractor.in/resume",
    siteName: "WebContractor",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Shivansh Singh Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Singh | Web Developer Resume",
    description: "Download my professional CV for custom website development and SEO services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Schema to help engines understand this is an official professional document
const resumeSchema = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  "name": "Shivansh Singh Resume",
  "description": "Professional CV of Shivansh Singh, Full Stack Web Developer specializing in Next.js, React, and SEO engineering.",
  "url": "https://webcontractor.in/resume",
  "fileFormat": "application/pdf",
  "author": {
    "@type": "Person",
    "name": "Shivansh Singh",
    "jobTitle": "Full Stack Web Developer",
    "telephone": "+917618550475",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saharanpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    }
  }
};

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeSchema),
        }}
      />
      <DownloadClient />
    </>
  );
}