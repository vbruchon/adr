import React from "react";

const MentionsLegales = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Mentions Légales
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">Informations légales</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Nom de l'entreprise :</strong> Auto Dépannage Romanais
            </li>
            <li>
              <strong>Forme juridique :</strong> [SARL / SAS /
              Auto-entrepreneur]
            </li>
            <li>
              <strong>Capital social :</strong> [Montant du capital social]
            </li>
            <li>
              <strong>Siège social :</strong> [Adresse complète]
            </li>
            <li>
              <strong>Numéro de SIREN / SIRET :</strong> [Numéro SIREN]
            </li>
            <li>
              <strong>Numéro TVA intracommunautaire :</strong> [Numéro de TVA,
              si applicable]
            </li>
            <li>
              <strong>RCS :</strong> [Ville d'enregistrement au Registre du
              Commerce et des Sociétés]
            </li>
            <li>
              <strong>Code APE :</strong> [Code APE ou NAF]
            </li>
            <li>
              <strong>Responsable de la publication :</strong> [Nom de la
              personne responsable de la publication]
            </li>
            <li>
              <strong>Hébergeur du site :</strong> [Nom de l’hébergeur]
            </li>
            <li>
              <strong>Adresse de l’hébergeur :</strong> [Adresse de l’hébergeur]
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Email :</strong> [adresse email de contact]
            </li>
            <li>
              <strong>Téléphone :</strong> [numéro de téléphone]
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
          <p>
            Le contenu du site web (textes, images, logos, vidéos, etc.) est
            protégé par les lois relatives à la propriété intellectuelle et
            appartient à Auto Dépannage Romanais ou à ses partenaires. Toute
            reproduction, représentation, modification, ou utilisation du
            contenu sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Collecte de données personnelles
          </h2>
          <p>
            Conformément à la loi Informatique et Libertés et au Règlement
            général sur la protection des données (RGPD), nous vous informons
            que la collecte de vos données personnelles est nécessaire pour
            l’utilisation de notre site. Ces données sont utilisées dans le
            cadre de la gestion de la relation client (prise de contact,
            demandes de devis, etc.) et ne seront en aucun cas transmises à des
            tiers sans votre consentement.
          </p>
          <p>
            <strong>
              Droits d’accès, de rectification et de suppression des données
              personnelles :
            </strong>
            <br />
          </p>
          Vous disposez des droits suivants sur vos données personnelles :
          <ul className="list-disc pl-5">
            <li>
              Droit d'accès : consulter vos données personnelles en notre
              possession.
            </li>
            <li>
              Droit de rectification : corriger vos informations personnelles.
            </li>
            <li>
              Droit de suppression : demander la suppression de vos données
              personnelles, sous certaines conditions.
            </li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse
            suivante : [email de contact].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Responsabilité</h2>
          <p>
            Auto Dépannage Romanais s'efforce de maintenir les informations
            fournies sur le site à jour, mais ne saurait garantir leur
            exactitude ni leur exhaustivité. En conséquence, nous ne pouvons
            être tenus responsables des erreurs ou omissions qui pourraient
            apparaître sur le site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Auto Dépannage
            Romanais ne peut être tenu responsable du contenu de ces sites ni
            des pratiques de confidentialité qui y sont appliquées.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Modifications des mentions légales
          </h2>
          <p>
            Nous nous réservons le droit de modifier ces mentions légales à tout
            moment. Les utilisateurs sont invités à consulter cette page
            régulièrement afin de se tenir informés des éventuelles
            modifications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Loi applicable</h2>
          <p>
            Les présentes mentions légales sont régies par la législation en
            vigueur en France, notamment le Code de la consommation et le Code
            du commerce. En cas de litige, le tribunal compétent sera celui du
            siège social de l’entreprise.
          </p>
        </section>
      </div>
    </section>
  );
};

export default MentionsLegales;
