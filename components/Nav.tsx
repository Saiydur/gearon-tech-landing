"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import mark from "@/public/gearon-mark.png";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/#process", label: "How we work" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 border-b-2 border-divider bg-bg px-5 py-3.5 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-[1560px] flex-wrap items-center gap-6">
        <Link href="/#top" className="mr-auto flex items-center gap-2 no-underline">
          <Image src={mark} alt="" height={24} className="h-6 w-auto" priority />
          <span className="font-heading text-[15px] font-bold text-text">GearON</span>
          <span className="border-l-2 border-divider pl-2.5 font-heading text-[13px] font-bold tracking-[0.14em] text-text/70 uppercase">
            Tech
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-[22px]">
          {links.map((link) => {
            const current =
              (link.href === "/work" || link.href === "/solutions") && pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm no-underline ${current ? "text-accent" : "text-text"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://gearon.ai"
            target="_blank"
            rel="noopener"
            className="text-sm text-accent no-underline"
          >
            GearON.ai ↗
          </a>
          <Button href="/#book" variant="primary" className="px-5! py-2.5! text-sm!">
            Book a call
          </Button>
        </div>
      </div>
    </nav>
  );
}
