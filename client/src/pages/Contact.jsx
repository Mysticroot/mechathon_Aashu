// src/pages/ContactUs.jsx
import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email sending logic or API
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-red-600 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Contact Us</h1>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Get in Touch</h2>
          <p className="text-gray-700">
            Whether you are a participant, sponsor, or motorsport enthusiast, we’d love to hear from
            you. Reach out to us via email, phone, or visit our club office.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-700">info@mechathon.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700">
                Mechathon Club, Engineering Campus, Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section (Optional) */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 pb-16">
        <iframe
          title="Mechathon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456!2d73.854923!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08a1234567%3A0xabcdef123456!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          className="rounded-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
