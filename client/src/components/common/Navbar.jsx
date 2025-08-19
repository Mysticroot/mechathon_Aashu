import React, { useState, useEffect } from "react";
import logo from "../auth/nemesis-logo (2).png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 100);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setIsOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${isAtTop ? 'bg-transparent' : 'bg-[#0A0A0A]/95 backdrop-blur-sm'}`}
    >
      <div className="px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Nemesis Racing" className="h-10 md:h-12 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center pt-1 space-x-8 lg:space-x-12 font-bold tracking-wider">
          {['Home', 'Blogs', 'History', 'About', 'Contact'].map((item, idx) => (
            <Link
              key={idx}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className={`text-base uppercase italic transition-all duration-300 ${
                isAtTop ? 'text-white hover:text-[#0047FF]' : 'text-white hover:text-[#0047FF]'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu (Drawer from right) */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-screen bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg z-50 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Nav Links (top but centered horizontally) */}
          <div className="flex flex-col items-center space-y-6 font-bold tracking-wider mt-8">
            {['Home', 'Blogs', 'History', 'About', 'Contact'].map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg uppercase italic hover:text-[#0047FF] transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
