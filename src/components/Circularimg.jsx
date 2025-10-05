import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

import { motion } from "framer-motion";

const data = [
  { img: "/cir1.jpeg", title: "Making Them Feel No Difference" },
  { img: "/cir2.jpeg", title: "Empowering Other NGOs" },
  { img: "/cir3.jpeg", title: "Support for Disabled Students" },
  { img: "/cir4.jpeg", title: "Making Them a Part of Our Family" },
  { img: "/cir5.jpeg", title: "Encouraging Them to Speak" },
  { img: "/verticlechild2.jpeg", title: "Providing ShelterLess people With Food" },
];

export default function CircleSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="flex flex-col items-center text-center py-28 px-6 bg-white dark:bg-gray-900 relative">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-600 dark:text-blue-400">
        Our Projects
      </h1>

      <p className="text-lg md:text-xl text-blue-900 dark:text-blue-300 max-w-3xl mb-20">
        Join hands with{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          HDF
        </span>{" "}
        to bring hope, empowerment, and lasting change to individuals and
        communities in need.
      </p>

      <div className="relative w-full max-w-7xl overflow-visible">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          navigation={true} // manual navigation enabled
          loop={true}
          modules={[Navigation]}
          className="w-full overflow-visible"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {data.map((item, index) => {
            const isCenter = index === activeIndex;
            return (
              <SwiperSlide
                key={index}
                className="overflow-visible flex justify-center items-center"
              >
                <motion.div
                  className="flex flex-col items-center group overflow-visible"
                  animate={{ scale: isCenter ? 1.15 : 1, y: isCenter ? -8 : 0 }}
                  style={{ zIndex: isCenter ? 10 : 1 }}
                  transition={{ type: "spring", stiffness: 160, damping: 12 }}
                >
                  <motion.div
                    className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-400 shadow-md"
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 160, damping: 12 }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-full relative z-10"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div
                    className="mt-5 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md w-56 md:w-64"
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 8px 20px rgba(59,130,246,0.15)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300">
                      {item.title}
                    </h3>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #2563eb;
            top: 50%;
            width: 1.8rem;
            height: 1.8rem;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: #1d4ed8;
          }
          .swiper-button-prev {
            left: -1.5rem;
          }
          .swiper-button-next {
            right: -1.5rem;
          }
        `}</style>
      </div>
    </section>
  );
}
