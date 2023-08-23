"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProjectCard from './ProjectCard';
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";

const Projects = () => {
  return (
    <div className='p-16'>
    <Swiper
        className='p-28'
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation={true}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
      mousewheel={true}
      pagination={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
      <SwiperSlide ><ProjectCard/></SwiperSlide>
    
    </Swiper>
    </div>
  )
}

export default Projects
