export const Config = ({ blok }) => {
  console.log("CONFIG blok:", blok);

  return (
    <>
      <header>
        <nav>
          {blok.header?.map((headerBlock) => (
            <div key={headerBlock._uid}>
              {console.log("Header block:", headerBlock)}
              {headerBlock.menu_items?.map((item) => (
                <a key={item._uid} href={item.url || "#"}>
                  {item.label || "No label"}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </header>

      <footer>
        {blok.footer?.map((footerBlock) => (
          <div key={footerBlock._uid}>
            {console.log("Footer block:", footerBlock)}
            {footerBlock.link_groups?.map((link_groups) => {
              const links = link_groups.links || [link_groups];
              return links.map((link) => (
                <a key={link._uid} href={link.url || "#"}>
                  {link.label || "No label"}
                </a>
              ));
            })}
          </div>
        ))}
      </footer>
    </>
  );
};
