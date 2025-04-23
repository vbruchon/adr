import { ServicesList } from "./components/services-list";
import { SupportedVehicles } from "./components/supported-vehicles";
import { CTABanner } from "@/src/components/cta-banner";

export default function ServicesPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Nos services</h1>
        <ServicesList />
      </div>
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center my-12">
          Les véhicules que nous prenons en charge
        </h3>
        <SupportedVehicles />
      </div>
      <CTABanner
        href={"/contact"}
        hook={"Besoin d’un renseignement ou d’un devis personnalisé ?"}
        description={
          "Notre équipe est à votre écoute 7j/7 pour vous accompagner."
        }
      >
        Contactez-nous
      </CTABanner>
    </section>
  );
}
