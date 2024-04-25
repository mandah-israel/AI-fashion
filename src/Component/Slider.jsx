import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import come from "../../src/Images/come.jpeg"
import plut from "../../src/Images/plut.jpeg"
import save from "../../src/Images/save.jpeg"
import cull from "../../src/Images/cull.jpeg"
import slap from "../../src/Images/slap.jpeg"
import vat from "../../src/Images/vat.jpeg"
import vot from "../../src/Images/vot.jpeg"
import ivory from "../../src/Images/ivory.jpeg"
import vin from "../../src/Images/vin.jpeg"
import vop from "../../src/Images/vop.jpeg"
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
        <SwiperSlide><img src={come}/></SwiperSlide>
        <SwiperSlide><img src={plut}/></SwiperSlide>
        <SwiperSlide><img src={save}/></SwiperSlide>
        <SwiperSlide><img src={cull}/></SwiperSlide>
        <SwiperSlide><img src={slap}/></SwiperSlide>
        <SwiperSlide><img src={vot}/></SwiperSlide>
        <SwiperSlide><img src={vat}/></SwiperSlide>
        <SwiperSlide><img src={vop}/></SwiperSlide>
        <SwiperSlide><img src={vin}/></SwiperSlide>
        <SwiperSlide><img src={ivory}/></SwiperSlide>
      </Swiper>
     
    )
}