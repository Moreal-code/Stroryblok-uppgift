import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

//Example of a static page
export default async function Home() {
  try {
    const story = await fetchData();

    return (
      <div className="page">
        <StoryblokStory story={story} />
      </div>
    );
  } catch (error) {
    console.warn(error);
    return notFound();
  }
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/home", {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
  });
}
