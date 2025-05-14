import React, { useRef, useState, useEffect } from 'react';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCarouselProps {
  features: Feature[];
  title?: string;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

const FeatureCarousel = ({
  features,
  title = "Features",
  cardWidth = 340,
  cardHeight = 320,
  className = ""
}: FeatureCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.clientWidth);
        setIsMobile(window.innerWidth <= 768);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  const gap = isMobile ? 16 : 32;
  const mobileCardWidth = containerWidth - (gap * 2);
  const actualCardWidth = isMobile ? mobileCardWidth : cardWidth;
  const actualCardHeight = isMobile ? 280 : cardHeight;
  const visibleWidth = containerWidth - (gap * 2);
  const maxVisibleCards = Math.floor(visibleWidth / (actualCardWidth + gap));
  const totalScrollWidth = features.length * (actualCardWidth + gap) - gap;
  const maxScrollDistance = totalScrollWidth - visibleWidth;
  
  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = actualCardWidth + gap;
    const currentScroll = currentIndex * scrollAmount;

    if (direction === 'left') {
      const newScroll = Math.max(0, currentScroll - scrollAmount);
      setCurrentIndex(Math.floor(newScroll / scrollAmount));
    } else {
      const newScroll = Math.min(maxScrollDistance, currentScroll + scrollAmount);
      setCurrentIndex(Math.floor(newScroll / scrollAmount));
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex * (actualCardWidth + gap) < maxScrollDistance;

  return (
    <div className={`relative px-4 sm:px-8 py-8 sm:py-12 ${className}`}>
      {title && (
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">{title}</h3>
      )}
      <div 
        ref={scrollContainerRef}
        className="relative max-w-[1500px] mx-auto overflow-hidden px-2 sm:px-4"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4 sm:gap-8"
          style={{
            transform: `translateX(-${currentIndex * (actualCardWidth + gap)}px)`,
            width: `${totalScrollWidth}px`,
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden flex-shrink-0"
              style={{ width: actualCardWidth, height: actualCardHeight }}
            >
              <div
                style={{ 
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40" />
              <div className="relative p-4 sm:p-6 flex flex-col justify-start h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white z-10 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white z-10 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureCarousel;