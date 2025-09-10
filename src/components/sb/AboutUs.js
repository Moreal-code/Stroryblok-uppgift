import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";

export default function AboutUs({ blok }) {
  return (
    <main {...storyblokEditable(blok)} className="about-us-page">
      {blok.body?.map((nestedBlok) => (
        <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
