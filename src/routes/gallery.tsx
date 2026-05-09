import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery , C.M.R" },
      { name: "description", content: "Photographs from C.M.R workshops, research field work, community events and publications." },
      { property: "og:title", content: "Gallery , C.M.R" },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Events" | "Research" | "Community" | "Publications";

const items: { src: string; cat: Exclude<Cat, "All">; title: string; date: string }[] = [
  { src: "/media/father-daughter-camera.png", cat: "Events", title: "Annual migration forum", date: "Apr 2026" },
  { src: "/media/woman-tablet-headphones.jpg", cat: "Research", title: "Field interviews , Lagos", date: "Mar 2026" },
  { src: "/media/youth-phones.png", cat: "Community", title: "Diaspora meet-up", date: "Feb 2026" },
  { src: "/media/content-creator-review.jpg", cat: "Publications", title: "Journal launch", date: "Jan 2026" },
  { src: "/media/woman-camera-bw.png", cat: "Events", title: "Media literacy workshop", date: "Dec 2025" },
  { src: "/media/youth-phones.png", cat: "Community", title: "Youth roundtable", date: "Nov 2025" },
  { src: "/media/podcast-host-waving.jpg", cat: "Research", title: "Policy roundtable", date: "Oct 2025" },
  { src: "/media/designer-retouching.jpg", cat: "Events", title: "Press conference", date: "Sep 2025" },
  { src: "/media/content-creator-review.jpg", cat: "Publications", title: "Working paper release", date: "Aug 2025" },
  { src: "/media/podcast-host-waving.jpg", cat: "Research", title: "Newsroom partnership", date: "Jul 2025" },
  { src: "/media/woman-headphones-yellow.png", cat: "Community", title: "School outreach", date: "Jun 2025" },
  { src: "/media/youth-phones.png", cat: "Events", title: "Diaspora dialogue", date: "May 2025" },
];

const cats: Cat[] = ["All", "Events", "Research", "Community", "Publications"];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Gallery"
        title={<>Photo <span className="italic">gallery</span></>}
        subtitle="A visual record of our research, workshops, conversations and the community we serve."
        image="/media/podcast-host-waving.jpg"
      />

      {/* FILTERS */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center reveal">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === c ? "bg-gradient-primary text-white shadow-glow" : "border border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((it, i) => (
              <button
                key={`${it.src}-${filter}`}
                onClick={() => setLightbox(i)}
                className="img-hover mb-5 block w-full break-inside-avoid rounded-2xl overflow-hidden text-left reveal"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              >
                <img src={it.src} alt={it.title} className="w-full" />
                <div className="overlay">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/80">{it.date}</div>
                  <div className="font-display text-xl">{it.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLightbox((l) => (l! - 1 + filtered.length) % filtered.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setLightbox((l) => (l! + 1) % filtered.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh]">
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="max-h-[80vh] w-auto rounded-2xl" />
            <div className="text-center mt-4 text-white">
              <div className="font-display text-2xl">{filtered[lightbox].title}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/70 mt-1">{filtered[lightbox].date}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
