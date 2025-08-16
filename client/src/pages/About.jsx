// src/pages/AboutUs.jsx
import React from 'react';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Innovation & Engineering',
      description:
        'Participants design and build buggies that are fast, efficient, safe, and technically sound.',
    },
    {
      title: 'Sustainability & Responsibility',
      description:
        'We encourage energy-efficient designs and responsible material use throughout the competition.',
    },
    {
      title: 'Learning & Development',
      description:
        'Hands-on experience in engineering, teamwork, and problem-solving is central to every challenge.',
    },
    {
      title: 'Community & Passion',
      description:
        'Mechathon connects students, professionals, and motorsport enthusiasts in a shared learning and competitive environment.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="/images/buggy-hero.jpg" // Replace with your hero image
          alt="Mechathon Buggy Competition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center">
            About Mechathon Buggy Competition
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-12 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Mechathon is a platform where engineering students and motorsport enthusiasts come
          together to design, build, and race buggies. We combine learning, innovation, and
          competition to inspire the next generation of engineers.
        </p>
      </div>

      {/* Pillars */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12 grid md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2 text-red-600">{pillar.title}</h3>
            <p className="text-gray-700">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Commitment */}
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <p className="text-gray-700 leading-relaxed">
          We aim to provide an unforgettable experience blending education, innovation, and
          competition. Every year, we push participants to learn, innovate, and perform at their
          best on and off the track.
        </p>
      </div>
    </div>
  );
}
