import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import palm from "../../src/Images/palm.jpeg"
import pell from "../../src/Images/pell.jpeg"
import pine from "../../src/Images/pine.jpeg"
import pizy from "../../src/Images/pizy.jpeg"
import poll from "../../src/Images/poll.jpeg"
import power from "../../src/Images/power.jpeg"
import price from "../../src/Images/price.jpeg"
import pulet from "../../src/Images/pulet.jpeg"
import puzzy from "../../src/Images/puzzy.jpeg"
import pwo from "../../src/Images/pwo.jpeg"
import pynet from "../../src/Images/pynet.jpeg"
import  'swiper/swiper-bundle.css';


export default function Slider(){
    return(
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
  
      >
        <SwiperSlide><img src={palm}/></SwiperSlide>
        <SwiperSlide><img src={pell}/></SwiperSlide>
        <SwiperSlide><img src={pine}/></SwiperSlide>
        <SwiperSlide><img src={pizy}/></SwiperSlide>
        <SwiperSlide><img src={poll}/></SwiperSlide>
        <SwiperSlide><img src={power}/></SwiperSlide>
        <SwiperSlide><img src={pwo}/></SwiperSlide>
        <SwiperSlide><img src={pynet}/></SwiperSlide>
        <SwiperSlide><img src={price}/></SwiperSlide>
        <SwiperSlide><img src={pulet}/></SwiperSlide>
        <SwiperSlide><img src={puzzy}/></SwiperSlide>
      </Swiper>
     
    )
}