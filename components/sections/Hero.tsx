import BookingWidget from "@/components/BookingWidget";
import GearDial from "@/components/GearDial";
import HeroIntro from "@/components/sections/HeroIntro";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-divider">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <GearDial className="gear-turn pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] opacity-[0.12] sm:-top-32 sm:-right-32 sm:h-[520px] sm:w-[520px]" />
      <div className="relative mx-auto flex max-w-[1560px] flex-wrap">
        <HeroIntro />
        <BookingWidget />
      </div>
    </section>
  );
}
