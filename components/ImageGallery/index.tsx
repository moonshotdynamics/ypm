import React, {FC} from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className=" relative">
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
      <button className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-1 rounded-full shadow-md hover:bg-opacity-75 transition-colors">
        <ChevronLeft className="w-4 h-4 text-gray-800" />
      </button>
      <button className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-1 rounded-full shadow-md hover:bg-opacity-75 transition-colors">
        <ChevronRight className="w-4 h-4 text-gray-800" />
      </button>
    </div>
  );
};

export default ImageGallery;
