"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { defaultTransition } from "../lib/animation.js";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const CTABanner = ({ hook, description = null, href, children }) => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={defaultTransition}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="bg-primary text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="text-center md:text-left">
          <h4 className="text-xl md:text-2xl font-semibold">{hook}</h4>
          {description && (
            <p className="text-sm mt-2 text-white/90">{description}</p>
          )}
        </div>
        <Link
          href={href}
          className="mt-4 md:mt-0 inline-block bg-white text-primary font-medium px-6 py-3 rounded-xl shadow hover:bg-white/90 transition"
        >
          {children}
        </Link>
      </div>
    </motion.div>
  );
};
