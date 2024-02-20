import React from 'react'

const CTA = () => {
  return (
    <div className='bg-gray-50 rounded-md text-center py-20 flex items-center justify-center flex-col gap-7 shadow-lg my-20' >
      <h2 className='leading-tight text-4xl font-extrabold'>Start your free trial today</h2>
      <p className='font-normal text-gray-500 text-xl'>Try Flowbite Platform for 30 days. No credit card required.</p>
      <button className='bg-purple-600 text-white text-sm font-medium rounded-md py-2 px-3'>Free trial for 30 days</button>
    </div>
  )
}

export default CTA