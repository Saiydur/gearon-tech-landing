import Reveal from "@/components/Reveal";
import { STEPS } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section id="process" className="border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-21">
        <div className="mb-8.5">
          <h2 className="mb-2.5 font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
            How we work
          </h2>
          <p className="max-w-[54ch] text-base leading-[1.6] text-text/78">
            Five stages, one team, no handover cliff.
          </p>
        </div>
        <Reveal stagger={0.1} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="rounded-lg border border-divider bg-bg px-5.5 py-6.5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 font-mono text-[13px] text-accent">{step.n}</div>
              <h3 className="mb-3 font-heading text-lg leading-[1.2] font-bold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-sm leading-[1.6] text-text/76">{step.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
