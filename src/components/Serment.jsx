import React from "react";
import { Cross } from "lucide-react";
import { motion } from "framer-motion";
import { MdSupportAgent } from "react-icons/md";
import { GiMedicinePills } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Serment = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-12"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={childVariant} className="text-center mb-12">
        <div className="relative inline-block group">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-bold"
          >
            <Cross className="inline text-[#7FB23A]" size={40} /> SERMENT DE
            GALIEN
          </motion.h1>
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:text-[16px] text-sm text-left md:text-justify px-4 md:px-[20%] pt-8"
        >
          En présence des maitres de la faculté, des conseillers de l'Ordre des
          pharmacions et de mes condisciples, je jure : <br /> <br />
          - Honorer ceux qui m'ont instruit dans les préceptes de mon art et de
          leur témoigner ma reconnaissance en restant fidèle à leur enseignement
          : <br /> <br />
          - Exercer, dans l'intérêt de la santé publique, ma profession avec
          conscience et de respecter non seulement la législation en vigueur,
          mais aussi les règles de l'honneur, de la probité et du
          désintéressement : <br /> <br />
          - De ne jamais oublier ma responsabilité et mes devoirs envers le malade
          et sa dignité humaine. <br /> <br />
          Que les hommes m'accordent leur estime si je suis fidèle à mes
          promesses. <br />
          <br />
          Que je sois couvert d'opprobre et méprisé de mes confrères st j'y
          manque.
        </motion.p>
      </motion.div>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 text-black">
        <div className="flex flex-col gap-10 pt-14">
          {[
            {
              icon: <MdSupportAgent size={70} className="text-[#EAD72A]" />,
              title: "CONSEILS",
              text: " Les trois (3) étapes clés de notre approche : ",
              list: "1- Diagnostic ==> 2- Proposition de produits ==> 3- Routine",
            },
            {
              icon: <GiMedicinePills size={70} className="text-[#EAD72A]" />,
              title: "PARA-PHARMACIE",
              text: "Les trois (3) étapes clés de notre approche : ",
              list: "1- Expertise ==> 2- Visa KLC ==> 3- Cosmétovigilance"
            },
            {
              icon: <HiOutlineNewspaper size={70} className="text-[#EAD72A]" />,
              title: "ACTUALITES",
              text: "Suivez-nous pour ne pas rater nos derniers articles ainsi que nos jours de garde",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={childVariant}
              className="flex gap-5"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-md md:text-xl">{item.title}</h1>
                <p className="text-md">{item.text}</p>
                <p className="text-sm">{item.list}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center items-center"
          variants={childVariant}
        >
          <img
            src="serment.jpeg"
            alt="notre serment"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Serment;
