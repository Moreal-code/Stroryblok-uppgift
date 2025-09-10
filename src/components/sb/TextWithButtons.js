import { storyblokEditable } from "@storyblok/react";

export default function TextWithButtons({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="text-left px-6 py-8 w-full bg-white"
    >
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-3">
        {blok.title}
      </h1>
      <h4 className="text-black leading-relaxed mb-6 inline-block max-w-fit">
        {blok.description}
      </h4>

      {/* Rendera filter buttons */}
      <div className="flex flex-wrap justify-start gap-3 mt-4">
        {blok.text_with_buttons?.map((button) => (
          <a
            key={button._uid}
            href={button.link?.cached_url || "#"}
            className="px-5 py-2 rounded border border-black text-black bg-white hover:bg-black hover:text-white transition"
          >
            {button.title}
          </a>
        ))}
      </div>
    </div>
  );
}
