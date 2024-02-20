"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const logoPaths = [
  "/images/Google.svg",
  "/images/Microsoft.svg",
  "/images/Spotify.svg",
  "/images/Mailchimp.svg",
  "/images/Airbnb.svg",
  "/images/uber.svg",
];

const CustomerLogos = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {logoPaths.map((logoPath) => (
            <SwiperSlide className="w-full flex flex-row justify-between items-center pb-10">
              <Image
                key={logoPath}
                src={logoPath}
                alt="Customer logo"
                width={100}
                height={55}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CustomerLogos;
