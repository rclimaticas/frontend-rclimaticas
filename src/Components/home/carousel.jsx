import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import { AccountSettingsContext } from '../context/AccountSettingsContext';
import { Link } from "react-router-dom";

// importações necessárias da Biblioteca do Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// imagem que irá no carrossel dos colaboradores do projeto
import collaborate1 from '../../assets/collaborate1.png';
import collaborate2 from '../../assets/collaborate2.png';
import collaborate3 from '../../assets/collaborate3.png';
import collaborate4 from '../../assets/collaborate4.png';


export default function Carousel() {
  const { auth } = useContext(AccountSettingsContext);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
      navigation
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <a
          target="_blank"
          rel="noopener noreferrer"
          to={'https://www.espiralds.com/sofia'}
        >
          <img src={"https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"} alt="Collaborate 1" />
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/ondefoi"
        >
          <img src={collaborate2} alt="Collaborate 2" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/datarc"
        >
          <img src={collaborate3} alt="Collaborate 3" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/ligacolaborativa"
        >
          <img src={collaborate4} alt="Collaborate 4" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
