import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, BookOpen, Users, Globe2, Newspaper, Quote, Mic, GraduationCap } from "lucide-react";
import { PageEffects } from "@/components/site/PageEffects";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { useCountUp } from "@/lib/scroll-reveal";
import studentLaptop from "@/assets/brochure/student-laptop.jpg";
import womanTablet from "@/assets/brochure/woman-tablet.jpg";
import camera from "@/assets/brochure/camera-classroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C.M.M.R — Connecting Worlds, Shaping Narratives" },
      { name: "description", content: "Nigeria's premier multidisciplinary research centre exploring the intersections of media and migration." },
    ],
  }),
  component: HomePage,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useCountUp(to);
  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

function HomePage() {
  return (
    <>
      <PageEffects />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(15, 26, 13, 0.78)" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-8 items-center py-20">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-[#8DC142] mb-6 fade-up" style={{ animationDelay: "0.05s" }}>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8DC142] mr-3 align-middle pulse-dot" />
              Centre for Media & Migration Research
            </div>
            <h1 className="font-display text-white text-[clamp(3rem,8vw,7rem)] leading-[0.92] font-medium fade-up" style={{ animationDelay: "0.2s" }}>
              Connecting <span className="text-gradient italic">Worlds</span>,
              <br />
              Shaping <span className="italic">Narratives</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed fade-up" style={{ animationDelay: "0.35s" }}>
              Nigeria's premier multidisciplinary research centre exploring how media shapes migration narratives, diaspora experience, and public understanding.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.5s" }}>
              <Link to="/programmes" className="btn-gradient rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                Explore Our Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/donate" className="rounded-full px-7 py-3.5 text-sm font-semibold border border-white/40 text-white hover:bg-white hover:text-primary-dark transition-all">
                Support Our Mission
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col gap-3 fade-up" style={{ animationDelay: "0.65s" }}>
            {[
              { k: "Peer-reviewed publications", v: "40+" },
              { k: "Active research programmes", v: "04" },
              { k: "Partner universities", v: "03" },
            ].map((s) => (
              <div key={s.k} className="border border-white/15 backdrop-blur-md bg-white/5 rounded-2xl p-5">
                <div className="font-mono text-4xl text-white">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

        <a href="#mission" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 scroll-arrow flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      {/* MISSION STRIP */}
      <section id="mission" className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute -top-12 left-8 text-[14rem] leading-none font-display text-white/10 select-none">"</div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative reveal">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/70 mb-4">Our mission</div>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight max-w-5xl">
            Through research, dialogue and collaboration, we build stronger, more connected societies — empowering voices and promoting cross-cultural understanding across Nigeria and the diaspora.
          </p>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">About C.M.M.R</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">
              A research hub at the
              <br />
              <span className="italic text-primary">intersection</span> of media
              <br />
              and migration.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Based in Nigeria, C.M.M.R brings together scholars, policymakers and practitioners to address the challenges and opportunities of global migration through evidence-based research and inclusive media narratives.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-primary pb-1 hover:gap-4 transition-all">
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="img-hover rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
              <img src={studentLaptop} alt="Researcher at work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-[#0F1A0D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#8DC142] mb-3">Our impact</div>
            <h2 className="font-display text-4xl md:text-6xl">By the numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: 40, suf: "+", label: "Peer-reviewed publications" },
              { v: 4, suf: "", label: "Active research programmes" },
              { v: 3, suf: "", label: "Partner universities" },
              { v: 1200, suf: "+", label: "Community members reached" },
            ].map((s, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="font-mono text-5xl md:text-7xl text-white leading-none">
                  <Counter to={s.v} suffix={s.suf} />
                </div>
                <div className="mt-3 h-px w-12 bg-[#8DC142]" />
                <div className="mt-3 text-sm text-[#B8CCB3] uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMMES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Featured programmes</div>
              <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-[1.05]">
                Research that <span className="italic">changes</span> the conversation.
              </h2>
            </div>
            <Link to="/programmes" className="inline-flex items-center gap-2 text-primary font-semibold whitespace-nowrap">
              View all programmes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: BookOpen, t: "Research & Policy", d: "Evidence-based migration policy guidance for institutions and government." },
              { Icon: GraduationCap, t: "Media Literacy", d: "Equipping youth to critically assess migration narratives and information." },
              { Icon: Users, t: "Diaspora Mentorship", d: "Connecting Nigerian youth with diaspora professionals worldwide." },
            ].map((p, i) => (
              <div
                key={i}
                className="card-lift bg-card border border-border rounded-3xl p-8 reveal relative overflow-hidden group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-6">
                  <p.Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.d}</p>
                <Link to="/programmes" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Latest insights</div>
              <h2 className="font-display text-4xl md:text-5xl">News & analysis</h2>
            </div>
            <Link to="/news" className="text-primary font-semibold inline-flex items-center gap-2">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
                cat: "Policy",
                date: "12 APR 2026",
                t: "Why balanced reporting on migration matters more than ever",
              },
              {
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
                cat: "Research",
                date: "03 MAR 2026",
                t: "Youth migration aspirations: findings from a 2026 national survey",
              },
              {
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
                cat: "Diaspora",
                date: "15 FEB 2026",
                t: "Building bridges: how diaspora networks shape Nigeria's economy",
              },
            ].map((n, i) => (
              <article key={i} className="card-lift bg-card rounded-3xl overflow-hidden border border-border reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="img-hover aspect-[16/10] overflow-hidden">
                  <img src={n.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-gradient-primary text-white px-2.5 py-1 rounded-full">{n.cat}</span>
                    <span className="text-[11px] font-mono text-text-muted">{n.date}</span>
                  </div>
                  <h3 className="font-display text-xl leading-snug mb-4">{n.t}</h3>
                  <Link to="/news" className="text-primary text-sm font-semibold inline-flex items-center gap-1.5">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gradient-primary text-white py-28 relative overflow-hidden">
        <div className="absolute -top-20 left-12 text-[20rem] leading-none font-display text-white/10 select-none">"</div>
        <div className="absolute -bottom-32 right-12 text-[20rem] leading-none font-display text-white/10 select-none rotate-180">"</div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative reveal">
          <Quote className="h-10 w-10 mx-auto mb-8 text-[#8DC142]" />
          <p className="font-display text-3xl md:text-5xl leading-tight mb-10">
            Migration is not just a journey of bodies across borders — it is a journey of stories, identity and possibility. The media we make shapes the world we share.
          </p>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#8DC142]">Professor Abiodun Adeniyi</div>
          <div className="text-sm text-white/80 mt-1">Executive Research Lead, C.M.M.R</div>
        </div>
      </section>

      {/* PARTNERS */}
      <PartnerMarquee />

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0F1A0D] rounded-[2.5rem] p-12 md:p-20 overflow-hidden reveal">
            <div className="absolute inset-0 bg-mesh opacity-40" />
            <div
              className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, #7DC142 0%, transparent 70%)" }}
            />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-white text-4xl md:text-6xl leading-[1.05] mb-6">
                Ready to make
                <br />
                an <span className="italic text-gradient">impact?</span>
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl">
                Whether through funding, partnership or volunteering, your engagement shapes Nigeria's migration future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate" className="btn-gradient rounded-full px-8 py-4 text-sm font-semibold inline-flex items-center gap-2">
                  Donate Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="rounded-full px-8 py-4 text-sm font-semibold border border-white/40 text-white hover:bg-white hover:text-primary-dark transition-all">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
