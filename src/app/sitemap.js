import SETTINGS from "@/settings";
import { StoryBlokUtils } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: SETTINGS.CMS_PUBLIC_KEY,
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    const pages = (await StoryBlokUtils.getStaticPaths()).filter(
      (path) => path?.slug?.[0] !== "config"
    );

    const sitemap = pages.map((page) => {
      const slug = page?.slug.filter((item) => item !== "");
      const finalSlug = slug?.length > 0 ? slug.join("/") : "";
      return {
        url: `${SETTINGS.SITE_URL}/${finalSlug}`,
        lastModified: new Date(),
        priority: 1,
      };
    });

    return sitemap;
  } catch (error) {
    console.error("Sitemap error:", error);
    return [];
  }
}
