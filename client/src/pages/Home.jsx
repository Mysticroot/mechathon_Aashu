import { Link } from 'react-router-dom';
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import BlogsSection from '../components/Blogs/BlogsSection'; 

const HomePage = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
     <HeroSection />

      <BlogsSection />

      {/* Hackathon History Preview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Hackathon History</h2>
        <ul className="space-y-2">
          <li>
            <strong>2025:</strong> AutoBot Sorter by Team MechNerds (1st Place)
          </li>
          <li>
            <strong>2024:</strong> Pneumatic Arm by Team Torque (2nd Place)
          </li>
          <li>
            <strong>2023:</strong> MechVision System by Team Visionary (1st Place)
          </li>
        </ul>
        <Link to="/history" className="text-blue-600 underline">
          View full history
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
