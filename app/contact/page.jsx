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
          {/* Form temporaire */}
          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Votre nom"
              className="border border-gray-300 p-3 rounded-xl"
              required
            />
            <input
              type="email"
              placeholder="Votre e-mail"
              className="border border-gray-300 p-3 rounded-xl"
              required
            />
            <input
              type="tel"
              placeholder="Votre téléphone"
              className="border border-gray-300 p-3 rounded-xl md:col-span-2"
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              className="border border-gray-300 p-3 rounded-xl md:col-span-2"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition md:col-span-2"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
