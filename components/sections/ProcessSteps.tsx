import Reveal from "@/components/Reveal";
import ProcessLine from "@/components/ProcessLine";
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
        <div className="relative">
          <ProcessLine />
          <Reveal stagger={0.1} className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="group relative rounded-lg border border-divider bg-bg px-5.5 py-6.5 transition-colors duration-300 before:absolute before:top-0 before:left-0 before:h-3 before:w-3 before:border-t-2 before:border-l-2 before:border-accent before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:right-0 after:bottom-0 after:h-3 after:w-3 after:border-r-2 after:border-b-2 after:border-accent after:opacity-0 after:transition-opacity after:duration-300 before:content-[''] after:content-[''] hover:border-accent/45 hover:before:opacity-100 hover:after:opacity-100"
              >
                <div className="mb-4 flex h-6 w-fit min-w-6 items-center justify-center rounded-sm border border-divider px-1.5 font-mono text-[13px] text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                  {step.n}
                </div>
                <h3 className="mb-3 font-heading text-lg leading-[1.2] font-bold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.6] text-text/76">{step.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
