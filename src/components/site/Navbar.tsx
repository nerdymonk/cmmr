import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "@/components/icons";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/cmmr-logo.png.asset.json";


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/impact", label: "Impact" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 backdrop-blur-md border-b border-white/10" : "bg-transparent py-4"
      }`}
      style={scrolled ? { backgroundColor: "rgba(15, 76, 129, 0.92)" } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="CMMR home">
          <span className="inline-flex items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md px-3 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all group-hover:bg-white/15 group-hover:ring-white/30">
            <img
              src={logoAsset.url}
              alt="CMMR — Centre for Media & Migration Research"
              className="h-12 md:h-14 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform group-hover:scale-[1.03]"
            />
          </span>
        </Link>



        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-white hover:text-primary-light transition-colors relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "px-3 py-2 text-sm font-medium text-primary-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-primary text-white hover:bg-primary-dark transition-colors rounded-full px-5 py-2 text-sm font-semibold"
          >
            Get in touch
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile drawer , rendered outside header to escape backdrop-filter containing block */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-[100] overflow-y-auto"
          style={{ backgroundColor: "#0F4C81" }}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/15">
            <img src={logoAsset.url} alt="CMMR" className="h-10 w-auto" />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="pt-6 px-8 pb-12 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-white text-3xl font-display py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex bg-white text-primary-dark font-semibold rounded-full px-6 py-3 self-start"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
