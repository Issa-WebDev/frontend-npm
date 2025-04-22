import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import IntroCard from "./IntroCard";

const images = ["/b1.webp","/b2.webp", "/b3.webp"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0); // <- unique key pour éviter le bug

  const paginate = (newIndex) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
    setSlideIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate((current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      position: "absolute",
    }),
    center: {
      x: 0,
      position: "absolute",
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      position: "absolute",
    }),
  };

  return (
    <div className="relative">
      <section className="relative min-h-[100vh] md:min-h-[120vh] overflow-hidden">
        {/* Image slider */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={slideIndex}
              className="w-full h-full"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 1 },
              }}
            >
              <img
                src={images[current]}
                className="w-full h-full object-cover object-right md:object-center"
                style={{ opacity: 1 }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-8 md:py-40 py-20 grid md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <p className="text-md md:text-justify text-gray-100 mb-6 text-left">
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
              <button className="bg-[#EAD72A] rounded-[0.5rem] hover:opacity-90 font-semibold text-gray-700 px-4 py-2 transition mt-2 cursor-pointer">
                voir plus
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative w-full flex items-center top-[-15vh] justify-center">
        <IntroCard />
      </div>
    </div>
  );
}
