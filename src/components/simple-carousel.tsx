"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  dataAiHint?: string;
}

interface SimpleCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export default function SimpleCarousel({ images, autoPlayInterval = 5000 }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    if (autoPlayInterval) {
      const timer = setTimeout(goToNext, autoPlayInterval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, goToNext, autoPlayInterval]);

  if (!images || images.length === 0) {
    return <div className="text-center py-10">No images to display.</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden group">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
            data-ai-hint={image.dataAiHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              {image.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fadeIn" style={{animationDelay: '0.4s'}}>
              {image.subtitle}
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-fadeIn"
              style={{animationDelay: '0.6s'}}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Projects
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
