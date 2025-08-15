// src/components/home/BlogSection.jsx
import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'How to Build the Perfect Racing Buggy',
    desc: 'Discover expert tips, tools, and tricks to design a racing buggy that dominates the track.',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: 'Top 5 Engineering Hacks for Mechathon',
    desc: 'Save time, improve efficiency, and bring your best innovations to the competition.',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Mechathon 2025',
    desc: 'Get an inside look at how teams prepare for one of the most exciting competitions of the year.',
    image: '/images/blog3.jpg',
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-black transition-colors">
          View All
        </button>
      </div>

      {/* Blog Cards */}
      <div className="space-y-10">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-6 px-4 md:px-6`}
          >
            {/* Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-3">{blog.desc}</p>
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-none hover:bg-black transition-colors"
                onClick={() => console.log(`Go to blog ${blog.id}`)}
              >
                Read More
              </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center relative z-10">
              <div
                className="w-[420px] h-[280px] overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
                style={{
                  clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                }}
              >
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
