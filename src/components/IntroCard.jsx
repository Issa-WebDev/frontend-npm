import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
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

export default function IntroCard() {
  const members = [
    {
      name: "Dr TRAORE Adama",
      role: "CEO | Pharmacien titulaire",
      image: "/pharmacien.webp",
      description:
        "Dr TRAORE Adama, PharmD - PhD Dermo-cosmétologie est un ancien Interne des Hôpitaux. Le choix de l’industrie l’a amené à travailler durant 23 ans à Paris pour les leaders de la cosmétique tels que Chanel, l'Oréal, LVMH, Seppic, J&J, Galderma.",
      color: "linear-gradient(90deg, #7E9B5E, #6A874C)",
    },
    {
      name: "CONSEILS",
      role: "",
      image: "/conseil.jpg",
      description:
        "La Nouvelle Pharmacie Mpouto a pour ambition d’être une des références pour répondre aux problèmes de peau que vous rencontrez.",
      color: "linear-gradient(60deg, #7E9B5E, #6A874C)",
    },
    {
      name: "PARA-PHARMACIE",
      role: "",
      image: "/para.jpg",
      description:
        "Sous la responsabilité de Dr TRAORE, le VISA KLC ambitionne d'encadrer la formation des parapharmaciens en passant par la recommandation de programmes de soins et/ou des routines adéquates.",
      color: "linear-gradient(90deg, #6A874C, #7E9B5E, #A0B97A)",
    },
  ];

  return (
    <motion.section
      className="px-4 md:w-[80%] w-[90%] mx-auto"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <motion.div
            key={index}
            variants={childVariant}
            className="px-4 lg:py-8 py-4 flex flex-col rounded-md items-center text-white text-left md:text-center"
            style={{ background: member.color }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold pb-2">{member.name}</h3>
            {member.role && (
              <span className="text-md px-10 pb-4">{member.role}</span>
            )}
            <p className="text-sm px-2 md:px-10 pb-4">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
