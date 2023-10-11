"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={50}
      modules={[Navigation, Pagination]}
      className="mb-4 "
    >
      {data.map(({ id, imageUrl, description }) => {
        return (
          <SwiperSlide key={id}>
            <Link href={`/portfolio/${id}`}>
              <img src={imageUrl} alt={description} width={600} height={400} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
