import Image from "next/image";

export const Presentation = () => {
  return (
    <section className="container mx-auto py-16 mt-8 px-4 flex flex-col gap-12">
      <h2 className="text-3xl font-semibold text-center">
        Une expertise depuis 1978
      </h2>
      <div className="mx-auto">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full flex items-center justify-center">
            <Image
              src={"/adr-camion.jpg"}
              width={500}
              height={500}
              alt="photo adr"
              className="w-full object-contain shadow-lg lg:-mr-6"
            />
          </div>

          <div className="w-full flex items-center justify-center p-4">
            <div className="text-center md:text-left">
              <p className="text-lg text-foreground leading-relaxed md:p-4">
                Auto Dépannage Romanais est une société familiale située à{" "}
                <strong>Bourg-de-Péage</strong>, en zone industrielle à
                proximité des grands axes routiers (voie rapide Romans-Valence).
                Nous intervenons rapidement pour tous vos{" "}
                <strong>dépannages</strong>, <strong>remorquages</strong> et{" "}
                <strong>transports de véhicules</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full flex items-center justify-center p-4">
            <div className="text-center md:text-left">
              <p className="text-lg text-foreground leading-relaxed">
                Nous disposons de <strong>3 véhicules avec plateau</strong>,
                d’un <strong>parc fermé de 2000 m²</strong> et d’un{" "}
                <strong>gardiennage intérieur sécurisé de 500 m²</strong> pour
                garantir la sécurité de vos véhicules.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full">
              <Image
                src={"/adr-devanture.png"}
                width={500}
                height={500}
                alt="photo adr"
                className="w-full object-contain shadow-lg lg:-ml-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
