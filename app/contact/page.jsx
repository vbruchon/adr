"use client";

import { motion } from "framer-motion";
import { InfoContact } from "./components/info-contact";
import { ContactForm } from "./components/contact-form";
import { defaultTransition, fadeInUp } from "@/src/lib/animation.js";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
          className="text-3xl font-bold text-center mb-12"
        >
          Nous contacter
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <InfoContact />
        </motion.div>

        <p className="md:hidden block mt-6">
          Ou utilisez le formulaire ci-dessous :
        </p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Formulaire de contact</h2>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
