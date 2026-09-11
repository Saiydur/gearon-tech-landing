import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import WorkFilters from "@/components/WorkFilters";

export const metadata: Metadata = {
  title: "Work - GearON Tech",
  description:
    "Ten builds across automotive, real estate, field services, education, travel and sales tooling, plus our own group product.",
};

export default function WorkPage() {
  return (
    <div>
      <section className="border-b-2 border-divider">
        <Reveal className="mx-auto max-w-[1560px] px-5 pt-11 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-19 lg:pb-12">
          <div className="mb-6 font-mono text-[13px] text-accent-300">case studies</div>
          <h1 className="mb-6 -ml-[0.055em] max-w-[18ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px] lg:text-[68px]">
            Systems in production.
          </h1>
          <p className="max-w-[58ch] text-[17px] leading-[1.65] text-text/82">
            Ten builds across automotive, real estate, field services, education, travel and sales tooling, plus
            our own group product. Filter by sector, service or stack.
          </p>
        </Reveal>
      </section>

      <WorkFilters />

      <section className="bg-accent text-bg">
        <Reveal className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-7 px-5 py-11 sm:px-8 sm:py-16 lg:px-16 lg:py-19">
          <h2 className="-ml-[0.055em] max-w-[20ch] font-heading text-[30px] leading-[1.06] font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Your system could be the next line on this page.
          </h2>
          <Button href="/#book" variant="invert">
            Book a discovery call
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
