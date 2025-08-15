import React, { useState, useEffect, useRef } from 'react';
import {  AnimatePresence } from 'framer-motion';
import {  motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // added icons
import race1 from '../../images/race1.jpg';
import race2 from '../../images/race2.jpg';
import race3 from '../../images/race3.jpg';

const images = [race1, race2, race3];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeBtn, setActiveBtn] = useState(null); // track clicked button
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      handleSlide('next', false);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleSlide = (type, clicked = true) => {
    setDirection(type === 'next' ? 1 : -1);
    setCurrentImage((prev) =>
      type === 'next' ? (prev + 1) % images.length : prev === 0 ? images.length - 1 : prev - 1
    );

    if (clicked) {
      setActiveBtn(type);
      startAutoSlide(); // restart timer
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Sliding images */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            custom={direction}
            initial={{ x: direction === 1 ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: direction === 1 ? '-100%' : '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full px-6 lg:px-20 pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-wide mb-4">
          NEMESIS RACING
        </h1>
        <p className="text-lg md:text-2xl max-w-xl mb-6 leading-relaxed">
          Engineering adrenaline on wheels — pushing speed, style, and innovation to the next level.
        </p>
        <a
          href="#about"
          className="bg-blue-600 hover:bg-blue-800 transition-all px-6 py-3 text-lg font-bold uppercase tracking-wide rounded"
        >
          Discover More
        </a>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2">
        <button
          onClick={() => handleSlide('prev')}
          className={`p-3 transition-all ${
            activeBtn === 'prev' ? 'bg-black' : 'bg-blue-600'
          } hover:bg-blue-800 text-white`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleSlide('next')}
          className={`p-3 transition-all ${
            activeBtn === 'next' ? 'bg-black' : 'bg-blue-600'
          } hover:bg-blue-800 text-white`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
