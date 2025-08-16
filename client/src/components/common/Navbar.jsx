import React from 'react';
import logo from '../auth/nemesis-logo.png'; // your logo path
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 lg:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Nemesis Racing" className="h-10 md:h-14 cursor-pointer" />
        </Link>
      </div>

      {/* Menu - aligned to right */}
      <div className="hidden md:flex space-x-10 lg:space-x-14 font-bold tracking-wider">
        <a
          href="/"
          className="text-blue-600 text-lg uppercase italic hover:text-black transition-all duration-200"
        >
          Home
        </a>
        <a
          href="/blogs"
          className="text-blue-600 text-lg uppercase italic hover:text-black transition-all duration-200"
        >
          Blogs
        </a>
        <a
          href="/history"
          className="text-blue-600 text-lg uppercase italic hover:text-black transition-all duration-200"
        >
          History
        </a>
        <a
          href="/Aboutus"
          className="text-blue-600 text-lg uppercase italic hover:text-black transition-all duration-200"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-blue-600 text-lg uppercase italic hover:text-black transition-all duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
