import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2H21.5l-7.51 8.59L23 22h-6.84l-5.36-6.99L4.6 22H1.34l8.04-9.2L1 2h7.02l4.84 6.4L18.244 2zm-1.2 18h1.86L7.06 4H5.1l11.944 16z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#0F1A0D] text-[#F0F5EE] mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
        <div>
          <div className="font-display text-3xl font-bold">
            C.M.R<span className="text-[#8DC142]">.</span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7A9973]">
            Centre for Media & Migration Research
          </p>
          <p className="mt-6 text-sm text-[#B8CCB3] max-w-sm leading-relaxed">
            A multidisciplinary research hub exploring the intersections of media and migration in Nigeria and the global diaspora.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, XIcon, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 rounded-full border border-[#2A3D26] flex items-center justify-center hover:bg-[#7DC142] hover:border-[#7DC142] hover:text-[#0F1A0D] transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#8DC142] mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-[#B8CCB3]">
              {[
                ["About", "/about"],
                ["Programmes", "/programmes"],
                ["Impact", "/impact"],
                ["News", "/news"],
                ["Events", "/events"],
                ["Gallery", "/gallery"],
              ].map(([l, t]) => (
                <li key={t}>
                  <Link to={t as string} className="hover:text-[#7DC142] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#8DC142] mb-4">Engage</h4>
            <ul className="space-y-2 text-sm text-[#B8CCB3]">
              <li><Link to="/contact" className="hover:text-[#7DC142]">Contact</Link></li>
              <li><a href="https://wa.me/2347055551944" className="hover:text-[#7DC142]">WhatsApp</a></li>
              <li><a href="mailto:witswords@yahoo.co.uk" className="hover:text-[#7DC142]">Email</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#8DC142] mb-4">Stay informed</h4>
          <p className="text-sm text-[#B8CCB3] mb-4">
            Quarterly insights on migration research, policy briefs, and upcoming events.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A9973]" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-9 pr-3 py-2.5 rounded-l-full bg-[#152112] border border-[#2A3D26] text-sm text-white placeholder:text-[#7A9973] focus:outline-none focus:border-[#7DC142]"
              />
            </div>
            <button className="btn-gradient rounded-r-full px-5 text-sm font-semibold">
              Subscribe
            </button>
          </form>
          <div className="mt-6 text-xs text-[#7A9973] space-y-2">
            <div className="flex items-start gap-2">
              <Phone className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#8DC142]" />
              <div className="flex flex-col leading-relaxed">
                <span>+234 705 555 1944</span>
                <span>+234 706 435 0427</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#8DC142]" />
              <span>witswords@yahoo.co.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#8DC142]" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2A3D26]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#7A9973]">
          <div>© 2026 Centre for Media and Migration Research (C.M.R). All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#7DC142]">Privacy Policy</a>
            <a href="#" className="hover:text-[#7DC142]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
