import { HeroSection } from "@/src/components/hero-section";
import { PartnersBanner } from "@/src/components/partners-banner";
import { Presentation } from "@/src/components/presentation-section";
import { ServicesBanner } from "@/src/components/services-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Presentation />
      <ServicesBanner />
      <PartnersBanner />
    </>
  );
}
