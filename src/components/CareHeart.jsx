import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const CareHeart = () => {
  return (
    <motion.div
      className="mb-10 pt-12 pb-8"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Image animée */}
        <motion.div
          variants={childVariant}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/bienetre.png"
            alt="Care Heart"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Texte animé */}
        <motion.div variants={childVariant}>
          <h2 className="text-2xl md:text-4xl uppercase font-bold mb-4">
            Le Bien-Être :
          </h2>
          <p className="text-sm md:text-[16px] text-justify leading-7">
            Une Priorité Essentielle Le bien-être, c'est bien
            plus que l'absence de maladie: c'est un équilibre entre santé
            physique, mentale et émotionnelle. Pour l'améliorer, adoptez une
            alimentation saine, restez actif, dormez suffisamment et pratiquez
            la pleine conscience. Cultivez des relations positives, fixez des
            objectifs réalistes et accordez-vous des moments de détente. Chaque
            petit geste compte pour vivre une vie épanouissante et équilibrée. 
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareHeart;
