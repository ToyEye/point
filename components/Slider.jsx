"use client";

import React, { useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import Heading from "./reusable/Heading";
import Modal from "./reusable/Modal";

const Slider = ({ data }) => {
  const [isModalShow, setIsModalShow] = useState(null);

  const handleOnClick = (modalData) => {
    setIsModalShow(modalData);
  };

  const handleCloseModal = () => {
    setIsModalShow(null);
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      loop={true}
    >
      {data?.map(({ _id, photo, name, withProject }) => {
        return (
          <SwiperSlide
            key={_id}
            className="cursor-pointer "
            onClick={() => handleOnClick({ photo, name })}
          >
            {/* <Image
                src={photo}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
              /> */}

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

      {isModalShow && (
        <Modal modalData={isModalShow} handleCloseModal={handleCloseModal} />
      )}
    </Swiper>
  );
};

export default Slider;
