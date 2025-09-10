const Header = ({ blok }) => {
  return (
    <header className="bg-slate-100 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          {blok.menu_items?.map((item) => (
            <a
              key={item._uid}
              href={
                item.link?.cached_url
                  ? `/${item.link.cached_url.replace(/^\/+/, "")}`
                  : "#"
              }
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              {item.label || "No label"}
            </a>
          ))}

          <input
            type="text"
            placeholder={blok.search_placeholder || "Search"}
            className="border rounded px-2 py-1 text-black placeholder-black"
          />
        </nav>

        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined"></span>
          <span className="text-gray-900">{blok.cart_count || "Cart 0"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
