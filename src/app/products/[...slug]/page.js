import { getStoryblokApi } from "@storyblok/react/rsc";
import ServerComponent from "../../../components/sb/ServerComponent";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const slugPath = slug.join("/"); // ex: product-7

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/products/${slugPath}`, {
    version: "draft",
  });

  const product = data.story;
  console.log("Product data:", JSON.stringify(product, null, 2));

  return (
    <main className="w-full mx-auto px-6 md:pl-12 py-10 grid md:grid-cols-2 gap-8 items-start bg-white">
      {/* Bild till vänster */}
      {product.content.image && (
        <img
          src={product.content.image.filename}
          alt={product.content.image.alt || product.content.title}
          className="aspect-square w-full max-w-[500px] object-cover rounded bg-white justify-self-start"
        />
      )}

      {/* Info till höger */}
      <div className="flex flex-col gap-3 bg-white">
        {/* Titel */}
        <h1 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
          {product.content.title}
        </h1>

        {/* Pris */}
        <p className="text-base text-black">${product.content.price}</p>

        {/* Beskrivning */}
        <p className="text-gray-700 text-sm leading-snug max-w-md">
          {product.content.text}
        </p>

        {/* Färger */}
        {product.content.colors?.length > 0 && (
          <div>
            <h3 className="text-sm text-gray-600 mb-1">
              {product.content.color_label}
            </h3>
            <div className="flex gap-2">
              {product.content.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-400 bg-white cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Storlekar */}
        {product.content.size_buttons?.length > 0 && (
          <div>
            <h3 className="text-sm text-gray-600 mb-1">
              {product.content.size_label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.content.size_buttons.map((btn) => (
                <button
                  key={btn._uid}
                  className="px-3 py-1 border border-black rounded text-sm text-black bg-white hover:bg-gray-200"
                >
                  {btn.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size guide */}
        {product.content.size_guide_url?.length > 0 && (
          <div>
            {product.content.size_guide_url.map((btn) => (
              <a
                key={btn._uid}
                href={btn.link?.url || "#"}
                className="text-xs underline text-gray-800"
              >
                {btn.title}
              </a>
            ))}
          </div>
        )}

        {/* Model note */}
        {product.content.model_note && (
          <p className="text-xs text-gray-500">{product.content.model_note}</p>
        )}
      </div>
    </main>
  );
}
