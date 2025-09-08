import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Page({ params }) {
  try {
    const { slug } = await params;
    const story = await fetchData(slug);

    if (!story || story.content.component === "config") {
      throw new Error("CONFIG_ERROR");
    }

    return (
      <div className="page">
        <StoryblokStory story={story} />
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/${slug.join("/")}`, {
    version: "draft",
  });

  return response.data?.story;
}
