import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sh-nextjs-portfolio.vercel.app";

  const locales = ["ua", "en", "de"];
  const pages = ["", "/services", "/projects", "/faq", "/contact"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );
}