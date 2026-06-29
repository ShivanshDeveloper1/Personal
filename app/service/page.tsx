import ServicesUI from "@/app/components/ClientComponent";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://webcontractor.in"), // ← replace with your domain
  title: "Best Web Developer in Saharanpur | Websites That Rank & Convert",
  description:
    "Professional website design & local SEO services based in Saharanpur, UP. Serving businesses pan-India. Get a fast, mobile-friendly website in 10 days. Free consultation on WhatsApp.",
  keywords:
    "web developer Saharanpur, website design Saharanpur, web designer UP, SEO services Haridwar, website maker Dehradun, local SEO India, e-commerce website India, business website Meerut, affordable web design UP",
  alternates: {
    canonical: "https://webcontractor.in",
  },
  openGraph: {
    type: "website",
    url: "https://webcontractor.in",
    title: "Best Web Developer in Saharanpur | Websites That Rank & Convert",
    description:
      "Fast, mobile-first websites & local SEO for Indian businesses. 150+ sites delivered. Free WhatsApp consultation.",
    siteName: "Shivansh Web Services",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg", // ← add a 1200×630 screenshot of your site
        width: 1200,
        height: 630,
        alt: "Best Web Developer in Saharanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Developer in Saharanpur | Websites That Rank & Convert",
    description:
      "Fast, mobile-first websites & local SEO for Indian businesses. 150+ sites delivered.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── JSON-LD SCHEMA ───────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://webcontractor.in/#business",
      name: "Shivansh Web Services",
      description:
        "Professional website design, e-commerce development, and local SEO services for Indian businesses.",
      url: "https://webcontractor.in",
      telephone: "+917618550475",
      priceRange: "₹₹",
      image: "webcontractor.in/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saharanpur",
        addressRegion: "Uttar Pradesh",
        postalCode: "247001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.9641,
        longitude: 77.5461,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      sameAs: [
        "https://wa.me/917618550475",
        // add your social links here
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Design & SEO Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Website",
              description: "Mobile-first business website with SEO, delivered in 10 days.",
            },
            price: "11999",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Store",
              description: "Full e-commerce store with payment gateway and admin dashboard.",
            },
            price: "24999",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO Package",
              description: "Monthly local SEO to rank your business in your city.",
            },
            price: "5999",
            priceCurrency: "INR",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "webcontractor.in/#website",
      url: "webcontractor.in",
      name: "Shivansh Web Services",
      inLanguage: "en-IN",
      publisher: { "@id": "webcontractor.in/#business" },
    },
  ],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD — tells Google EXACTLY what your business is */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServicesUI />
      </main>
    </>
  );
}