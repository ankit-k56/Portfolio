"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/data";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";

const Projects = () => {
  return (
    <div id="projects" className="p-3 py-16 md:p-16 bg-[#151516]">
      <h1 className="pl-10 md:pl-0 py-6 text-3xl sm:text-3xl">
        My <span className="text-4xl text-emerald-500"> Projects</span>
      </h1>
      <Swiper
        className="p-28"
        spaceBetween={10}
        autoplay={{
          delay: 5500,
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
        {PROJECTS.map((project: any, index) => {
          return (
            <SwiperSlide
              // className="flex justify-between items-center"
              key={index}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                github={project.github}
                link={project.link}
                image={project.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Projects;
