'use client';
import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const disablePrev = currentSlide === 0;
  const disableNext = currentSlide === images.length - 1;

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        className="relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="rounded-lg object-cover"
                height={1200}
                width={400}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
          <button
            ref={navigationPrevRef}
            className={`pointer-events-auto absolute left-2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-colors ${
              disablePrev ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={disablePrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            ref={navigationNextRef}
            className={`pointer-events-auto absolute right-2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-colors ${
              disableNext ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={disableNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </Swiper>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
