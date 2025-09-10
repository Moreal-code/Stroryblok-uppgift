import { storyblokEditable } from "@storyblok/react";

export default function TitleWithText({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-slate-100 px-6 py-12 text-center bg-white"
    >
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-10">
        {blok.title}
      </h1>
      <h4 className="mx-auto max-w-3xl text-left text-gray-700 text-sm md:text-base leading-6 md:leading-7 whitespace-pre-line">
        {blok.description}
      </h4>
    </div>
  );
}
