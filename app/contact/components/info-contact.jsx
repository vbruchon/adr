"use client";

import { MapLoader } from "@/src/components/map-loader";
import { Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <MapLoader />,
});

export const InfoContact = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="mb-4">
            Pour toute demande d'information ou de devis, venez nous retrouver :
          </p>
          <h2 className="text-xl font-semibold mb-4">Notre adresse</h2>
          <p className="font-medium mb-4">
            220, allée du Vivarais
            <br />
            26300 Bourg-de-Péage
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Par téléphone</h2>
          <p className="flex gap-2 items-center">
            <Phone aria-hidden="true" />
            <Link
              href="tel:0475020006"
              className="text-primary font-semibold hover:underline"
            >
              04 75 02 00 06
            </Link>
          </p>
        </div>
        <div>
          <p className="hidden md:block mt-6">
            Ou utilisez le formulaire ci-dessous :
          </p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Map />
      </div>
    </div>
  );
};
