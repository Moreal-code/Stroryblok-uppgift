// src/utils/cms.js
import { getStoryblokApi } from "@storyblok/react/rsc";

export const StoryBlokUtils = {
  getStaticPaths: async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/links/", {
      version: "draft",
    });

    return Object.values(data.links || {});
  },
};
