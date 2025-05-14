import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SEO_Pointer_Img1 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Advanced SEO Enhancements.jpg";
import SEO_Pointer_Img2 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Comprehensive Website Audit & Optimization.jpg";
import SEO_Pointer_Img3 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Google My Business & Local Listings Optimization.jpg";
import SEO_Pointer_Img4 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Reputation & Local SEO Strategy.jpg";
import SEO_Pointer_Img5 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/SEO-Optimized Content & Blog Writing.jpg";
import SEO_Pointer_Img6 from "@/images/SEO-Optimized Web Designs/SEO-Pointers/Speed, Security & Mobile Optimization.jpg";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselItems = [
    {
      id: 1,
      title: "Comprehensive Website Audit & Optimization",
      description: "Identify and fix technical issues, improve indexing, and enhance site structure.",
      imageUrl: SEO_Pointer_Img2
    },
    {
      id: 2,
      title: "Speed, Security & Mobile Optimization",
      description: "Boost loading times, enhance security with HTTPS, and ensure a mobile-friendly experience.",
             imageUrl: SEO_Pointer_Img6
    },
    {
      id: 3,
      title: "Advanced SEO Enhancements",
      description: "Leverage structured data, schema markup, and Core Web Vitals optimization.",
      imageUrl: SEO_Pointer_Img1
    },
    {
      id: 4,
      title: "Google My Business & Local Listings Optimization",
      description: "Improve visibility with a fully optimized GMB profile and accurate business listings.",
      imageUrl: SEO_Pointer_Img3
    },
    {
      id: 5,
      title: "Reputation & Local SEO Strategy",
      description: "Strengthen credibility with reviews, NAP consistency, and geo-targeted keywords.",
      imageUrl: SEO_Pointer_Img4
    },
    {
      id: 6,
      title: "Enhanced Local Visibility & Link Building",
      description: "Boost rankings with local backlinks and Google Maps optimization.",
      imageUrl: SEO_Pointer_Img4
    },
    {
      id: 7,
      title: "SEO-Optimized Content & Blog Writing",
      description: "Create high-quality, keyword-rich content to attract organic traffic.",
      imageUrl: SEO_Pointer_Img5
    },
    {
      id: 8,
      title: "Conversion-Focused Product & Website Content",
      description: "Engage visitors with compelling landing pages and optimized product descriptions.",
      imageUrl: SEO_Pointer_Img5
    },
    {
      id: 9,
      title: "Authority Building & Content Strategy",
      description: "Increase credibility with guest blogging, press releases, and a data-driven content plan.",
      imageUrl: SEO_Pointer_Img2
    }
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
              <p className="text-sm pb-8">{item.description}</p>
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

export default ImageCarousel;