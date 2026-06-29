import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import Script from "next/script"; // ✅ Needed for Analytics & Schema
import WhatsAppButton from "./components/common/WhatsAppButton";
import LayoutWrapper from "./components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
    default: "Shivansh Singh |  Next.js & Full-Stack Developer",
    template: "%s | Shivansh Singh",
  },
  description:
    "I'm Shivansh Singh, a professional web developer from Saharanpur specializing in Next.js, React, Tailwind, SEO, and modern full-stack web development.",
  keywords: [
    "Saharanpur web developer",
    "Saharanpur website maker",
    "web developer in Saharanpur",
    "Best Web Developer in Saharanpur",
    "best website designing company",
    "web developer",
    "वेबसाइट",
    "web development",
    "cheap website developer near me",
    "Best Web Developer in Haridwar",
    "Best web development agency in Saharanpur",
    "Best Web Developer in Dehradun",
    "website developer in dehradun",
    "web development company",
    "freelance web developer in Saharanpur",
    "freelance web developer in Dehradun",
    "Web developer in Haridwar",
    "web development company in yamunanagar",
    "web design near me",
    "local business near me",
    "Noida web developer",
    "website developer in Noida",
    "Next.js developer",
    "React developer",
    "freelance web designer Saharanpur",
    "best website designing company in saharanpur",
    "website creator in Saharanpur",
    "MERN stack developer",
    "website developer Saharanpur",
    "best web developer in Saharanpur",
    "Saharanpur website designer",
    'website design in ranipokhari',
    "Saharanpur portfolio website developer",
    "custom website developer Saharanpur",
    "SEO expert in Saharanpur",
  ],

  authors: [{ name: "Shivansh Singh" }],
  openGraph: {
  title: "Web Developer | Custom Websites",
   description: "Building high-performance websites using Next.js and React for businesses.",
    url: "https://webcontractor.in",
    siteName: "Shivansh Portfolio",
    images: [
      {
        url: "https://webcontractor.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivansh Singh -  Web Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Singh |  Web Developer",
    description:
      "Building modern websites with React, Next.js & Tailwind — based in Saharanpur, India.",
    images: ["https://webcontractor.in/og-image.jpg"],
  },

  // ✅ CORRECTED VERIFICATION SECTION
  verification: {
    google: "Y36bdXR4XbcJThPjEki14g9oZ-eJJyK67frahLuek0c",
  },

    metadataBase: new URL("https://webcontractor.in"),


  robots:{
    index:true,
    follow:true,
    nocache:false,
      googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  }






};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema for Google Rich Results */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shivansh Singh",
              jobTitle: "Web Developer",
              description:
                "Professional Web Developer from Saharanpur specializing in Next.js, React, Tailwind, and SEO.",
              url: "https://webcontractor.in",
              sameAs: [
                "https://github.com/ShivanshDeveloper1",
                "https://www.linkedin.com/in/shivansh-singh-bb1b0b328/",
                "https://x.com/Adarshs97102593",
                "https://www.instagram.com/shivanshdeveloper",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saharanpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India",
              },
            }),
          }}
        />
        <Script
          id="schema-local"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
             "name": "Shivansh - Web Developer",
              image: "https://webcontractor.in/og-image.jpg",
              url: "https://webcontractor.in",
              telephone: "+91 7618550475",
              priceRange: "₹₹",
            "areaServed": [
        {
          "@type": "City",
          "name": "Saharanpur"
        },
        {
          "@type": "City",
          "name": "Noida"
        }
      ],
              
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saharanpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.9680",
                longitude: "77.5552",
              },
              sameAs: [
              "https://github.com/ShivanshDeveloper1",
        "https://www.instagram.com/shivanshdeveloper",
        "https://x.com/Adarshs97102593",
        "https://www.linkedin.com/in/shivansh-singh-bb1b0b328/"
              ],
            }),
          }}
        />

        
      </head>

      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* ✅ 1. Load Google Analytics Library */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5570D915LB"
        />

        {/* ✅ 2. Configure Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5570D915LB');
          `}
        </Script>

        <ThemeProvider>
          <LayoutWrapper />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <WhatsAppButton phoneNumber="917618550475" />
        </ThemeProvider>
      </body>
    </html>
  );
}
