import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PageEffects } from "@/components/site/PageEffects";
import { useState } from "react";
import { CreditCard, Building2, Smartphone, ShieldCheck, Award, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Fund the research that changes lives | C.M.M.R" },
      { name: "description", content: "Support C.M.M.R's research, training and community programmes. Every contribution powers evidence-based solutions." },
      { property: "og:title", content: "Donate — C.M.M.R" },
    ],
  }),
  component: DonatePage,
});

const presets = [2000, 5000, 10000, 25000, 50000];

function impactFor(amount: number): string {
  if (amount >= 50000) return "Your gift sponsors a full week of community workshops in two cities.";
  if (amount >= 25000) return "Your gift sponsors one researcher's travel to a policy dialogue.";
  if (amount >= 10000) return "Your gift trains five journalists in ethical migration reporting.";
  if (amount >= 5000) return "Your gift funds one youth's access to migration literacy resources for a month.";
  return "Your gift helps print and distribute migration awareness materials to schools.";
}

function DonatePage() {
  const [amount, setAmount] = useState<number | "custom">(5000);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [dedicate, setDedicate] = useState(false);

  const finalAmount = amount === "custom" ? parseInt(custom || "0") : amount;

  return (
    <>
      <PageEffects />
      <PageHero
        eyebrow="Support our work"
        title={<>Fund the research that <span className="italic">changes lives</span></>}
        subtitle="Every contribution powers evidence-based solutions to Nigeria's migration challenges."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          {/* FORM */}
          <div className="lg:col-span-8 space-y-10">
            {/* Amount */}
            <div className="bg-card border border-border rounded-3xl p-8 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Choose amount</div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setAmount(p)}
                    className={`py-4 rounded-xl text-sm font-semibold transition-all ${amount === p ? "bg-gradient-primary text-white shadow-glow" : "border border-border hover:border-primary"}`}
                  >
                    ₦{p.toLocaleString()}
                  </button>
                ))}
                <button
                  onClick={() => setAmount("custom")}
                  className={`py-4 rounded-xl text-sm font-semibold transition-all ${amount === "custom" ? "bg-gradient-primary text-white shadow-glow" : "border border-border hover:border-primary"}`}
                >
                  Custom
                </button>
              </div>
              {amount === "custom" && (
                <div className="mt-4 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-lg text-primary">₦</span>
                  <input
                    type="number"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="0"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border border-border bg-background font-mono text-lg focus:outline-none focus:border-primary"
                  />
                </div>
              )}

              <div className="mt-6 flex items-center gap-3 p-1 bg-secondary rounded-full w-fit">
                {(["one-time", "monthly"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setRecurring(t === "monthly")}
                    className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${(t === "monthly") === recurring ? "bg-gradient-primary text-white" : "text-text-muted"}`}
                  >
                    {t === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-gradient-primary-soft text-white">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">Your impact</div>
                <p className="font-display text-xl">{impactFor(finalAmount || 0)}</p>
              </div>
            </div>

            {/* Payment methods */}
            <div className="bg-card border border-border rounded-3xl p-8 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Payment method</div>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {[
                  { Icon: CreditCard, l: "Bank Card" },
                  { Icon: Building2, l: "Bank Transfer" },
                  { Icon: Smartphone, l: "USSD" },
                ].map((p, i) => (
                  <button key={i} className="card-lift flex items-center gap-3 p-4 rounded-2xl border border-border bg-secondary hover:border-primary text-left">
                    <p.Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">{p.l}</span>
                  </button>
                ))}
              </div>
              <div className="rounded-2xl bg-secondary p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-3">Bank transfer details</div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-text-muted">Account name</dt><dd className="font-semibold">C.M.M.R Foundation</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Bank</dt><dd className="font-semibold">Access Bank</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Account number</dt><dd className="font-mono font-semibold">0123456789</dd></div>
                </dl>
              </div>
            </div>

            {/* Donor form */}
            <form className="bg-card border border-border rounded-3xl p-8 reveal space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">Your details</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Full name" className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" required />
                <input type="email" placeholder="Email address" className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" required />
              </div>
              <input placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />

              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input type="checkbox" checked={dedicate} onChange={(e) => setDedicate(e.target.checked)} className="h-4 w-4 accent-primary" />
                Dedicate this donation
              </label>
              {dedicate && (
                <textarea placeholder="In memory of, in honour of..." rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
              )}

              <button className="w-full btn-gradient rounded-full py-4 font-semibold">
                Complete Donation {finalAmount > 0 ? `· ₦${finalAmount.toLocaleString()}${recurring ? "/mo" : ""}` : ""}
              </button>

              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { Icon: ShieldCheck, l: "100% Secure" },
                  { Icon: Award, l: "Registered NGO" },
                  { Icon: FileCheck2, l: "Auto receipts" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-text-muted">
                    <t.Icon className="h-4 w-4 text-primary" /> {t.l}
                  </div>
                ))}
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0F1A0D] text-white rounded-3xl p-8 reveal">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#8DC142] mb-4">Why give</div>
              <p className="font-display text-2xl leading-snug mb-6">
                Your gift turns research into <span className="italic text-[#8DC142]">policy</span>, and policy into lives changed.
              </p>
              <ul className="space-y-3 text-sm text-[#B8CCB3]">
                <li>• Independent, evidence-based research</li>
                <li>• Direct community engagement in 12 locations</li>
                <li>• Free training for journalists and youth</li>
                <li>• Transparent annual impact reports</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 reveal" style={{ transitionDelay: "80ms" }}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">Tax-deductible</div>
              <p className="text-sm text-muted-foreground">
                C.M.M.R is a registered Nigerian non-profit. All donations are eligible for tax relief under applicable law.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
