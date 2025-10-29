import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const data = [
  { img: "/cir1.jpeg", title: "Orphanage Education Program" },
  { img: "/cir3.jpeg", title: "Special Needs Programs" },
  { img: "/cir5.jpeg", title: "Women Empowerment" },
  { img: "/verticlechild2.jpeg", title: "Weekly Food Drives" },
  { img: "/cir3.jpeg", title: "Specialised Special Needs Programs" },

];

export default function CircleSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const slides = useMemo(
    () =>
      data.map((item, index) => {
        const isCenter = index === activeIndex;
        return (
          <SwiperSlide
            key={index}
            className="overflow-visible flex justify-center items-center"
          >
            <motion.div
              className="flex flex-col items-center group overflow-visible"
              animate={isCenter ? { scale: 1.15, y: -8 } : { scale: 1, y: 0 }}
              style={{ zIndex: isCenter ? 10 : 1 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Image Circle */}
              <motion.div
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-400 shadow-md"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </motion.div>

              {/* Title Box */}
              <motion.div
                className="mt-5 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md w-56 md:w-64 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 15px rgba(59,130,246,0.15)",
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300">
                  {item.title}
                </h3>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        );
      }),
    [activeIndex]
  );

  return (
    <section className="flex flex-col items-center text-center py-28 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Heading */}
      <h1
        data-aos="fade-up"
        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-600 dark:text-blue-400"
      >
        Our Projects
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-lg md:text-xl text-blue-900 dark:text-blue-300 max-w-3xl mb-20"
      >
        Join hands with{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          HDF
        </span>{" "}
        to bring hope, empowerment, and lasting change to individuals and
        communities in need.
      </p>

      {/* Swiper Slider */}
      <div className="relative w-full max-w-7xl overflow-visible">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          navigation={true}
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
          {slides}
        </Swiper>

        {/* ✅ Custom Navigation Styling */}
        <style>
          {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #2563eb;
              top: 50%;
              transform: translateY(-50%);
              width: 2rem;
              height: 2rem;
            }
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              color: #1d4ed8;
            }
            .swiper-button-prev {
              left: -1rem;
            }
            .swiper-button-next {
              right: -1rem;
            }

            @media (max-width: 640px) {
              .swiper-button-next,
              .swiper-button-prev {
                display: none;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
