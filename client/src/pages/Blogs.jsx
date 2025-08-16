// src/pages/Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    date: '12 JUL',
    category: 'WEC',
    title: 'THE 499PS IN ACTION IN SÃO PAULO',
    image: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo.jpg',
  },
  {
    id: 2,
    date: '09 JUL',
    category: 'WEC',
    title: 'COMMENTS IN THE RUN-UP TO THE 6 HOURS OF SÃO PAULO',
    image: 'https://www.ferrari.com/images/2024/07/09/499p-team-photo.jpg',
  },
  {
    id: 3,
    date: '08 JUL',
    category: 'HYPERCAR',
    title: 'GIOVINAZZI RENEWS HIS CONTRACT WITH FERRARI',
    image: 'https://www.ferrari.com/images/2024/07/08/giovinazzi.jpg',
  },
  // Add more blogs here...
];

export default function Blogs() {
  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-8 text-center uppercase">Latest Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.id}`}
            className="bg-white shadow-lg border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <p className="text-red-600 font-semibold text-sm">
                {blog.date} <span className="mx-2">|</span> {blog.category}
              </p>
              <h2 className="text-lg font-bold mt-2 hover:text-red-600 transition-colors">
                {blog.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
