const Footer = ({ blok }) => {
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="max-w-md">
            <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              {blok.newsletter_title}
            </h4>
            <p className="mt-2 text-gray-600">{blok.newsletter_description}</p>
            <div className="mt-4 flex items-stretch gap-2">
              <input
                type="email"
                placeholder={blok.email_placeholder}
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="rounded border border-gray-400 px-4 py-2 text-gray-900 hover:bg-gray-50">
                {blok.button_label}
              </button>
            </div>
          </div>

          {blok.link_groups?.map((group) => (
            <div key={group._uid}>
              <h3 className="font-semibold text-gray-900">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.link_items?.length > 0 ? (
                  group.link_items.map((item, index) => {
                    const href = item.link?.cached_url || item.link?.url || "#";
                    const key = item.link?.id || `${group._uid}-${index}`;
                    return (
                      <li key={key}>
                        <a
                          href={href}
                          className="text-gray-700 hover:text-gray-900"
                        >
                          {item.title || "No title"}
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <li className="text-gray-500">No items yet</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
