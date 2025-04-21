import React from "react";
import { motion } from "framer-motion";
import { RiTeamFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserMd } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import Tooltip from "./Tooltips";

const CareHeart = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };


  const equipe = [
    {
      job: "Pharmaciens",
      icon: <GiHealthNormal size={40} />,
      tooltip: "Les experts en médicaments et santé publique.",
    },
    {
      job: "Biologistes",
      icon: <GiChemicalDrop size={40} />,
      tooltip: "Spécialistes des analyses biologiques.",
    },
    {
      job: "Experts Dermocosmétique",
      icon: <FaUserMd size={40} />,
      tooltip: "Professionnels des soins de la peau et des cosmétiques.",
    },
  ];

  const equipes = [
    {
      job: "Auxiliaires en pharmacie",
      icon: <MdMedicalServices size={40} />,
      tooltip: "Assistants précieux dans la gestion du comptoir.",
    },
    {
      job: "Gestionnaires",
      icon: <MdEngineering size={40} />,
      tooltip: "En charge de l'organisation et du bon fonctionnement.",
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
            Composée de Pharmaciens, de Biologistes, d'Experts Dermocosmétique,
            de Gestionnaires, d'Auxiliaires en pharmacie
          </p>
        </motion.div>

        <div className="flex gap-10 flex-col">
          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8 text-[#1d2f4c]">
          {equipe.map(({ job, icon, tooltip }, index) => (
            <Tooltip key={index} text={tooltip}>
              <div className="flex flex-col items-center shadow-md justify-center gap-4 rounded-[0.5rem] bg-white p-4">
                <p className="text-[#EAD72A]">{icon}</p>
                <h1>{job}</h1>
              </div>
            </Tooltip>
          ))}
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 text-[#1d2f4c]">
          {equipes.map(({ job, icon, tooltip }, index) => (
            <Tooltip key={index} text={tooltip}>
              <div className="flex flex-col items-center shadow-md justify-center gap-4 rounded-[0.5rem] bg-white p-4">
                <p className="text-[#EAD72A]">{icon}</p>
                <h1>{job}</h1>
              </div>
            </Tooltip>
          ))}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareHeart;
