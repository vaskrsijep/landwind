import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='bg-gray-50 px-4 py-24 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto flex flex-col items-center justify-center gap-7'>
        <Quote className='w-8 h-8 text-gray-500'/>
        <p className='leading-relaxed text-2xl font-semibold text-center'>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
        <div className='flex items-center justify-center gap-3'>
          <Image src="/images/Avatar.png" alt="avatar" width={24} height={24} className='rounded-full'/>
          <p className='leading-tight text-base font-semibold text-gray-900'>Micheal Gough</p> / 
          <p className='leading-tight text-sm font-normal text-gray-500'>CEO at Google</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials