import { Link } from 'react-router-dom';
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import BlogsSection from '../components/Blogs/BlogsSection'; 
import HistorySection from '@/components/History/HistorySection';
import SponserSection from '../components/Sponsers/SponserSection'; // Assuming you have a SponserSection component

const HomePage = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
     <HeroSection />

      <BlogsSection />

      <HistorySection/>

      <SponserSection />
    </div>
  );
};

export default HomePage;
