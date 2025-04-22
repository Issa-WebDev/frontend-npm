// ProductCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper-custom.css";

const products = [
  {
    id: 1,
    name: "Produit 1",
    image: "/produit1.webp",
  },
  {
    id: 2,
    name: "Produit 2",
    image: "/produit4.webp",
  },
  {
    id: 3,
    name: "Produit 3",
    image: "/produit2.webp",
  },
  {
    id: 4,
    name: "Produit 4",
    image: "/produit3.webp",
  },
  {
    id: 5,
    name: "Produit 5",
    image: "/produit4.webp",
  },
  {
    id: 6,
    name: "Produit 6",
    image: "/produit2.webp",
  },
];

const CarouselMedicament = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
		loop={true}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-md text-gray-700 rounded-xl overflow-hidden mb-4 p-4 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMedicament;
