import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { Phone, Mail, MapPin, MessageCircle, Users, Newspaper, Briefcase } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact , C.M.R" },
      { name: "description", content: "Get in touch with the Centre for Media and Migration Research for partnerships, media enquiries or research collaboration." },
      { property: "og:title", content: "Contact , C.M.R" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Contact"
        title={<>Get in <span className="italic">touch</span></>}
        subtitle="For partnerships, media, research collaboration or general enquiries , we'd love to hear from you."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          {/* FORM */}
          <form className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 md:p-10 space-y-5 reveal" onSubmit={(e) => e.preventDefault()}>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Send us a message</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">We'd love to hear from you.</h2>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <input placeholder="Full name" required className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email" required className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
            </div>
            <input placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
            <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary text-foreground">
              <option>General Enquiry</option>
              <option>Partnership</option>
              <option>Media</option>
              <option>Donation</option>
              <option>Research Collaboration</option>
              <option>Volunteer</option>
            </select>
            <textarea placeholder="Your message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary resize-none" />

            <button className="w-full btn-gradient rounded-full py-4 text-sm font-semibold">Send message</button>
          </form>

          {/* SIDEBAR */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-[#0F1A0D] text-white rounded-3xl p-8 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#8DC142] mb-5">Direct contact</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-[#8DC142] mt-1" /><div><div className="text-sm">+234 705 555 1944</div><div className="text-sm text-[#B8CCB3]">+234 706 435 0427</div></div></li>
                <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-[#8DC142] mt-1" /><a href="mailto:witswords@yahoo.co.uk" className="text-sm hover:text-[#8DC142]">witswords@yahoo.co.uk</a></li>
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-[#8DC142] mt-1" /><span className="text-sm">Abuja, Nigeria</span></li>
              </ul>
              <a href="https://wa.me/2347055551944" target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-2.5 text-sm font-semibold">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="bg-secondary border border-border rounded-3xl overflow-hidden h-56 relative reveal" style={{ transitionDelay: "80ms" }}>
              <div className="absolute inset-0 bg-mesh opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl">Abuja, Nigeria</div>
                  <div className="text-xs text-text-muted font-mono uppercase tracking-widest mt-1">Map placeholder</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Briefcase, t: "For Researchers", d: "Collaborate with us on joint research, data sharing or publications." },
            { Icon: Users, t: "For Partners", d: "Explore partnership opportunities , institutional, NGO and corporate." },
            { Icon: Newspaper, t: "For Media", d: "Press enquiries, expert commentary and interview requests." },
          ].map((c, i) => (
            <div key={c.t} className="card-lift bg-card border border-border rounded-3xl p-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-5">
                <c.Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl mb-2">{c.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
