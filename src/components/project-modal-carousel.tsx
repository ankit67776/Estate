"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalCarouselProps {
  images: string[];
  projectName: string;
}

export default function ProjectModalCarousel({ images, projectName }: ProjectModalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div className="text-center py-10">No images available for this project.</div>;
  }
  
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden group rounded-lg">
       {images.map((src, index) => (
        <div
          key={`${projectName}-image-${index}`}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`${projectName} - Image ${index + 1}`}
            fill
            className="object-cover"
            sizes="80vw"
            data-ai-hint="project image"
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 hover:text-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 hover:text-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-white/60 hover:bg-white/90'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
