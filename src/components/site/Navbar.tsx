import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-frost py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
            C.M.M.R<span className="text-primary-light">.</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.18em] text-white/80 hidden sm:block drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
            Centre for Media & Migration Research
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
            to="/donate"
            className="hidden sm:inline-flex bg-primary text-white hover:bg-primary-dark transition-colors rounded-full px-5 py-2 text-sm font-semibold"
          >
            Donate
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden h-9 w-9 rounded-full border border-border flex items-center justify-center"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#1E5C1A" }}
      >
        <div className="pt-24 px-8 flex flex-col gap-2">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-white text-3xl font-display py-2 transition-all"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(40px)",
                transitionDelay: `${i * 60 + 100}ms`,
                transitionDuration: "500ms",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="mt-6 inline-flex bg-white text-primary-dark font-semibold rounded-full px-6 py-3 self-start"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
