import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function ProductList({ blok }) {
  const api = getStoryblokApi();

  const res = await api.get("cdn/stories", {
    starts_with: "products/",
    version: "draft",
  });
  const products = res?.data?.stories || [];

  const selected = Array.isArray(blok.products) ? blok.products : [];
  const filtered = products.filter((p) => selected.includes(p.uuid));

  return (
    <section {...storyblokEditable(blok)} className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        {blok.title ? (
          <h2 className="text-3xl font-semibold tracking-tight">
            {blok.title}
          </h2>
        ) : null}
        {blok.description ? (
          <p className="mt-2 max-w-2xl text-gray-600">{blok.description}</p>
        ) : null}

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => {
            const { slug, content, uuid, name } = product;
            const title = content?.title || name || "Untitled";
            const price = content?.price || "$99";
            const size = content?.size || "M";

            const imgSrc =
              content?.image?.filename ||
              `https://picsum.photos/600/600?random=${uuid}`;
            const alt = content?.image?.alt || title;

            return (
              <Link href={`/products/${slug}`} key={uuid} className="block">
                <article className="p-0max">
                  <div className="w-full aspect-square w-50 h-60 overflow-hidden rounded-md bg-white-300">
                    <img
                      src={imgSrc}
                      alt={alt}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <div className="mt-3 flex items-baseline justify-between">
                    <h3 className="font-medium text-gray-800 leading-snug">
                      {title}
                    </h3>
                    <span className="text-sm text-gray-800">{size}</span>
                  </div>
                  <p className="mt-1 text-gray-800">{price}:- kr</p>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
