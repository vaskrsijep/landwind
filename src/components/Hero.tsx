import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex sm:flex-row flex-col items-center justify-between sm:py-20 py-10 gap-10'>
      <div className='flex flex-col gap-8'>
        <h1 className='leading-none text-6xl font-black text-gray-900'>Building digital products & brands.</h1>
        <p className='text-xl text-gray-500 font-normal'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className='flex gap-4'>
          <button className='bg-purple-600 text-white text-sm font-normal rounded-md py-2 px-3'>Start 30 day free trial</button>
          <button className='bg-secondary text-gray-900 text-sm font-medium rounded-md py-2 px-3 border border-1'>Pricing & FAQ</button>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <Image src="/images/marketing-strategy1.png" alt="hero" className='flex items-center justify-center' width={530} height={500}/>
      </div>
    </div>
  )
}

export default Hero