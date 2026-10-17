// app/sitemap.ts
import { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { projects } from "@/contents/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webcontractor.in";

  // Dynamic project case study pages
  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Static site pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/service/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9, // Raised to 0.9 as service pages are key converting landing pages
    },
    {
      url: `${baseUrl}/service/social-media-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Dynamic local SEO location landing pages
  const locationUrls: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Combine all route arrays cleanly
  return [...staticPages, ...projectUrls, ...locationUrls];
}