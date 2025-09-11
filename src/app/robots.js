import SETTINGS from "@/settings";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/*",
      disallow: "/api/",
    },
    sitemap: `http://${SETTINGS.SITE_URL}/sitemap.xml`,
  };
}
