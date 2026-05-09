import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { ArrowRight, BookOpen, GraduationCap, Users, FileText, MessageSquare, Calendar, Network, Library } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Programmes , C.M.R" },
      { name: "description", content: "Five core programmes spanning research, media literacy, diaspora networks, publications and community outreach." },
      { property: "og:title", content: "Programmes , C.M.R" },
    ],
  }),
  component: ProgrammesPage,
});

const programmes = [
  {
    Icon: BookOpen,
    t: "Research & Policy Development",
    d: "Original research and policy briefs that inform government, civil society and international agencies on Nigeria's evolving migration landscape.",
    img: "/media/podcast-host-waving.jpg",
  },
  {
    Icon: GraduationCap,
    t: "Media Literacy & Youth Education",
    d: "Workshops and curricula equipping young Nigerians to critically assess migration narratives across traditional and social media.",
    img: "/media/woman-camera-bw.png",
  },
  {
    Icon: Users,
    t: "Diaspora Network & Mentorship",
    d: "Connecting Nigerian youth with diaspora professionals for guidance, opportunity and cross-cultural exchange.",
    img: "/media/youth-phones.png",
  },
  {
    Icon: Library,
    t: "Publications & Knowledge Dissemination",
    d: "A peer-reviewed journal, working papers and practical guides that translate research into accessible insight.",
    img: "/media/content-creator-review.jpg",
  },
  {
    Icon: MessageSquare,
    t: "Community Outreach & Workshops",
    d: "On-the-ground engagement in towns and universities , bringing migration knowledge directly to those most affected.",
    img: "/media/father-daughter-camera.png",
  },
];

const agenda = [
  { t: "Workshops on evidence-based migration policy", d: "Convening scholars and policymakers to develop practical, research-grounded migration frameworks." },
  { t: "Training journalists on ethical reporting", d: "Equipping media practitioners with the tools to cover migration with nuance, accuracy and care." },
  { t: "Youth education campaigns", d: "Public campaigns demystifying migration realities , risks, rights and legal pathways." },
  { t: "Annual forums on migration & identity", d: "A flagship convening on community-building, identity and the diaspora experience." },
  { t: "Diaspora network creation", d: "Structured networks supporting return, connection and cultural exchange between Nigeria and its diaspora." },
  { t: "Mentorship between youth and diaspora", d: "Pairing aspiring migrants with diaspora members for honest guidance and professional development." },
  { t: "Research partnerships", d: "Joint projects with local and international universities, NGOs and policy institutes." },
  { t: "Peer-reviewed journal & publications", d: "A dedicated outlet for migration, media and diaspora scholarship , plus practical guides for the public." },
];

function ProgrammesPage() {
  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Programmes"
        title={<>Our <span className="italic">programmes</span></>}
        subtitle="Research, training, mentorship and publication , five interconnected programmes advancing C.M.R's mission."
        image="/media/designer-retouching.jpg"
      />

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center reveal">
          <p className="font-display text-2xl md:text-4xl leading-snug text-foreground">
            We work where research meets practice , producing knowledge, training the next generation of media professionals, and convening the conversations that shape policy.
          </p>
        </div>
      </section>

      {/* PROGRAMME CARDS , alternating */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {programmes.map((p, i) => (
            <div
              key={p.t}
              className={`grid lg:grid-cols-12 gap-10 items-center reveal ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="lg:col-span-6 [direction:ltr]">
                <div className="img-hover rounded-3xl overflow-hidden aspect-[5/4] shadow-card">
                  <img src={p.img} alt={p.t} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6 [direction:ltr]">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-6">
                  <p.Icon className="h-7 w-7" />
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Programme 0{i + 1}</div>
                <h3 className="font-display text-3xl md:text-5xl leading-[1.05] mb-5">{p.t}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">{p.d}</p>
                <Link to="/contact" className="btn-outline-grad inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Agenda</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Eight <span className="italic">commitments</span>, in detail.
            </h2>
          </div>
          <Accordion type="single" collapsible className="reveal">
            {agenda.map((a, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left hover:no-underline group">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-primary">0{i + 1}</span>
                    <span className="font-display text-xl md:text-2xl group-hover:text-primary transition-colors">{a.t}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 pb-6 text-base text-muted-foreground leading-relaxed">{a.d}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
