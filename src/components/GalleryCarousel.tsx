"use client";
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ["/assets/gallery1.jpg", "/assets/gallery2.jpg", "/assets/gallery3.jpg", "/assets/gallery4.jpg"];

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "center" },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return (
    <div className="relative group max-w-full overflow-hidden py-10">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 md:-ml-8">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-4 md:pl-8 relative">
              <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-lg">
                <Image src={src} alt={`Photo ${index + 1}`} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, 30vw" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollPrev} className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg md:opacity-0 group-hover:opacity-100 transition-opacity z-20" aria-label="Précédent">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={scrollNext} className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg md:opacity-0 group-hover:opacity-100 transition-opacity z-20" aria-label="Suivant">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
