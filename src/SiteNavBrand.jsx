export function SiteNavBrand({ navigate, whenHome }) {
  return (
    <a
      href="/"
      className="site-nav__brand"
      aria-label="Home"
      onClick={(e) => {
        if (!navigate) return;
        e.preventDefault();
        if (window.location.pathname === "/") {
          whenHome?.();
        } else {
          navigate("/");
        }
      }}
    >
      ISABEL SHIC
    </a>
  );
}
