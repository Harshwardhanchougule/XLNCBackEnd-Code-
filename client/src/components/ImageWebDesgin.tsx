import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SEOImage1 from "@/images/SEO/Google My Business & Local Listings Optimization.jpg"
import SEOImage2 from "@/images/SEO/Speed, Security & Mobile Optimization.jpg"
import SEOImage3 from "@/images/SEO/Reputation & Local SEO Strategy.jpg"
import SEOImage4 from "@/images/SEO/Advanced SEO Enhancements.jpg"
import SEOImage5 from "@/images/SEO/SEO-Optimized Content & Blog Writing.jpg"
import SEOImage6 from "@/images/SEO/Comprehensive Website Audit & Optimization.jpg"
const ImageCarousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselItems = [
    {
      id: 1,
      title: "Google-Friendly Structure",
      description: "Designed for better indexing and search rankings.",
      imageUrl: SEOImage1
    },
    {
      id: 2,
      title: "Speed-Optimized Pages ",
      description: "Faster loading for better user experience and conversions.",
             imageUrl: SEOImage2
    },
    {
      id: 3,
      title: "Schema Markup Integration",
      description: "Enhancing visibility in search results.",
      imageUrl: SEOImage3
    },
    {
      id: 4,
      title: "Technical SEO Best Practices",
      description: "Ensuring proper meta tags, sitemaps, and indexing.",
      imageUrl: SEOImage5
    },
    {
      id: 5,
      title: "Content Optimization",
      description: "Strategically placed keywords for better rankings.",
      imageUrl: SEOImage6
    },
    {
      id: 6,
      title: "SEO-Focused Blog Integration",
      description: "Helping businesses build authority and traffic.",
      imageUrl: SEOImage4
    },
   
  ];
  // Handle next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Go to a specific slide
  const goToSlide = (index : any ) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Main carousel container */}
      <div className="relative h-96">
        {/* Carousel slides */}
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm mb-8">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel1;