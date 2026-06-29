import type { Metadata } from "next";
import AboutClient from "@/app/components/(about)/AboutClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Shivansh Singh | Best Web Developer in Saharanpur & Haridwar",
  description:
    "Shivansh Singh is a Full Stack Web Developer from Saharanpur specializing in Next.js, React, MERN Stack, SEO, ecommerce websites, coaching institute portals, and custom business websites across Saharanpur, Haridwar, and Dehradun.",
  keywords: [
    "Web Developer in Saharanpur",
    "Website Developer in Saharanpur",
    "website Development agency",
    "Best Web Developer in Saharanpur",
    "Full Stack Developer in Saharanpur",
    "Freelance Web Developer in Saharanpur",
    "Next.js Developer Saharanpur",
    "React Developer Uttarakhand",
    "MERN Stack Developer Haridwar",
    "Ecommerce Website Developer Saharanpur",
    "SEO Expert in Saharanpur",
    "Website Designer in Saharanpur",
    "Coaching Institute Website Developer",
    "Web Developer in Haridwar",
    "Website Developer in Haridwar",
    "Freelance Web Developer in Haridwar",
    "Web Developer in Dehradun",
    "Website Developer in Dehradun",
    "Freelance Web Developer in Dehradun",
    "Business Website Development India",
    "Custom Website Development",
  ],
  alternates: {
    canonical: "https://webcontractor.in/about",
  },
  openGraph: {
    title:
      "About Shivansh Singh | Full Stack Web Developer in Saharanpur & Haridwar",
    description:
      "Engineering blazing-fast, SEO-optimized digital infrastructure for startups, businesses, and coaching institutes across UP & Uttarakhand.",
         images: ["/og-image.jpg"],
    url: "https://webcontractor.in/about",
    siteName: "WebContractor",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
  
    title: "About Shivansh Singh | Web Developer",
    description:
      "Custom Next.js & MERN Stack applications engineered for local business growth in Saharanpur, Haridwar, and Dehradun.",
         images: ["/og-image.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivansh Singh",
  jobTitle: "Full Stack Web Developer & SEO Consultant",
  url: "https://webcontractor.in",
  sameAs: ["https://www.instagram.com/shivanshdeveloper"],
  knowsAbout: [
    "Web Development",
    "Next.js",
    "Search Engine Optimization",
    "E-commerce Development",
    "MERN Stack",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "India",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best web developer in Saharanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shivansh Singh is a Full Stack Web Developer specializing in Next.js, SEO, ecommerce and custom web applications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build ecommerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I develop ecommerce websites using Next.js, React, Node.js and MongoDB.",
      },
    },
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
    "name": "Shivansh - Web Developer",
  url: "https://webcontractor.in",
  founder: "Shivansh Singh",
  areaServed: [
    "Saharanpur",
    "Haridwar",
    "Dehradun",
    "Roorkee",
    "Yamunanagar",
  ],
  serviceType: [
    "Website Development",
    "SEO Services",
    "Ecommerce Development",
    "Next.js Development",
    "MERN Stack Development",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

      <AboutClient />
    </>
  );
}