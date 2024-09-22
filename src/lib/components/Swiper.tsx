'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMdScreen(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMdScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      navigation={isMdScreen}
      slidesPerView={1}
    >
      <SwiperSlide>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.espiralds.com/sofia"
        >
          <Image
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
            alt="Collaborate 1"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a target="_blank" rel="noopener noreferrer" href="/ondefoi">
          <Image
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
            alt="Collaborate 2"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
