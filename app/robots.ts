import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      // OpenAI
      {
        userAgent: "GPTBot",
        allow: "/",
      },

      // Anthropic
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },

      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // Google AI
      {
        userAgent: "Google-Extended",
        allow: "/",
      },

      // Common Crawl (used by many AI companies)
      {
        userAgent: "CCBot",
        allow: "/",
      },

      // Amazon AI
      {
        userAgent: "Amazonbot",
        allow: "/",
      },

      // ByteDance / TikTok search
      {
        userAgent: "Bytespider",
        allow: "/",
      },

      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
      },

      // Microsoft Bing / Copilot
      {
        userAgent: "bingbot",
        allow: "/",
      },

      // DuckDuckGo
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },

      // Yandex
      {
        userAgent: "Yandex",
        allow: "/",
      },

      // Baidu (China)
      {
        userAgent: "Baiduspider",
        allow: "/",
      },
    ],

    sitemap: "https://webcontractor.in/sitemap.xml",
  };
}