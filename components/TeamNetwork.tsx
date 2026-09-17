"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Node = { id: number; cx: number; cy: number; r: number; tag?: string };

// A hub-and-spoke schematic, not a mesh: one founder (the center node) wired
// directly to each discipline they cover, rather than a network standing in
// for a multi-person team.
const NODES: Node[] = [
  { id: 0, cx: 180, cy: 130, r: 22 },
  { id: 1, cx: 180, cy: 35, r: 13, tag: "ENG" },
  { id: 2, cx: 270, cy: 101, r: 13, tag: "AI" },
  { id: 3, cx: 236, cy: 207, r: 13, tag: "DEVOPS" },
  { id: 4, cx: 124, cy: 207, r: 13, tag: "QA" },
  { id: 5, cx: 90, cy: 101, r: 13, tag: "UX" },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
];

export default function TeamNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const svg = svgRef.current;
    if (!svg) return;
    const circles = Array.from(svg.querySelectorAll<SVGCircleElement>("[data-node]"));

    const ctx = gsap.context(() => {
      circles.forEach((c, i) => {
        gsap.to(c, {
          opacity: 0.55,
          duration: 2 + (i % 4) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.18,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const edgeActive = (a: number, b: number) => hovered === a || hovered === b;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 260"
      className="h-auto w-full max-w-[380px]"
      role="img"
      aria-label="Schematic of one founder as a central hub connected to the engineering, AI, DevOps, QA and UX roles they cover"
    >
      {EDGES.map(([a, b], i) => {
        const na = NODES.find((n) => n.id === a)!;
        const nb = NODES.find((n) => n.id === b)!;
        const active = edgeActive(a, b);
        return (
          <line
            key={i}
            x1={na.cx}
            y1={na.cy}
            x2={nb.cx}
            y2={nb.cy}
            stroke={active ? "var(--color-accent)" : "var(--color-divider)"}
            strokeWidth={active ? 1.4 : 1}
            className="transition-[stroke,stroke-width] duration-300"
          />
        );
      })}
      {NODES.map((n) => {
        const active = hovered === n.id;
        return (
          <g
            key={n.id}
            onMouseEnter={() => setHovered(n.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(n.id)}
            onBlur={() => setHovered(null)}
            tabIndex={n.tag ? 0 : -1}
            role={n.tag ? "img" : undefined}
            aria-label={n.tag ? `${n.tag} role` : undefined}
          >
            <circle
              data-node
              cx={n.cx}
              cy={n.cy}
              r={active ? n.r + 3 : n.r}
              fill={active ? "var(--color-accent)" : "var(--color-bg)"}
              stroke={active ? "var(--color-accent)" : "var(--color-divider)"}
              strokeWidth="1.5"
              className="transition-[fill,stroke,r] duration-300"
            />
            {n.tag && (
              <text
                x={n.cx}
                y={n.cy + n.r + 15}
                textAnchor="middle"
                className="font-mono text-[9px] tracking-[0.06em] uppercase select-none"
                fill={
                  active ? "var(--color-accent)" : "color-mix(in srgb, var(--color-text) 60%, transparent)"
                }
              >
                {n.tag}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
