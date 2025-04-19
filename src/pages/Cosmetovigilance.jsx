import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Cosmetovigilance = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* BANNIÈRE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative mb-14 w-full h-[40vh] md:h-[50vh]  text-white">
          {/* <div className="absolute z-20 inset-0 bg-black/40" /> */}
          <img
            src="/cosmeto.webp"
            alt="Bannière"
            className="absolute rounded-md w-full h-full object-cover"
          />

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="absolute px-4 z-40 md:right-10 right-0 top-30"
          >
            <div className="x-4 z-40">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-2xl md:text-6xl font-bold mb-4"
              >
                COSMETOVIGILANCE
              </motion.h1>
            </div>
          </motion.h1>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          La Cosmétovigilance
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          La cosmétovigilance est un système de surveillance des effets
          indésirables liés à l’utilisation des produits cosmétiques. Elle
          permet d’assurer la sécurité des consommateurs et d’améliorer la
          qualité des produits en identifiant les risques potentiels.
        </p>
      </motion.div>
      {/* Images avec animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {["/galerie15.webp", "/galerie2.webp", "/galerie8.webp"].map(
          (src, idx) => (
            <motion.div key={idx}>
              <img
                src={src}
                alt={`Illustration cosmétovigilance ${idx + 1}`}
                className="object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              />
            </motion.div>
          )
        )}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto"
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Pourquoi c’est important ?
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          En signalant les effets indésirables (rougeurs, allergies,
          irritations...), les pharmaciens, les dermatologues et les
          utilisateurs participent à une veille sanitaire essentielle. Cela aide
          à retirer les produits dangereux, à améliorer les formules et à
          renforcer les normes de sécurité.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Cosmetovigilance;
