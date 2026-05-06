import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { useCountUp } from "@/lib/scroll-reveal";
import { useEffect, useRef, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Download, CheckCircle2, FileText, Handshake, Coins } from "lucide-react";
import { useTheme } from "@/lib/theme";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Live Impact Dashboard — C.M.M.R" },
      { name: "description", content: "Real-time view of C.M.M.R's research output, beneficiaries reached, funds raised and active programmes." },
      { property: "og:title", content: "Live Impact Dashboard — C.M.M.R" },
    ],
  }),
  component: ImpactPage,
});

function StatCard({ label, value, prefix = "", suffix = "" }: { label: string; value: number; prefix?: string; suffix?: string }) {
  const ref = useCountUp(value);
  return (
    <div className="card-lift bg-card border border-border rounded-3xl p-8 relative overflow-hidden reveal">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
      <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted mb-4">{label}</div>
      <div className="font-mono text-4xl md:text-5xl text-foreground leading-none">
        {prefix}<span ref={ref}>0</span>{suffix}
      </div>
    </div>
  );
}

const feed = [
  { icon: "✅", text: "Workshop completed — Abuja, April 2026 — 45 participants", color: "text-primary" },
  { icon: "📄", text: "New research paper published — Migration & Youth Media", color: "text-primary" },
  { icon: "🤝", text: "Partnership signed — International Migration Institute", color: "text-primary" },
  { icon: "💰", text: "Donation received — ₦150,000", color: "text-primary" },
  { icon: "🎓", text: "Mentorship cohort launched — 32 youth pairs activated", color: "text-primary" },
  { icon: "📰", text: "Op-ed published in THISDAY: \"Reframing migration narratives\"", color: "text-primary" },
  { icon: "✅", text: "Media literacy training — Lagos, March 2026 — 78 attendees", color: "text-primary" },
];

function ImpactPage() {
  const { theme } = useTheme();
  const [tick, setTick] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setTick((t) => t + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const isDark = theme === "dark";
  const tickColor = isDark ? "#B8CCB3" : "#4A4A4A";
  const gridColor = isDark ? "#2A3D26" : "#E0E8DA";

  const barData = {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Publications",
        data: [4, 7, 9, 12, 14],
        backgroundColor: "#4A9B3A",
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ["Research & Policy", "Media Literacy", "Diaspora Network", "Publications"],
    datasets: [
      {
        data: [35, 28, 20, 17],
        backgroundColor: ["#1E5C1A", "#4A9B3A", "#7DC142", "#8DC142"],
        borderColor: isDark ? "#1A2B17" : "#FFFFFF",
        borderWidth: 4,
      },
    ],
  };

  const chartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: tickColor, font: { family: "DM Sans" } } } },
    scales: {
      x: { ticks: { color: tickColor }, grid: { color: gridColor } },
      y: { ticks: { color: tickColor }, grid: { color: gridColor } },
    },
  };

  const doughnutOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" as const, labels: { color: tickColor, font: { family: "DM Sans" }, padding: 16 } },
    },
    cutout: "65%",
  };

  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Live Dashboard"
        title={<>Our impact <span className="italic">in real time</span></>}
        subtitle="A transparent view of the research, partnerships and people behind C.M.M.R's work."
      />

      {/* STATS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Beneficiaries Reached This Year" value={1247} />
            <StatCard label="Funds Raised to Date" value={4850000} prefix="₦" />
            <StatCard label="Active Programmes" value={4} />
            <StatCard label="Communities Served" value={12} />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8 reveal">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted mb-2">Output</div>
                <h3 className="font-display text-2xl">Research Output by Year</h3>
              </div>
            </div>
            <div className="h-72">
              <Bar data={barData} options={chartOpts} />
            </div>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8 reveal" style={{ transitionDelay: "100ms" }}>
            <div className="mb-6">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted mb-2">Allocation</div>
              <h3 className="font-display text-2xl">Programme Focus Areas</h3>
            </div>
            <div className="h-72">
              <Doughnut data={doughnutData} options={doughnutOpts} />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS BARS */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {[
            { l: "Annual Fundraising Goal", p: 64 },
            { l: "Beneficiary Target (2026)", p: 42 },
            { l: "Research Publications Target", p: 78 },
          ].map((b, i) => (
            <div key={b.l} className="bg-card border border-border rounded-3xl p-8 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex justify-between items-end mb-3">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted">{b.l}</div>
                <div className="font-mono text-2xl text-primary">{b.p}%</div>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-[2000ms]"
                  style={{ width: `${b.p}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY FEED + DOWNLOAD */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div
            className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 reveal"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot inline-block" />
                  Live Activity
                </div>
                <h3 className="font-display text-2xl">Recent updates</h3>
              </div>
            </div>
            <div className="space-y-3 max-h-80 overflow-hidden relative">
              {feed.map((f, i) => {
                const offset = (tick + i) % feed.length;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-secondary border border-border transition-all duration-700"
                    style={{ transform: `translateY(-${offset * 0}px)`, opacity: 1 - offset * 0.05 }}
                  >
                    <span className="text-2xl">{f.icon}</span>
                    <span className="text-sm text-foreground leading-relaxed">{f.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-primary text-white rounded-3xl p-8 flex flex-col justify-between reveal" style={{ transitionDelay: "100ms" }}>
            <div>
              <FileText className="h-10 w-10 mb-6" />
              <h3 className="font-display text-3xl leading-tight mb-3">Annual Impact Report</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                A comprehensive look at our 2025 research, partnerships and community impact.
              </p>
            </div>
            <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary-dark font-semibold px-6 py-3 text-sm hover:scale-[1.02] transition-transform">
              <Download className="h-4 w-4" /> Download (PDF)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
