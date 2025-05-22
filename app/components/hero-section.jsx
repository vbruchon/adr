"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { defaultTransition, fadeInUp } from "@/src/lib/animation.js";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Dépannage véhicule"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 h-[95vh] bg-card-foreground/70" />
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={defaultTransition}
        className="relative z-10 max-w-4xl px-4 flex flex-col items-center gap-6 p-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">
          Auto Dépannage Romanais
        </h1>
        <p className="text-lg sm:text-xl">DÉPANNAGE – REMORQUAGE – TRANSPORT</p>
        <p className="text-md /80">Service 24h/24 et 7j/7</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href={"/contact"}
            className="px-6 py-3 bg-primary rounded-2xl hover:bg-primary/90 transition"
          >
            Nous contacter
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
