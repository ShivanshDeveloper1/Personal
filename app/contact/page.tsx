import type { Metadata } from "next";
import ContactClient from "@/app/components/(contact)/ContactForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://webcontractor.in"),
  title: "Contact Shivansh Singh | Best Web Developer in Saharanpur, Haridwar & Dehradun",
  description: "Get in touch with Shivansh Singh, a Full Stack Web Developer specializing in Next.js, React, MERN Stack, high-converting e-commerce sites, and local SEO services across Saharanpur, Haridwar, Dehradun, Roorkee, and Yamunanagar.",
  keywords: [
    "Contact Web Developer Saharanpur",
    "Web Developer in Saharanpur",
    "Website Developer in Saharanpur",
    "Best Web Developer in Saharanpur",
    "Freelance Web Developer in Saharanpur",
    "Website Designer in Saharanpur",
    "Web Developer in Haridwar",
    "Website Developer in Haridwar",
    "Web Developer in Dehradun",
    "Website Developer in Dehradun",
    "Next.js Developer Saharanpur",
    "React Developer Uttarakhand",
    "MERN Stack Developer Roorkee",
    "Ecommerce Website Developer Yamunanagar",
    "Business Website Developer",
    "SEO Expert in Saharanpur",
    "Hire Web Developer India",
    "Contact Website Developer",
    "Custom Website Development",
  ],
  alternates: {
    canonical: "https://webcontractor.in/contact",
  },
  openGraph: {
    title: "Contact Shivansh Singh | Full Stack Web Developer",
    description: "Ready to grow your local business? Contact me for fast Next.js sites, custom e-commerce stores, coaching institute management portals, or advanced SEO services.",
    url: "https://webcontractor.in/contact",
    siteName: "WebContractor",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Shivansh Singh - Web Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shivansh Singh | Freelance Web Developer",
    description: "Get in touch for custom high-performance web development and strategic local SEO services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const unifiedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Shivansh Singh",
    "url": "https://webcontractor.in/contact",
    "description": "Get in touch with Shivansh Singh for custom business web applications, Next.js architecture, and SEO engineering services."
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shivansh - Web Developer",
    "url": "https://webcontractor.in",
    "founder": {
      "@type": "Person",
      "name": "Shivansh Singh"
    },
    "telephone": "+917618550475",
    "email": "shivanshsingh4539@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saharanpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    },
    "areaServed": [
      "Saharanpur",
      "Haridwar",
      "Dehradun",
      "Roorkee",
      "Yamunanagar"
    ],
    "serviceType": [
      "Website Development",
      "Ecommerce Development",
      "SEO Services",
      "Next.js Development",
      "React Development"
    ]
  }
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedSchema),
        }}
      />
      <ContactClient />
    </>
  );
}