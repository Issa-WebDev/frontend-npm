import { useState } from "react";
import { motion } from "framer-motion";
import { RiGalleryFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper-custom.css";
import Contact from "../components/Contact";

const images = [
  "/pha-1.jpg",
  "/pha-2.jpg",
  "/pha4.avif",
  "/pha3.avif",
  "/pha1.avif",
  "/pha2.avif",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Galerie() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center text-[#1d2f4c] mb-12 font-[Poppins]"
        >
          <RiGalleryFill className="inline-block text-[#00B583] mr-2 mb-1" />
          Notre Galerie
        </motion.h2>

        {/* Carousel visible directement */}
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  onClick={() => setModalIndex(index)}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`galerie-${index}`}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile fallback (grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalIndex(index)}
              className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt={`galerie-${index}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal Fullscreen Carousel */}
        {modalIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={() => setModalIndex(null)}
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={modalIndex}
              className="w-[90%] h-[80%]"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`modal-${index}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Contact */}
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
}
