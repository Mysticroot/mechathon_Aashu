// src/components/common/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img src="/images/logo.png" alt="Nemesis Racing" className="h-14 mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Nemesis Racing is a competitive racing team dedicated to pushing the limits of
              performance, engineering, and teamwork. Passion drives us forward.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium text-gray-200">Address:</span> Nemesis Racing HQ, Pune,
                India
              </li>
              <li>
                <span className="font-medium text-gray-200">Phone:</span> +91 98765 43210
              </li>
              <li>
                <span className="font-medium text-gray-200">Email:</span>{' '}
                <a
                  href="mailto:contact@nemesisracing.com"
                  className="hover:text-yellow-400 transition"
                >
                  contact@nemesisracing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/history" className="hover:text-yellow-400 transition">
                  History
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-yellow-400 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/become-sponsor" className="hover:text-yellow-400 transition">
                  Become a Sponsor
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nemesis Racing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
