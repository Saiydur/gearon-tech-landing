import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

export default function BookCall() {
  return (
    <section id="book" className="bg-accent text-bg">
      <Reveal className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-22">
        <h2 className="mb-9 -ml-[0.055em] max-w-[18ch] font-heading text-[32px] leading-[1.06] font-bold tracking-[-0.02em] sm:text-5xl lg:text-[58px]">
          Tell us what breaks. We&apos;ll tell you what it takes.
        </h2>
        <div className="flex flex-wrap gap-8">
          <div className="min-w-0 flex-[1_1_320px] rounded-xl border-2 border-bg px-6.5 py-6.5">
            <div className="mb-4.5 font-mono text-[13px] opacity-85">Book a 30-minute call</div>
            <p className="mb-5 text-[15px] leading-[1.6] opacity-92">
              Bring the messy version - a spreadsheet, a stalled repo, a system that buckles at month-end. You
              leave with scope, architecture and a number.
            </p>
            <Button href="https://calendly.com" target="_blank" variant="invert">
              Pick a time
            </Button>
          </div>
          <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-4.5">
            <div>
              <div className="mb-1.5 font-mono text-[13px] opacity-70">email</div>
              <div className="font-heading text-[19px] leading-[1.3] font-bold">hello@gearon.ai</div>
            </div>
            <div>
              <div className="mb-1.5 font-mono text-[13px] opacity-70">studio</div>
              <div className="font-heading text-[19px] leading-[1.3] font-bold">Dhaka, Bangladesh - hybrid</div>
            </div>
            <div>
              <div className="mb-1.5 font-mono text-[13px] opacity-70">group</div>
              <div className="font-heading text-[19px] leading-[1.3] font-bold">gearon.ai</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
