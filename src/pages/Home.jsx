import Navbar from "../components/Navbar";
import space from "../assets/vid.mp4";
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";
import Cimg from "../components/Circularimg";
import QuickDonate from "../components/QuickDonate";

export default function Home() {
  return (
    <>
      <Navbar />

     <div className="relative w-full h-[700px] sm:h-[750px] overflow-hidden">
  {/* ✅ Background Video (mobile-safe autoplay) */}
  <video
    src={space}
    type="video/mp4"
    autoPlay
    loop
    muted
    playsInline // 👈 critical for iOS Safari
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover animate-zoomSlow pointer-events-none select-none z-0"
  />

  {/* ✅ Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* ✅ Foreground Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center md:flex-row md:justify-between px-4 sm:px-8 md:px-16 gap-8 md:gap-12 z-20">
    {/* NGO Title */}
    <div className="animate-fadeInUp max-w-2xl text-center md:text-left md:ml-36">
      <h1 className="font-extrabold leading-tight">
        <span className="block mt-12 text-blue-400 drop-shadow-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl animate-slideInLeft">
          SECURE
        </span>
        <span className="block mt-2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-slideInLeftDelay">
          YOUR AKHIRA
        </span>
      </h1>
    </div>

    {/* Quick Donate Box */}
    <div className="w-full max-w-sm sm:max-w-md mx-auto md:mx-0 md:mr-12 animate-slideInRightDelay">
      <QuickDonate showInline />
    </div>
  </div>
</div>


      {/* ✅ Other Sections */}
      <Landing />
      <Initiatives />
      <Funds />
      <Cimg />
      <Footer />
      <BackToTop />
    </>
  );
}
