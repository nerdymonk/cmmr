import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { Users, BookOpen, GraduationCap, Globe2, Handshake, Mic, FileText, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Programmes , C.M.R" },
      { name: "description", content: "C.M.R's recurring forums, workshops, training and dialogues drawn from our published agenda." },
      { property: "og:title", content: "Events & Programmes , C.M.R" },
    ],
  }),
  component: EventsPage,
});

// The eight agenda items published in the C.M.R brochure.
const agenda = [
  {
    icon: Users,
    title: "Workshops for scholars and policymakers",
    desc: "Convenings on evidence-based migration policies, bringing researchers and decision-makers into the same room.",
  },
  {
    icon: Mic,
    title: "Training for journalists",
    desc: "Hands-on sessions on ethical reporting of migration , accuracy, dignity and informed framing.",
  },
  {
    icon: GraduationCap,
    title: "Youth education campaigns",
    desc: "Programmes that surface the realities of migration for young Nigerians considering their options.",
  },
  {
    icon: Globe2,
    title: "Annual forums",
    desc: "Flagship gatherings on migration, identity and community-building across Nigeria and the diaspora.",
  },
  {
    icon: Handshake,
    title: "Diaspora network creation",
    desc: "Spaces for return, connection and cultural exchange between Nigerians at home and abroad.",
  },
  {
    icon: Lightbulb,
    title: "Mentorship programmes",
    desc: "Structured pairings that connect Nigerian youth with diaspora professionals across disciplines.",
  },
  {
    icon: BookOpen,
    title: "Research partnerships",
    desc: "Joint work with local and international institutions to broaden our evidence base.",
  },
  {
    icon: FileText,
    title: "Peer-reviewed journal & publications",
    desc: "Our journal, working papers and practical guides for scholars, practitioners and the public.",
  },
];

function EventsPage() {
  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Events & Programmes"
        title={<>What we <span className="italic">convene</span></>}
        subtitle="C.M.R's work runs on a recurring agenda of forums, workshops, training and dialogues , published in our brochure and delivered year-round."
        image="/media/father-daughter-camera.png"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Our agenda</div>
            <h2 className="font-display text-4xl md:text-5xl">Eight strands of work</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rather than one-off events, C.M.R operates a continuous programme. Each strand below is drawn directly from our published brochure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {agenda.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="card-lift bg-card border border-border rounded-3xl p-8 reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2">
                    Agenda · {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl mb-3 leading-tight">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Get involved</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Interested in attending or partnering?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Specific dates and venues for upcoming forums, workshops and training sessions are announced as they are scheduled. Reach out and we will keep you informed.
          </p>
          <a href="/contact" className="btn-gradient rounded-full px-7 py-3 text-sm font-semibold inline-flex items-center gap-2">
            Contact C.M.R
          </a>
        </div>
      </section>
    </>
  );
}
