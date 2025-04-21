import React from "react";
import { motion } from "framer-motion"
import ContactK from "../components/ContactK";

const Ingredient = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-700">
      <div className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#EAD72A] uppercase">
          Nos Ingrédients
        </h2>

        <p className="text-lg leading-relaxed text-justify">
          La crise climatique oblige notre génération, et particulièrement le
          Sud, à faire évoluer ses pratiques souvent peu respectueuses du
          climat.
          <br />
          Un gel douche doit-il continuer à parcourir 6000 km ? Un shampoing
          peut-il déplacer 98 % d’eau sur la même distance, alors que l’eau se
          raréfie dans de nombreuses zones ?
        </p>

        <p className="text-lg leading-relaxed text-justify">
          <strong>KLC</strong>, en s’appuyant sur la <em>cosmétopée</em>,
          projette d’innover en parapharmacie <strong>in situ</strong>, proche
          des sources de matières premières, largement utilisées de manière
          traditionnelle par les populations locales.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          De ces matières seront isolés plusieurs actifs pour soutenir les
          allégations. Les autres ingrédients incontournables proviennent de
          fournisseurs connus pour leur haut niveau d’exigence et leur rigueur
          scientifique.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Acide glycolique",
              origin: "d’origine végétale",
              description:
                "Acide organique de la famille des AHA (alpha-hydroxyacide). Exfolie en douceur. Actif essentiel pour l’éclat du teint, l’acné, les cicatrices, l’hyperpigmentation, les rides.",
            },
            {
              name: "Acide lactique",
              origin: "d’origine végétale",
              description:
                "AHA jouant un rôle dans divers processus biochimiques. Ce composé polyvalent a de nombreuses applications en dermatologie.",
            },
            {
              name: "Acide salicylique",
              origin: "d’origine végétale",
              description:
                "BHA reconnu pour ses propriétés exfoliantes et antiseptiques. Recommandé pour l’acné, les verrues…",
            },
            {
              name: "Beurre de cacao",
              origin: "d’origine végétale",
              description:
                "Issu de la fabrication du chocolat. Très stable, il possède de nombreuses propriétés pour la peau et les cheveux.",
            },
            {
              name: "Beurre de karité",
              origin: "d’origine végétale",
              description:
                "Utilisé depuis toujours par les femmes africaines pour soigner, protéger et sublimer la peau et les cheveux.",
            },
            {
              name: "Collagène",
              origin: "Bio sourcé",
              description:
                "Indispensable à la jeunesse de la peau. Nécessité de compenser sa baisse naturelle avec l’âge.",
            },
            {
              name: "Glucoside d’ascorbyle",
              origin: "Bio sourcé",
              description:
                "Forme stable de vitamine C associée au glucose. Améliore l’éclat de la peau une fois absorbée.",
            },
            {
              name: "Huile de palme",
              origin: "d’origine végétale",
              description:
                "Huile endémique utilisée en cosmétique pour ses propriétés nourrissantes.",
            },
            {
              name: "Hyaluronate de Na",
              origin: "Bio sourcé",
              description:
                "Référence en hydratation et anti-âge. Restaure la souplesse, l’élasticité et réduit les rides.",
            },
            {
              name: "Aloe vera",
              origin: "d’origine végétale",
              description:
                "Hydrate, adoucit, apaise. Soulage les irritations, protège la peau, effet anti-âge.",
            },
            {
              name: "Macérât de carotte",
              origin: "d’origine végétale",
              description:
                "Illumine le teint, protège contre le stress oxydant. Riche en vitamine A et acides gras.",
            },
            {
              name: "Huile d’anacarde",
              origin: "d’origine végétale",
              description:
                "Riche en acides gras insaturés et vitamine E. Hydrate, renforce l’épiderme et lutte contre le stress oxydant.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-[#EAD72A] mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 italic mb-2">{item.origin}</p>
              <p className="text-base text-[#1d2f4c]">{item.description}</p>
            </div>
          ))}
        </div>

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

export default Ingredient;
