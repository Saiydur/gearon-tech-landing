"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const final = value.toLocaleString() + suffix;
  const [display, setDisplay] = useState(final);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    let frame: number;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const duration = 900;
          const start = performance.now();
          const tick = (t: number) => {
            const progress = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(value * eased);
            setDisplay(progress === 1 ? final : current.toLocaleString());
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, final]);

  return <span ref={ref}>{display}</span>;
}
