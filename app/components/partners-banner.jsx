"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import { PARTNERS } from "../../src/data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import { defaultTransition, fadeInUp } from "@/src/lib/animation.js";

export const PartnersBanner = () => {
  return (
    <div className="py-16 px-4">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={defaultTransition}
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl font-semibold text-center mb-8"
      >
        Nos Partenaires
      </motion.h2>
      <Carousel
        className="max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent>
          {PARTNERS.map((partner, index) => (
            <CarouselItem
              key={index}
              className={"basis-1/3 md:basis-1/5 lg:basis-1/7"}
            >
              <Image
                src={`/partners/${partner}`}
                alt={`Logo ${partner}`}
                width={150}
                height={50}
                className="size-28"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
