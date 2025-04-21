import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      nom: form.current.nom.value,
      email: form.current.email.value,
      numero: form.current.numero.value,
      message: form.current.message.value,
      cible: "pharmacie",
    };

    const toastId = toast.loading("Envoi en cours...");

    try {
      const res = await fetch(
        "https://backend-npm-x183.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        toast.success("Message envoyé avec succès !", { id: toastId });
        form.current.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Une erreur est survenue, veuillez réessayer.", {
        id: toastId,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <section className="min-h-screen max-w-7xl mx-auto px-4 pb-20">
        <div className="relative mt-20 w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-white">
          <div className="absolute z-20 inset-0 bg-black/40" />
          <img
            src="/c1.webp"
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
            <p className="text-2xl md:text-4xl font-bold">
              <FaPhoneAlt className="inline-block text-white mr-2 mb-1" />
              VOUS AVEZ BESOIN DE CONSEIL
            </p>
            <p className="md:text-[16px] text-sm text-left md:text-center px-4 md:px-[20%] pt-8">
              Faites-nous remonter l'inconfort que vous avez vécu
            </p>
          </motion.h1>
        </div>
        <Toaster position="top-right" />{" "}
        {/* <- important pour afficher les toasts */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-10">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="nom"
              placeholder="Nom et Prénom"
              required
              className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-[0.2rem] focus:outline-none focus:ring-2 focus:ring-[#7FB23A]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2  text-gray-500 border border-gray-300 rounded-[0.2rem] focus:outline-none focus:ring-2 focus:ring-[#7FB23A]"
            />
            <input
              type="text"
              name="numero"
              placeholder="Numéro"
              required
              className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-[0.2rem] focus:outline-none focus:ring-2 focus:ring-[#7FB23A]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            required
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-[0.2rem] focus:outline-none focus:ring-2 focus:ring-[#7FB23A]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#EAD72A]  font-bold text-gray-700 px-8 py-2 cursor-pointer hover:bg-opacity-80 rounded-[0.2rem] transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </motion.div>
  );
}

// service_ls6pv7b;
