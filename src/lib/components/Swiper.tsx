/* eslint-disable @next/next/no-img-element */

'use client';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      navigation
      slidesPerView={1}
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
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
            alt="Collaborate 2"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
