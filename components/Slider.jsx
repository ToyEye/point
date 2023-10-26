"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {data?.map(({ _id, photo, name, withProject }) => {
        return (
          <SwiperSlide key={_id}>
            {/* <Image
                src={photo}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
              /> */}
            <Heading tag="h2" text={name} className="text-center mb-3" />
            <img
              src={photo}
              alt={name}
              width={600}
              height={400}
              className="mb-4"
            />
            <Link
              href={`/portfolio/${withProject}`}
              className="mx-auto block border w-1/2 text-center rounded-md py-2"
            >
              Look project
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
