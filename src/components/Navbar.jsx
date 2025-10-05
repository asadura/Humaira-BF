import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "lucide-react"; // ✅ Import User icon

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Navbar links
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/event", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#43B0F1] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="./Logo.jpeg" alt="Logo" className="h-14 w-auto" />
          <div className="flex flex-col leading-tight">
            <span
              className={`text-2xl md:text-3xl font-bold ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              Humaira
            </span>
            <span
              className={`text-sm md:text-base ${
                scrolled ? "text-white" : "text-gray-200"
              }`}
            >
              Development Foundation
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center gap-8 font-medium relative"
          ref={navRef}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative transition-colors py-2 ${
                path === item.to
                  ? scrolled
                    ? "text-yellow-300"
                    : "text-yellow-400"
                  : scrolled
                  ? "text-white hover:text-yellow-200"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl focus:outline-none ${
            scrolled ? "text-white" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden shadow-lg flex flex-col items-center py-4 space-y-4 animate-fadeIn ${
            scrolled ? "bg-[#43B0F1] text-white" : "bg-gray-900 text-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
