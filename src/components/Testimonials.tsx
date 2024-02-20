"use client"
import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css"


const tests = [
  {
    name: "Micheal Gough",
    role: "CEO at Google",
    image: "/images/Avatar.png",
    content: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "Victoria C.",
    role: "CEO at Landwind",
    image: "/images/Avatar.png",
    content: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "Adam C.",
    role: "CEO at Landwind",
    image: "/images/Avatar.png",
    content: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  }
]
const Testimonials = () => {
  return (
    <div className='bg-gray-50 px-4 py-24 sm:px-6 lg:px-8'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        >
        {tests.map((test, index) => (
          <SwiperSlide key={index}>
            <div className='max-w-4xl mx-auto flex flex-col items-center justify-center gap-7'>
              <Quote className='w-8 h-8 text-gray-500'/>
              <p className='leading-relaxed text-2xl font-semibold text-center'>{test.content}</p>
              <div className='flex items-center justify-center gap-3'>
                <Image src={test.image} alt="avatar" width={24} height={24} className='rounded-full'/>
                <p className='leading-tight text-base font-semibold text-gray-900'>{test.name}</p> / 
                <p className='leading-tight text-sm font-normal text-gray-500'>{test.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
    )
}

export default Testimonials