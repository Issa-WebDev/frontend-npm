import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "../components/Contact";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

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
      {/* BANNIÈRE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative mb-14 w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-white">
          <div className="absolute z-20 inset-0 bg-black/40" />
          <img
            src="/b2.webp"
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
                Votre Pharmacien vous écoute et vous conseille
              </motion.h1>
              <p className="text-sm md:text-lg max-w-2xl mx-auto">
                Conscient de l'importance de la proximité avec vous, votre
                pharmacien d'ici vous écoute et vous conseille la bonne marche à
                suivre. C'est pourquoi :
              </p>
            </div>
          </motion.h1>
        </div>
      </motion.div>
      {/* Section grid texte + image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NOS CONSEILS</h2>
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

      {/* card avec texte  */}

      {/* CONTENU PRINCIPAL */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full py-10 space-y-16"
      >
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-green-700">
              Vous d'abord
            </h2>
            <p className="text-gray-700">
              La Nouvelle Pharmacie M'Pouto « Penser GLOBAL pour mieux agir
              LOCAL ensemble » se met à votre disposition tous les jours de la
              semaine pour vous conseiller, orienter, aiguiller… munis d’une
              ordonnance ou en quête de services qui concourent à votre
              bien-être.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/galerie11.webp"
              alt="Pharmacie accueil"
              className="rounded-xl w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>

        {/* Section 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <img
              src="/galerie8.webp"
              alt="Docteur Traore"
              className="rounded-xl w-full h-auto object-cover shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-green-700">
              La croyance du Dr TRAORE
            </h2>
            <p className="text-gray-700">
              Convaincu que le triptyque « Environnement - Alimentation - Santé
              » est indissociable, Dr TRAORE Adama à force de travail avec
              rigueur et passion s’est construit autour de ces 3 axes pendant 28
              ans avant de reprendre la gérance de la Nouvelle
              Pharmacie M’Pouto.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-green-700">
              Son expertise à votre disposition
            </h2>
            <p className="text-gray-700">
              La recrudescence rapprochée de pandémies de ces dernières années
              (i.e. Ebola, Covid, Variole du singe…), prouve qu’il avait vu
              juste pour ses choix de spécialisation DEA (Toxicologie de
              l’Environnement). Conscient de l’importance du bien-être pour
              tous, sa MSBM, son DU (Dermo-Cosmétique), et son PhD (Toxicologie)
              lui ouvrent les portes des grands groupes de la cosmétique, grâce
              au règlement le plus exigeant au monde (CE n° 1223/2009).
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/galerie14.webp"
              alt="Expertise"
              className="rounded-xl w-full h-auto object-cover shadow-md"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Testimonials carousel */}
      <div className="mt-24">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl md:text-4xl font-semibold text-center mb-10"
        >
          TEMOIGNAGES DE NOS CLIENTS
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto overflow-hidden"
        >
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
        </motion.div>

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
