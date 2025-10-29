import main from "../assets/LandImg.png";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[600px] bg-blue-500 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex-1 px-6 md:px-12 py-10 text-left">
        {/* Caption 1 */}
        <div className="flex items-center gap-3">
          <hr className="w-2/5 border border-yellow-400" />
          <h4 className="text-lg md:text-xl italic text-yellowgreen">
            Humaira Development Foundation 
          </h4>
        </div>

        {/* Titles */}
        <div className="mt-12 md:mt-28 md:ml-20 space-y-6">
          {/* Caption 2 */}
          <div>
            <p className="text-2xl md:text-5xl font-bold uppercase text-white">
              At <span className="text-yellow-400">HDF,</span> we work towards
              the betterment of our <span className="text-yellow-400">Society</span>
            </p>
          </div>

          {/* Caption 3 */}
          <div className="max-w-md">
            <p className="text-base md:text-lg font-light italic text-white">
            At Humaira Development Foundation, we are dedicated to creating meaningful social change by empowering underprivileged children and marginalized communities. Through education, skill development, and community-based initiatives, we strive to break the cycle of poverty and build a more equitable and compassionate society where every individual has the opportunity to thrive.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
            >
              Learn More
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0 w-full md:w-[700px] h-[600px]">
        <img
          src={main}
          alt="Smiling Faces"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
