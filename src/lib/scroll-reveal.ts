import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function useCountUp(target: number, duration = 2000) {
  // Returns a ref callback that triggers count-up on enter
  return (node: HTMLElement | null) => {
    if (!node) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const val = Math.round(target * easeOut(p));
              node.textContent = formatNum(val);
              if (p < 1) requestAnimationFrame(tick);
              else node.textContent = formatNum(target);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(node);
  };
}

function formatNum(n: number) {
  return n.toLocaleString("en-NG");
}
