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
        <h1 className="text-2xl md:text-4xl font-bold">
          <Cross className="inline text-[#7FB23A]" size={40} /> SERMENT DE
          GALIEN
        </h1>
        <p className="md:text-[16px] text-sm text-left md:text-center px-4 md:px-[20%] pt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          provident esse tenetur minus labore dolor iste voluptas reprehenderit
          nobis error illo adipisci, veniam sunt quo! Vero facilis tenetur
          facere pariatur!
        </p>
      </motion.div>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 text-black">
        <div className="flex flex-col gap-10 pt-14">
          {[
            {
              icon: <MdSupportAgent size={70} className="text-[#EAD72A]" />,
              title: "CONSEILS",
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta commodi fugit magni necessitatibus, minus impedit iusto quisquam dolorum est harum?",
            },
            {
              icon: <GiMedicinePills size={70} className="text-[#EAD72A]" />,
              title: "PARA-PHARMACIE",
              text: "Sous la responsabilité de Dr TRAORE, le VISA KLC ambitionne d'encadrer la formation des parapharmaciens en passant par la recommandation de programmes de soins et/ou des routines adéquates.",
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
                <p className="text-sm">{item.text}</p>
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
