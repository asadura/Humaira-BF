// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="font-semibold text-lg mb-3">About</h4>
          <p className="text-sm leading-relaxed text-gray-400">
            HDF International — supporting our mission and community. 
            Thank you for being part of the journey.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:admin@hdfintl.com" className="hover:text-white transition">
                admin@hdfintl.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+61 2 1234 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Suite 100, Example Street, Sydney</span>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} HDF International. All rights reserved.
      </div>
    </footer>
  );
}
