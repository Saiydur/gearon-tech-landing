"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * A thin accent trace threaded behind the process steps, echoing the
 * "one path, five stages" copy. It only shows through the grid gaps
 * (the cards sit on top), so it reads as a circuit trace linking
 * discrete nodes rather than a decorative line drawn over content.
 */
export default function ProcessLine() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = wrap?.querySelector<HTMLDivElement>("[data-line-fill]");
    if (!wrap || !fill) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(fill, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: wrap,
        start: "top 82%",
        once: true,
        onEnter: () => gsap.to(fill, { scaleX: 1, duration: 1.2, ease: "power2.inOut", delay: 0.15 }),
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[54px] z-0 hidden lg:block"
    >
      <div className="mx-[9%] h-px bg-divider">
        <div data-line-fill className="h-px w-full bg-accent/60" />
      </div>
    </div>
  );
}
