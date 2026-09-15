"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Node = { id: number; cx: number; cy: number; r: number; tag?: string };

// A loose, hand-placed cluster rather than a perfect grid - twelve nodes of
// varied weight standing in for a hybrid team of engineers, designers, QA
// and DevOps (the disciplines already named in the copy beside this), wired
// together like a schematic instead of laid out as uniform placeholder tiles.
const NODES: Node[] = [
  { id: 1, cx: 55, cy: 68, r: 15, tag: "ENG" },
  { id: 2, cx: 128, cy: 36, r: 9 },
  { id: 3, cx: 200, cy: 70, r: 17, tag: "UX" },
  { id: 4, cx: 264, cy: 40, r: 9 },
  { id: 5, cx: 330, cy: 78, r: 13 },
  { id: 6, cx: 88, cy: 140, r: 10 },
  { id: 7, cx: 168, cy: 152, r: 18, tag: "QA" },
  { id: 8, cx: 238, cy: 134, r: 9 },
  { id: 9, cx: 304, cy: 158, r: 14 },
  { id: 10, cx: 54, cy: 216, r: 9 },
  { id: 11, cx: 152, cy: 226, r: 16, tag: "OPS" },
  { id: 12, cx: 262, cy: 214, r: 11 },
];

const EDGES: [number, number][] = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 6],
  [2, 7],
  [3, 7],
  [4, 8],
  [5, 9],
  [6, 7],
  [7, 8],
  [8, 9],
  [6, 10],
  [7, 11],
  [8, 11],
  [9, 12],
  [10, 11],
  [11, 12],
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
      aria-label="Schematic of the twelve-person team as a connected network of engineering, UX, QA and DevOps roles"
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
