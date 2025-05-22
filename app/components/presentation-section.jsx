"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/lib/animation.js";

export const Presentation = () => {
  return (
    <section className="container mx-auto py-16 mt-8 px-4 flex flex-col gap-12">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={defaultTransition}
        className="text-3xl font-semibold text-center"
      >
        Une expertise depuis 1978
      </motion.h2>

      <div className="mx-auto flex flex-col gap-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
            className="w-full flex items-center justify-center p-4"
          >
            <div className="text-center md:text-left">
              <p className="text-lg text-foreground leading-relaxed md:p-4">
                Auto Dépannage Romanais est une société familiale située à{" "}
                <strong>Bourg-de-Péage</strong>, en zone industrielle à
                proximité des grands axes routiers (voie rapide Romans-Valence).
                Nous intervenons rapidement pour tous vos{" "}
                <strong>dépannages</strong>, <strong>remorquages</strong> et{" "}
                <strong>transports de véhicules</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={"/adr-camion.jpg"}
              width={500}
              height={500}
              alt="photo adr"
              className="w-full object-contain shadow-lg lg:-mr-6"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={"/adr-devanture.png"}
              width={500}
              height={500}
              alt="photo adr"
              className="w-full object-contain shadow-lg lg:-ml-1"
            />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
            className="w-full flex items-center justify-center p-4"
          >
            <div className="text-center md:text-left">
              <p className="text-lg text-foreground leading-relaxed">
                Nous disposons de <strong>3 véhicules avec plateau</strong>,
                d’un <strong>parc fermé de 2000 m²</strong> et d’un{" "}
                <strong>gardiennage intérieur sécurisé de 500 m²</strong> pour
                garantir la sécurité de vos véhicules.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
