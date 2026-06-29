import type { Metadata } from "next";
import ProjectsClient from "@/app/components/(project)/ProjectsClient";
import { projects } from "@/contents/projects";

// Hard-Hitting Local SEO Meta Injection
export const metadata: Metadata = {
  metadataBase: new URL("https://webcontractor.in"),
  title: "Full Stack Web Development Projects  | Web Development Awesome Projects",
  description: "Explore verified client projects, production e-commerce platforms, AI-integrated software, and custom educational systems built for businesses across Saharanpur, Dehradun, and Haridwar by Shivansh Singh.",
  keywords: [
    "Web Developer Portfolio Saharanpur",
    "Next.js Projects Portfolio",
    "React Developer Case Studies",
    "MERN Stack Applications India",
    "E-commerce Web Developer Portfolio",
    "AI Application Developer Dehradun",
    "Custom Software Portfolio Haridwar",
  ],
  alternates: {
    canonical: "https://webcontractor.in/projects",
  },
  openGraph: {
    title: "Full Stack Web Developer Portfolio | Shivansh Singh",
    description: "Browse high-performance case studies spanning AI chat systems, real estate price tools, and operational dashboards.",
    url: "https://webcontractor.in/projects",
    siteName: "WebContractor",
    type: "website",
    images: [
      {
        url: "/projects/main.png",
        width: 1200,
        height: 630,
        alt: "Shivansh Singh Project Portfolio Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Singh | Full Stack Production Portfolio",
    description: "Review live interactive case studies built with React, Next.js, and Node.js.",
    images: ["/projects/main.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  // Dynamically compile an ItemList schema so bots map your projects array explicitly
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Shivansh Singh - Development Project Portfolio",
    "description": "Production-grade custom web applications built for business clients.",
    "url": "https://webcontractor.in/projects",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "programmingLanguage": project.technologies,
        "codeRepository": project.githubLink || undefined,
        "url": project.demoLink
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <ProjectsClient />
    </>
  );
}