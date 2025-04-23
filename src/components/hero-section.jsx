import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center ">
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Dépannage véhicule"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center gap-6 p-4">
        <h1 className="text-4xl  sm:text-5xl font-bold">
          Auto Dépannage Romanais
        </h1>
        <p className="text-lg  sm:text-xl">
          DÉPANNAGE – REMORQUAGE – TRANSPORT
        </p>
        <p className="text-md  /80">Service 24h/24 et 7j/7</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href={"/contact"}
            className="px-6 py-3 bg-primary  rounded-2xl hover:bg-primary/90 transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};
