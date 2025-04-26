import { InfoContact } from "./components/info-contact";
import { ContactForm } from "./components/contact-form";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Nous contacter</h1>
        <InfoContact />
        <p className="md:hidden block mt-6">
          Ou utilisez le formulaire ci-dessous :
        </p>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Formulaire de contact</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
