import { Swiper, SwiperSlide } from 'swiper/react';

// importações necessárias da Biblioteca do Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// imagem que irá no carrossel doscolaboradores do projeto
import collaborate1 from "../../assets/collaborate1.png";
import collaborate2 from "../../assets/collaborate2.png";
import collaborate3 from "../../assets/collaborate3.png";
import collaborate4 from "../../assets/collaborate4.png";


export default function Carousel() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{clickable: true}}
      navigation
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> 
        <a href='https://www.espiralds.com/sofia'>
          <img src={collaborate1} />
        </a> 
      </SwiperSlide>
      <SwiperSlide> <img src={collaborate2} /></SwiperSlide>
      <SwiperSlide> <img src={collaborate3} /></SwiperSlide>
      <SwiperSlide> <img src={collaborate4} /></SwiperSlide>
    </Swiper>
  )
}