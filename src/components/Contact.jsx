import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      nom: form.current.nom.value,
      email: form.current.email.value,
      numero: form.current.numero.value,
      message: form.current.message.value,
    };

    const toastId = toast.loading("Envoi en cours...");

    emailjs
      .send(
        "service_8cp7vx7",
        "template_g9gfe0q",
        formData,
        "QHtI5zOsEGjMmBwb6"
      )
      .then(() => {
        toast.success("Message envoyé avec succès !", { id: toastId });
        form.current.reset();
      })
      .catch(() => {
        toast.error("Une erreur est survenue, veuillez réessayer.", {
          id: toastId,
        });
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <section className="min-h-screen max-w-4xl mx-auto px-4 pt-20">
        <Toaster position="top-right" />{" "}
        {/* <- important pour afficher les toasts */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-[#1d2f4c] mb-12"
        >
          <p className="text-2xl md:text-4xl font-bold">
            <FaPhoneAlt className="inline-block text-[#7FB23A] mr-2 mb-1" />
            VOUS AVEZ BESOIN DE CONSEIL
          </p>
          <p className="md:text-[16px] text-sm text-left md:text-center px-4 md:px-[20%] pt-8">
            Nous sommes présents pour vous chaque jour. Faites le
            pas, c'est gratuit.
          </p>
        </motion.h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
            className="bg-[#7FB23A] bodrt border-gray-400 font-bold text-white px-10 py-3 cursor-pointer hover:bg-opacity-80 rounded-[0.2rem] transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </motion.div>
  );
}
