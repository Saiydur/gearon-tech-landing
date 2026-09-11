import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-21">
        <h2 className="mb-8.5 font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
          What we do
        </h2>
        <Reveal stagger={0.07} className="border-t-2 border-divider">
          {SERVICES.map((service) => (
            <div
              key={service.code}
              className="flex flex-wrap items-baseline gap-x-10 gap-y-3 border-b border-divider py-6.5"
            >
              <div className="flex-[0_0_54px] font-mono text-[13px] leading-[1.5] text-accent">{service.code}</div>
              <h3 className="min-w-0 flex-[1_1_300px] font-heading text-xl leading-[1.2] font-bold tracking-[-0.015em] sm:text-2xl">
                {service.title}
              </h3>
              <p className="min-w-0 flex-[1.4_1_340px] text-[15.5px] leading-[1.65] text-text/78">
                {service.copy}
              </p>
            </div>
          ))}
        </Reveal>
        <p className="mt-6.5 max-w-[64ch] text-[15px] leading-[1.7] text-text/70">
          Also on the bench: cloud infrastructure and DevOps, UI/UX design, QA and test automation, cybersecurity,
          data analytics, legacy modernisation, third-party integrations and ongoing maintenance.
        </p>
      </div>
    </section>
  );
}
