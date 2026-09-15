import Reveal from "@/components/Reveal";

// Placeholder structure only - no invented client names or quotes.
// Swap each dashed slot for a real logo/quote/photo as clients and bios are confirmed.
const LOGO_SLOTS = Array.from({ length: 5 }, (_, i) => i);

export default function TrustSignals() {
  return (
    <section className="border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-11 sm:px-8 sm:py-14 lg:px-16 lg:py-18">
        <Reveal className="mb-8.5 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="mb-2.5 font-mono text-[13px] text-accent-300">who&apos;s said yes</div>
            <h2 className="max-w-[26ch] font-heading text-2xl leading-[1.15] font-bold tracking-[-0.02em] sm:text-[30px]">
              Logos go up as clients sign off on being named.
            </h2>
          </div>
          <p className="max-w-[38ch] text-sm leading-[1.6] text-text/70">
            Several of our clients work under NDA. Ask us directly at{" "}
            <a href="mailto:hello@gearon.ai" className="text-accent">
              hello@gearon.ai
            </a>{" "}
            and we&apos;ll connect you with references.
          </p>
        </Reveal>

        <Reveal stagger={0.05} className="mb-9 flex flex-wrap gap-3.5">
          {LOGO_SLOTS.map((i) => (
            <div
              key={i}
              className="flex h-16 flex-[1_1_140px] items-center justify-center rounded-lg border border-dashed border-divider text-xs text-text/45"
            >
              add logo
            </div>
          ))}
        </Reveal>

        <Reveal className="flex flex-wrap items-center gap-5 border-t-2 border-divider pt-7">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-dashed border-divider font-mono text-xs text-text/45">
            photo
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-heading text-base font-bold text-text/50">Founder name</div>
            <div className="text-[13px] text-text/45">Role / title - LinkedIn ↗</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
