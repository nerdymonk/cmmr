import { useEffect } from "react";
import { useScrollReveal } from "@/lib/scroll-reveal";

export function PageEffects() {
  useScrollReveal();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);
  return null;
}
