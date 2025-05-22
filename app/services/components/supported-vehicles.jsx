"use client";
import { SUPPORTED_VEHICLES } from "@/src/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { defaultTransition, fadeInUp } from "@/src/lib/animation.js";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const SupportedVehicles = () => {
  return (
    <motion.div
      className="flex justify-center flex-wrap items-center mx-auto gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {SUPPORTED_VEHICLES.map((vehicle) => (
        <motion.div
          key={vehicle.type}
          className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center gap-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >
          <Image
            src={vehicle.iconDark}
            alt={`icon ${vehicle.type}`}
            width={48}
            height={48}
            className="block dark:hidden"
          />
          <Image
            src={vehicle.icon}
            alt={`icon ${vehicle.type}`}
            width={48}
            height={48}
            className="hidden dark:block"
          />
          <p className="ml-4 text-lg font-semibold">{vehicle.type}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
