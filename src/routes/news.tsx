import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — C.M.M.R" },
      { name: "description", content: "Research updates, op-eds, policy briefs and analysis from the Centre for Media and Migration Research." },
      { property: "og:title", content: "News & Insights — C.M.M.R" },
    ],
  }),
  component: NewsPage,
});

const featured = {
  img: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&w=2000&q=80",
  cat: "Research",
  date: "28 APR 2026",
  t: "Reframing the migration story: a 5-year review",
  excerpt: "Our flagship review examines five years of Nigerian media coverage on migration — what's changed, what hasn't, and what comes next for balanced reporting.",
};

const posts = [
  { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80", cat: "Policy", date: "12 APR 2026", t: "Why balanced reporting on migration matters more than ever", e: "A look at three case studies where reframing changed public perception." },
  { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80", cat: "Research", date: "03 MAR 2026", t: "Youth migration aspirations: findings from a 2026 national survey", e: "Over 70% of Nigerian youth view migration as a viable life path." },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80", cat: "Diaspora", date: "15 FEB 2026", t: "Building bridges: how diaspora networks shape Nigeria's economy", e: "Remittances surpassed ₦9 trillion in 2024 — but money is only part of the story." },
  { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80", cat: "Media", date: "08 FEB 2026", t: "Training journalists for ethical migration coverage", e: "Inside our 3-day intensive with 40 reporters from across West Africa." },
  { img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=900&q=80", cat: "Youth", date: "22 JAN 2026", t: "The literacy gap: who's teaching young people to read media critically?", e: "Our nationwide schools survey reveals striking disparities." },
  { img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80", cat: "Policy", date: "10 JAN 2026", t: "What a humane migration policy actually looks like", e: "Five concrete recommendations for the next legislative session." },
  { img: "https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?auto=format&fit=crop&w=900&q=80", cat: "Research", date: "01 JAN 2026", t: "Mental health and migration: an under-studied frontier", e: "Why psychological wellbeing must be central to migration policy." },
];

function NewsPage() {
  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Insights"
        title={<>News & <span className="italic">insights</span></>}
        subtitle="Research, analysis and conversation from the C.M.M.R team and our network of contributors."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2000&q=80"
      />

      {/* FEATURED */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="grid lg:grid-cols-12 gap-8 reveal card-lift bg-card border border-border rounded-3xl overflow-hidden">
            <div className="lg:col-span-7 img-hover aspect-[16/10] lg:aspect-auto">
              <img src={featured.img} alt={featured.t} className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-gradient-primary text-white px-2.5 py-1 rounded-full">Featured · {featured.cat}</span>
                <span className="text-[11px] font-mono text-text-muted">{featured.date}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.05] mb-5">{featured.t}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <a href="#" className="text-primary font-semibold inline-flex items-center gap-2">Read article <ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>
        </div>
      </section>

      {/* GRID + SIDEBAR */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {posts.map((p, i) => (
                <article key={i} className="card-lift bg-card border border-border rounded-3xl overflow-hidden reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="img-hover aspect-[16/10]">
                    <img src={p.img} alt={p.t} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-gradient-primary text-white px-2.5 py-1 rounded-full">{p.cat}</span>
                      <span className="text-[11px] font-mono text-text-muted">{p.date}</span>
                    </div>
                    <h3 className="font-display text-xl leading-snug mb-3">{p.t}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{p.e}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-primary" />
                        <span className="text-xs text-text-muted">C.M.M.R Team</span>
                      </div>
                      <a href="#" className="text-primary text-xs font-semibold inline-flex items-center gap-1">Read <ArrowRight className="h-3 w-3" /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="btn-outline-grad rounded-full px-8 py-3 text-sm font-semibold">Load more articles</button>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">Search</div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                <input placeholder="Search articles..." className="w-full pl-9 pr-3 py-2.5 rounded-full border border-border bg-background text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 reveal" style={{ transitionDelay: "60ms" }}>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Categories</div>
              <ul className="space-y-2 text-sm">
                {["Research", "Policy", "Diaspora", "Media", "Youth", "Events"].map((c) => (
                  <li key={c}><a href="#" className="flex justify-between items-center py-1.5 hover:text-primary"><span>{c}</span><span className="text-text-muted font-mono text-xs">12</span></a></li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 reveal" style={{ transitionDelay: "120ms" }}>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Recent posts</div>
              <ul className="space-y-4">
                {posts.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <img src={p.img} alt="" className="h-14 w-14 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-text-muted">{p.date}</div>
                      <a href="#" className="text-sm font-medium leading-snug hover:text-primary line-clamp-2">{p.t}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-primary text-white rounded-3xl p-6 reveal" style={{ transitionDelay: "180ms" }}>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/80 mb-3">Newsletter</div>
              <h4 className="font-display text-2xl mb-3 leading-tight">Quarterly migration brief</h4>
              <p className="text-sm text-white/85 mb-4">Insight, research and event invitations — straight to your inbox.</p>
              <input placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/30 text-sm text-white placeholder:text-white/60 focus:outline-none" />
              <button className="mt-3 w-full bg-white text-primary-dark rounded-full py-2.5 text-sm font-semibold">Subscribe</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
