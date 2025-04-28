"use client";

import { SERVICES } from "../../src/data";
import Link from "next/link";
import { ThemedIcon } from "@/src/components/theme/themed-icon";

export const ServicesBanner = () => {
  return (
    <section className="lg:py-12 xl:py-24 px-4">
      <h2 className="text-3xl font-semibold text-center mb-16">Nos Services</h2>

      <div className="mx-auto flex items-center justify-center flex-wrap gap-8 ">
        {SERVICES.map((service) => (
          <Link
            href={"/services"}
            key={service.name}
            className="bg-card flex flex-col  items-center gap-2 p-4 border rounded-xl w-56 lg:w-40 hover:bg-card-foreground"
          >
            <ThemedIcon item={service} />
            <p>{service.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
