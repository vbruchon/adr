"use client";
import { SERVICES } from "@/src/data";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesList = () => {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {SERVICES.map((service) => (
        <motion.div
          key={service.name}
          className="bg-card p-6 rounded-2xl shadow-lg"
          variants={itemVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center mb-4">
            <Image
              src={service.iconDark}
              alt=""
              role="presentation"
              width={64}
              height={64}
              className="block dark:hidden"
            />
            <Image
              src={service.icon}
              alt=""
              role="presentation"
              width={64}
              height={64}
              className="hidden dark:block"
            />
            <h2 className="ml-4 text-xl font-semibold">{service.name}</h2>
          </div>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
