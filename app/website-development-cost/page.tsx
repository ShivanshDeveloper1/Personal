import HeroAnimation from "@/components/(costing)/website-cost/Hero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Website Development Cost Calculator India & Saharanpur | Web Pricing",
  description:
    "Calculate website development cost in India, Saharanpur, Delhi NCR, and major cities. Get transparent pricing estimates for landing pages, e-commerce, and web applications.",
  keywords: [
    "Website Cost Calculator",
    "Web Development Cost Saharanpur",
    "Full-Stack Website Cost",
    "Website Development Price in India",
    "E-commerce Website Cost India",
    "Web Developer Saharanpur UP",
    "ek website banane ka kharcha",
    "Website Design Cost Calculator",
  ],
  openGraph: {
    title: "Website Development Cost Calculator India",
    description: "Calculate accurate website development costs for businesses in Saharanpur and across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Page() {
  // Local Business & WebApplication Schema for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Website Cost Calculator India",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    description: "Free online website development cost calculator for Saharanpur and Indian businesses.",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Saharanpur" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "Country", name: "India" },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Schema Injection for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Animated Hero Section */}
      <HeroAnimation />
    </main>
  );
}