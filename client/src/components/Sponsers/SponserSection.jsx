// src/components/home/SponsorsSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const sponsors = [
  { name: 'Pirelli', logo: '/images/sponsors/pirelli.png' },
  { name: 'Aramco', logo: '/images/sponsors/aramco.png' },
  { name: 'Salesforce', logo: '/images/sponsors/salesforce.png' },
  { name: 'Shell', logo: '/images/sponsors/shell.png' },
  { name: 'Rolex', logo: '/images/sponsors/rolex.png' },
  { name: 'AWS', logo: '/images/sponsors/aws.png' },
];

export default function SponsorsSection() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Title and Become Sponsor Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Proud Sponsors</h2>
          <a
            href="/become-sponsor"
            className="mt-6 md:mt-0 inline-flex items-center gap-3 px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 shadow-lg shadow-red-500/30 transition-transform transform hover:scale-105"
          >
            Become a Sponsor <ArrowRight size={20} />
          </a>
        </div>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-10 text-center text-gray-400 text-lg italic">
          Driving innovation and passion, together.
        </p>
      </div>
    </section>
  );
}
