"use client";

import { useState, useEffect, useCallback } from 'react';
import TestimonialCard from '@/components/testimonial-card';
import { placeholderTestimonials } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/types';

const AUTOPLAY_INTERVAL = 7000; // 7 seconds

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = placeholderTestimonials;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (testimonials.length <= 1) return; // No autoplay for single or no testimonials

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [handleNext, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="section-padding bg-secondary">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our valued clients have to say about their experience with EstateView.
            </p>
          </div>
          <p className="text-center text-muted-foreground">No testimonials to display yet.</p>
        </div>
      </section>
    );
  }
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with EstateView.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            {/* Apply a key to TestimonialCard to force re-render on change for animations */}
            <TestimonialCard key={currentTestimonial.id} testimonial={currentTestimonial} />
          </div>

          {testimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 transform transition-all hover:scale-110"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 transform transition-all hover:scale-110"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                  ${currentIndex === index ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground/50'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
