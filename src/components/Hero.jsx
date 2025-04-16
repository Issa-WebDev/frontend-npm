import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "lucide-react";
import { Link } from "react-router-dom";
import IntroCard from "./IntroCard";
import { div } from "framer-motion/client";

const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  const [direction, setDirection] = useState(1);

  const paginate = (newIndex) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate((current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative">
      <section className="relative min-h-[100vh] md:min-h-[120vh] overflow-hidden">
        {/* Image slider */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={images[current]}
              src={images[current]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 1 },
              }}
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-8 md:py-40 py-20 grid md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
            // style={{ background: "rgba(225, 225, 225, 0.5)" }}
          >
            <h1 className="text-1xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-6">
              {/* <Cross className="text-[#00B583] inline" size={25} /> */}
              LA NOUVELLE PHARMACIE MPOUTO
              <Cross className="text-[#7FB23A] inline" size={25} />
            </h1>
            <p className="text-md text-justify text-gray-100 mb-6 md:text-left">
              C’est un engagement pour toute une vie. Il se matérialise par
              l’appartenance à notre Ordre. Après des années de travail et
              d’apprentissage, le Docteur en Pharmacie a l’obligation de tenir
              parole en œuvrant pour la santé publique. C’est ainsi que tous les
              Pharmaciens partagent des valeurs essentielles et utiles comme :
              la discipline, la probité, la fidélité, la complicité, la
              convivialité, la confraternité/consororité… Depuis Aout 1995, je
              ne suis pas déçu d’appartenir à cette famille.
            </p>
            <Link to="/equipe">
              <button className="bg-[#7FB23A] rounded-[0.5rem] hover:opacity-90 font-bold text-white px-4 py-2 transition mt-2 cursor-pointer">
                voir plus
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative w-full flex items-center top-[-15vh] justify-center">
        <IntroCard />
      </div>
      {/* <div className="md:h-[55vh] "></div> */}
    </div>
  );
}
