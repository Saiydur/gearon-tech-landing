"use client";

import { useId } from "react";

const TEETH = 20;

export default function GearDial({ className = "" }: { className?: string }) {
  const gradientId = useId();

  const ticks = Array.from({ length: TEETH }, (_, i) => {
    const angle = (i / TEETH) * 360;
    return (
      <line key={i} x1="100" y1="6" x2="100" y2="18" transform={`rotate(${angle} 100 100)`} />
    );
  });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      stroke={`url(#${gradientId})`}
      fill="none"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-accent-blue)" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="94" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="6" fill={`url(#${gradientId})`} stroke="none" />
      {ticks}
    </svg>
  );
}
