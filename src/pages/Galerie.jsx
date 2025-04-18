import { useState } from "react";
import { motion } from "framer-motion";
import { RiGalleryFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper-custom.css";
import Contact from "../components/Contact";

const images = Array.from({ length: 40 }, (_, i) => `/galerie${i + 1}.webp`);
console.log(images)

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Galerie() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-white"
        >
          <div className="absolute z-20 inset-0 bg-black/40" />
          <img
            src="/bannerg.webp"
            alt="Bannière"
            className="absolute rounded-md w-full h-full object-cover"
          />

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="absolute z-50 text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <RiGalleryFill className="inline-block text-[#7FB23A] mr-2 mb-1" />
            NOTRE GALERIE
          </motion.h2>
        </motion.div>

        {/* Carousel toujours visible, responsive */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
        </motion.div>

        {/* Modal Fullscreen Carousel */}
        {modalIndex !== null && (
          <div className="fixed inset-0 z-101 bg-black bg-opacity-90 flex items-center justify-center">
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
              loop={true}
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
