import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Ini from '../components/Initiatives'
import Event from '../components/Circularimg'

export default function About() {
  const [animate, setAnimate] = useState(false);
  const [clipValue, setClipValue] = useState("polygon(0 0, 100% 0, 100% 100%, 5% 90%)");

  useEffect(() => {
    setAnimate(true); // trigger animation on mount

 

  }, []);

  return (
    <>
      <Navbar />

      {/* Page Header Section */}
      <div
        className="
          relative
          text-center
          bg-cover bg-center bg-no-repeat
          bg-fixed
          min-h-[80vh]
          flex flex-col justify-center items-center
          px-6 md:px-16 py-28 md:py-44
          transition-[clip-path] duration-1000 ease-in-out
          overflow-hidden
          shadow-2xl
        "
        style={{
          backgroundColor: "#1a202c", // fallback color
          backgroundImage: `url('/ini.jpeg')`,
          clipPath: clipValue,
        }}
      >
        {/* Transparent overlay with fade-in animation */}
        <div
          className={`absolute inset-0 bg-black opacity-40 z-0 pointer-events-none
            ${animate ? "fade-in" : "opacity-0"}
          `}
        />

        {/* Content container */}
        <div className="relative z-10 max-w-5xl w-full text-white">
          {/* Title with animation */}
          <h1
            className={`text-yellow-400 text-5xl md:text-7xl font-extrabold tracking-wide inline-block pb-4 relative
              after:absolute after:w-28 after:h-1 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:bottom-0
              drop-shadow-lg select-none font-serif
              ${animate ? "animate-fadeInUp" : "opacity-0"}
            `}
            style={{ animationDelay: "0.3s" }}
          >
            Projects
          </h1>

          {/* Breadcrumb with staggered animation */}
          <nav
            className={`mt-8 text-white text-lg md:text-xl flex justify-center space-x-3 select-none font-medium tracking-wide
              ${animate ? "animate-fadeInUp" : "opacity-0"}
            `}
            style={{ animationDelay: "0.7s" }}
          ><h3 className="text-yellow-300 font-mono" >"Empower Change, Celebrate Progress"</h3>
          </nav>
        </div>
      </div>

      {/* Other Page Content */}
      <Ini/>
      <Event />
      <Footer />
      <BackToTop />

      {/* Custom styles for fade-in overlay */}
      <style jsx>{`
        .fade-in {
          animation: fadeInOverlay 1.5s ease forwards;
        }

        @keyframes fadeInOverlay {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.4;
          }
        }

        /* You may already have animate-fadeInUp in your Tailwind config, but in case you don't: */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </>
  );
}
