import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center py-5'>
      <div className='flex items-center justify-center gap-3'>
        <Image src="/images/logo.svg" alt="logo" width={20} height={20}/>
        <p className='text-2xl font-semibold'>Landwind</p>
      </div>
      <div className='flex items-center justify-center gap-10'>
        <p className='text-base font-medium'>Company</p>
        <p className='text-base font-medium'>Marketplace</p>
        <p className='text-base font-medium'>Features</p>
        <p className='text-base font-medium'>Team</p>
        <p className='text-base font-medium'>Contact</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <a href='#' className='text-sm font-medium '>Log in</a>
        <button className='bg-purple-600 text-white text-sm font-medium rounded-md py-2 px-3'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar