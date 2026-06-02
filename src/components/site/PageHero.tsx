import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  height = "min-h-[60vh]",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  height?: string;
}) {
  return (
    <section className={`relative ${height} flex items-end overflow-hidden pt-32 pb-16`}>
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: image
            ? "linear-gradient(135deg, rgba(15,76,129,0.85) 0%, rgba(43,168,224,0.7) 60%, rgba(109,205,240,0.55) 100%)"
            : "linear-gradient(135deg, #0F4C81 0%, #2BA8E0 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/patterns/pattern-green.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "700px auto",
          opacity: 0.22,
          mixBlendMode: "screen",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {eyebrow && (
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/80 mb-4 fade-up" style={{ animationDelay: "0.1s" }}>
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] max-w-5xl fade-up" style={{ animationDelay: "0.2s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl fade-up" style={{ animationDelay: "0.35s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
