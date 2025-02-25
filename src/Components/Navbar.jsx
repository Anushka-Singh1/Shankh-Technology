import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/Logo/Shankh-logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 text-[#3C3C3C] font-semibold px-4 py-3 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.4)] bg-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-[#1D3244]">
            <img src={Logo} alt="Logo" className="w-32" />
          </NavLink>
        </div>
        <div className="hidden md:flex ml-auto space-x-4">
          <NavLink to="/" className="hover:text-[#1D3244] px-4 py-2">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#1D3244] px-4 py-2">
            About Us
          </NavLink>
          <NavLink to="/services" className="hover:text-[#1D3244] px-4 py-2">
            Services
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#1D3244] px-4 py-2">
            Contact Us
          </NavLink>
        </div>
        <button
          className="text-2xl focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </button>
        <div
          className={`fixed top-0 right-0 h-full bg-black transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } w-64 shadow-lg md:hidden`}
        >
          <button
            className="text-3xl text-white absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <div className="mt-16 flex flex-col items-center space-y-6">
            <NavLink
              to="/"
              className="text-lg text-white hover:bg-[#2a4a5e] px-4 py-2 rounded"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-lg text-white hover:bg-[#2a4a5e] px-4 py-2 rounded"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="text-lg text-white hover:bg-[#2a4a5e] px-4 py-2 rounded"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="text-lg text-white hover:bg-[#2a4a5e] px-4 py-2 rounded"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
