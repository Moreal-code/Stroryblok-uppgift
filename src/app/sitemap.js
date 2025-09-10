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
    console.log("Sitemap pages fetched from Storyblok:", pages);
    const sitemap = pages.map((page) => {
      const slugArray = Array.isArray(page.slug) ? page.slug : [page.slug];
      const finalSlug = slugArray.filter((item) => item !== "").join("/");
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
