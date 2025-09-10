import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import Teaser from "@/components/sb/Teaser";
import Feature from "@/components/sb/Feature";
import Grid from "@/components/sb/Grid";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import ProductList from "@/components/sb/ProductList";
import { Config } from "@/components/sb/Config";
import TextWithButtons from "@/components/sb/TextWithButtons";
import TitleWithButton from "@/components/sb/TitleWithButton";
import ImageBanner from "@/components/sb/ImageBanner";
import TripleImg from "@/components/sb/TripleImg";
import AboutUs from "@/components/sb/AboutUs";

import TitleWithText from "@/components/sb/TitleWithText";
export const components = {
  // Add your components here
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  doesNotExist: DoesNotExist,
  ProductList: ProductList,
  Config: Config,
  TextWithButtons: TextWithButtons,
  TitleWithButton: TitleWithButton,
  ImageBanner: ImageBanner,
  TripleImg: TripleImg,
  AboutUs: AboutUs,
  TitleWithText: TitleWithText,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.STORYBLOK_PREVIEW_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});

export async function fetchConfig() {
  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi.get("cdn/stories/config", {
    version: "draft",
  });
  return res.data.story;
}
