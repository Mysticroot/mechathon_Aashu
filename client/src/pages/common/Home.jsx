import { Link } from 'react-router-dom';
import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import BlogsSection from '@/components/Blogs/BlogsSection';
import HistorySection from '@/components/History/HistorySection';
import SponsorsSection from '@/components/Sponsers/SponserSection';

const HomePage = () => {
  return (
    <div className="bg-[#0E0E0E] text-white font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Blog */}
      <BlogsSection />

      {/* History */}
      <HistorySection />

      {/* Sponsors */}
      <SponsorsSection />
    </div>
  );
};

export default HomePage;
