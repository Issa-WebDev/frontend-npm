import React from "react";
import { motion } from "framer-motion";
import ContactK from "../components/ContactK";

const Credo = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-700">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#EAD72A] uppercase">
          Notre Credo KLC
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Sous la responsabilité de <strong>Dr TRAORE</strong>, KLC ambitionne
          d’innover dans le domaine de la parapharmacie, au travers du{" "}
          <strong>VISA KLC</strong>. De l’encadrement et la formation des
          parapharmaciens en passant par la recommandation de programmes de
          soins et/ou des routines, KLC offrira ses services et son expertise
          pour votre bien-être.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          En prêtant le <em>Serment de Galien (1995)</em>, Dr TRAORE s’est «
          engagé d’exercer, dans l’intérêt de la santé publique, sa profession
          avec conscience et de respecter non seulement la législation en
          vigueur, mais aussi les règles de l’honneur ».
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Perfectionniste, Dr TRAORE a d’abord pris le temps de se former sur
          les exigences et la conformité des biens de consommation et des
          cosmétiques de qualité (e.g. Maitrise de Sciences Biologiques, DU
          Dermo-cosmétique, PhD Toxicologie). Spécialisé en Toxicologie de
          l’environnement (DEA 1997), Dr TRAORE est un écologiste par
          conviction, animé par le devoir de transmission.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Tous ces outils ont permis à Dr TRAORE de travailler pendant{" "}
          <strong>23 ans</strong> dans des multinationales de renommée en
          Dermo-cosmétiques (<em>Chanel - L’Oréal - LVMH – Galderma</em>) et
          chez des fabricants de matières premières de haute qualité (
          <em>Symrise, Seppic, Givaudan</em>).
        </p>
        <p className="text-lg leading-relaxed text-justify">
          L’heure est venue, via le <strong>VISA KLC</strong>, de vous offrir
          des produits et/ou des services de proximité avec les mêmes exigences
          techniques et la même rigueur scientifique, en trois points :
        </p>
        <ul className="list-disc list-inside pl-4 text-lg leading-relaxed text-justify space-y-2">
          <li>
            <strong>D’abord</strong>, votre programme de soins et/ou votre
            routine avec le VISA KLC vous apportera toutes les garanties de
            qualité, de sécurité, d’innocuité, d’efficacité en fonction de vos
            attentes.
          </li>
          <li>
            <strong>Ensuite</strong>, l’expertise du VISA KLC prend en compte le
            respect de l’environnement pour chaque intrant dans les produits
            pris isolément.
          </li>
          <li>
            <strong>Enfin</strong>, compte tenu de la raréfaction de produits
            conformes accessibles aux populations modestes vulnérables en
            Afrique, le VISA KLC prend en compte la dimension sociétale.
          </li>
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactK />
        </motion.div>
      </div>
    </section>
  );
};

export default Credo;
