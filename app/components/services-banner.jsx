"use client";

import { useTheme } from "next-themes";
import { SERVICES } from "../../src/data";
import Image from "next/image";
import Link from "next/link";

export const ServicesBanner = () => {
  const { theme } = useTheme();
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Nos Services</h2>

      {/* Aperçu des services */}
      <div className="mx-auto flex items-center justify-center flex-wrap gap-8 ">
        {SERVICES.map((service) => (
          <Link
            href={"/services"}
            key={service.name}
            className="bg-card flex flex-col items-center gap-2 p-4 border rounded-xl w-40 hover:bg-card-foreground"
          >
            <img
              width={64}
              height={64}
              src={theme === "dark" ? service.icon : service.iconDark}
              alt=""
            />
            <p>{service.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
