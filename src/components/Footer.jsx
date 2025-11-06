// Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#40acea] text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Contact */}
        <div>
          <h2 className="text-yellow-400 font-bold text-lg mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li>Lahore, Pakistan / Sydney, Australia</li>
            <li>admin@hdfintl.com</li>
            <li>+61 431 457 457</li>
            <li>+92 305 463 8070</li>
            
          </ul>
        </div>

   

        {/* Logo Section */}
        <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
          <img 
            src="/Logo-removebg-preview.png"   // put your logo inside the "public" folder
            alt="NGO Logo" 
            className="h-32 w-32 mb-3 drop-shadow-lg"
          />
          <p className="text-gray-100 text-lg">Working together for a better tomorrow</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 py-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 text-sm text-gray-400">
        <p className='text-black font-bold text-lg'>&copy; 2025 Humaira
Development Foundation. All Rights Reserved.</p>
        
        {/* Social Links */}
        <div className="flex gap-3 mt-3 md:mt-0">
       
          <a href="https://www.facebook.com/share/1AS3CRpkLZ/?mibextid=wwXIfr/" className="hover:text-yellow-400 text-black font-bold text-lg"><FaFacebookF /></a>
          <a href="https://www.instagram.com/hdfinternational/" className="hover:text-yellow-400 text-black font-bold text-lg"><FaInstagram /></a>
          <a  href="https://youtube.com/@humairadevelopmentfoundation?si=5Qqn9yRVfM8Y4R07/" className="hover:text-yellow-400 text-black font-bold text-lg"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}
