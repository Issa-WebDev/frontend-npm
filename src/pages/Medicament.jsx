import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/ContactK";
import CarouselMedicament from "../components/CarouselMedicament";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Medicament = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* BANNIÈRE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-14 w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-white">
            <div className="absolute z-20 inset-0 bg-black/30" />
            <img
              src="/productb.webp"
              alt="Bannière"
              className="absolute rounded-md w-full h-full object-cover"
            />
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-centerabsoulue text-center px-4 z-40"
            >
              <div className="absoulue text-center px-4 z-40">
                <motion.h1
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-2xl md:text-4xl font-bold mb-4"
                >
                  Lorem ipsum dolor sit, amet
                </motion.h1>
                <p className="text-sm md:text-lg max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, odio?
                </p>
              </div>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <CarouselMedicament />
        </motion.div>
      </section>

      <div className="w-full bg-gray-100">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto py-20 px-4">
          <div className="flex flex-col gap-10">
            <div>
              <img
                src="/medicament1.webp"
                className="rounded-md w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-semibold">Lorem, ipsum.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <img
                src="/medicament2.webp"
                className="rounded-md w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-semibold">Lorem, ipsum.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Medicament;
