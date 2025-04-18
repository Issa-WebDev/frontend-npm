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
            src="/careheart.jpg"
            alt="Care Heart"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Texte animé */}
        <motion.div variants={childVariant}>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            PRENEZ SOIN DE VOTRE COEUR
          </h2>
          <p className="text-sm text-justify leading-7">
            Depuis près de 25 ans, des milliers de médecins dans tout l’état de
            l’Utah ont dirigé les patients vers notre centre de médicaments
            composés. Cela est dû à la combinaison de notre service
            exceptionnel, nos prix abordables et notre qualité irréprochable. À
            Medicine Center, la qualité est primordiale. Nous utilisons une
            technologie de pointe, des équipements modernes et des bases
            novatrices.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareHeart;
