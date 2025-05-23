"use client";

import { SERVICES } from "../../src/data";
import Link from "next/link";
import { ThemedIcon } from "@/src/components/theme/themed-icon";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultTransition, fadeInUp } from "@/src/lib/animation";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const ServicesBanner = () => {
  return (
    <section className="lg:py-12 xl:py-24 px-4">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={defaultTransition}
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl font-semibold text-center mb-16"
      >
        Nos Services
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex items-center justify-center flex-wrap gap-8"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.name} variants={item}>
            <Link
              href={"/services"}
              className="bg-card flex flex-col items-center gap-2 p-4 border rounded-xl w-56 lg:w-40 hover:bg-card-foreground transition"
            >
              <ThemedIcon item={service} className="w-10 h-10" />

              <p>{service.name}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
