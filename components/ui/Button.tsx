import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-lg font-heading font-bold leading-none no-underline transition-[filter,background-color,transform] duration-150 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg px-5 py-3 text-[15px] shadow-[0_0_20px_-6px_var(--color-accent)] hover:bg-accent-600 hover:shadow-[0_0_26px_-4px_var(--color-accent)] active:bg-accent-700",
  secondary:
    "border border-divider px-5 py-3 text-[15px] text-text hover:bg-text/7 active:bg-text/14",
  ghost: "text-accent px-1 py-2 text-[13px] hover:bg-accent/10 active:bg-accent/18",
  invert: "bg-bg text-accent px-5 py-3 text-[15px] hover:bg-neutral-800",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  target,
  children,
}: {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  target?: string;
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const external = target === "_blank";
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
