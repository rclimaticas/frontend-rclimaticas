/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useEffect } from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CarouselComponent() {
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
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      loop
      pagination={{ clickable: true }}
      navigation={isMdScreen}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.espiralds.com/sofia"
        >
          <img
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
            alt="Collaborate 1"
          />
        </a>
        {/* {auth ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.espiralds.com/sofia'}
          >
            <img src={collaborate1} alt="Collaborate 1" />
          </a>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'/sofia'}
          >
            <img src={collaborate1} alt="Collaborate 1" />
          </a>
        )} */}
      </SwiperSlide>
      <SwiperSlide>
        <a target="_blank" rel="noopener noreferrer" href="/ondefoi">
          <img
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate2.png"
            alt="Collaborate 2"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a target="_blank" rel="noopener noreferrer" href="/datarc">
          <img
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate3.png"
            alt="Collaborate 2"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a target="_blank" rel="noopener noreferrer" href="/ligacolaborativa">
          <img
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate4.png"
            alt="Collaborate 2"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
