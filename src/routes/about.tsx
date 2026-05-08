import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { Linkedin } from "lucide-react";
import studentLaptop from "@/assets/brochure/student-laptop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About C.M.M.R , Our story, vision and team" },
      { name: "description", content: "Learn about the Centre for Media and Migration Research, our vision, mission, areas of focus and the team behind the work." },
      { property: "og:title", content: "About C.M.M.R" },
      { property: "og:description", content: "A multidisciplinary research hub at the intersection of media and migration." },
    ],
  }),
  component: AboutPage,
});

const objectives = [
  "Promote scholarly research at the intersections of media and migration, contributing to global understanding.",
  "Champion balanced and inclusive media representations of migration to counter stereotypes and misinformation.",
  "Provide evidence-based insights and recommendations to policymakers addressing migration challenges.",
  "Facilitate dialogue and partnerships that enhance cultural understanding between migrants and host communities.",
];

const focus = [
  "Migration trends among Nigerian youths",
  "Media portrayal of migration (Nigerian & international)",
  "Cultural identities of Nigerian diaspora communities",
  "Immigration policies and legal rights",
  "Economic, social & cultural impact of migration",
  "Psychological effects of migration on youth",
  "Vulnerabilities of migrant youths",
  "Media literacy enhancement for youth",
];

const team = [
  {
    name: "Professor Abiodun Adeniyi",
    title: "Executive Research Lead",
    bio: "Ph.D. (Leeds). Nigeria's first professor of diasporic communication. Dean of Post-Graduate Studies at Baze University. 40+ peer-reviewed works; consultant to the World Bank and EU.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Joan Hassan Tyrwin",
    title: "Research Associate",
    bio: "Ph.D. Communication & Media Studies, Anglia Ruskin University. MA in Communication, Media & Culture; MA in Development Studies & Policy Analysis, Kaduna State University.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Paul A. Obi",
    title: "Senior Research Lead",
    bio: "MA Political Communication, Cardiff University. Lecturer at Baze University; journalist with THISDAY Newspaper. Recipient of UNESCO Best Second Paper on Hate Speech.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ajuma Mary Abba",
    title: "Senior Research Lead",
    bio: "B.Sc. Mass Communication (First Class), Covenant University. MA Theatre Arts, University of Lagos (Distinction). Pursuing PhD in Media Arts, University of Abuja.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
];

function AboutPage() {
  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="About"
        title={<>About <span className="italic">C.M.M.R</span></>}
        subtitle="A multidisciplinary research hub exploring how media shapes migration narratives, diaspora experience and policy."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80"
      />

      {/* OUR STORY */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Our story</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">
              Built to bridge research, <span className="italic">media</span> and policy.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Centre for Media and Migration Research (C.M.M.R) is a multidisciplinary research hub dedicated to exploring the intersections of media, migration and diaspora communities. Based in Nigeria, we focus on how media shapes migration narratives, diaspora experiences and public perceptions.
              </p>
              <p>
                Our centre engages scholars, policymakers and practitioners to address the challenges and opportunities of global migration, fostering inclusive narratives and evidence-based solutions. Through research, dialogue and collaboration, we aim to build stronger, more connected societies , empowering voices and promoting cross-cultural understanding.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="rounded-3xl overflow-hidden img-hover shadow-card">
              <img src={studentLaptop} alt="Researcher at work" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {[
            {
              t: "Vision",
              d: "To be a leading hub for innovative research and policy development, shaping global conversations on migration through the transformative power of media , fostering inclusive, informed and resilient communities.",
            },
            {
              t: "Mission",
              d: "C.M.M.R advances research on media's role in migration. We provide insights for scholars and policymakers, fostering inclusive narratives and policies to build more informed, connected societies in Nigeria and beyond.",
            },
          ].map((c, i) => (
            <div key={c.t} className="card-lift bg-card border border-border rounded-3xl p-10 relative overflow-hidden reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">{c.t}</div>
              <p className="font-display text-2xl md:text-3xl leading-snug">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Objectives</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              Four pillars that <span className="italic">guide</span> our work.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((o, i) => (
              <div key={i} className="card-lift bg-card border border-border rounded-3xl p-8 flex gap-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-display text-6xl text-gradient leading-none">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-lg text-muted-foreground leading-relaxed pt-1">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24 bg-[#0F1A0D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#8DC142] mb-4">Areas of focus</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              Where we <span className="italic">concentrate</span> our research.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A3D26]">
            {focus.map((f, i) => (
              <div key={f} className="bg-[#0F1A0D] p-8 reveal hover:bg-[#152112] transition-colors group" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="font-mono text-xs text-[#8DC142]">0{i + 1}</div>
                <div className="mt-4 font-display text-xl leading-snug group-hover:text-[#8DC142] transition-colors">{f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Our team</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              The minds behind <span className="italic">the work.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <div key={m.name} className="card-lift bg-card border border-border rounded-3xl p-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="aspect-square rounded-2xl overflow-hidden mb-5 img-hover">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-xl leading-tight">{m.name}</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mt-1.5">{m.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4">{m.bio}</p>
                <a href="#" className="mt-4 inline-flex h-8 w-8 rounded-full border border-border items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
