'use client';
import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, SwiperRef, SwiperProps } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperButtonNextRef = useRef<HTMLButtonElement>(null);
  const swiperButtonPrevRef = useRef<HTMLButtonElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const disablePrev = currentSlide === 0;
  const disableNext = currentSlide === images.length - 1;


  const swiperProps: SwiperProps & React.RefAttributes<SwiperRef> = {
    ref: swiperRef,
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
      nextEl: swiperButtonNextRef.current,
      prevEl: swiperButtonPrevRef.current,
    },
    onSlideChange: (swiper) => setCurrentSlide(swiper.activeIndex),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper {...swiperProps}>
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
      </Swiper>
      <button
        className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-1 rounded-full shadow-md hover:bg-opacity-75 transition-colors"
        disabled={disablePrev}
        ref={swiperButtonPrevRef}
      >
        <ChevronLeft className="w-4 h-4 text-gray-800" />
      </button>
      <button
        className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-1 rounded-full shadow-md hover:bg-opacity-75 transition-colors"
        disabled={disableNext}
        ref={swiperButtonNextRef}
      >
        <ChevronRight className="w-4 h-4 text-gray-800" />
      </button>
    </div>
  );
};

export default ImageGallery;
