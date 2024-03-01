import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

const NavBar = () => {
  const [isShowned, setIsShowned] = useState(false);
  const hidden = isShowned ? "" : "hidden";
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto container">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a href="/" className="flex items-center py-4 px-2">
              <img src="/images/Group 205.png" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex md:gap-2 items-center space-x-1">
            <a href="/" className="py-4 text-customFontSize px-2 merriweather-bold text-customMainColor font-bold">
              Home
            </a>
            <a href="/about" className="py-4 px-2 text-customFontSize merriweather-bold text-customPrimaryColor font-bold">
              About us
            </a>
            <button>
                 <a href="/get_started" className="text-white w-[165px] px-[7px] py-[10px] rounded-md text-customFontSize bg-customPrimaryColor font-bold transition duration-300 hover:bg-blue-700">
                      Get Started
                 </a>
           </button>

          </div>

          <div className="md:hidden mr-1 flex items-center">
            <button
              className="outline-none"
              onClick={() => setIsShowned(!isShowned)}
            >
              {!isShowned ? <FaBars className="text-xl transition duration-300" /> : <FaX  className="transition duration-300 text-xl"/>}
            </button>
          </div>
        </div>
         <div className={`md:hidden absolute shadow-lg px-3 pt-5 bg-white top-0 h-[100vh] left-0 w-[350px] transition duration-300 ${hidden}`}>
          <ul className="md:hidden flex flex-col gap-2">
            <li>
              <a href="#" className="block text-sm px-2 py-4 text-customFontSize hover:bg-customPrimaryColor text-customMainColor merriweather-bold ">Home</a>
            </li>
            <li>
              <a href="#About" className="block text-sm px-2 text-customMainColor py-4 hover:bg-customPrimaryColor merriweather-bold transition duration-300">About Us</a>
            </li>
            <li>
            <button className="mt-4">
                 <a href="#" className="text-white px-[7px] py-[10px] rounded-md text-customFontSize bg-customPrimaryColor font-bold transition duration-300 hover:bg-blue-700">
                      Get Started
                 </a>
           </button>
            </li>
          </ul>
        </div> 

      </div>
    </nav>
  );
};

export default NavBar;
