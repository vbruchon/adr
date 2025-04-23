import { SUPPORTED_VEHICLES } from "@/src/data";
import Image from "next/image";

export const SupportedVehicles = () => {
  return (
    <div className="flex justify-center flex-wrap items-center mx-auto gap-8">
      {SUPPORTED_VEHICLES.map((vehicle) => (
        <div
          key={vehicle.name}
          className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center gap-2"
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
        </div>
      ))}
    </div>
  );
};
