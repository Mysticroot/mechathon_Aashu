import React, { useState } from 'react';
import logo from '../auth/nemesis-logo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white px-6 lg:px-12 py-3 flex items-center justify-between relative z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Nemesis Racing" className="h-10 md:h-12 cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center pt-1 space-x-8 lg:space-x-12 font-bold tracking-wider">
        <a href="/" className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">Home</a>
        <a href="/blogs" className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">Blogs</a>
        <a href="/history" className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">History</a>
        <a href="/Aboutus" className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">About</a>
        <a href="/contact" className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">Contact</a>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-blue-600 focus:outline-none" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden font-bold tracking-wider z-50">
          <a href="/" onClick={toggleMenu} className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">Home</a>
          <a href="/blogs" onClick={toggleMenu} className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">Blogs</a>
          <a href="/history" onClick={toggleMenu} className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">History</a>
          <a href="/Aboutus" onClick={toggleMenu} className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">About</a>
          <a href="/contact" onClick={toggleMenu} className="text-blue-600 text-base uppercase italic hover:text-black transition-all duration-200">Contact</a>
        </div>
      )}
    </nav>
  );
}
