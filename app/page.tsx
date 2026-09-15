import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import Applications from "@/components/sections/Applications";
import GroupSection from "@/components/sections/GroupSection";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Offers from "@/components/sections/Offers";
import TeamSection from "@/components/sections/TeamSection";
import TrustSignals from "@/components/sections/TrustSignals";
import FAQ from "@/components/sections/FAQ";
import BookCall from "@/components/sections/BookCall";

export default function Home() {
  return (
    <div>
      <Hero />
      <SelectedWork />
      <Services />
      <Applications />
      <GroupSection />
      <ProcessSteps />
      <Offers />
      <TeamSection />
      <TrustSignals />
      <FAQ />
      <BookCall />
    </div>
  );
}
