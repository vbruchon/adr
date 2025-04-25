import { HeroSection } from "@/app/components/hero-section";
import { PartnersBanner } from "@/app/components/partners-banner";
import { Presentation } from "@/app/components/presentation-section";
import { ServicesBanner } from "@/app/components/services-banner";

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
