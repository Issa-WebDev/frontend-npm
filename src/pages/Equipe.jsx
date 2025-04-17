import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { RiTeamFill } from "react-icons/ri";

const ceo = {
  nom: "Dr TRAORE Adama",
  role: "CEO | Pharmacien titulaire",
  image: "ceo.webp",
  bio: `Dr TRAORE Adama, PharmD - PhD Dermo-cosmétologie est un ancien Interne des Hôpitaux. 
        Le choix de l’industrie l’a amené à travailler durant 23 ans à Paris pour les leaders de la cosmétique tels que Chanel, l'Oréal, LVMH, Seppic, J&J, Galderma. 
        Fort de cette expérience riche et variée, Il a décidé de s’installer au bord de la Lagune Ebrié à Abidjan pour proposer son offre et  répondre aux besoins locaux.
        K-Ly & Cia Beauty/Pharmacist est une gamme qui se veut Minimaliste, Efficace et Safe... 
        Avec ses partenaires dans le monde, K-Ly & Cia Beauty/Pharmacist organisera des formations, workshops, tests d’usages.
        K-Ly & Cia Beauty/Pharmacist prodiguera des conseils et assurera la cosmétovigilance des produits mis sur le marché local/régional.`,
  foot: " Think global & act local K-Ly & Cia Just for your need",
};

const equipe = [
  {
    nom: "Fatou Bamba",
    role: "Medecins",
    image: "medecin.webp",
    bio: "Fatou accompagne les patients avec bienveillance et prépare les ordonnances avec rigueur.",
  },
  {
    nom: "Mia Elisabel",
    role: "Pharmacien",
    image: "pharmacien.webp",
    bio: "Ahmed s’occupe de la logistique et veille à ce que les stocks soient toujours disponibles.",
  },
  {
    nom: "Josiane Aka",
    role: "Experts Biologistes",
    image: "eb.webp",
    bio: "Souriante et à l’écoute, elle oriente les clients dès leur arrivée avec professionnalisme.",
  },
  {
    nom: "Ahmed Traoré",
    role: "Techniciens ",
    image: "technicien.webp",
    bio: "Ahmed s’occupe de la logistique et veille à ce que les stocks soient toujours disponibles.",
  },
];

export default function Equipe() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <section className="max-w-7xl mx-auto text-[#1d2f4c] px-4 py-12">
      {/* CEO */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center w-full max-w-7xl mb-20"
      >
        {/* Texte */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{ceo.nom}</h2>
          <p className="text-[#00B583] font-semibold text-lg mb-4">
            {ceo.role}
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            {ceo.bio}
          </p>
          <p className="text-gray-900 italic pt-5 text-xl">{ceo.foot}</p>
        </div>

        {/* Image */}
        <div className="w-full md:h-[600px] overflow-hidden shadow-xl">
          <img
            src={ceo.image}
            alt={ceo.nom}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
      {/* Équipe */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        <RiTeamFill className="inline-block text-[#7FB23A] mr-2 mb-1" />
        NOTRE EQUIPE
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.1 }}
        className="md:text-[16px] text-sm text-left md:text-center px-4 md:px-[20%] pt-8"
      >
        Composée de Pharmacien, Médecins, Experts, Biologistes, Techniciens
        investis dans la Parapharmacie pour répondre aux sollicitations
        nombreuses des consommatrices/consommateurs soucieux de leur bien être.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.1 }}
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10"
      >
        {equipe.map((membre, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-lg rounded-sm overflow-hidden"
          >
            <img
              src={membre.image}
              alt={membre.nom}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-2xl font-semibold">{membre.nom}</h4>
              <p className="text-[#00B583] font-medium">{membre.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{membre.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Contact avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </section>
  );
}
