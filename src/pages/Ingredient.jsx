import React from "react";
import { motion } from "framer-motion"
import ContactK from "../components/ContactK";


const ingredients = [
  {
    name: "Acide glycolique",
    origin: "d’origine végétale",
    description:
      "Exfolie en douceur. Actif essentiel pour l’éclat du teint, l’acné, les cicatrices, l’hyperpigmentation, les rides.",
    image: "/glycolique.jpg",
  },
  {
    name: "Acide lactique",
    origin: "d’origine végétale",
    description:
      "AHA jouant un rôle dans divers processus biochimiques. Ce composé polyvalent a de nombreuses applications en dermatologie.",
    image: "/lactique.jpg",
  },
  {
    name: "Acide salicylique",
    origin: "d’origine végétale",
    description:
      "BHA reconnu pour ses propriétés exfoliantes et antiseptiques. Recommandé pour l’acné, les verrues…",
    image: "/salicylique.jpg",
  },
  {
    name: "Beurre de cacao",
    origin: "d’origine végétale",
    description:
      "Très stable, il possède de nombreuses propriétés pour la peau et les cheveux.",
    image: "/cacao.jpg",
  },
  {
    name: "Beurre de karité",
    origin: "d’origine végétale",
    description:
      "Utilisé depuis toujours par les femmes africaines pour soigner, protéger et sublimer la peau et les cheveux.",
    image: "/karite.jpg",
  },
  {
    name: "Collagène",
    origin: "Bio sourcé",
    description:
      "Indispensable à la jeunesse de la peau. Nécessité de compenser sa baisse naturelle avec l’âge.",
    image: "/collagene.jpg",
  },
  {
    name: "Glucoside d’ascorbyle",
    origin: "Bio sourcé",
    description:
      "Forme stable de vitamine C associée au glucose. Améliore l’éclat de la peau une fois absorbée.",
    image: "/gluco.jpg",
  },
  {
    name: "Huile de palme",
    origin: "d’origine végétale",
    description:
      "Huile endémique utilisée en cosmétique pour ses propriétés nourrissantes.",
    image: "/palme.jpg",
  },
  {
    name: "Hyaluronate de Na",
    origin: "Bio sourcé",
    description:
      "Référence en hydratation et anti-âge. Restaure la souplesse, l’élasticité et réduit les rides.",
    image: "/sodium.jpg",
  },
  {
    name: "Aloe vera",
    origin: "d’origine végétale",
    description:
      "Hydrate, adoucit, apaise. Soulage les irritations, protège la peau, effet anti-âge.",
    image: "/aloe.jpg",
  },
  {
    name: "Macérât de carotte",
    origin: "d’origine végétale",
    description:
      "Illumine le teint, protège contre le stress oxydant. Riche en vitamine A et acides gras.",
    image: "/carotte.jpg",
  },
  {
    name: "Huile d’anacarde",
    origin: "d’origine végétale",
    description:
      "Hydrate, renforce l’épiderme et lutte contre le stress oxydant.",
    image: "/anacarde.jpg",
  },
];


const Ingredient = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-700">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Ingrédients</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          La crise climatique oblige notre génération à repenser la cosmétique.
          KLC innove avec des actifs locaux et respectueux de l’environnement,
          issus de la cosmétopée.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-sm text-green-700 font-medium mb-2">
                  {item.origin}
                </p>
                <p className="text-sm">{item.description}</p>
              </div>
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
