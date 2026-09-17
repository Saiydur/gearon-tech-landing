"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import Counter from "@/components/Counter";
import { STATS } from "@/lib/data";

export default function HeroIntro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parts = el.querySelectorAll("[data-hero-part]");
    if (reduceMotion) {
      gsap.set(parts, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(parts, { opacity: 0, y: 20 });
      gsap.to(parts, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.05,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="min-w-0 flex-[1_1_520px] px-5 py-11 sm:px-8 sm:py-16 lg:px-16 lg:py-22">
      <p data-hero-part className="mb-6 text-[13px] text-accent-300">
        End-to-end software &amp; digital transformation, out of Dhaka
      </p>
      <h1
        data-hero-part
        className="mb-6.5 -ml-[0.055em] max-w-[17ch] font-heading text-[38px] leading-[1.04] font-bold tracking-[-0.025em] sm:text-[56px] lg:text-[74px]"
      >
        Software that survives contact with your business.
      </h1>
      <p data-hero-part className="mb-8 max-w-[56ch] text-[17px] leading-[1.65] text-text/78">
        GearON Tech builds, ships and runs the systems startups and enterprises depend on - from a two-week
        discovery sprint to hands-on support that stays long after launch.
      </p>
      <div data-hero-part className="mb-9 flex flex-wrap gap-3">
        <Button href="/#book" variant="primary">
          Book a discovery call
        </Button>
        <Button href="/work" variant="secondary">
          See the work
        </Button>
      </div>
      <div
        data-hero-part
        className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-divider pt-6 font-mono text-[13px] text-text/65"
      >
        {STATS.map((stat, i) => (
          <span key={stat.label} className="flex items-baseline gap-1.5">
            <span className="font-medium text-accent">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            {stat.label}
            {i < STATS.length - 1 && <span className="text-divider">/</span>}
          </span>
        ))}
        <span className="text-divider">/</span>
        <span>founded 2025</span>
      </div>
    </div>
  );
}
