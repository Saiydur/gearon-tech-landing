import Image from "next/image";
import Link from "next/link";
import mark from "@/public/gearon-mark.png";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/#process", label: "How we work" },
  { href: "/#book", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-divider px-5 py-9 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <Image src={mark} alt="" height={20} className="h-5 w-auto" />
          <span className="text-[13px] text-text/65">GearON Tech - part of GearON Group. © 2026</span>
        </div>
        <div className="flex flex-wrap gap-5 text-[13px]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-text no-underline">
              {link.label}
            </Link>
          ))}
          <a href="https://gearon.ai" target="_blank" rel="noopener" className="text-accent">
            GearON.ai ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
