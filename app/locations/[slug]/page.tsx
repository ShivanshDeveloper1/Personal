import { locations } from "@/data/locations";
import LocationUI from "@/app/components/LocationUI";
import { notFound } from "next/navigation";

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = locations.find((l) => l.slug === slug);

  if (!data) return { title: "Location Not Found" };

  return {
    title: data.title,
    description: data.description,
    keywords: [...data.seo.secondaryKeywords, ...data.serviceKeywords].join(", "),
    alternates: {
      canonical: data.canonicalUrl,
    },
    // ROBOTS: Tells Google to index this page and follow all links
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.canonicalUrl,
      images: [
        {
          url: data.images[0],
          width: 1200,
          height: 630,
          alt: data.seo.primaryKeyword,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    // TWITTER: Makes your links look like professional cards on X/Twitter
    
  
   
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = locations.find((l) => l.slug === slug);

  if (!data) notFound();

  // 1. Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WebDesignService",
    name: `Shivansh - ${data.seo.primaryKeyword}`,
    description: data.description,
    image: "https://webcontractor.in/my-photo.jpg",
    provider: {
      "@type": "LocalBusiness",
      name: "Shivansh - Web Developer",
      image: "https://webcontractor.in/my-photo.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: data.city,
        addressRegion: data.state,
        addressCountry: "IN",
      },
    },
     sameAs: [
    "https://www.instagram.com/shivanshdeveloper",
    "https://www.linkedin.com/in/shivansh-singh-bb1b0b328",
    "https://github.com/ShivanshDeveloper1"
  ],

    areaServed: [data.city, ...data.nearbyAreas].map(area => ({
      "@type": "City",
      name: area
    })),
    makesOffer: data.services.map(service => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc
      }
    }))
  };

  // 2. FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqKeywords.map((question) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `We provide custom solutions for ${question.toLowerCase().includes('cost') ? 'affordable and premium pricing' : 'businesses looking for top-tier digital presence'} in ${data.city}. Contact us to get an exact quote.`
      }
    }))
  };

  return (
    <>
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <LocationUI data={data} />
    </>
  );
}