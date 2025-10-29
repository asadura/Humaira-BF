import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";
import card3 from "../assets/card3.jpeg";
import card4 from "../assets/card4.jpeg";
import card5 from "../assets/card5.jpeg";
import card6 from "../assets/card6.jpeg";

const slides = [
  {
    img: card6,
    title: "Gumman Initiative",
    desc: "Empowering student led NGOS",
  },
];

const Initiatives = () => {
  return (
    <section className="Initiatives bg-gradient-to-r from-[#011836] via-[#002754cc] to-[#002754cc] py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center justify-center">
        <h1 className="font-raleway font-bold text-[2.2rem] sm:text-[3.5rem] pb-4 text-gray-200 text-center">
          <span className="hidden sm:inline">OUR </span>INITIATIVES
        </h1>

        <div className="initiative-cards w-full flex justify-center mt-8 sm:mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            className="!h-auto pb-8 w-full max-w-md sm:max-w-2xl md:max-w-4xl"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-80 sm:w-96 h-[260px] sm:h-[300px] mx-auto rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
                    <h2 className="text-blue-400 text-lg md:text-xl font-bold">
                      {s.title}
                    </h2>
                    <p className="text-gray-200 text-sm opacity-90">{s.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
