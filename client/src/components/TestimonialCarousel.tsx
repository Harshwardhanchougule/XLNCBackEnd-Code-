import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

// Define interfaces for type safety
interface Testimonial {
  quote: string;
  author: string;
  rating?: number;
  company?: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoPlay = false,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  // Auto-play effect if enabled
  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  return (
    <Card className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 text-white border-none shadow-lg w-[85vw] mx-auto rounded-xl">
      <CardContent className="p-4 md:p-4 flex flex-col items-center">
        {/* Star Rating with reduced padding */}
        <div className="flex justify-center mb-4 mt-2">
          {Array(testimonials[currentIndex].rating ?? 5).fill(0).map((_, i) => (
            <Star
              key={i}
              className="text-amber-500 fill-amber-500 mx-0.5"
              size={20}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Testimonial Quote with reduced text size */}
        <blockquote className="text-center text-lg md:text-xl mb-4 font-medium">
          {testimonials[currentIndex].quote}
        </blockquote>

        {/* Author Name and Company with reduced text size */}
        <div className="text-base font-semibold mb-3 text-center w-full">
          <span className="block">{testimonials[currentIndex].author}</span>
          {testimonials[currentIndex].company && (
            <span className="block mt-1">
              {testimonials[currentIndex].company}
            </span>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex space-x-2 mb-2" role="navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`inline-block h-2 w-2 rounded-full cursor-pointer transition-colors ${i === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex ? 'true' : 'false'}
              type="button"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCarousel;