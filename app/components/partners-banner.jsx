"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { PARTNERS } from "../../src/data";
import { Card, CardContent } from "@/src/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
export const PartnersBanner = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Nos Partenaires
      </h2>
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
            <CarouselItem key={index} className={"basis-1/7"}>
              <img
                key={index}
                src={`/partners/${partner}`}
                alt={`Logo ${partner}`}
                className="size-28"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="flex gap-4 items-end justify-center max-w-4xl overflow-hidden">
        {PARTNERS.map((partner, index) => (
          <img
            key={index}
            src={`/partners/${partner}`}
            alt={`Logo ${partner}`}
            className="size-28"
          />
        ))}
      </div> */}
    </div>
  );
};
