// Juste en dessous de ta section image+texte ou avant Contact
import { motion } from "framer-motion";
import { MdOutlineOndemandVideo } from "react-icons/md";

const VideoDemo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 py-20"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        <MdOutlineOndemandVideo className="inline-block text-[#00B583] mr-2 mb-1" />
        Démo Vidéo
      </motion.h2>
      <p className="md:text-[16px] text-sm text-left md:text-center px-4 md:px-[20%] pt-8">
        Découvrez en image le fonctionnement de notre pharmacie moderne et
        l'accueil chaleureux que nous réservons à nos clients.
      </p>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <video controls className="w-full h-[70vh] object-cover">
          <source src="/demos.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </motion.section>
  );
};

export default VideoDemo;
