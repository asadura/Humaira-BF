import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * Optimized Navbar:
 * - No login/signup
 * - Brand colors: primary #43B0F1, accent #FFD166, dark #062D4F
 * - Ripple effect on interactive buttons
 * - Hover/scale micro-interactions
 * - Accessible attributes
 */

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/event", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // ripple helper for buttons
  const createRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          background: scrolled ? "var(--brand-primary)" : "transparent",
          backdropFilter: scrolled ? "saturate(120%) blur(6px)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="./Logo.jpeg"
              alt="Humaira Logo"
              className="h-12 w-auto rounded-full"
              style={{ boxShadow: "0 6px 18px rgba(6,45,79,0.08)" }}
            />
            <div className="leading-tight">
              <div
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "white" }}
              >
                Humaira
              </div>
              <div
                className="text-sm md:text-base"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Development Foundation
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  `relative py-2 px-1 transition-transform duration-160 transform ${
                    isActive
                      ? "text-[color:var(--brand-accent)]"
                      : "text-white/95 hover:scale-105 hover:text-[color:var(--brand-accent)]"
                  }`
                }
              >
                {item.label}
                {/* active underline */}
                {location.pathname === item.to && (
                  <span
                    className="absolute left-0 bottom-0 h-0.5"
                    style={{ background: "var(--brand-accent)", width: "100%" }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={(e) => {
                createRipple(e);
                setMenuOpen(true);
              }}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="p-2 rounded-md focus:ring-2 focus:ring-offset-2"
              style={{ color: "white" }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-over */}
      <div
        className={`fixed inset-0 z-40 pointer-events-none transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <button
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0`}
          style={{ background: "rgba(3,7,18,0.5)" }}
          aria-hidden="true"
        />

        {/* Panel */}
        <aside
          className={`fixed top-0 right-0 h-full w-[86%] max-w-xs bg-white/10 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="h-20 px-4 flex items-center bg-black justify-between border-b">
            <div className="flex items-center gap-3">
          
            </div>
            <button
              onClick={(e) => { createRipple(e); setMenuOpen(false); }}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-black/5 focus:ring-2 focus:ring-offset-2"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item, idx) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-md text-lg font-medium transform transition-all duration-200 ${
                    isActive
                      ? "bg-blue-800 text-white scale-[1.01]"
                      : "text-white hover:bg-gray-100 hover:scale-[1.02]"
                  }`
                }
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                {item.label}
              </NavLink>
            ))}

<div className="px-6 py-4 mt-4 rounded-xl bg-transparent border border-white/20 shadow-md backdrop-blur-sm">
  <h3 className="text-lg font-semibold text-yellow-300 text-bold mb-3">
     Get in Touch
  </h3>
  <div className="space-y-2 text-[15px]">
    <p className="flex items-center gap-2 text-white transition-colors duration-200">
     <span className="bg-blue-800/15  text-[color:var(--brand-primary)] px-2 py-1 rounded-lg text-md font-medium">
        Phone
      </span>
      +92 305 4638070
    </p>
    <p className="flex items-center gap-2 text-white hover:text-[color:var(--brand-primary)] transition-colors duration-200">
      <span className="bg-blue-800/15  text-[color:var(--brand-primary)] px-2 py-1 rounded-lg text-md font-medium">
        Email
      </span>
      <a
        className=" text-white"
      >
        info@hdfintl <br />.com
      </a>
    </p>
  </div>
</div>

          </nav>
        </aside>
      </div>
    </>
  );
}
