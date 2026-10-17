// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/contents/projects";
import ProjectDetailClient from "@/app/components/(project)/ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Static Generation for speed & SEO indexing
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. High-Rank Meta Injection
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Shivansh Singh - Freelance Developer",
    };
  }

  const primaryTech = project.technologies.slice(0, 4).join(", ");
  const siteDomain = "https://webcontractor.in";
  const canonicalUrl = `${siteDomain}/projects/${project.slug}`;
  const absoluteImageUrl = project.image.startsWith("http")
    ? project.image
    : `${siteDomain}${project.image}`;

  const keywords = [
    `${project.title} Case Study`,
    `Freelance Web Developer ${project.city}`,
    `Hire Next.js Developer ${project.city}`,
    `Freelance Full Stack Developer India`,
    `Custom ${project.categories[0] || "Web"} Developer`,
    ...(project.seo?.secondaryKeywords || []),
    "Freelance Full Stack Web Developer India",
    "Hire Next.js Developer Saharanpur",
    "Hire Web Developer Dehradun",
    "Custom E-commerce Web Developer for Hire",
    "Freelance MERN Stack Developer Portfolio",
  ];

  return {
    metadataBase: new URL(siteDomain),
    title: `${project.title} Case Study | Freelance Web Developer Shivansh Singh`,
    description: `Case Study: ${project.description.slice(0, 140)}... Built with ${primaryTech} by Shivansh Singh, Freelance Web Developer in ${project.city}.`,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} - Client Work Case Study | Shivansh Singh`,
      description: project.description,
      url: canonicalUrl,
      siteName: "WebContractor | Shivansh Singh Portfolio",
      type: "article",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} - Freelance Development Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Freelance Web Developer Work`,
      description: project.description,
      images: [absoluteImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const siteDomain = "https://webcontractor.in";
  const absoluteImageUrl = project.image.startsWith("http")
    ? project.image
    : `${siteDomain}${project.image}`;

  // 3. Schema 1: Software Application / Creative Work
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.categories.join(", "),
    "operatingSystem": "Web Browser",
    "author": {
      "@type": "Person",
      "name": "Shivansh Singh",
      "jobTitle": "Freelance Full Stack Web Developer",
      "url": siteDomain,
    },
    "image": absoluteImageUrl,
    "url": project.demoLink,
  };

  // 4. Schema 2: Breadcrumbs (Boosts SERP CTR)
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteDomain,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": `${siteDomain}/projects`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `${siteDomain}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}