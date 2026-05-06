import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { MapPin, ArrowRight, Calendar as CalendarIcon, LayoutGrid } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Programmes — C.M.M.R" },
      { name: "description", content: "Upcoming and past C.M.M.R events: research forums, training workshops and policy dialogues." },
      { property: "og:title", content: "Events & Programmes — C.M.M.R" },
    ],
  }),
  component: EventsPage,
});

const upcoming = [
  { day: "18", mon: "MAY", t: "Annual Migration & Media Forum", loc: "Abuja", desc: "Our flagship convening of researchers, journalists and policymakers.", reg: "#" },
  { day: "06", mon: "JUN", t: "Ethical Reporting Workshop", loc: "Lagos", desc: "Two-day intensive for newsroom editors covering migration.", reg: "#" },
  { day: "22", mon: "JUL", t: "Diaspora Mentorship Launch", loc: "Virtual", desc: "Pairing 50 youth with diaspora professionals across 8 countries.", reg: "#" },
];

const past = [
  { day: "12", mon: "APR", t: "Media Literacy Workshop", loc: "Abuja" },
  { day: "08", mon: "MAR", t: "Policy Roundtable: Youth Migration", loc: "Lagos" },
  { day: "15", mon: "FEB", t: "Diaspora Network Launch", loc: "Virtual" },
];

function EventsPage() {
  const [view, setView] = useState<"cards" | "calendar">("cards");

  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Events"
        title={<>Events & <span className="italic">programmes</span></>}
        subtitle="Forums, workshops and policy dialogues happening across Nigeria and online."
        image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 reveal">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Upcoming</div>
              <h2 className="font-display text-4xl md:text-5xl">Coming up next</h2>
            </div>
            <div className="flex gap-1 border border-border rounded-full p-1">
              <button onClick={() => setView("cards")} className={`px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors ${view === "cards" ? "bg-gradient-primary text-white" : ""}`}>
                <LayoutGrid className="h-3.5 w-3.5" /> Cards
              </button>
              <button onClick={() => setView("calendar")} className={`px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors ${view === "calendar" ? "bg-gradient-primary text-white" : ""}`}>
                <CalendarIcon className="h-3.5 w-3.5" /> Calendar
              </button>
            </div>
          </div>

          {view === "cards" ? (
            <div className="grid md:grid-cols-3 gap-6">
              {upcoming.map((e, i) => (
                <div key={i} className="card-lift bg-card border border-border rounded-3xl overflow-hidden reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="bg-gradient-primary text-white p-6 flex items-end gap-4">
                    <div>
                      <div className="font-mono text-5xl leading-none">{e.day}</div>
                      <div className="font-mono text-xs uppercase tracking-[0.3em] mt-1">{e.mon} 2026</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl mb-2">{e.t}</h3>
                    <div className="flex items-center gap-1.5 text-sm text-text-muted mb-3">
                      <MapPin className="h-3.5 w-3.5" /> {e.loc}
                    </div>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{e.desc}</p>
                    <a href={e.reg} className="btn-gradient rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2">Register <ArrowRight className="h-3.5 w-3.5" /></a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-2 reveal">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="font-mono text-xs uppercase tracking-widest text-text-muted text-center py-2">{d}</div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 3;
                const ev = upcoming.find((u) => parseInt(u.day) === day);
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl border border-border p-2 text-sm ${day < 1 || day > 31 ? "opacity-30" : ""} ${ev ? "bg-gradient-primary text-white" : "bg-card"}`}
                  >
                    <div className="font-mono">{day > 0 && day <= 31 ? day : ""}</div>
                    {ev && <div className="text-[10px] mt-1 leading-tight line-clamp-2">{ev.t}</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Past events</div>
            <h2 className="font-display text-4xl md:text-5xl">In the archive</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {past.map((e, i) => (
              <div key={i} className="bg-card border border-border rounded-3xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="bg-secondary p-6 flex items-end gap-4">
                  <div>
                    <div className="font-mono text-4xl text-text-muted leading-none">{e.day}</div>
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mt-1">{e.mon} 2026</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">{e.t}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-text-muted mb-4">
                    <MapPin className="h-3.5 w-3.5" /> {e.loc}
                  </div>
                  <a href="#" className="btn-outline-grad rounded-full px-5 py-2 text-xs font-semibold inline-flex items-center gap-2">View report <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
