import HeroAnimation from "@/components/(costing)/website-cost/Hero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Website Development Cost Calculator India & Saharanpur | Web Pricing",
  description:
    "Calculate website development cost in India, Saharanpur, Delhi NCR, and major cities. Get transparent pricing estimates for landing pages, e-commerce, and web applications.",
keywords: [
  "Website Cost Calculator",
  "Web Development Cost Saharanpur",
  "2026 Website Development Cost",
  "AI Website Development Cost",
  "Full-Stack Website Cost",
  "Website Development Price in India",
  "E-commerce Website Cost India",
  "Web Developer Saharanpur UP",
  "ek website banane ka kharcha",
  "Website Design Cost Calculator",

  // Core Pricing & Costing
  "Website Development Cost",
  "Website Development Cost 2026",
  "Website Development Cost India",
  "Website Development Price India",
  "Website Design Cost India",
  "Website Making Cost",
  "Website Making Cost in India",

  // Business & Enterprise
  "Business Website Cost",
  "Business Website Development Cost",
  "Small Business Website Cost India",
  "Startup Website Development Cost",
  "Company Website Cost India",
  "Professional Website Cost India",
  "Custom Website Development Cost",

  // E-commerce
  "Online Store Website Cost India",
  "E-commerce Website Development Cost",
  "Online Shopping Website Cost",
  "E-commerce Website Price India",

  // AI & Next-Gen Tech
  "AI Website Cost India",
  "AI Powered Website Development Cost",
  "AI Web Development India",

  // Full-Stack & Custom Tech
  "Full Stack Website Cost",
  "Full Stack Web Development Cost India",
  "Custom Web Development Cost India",
  "Web Application Development Cost India",

  // Local SEO (Saharanpur & Regional)
  "Web Developer Saharanpur",
  "Website Development Saharanpur",
  "Website Design Saharanpur",
  "Website Development Company Saharanpur",
  "Website Designer Saharanpur",
  "Website Developer Near Me",
  "Web Development Company Near Me",

  // Commercial & Package Terms
  "Website Development Pricing",
  "Website Development Packages India",
  "Website Design Packages India",
  "Website Development Charges India",
  "Web Developer Charges India",
  "Website Development Rates India",
  "Website Developer Price India",

  // Estimator & Tool Intent
  "Website Price Calculator",
  "Website Development Price Calculator",
  "Web Development Cost Calculator India",
  "Website Design Price Calculator",
  "Website Cost Estimator",
  "Website Development Cost Estimator",

  // Hindi & Hinglish Variations
  "website banwane ka kharcha",
  "website banane mein kitna kharcha aata hai",
  "website banwane mein kitna kharcha aata hai",
  "website banwane mein kitna paisa lagta hai",
  "website banane ka price",
  "website banwane ka price",
  "website banane ki cost",
  "website banwane ki cost"

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
      id="json-ld-calculator"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Animated Hero Section */}
      <HeroAnimation />
    </main>
  );
}