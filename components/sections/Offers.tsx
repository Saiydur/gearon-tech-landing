import Reveal from "@/components/Reveal";
import { OFFERS } from "@/lib/data";

export default function Offers() {
  return (
    <section className="border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-21">
        <div className="mb-8.5 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
            Ways to start
          </h2>
          <p className="text-[15px] leading-[1.6] text-text/70">Pick the one that matches where you are.</p>
        </div>
        <Reveal stagger={0.08} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="group flex min-h-[230px] flex-col gap-3.5 rounded-xl border-2 border-divider px-6 py-6.5 transition-[border-color,box-shadow] duration-300 hover:border-accent/55 hover:shadow-[0_0_34px_-14px_var(--color-accent)]"
            >
              <div className="font-mono text-[13px] text-accent-300 transition-colors duration-300 group-hover:text-accent">
                {offer.tag}
              </div>
              <h3 className="font-heading text-[21px] leading-[1.15] font-bold tracking-[-0.015em]">
                {offer.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-text/78">{offer.copy}</p>
              <div className="mt-auto border-t border-divider pt-3.5 font-mono text-xs text-text/62">
                {offer.terms}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
