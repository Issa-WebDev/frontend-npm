import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Horaires() {
  return (
    <section className="relative bg-[#00B583]  bg-[url('/horaire-banner.jpg')] py-16 px-4 md:px-8 overflow-hidden">
      {/* Illustration soft en fond */}
      {/* <div className="absolute inset-0 bg-[#00B583]/30" /> */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl md:text-4xl font-bold text-center text-white mb-12"
        >
          <FaClock className="inline-block text-white mr-2 mb-1" />
          NOS HORAIRES D'OUVERTURE
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PHARMACIE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border border-[#00B583] bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#7FB23A]  mb-4 flex items-center gap-2">
              <FaCalendarAlt /> Horaires Pharmacie
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>Lundi - Vendredi : 07h30 - 20h00</li>
              <li>Samedi : 07h30 - 13h00</li>
              <li className="text-gray-400">Dimanche : Fermé</li>
            </ul>
          </motion.div>

          {/* PARA-PHARMACIE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border border-[#7FB23A] bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#7FB23A] mb-4 flex items-center gap-2">
              <MdOutlineShoppingBag /> Horaires Para-Pharmacie
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>Lundi - Vendredi : 07h30 - 20h00</li>
              <li>Samedi : 07h30 - 15h00</li>
              <li>Dimanche : Vente en ligne uniquement 10h30 - 15h00</li>
            </ul>

            <div className="mt-4">
              <button className="mt-2 flex items-center gap-2 bg-[#7FB23A] text-white font-bold px-4 py-2 rounded-lg hover:bg-opacity-90 transition cursor-pointer">
                <FaShoppingCart /> Commander en ligne
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
