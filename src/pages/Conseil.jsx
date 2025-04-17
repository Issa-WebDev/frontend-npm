import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "../components/Contact";

const testimonials = [
  {
    name: "Aïcha K.",
    message:
      "La Nouvelle Pharmacie Mpouto m’a vraiment aidée à trouver une solution pour ma peau. Un vrai accompagnement personnalisé !",
  },
  {
    name: "Drissa T.",
    message:
      "Des produits de qualité, un personnel à l’écoute et de vrais conseils dermatologiques. Merci !",
  },
  {
    name: "Fatou B.",
    message:
      "J’ai été agréablement surprise par le suivi cosmétovigilance. Je recommande à 100%.",
  },
];

const ConseilEtAvis = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-10 md:py-20 max-w-7xl mx-auto">
      {/* Section grid texte + image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            NOS CONSEILS
          </h2>
          <p className="mb-4 leading-relaxed text-gray-800">
            La Nouvelle Pharmacie Mpouto a pour ambition d’être une des
            références pour répondre aux problèmes de peau que vous rencontrez.
          </p>
          <p className="mb-4 leading-relaxed text-gray-800">
            Les peaux ethniques, mixtes, d’hommes, de femmes, d’enfants ont
            leurs spécificités. Aussi, la peau d’homme n’est pas exactement
            celle d’une femme ou d’un bébé…
          </p>
          <p className="mb-4 leading-relaxed text-gray-800">
            Partant, nous vous proposerons des formules conçues, développées,
            évaluées sous contrôles de spécialistes habilités comme des
            Dermatologues, Dermo-toxicologues.
          </p>
          <p className="leading-relaxed text-gray-800">
            Un réseau de cosmétovigilance, en étroite collaboration avec notre
            centre d'application, suivra la vie des produits mis sur le marché.
            Cette exigence nouvelle s’impose au Dermo-toxicologue, vu le nombre
            de cas d’inconforts rapportés.
          </p>
        </div>
        <div className="w-full">
          <img
            src="/conseil.webp"
            alt="Conseils dermatologiques"
            className="w-full object-cover shadow-lg"
          />
        </div>
      </motion.div>

      {/* Testimonials carousel */}
      <div className="mt-24">
        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-10">
		  TEMOIGNAGES DE NOS CLIENTS
        </h3>
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-full px-10 py-20 bg-gray-100 text-center rounded-xl shadow-xl"
              >
                <p className="text-2xl italic text-gray-800 max-w-2xl mx-auto mb-6">
                  "{testimonial.message}"
                </p>
                <p className="text-lg font-semibold text-green-800">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow"
            >
              <ChevronLeft className="w-6 h-6 text-green-800" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow"
            >
              <ChevronRight className="w-6 h-6 text-green-800" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </div>
    </section>
  );
};

export default ConseilEtAvis;
