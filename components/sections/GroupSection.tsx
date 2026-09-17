import Button from "@/components/ui/Button";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

export default function GroupSection() {
  return (
    <section className="border-b-2 border-divider bg-surface">
      <div className="mx-auto flex max-w-[1560px] flex-wrap">
        <Reveal className="min-w-0 flex-[1_1_400px] px-5 py-11 sm:px-8 sm:py-14 lg:px-16 lg:py-18">
          <div className="mb-5 font-mono text-[13px] text-accent-300">my own product</div>
          <h2 className="mb-4.5 max-w-[20ch] font-heading text-[26px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-3xl lg:text-[38px]">
            I do not only build for other people.
          </h2>
          <p className="mb-6.5 max-w-[52ch] text-base leading-[1.65] text-text/80">
            GearON.ai is my own SaaS product, engineered the same way I build for clients - a microservice
            platform on Next.js, NestJS, ASP.NET Core and React Native serving 3,000+ users. The standards I hold
            client systems to are the ones I run my own on.
          </p>
          <Button href="https://gearon.ai" target="_blank" variant="secondary" className="px-4.5! py-2.5!">
            Visit GearON.ai ↗
          </Button>
        </Reveal>
        <div className="flex min-w-0 flex-[1_1_300px] flex-wrap border-l-2 border-divider">
          <div className="flex-[1_1_150px] border-b border-divider px-7 py-7 sm:py-11">
            <div className="font-heading text-[34px] leading-none font-bold text-accent">
              <Counter value={3000} suffix="+" />
            </div>
            <div className="mt-2 font-mono text-[13px] text-text/65">users</div>
          </div>
          <div className="flex-[1_1_150px] border-b border-l border-divider px-7 py-7 sm:py-11">
            <div className="font-heading text-[34px] leading-none font-bold text-accent">
              <Counter value={4} />
            </div>
            <div className="mt-2 font-mono text-[13px] text-text/65">runtimes, one platform</div>
          </div>
          <div className="flex-[1_1_100%] px-7 py-7 sm:py-11">
            <div className="font-mono text-[13px] leading-[1.6] text-text/76">
              Microservices, PostgreSQL, MongoDB, Redis, queue-driven workloads
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
