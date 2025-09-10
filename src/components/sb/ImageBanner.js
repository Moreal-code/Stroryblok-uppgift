import { storyblokEditable } from "@storyblok/react";

export default function ImageBanner({ blok }) {
  console.log("ImageBanner", blok);

  return (
    <div {...storyblokEditable(blok)}>
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || "Image"}
          className="w-full h-[200px] object-cover "
        />
      )}
    </div>
  );
}
