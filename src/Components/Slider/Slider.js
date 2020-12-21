import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCoverflow, EffectCube, EffectFlip, Autoplay]);

const Slider = () => {
 const slide = []
 for (let i = 1; i <= 5; i++) {
  slide.push(
   <SwiperSlide key={`slides-${i + 1}`}
    tag="li"
    zoom={true}
   >
    <img className="slider-img" src={`https://picsum.photos/id/${i + 1}/1300/300`} alt={`slide-${i + 1}`} />
   </SwiperSlide>
  )
 }

 return (
  <Swiper
   navigation
   effect="coverflow"
   wrapperTag="ul"
   autoplay={true}
   spaceBetween={10}
   slidesPerView={1}
   onSlideChange={() => console.log('')}
   onSwiper={(swiper) => console.log()}
  >
   {slide}
  </Swiper>
 )
}

export default Slider
