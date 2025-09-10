import { storyblokEditable } from "@storyblok/react";

export default function TitleWithButton({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="px-6 py-12 w-full bg-white">
      {/* {/* Titel /} */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-3 text-center mx-auto max-w-3xl">
        {blok.title}
      </h1>

      {/* {/ Beskrivning /} */}
      <h4 className="text-gray-400 leading-relaxed mb-6 text-center mx-auto max-w-2xl">
        {blok.description}
      </h4>

      {/* {/ Rendera filter buttons /} */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 mb-8">
        {blok.title_with_button?.map((button) => (
          <a
            key={button._uid}
            href={button.link?.cached_url || "#"}
            className="px-5 py-2 rounded border border-black text-black bg-white hover:bg-black hover:text-white transition"
          >
            {button.title}
          </a>
        ))}
      </div>

      {/* {/ Bild sist */}
      {blok.img?.filename && (
        <img
          src={blok.img.filename}
          alt={blok.img.alt || "Image"}
          className="w-full max-w-3xl max-h-[400px] object-cover mx-auto rounded-lg"
        />
      )}
    </div>
  );
}
