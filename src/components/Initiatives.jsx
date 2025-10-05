// File: Initiatives.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_URL = "http://localhost:5000/api/initiatives";
const UPLOADS_BASE_URL = "http://localhost:5000/uploads/";

const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    fetchInitiatives();
  }, []);

  const fetchInitiatives = async () => {
    try {
      const res = await axios.get(API_URL);
      setInitiatives(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch initiatives:", err);
    }
  };

  return (
    <section className="Initiatives bg-gradient-to-r from-[#011836] via-[#002754cc] to-[#002754cc] py-12 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        <h1 className="font-raleway font-bold text-[2.5rem] sm:text-[4rem] pb-4 text-gray-200 text-center">
          <span className="hidden sm:inline">OUR </span>INITIATIVES
        </h1>

        <div className="initiative-cards w-full mt-10">
          {initiatives.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              className="h-[400px]"
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {initiatives.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={
                        item.image?.startsWith("http")
                          ? item.image
                          : `${UPLOADS_BASE_URL}${item.image}`
                      }
                      alt={item.title}
                      className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                        {item.title}
                      </h2>
                      <p className="text-gray-200 text-sm opacity-90">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-400 text-lg text-center mt-12">
              No initiatives added yet. Go to Admin Page to add some 🚀
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
