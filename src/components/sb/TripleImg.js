import { storyblokEditable } from "@storyblok/react";

export default function TripleImg({ blok }) {
  console.log("TripleImg", blok);

  return (
    <div
      {...storyblokEditable(blok)}
      className="grid grid-cols-[max-content_max-content_max-content] justify-center gap-12 pb-12 bg-white"
    >
      {blok.triple_img?.map((img, index) => (
        <img
          key={img.id || index}
          src={img.filename}
          alt={img.alt || `Image ${index + 1}`}
          className={`object-cover rounded-lg
            w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px]
            ${
              index === 1
                ? "h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]" // mitten högre
                : "h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] md:mt-4" // sidor lägre
            }`}
        />
      ))}
    </div>
  );
}
