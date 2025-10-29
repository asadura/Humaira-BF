import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import factsBg from "../assets/facts.jpg";

export default function Funds() {
  const stats = [
    { value: 2, label: "Countries", suffix: "+", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-16 h-12 md:h-16 text-yellow-400/90 drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486..." />
      </svg>
    )},
    { value: 40, label: "Volunteers", suffix: "+", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-16 h-12 md:h-16 text-yellow-400/90 drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.654 0..." />
      </svg>
    )},
    { value: 100000, label: "Our Goal", suffix: "$", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-16 h-12 md:h-16 text-yellow-400/90 drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10..." />
      </svg>
    )},
    { value: 5000, label: "Raised", suffix: "$", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-16 h-12 md:h-16 text-yellow-400/90 drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-8V4..." />
      </svg>
    )},
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-center bg-cover py-16 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${factsBg})`,
        backgroundAttachment: "scroll", // ✅ fixes iOS blur issue
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Stats Grid */}
      <motion.div
        className="relative max-w-6xl w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center gap-3  rounded-2xl py-6 px-4"
            variants={itemVariants}
          >
            {stat.icon}
            <h3 className="relative text-3xl md:text-4xl font-bold text-yellow-400/90 flex items-center justify-center gap-1 drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]">
              {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
              <span className="text-xl md:text-2xl">{stat.suffix}</span>
            </h3>
            <p className="text-lg md:text-xl font-semibold text-white/90">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
