import leeds from "@/assets/partners/leeds.png";
import baze from "@/assets/partners/baze.png";
import cardiff from "@/assets/partners/cardiff.png";
import unesco from "@/assets/partners/unesco.png";
import worldbank from "@/assets/partners/worldbank.svg";

const partners = [
  { name: "University of Leeds", src: leeds },
  { name: "Baze University", src: baze },
  { name: "Cardiff University", src: cardiff },
  { name: "UNESCO", src: unesco },
  { name: "World Bank", src: worldbank },
];

export function PartnerMarquee() {
  // Duplicate the list for seamless looping
  const loop = [...partners, ...partners];

  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
          In collaboration with
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">
          Trusted by leading <span className="italic text-primary">institutions</span>
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex items-center gap-20 w-max">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 h-24 w-48 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              title={p.name}
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
