import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Initiatives = () => {
  return (
    <section className="Initiatives bg-gradient-to-r from-[#011836] via-[#002754cc] to-[#002754cc] py-12 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        <h1 className="font-raleway font-bold text-[2.5rem] sm:text-[4rem] pb-4 text-gray-200 text-center">
          <span className="hidden sm:inline">OUR </span>INITIATIVES
        </h1>

        <div className="initiative-cards w-full mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            <SwiperSlide>
              
              <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="src/assets/card6.jpeg"
                  alt="Making Them Feel No Difference"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    Making Them Feel No Difference
                  </h2>
                  <p className="text-gray-200 text-sm opacity-90">
                    Empowering children with disabilities to integrate freely.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="src/assets/card2.jpeg"
                  alt="Empowering Other NGOs"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    Empowering Other NGOs
                  </h2>
                  <p className="text-gray-200 text-sm opacity-90">
                    Supporting and guiding other NGOs in their initiatives.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="src/assets/card3.jpeg"
                  alt="Support for Disabled Students"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    Support for Disabled Students
                  </h2>
                  <p className="text-gray-200 text-sm opacity-90">
                    Providing resources and facilities for disabled students.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="src/assets/card4.jpeg"
                  alt="Making Them Part of Our Family"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    Making Them Part of Our Family
                  </h2>
                  <p className="text-gray-200 text-sm opacity-90">
                    Bringing underprivileged children into a supportive environment.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="src/assets/card5.jpeg"
                  alt="Encouraging Them to Speak"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    Encouraging Them to Speak
                  </h2>
                  <p className="text-gray-200 text-sm opacity-90">
                    Providing speech therapy and communication workshops.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="/src/assets/card1.jpeg"
                  alt="Providing Food for Shelterless People"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h2 className="text-yellow-400 text-lg md:text-xl font-bold">
                    Providing Food for Shelterless People
                  </h2>
                  <p className="text-gray-200 text-sm opacity-90">
                    Daily food distribution for homeless individuals.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
