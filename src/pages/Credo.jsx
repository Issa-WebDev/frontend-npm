import React from "react";
import { motion } from "framer-motion";
import ContactK from "../components/ContactK";

const Credo = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-gray-700 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 uppercase">
          Notre Credo KLC
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Une vision fondée sur l’expertise scientifique, l’engagement éthique
          et l’innovation au service de votre bien-être.
        </p>
      </div>

      {/* Section Dr Traoré */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/pharmacien.webp"
          alt="Dr TRAORE"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Sous la responsabilité de <strong>Dr TRAORE</strong>, KLC ambitionne
            d’innover dans le domaine de la parapharmacie avec le{" "}
            <strong>VISA KLC</strong>.
          </p>
          <p>
            En prêtant le <em>Serment de Galien (1995)</em>, il s’est engagé à
            exercer sa profession dans l’intérêt de la santé publique avec
            rigueur et honneur.
          </p>
          <p>
            Fort de <strong>23 ans</strong> d’expérience dans de grands groupes
            (Chanel, L’Oréal, LVMH, Galderma), Dr TRAORÉ est un expert passionné
            par la transmission, la qualité et la responsabilité
            environnementale.
          </p>
        </div>
      </div>

      {/* Valeurs du Visa KLC */}
      <div className="bg-[#f9f9f9] p-8 rounded-2xl shadow-md space-y-6">
        <h3 className="text-2xl font-semibold text-center text-[#EAD72A]">
          Les 3 piliers du VISA KLC
        </h3>
        <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
          <li>
            <strong>Qualité & Sécurité :</strong> Chaque programme de soin offre
            efficacité, innocuité et haute tolérance.
          </li>
          <li>
            <strong>Responsabilité environnementale :</strong> Sélection stricte
            des intrants respectueux de l’environnement.
          </li>
          <li>
            <strong>Engagement sociétal :</strong> Accessibilité des produits
            conformes pour les populations vulnérables.
          </li>
        </ul>
      </div>

      {/* Image de l'équipe */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-[#EAD72A] mb-4">
          Notre Équipe
        </h3>
        <img
          src="/equipe.webp"
          alt="Équipe KLC"
          className="mx-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <ContactK />
      </motion.div>
    </section>
  );
};

export default Credo;
