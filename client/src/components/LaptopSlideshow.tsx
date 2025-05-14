import React, { useState, useEffect } from 'react';

interface LaptopSlideshowProps {
  images: string[]; // Array of image paths
  interval?: number; // Time between transitions in ms (default: 3000ms)
}

const LaptopSlideshow: React.FC<LaptopSlideshowProps> = ({ 
  images, 
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Skip the effect if there are no images
    if (images.length === 0) return;

    // Set up the interval for changing images
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images, interval]);

  // If there are no images, don't render anything
  if (images.length === 0) return null;

  return (
    <div className="relative max-w-2xl mx-auto mb-16 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Laptop display ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default LaptopSlideshow;