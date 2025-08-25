import { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://gulis.me";
  const routes = ["", "/about/", "/projects/", "/experience/", "/contact/", "/privacy/"].map(
    (p) => ({ url: `${base}${p}`, lastModified: new Date() })
  );
  const projectRoutes = allProjects.map((p) => ({
    url: `${base}/projects/${p.slug}/`,
    lastModified: new Date()
  }));
  return [...routes, ...projectRoutes];
}