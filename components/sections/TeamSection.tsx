import Reveal from "@/components/Reveal";

export default function TeamSection() {
  return (
    <section className="border-b-2 border-divider">
      <div className="mx-auto flex max-w-[1560px] flex-wrap">
        <Reveal className="flex min-w-0 flex-[1_1_360px] flex-col justify-center px-5 py-11 sm:px-8 sm:py-14 lg:px-16 lg:py-18">
          <div className="mb-5 font-mono text-[13px] text-accent-300">the team</div>
          <h2 className="mb-4.5 max-w-[22ch] font-heading text-[26px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[32px] lg:text-4xl">
            Twelve people, hybrid, shipping since 2025.
          </h2>
          <p className="max-w-[50ch] text-base leading-[1.65] text-text/80">
            Engineers, designers, QA and DevOps in one hybrid team out of Bangladesh, working across BD and
            overseas time zones. Small enough that you know who writes your code; senior enough that you do not
            have to check.
          </p>
        </Reveal>
        <div className="blueprint-grid relative flex min-w-0 flex-[1_1_420px] items-center justify-center overflow-hidden border-l-2 border-divider bg-surface px-8 py-14">
          <div>
            <Reveal stagger={0.03} className="grid grid-cols-4 gap-3">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-md border border-divider bg-bg transition-colors duration-300 hover:border-accent hover:bg-accent/10"
                />
              ))}
            </Reveal>
            <div className="mt-5 font-mono text-[13px] text-text/60">12 builders, one team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
