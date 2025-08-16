// src/pages/History.jsx
import React from 'react';

const historyData = [
  {
    year: '2024',
    title: 'Mechathon Buggy Competition 2024',
    subtitle: 'Innovation & Speed on Track',
    description:
      'The 2024 competition saw 20 teams competing with innovative buggy designs. The winners excelled in speed, efficiency, and technical design, pushing the boundaries of student engineering.',
  },
  {
    year: '2023',
    title: 'Mechathon Buggy Competition 2023',
    subtitle: 'Engineering Meets Creativity',
    description:
      'In 2023, students showcased their creativity and technical skills in buggy design and racing. Safety, teamwork, and problem-solving were the key highlights.',
  },
  {
    year: '2022',
    title: 'Mechathon Buggy Competition 2022',
    subtitle: 'First Edition – Building the Future',
    description:
      'The inaugural Mechathon Buggy Competition in 2022 was a milestone event, inspiring students to apply their engineering knowledge to real-world racing challenges.',
  },
  // Add more years as needed
];

export default function History() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-12 text-center uppercase text-red-600">
        Competition History
      </h1>

      <div className="space-y-12">
        {historyData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden md:flex md:items-center hover:shadow-lg transition-shadow"
          >
            {/* Placeholder Box instead of Image */}
            <div className="md:w-1/3 flex items-center justify-center bg-red-100 h-64 md:h-full">
              <span className="text-gray-500 text-xl font-bold">{item.year || 'Year'}</span>
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                {item.title || 'Untitled Competition'}
              </h2>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">{item.subtitle || ''}</h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description || 'No description available.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
