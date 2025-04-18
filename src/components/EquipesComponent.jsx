import React from "react";
import { motion } from "framer-motion";
import { RiTeamFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserMd } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";

const CareHeart = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const equipe = [
    {
      job: "Pharmacien",
      icon: <GiHealthNormal size={40} />,
    },
    {
      job: "Médecins",
      icon: <FaUserMd size={40} />,
    },
    {
      job: "Expert Biologiste",
      icon: <GiChemicalDrop size={40} />,
    },
    {
      job: "Thechniciens",
      icon: <MdEngineering size={40} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="mb-10 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            <RiTeamFill className="inline-block mr-2 mb-1" />
            NOTRE EQUIPE
          </h1>
          <p className="md:text-[16px] text-sm text-left md:text-center px-4 md:px-[20%] pt-8">
            Composée de Pharmacien, Médecins, Experts Biologistes, Techniciens
            investis dans la Parapharmacie pour répondre aux sollicitations
            nombreuses des consommatrices/consommateurs soucieux de leur bien
            être.
          </p>
        </motion.div>

        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-[#1d2f4c]">
          {equipe.map(({ job, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-md justify-center gap-4 rounded-[0.5rem] bg-white p-4"
            >
              <p>{icon}</p>
              <h1>{job}</h1>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareHeart;
