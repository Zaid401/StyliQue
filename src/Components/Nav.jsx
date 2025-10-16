import React, { useState } from 'react';
import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center px-4 md:px-8 py-1">
        {/* Logo */}
        <div>
          <img src="/images/logo.png" className="h-[77px]" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden custom:flex gap-[80px] text-lg font-medium transition-all duration-500 ease-in-out">
          <li><Link to="home" smooth duration={500} className="hover:text-blue-500 cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth duration={500} className="hover:text-blue-500 cursor-pointer">About Us</Link></li>
          <li> <Link to='services' smooth duration={500} className="hover:text-blue-500 cursor-pointer">Services </Link></li> 
          <li><Link to="staff" smooth duration={500} className="hover:text-blue-500 cursor-pointer">Staff</Link></li>
          <li><Link to="test" smooth duration={500} className="hover:text-blue-500 cursor-pointer">Testimonials</Link></li>
        </ul>

        {/* Book Button (Desktop) */}
        <div className="hidden custom:block transition-all duration-500 ease-in-out">
          <RouterLink to="/book">
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition rounded">
              BOOK NOW
            </button>
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="custom:hidden transition-all duration-500 ease-in-out">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`custom:hidden bg-black px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium py-4">
          <li>
            <Link to="home" smooth duration={500} onClick={() => setMenuOpen(false)} className="hover:text-blue-500 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="about" smooth duration={500} onClick={() => setMenuOpen(false)} className="hover:text-blue-500 cursor-pointer">About Us</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li>
            <Link to="staff" smooth duration={500} onClick={() => setMenuOpen(false)} className="hover:text-blue-500 cursor-pointer">Staff</Link>
          </li>
          <li>
            <Link to="test" smooth duration={500} onClick={() => setMenuOpen(false)} className="hover:text-blue-500 cursor-pointer">Testimonials</Link>
          </li>
          <li>
            <RouterLink to="/book" onClick={() => setMenuOpen(false)}>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded">
                Book Now
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;


