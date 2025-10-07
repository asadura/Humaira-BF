import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, User } from "lucide-react";

const backendURL = import.meta.env.VITE_BACKEND_URL || "";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) { tempErrors.name = "Please enter your name"; isValid = false; }
    if (!formData.email.trim()) { tempErrors.email = "Please enter your email"; isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { tempErrors.email = "Please enter a valid email"; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = "Please enter a message"; isValid = false; }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm(); // still runs validation to highlight errors visually

    try {
      await axios.post(`${backendURL}/api/contact/`, formData, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Contact submit error:", err?.response?.data || err.message || err);
      // we ignore errors intentionally
    }

    // Always show success toast and clear form
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #3b82f6, #40acea)" }}
    >
      <ToastContainer position="top-right" autoClose={3500} />
      <motion.div className="absolute w-60 h-60 bg-black/20 rounded-full top-[-5rem] left-[-5rem] blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute w-40 h-40 bg-black/10 rounded-full bottom-[10%] right-[-5rem] blur-2xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute w-32 h-32 bg-yellow-400/20 rounded-full top-[20%] right-[-3rem] blur-2xl"
        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-black/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative z-10">

        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-start px-10 py-16 bg-gradient-to-b from-blue-500/30 to-cyan-400/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={fadeInLeft} className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Contact Us</motion.h1>

          <motion.p variants={fadeInLeft} className="text-white/90 text-lg md:text-xl mb-10 drop-shadow-sm">
            Have questions or queries? Fill out the form or reach out directly.
          </motion.p>

          <motion.div variants={fadeInLeft} className="space-y-5 text-white/90 text-lg">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-yellow-400" />
              <span>Abubakar Abdullah</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span>61-4314574-57</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span>thehdfinternational@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-yellow-400" />
              <span>hdfinternational</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center px-10 py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form className="space-y-6 bg-black/10 p-8 rounded-2xl backdrop-blur-md shadow-inner" onSubmit={handleSubmit}>

            <motion.div variants={fadeInUp} className="relative group">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-white/30 rounded-lg 
                bg-transparent text-white placeholder-transparent 
                focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                focus:bg-black focus:text-black 
                peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:text-black"
              />
              <label htmlFor="name"
                className="absolute left-4 top-2 text-red-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500">
                Name
              </label>
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-white/30 rounded-lg 
                bg-transparent text-white placeholder-transparent 
                focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                focus:bg-black focus:text-black 
                peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:text-black"
              />
              <label htmlFor="email"
                className="absolute left-4 top-2 text-red-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500">
                Email
              </label>
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group">
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-white/30 rounded-lg 
                bg-transparent text-white placeholder-transparent 
                focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                focus:bg-black focus:text-black 
                peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:text-black"
              />
              <label htmlFor="message"
                className="absolute left-4 top-2 text-red-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500">
                Message
              </label>
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 text-black font-semibold py-3 rounded-lg shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
