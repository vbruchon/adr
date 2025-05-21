import { SERVICES } from "@/src/data";
import Image from "next/image";

export const ServicesList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => (
        <div key={service.name} className="bg-card p-6 rounded-2xl shadow-lg">
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
          <p className="">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
