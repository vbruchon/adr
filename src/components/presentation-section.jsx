import React from "react";

export const Presentation = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center flex flex-col gap-6">
      <h2 className="text-3xl font-semibold">Une expertise depuis 1978</h2>

      <p className="text-lg text-foreground leading-relaxed">
        Auto Dépannage Romanais est une société familiale située à{" "}
        <strong>Bourg-de-Péage</strong>, en zone industrielle à proximité des
        grands axes routiers (voie rapide Romans-Valence).Nous interviennos
        rapidement pour tous vos <strong>dépannages</strong>,{" "}
        <strong>remorquages</strong> et <strong>transports de véhicules</strong>
        .
      </p>
      <p className="text-lg text-foreground">
        Nous disposons de <strong>3 véhicules avec plateau</strong>, d’un{" "}
        <strong>parc fermé de 2000 m²</strong> et d’un{" "}
        <strong>gardiennage intérieur sécurisé de 500 m²</strong> pour garantir
        la sécurité de vos véhicules.
      </p>
    </section>
  );
};
