import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { useCountUp } from "@/lib/scroll-reveal";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact , C.M.M.R" },
      { name: "description", content: "An overview of C.M.M.R's research output, programmes and community reach." },
      { property: "og:title", content: "Our Impact , C.M.M.R" },
    ],
  }),
  component: ImpactPage,
});

function StatCard({ label, value, prefix = "", suffix = "" }: { label: string; value: number; prefix?: string; suffix?: string }) {
  const ref = useCountUp(value);
  return (
    <div className="card-lift bg-card border border-border rounded-3xl p-5 sm:p-8 relative overflow-hidden reveal min-w-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
      <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-text-muted mb-3 sm:mb-4">{label}</div>
      <div className="font-mono text-xl sm:text-3xl md:text-4xl text-foreground leading-none break-all whitespace-nowrap overflow-hidden">
        {prefix}<span ref={ref}>0</span>{suffix}
      </div>
    </div>
  );
}

function ImpactPage() {
  const tickColor = "#4A4A4A";
  const gridColor = "#E0E8DA";

  // Figures grounded in the C.M.M.R brochure: 40+ peer-reviewed publications,
  // 4 active research programmes, 3 partner universities, 1,200+ community members.
  const barData = {
    labels: ["Research & Policy", "Media Literacy", "Diaspora Network", "Publications"],
    datasets: [
      {
        label: "Programmes & outputs",
        data: [10, 8, 6, 16],
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
        borderColor: "#FFFFFF",
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
        eyebrow="Our Impact"
        title={<>Our impact <span className="italic">at a glance</span></>}
        subtitle="A transparent view of the research, partnerships and people behind C.M.M.R's work."
      />

      {/* STATS , sourced from the C.M.M.R brochure */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Peer-Reviewed Publications" value={40} suffix="+" />
            <StatCard label="Active Research Programmes" value={4} />
            <StatCard label="Partner Universities" value={3} />
            <StatCard label="Community Members Reached" value={1200} suffix="+" />
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8 reveal">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted mb-2">Output</div>
                <h3 className="font-display text-2xl">Outputs by Programme</h3>
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
    </>
  );
}
