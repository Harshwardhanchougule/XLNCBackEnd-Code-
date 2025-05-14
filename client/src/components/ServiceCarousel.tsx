import React, { useRef, useState, useEffect } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServiceCarouselProps {
  services: ServiceItem[];
}

const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxVisibleCards, setMaxVisibleCards] = useState(1);

  useEffect(() => {
    const updateMaxVisibleCards = () => {
      const containerWidth = scrollContainerRef.current?.clientWidth || 0;
      const cardWidth = 400; // Width of each card
      const gap = 32; // Gap between cards
      const visibleCards = Math.floor((containerWidth + gap) / (cardWidth + gap));
      setMaxVisibleCards(visibleCards);
    };

    updateMaxVisibleCards();
    window.addEventListener('resize', updateMaxVisibleCards);
    return () => window.removeEventListener('resize', updateMaxVisibleCards);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(
        services.length - maxVisibleCards,
        currentIndex + 1
      ));
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < services.length - maxVisibleCards;

  return (
    <div className="relative px-8 py-12 overflow-hidden">
      <div 
        ref={scrollContainerRef} 
        className="relative max-w-[1400px] mx-auto"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out gap-8"
          style={{
            transform: `translateX(-${currentIndex * (400 + 32)}px)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden h-96 w-[400px] flex-shrink-0"
            >
              <div
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%'
                }}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />
              <div className="relative p-6 flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-10 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-10 transition-all duration-300 ${
          !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
        disabled={!canScrollLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll('right')}
        className={`absolute right-10 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-10 transition-all duration-300 ${
          !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
        disabled={!canScrollRight}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCarousel;