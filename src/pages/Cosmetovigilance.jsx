import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

const Cosmetovigilance = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-700">
      <h1>Cosmetovigilance</h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </section>
  );
};

export default Cosmetovigilance;
